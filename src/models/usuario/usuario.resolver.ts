import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';

@Resolver('Usuario')
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}
}
