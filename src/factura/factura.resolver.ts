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

  @Query('facturas')
  findAll() {
    return this.facturaService.findAll();
  }

  @Query('factura')
  findOne(@Args('id') id: string) {
    return this.facturaService.findOne(id);
  }

  @Query('facturaByFolio')
  findByFolio(@Args('folio') folio: number) {
    return this.facturaService.findByFolio(folio);
  }

  @Mutation('updateFactura')
  update(@Args('updateFacturaInput') updateFacturaInput: UpdateFacturaInput) {
    return this.facturaService.update(updateFacturaInput.id, updateFacturaInput);
  }

  @Mutation('removeFactura')
  remove(@Args('id') id: string) {
    return this.facturaService.remove(id);
  }

  @Mutation('cancelFactura')
  cancel(@Args('id') id: string) {
    return this.facturaService.cancel(id);
  }

  @Mutation('saveFactura')
  save(@Args('id') id: string) {
    return this.facturaService.save(id);
  }

}
