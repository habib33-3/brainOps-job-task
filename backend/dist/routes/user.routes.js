"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateInput_1 = __importDefault(require("../middlewares/validateInput"));
const user_schema_1 = require("../schemas/user.schema");
const user_controller_1 = require("../controller/user.controller");
const router = (0, express_1.Router)();
router.post("/api/user/register", (0, validateInput_1.default)(user_schema_1.registerUserSchema), user_controller_1.registerUserHandler);
router.post("api/user/login", (0, validateInput_1.default)(user_schema_1.loginSchema), user_controller_1.loginHandler);
exports.default = router;
