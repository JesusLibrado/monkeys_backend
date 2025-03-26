import { Module } from '@nestjs/common';
import { ConceptoFacturaService } from './concepto-factura.service';
import { ConceptoFacturaResolver } from './concepto-factura.resolver';

@Module({
  providers: [ConceptoFacturaResolver, ConceptoFacturaService],
})
export class ConceptoFacturaModule {}
