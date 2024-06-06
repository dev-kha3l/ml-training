import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactsService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async create(createContactDto: CreateContactDto) {
    try {
      createContactDto.updatedAt = new Date();
      return await this.prisma.contact.create({
        data: createContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }
  async findAll() {
    const contacts = await this.prisma.contact.findMany();
    return contacts;
  }

  async findOne(id: number) {
    const contact = await this.prisma.contact.findUnique({
      where: {
        id,
      },
    });
    return contact;
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.update({
      where: {
        id,
      },
      data: updateContactDto,
    });
    return contact;
  }

  async updateOne(id: number, updateContactDto: UpdateContactDto) {
    const contact = await this.prisma.contact.update({
      where: {
        id,
      },
      data: updateContactDto,
    });
    return contact;
  }

  async remove(id: number) {
    const contact = await this.prisma.contact.delete({
      where: {
        id,
      },
    });
    return contact;
  }
}
