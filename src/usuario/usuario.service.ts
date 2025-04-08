import { ConsoleLogger, Injectable } from '@nestjs/common';
import { 
  CreateUsuarioInput,
  UpdateUsuarioInput,
  Usuario
} from 'src/graphql';

import { prisma } from 'prisma/client';
import { Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UsuarioService {

  async create(createUsuarioInput: CreateUsuarioInput) {
    let usuarioInput = new CreateUsuarioInput();
    const usuarioKeys = Object.keys(usuarioInput);
    for(let property of usuarioKeys) {
      usuarioInput[property] = createUsuarioInput[property]
    }
    let newUsuario;
    try{
      newUsuario = await prisma.usuario.create({
        data: {
          ...usuarioInput,
           
        }
      });
      console.log(`Usuario created: ${newUsuario}`);
      return newUsuario;
    } catch(e) {
      console.error(`Error creating Usuario ${e}`);
    }
    
  }

  async findAll() {
    try {
      const usuarios = await prisma.usuario.findMany({include: {empleado: true}});
      return usuarios; 
    } catch (e) {
      console.error(`Error reading Usuarios ${e}`);
      throw new Error("Error reading entities");
    }
  }

  async findOne(id: string) {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: {
          id,
        }, 
        include: {
          empleado: true
        }
      });
      return plainToClass(Usuario, usuario);
    } catch (e) {
      console.error(`Error reading Usuario ${e}`);
      throw new Error("Error reading entity");
    }
  }

  update(id: string, updateUsuarioInput: UpdateUsuarioInput) {
    return `This action updates a #${id} usuario`;
  }

  async remove(usuarioDeleteArgs: Prisma.UsuarioDeleteArgs) {
    try{
      let usuarioDeleted = await prisma.usuario.delete(usuarioDeleteArgs);
      console.log(`Usuario deleted: ${usuarioDeleted}`);
      return usuarioDeleted;
    } catch (e) {
      console.error(`Error deleting Usuario ${e}`);
    }
  }
}
