import { NextFunction, Request, Response, Router } from 'express';
import express from "express";
import authRoutes from "./routes/auth.routes";
import dotenv from "dotenv";

dotenv.config();

const AppError = require("./utils/appError");



const app = express();
app.use(express.json());
app.use(authRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    console.log(error);

    if (error instanceof AppError) {
        return response.status(400).json({
            status: "error",
            message: error.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "internal server error"
    })
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`
Server is running on Port ${PORT}`));