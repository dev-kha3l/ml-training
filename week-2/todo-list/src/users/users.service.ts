import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Task, PrismaClient } from '@prisma/client';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createUserDto: CreateUserDto) {
    try {
      createUserDto.updatedAt = new Date();
      return await this.prisma.task.create({
        data: createUserDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(
    id: number,
    data: { taskdesc: string; completed: boolean },
  ): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id,
      },
      data: {
        taskDesc: data.taskdesc,
        iscomplete: data.completed, // Update the completed property
      },
    });
  }
  async findAll() {
    const users = await this.prisma.task.findMany();
    return users;
  }

  async findOne(id: number) {
    const user = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  async remove(id: number) {
    const user = await this.prisma.task.delete({
      where: {
        id,
      },
    });
    return user;
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
