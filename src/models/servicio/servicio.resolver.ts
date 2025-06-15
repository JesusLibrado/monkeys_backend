import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServicioService } from './servicio.service';
import { CreateServicioInput, UpdateServicioInput } from 'src/types/graphql';

@Resolver('Servicio')
export class ServicioResolver {
  constructor(private readonly servicioService: ServicioService) {}

  @Mutation('createServicio')
  create(
    @Args('createServicioInput') createServicioInput: CreateServicioInput,
  ) {
    return this.servicioService.create(createServicioInput);
  }

  @Query('servicios')
  findAll() {
    return this.servicioService.findAll();
  }

  @Query('availableServicios')
  findAvailableServicios() {
    return this.servicioService.availableServicios();
  }

  @Query('servicio')
  findOne(@Args('id') id: string) {
    return this.servicioService.findOne(id);
  }

  @Mutation('updateServicio')
  update(
    @Args('updateServicioInput') updateServicioInput: UpdateServicioInput,
  ) {
    return this.servicioService.update(
      updateServicioInput.id,
      updateServicioInput,
    );
  }

  @Mutation('removeServicio')
  remove(@Args('id') id: string) {
    return this.servicioService.remove(id);
  }
}
