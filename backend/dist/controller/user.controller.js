"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginHandler = exports.registerUserHandler = void 0;
const argon2_1 = __importDefault(require("argon2"));
const user_model_1 = __importDefault(require("../models/user.model"));
const user_services_1 = require("../services/user.services");
const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production"
        ? "none"
        : "strict",
};
const registerUserHandler = async (req, res) => {
    try {
        const user = req.body;
        await user_model_1.default.create(user);
        const token = (0, user_services_1.generateAccessToken)(user.email);
        return res.status(200).cookie("token", token, cookieOptions).json({
            message: "User created Successfully",
            success: true,
        });
    }
    catch (err) {
        console.error("Error registering user:", err.message);
        if (err.code === 11000) {
            return res.status(400).json({ message: "User already exists" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.registerUserHandler = registerUserHandler;
const loginHandler = async (req, res) => {
    try {
        const message = "invalid email or password";
        const { email, password } = req.body;
        const user = await user_model_1.default.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message,
            });
        }
        const passwordValid = await argon2_1.default.verify(user.password, password);
        if (!passwordValid) {
            return res.status(400).json({
                message,
            });
        }
        const userData = { ...user.toJSON(), password: undefined };
        const token = (0, user_services_1.generateAccessToken)(email);
        return res.status(200).cookie("token", token, cookieOptions).json({
            message: "login successful",
            user: userData,
        });
    }
    catch (err) {
        console.error("Error login user:", err.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
exports.loginHandler = loginHandler;
