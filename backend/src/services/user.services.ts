import jwt from "jsonwebtoken";
import { accessTokenExpiry, accessTokenSecret } from "../env";

export const generateAccessToken = async (email: string) => {
    const token =  jwt.sign(email, accessTokenSecret, {
        expiresIn: accessTokenExpiry,
    });

    return token;
};
