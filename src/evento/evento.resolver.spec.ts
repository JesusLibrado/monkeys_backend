import { Test, TestingModule } from '@nestjs/testing';
import { EventoResolver } from './evento.resolver';
import { EventoService } from './evento.service';

describe('EventoResolver', () => {
  let resolver: EventoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventoResolver, EventoService],
    }).compile();

    resolver = module.get<EventoResolver>(EventoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
