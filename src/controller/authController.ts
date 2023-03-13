import { Request, Response } from "express";
import { SignupSchema } from "../entities/signinupSchema";
import { SigninSchema } from "../entities/signinSchema";
import { CreateUser } from "../useCases/auth/createUser";
import { Signin } from "../useCases/auth/signin";


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

    async signin(request: Request, response: Response) {
        const signin = new Signin();

        try {
            const { email, password } = SigninSchema.parse(request.body);

            const result = await signin.execute(email, password);

            return response.status(200).json(result)
        } catch (error) {
            return response.status(403).json("login invalido")
        }
    }
}