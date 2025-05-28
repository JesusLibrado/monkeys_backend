import { Injectable } from '@nestjs/common';
import { 
  CreateEventoInput,
  CreateFacturaInput,
  EstatusEvento,
  EstatusFactura,
  Factura,
  UpdateFacturaInput
 } from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';
import { ConceptoFacturaService } from 'src/concepto-factura/concepto-factura.service';
import { Nullable } from 'src/common/types';
import { EstatusPago, Prisma } from '@prisma/client';

@Injectable()
export class FacturaService {

  constructor(private conceptoFacturaService: ConceptoFacturaService) {}

  async create(createFacturaInput: CreateFacturaInput): Promise<Factura> {
    
    const prismaCreateInput: Prisma.FacturaCreateInput = {
      estatus: EstatusFactura.CREADA
    };

    // if it is related to an Evento
    const evento: Nullable<CreateEventoInput> = createFacturaInput.evento;
    if(evento) {
      prismaCreateInput['evento'] = {
        create: {
          nombreCliente: evento?.nombreCliente,
          estatus: EstatusEvento.EN_PROGRESO,
          estacionId: evento?.estacionId
        }
      }
    }

    // // get Conceptos from Factura (if any)
    // let conceptosFactura;
    // if(createFacturaInput.conceptos) {
    //   conceptosFactura = await this.conceptoFacturaService.createNewForFactura(createFacturaInput.conceptos);
    //   prismaCreateInput.data['conceptos'] =  {
    //     create: conceptosFactura
    //   }
    // } else {
    //   conceptosFactura = [];
    // }

    // // THIS SHOULD BE CALCULATED AND SAVED WHEN A PAYMENT IS DONE
    // prismaCreateInput.data['total'] = this.conceptoFacturaService.getTotal(conceptosFactura);
    
    try {
      let createFacturaPayload = await prisma.$transaction(async (tx)=>{
        const createFactura = await prisma.factura.create({
          data: {...prismaCreateInput},
          include: { 
            conceptos: true, 
            evento: true
          }
        });

        if(evento){
          // update Estacion... set !disponible
          await prisma.estacion.update({
            where: {
              id: evento.estacionId
            },
            data: {
              disponible: false
            }
          });
        }

        return createFactura;
      });

      return plainToClass(Factura, createFacturaPayload)
      
    }catch (e) {
      console.error(`Error creating Factura ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async findAll() {
    return await prisma.factura.findMany({
      include: {evento: true, conceptos: true, pago: true}
    });
  }

  async findOne(id: string) {
    return await prisma.factura.findUnique({
      where: {
        id: id
      }
    });
  }

  update(id: string, updateFacturaInput: UpdateFacturaInput) {
    return `This action updates a #${id} factura`;
  }

  remove(id: string) {
    return `This action removes a #${id} factura`;
  }

  async cancel(id: string) {
    // Factura estatus CANCELADA
    // Evento estatus CANCELADO
    // Pago estatus CANCELADO
    // Estacion disponible
    try{
      let cancelFacturaPayload = await prisma.$transaction(async (tx)=>{
        const factura = await prisma.factura.update({
          where: {
            id: id
          },
          data: {
            estatus: EstatusFactura.CANCELADA
          },
          include: {
            pago: true,
            conceptos: true,
            evento: { 
              include: {
                estacion: true
              }
            }
          }
        });

        const pagoConnected = factura.pago!==null && factura.pago!==undefined;
        const eventoConnected = factura.evento!==null && factura.evento!==undefined;
  
        if(pagoConnected) {
          const pagoId = factura.pago?.id;
          await prisma.pago.update({
            where: {
              id: pagoId
            },
            data: {
              estatus: EstatusPago.CANCELADO
            }
          })
        }

        if(eventoConnected) {
          const eventoId = factura.evento?.id;
          const estacionId = factura.evento?.estacion.id;
          await prisma.evento.update({
            where: {
              id: eventoId
            },
            data: {
              estatus: EstatusEvento.CANCELADO
            }
          });
          await prisma.estacion.update({
            where: {
              id: estacionId
            },
            data: {
              disponible: true
            }
          });
        }

        return factura;
  
      });

      return plainToClass(Factura, cancelFacturaPayload);

    } catch(e) {
      console.error(`Error cancelling Factura ${e}`);
      throw new Error("Error cancelling entity");
    }

  }
}
