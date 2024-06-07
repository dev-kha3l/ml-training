import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createProduct(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: createProductDto,
    });
    return product;
  }

  async updateProduct(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return product;
  }

  async deleteProduct(id: number) {
    const product = await this.prisma.product.delete({
      where: { id },
    });
    return product;
  }

  async getProduct(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    return product;
  }

  async getProducts() {
    const products = await this.prisma.product.findMany();
    return products;
  }
  async getProductCount() {
    const productCount = await this.prisma.product.count();
    return productCount;
  }
  async getProductsByCategory(category: string) {
    const products = await this.prisma.product.findMany({
      where: { product_category: category },
    });
    return products;
  }
  async updateProductQuantity(id: number, quantity: number) {
    const product = await this.prisma.product.update({
      where: { id },
      data: { Quantity: quantity },
    });
    return product;
  }
}
