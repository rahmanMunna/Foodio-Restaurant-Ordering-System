/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { IsString, Length } from 'class-validator';

export class CreateCategoryDTO {
    @IsString({ message: 'Category name must be a string' })
    @Length(1, 50, { message: 'Category name must be between 1 and 50 characters' })
    category: string;
}
