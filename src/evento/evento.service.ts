import { Injectable } from '@nestjs/common';
import { prisma } from 'prisma/client';
import {
  CreateEventoInput,
  UpdateEventoInput,
  EstatusEvento,
  CreateConceptoFacturaInput,
  EstatusFactura,
  CreateFacturaInput,
  Evento,
} from 'src/graphql';

@Injectable()
export class EventoService {
  create(createEventoInput: CreateEventoInput) {}

  async findAll() {
    return await prisma.evento.findMany();
  }

  async findOne(id: string) {
    return await prisma.evento.findUnique({
      where: {
        id: id,
      },
      include: {
        factura: true,
      },
    });
  }

  async findByEstacion(estacionId: string) {
    return await prisma.evento.findFirst({
      where: {
        estacionId: estacionId,
        AND: [
          {
            estatus: {
              in: [EstatusEvento.EN_PROGRESO, EstatusEvento.TERMINADO],
            },
          },
        ],
      },
      include: {
        factura: true,
      },
    });
  }

  async setEstatus(id: string, newEstatus: EstatusEvento) {
    try {
      return await prisma.evento.update({
        where: {
          id: id,
        },
        data: {
          estatus: newEstatus,
        },
        include: { estacion: true },
      });
    } catch (e) {
      console.log('Error updating Evento estatus: ', e);
      throw e;
    }
  }

  update(id: string, updateEventoInput: UpdateEventoInput) {
    return `This action updates a #${id} evento`;
  }

  remove(id: string) {
    return `This action removes a #${id} evento`;
  }
}
