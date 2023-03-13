import { Router } from "express";
import { AuthController } from "../controller/authController";


const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/signup", (request, response) => authController.signup(request, response));

export = authRoutes;