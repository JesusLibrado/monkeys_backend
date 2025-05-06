import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductoService } from './producto.service';
import {
  CreateProductoInput,
  UpdateProductoInput
} from 'src/graphql';

@Resolver('Producto')
export class ProductoResolver {
  constructor(private readonly productoService: ProductoService) {}

  @Mutation('createProducto')
  create(@Args('createProductoInput') createProductoInput: CreateProductoInput) {
    return this.productoService.create(createProductoInput);
  }

  @Query('productos')
  findAll() {
    return this.productoService.findAll();
  }

  @Query('availableProductos')
  availableProductos() {
    return this.productoService.findAll({
      where: {
        cantidadDisponible: {
          gt: 0
        }
      }
    });
  }

  @Query('producto')
  findOne(@Args('id') id: string) {
    return this.productoService.findOne(id);
  }

  @Mutation('updateProducto')
  update(@Args('updateProductoInput') updateProductoInput: UpdateProductoInput) {
    return this.productoService.update(updateProductoInput.id, updateProductoInput);
  }

  @Mutation('removeProducto')
  remove(@Args('id') id: string) {
    return this.productoService.remove(id);
  }
}
