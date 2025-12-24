/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, MaxLength, MinLength, IsEmail } from 'class-validator';

export class RegisterCustomerDTO {
    @IsString({ message: 'Full name must be a string' })
    @IsNotEmpty({ message: 'Full name is required' })
    @MaxLength(50, { message: 'Full name must not exceed 50 characters' })
    @MinLength(2, { message: 'Full name must be at least 2 characters' })
    fullName: string;

    @IsString({ message: 'Address must be a string' })
    @IsNotEmpty({ message: 'Address is required' })
    @MaxLength(200, { message: 'Address must not exceed 200 characters' })
    address: string;

    @IsEmail({}, { message: 'Email must be a valid email address' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;


    @IsString({ message: 'Password must be a string' })
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(100, { message: 'Password must not exceed 100 characters' })
    password: string;
}