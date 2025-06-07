import { Injectable } from '@nestjs/common';
import { 
  ConceptoFactura,
  CreateConceptoFacturaInput,
  UpdateConceptoFacturaInput
} from 'src/graphql';
import { ProductoService } from 'src/producto/producto.service';
import { ServicioService } from 'src/servicio/servicio.service';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';
import { Prisma } from '@prisma/client';


@Injectable()
export class ConceptoFacturaService {

  constructor(
    private productoService: ProductoService,
    private servicioService: ServicioService
  ) {}

  async create(createConceptoFacturaInput: CreateConceptoFacturaInput) {

    const {facturaId} = createConceptoFacturaInput;

    let createInput = await this.createNewForFactura(createConceptoFacturaInput);

    try {
      let createConceptoFacturaPayload = await prisma.conceptoFactura.create({
        data: {
          factura: {
            connect: {
              id: facturaId
            }
          },
          ...createInput
        },
        include: {
          producto: true,
          servicio: true
        }
      });
  
      return plainToClass(ConceptoFactura, createConceptoFacturaPayload);
    } catch(e) {
      console.error(`Error creating ConceptoFactura ${e}`);
      throw new Error("Error creating entity");
    }
    
  }

  async findAllFromFactura(facturaId: string) {
    return await prisma.conceptoFactura.findMany({
      where: {
        facturaId: facturaId
      },
      include: {producto: true, servicio: true}
    });
  }

  findOne(id: string) {
    return `This action returns a #${id} conceptoFactura`;
  }

  update(id: string, updateConceptoFacturaInput: UpdateConceptoFacturaInput) {
    return null;
  }

  async remove(id: string) {
    return await prisma.conceptoFactura.delete({
      where: {
        id: id
      }
    });
  }

  getTotal(conceptosFactura: any[]): number {
    return conceptosFactura.reduce(
      (sum, currentCF: ConceptoFactura) => sum + currentCF.total, 0
    )
  }

  async createMultipleNewForFactura(conceptosFactura: CreateConceptoFacturaInput[]) {
    return await Promise.all(
      conceptosFactura.map(this.createNewForFactura)
    );
  }

  async createNewForFactura(conceptoFactura: CreateConceptoFacturaInput): Promise<
    Omit<Prisma.ConceptoFacturaCreateInput, 'factura'>
  > {
    
    let {cantidad, productoId, servicioId, servicio} = conceptoFactura;
    let precio;

    const newConceptoFactura = {
      cantidad: cantidad,
      total: 0,
    }

    if(productoId!=""&&productoId) {
      const producto = await this.productoService.findOne(productoId??"");
      precio = producto?.precioPublico;
      newConceptoFactura['producto'] = {
        connect: {
          id: producto?.id
        }
      }
    } 

    if(servicioId!=""&&servicioId) {
      const servicio = await this.servicioService.findOne(servicioId??"");
      precio = servicio?.precio;
      newConceptoFactura['servicio'] = {
        connect: {
          id: servicio?.id
        }
      }
    }

    if(servicio) {
      const newServicio = await this.servicioService.create(servicio);
      precio = newServicio.precio;
      newConceptoFactura['servicio'] = {
        connect: {
          id: newServicio.id
        }
      }
    }

    newConceptoFactura.total = precio * cantidad
    
    return newConceptoFactura;
  }
}
