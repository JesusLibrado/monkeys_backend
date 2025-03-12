import { Injectable } from '@nestjs/common';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class EmpleadoService {

  constructor(private usuarioService: UsuarioService) {}

  async create(createEmpleadoInput: CreateEmpleadoInput) {
    let newUsuario;
    try{
      newUsuario = await this.usuarioService.create({...createEmpleadoInput});
    }
    catch(e) {
      console.error(`Error creating Usuario in Empleado ${e}`);
    }
    
    let newEmpleado;
    
    try{
      let estacion = createEmpleadoInput.estacion??{};
      newEmpleado = prisma.empleado.create({
        data: {
          ...createEmpleadoInput,
          usuarioId: newUsuario.id,
          estacion: estacion,
          updatedAt: dayjs().toDate()
        }
      });
      console.log(`Empleado created: ${newEmpleado}`);
      return newEmpleado;
    }
    catch(e) {
      console.error(`Error creating Empleado ${e}`);
    }
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
