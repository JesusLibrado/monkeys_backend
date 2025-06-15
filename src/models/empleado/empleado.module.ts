import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoResolver } from './empleado.resolver';
import { UsuarioService } from 'src/models/usuario/usuario.service';

@Module({
  providers: [EmpleadoResolver, EmpleadoService, UsuarioService],
})
export class EmpleadoModule {}
