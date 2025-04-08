import { Injectable } from '@nestjs/common';
import { 
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

@Injectable()
export class FacturaService {

  constructor(private conceptoFacturaService: ConceptoFacturaService) {}

  async create(createFacturaInput: CreateFacturaInput): Promise<Factura> {
    
    const prismaCreateInput = {
      data: {
        estatus: EstatusFactura.CREADA,
      }
    };
    
    try {
      // if it is related to an evento
      let evento = createFacturaInput.evento;
      if(evento) {
        prismaCreateInput.data['evento'] = {
          create: {
            nombreCliente: evento?.nombreCliente,
            estatus: EstatusEvento.EN_PROGRESO,
            estacionId: evento?.estacionId
          }
        }
      }

      // get Conceptos from Factura (if any)
      let conceptosFactura;
      if(createFacturaInput.conceptos) {
        conceptosFactura = await this.conceptoFacturaService.createNewForFactura(createFacturaInput.conceptos);
        prismaCreateInput.data['conceptos'] =  {
          create: conceptosFactura
        }
      } else {
        conceptosFactura = [];
      }

      // based on ConceptosFactura, get their sum and total for Factura
      prismaCreateInput.data['total'] = this.conceptoFacturaService.getTotal(conceptosFactura);

      // create Factura & Evento & ConceptosFactura 
      const createFacturaPayload = await prisma.factura.create({
        ...prismaCreateInput,
        include: { 
          conceptos: true, 
          evento: { 
            include: { 
              estacion: true 
            } 
          } 
        }
      });

      return plainToClass(Factura, createFacturaPayload)
      
    }catch (e) {
      console.error(`Error creating Factura ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async findAll() {
    return await prisma.factura.findMany();
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
}
