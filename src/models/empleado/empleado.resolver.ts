import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoInput, UpdateEmpleadoInput } from 'src/types/graphql';

@Resolver('Empleado')
export class EmpleadoResolver {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Mutation('createEmpleado')
  create(
    @Args('createEmpleadoInput') createEmpleadoInput: CreateEmpleadoInput,
  ) {
    return this.empleadoService.create(createEmpleadoInput);
  }

  @Query('empleados')
  findAll() {
    return this.empleadoService.findAll();
  }

  @Query('empleado')
  findOne(@Args('id') id: string) {
    return this.empleadoService.findOne(id);
  }

  @Mutation('updateEmpleado')
  update(
    @Args('updateEmpleadoInput') updateEmpleadoInput: UpdateEmpleadoInput,
  ) {
    return this.empleadoService.update(
      updateEmpleadoInput.id,
      updateEmpleadoInput,
    );
  }

  @Mutation('removeEmpleado')
  remove(@Args('id') id: string) {
    return this.empleadoService.remove(id);
  }
}
