import { BooksService } from "./books.service";
import { CreateBookDto } from "./dto/create-book.dto";
import { UpdateBookDto } from "./dto/update-book.dto";
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<{
        id: number;
        title: string;
        author: string;
        publicationDate: number;
        synopsis: string;
        publisher: string;
        genre: string;
        quantity: number;
    }>;
    findAll(): Promise<import("./entities/book.entity").Book[]>;
    findOne(id: number): Promise<import("./entities/book.entity").Book>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<{
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
