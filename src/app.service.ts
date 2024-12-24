import { Injectable } from '@nestjs/common';
import { Book, books } from './FakeDatabase';

@Injectable()
export class BooksService {
  find(): Book[] {
    return books;
  }
  findById(bookId: number): Book | undefined {
    return books.find((book) => book.id === bookId);
  }
  create(book: Partial<Book>): Book {
    if (!book.title) {
      throw new Error('Title is required');
    }
    const newBook: Book = {
      id: books.length + 1,
      title: book.title,
      author: book.author,
      publicationYear: book.publicationYear,
    };
    books.push(newBook);
    return newBook;
  }
  update(bookId: number, updatedBookFields: Partial<Book>): Book {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      throw new Error('Book not found');
    }
    const updatedBook = { ...books[bookIndex], ...updatedBookFields };
    books[bookIndex] = updatedBook;
    return updatedBook;
  }
  delete(bookId: number): void {
    const bookIndex = books.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
      throw new Error('Book not found');
    }
    books.splice(bookIndex, 1);
  }
} 
