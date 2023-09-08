import { PartialType } from "@nestjs/mapped-types";
import { CreateBookDto } from "./create-book.dto";
import { IsString, IsNumber, IsOptional, Min, Max } from "class-validator";
export class UpdateBookDto extends PartialType(CreateBookDto) {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  author?: string;

  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(2024)
  @IsOptional()
  publicationDate?: number;

  @IsString()
  @IsOptional()
  synopsis?: string;

  @IsString()
  @IsOptional()
  publisher?: string;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsNumber()
  @IsOptional()
  quantity?: number;
}
