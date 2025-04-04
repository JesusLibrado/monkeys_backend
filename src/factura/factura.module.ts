import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaResolver } from './factura.resolver';
import { ConceptoFacturaModule } from 'src/concepto-factura/concepto-factura.module';

@Module({
  imports: [ConceptoFacturaModule],
  providers: [FacturaResolver, FacturaService],
})
export class FacturaModule {}
