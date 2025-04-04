import { Module } from '@nestjs/common';
import { ConceptoFacturaService } from './concepto-factura.service';
import { ConceptoFacturaResolver } from './concepto-factura.resolver';
import { ProductoModule } from 'src/producto/producto.module';
import { ServicioModule } from 'src/servicio/servicio.module';

@Module({
  imports: [ProductoModule, ServicioModule],
  providers: [ConceptoFacturaResolver, ConceptoFacturaService],
  exports: [ConceptoFacturaService]
})
export class ConceptoFacturaModule {}
