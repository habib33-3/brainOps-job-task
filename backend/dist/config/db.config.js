"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("../app"));
const env_1 = require("../env");
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(env_1.dbUrl);
        console.log(`MongoDB connected at ${env_1.dbUrl}`);
        app_1.default.listen(env_1.port, () => console.log(`Server running at ${env_1.port} port`));
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
