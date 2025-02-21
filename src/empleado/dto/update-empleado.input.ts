import { CreateEmpleadoInput } from './create-empleado.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEmpleadoInput extends PartialType(CreateEmpleadoInput) {
  id: number;
}
