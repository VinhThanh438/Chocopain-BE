import { NextFunction, Request, Response } from "express";

export class AuthMiddleware {
    public static signup(req: Request, res: Response, next: NextFunction) {
        next();
    }
}