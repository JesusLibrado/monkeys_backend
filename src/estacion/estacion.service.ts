import { Injectable } from '@nestjs/common';
import { CreateEstacionInput } from './dto/create-estacion.input';
import { UpdateEstacionInput } from './dto/update-estacion.input';

@Injectable()
export class EstacionService {
  create(createEstacionInput: CreateEstacionInput) {
    return 'This action adds a new estacion';
  }

  findAll() {
    return `This action returns all estacion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estacion`;
  }

  update(id: number, updateEstacionInput: UpdateEstacionInput) {
    return `This action updates a #${id} estacion`;
  }

  remove(id: number) {
    return `This action removes a #${id} estacion`;
  }
}
