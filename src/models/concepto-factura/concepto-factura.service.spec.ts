import { Test, TestingModule } from '@nestjs/testing';
import { ConceptoFacturaService } from './concepto-factura.service';

describe('ConceptoFacturaService', () => {
  let service: ConceptoFacturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptoFacturaService],
    }).compile();

    service = module.get<ConceptoFacturaService>(ConceptoFacturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
