"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const openapi = require("@nestjs/swagger");
class Book {
    static _OPENAPI_METADATA_FACTORY() {
        return { title: { required: true, type: () => String }, author: { required: true, type: () => String }, publicationDate: { required: false, type: () => Number }, synopsis: { required: false, type: () => String }, publisher: { required: false, type: () => String }, genre: { required: false, type: () => String }, quantity: { required: false, type: () => Number }, images: { required: false, type: () => [String] } };
    }
}
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map