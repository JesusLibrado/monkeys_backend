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

  async findAll() {
    try {
      const estaciones = await prisma.estacion.findMany({include: {empleado: true}});
      return estaciones; 
    } catch (e) {
      console.error(`Error reading EStaciones ${e}`);
      throw new Error("Error reading entites");
    }
  }

  async findOne(id: string) {
    try {
      const estacion = await prisma.estacion.findUnique({
        where: {
          id,
        },
        include: {
          empleado: true
        }
      });
      return plainToClass(Estacion, estacion);
    } catch (e) {
      console.error(`Error reading Estación ${e}`);
      throw new Error("Error reading entity");
    }
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
