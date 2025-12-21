/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */

import { IsBoolean, IsNotEmpty, IsNumber, IsString, MaxLength, Min } from "class-validator";

export class CreateFoodDTO {
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    @MaxLength(100, { message: 'Name must not exceed 100 characters' })
    name: string;

    @IsNumber()
    @Min(0, { message: 'Price must be a positive number' })
    price: number;

    @IsBoolean()
    isAvailable: boolean;

    @IsString()
    @MaxLength(200, { message: 'Description must not exceed 200 characters' })
    description: string;

    @IsNumber()
    @IsNotEmpty({ message: 'CategoryId is required' })
    categoryId: number;
}