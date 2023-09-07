import { Injectable } from "@nestjs/common";
import { Book } from "./books.entity";
@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: "1",
      title: "mi primer libro",
      author: "Daniel Castaño",
    },
  ];

  getAllBooks() {
    return this.books;
  }
  getBookById() {}
  createBook(id: string, title: string, author: string) {
    const book = {
      id,
      title,
      author,
    };
    this.books.push(book);
    return book;
  }
  updateBook() {}
  deleteBook() {}
}
