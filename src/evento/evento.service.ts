import { Injectable } from '@nestjs/common';
import { 
  CreateEventoInput,
  UpdateEventoInput
} from 'src/graphql';

@Injectable()
export class EventoService {
  create(createEventoInput: CreateEventoInput) {
    return 'This action adds a new evento';
  }

  findAll() {
    return `This action returns all evento`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evento`;
  }

  update(id: number, updateEventoInput: UpdateEventoInput) {
    return `This action updates a #${id} evento`;
  }

  remove(id: number) {
    return `This action removes a #${id} evento`;
  }
}
