import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventoService } from './evento.service';
import { CreateEventoInput, UpdateEventoInput } from 'src/types/graphql';

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
  findOne(@Args('id') id: string) {
    return this.eventoService.findOne(id);
  }

  @Query('eventoByEstacion')
  findByEstacion(@Args('estacionId') estacionId: string) {
    return this.eventoService.findByEstacion(estacionId);
  }

  @Mutation('updateEvento')
  update(@Args('updateEventoInput') updateEventoInput: UpdateEventoInput) {
    return this.eventoService.update(updateEventoInput.id, updateEventoInput);
  }

  @Mutation('removeEvento')
  remove(@Args('id') id: string) {
    return this.eventoService.remove(id);
  }
}
