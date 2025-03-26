import { Test, TestingModule } from '@nestjs/testing';
import { ServicioResolver } from './servicio.resolver';
import { ServicioService } from './servicio.service';

describe('ServicioResolver', () => {
  let resolver: ServicioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicioResolver, ServicioService],
    }).compile();

    resolver = module.get<ServicioResolver>(ServicioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
