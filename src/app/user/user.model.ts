import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    id:{
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    needPasswordChange:{
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        enum: ["student", "faculty", "admin"]
    },
    stutas: {
        type: String,
        enum: ["in_progress", "blocked"],
        default: "in-progress"
    },
    isDeleted:{
        type: Boolean,
        default: false
    }
})

const UserModel = model<TUser>("user", userSchema)

export default UserModel