import { Test, TestingModule } from '@nestjs/testing';
import { EstacionService } from './estacion.service';

describe('EstacionService', () => {
  let service: EstacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstacionService],
    }).compile();

    service = module.get<EstacionService>(EstacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
