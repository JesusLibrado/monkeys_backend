import { Injectable } from '@nestjs/common';
import { 
  CreateConceptoFacturaInput,
  UpdateConceptoFacturaInput
} from 'src/graphql';

@Injectable()
export class ConceptoFacturaService {
  create(createConceptoFacturaInput: CreateConceptoFacturaInput) {
    return 'This action adds a new conceptoFactura';
  }

  findAll() {
    return `This action returns all conceptoFactura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conceptoFactura`;
  }

  update(id: number, updateConceptoFacturaInput: UpdateConceptoFacturaInput) {
    return `This action updates a #${id} conceptoFactura`;
  }

  remove(id: number) {
    return `This action removes a #${id} conceptoFactura`;
  }
}
