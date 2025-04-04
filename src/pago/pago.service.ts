import { Injectable } from '@nestjs/common';
import { 
  CreatePagoInput,
  UpdatePagoInput
} from 'src/graphql';

@Injectable()
export class PagoService {
  create(createPagoInput: CreatePagoInput) {
    return 'This action adds a new pago';
  }

  findAll() {
    return `This action returns all pago`;
  }

  findOne(id: string) {
    return `This action returns a #${id} pago`;
  }

  update(id: string, updatePagoInput: UpdatePagoInput) {
    return `This action updates a #${id} pago`;
  }

  remove(id: string) {
    return `This action removes a #${id} pago`;
  }
}
