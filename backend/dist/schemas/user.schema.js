"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerUserSchema = void 0;
const zod_1 = require("zod");
exports.registerUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "email is required",
        }).email({ message: "enter valid email" }),
        name: (0, zod_1.string)({
            invalid_type_error: "name must be string",
        }).optional(),
        password: (0, zod_1.string)({
            invalid_type_error: "password must be string",
            required_error: "password is required",
        }),
        avatar: (0, zod_1.string)({
            invalid_type_error: "avatar must be string",
        }).optional(),
    }),
});
exports.loginSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        email: (0, zod_1.string)({
            required_error: "email is required",
        }).email({ message: "enter valid email" }),
        password: (0, zod_1.string)({
            invalid_type_error: "password must be string",
            required_error: "password is required",
        }),
    }),
});
