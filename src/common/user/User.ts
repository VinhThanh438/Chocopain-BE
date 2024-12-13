import { ITimestamp } from "@common/timestamp.interface";
import mongoose, { Schema } from "mongoose";

export interface IUser extends Document, ITimestamp {
    id: number;
    _id: number;
    user_name: string;
    password?: string;
    email?: string;
    phone?: string;
}

const UserSchema: Schema = new Schema({
    _id: { type: Number, required: true, min: 1 },
    user_name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true }
});

export default mongoose.model<IUser>('User', UserSchema);