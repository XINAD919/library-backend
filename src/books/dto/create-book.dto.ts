import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  Max,
  IsNotEmpty,
} from "class-validator";
export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ required: false })
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(1000)
  @Max(2024)
  @IsOptional()
  publicationDate?: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  synopsis?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  publisher?: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  genre?: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  quantity?: number;
}
