import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.updatedAt = new Date();
      return await this.prisma.users.create({
        data: createUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.users.findMany({ where: { deletedAt: null } });
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.users.findUnique({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      updateUserDto.updatedAt = new Date();
      return await this.prisma.users.update({
        where: { id, deletedAt: null },
        data: updateUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.users.update({
        where: { id, deletedAt: null },
        data: { deletedAt: new Date() },
      });
    } catch (error) {
      return error.message;
    }
  }
}
