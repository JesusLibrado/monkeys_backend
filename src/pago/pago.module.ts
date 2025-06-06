import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoResolver } from './pago.resolver';
import { EstacionService } from 'src/estacion/estacion.service';
import { EventoService } from 'src/evento/evento.service';
import { FacturaService } from 'src/factura/factura.service';
import { EstacionModule } from 'src/estacion/estacion.module';
import { EventoModule } from 'src/evento/evento.module';
import { FacturaModule } from 'src/factura/factura.module';
import { ProductoService } from 'src/producto/producto.service';
import { ProductoModule } from 'src/producto/producto.module';
import { ConceptoFacturaService } from 'src/concepto-factura/concepto-factura.service';
import { ServicioModule } from 'src/servicio/servicio.module';
import { ServicioService } from 'src/servicio/servicio.service';

@Module({
  imports: [
    EstacionModule, 
    EventoModule, 
    FacturaModule, 
    ProductoModule,
    ServicioModule
  ],
  providers: [
    PagoResolver, 
    PagoService, 
    EstacionService,
    ServicioService,
    EventoService, 
    FacturaService,
    ProductoService,
    ConceptoFacturaService
  ],
})
export class PagoModule {}
