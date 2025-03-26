import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoResolver } from './producto.resolver';

@Module({
  providers: [ProductoResolver, ProductoService],
})
export class ProductoModule {}
