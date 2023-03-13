import { prisma } from "../../database/prisma";
import { hash } from "bcrypt";

export class CreateUser {

    async execute(name: string, email: string, password: string) {
        const hashedPassword = await hash(password, 8);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return user
    }

}