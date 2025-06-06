import { Module } from '@nestjs/common';
import { ConceptoFacturaService } from './concepto-factura.service';
import { ConceptoFacturaResolver } from './concepto-factura.resolver';
import { ProductoModule } from 'src/producto/producto.module';
import { ServicioModule } from 'src/servicio/servicio.module';
import { ProductoService } from 'src/producto/producto.service';
import { ServicioService } from 'src/servicio/servicio.service';

@Module({
  imports: [ProductoModule, ServicioModule],
  providers: [ConceptoFacturaResolver, ConceptoFacturaService, ProductoService, ServicioService],
  exports: [ConceptoFacturaService]
})
export class ConceptoFacturaModule {}
