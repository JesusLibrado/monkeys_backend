import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { EmpleadoModule } from './empleado/empleado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { EstacionModule } from './estacion/estacion.module';

const configModule: Promise<DynamicModule> = ConfigModule.forRoot({
  envFilePath: `.env.${process.env.NODE_ENV}`
});

const graphQLModule: DynamicModule = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  typePaths: ['./**/*.graphql'],
  definitions: {
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'class',
  },
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

@Module({
  imports: [
    configModule,
    graphQLModule,
    EmpleadoModule,
    UsuarioModule,
    EstacionModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
