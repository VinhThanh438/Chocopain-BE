import { ITimestamp } from "@common/timestamp.interface";

export interface IUser extends Document, ITimestamp {
    id: number;
    _id: number;
    user_name: string;
    password?: string;
    email?: string;
    phone?: number;
}