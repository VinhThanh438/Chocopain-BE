import { ISignupRequest } from "@common/auth/auth.request";
import { NextFunction, Request, Response } from "express";
import { AuthService } from "@common/auth/auth.service";

export class AuthController {
    static async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const request = req.body as ISignupRequest;
            await AuthService.checkSignupInfo(request);
            res.sendJson({ message: 'ok' });
        } catch (error) {
            next(error);
        }
    }
}