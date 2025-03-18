import { Injectable } from '@nestjs/common';
import { CreateUsuarioInput } from './dto/create-usuario.input';
import { UpdateUsuarioInput } from './dto/update-usuario.input';

import { prisma } from 'prisma/client';
import { Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';

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
          updatedAt: dayjs().toDate()
        }
      });
      console.log(`Usuario created: ${newUsuario}`);
      return newUsuario;
    } catch(e) {
      console.error(`Error creating Usuario ${e}`);
    }
    
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioInput: UpdateUsuarioInput) {
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
