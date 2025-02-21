import { Module } from '@nestjs/common';
import { EstacionService } from './estacion.service';
import { EstacionResolver } from './estacion.resolver';

@Module({
  providers: [EstacionResolver, EstacionService],
})
export class EstacionModule {}
