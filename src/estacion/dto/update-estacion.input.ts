import { CreateEstacionInput } from './create-estacion.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateEstacionInput extends PartialType(CreateEstacionInput) {
  id: number;
}
