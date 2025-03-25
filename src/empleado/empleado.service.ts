import { ConsoleLogger, Injectable } from '@nestjs/common';
import { CreateEmpleadoInput } from './dto/create-empleado.input';
import { UpdateEmpleadoInput } from './dto/update-empleado.input';
import { Empleado } from './entities/empleado.entity';
import { CreateUsuarioInput } from 'src/usuario/dto/create-usuario.input';

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
      return plainToClass(Empleado, createEmpleadoPayload);
    }
    catch(e) {
      console.error(`Error creating Empleado ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async findAll() {
    try {
      const empleados = await prisma.empleado.findMany({include: { usuario: true, estacion: true }});
    return empleados;
    } catch (e) {
      console.error(`Error find Empleados`);
      throw new Error("Error find enetities");
    }
  }

  async findOne(id: number) {
   try {
    const empleado = await prisma.empleado.findUnique({
      where: {
        id: id
      },
      include: { usuario: true, estacion: true }
    });
    return plainToClass(Empleado, empleado);
   } catch (e) {
      console.error(`Error find Empleado`);
      throw new Error("Error find entity");
   }
  }

  update(id: number, updateEmpleadoInput: UpdateEmpleadoInput) {
    return `This action updates a #${id} empleado`;
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
