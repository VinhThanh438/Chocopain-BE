import User from "@common/user/User";
import { ISignupRequest } from "./auth.request";
import { APIError } from "@common/error/api.error";
import { ErrorCode } from "@config/errors";

export class AuthService {
    static async checkSignupInfo(request: ISignupRequest): Promise<void> {
        // check existed user_name and phone_number
        const user = await User.findOne({
            $or: [{ user_name: request.user_name }, { phone: request.phone }],
        });

        if (user && user.user_name === request.user_name) {
            throw new APIError({
                message: 'user name already taken!',
                status: ErrorCode.BAD_REQUEST,
                errorCode: ErrorCode.SERVER_AUTH_ERROR
            })
        }

        if (user && user.phone && user.phone === request.phone) {
            throw new APIError({
                message: 'phone number already taken!',
                status: ErrorCode.BAD_REQUEST,
                errorCode: ErrorCode.SERVER_AUTH_ERROR,
            });
        }
    }
}