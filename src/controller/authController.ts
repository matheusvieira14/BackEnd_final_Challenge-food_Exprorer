import { Request, Response } from "express";
import { SignupSchema } from "../entities/signinupSchema";
import { CreateUser } from "../useCases/auth/createUser";


export class AuthController {
    async signup(request: Request, response: Response) {
        const createUser = new CreateUser();

        try {
            const { name, email, password } = SignupSchema.parse(request.body);

            const result = await createUser.execute(name, email, password);

            return response.status(201).json(result.id)
        } catch (error) {
            return response.status(400).json(error)
        }
    }
}