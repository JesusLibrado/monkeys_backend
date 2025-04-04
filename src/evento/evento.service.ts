import { Injectable } from '@nestjs/common';
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

  findAll() {
    return `This action returns all evento`;
  }

  findOne(id: string) {
    return `This action returns a #${id} evento`;
  }

  update(id: string, updateEventoInput: UpdateEventoInput) {
    return `This action updates a #${id} evento`;
  }

  remove(id: string) {
    return `This action removes a #${id} evento`;
  }
}
