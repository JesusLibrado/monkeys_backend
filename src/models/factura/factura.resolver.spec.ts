import { Test, TestingModule } from '@nestjs/testing';
import { FacturaResolver } from './factura.resolver';
import { FacturaService } from './factura.service';

describe('FacturaResolver', () => {
  let resolver: FacturaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FacturaResolver, FacturaService],
    }).compile();

    resolver = module.get<FacturaResolver>(FacturaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
