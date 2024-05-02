import { object, string, TypeOf } from "zod";

export const registerUserSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email({ message: "enter valid email" }),

        name: string({
            invalid_type_error: "name must be string",
        }).optional(),

        password: string({
            invalid_type_error: "password must be string",
            required_error: "password is required",
        }),

        avatar: string({
            invalid_type_error: "avatar must be string",
        }).optional(),
    }),
});

export type RegisterUserType = TypeOf<typeof registerUserSchema>["body"];

export const loginSchema = object({
    body: object({
        email: string({
            required_error: "email is required",
        }).email({ message: "enter valid email" }),

        password: string({
            invalid_type_error: "password must be string",
            required_error: "password is required",
        }),
    }),
});

export type LoginType = TypeOf<typeof loginSchema>["body"];
