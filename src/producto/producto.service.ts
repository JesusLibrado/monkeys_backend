import { Injectable } from '@nestjs/common';
import {
  CreateProductoInput,
  Producto,
  UpdateProductoInput
} from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';

const DEFAULT_FACTURAS_LENGTH = 3;

@Injectable()
export class ProductoService {
  async create(createProductoInput: CreateProductoInput) {
    try{
      let createProductoPayload = await prisma.producto.create({
        data: {
          ...createProductoInput,
          cantidadVendida: 0,
        },
        include: { facturas: { take: DEFAULT_FACTURAS_LENGTH } }
      });

      return plainToClass(Producto, createProductoPayload);
    }
    catch(e) {
      console.error(`Error creating Producto ${e}`);
      throw new Error("Error creating entity");
    }
  }

  async findAll() {
    try {
      const productos = await prisma.producto.findMany({include: {facturas: false}});
      return productos;
    } catch (e) {
      console.error(`Error reading Productos ${e}`);
      throw new Error("Error reading entities");
    }
  }

  async findOne(id: string) {
    try {
      const producto = await prisma.producto.findUnique({
        where: {
          id: id
        },
        include: {facturas: false}
      });
      return plainToClass(Producto, producto); 
    } catch (e) {
      console.error(`Error reading Producto ${e}`);
      throw new Error("Error reading entity");
    }
  }

  async update(id: string, updateProductoInput: UpdateProductoInput) {
    try{
      let createProductoPayload = await prisma.producto.update({
        where: {
          id: id
        },
        data: {
          nombre: updateProductoInput.nombre??undefined,
          marca: updateProductoInput.marca??undefined,
          cantidadVendida: updateProductoInput.cantidadVendida??undefined,
          cantidadDisponible: updateProductoInput.cantidadDisponible??undefined,
          comisionEmpleado: updateProductoInput.comisionEmpleado??undefined,
          precioProveedor: updateProductoInput.precioProveedor??undefined,
          precioPublico: updateProductoInput.precioPublico??undefined,
           
        },
        include: { facturas: { take: DEFAULT_FACTURAS_LENGTH } }
      });

      return plainToClass(Producto, createProductoPayload);
    }
    catch(e) {
      console.error(`Error creating Producto ${e}`);
      throw new Error("Error creating entity");
    }
  }

  remove(id: string) {
    return `This action removes a #${id} producto`;
  }
}
