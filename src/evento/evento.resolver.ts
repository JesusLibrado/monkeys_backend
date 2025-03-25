import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventoService } from './evento.service';
import { 
  CreateEventoInput,
  UpdateEventoInput
} from 'src/graphql';

@Resolver('Evento')
export class EventoResolver {
  constructor(private readonly eventoService: EventoService) {}

  @Mutation('createEvento')
  create(@Args('createEventoInput') createEventoInput: CreateEventoInput) {
    return this.eventoService.create(createEventoInput);
  }

  @Query('evento')
  findAll() {
    return this.eventoService.findAll();
  }

  @Query('evento')
  findOne(@Args('id') id: number) {
    return this.eventoService.findOne(id);
  }

  @Mutation('updateEvento')
  update(@Args('updateEventoInput') updateEventoInput: UpdateEventoInput) {
    return this.eventoService.update(updateEventoInput.id, updateEventoInput);
  }

  @Mutation('removeEvento')
  remove(@Args('id') id: number) {
    return this.eventoService.remove(id);
  }
}
