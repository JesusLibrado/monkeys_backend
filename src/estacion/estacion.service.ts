import { Injectable } from '@nestjs/common';
import { CreateEstacionInput } from './dto/create-estacion.input';
import { UpdateEstacionInput } from './dto/update-estacion.input';
import { Estacion } from './entities/estacion.entity';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';
import { connect } from 'http2';

@Injectable()
export class EstacionService {
  async create(createEstacionInput: CreateEstacionInput): Promise<Estacion> {
    try{
      const createEstacionPayload = await prisma.estacion.create({
        data: {
          numero: createEstacionInput.numero,
          empleadoId: createEstacionInput.empleado?.id,
          updatedAt: dayjs().toDate()
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
      const estaciones = await prisma.estacion.findMany({include: {empleado: true }});
    return estaciones;
    } catch (e) {
      console.error(`Error find Estaciones`);
      throw new Error("Error find enetities");
    }
  }

  async findOne(id: number) {
    try {
        const estacion = await prisma.estacion.findUnique({
          where: {
            id: id
          },
          include: {empleado: true }
        });
        return plainToClass(Estacion, estacion);
       } catch (e) {
          console.error(`Error find Estacion`);
          throw new Error("Error find entity");
       }
  }

  async update(id: number, updateEstacionInput: UpdateEstacionInput) {
    let empleadoInput;

    if(!updateEstacionInput.empleado) {
      empleadoInput = updateEstacionInput.empleado===null?{
        disconnect: true
      }:undefined;
    } else {
      empleadoInput = {
        connect: {id: updateEstacionInput.empleado?.id}
      }
    }
    
    try{
      const createEstacionPayload = await prisma.estacion.update({
        where: {
          id: id
        },
        data: {
          disponible: updateEstacionInput.disponible,
          empleado: empleadoInput
        },
        include: {
          empleado: {
            include: {
              usuario: true
            }
          }
        }
      });

      return plainToClass(Estacion, createEstacionPayload);
    } catch(e) {
      console.error(`Error creating Estacion ${e}`);
      throw new Error("Error creating entity");
    }
  }

  remove(id: number) {
    return `This action removes a #${id} estacion`;
  }
}
