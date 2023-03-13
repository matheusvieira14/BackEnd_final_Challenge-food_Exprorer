import { prisma } from "../../database/prisma";
import { compare } from "bcrypt";

export class Signin {
    async execute(email: string, password: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (user == null) {
            throw new Error()
        }

        if (!await compare(password, user.password)) {
            throw new Error()
        }

        return user
    }
}