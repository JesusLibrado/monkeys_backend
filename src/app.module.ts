import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { EmpleadoModule } from './models/empleado/empleado.module';
import { UsuarioModule } from './models/usuario/usuario.module';
import { EstacionModule } from './models/estacion/estacion.module';
import { EventoModule } from './models/evento/evento.module';
import { ProductoModule } from './models/producto/producto.module';
import { ServicioModule } from './models/servicio/servicio.module';
import { ConceptoFacturaModule } from './models/concepto-factura/concepto-factura.module';
import { FacturaModule } from './models/factura/factura.module';
import { PagoModule } from './models/usuario/pago/pago.module';
import { GraphqlService } from './config/graphql';

const graphQLModule: DynamicModule =
  GraphQLModule.forRootAsync<ApolloDriverConfig>({
    driver: ApolloDriver,
    useClass: GraphqlService,
  });

@Module({
  imports: [
    graphQLModule,
    EmpleadoModule,
    UsuarioModule,
    EstacionModule,
    EventoModule,
    ProductoModule,
    ServicioModule,
    ConceptoFacturaModule,
    FacturaModule,
    PagoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
