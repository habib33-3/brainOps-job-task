import argon2 from "argon2";
import { Request, Response } from "express";
import { LoginType, RegisterUserType } from "../schemas/user.schema";
import UserModel from "../models/user.model";
import { generateAccessToken } from "../services/user.services";

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite:
        process.env.NODE_ENV === "production"
            ? "none"
            : ("strict" as "none" | "strict" | "lax" | boolean),
};

export const registerUserHandler = async (
    req: Request<object, object, RegisterUserType>,
    res: Response
) => {
    try {
        const user = req.body;

        await UserModel.create(user);

        const token = generateAccessToken(user.email);

        return res.status(200).cookie("token", token, cookieOptions).json({
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
        const message = "invalid email or password";

        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message,
            });
        }

        const passwordValid = await argon2.verify(user.password, password);

        if (!passwordValid) {
            return res.status(400).json({
                message,
            });
        }

        const userData = { ...user.toJSON(), password: undefined };

        const token = generateAccessToken(email);

        return res.status(200).cookie("token", token, cookieOptions).json({
            message: "login successful",
            user: userData,
        });
    } catch (err: any) {
        console.error("Error login user:", err.message);

        return res.status(500).json({ message: "Internal server error" });
    }
};
