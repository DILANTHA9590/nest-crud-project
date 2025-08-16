import {
  IsBoolean,
  IsNotEmpty,
  isNumber,
  IsNumber,
  IsString,
} from 'class-validator';

export class createProductDto {
  @IsNotEmpty()
  @IsString()
  productId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  sellingPrice: number;

  @IsNotEmpty()
  @IsString()
  rating: string;

  @IsNotEmpty()
  @IsBoolean()
  available: boolean;
}
