import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoResolver } from './evento.resolver';

@Module({
  providers: [EventoResolver, EventoService],
})
export class EventoModule {}
