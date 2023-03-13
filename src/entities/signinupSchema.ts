import { z } from "zod";

export const SignupSchema = z.object({
    name: z.string().nonempty(),
    email: z.string({ required_error: "E-mail é obrigatorio" }).nonempty().email(),
    password: z.string().nonempty()
})