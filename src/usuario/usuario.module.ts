import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioResolver } from './usuario.resolver';

@Module({
  providers: [UsuarioResolver, UsuarioService],
})
export class UsuarioModule {}
