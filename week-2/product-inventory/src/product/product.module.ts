import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';

@Module({
  providers: [ProductService],
  controllers: [ProductController],
  imports: [
    /* the Module containing r */
  ],
})
export class ProductModule {}
