import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoResolver } from './pago.resolver';
import { EstacionService } from 'src/models/estacion/estacion.service';
import { EventoService } from 'src/models/evento/evento.service';
import { FacturaService } from 'src/models/factura/factura.service';
import { EstacionModule } from 'src/models/estacion/estacion.module';
import { EventoModule } from 'src/models/evento/evento.module';
import { FacturaModule } from 'src/models/factura/factura.module';
import { ProductoService } from 'src/models/producto/producto.service';
import { ProductoModule } from 'src/models/producto/producto.module';
import { ConceptoFacturaService } from 'src/models/concepto-factura/concepto-factura.service';
import { ServicioModule } from 'src/models/servicio/servicio.module';
import { ServicioService } from 'src/models/servicio/servicio.service';

@Module({
  imports: [
    EstacionModule,
    EventoModule,
    FacturaModule,
    ProductoModule,
    ServicioModule,
  ],
  providers: [
    PagoResolver,
    PagoService,
    EstacionService,
    ServicioService,
    EventoService,
    FacturaService,
    ProductoService,
    ConceptoFacturaService,
  ],
})
export class PagoModule {}
