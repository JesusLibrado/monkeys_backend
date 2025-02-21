import { Test, TestingModule } from '@nestjs/testing';
import { EstacionResolver } from './estacion.resolver';
import { EstacionService } from './estacion.service';

describe('EstacionResolver', () => {
  let resolver: EstacionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstacionResolver, EstacionService],
    }).compile();

    resolver = module.get<EstacionResolver>(EstacionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
