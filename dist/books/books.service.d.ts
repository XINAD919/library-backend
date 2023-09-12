import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Book } from "./entities/book.entity";
export declare class BooksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateBookDto): Promise<{
        id: number;
        title: string;
        author: string;
        publicationDate: number;
        synopsis: string;
        publisher: string;
        genre: string;
        quantity: number;
    }>;
    findAll(): Promise<Book[]>;
    findOne(id: number): Promise<Book | null>;
    update(id: number, data: UpdateBookDto): Promise<{
        id: number;
        title: string;
        author: string;
        publicationDate: number;
        synopsis: string;
        publisher: string;
        genre: string;
        quantity: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        author: string;
        publicationDate: number;
        synopsis: string;
        publisher: string;
        genre: string;
        quantity: number;
    }>;
}
