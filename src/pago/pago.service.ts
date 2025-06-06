import { Injectable } from '@nestjs/common';
import { EstatusFactura, EstatusPago } from '@prisma/client';
import { plainToClass } from 'class-transformer';
import { prisma } from 'prisma/client';
import { EstacionService } from 'src/estacion/estacion.service';
import { EventoService } from 'src/evento/evento.service';
import { FacturaService } from 'src/factura/factura.service';
import { 
  EstatusEvento,
  Factura,
  Pago,
  RealizarPagoInput,
  UpdatePagoInput
} from 'src/graphql';

@Injectable()
export class PagoService {

  constructor(
    private eventoService: EventoService,
    private estacionService: EstacionService,
    private facturaService: FacturaService
  ) {}
  
  async realizarPago(realizarPagoInput: RealizarPagoInput) {

    const {metodoPago, montoRecibido, montoDevuelto, facturaId} = realizarPagoInput;

    try{
      // si hay Productos, restar el producto del inventario
      // Estacion disponible
      // Evento PAGADO
      // Factura PAGADA
      // Registrar Pago

      const realizarPagoPayload = await prisma.$transaction(async (tx)=>{

        const newPago = await prisma.pago.create({
          data: {
            metodoPago: metodoPago,
            montoRecibido: montoRecibido,
            montoDevuelto: montoDevuelto??0,
            estatus: EstatusPago.REALIZADO,
            factura: {
              connect: {
                id: facturaId
              }
            }
          }
        });

        const facturaPayload = await this.facturaService.terminate(facturaId, {
          include: {
            evento: {
              include: { estacion: true }
            }
          }
        });

        const factura = plainToClass(Factura, facturaPayload);

        newPago['factura'] = factura;

        let evento = factura?.evento;

        if(evento) {
          this.eventoService.setEstatus(evento.id, EstatusEvento.PAGADO);
          this.estacionService.makeAvailable(evento.estacion.id);
        }

        return newPago;
      });

      return plainToClass(Pago, realizarPagoPayload);
    } catch(e) {

    }
  }

  findAll() {
    return `This action returns all pago`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pago`;
  }

  update(id: string, updatePagoInput: UpdatePagoInput) {
    return `This action updates a #${id} pago`;
  }

  remove(id: string) {
    return `This action removes a #${id} pago`;
  }
}
