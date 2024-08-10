import { z } from "zod";

export const userInputValidation = z.object({
    id: z.string({ required_error: "id is reaquerd" }),
    password: z
        .string({ required_error: "password is requerd", message: "password must be string" })
        .min(8, { message: "password minimum 8" })
        .max(16, { message: "password max 16" }),
    role: z.enum(["student", "faculty", "admin"])
})