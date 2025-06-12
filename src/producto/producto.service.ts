import { Injectable } from '@nestjs/common';
import {
  CreateProductoInput,
  Producto,
  UpdateProductoInput,
} from 'src/graphql';

import { prisma } from 'prisma/client';
import * as dayjs from 'dayjs';
import { plainToClass } from 'class-transformer';
import { Prisma } from '@prisma/client';

const DEFAULT_FACTURAS_LENGTH = 3;

@Injectable()
export class ProductoService {
  async create(createProductoInput: CreateProductoInput) {
    try {
      let createProductoPayload = await prisma.producto.create({
        data: {
          ...createProductoInput,
          cantidadVendida: 0,
        },
      });

      return plainToClass(Producto, createProductoPayload);
    } catch (e) {
      console.error(`Error creating Producto ${e}`);
      throw new Error('Error creating entity');
    }
  }

  async findAll(whereClause?: Prisma.ProductoFindManyArgs) {
    return await prisma.producto.findMany({
      ...whereClause,
    });
  }

  async findOne(id: string) {
    return await prisma.producto.findUnique({
      where: {
        id: id,
      },
      include: { facturas: false },
    });
  }

  async update(id: string, updateProductoInput: UpdateProductoInput) {
    try {
      let createProductoPayload = await prisma.producto.update({
        where: {
          id: id,
        },
        data: {
          nombre: updateProductoInput.nombre ?? undefined,
          marca: updateProductoInput.marca ?? undefined,
          cantidadVendida: updateProductoInput.cantidadVendida ?? undefined,
          cantidadDisponible:
            updateProductoInput.cantidadDisponible ?? undefined,
          comisionEmpleado: updateProductoInput.comisionEmpleado ?? undefined,
          precioProveedor: updateProductoInput.precioProveedor ?? undefined,
          precioPublico: updateProductoInput.precioPublico ?? undefined,
        },
        include: { facturas: { take: DEFAULT_FACTURAS_LENGTH } },
      });

      return plainToClass(Producto, createProductoPayload);
    } catch (e) {
      console.error(`Error creating Producto ${e}`);
      throw new Error('Error creating entity');
    }
  }

  remove(id: string) {
    return `This action removes a #${id} producto`;
  }

  async isAvailable(productoId: string, quantity: number) {
    try {
      const productoDisponible = await prisma.producto.findFirst({
        where: {
          id: productoId,
          AND: {
            cantidadDisponible: {
              gte: quantity,
            },
          },
        },
      });

      return !(productoDisponible === null);
    } catch (e) {
      console.error(`Error checking if Producto is available: ${e}`);
      return false;
    }
  }

  async substractFromInventory(id: string, quantity: number) {
    try {
      return await prisma.producto.update({
        where: {
          id: id,
        },
        data: {
          cantidadDisponible: {
            decrement: quantity,
          },
        },
      });
    } catch (e) {
      console.error(`Error substracting ${quantity} Productos: ${e}`);
      throw e;
    }
  }
}
