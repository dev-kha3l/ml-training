import { Injectable } from '@nestjs/common';
import { CreateBooklendingDto } from './dto/create-booklending.dto';
import { UpdateBooklendingDto } from './dto/update-booklending.dto';
import { BorrowBookLendingDto } from './dto/borrow-booklending.dto';
import { ReturnBookLendingDto } from './dto/return-booklending.dto';
import { Book, User, BookLending, PrismaClient } from '@prisma/client';

@Injectable()
export class BooklendingService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  //create a users
  async createUser(createUserDto: {
    name: string;
    email: string;
  }): Promise<User> {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });
    return user;
  }

  //get a user
  async getUser(id: number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  //get all users
  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  //remove a user
  async removeUser(id: number): Promise<User> {
    const user = await this.prisma.user.delete({
      where: { id },
    });
    return user;
  }

  //Create a book
  async createBook(createBookDto: CreateBooklendingDto): Promise<Book> {
    const book = await this.prisma.book.create({
      data: createBookDto,
    });
    return book;
  }

  //update a book
  async updateBook(
    id: number,
    updateBookDto: UpdateBooklendingDto,
  ): Promise<Book> {
    const book = await this.prisma.book.update({
      where: {
        id,
      },
      data: updateBookDto,
    });
    return book;
  }

  //get a book
  async getBook(id: number): Promise<Book> {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  //get all books
  async getBooks(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  //remove a book
  async deleteBook(id: number): Promise<Book> {
    const book = await this.prisma.book.delete({
      where: {
        id,
      },
    });
    return book;
  }

  //borrow a book
  async borrowBook(borrowBookDto: BorrowBookLendingDto): Promise<BookLending> {
    const { userId, bookId, dueDate } = borrowBookDto;
    const book = await this.prisma.book.findUnique({ where: { id: +bookId } });

    if (!book || !book.available) {
      throw new Error('Book is not available for borrowing');
    }

    const borrowedBook = await this.prisma.bookLending.create({
      data: {
        userId,
        bookId,
        borrowedAt: new Date(),
        dueDate,
      },
    });

    await this.prisma.book.update({
      where: { id: +bookId },
      data: { available: false },
    });

    return borrowedBook;
  }
  //return a book
  async returnBook(returnBookDto: ReturnBookLendingDto): Promise<BookLending> {
    const { id } = returnBookDto;
    const borrowedBook = await this.prisma.bookLending.findUnique({
      where: { id },
    });

    if (!borrowedBook || borrowedBook.returned) {
      throw new Error(
        'Book is not currently borrowed or has already been returned',
      );
    }

    const returnedBook = await this.prisma.bookLending.update({
      where: { id },
      data: { returned: true },
    });

    await this.prisma.book.update({
      where: { id: borrowedBook.bookId },
      data: { available: true },
    });

    return returnedBook;
  }

  async getBorrowedBooks(userId: number): Promise<BookLending[]> {
    return this.prisma.bookLending.findMany({
      where: { userId, returned: false },
      include: { book: true },
    });
  }
}
