import { UpdateEmpleadoInput } from 'src/empleado/dto/update-empleado.input';

export class UpdateEstacionInput {
  id: number;
  empleado?: UpdateEmpleadoInput;
  disponible: boolean;
}
