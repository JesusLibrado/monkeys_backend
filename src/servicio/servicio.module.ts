import { Module } from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { ServicioResolver } from './servicio.resolver';

@Module({
  providers: [ServicioResolver, ServicioService],
  exports: [ServicioService],
})
export class ServicioModule {}
