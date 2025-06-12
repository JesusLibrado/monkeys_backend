import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EstacionService } from './estacion.service';
import { CreateEstacionInput, UpdateEstacionInput } from 'src/graphql';

@Resolver('Estacion')
export class EstacionResolver {
  constructor(private readonly estacionService: EstacionService) {}

  @Mutation('createEstacion')
  create(
    @Args('createEstacionInput') createEstacionInput: CreateEstacionInput,
  ) {
    return this.estacionService.create(createEstacionInput);
  }

  @Query('estaciones')
  findAll() {
    return this.estacionService.findAll();
  }

  @Query('estacionesDisponibles')
  getAvailableEstaciones() {
    return this.estacionService.getAvailableEstaciones();
  }

  @Query('estacion')
  findOne(@Args('id') id: string) {
    return this.estacionService.findOne(id);
  }

  @Mutation('updateEstacion')
  update(
    @Args('updateEstacionInput') updateEstacionInput: UpdateEstacionInput,
  ) {
    return this.estacionService.update(
      updateEstacionInput.id,
      updateEstacionInput,
    );
  }

  @Mutation('removeEstacion')
  remove(@Args('id') id: string) {
    return this.estacionService.remove(id);
  }
}
