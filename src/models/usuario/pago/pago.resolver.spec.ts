import { Test, TestingModule } from '@nestjs/testing';
import { PagoResolver } from './pago.resolver';
import { PagoService } from './pago.service';

describe('PagoResolver', () => {
  let resolver: PagoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagoResolver, PagoService],
    }).compile();

    resolver = module.get<PagoResolver>(PagoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
