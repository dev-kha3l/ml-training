import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BooklendingService } from './booklending.service';
import { CreateBooklendingDto } from './dto/create-booklending.dto';
import { UpdateBooklendingDto } from './dto/update-booklending.dto';
import { Booklending } from './entities/booklending.entity';
import { Book, User, BookLending, PrismaClient } from '@prisma/client';
import { BorrowBookLendingDto } from './dto/borrow-booklending.dto';
import { ReturnBookLendingDto } from './dto/return-booklending.dto';

@Controller('booklending')
export class BooklendingController {
  constructor(private readonly bookLendingService: BooklendingService) {}

  @Post('user')
  createUser(@Body() createUserDto: { name: string; email: string }) {
    return this.bookLendingService.createUser(createUserDto);
  }

  @Post('book')
  async createBook(@Body() createBookDto: CreateBooklendingDto) {
    return this.bookLendingService.createBook(createBookDto);
  }

  @Patch('book/:id')
  async updateBook(
    @Param('id') id: number,
    @Body() updateBookDto: UpdateBooklendingDto,
  ) {
    return await this.bookLendingService.updateBook(+id, updateBookDto);
  }
  @Delete('book/:id')
  deleteBook(@Param('id') id: number) {
    return this.bookLendingService.deleteBook(+id);
  }

  @Post('borrow')
  borrowBook(@Body() borrowBookDto: BorrowBookLendingDto) {
    return this.bookLendingService.borrowBook(borrowBookDto);
  }

  @Post('return')
  returnBook(@Body() returnBookDto: ReturnBookLendingDto) {
    return this.bookLendingService.returnBook(returnBookDto);
  }

  @Get('borrowed/:userId')
  getBorrowedBooks(@Param('userId') userId: number) {
    return this.bookLendingService.getBorrowedBooks(+userId);
  }
}
