import { Injectable } from '@nestjs/common';
import { 
  CreateFacturaInput,
  UpdateFacturaInput
 } from 'src/graphql';

@Injectable()
export class FacturaService {
  create(createFacturaInput: CreateFacturaInput) {
    return 'This action adds a new factura';
  }

  findAll() {
    return `This action returns all factura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  update(id: number, updateFacturaInput: UpdateFacturaInput) {
    return `This action updates a #${id} factura`;
  }

  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
