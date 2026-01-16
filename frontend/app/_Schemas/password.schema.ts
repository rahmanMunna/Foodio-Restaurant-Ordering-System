import z from "zod";

export const PasswordSchema = z
    .string()
    .nonempty()
    .min(6, "Password must be at least 6 characters")
    