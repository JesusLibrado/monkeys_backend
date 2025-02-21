import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

@Resolver('Usuario')
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}
}
