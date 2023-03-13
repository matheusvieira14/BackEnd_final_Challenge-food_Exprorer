import { Router } from "express";
import { AuthController } from "../controller/authController";


const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/signup", authController.signup);
authRoutes.post("/signin", authController.signin);

export = authRoutes;