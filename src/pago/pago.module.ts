import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoResolver } from './pago.resolver';

@Module({
  providers: [PagoResolver, PagoService],
})
export class PagoModule {}
