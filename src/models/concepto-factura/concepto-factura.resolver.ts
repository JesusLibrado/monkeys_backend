import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ConceptoFacturaService } from './concepto-factura.service';
import {
  CreateConceptoFacturaInput,
  UpdateConceptoFacturaInput,
} from 'src/types/graphql';

@Resolver('ConceptoFactura')
export class ConceptoFacturaResolver {
  constructor(
    private readonly conceptoFacturaService: ConceptoFacturaService,
  ) {}

  @Mutation('createConceptoFactura')
  create(
    @Args('createConceptoFacturaInput')
    createConceptoFacturaInput: CreateConceptoFacturaInput,
  ) {
    return this.conceptoFacturaService.create(createConceptoFacturaInput);
  }

  @Query('conceptosFactura')
  findAll(@Args('facturaId') facturaId: string) {
    return this.conceptoFacturaService.findAllFromFactura(facturaId);
  }

  @Query('conceptoFactura')
  findOne(@Args('id') id: string) {
    return this.conceptoFacturaService.findOne(id);
  }

  @Mutation('updateConceptoFactura')
  update(
    @Args('updateConceptoFacturaInput')
    updateConceptoFacturaInput: UpdateConceptoFacturaInput,
  ) {
    return this.conceptoFacturaService.update(
      updateConceptoFacturaInput.id,
      updateConceptoFacturaInput,
    );
  }

  @Mutation('removeConceptoFactura')
  remove(@Args('id') id: string) {
    return this.conceptoFacturaService.remove(id);
  }
}
