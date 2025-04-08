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
import e from 'express';

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

  async findAll() {
    try {
      const facturas = await prisma.factura.findMany({include: {evento: true}});
      return facturas;
    } catch (error) {
      console.error(`Error reading Facturas ${e}`);
      throw new Error("Error reading entities");
    }
  }

  async findOne(id: string) {
    try {
      const factura = await prisma.factura.findUnique({
        where: {
          id,
        }, 
        include: {
          evento: true
        }
      });
      return plainToClass(Factura, factura);
    } catch (e) {
      console.error(`Error reading Factura ${e}`);
      throw new Error("Error reading entity");
    }
  }

  update(id: string, updateFacturaInput: UpdateFacturaInput) {
    return `This action updates a #${id} factura`;
  }

  remove(id: string) {
    return `This action removes a #${id} factura`;
  }
}
