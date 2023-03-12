import { Router } from "express";
import { AuthController } from "../controller/authController";


const authRoutes = Router();

authRoutes.post("/signin", AuthController.signin);
authRoutes.post("/signup", AuthController.signup);

module.exports = authRoutes;