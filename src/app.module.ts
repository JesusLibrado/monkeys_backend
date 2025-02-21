import { DynamicModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { EmpleadoModule } from './empleado/empleado.module';
import { UsuarioModule } from './usuario/usuario.module';

const configModule: Promise<DynamicModule> = ConfigModule.forRoot({
  envFilePath: `.env.${process.env.NODE_ENV}`
});

const typeOrmModule: DynamicModule = TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  synchronize: true,
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
    typeOrmModule,
    graphQLModule,
    EmpleadoModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
