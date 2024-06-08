import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: string,
        unique: true,
        lowercase: [true, "Username should be in lowercase!!"],
        required: true
    },
    email: {
        type: string,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: string,
        required: true
    },
    avatar: {
        type: string,
        required: true
    },
    coverPic: {
        type: string,
    },
    fullName: {
        type: string,
        required : true 
    },
    bio: {
        type: string,
        required : true 
    },
    refreshToken: {
        type: string,
    },
    JwtToken: {
        type: string,
    }
}, {
    timestamps: true
});

const user = mongoose.model("User", userSchema);

export default user;