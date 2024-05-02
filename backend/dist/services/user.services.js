"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_1 = require("../env");
const generateAccessToken = async (email) => {
    const token = jsonwebtoken_1.default.sign(email, env_1.accessTokenSecret, {
        expiresIn: env_1.accessTokenExpiry,
    });
    return token;
};
exports.generateAccessToken = generateAccessToken;
