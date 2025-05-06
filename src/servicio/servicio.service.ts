import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { prisma } from 'prisma/client';
import { 
  CreateServicioInput,
  Servicio,
  UpdateServicioInput
} from 'src/graphql';


@Injectable()
export class ServicioService {

  async create(createServicioInput: CreateServicioInput) {
    try{
      let createServicioPayload = await prisma.servicio.create({
        data: {
          ...createServicioInput
        },
        // include: { facturas: { take: DEFAULT_FACTURAS_LENGTH } }
      });

      return plainToClass(Servicio, createServicioPayload);
    }
    catch(e) {
      console.error(`Error creating Servicio ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async findAll() {
    return await prisma.servicio.findMany();
  }

  async findOne(id: string) {
    return await prisma.servicio.findUnique({
      where: {
        id: id
      },
      include: {facturas: false}
    });
  }

  update(id: string, updateServicioInput: UpdateServicioInput) {
    return `This action updates a #${id} servicio`;
  }

  remove(id: string) {
    return `This action removes a #${id} servicio`;
  }
}
