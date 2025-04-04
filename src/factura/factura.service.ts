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
    try {

      // get Conceptos from Factura (if any)
      let conceptosFactura;
      if(createFacturaInput.conceptos) {
        conceptosFactura = await this.conceptoFacturaService.createForNewFactura(createFacturaInput.conceptos);
      } else {
        conceptosFactura = [];
      }

      // based on ConceptosFactura, sum them and get total for Factura
      const totalFactura = this.conceptoFacturaService.getTotal(conceptosFactura);
      
      // create Factura & Evento & ConceptosFactura 
      const createFacturaPayload = await prisma.factura.create({
        data: {
          estatus: EstatusFactura.CREADA,
          total: totalFactura,
          conceptos: {
            create: conceptosFactura
          },
          evento: {
            create: {
              nombreCliente: createFacturaInput.evento?.nombreCliente??"",
              estatus: EstatusEvento.EN_PROGRESO,
              estacionId: createFacturaInput.evento?.estacion?.id??""
            }
          }
        },
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
      console.error(`Error creating Evento ${e}`);
      throw new Error("Error creating entity");
    }
  }

  findAll() {
    return `This action returns all factura`;
  }

  findOne(id: string) {
    return `This action returns a #${id} factura`;
  }

  update(id: string, updateFacturaInput: UpdateFacturaInput) {
    return `This action updates a #${id} factura`;
  }

  remove(id: string) {
    return `This action removes a #${id} factura`;
  }
}
