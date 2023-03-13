import { z } from "zod";

export const SigninSchema = z.object({
    email: z.string({ required_error: "E-mail é obrigatorio" }).nonempty().email(),
    password: z.string().nonempty()
})