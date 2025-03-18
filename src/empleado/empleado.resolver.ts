import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EmpleadoService } from './empleado.service';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';
import { Empleado } from './entities/empleado.entity';

@Resolver('Empleado')
export class EmpleadoResolver {
  constructor(private readonly empleadoService: EmpleadoService) {}

  @Mutation('createEmpleado')
  create(@Args('createEmpleadoInput') createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado> {
    return this.empleadoService.create(createEmpleadoInput);
  }

  @Query('empleado')
  findAll() {
    return this.empleadoService.findAll();
  }

  @Query('empleado')
  findOne(@Args('id') id: number) {
    return this.empleadoService.findOne(id);
  }

  @Mutation('updateEmpleado')
  update(@Args('updateEmpleadoInput') updateEmpleadoInput: UpdateEmpleadoInput) {
    return this.empleadoService.update(updateEmpleadoInput.id, updateEmpleadoInput);
  }

  @Mutation('removeEmpleado')
  remove(@Args('id') id: number) {
    return this.empleadoService.remove(id);
  }
}
