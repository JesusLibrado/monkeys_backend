import { Module } from '@nestjs/common';
import { ConceptoFacturaService } from './concepto-factura.service';
import { ConceptoFacturaResolver } from './concepto-factura.resolver';
import { ProductoModule } from 'src/models/producto/producto.module';
import { ServicioModule } from 'src/models/servicio/servicio.module';
import { ProductoService } from 'src/models/producto/producto.service';
import { ServicioService } from 'src/models/servicio/servicio.service';

@Module({
  imports: [ProductoModule, ServicioModule],
  providers: [
    ConceptoFacturaResolver,
    ConceptoFacturaService,
    ProductoService,
    ServicioService,
  ],
  exports: [ConceptoFacturaService],
})
export class ConceptoFacturaModule {}
