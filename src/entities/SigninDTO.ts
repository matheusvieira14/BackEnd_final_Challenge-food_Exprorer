import { z } from "zod"

export const signinDTO = z.object({
    email: z.string().nonempty().email(),
    password: z.string().nonempty()
})