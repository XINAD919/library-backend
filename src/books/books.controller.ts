import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/books..dto";
@Controller("books")
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }
  @Post()
  createBook(@Body() newBook: CreateBookDto) {
    try {
      return "guardando";
      this.booksService.createBook(newBook.id, newBook.title, newBook.author);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  @Delete(":id")
  deleteBook(@Param("id") id: string) {
    return this.deleteBook(id);
  }
}
