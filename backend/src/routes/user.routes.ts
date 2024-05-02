import { Router } from "express";
import validateInput from "../middlewares/validateInput";
import { loginSchema, registerUserSchema } from "../schemas/user.schema";
import {
    loginHandler,
    registerUserHandler,
} from "../controller/user.controller";

const router = Router();

router.post(
    "/api/user/register",
    validateInput(registerUserSchema),
    registerUserHandler
);

router.post("api/user/login", validateInput(loginSchema), loginHandler);

export default router;
