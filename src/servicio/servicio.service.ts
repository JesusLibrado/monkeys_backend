import { Injectable } from '@nestjs/common';
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

  findOne(id: number) {
    return `This action returns a #${id} servicio`;
  }

  update(id: number, updateServicioInput: UpdateServicioInput) {
    return `This action updates a #${id} servicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} servicio`;
  }
}
