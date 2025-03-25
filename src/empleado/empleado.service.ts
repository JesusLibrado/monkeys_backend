import { Injectable } from '@nestjs/common';
import { 
  CreateEmpleadoInput, 
  CreateUsuarioInput, 
  UpdateEmpleadoInput, 
  Empleado
} from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';


@Injectable()
export class EmpleadoService {

  constructor() {}

  async create(createEmpleadoInput: CreateEmpleadoInput): Promise<Empleado>{
    try{
      const usuarioInput: CreateUsuarioInput = createEmpleadoInput.usuario;
      // add estacion connect
      let estacion = createEmpleadoInput.estacion??{};
      let createEmpleadoPayload = await prisma.empleado.create({
        data: {
          nombre: createEmpleadoInput.nombre,
          apellido: createEmpleadoInput.apellido,
          horaEntrada: createEmpleadoInput.horaEntrada,
          horaSalida: createEmpleadoInput.horaSalida,
          rol: createEmpleadoInput.rol,
          estacion: estacion,
          updatedAt: dayjs().toDate(),
          usuario: {
            create: {
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
      return plainToClass(Empleado, createEmpleadoPayload);
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

  async update(id: number, updateEmpleadoInput: UpdateEmpleadoInput) {
    let estacionInput, usuarioInput;

    if(!updateEmpleadoInput.estacion) {
      estacionInput = updateEmpleadoInput.estacion===null?{
        disconnect: true
      }:undefined;
    } else {
      // might update Estacion number related to this Empleado
      estacionInput = {
        connect: {id: updateEmpleadoInput.estacion?.id}
      }
    }

    if(!updateEmpleadoInput.usuario) {
      usuarioInput = updateEmpleadoInput.usuario===null?{
        disconnect: true
      }:undefined;
    } else {
      // might update Usuario from Empleado input
      // Usuario.id can't be changed (conceptually). Ignore Id input
      usuarioInput = {
        update: {...updateEmpleadoInput.usuario, id: undefined}
      }
    }

    try {
      const updateEmpleadoPayload = await prisma.empleado.update({
        where: {
          id: id
        },
        data: {
          nombre: updateEmpleadoInput.nombre??undefined,
          apellido: updateEmpleadoInput.apellido??undefined,
          horaEntrada: updateEmpleadoInput.horaEntrada??undefined,
          horaSalida: updateEmpleadoInput.horaSalida??undefined,
          rol: updateEmpleadoInput.rol??undefined,
          estacion: estacionInput,
          usuario: usuarioInput
        },
        include: {usuario: true, estacion: true}
      });
      return plainToClass(Empleado, updateEmpleadoPayload);
    } catch(e) {
      console.error(`Error updating Empleado ${e}`);
      throw new Error("Error updating entity");
    }
  }

  async remove(empleadoId: number): Promise<Empleado> {
    try {
      return await prisma.$transaction(async (tx)=> {
        const deletedEmpleado = await tx.empleado.delete({
          where: {
            id: empleadoId
          },
          include: {
            usuario: true,
            estacion: true
          }
        });
        await tx.usuario.delete({
          where: {
            id: deletedEmpleado?.usuarioId
          }
        });
        return plainToClass(Empleado, deletedEmpleado);
      });
    }catch(e) {
      console.error(`Error deleting Empleado ${e}`);
      throw new Error("Error deleting entity");
    }
  }
}
