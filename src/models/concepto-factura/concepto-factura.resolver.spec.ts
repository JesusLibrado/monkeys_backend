import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoFacturaResolver } from './concepto-factura.resolver';
import { ConceptoFacturaService } from './concepto-factura.service';

describe('ConceptoFacturaResolver', () => {
  let resolver: ConceptoFacturaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptoFacturaResolver, ConceptoFacturaService],
    }).compile();

    resolver = module.get<ConceptoFacturaResolver>(ConceptoFacturaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
