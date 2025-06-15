import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaResolver } from './factura.resolver';
import { ConceptoFacturaModule } from 'src/models/concepto-factura/concepto-factura.module';
import { ProductoModule } from 'src/models/producto/producto.module';
import { EventoModule } from 'src/models/evento/evento.module';
import { EventoService } from 'src/models/evento/evento.service';
import { ProductoService } from 'src/models/producto/producto.service';
import { ConceptoFacturaService } from 'src/models/concepto-factura/concepto-factura.service';
import { ServicioService } from 'src/models/servicio/servicio.service';
import { ServicioModule } from 'src/models/servicio/servicio.module';

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
