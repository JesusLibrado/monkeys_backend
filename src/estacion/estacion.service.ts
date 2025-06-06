import { Injectable } from '@nestjs/common';
import {
  CreateEstacionInput,
  UpdateEstacionInput,
  Estacion
} from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';

// ****************** NOTES

// can relate an Empleado to an occuppied Estacion ??

@Injectable()
export class EstacionService {

  async create(createEstacionInput: CreateEstacionInput): Promise<Estacion> {
    
    try{
      const createEstacionPayload = await prisma.estacion.create({
        data: {
          numero: createEstacionInput.numero,
          empleadoId: createEstacionInput.empleadoId??null,
        },
        include: {empleado: true}
      });

      return plainToClass(Estacion, createEstacionPayload);
    } catch(e) {
      console.error(`Error creating Estacion ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async getAvailableEstaciones() {
    return await prisma.estacion.findMany({
      where: {
        AND: [
          {
            disponible: true
          },
          {
            empleadoId: {
              not: null
            }
          }
        ]
      },
      include: {empleado: true}
    });
  }

  async findAll() {
    return await prisma.estacion.findMany({
      orderBy: [
        {
          numero: 'asc'
        }
      ],
      include: {empleado: true, eventos: true}
    });
  }

  async findOne(id: string) {
    return await prisma.estacion.findUnique({
      where: {
        id: id,
      },
      include: {empleado: true, eventos: true}
    });
  }

  async update(id: string, updateEstacionInput: UpdateEstacionInput) {
    let empleadoInput;

    if(!updateEstacionInput.empleadoId) {
      empleadoInput = updateEstacionInput.empleadoId===null||updateEstacionInput.empleadoId===""?{
        disconnect: true
      }:undefined;
    } else {
      // might update Empleado related to this Estacion
      empleadoInput = {
        connect: {id: updateEstacionInput.empleadoId}
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

  async makeAvailable(id: string) {
    try {
      await prisma.estacion.update({
        where: {
          id: id
        },
        data: {
          disponible: true
        }
      });
    } catch(e) {
      console.log("Error updating Estacion availability: ", e);
      throw e;
    }
  }

  remove(id: string) {
    return `This action removes a #${id} estacion`;
  }
}
