import { Request, Response } from "express";
import { SigninDTO } from "../entities/SigninDTO"

export class AuthController {
    async signin(request: Request, response: Response) {
        const { email, password } = request.body as SigninDTO
        console.log(email, password)
    }
}