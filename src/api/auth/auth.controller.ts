import { NextFunction, Request, Response } from "express";

export class AuthController {
    static async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const request = req.body;
            res.sendJson({ data: request });
        } catch (error) {
            next(error);
        }
    }
}