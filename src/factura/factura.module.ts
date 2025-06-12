import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaResolver } from './factura.resolver';
import { ConceptoFacturaModule } from 'src/concepto-factura/concepto-factura.module';
import { ProductoModule } from 'src/producto/producto.module';
import { EventoModule } from 'src/evento/evento.module';
import { EventoService } from 'src/evento/evento.service';
import { ProductoService } from 'src/producto/producto.service';
import { ConceptoFacturaService } from 'src/concepto-factura/concepto-factura.service';
import { ServicioService } from 'src/servicio/servicio.service';
import { ServicioModule } from 'src/servicio/servicio.module';

@Module({
  imports: [
    EventoModule,
    ProductoModule,
    ConceptoFacturaModule,
    ServicioModule,
  ],
  providers: [
    FacturaResolver,
    FacturaService,
    EventoService,
    ProductoService,
    ConceptoFacturaService,
    ServicioService,
  ],
  exports: [FacturaService],
})
export class FacturaModule {}
