import argon2 from "argon2";
import { Request, Response } from "express";
import { LoginType, RegisterUserType } from "../schemas/user.schema";
import UserModel from "../models/user.model";

export const registerUserHandler = async (
    req: Request<object, object, RegisterUserType>,
    res: Response
) => {
    try {
        const user = req.body;

        await UserModel.create(user);

        return res.status(200).json({
            message: "User created Successfully",
            success: true,
        });
    } catch (err: any) {
        console.error("Error registering user:", err.message);

        if (err.code === 11000) {
            return res.status(400).json({ message: "User already exists" });
        }

        return res.status(500).json({ message: "Internal server error" });
    }
};

export const loginHandler = async (
    req: Request<object, object, LoginType>,
    res: Response
) => {
    try {
        const { email, password } = req.body;

        const user = await UserModel.findOne({ email }).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User doesn't exist",
            });
        }

        const passwordValid = await argon2.verify(user.password, password);

        if (!passwordValid) {
            return res.status(400).json({
                message: "wrong password",
            });
        }


    } catch (err: any) {
        console.error("Error login user:", err.message);

        return res.status(500).json({ message: "Internal server error" });
    }
};
