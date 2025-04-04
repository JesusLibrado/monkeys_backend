import { Injectable } from '@nestjs/common';
import {
  CreateEstacionInput,
  UpdateEstacionInput,
  Estacion
} from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';

@Injectable()
export class EstacionService {

  async create(createEstacionInput: CreateEstacionInput): Promise<Estacion> {
    
    try{
      const createEstacionPayload = await prisma.estacion.create({
        data: {
          numero: createEstacionInput.numero,
          empleadoId: createEstacionInput.empleado?.id,
        },
        include: {empleado: true}
      });

      return plainToClass(Estacion, createEstacionPayload);
    } catch(e) {
      console.error(`Error creating Estacion ${e}`);
      throw new Error("Error creating entity");
    }
  }

  findAll() {
    return `This action returns all estacion`;
  }

  findOne(id: string) {
    return `This action returns a #${id} estacion`;
  }

  async update(id: string, updateEstacionInput: UpdateEstacionInput) {
    let empleadoInput;

    if(!updateEstacionInput.empleado) {
      empleadoInput = updateEstacionInput.empleado===null?{
        disconnect: true
      }:undefined;
    } else {
      // might update Empleado related to this Estacion
      empleadoInput = {
        connect: {id: updateEstacionInput.empleado?.id}
      }
    }
    
    try{
      const updateEstacionPayload = await prisma.estacion.update({
        where: {
          id: id
        },
        data: {
          disponible: updateEstacionInput.disponible??undefined,
          empleado: empleadoInput
        },
        include: {empleado: true}
      });

      return plainToClass(Estacion, updateEstacionPayload);
    } catch(e) {
      console.error(`Error updating Estacion ${e}`);
      throw new Error("Error updating entity");
    }
  }

  remove(id: string) {
    return `This action removes a #${id} estacion`;
  }
}
