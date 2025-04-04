import { Injectable } from '@nestjs/common';
import { prisma } from 'prisma/client';
import { 
  CreateServicioInput,
  UpdateServicioInput
} from 'src/graphql';

@Injectable()
export class ServicioService {
  create(createServicioInput: CreateServicioInput) {
    return 'This action adds a new servicio';
  }

  findAll() {
    return `This action returns all servicio`;
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
