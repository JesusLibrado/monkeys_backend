import { Test, TestingModule } from '@nestjs/testing';
import { EmpleadoService } from './empleado.service';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpleadoService],
    }).compile();

    service = module.get<EmpleadoService>(EmpleadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
