import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaResolver } from './factura.resolver';

@Module({
  providers: [FacturaResolver, FacturaService],
})
export class FacturaModule {}
