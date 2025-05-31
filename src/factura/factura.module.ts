import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaResolver } from './factura.resolver';
import { ConceptoFacturaModule } from 'src/concepto-factura/concepto-factura.module';
import { ProductoModule } from 'src/producto/producto.module';

@Module({
  imports: [ProductoModule],
  providers: [FacturaResolver, FacturaService],
})
export class FacturaModule {}
