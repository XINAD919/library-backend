import { Injectable } from "@nestjs/common";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Book } from "./entities/book.entity";

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  // C
  async create(data: CreateBookDto) {
    return this.prisma.book.create({ data: data });
  }
  // R
  async findAll(): Promise<Book[]> {
    return this.prisma.book.findMany();
  }

  async findOne(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }
  // U
  async update(id: number, data: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: data,
    });
  }
  // D
  async remove(id: number) {
    return this.prisma.book.delete({ where: { id } });
  }
}
