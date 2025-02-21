import { Injectable } from '@nestjs/common';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';

@Injectable()
export class EmpleadoService {
  create(createEmpleadoInput: CreateEmpleadoInput) {
    return 'This action adds a new empleado';
  }

  findAll() {
    return `This action returns all empleado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoInput: UpdateEmpleadoInput) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
