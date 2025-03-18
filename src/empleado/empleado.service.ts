import { Injectable } from '@nestjs/common';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { UsuarioService } from 'src/usuario/usuario.service';
import { Empleado } from './entities/empleado.entity';
import { CreateUsuarioInput } from 'src/usuario/dto/create-usuario.input';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class EmpleadoService {

  constructor(private usuarioService: UsuarioService) {}

  async create(createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado>{
  
    let newEmpleado;
    let usuarioInput: CreateUsuarioInput = createEmpleadoInput.usuario;

    try{
      let estacion = createEmpleadoInput.estacion??{};
      newEmpleado = await prisma.empleado.create({
        data: {
          horaEntrada: createEmpleadoInput.horaEntrada,
          horaSalida: createEmpleadoInput.horaSalida,
          rol: createEmpleadoInput.rol,
          estacion: estacion,
          updatedAt: dayjs().toDate(),
          usuario: {
            create: {
              nombre: usuarioInput.nombre,
              apellido: usuarioInput.apellido,
              email: usuarioInput.email,
              numeroTelefono: usuarioInput.numeroTelefono,
              // encrypt
              password: usuarioInput.password,
              updatedAt: dayjs().toDate()
            }
          },
        },
        include: { usuario: true, estacion: true }
      });
      console.log(`Empleado created: ${JSON.stringify(newEmpleado)}`);
      let newUsuario = new Usuario(newEmpleado.usuario);
      newEmpleado.usuario = newUsuario;
      return new Empleado(newEmpleado);
    }
    catch(e) {
      console.error(`Error creating Empleado ${e}`);
      throw new Error("Error creating entity");
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

  async remove(usuarioId: number): Promise<Empleado> {
    let deletedUsuario;
    try{
      let deleteUsuario = await this.usuarioService.remove({
        where: {
          id: usuarioId
        }
      });
    } catch (e) {
      console.error(`Error deleting Usuario ${e}`);
    }
    
    try{
      let deletedEmpleado = await prisma.empleado.delete({
        where: {
          usuarioId: usuarioId
        }
      });
      console.log(`Empleado deleted: ${deletedEmpleado}`);
      return new Empleado(deletedEmpleado);
    } catch (e) {
      console.error(`Error deleting Empleado ${e}`);
      throw new Error("Error creating entity");
    }
  }
}
