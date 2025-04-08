import { Injectable } from '@nestjs/common';
import { 
  ConceptoFactura,
  CreateConceptoFacturaInput,
  UpdateConceptoFacturaInput
} from 'src/graphql';

import { objectIsEmtpy } from 'src/common/util';
import { ProductoService } from 'src/producto/producto.service';
import { ServicioService } from 'src/servicio/servicio.service';
import { prisma } from 'prisma/client';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ConceptoFacturaService {

  constructor(
    private productoService: ProductoService,
    private servicioService: ServicioService
  ) {}

  create(createConceptoFacturaInput: CreateConceptoFacturaInput) {
    return 'This action adds a new conceptoFactura';
  }

  async findAll() {
    try {
      const conceptoFacturas = await prisma.conceptoFactura.findMany({include: {factura: true, producto: true, servicio: true}}); 
      return conceptoFacturas;
    } catch (e) {
      console.error(`Error reading conceptoFacturas ${e}`);
      throw new Error("Error reading entities");
    }
  }

  async findOne(id: string) {
    try {
      const conceptoFactura = await prisma.conceptoFactura.findUnique({
        where: {
          id
        },
        include: {
          factura: true,
          producto: true,
          servicio: true
        }
      });
      return plainToClass(ConceptoFactura, conceptoFactura);
    } catch (e) {
      console.error(`Error reading conceptoFactura  ${e}`);
      throw new Error("Error reading entity");
    }
  }

  update(id: string, updateConceptoFacturaInput: UpdateConceptoFacturaInput) {
    return `This action updates a #${id} conceptoFactura`;
  }

  remove(id: string) {
    return `This action removes a #${id} conceptoFactura`;
  }

  getTotal(conceptosFactura: []): number {
    return conceptosFactura.reduce(
      (sum, currentCF: ConceptoFactura) => sum + currentCF.total, 0
    )
  }

  async createForNewFactura(conceptosFactura: CreateConceptoFacturaInput[]) {
    return await Promise.all(
      conceptosFactura.map(
        async (conceptoFactura: CreateConceptoFacturaInput)=> {
      
          let {cantidad, producto, servicio} = conceptoFactura;
          let newServicio, precio;

          if(producto) {
            producto = await this.productoService.findOne(producto.id);
            precio = producto?.precioPublico;
            return {
              cantidad: cantidad,
              productoId: producto?.id,
              total: precio * cantidad
            }
          }
          if(servicio) {
            newServicio = await this.servicioService.findOne(servicio.id);
            precio = newServicio.precio;
            // handle case when servicio is GRECA or OTRO
            // might have to create a new servicio
            return {
              cantidad: cantidad,
              servicioId: servicio?newServicio.id:undefined,
              total: precio * cantidad
            }
          }
        }
      )
    );
  }
}
