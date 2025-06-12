import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PagoService } from './pago.service';
import { RealizarPagoInput, UpdatePagoInput } from 'src/graphql';

@Resolver('Pago')
export class PagoResolver {
  constructor(private readonly pagoService: PagoService) {}

  @Mutation('realizarPago')
  create(@Args('realizarPagoInput') realizarPagoInput: RealizarPagoInput) {
    return this.pagoService.realizarPago(realizarPagoInput);
  }

  @Query('pago')
  findAll() {
    return this.pagoService.findAll();
  }

  @Query('pago')
  findOne(@Args('id') id: string) {
    return this.pagoService.findOne(id);
  }

  @Mutation('updatePago')
  update(@Args('updatePagoInput') updatePagoInput: UpdatePagoInput) {
    return this.pagoService.update(updatePagoInput.id, updatePagoInput);
  }

  @Mutation('removePago')
  remove(@Args('id') id: string) {
    return this.pagoService.remove(id);
  }
}
