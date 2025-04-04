import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoResolver } from '../empleado.resolver';
import { EmpleadoService } from '../empleado.service';

describe('EmpleadoResolver', () => {
  let resolver: EmpleadoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleadoResolver, EmpleadoService],
    }).compile();

    resolver = module.get<EmpleadoResolver>(EmpleadoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
