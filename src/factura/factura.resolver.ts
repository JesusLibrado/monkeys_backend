import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FacturaService } from './factura.service';
import { 
  CreateFacturaInput,
  UpdateFacturaInput
 } from 'src/graphql';

@Resolver('Factura')
export class FacturaResolver {
  constructor(private readonly facturaService: FacturaService) {}

  @Mutation('createFactura')
  create(@Args('createFacturaInput') createFacturaInput: CreateFacturaInput) {
    return this.facturaService.create(createFacturaInput);
  }

  @Query('factura')
  findAll() {
    return this.facturaService.findAll();
  }

  @Query('factura')
  findOne(@Args('id') id: string) {
    return this.facturaService.findOne(id);
  }

  @Mutation('updateFactura')
  update(@Args('updateFacturaInput') updateFacturaInput: UpdateFacturaInput) {
    return this.facturaService.update(updateFacturaInput.id, updateFacturaInput);
  }

  @Mutation('removeFactura')
  remove(@Args('id') id: string) {
    return this.facturaService.remove(id);
  }
}
