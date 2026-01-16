import { email, z } from 'zod';
import { PasswordSchema } from './password.schema';

export const RegsiterSchema = z.object({
    fullName: z.string().nonempty('Name cant be empty'),
    email: z.string().email('Not Valid Email').nonempty('email cant be empty'),
    password: PasswordSchema,
    address: z.string().nonempty('address cant be empty')
})