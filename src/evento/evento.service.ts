import { Injectable } from '@nestjs/common';
import { prisma } from 'prisma/client';
import { 
  CreateEventoInput,
  UpdateEventoInput,
  EstatusEvento,
  CreateConceptoFacturaInput,
  EstatusFactura,
  CreateFacturaInput,
  Evento
} from 'src/graphql';

@Injectable()
export class EventoService {

  create(createEventoInput: CreateEventoInput){}

  async findAll() {
    return await prisma.evento.findMany();
  }

  async findOne(id: string) {
    return await prisma.evento.findUnique({
      where: {
        id: id
      },
      include: {
        factura: true
      }
    });
  }

  async findByEstacion(estacionId: string) {
    return await prisma.evento.findUnique({
      where: {
        estacionId: estacionId
      },
      include: {
        factura: true
      }
    })
  }

  update(id: string, updateEventoInput: UpdateEventoInput) {
    return `This action updates a #${id} evento`;
  }

  remove(id: string) {
    return `This action removes a #${id} evento`;
  }
}
