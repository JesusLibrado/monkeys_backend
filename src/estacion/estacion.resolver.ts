import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EstacionService } from './estacion.service';
import { CreateEstacionInput } from './dto/create-estacion.input';
import { UpdateEstacionInput } from './dto/update-estacion.input';

@Resolver('Estacion')
export class EstacionResolver {
  constructor(private readonly estacionService: EstacionService) {}

  @Mutation('createEstacion')
  create(@Args('createEstacionInput') createEstacionInput: CreateEstacionInput) {
    return this.estacionService.create(createEstacionInput);
  }

  @Query('estacion')
  findAll() {
    return this.estacionService.findAll();
  }

  @Query('estacion')
  findOne(@Args('id') id: number) {
    return this.estacionService.findOne(id);
  }

  @Mutation('updateEstacion')
  update(@Args('updateEstacionInput') updateEstacionInput: UpdateEstacionInput) {
    return this.estacionService.update(updateEstacionInput.id, updateEstacionInput);
  }

  @Mutation('removeEstacion')
  remove(@Args('id') id: number) {
    return this.estacionService.remove(id);
  }
}
