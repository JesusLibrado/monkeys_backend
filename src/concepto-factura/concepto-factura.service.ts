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
import { objectIsEmtpy } from 'src/common/util';


@Injectable()
export class ConceptoFacturaService {

  constructor(
    private productoService: ProductoService,
    private servicioService: ServicioService
  ) {}

  create(createConceptoFacturaInput: CreateConceptoFacturaInput) {
    return 'This action adds a new conceptoFactura';
  }

  async findAllByFactura(facturaId: string) {
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
    try {

    } catch(e) {
      
    }
  }

  remove(id: string) {
    return `This action removes a #${id} conceptoFactura`;
  }

  getTotal(conceptosFactura: any[]): number {
    return conceptosFactura.reduce(
      (sum, currentCF: ConceptoFactura) => sum + currentCF.total, 0
    )
  }

  async createNewForFactura(conceptosFactura: CreateConceptoFacturaInput[]) {
    return await Promise.all(
      conceptosFactura.map(
        async (conceptoFactura: CreateConceptoFacturaInput)=> {
      
          let {cantidad, productoId, servicioId, servicio} = conceptoFactura;
          let precio;

          if(productoId!="") {
            // add try catch block
            const producto = await this.productoService.findOne(productoId??"");
            precio = producto?.precioPublico;
            return {
              cantidad: cantidad,
              productoId: producto?.id,
              total: precio * cantidad
            }
          }
          if(servicioId!="") {
            // add try catch block
            const newServicio = await this.servicioService.findOne(servicioId??"");
            precio = newServicio?.precio;
            // handle case when servicio is GRECA or OTRO
            // might have to create a new servicio
            return {
              cantidad: cantidad,
              servicioId: newServicio?.id,
              total: precio * cantidad
            }
          }
        }
      )
    );
  }
}
