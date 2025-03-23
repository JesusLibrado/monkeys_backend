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

  findAll() {
    return `This action returns all estacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estacion`;
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
