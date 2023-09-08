import { CreateBookDto } from "./create-book.dto";
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    title?: string;
    author?: string;
    publicationDate?: number;
    synopsis?: string;
    publisher?: string;
    genre?: string;
    quantity?: number;
}
export {};
