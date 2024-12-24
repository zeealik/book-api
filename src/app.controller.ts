import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books') 
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.find();
  }
  @Get(':id')
  getBookById(@Param('id') id:string): Book {
    const bookID = +id;
    return this.bookService.findById(bookID)
  }
  @Post()
  addBook(@Body() book:Partial<Book>): Book {
    const bookData = book;
    return this.bookService.create(bookData);
  }
  @Put(':id')
  updateBook(@Param('id') id:string, @Body() book:Partial<Book>): Book {
    const bookID = +id;
    return this.bookService.update(bookID, book);
  }

  @Delete(':id')
  deleteBook(@Param('id') id:string): string {
    const bookID = +id;
    this.bookService.delete(bookID);
    return 'Book Deleted';
  }
}
  