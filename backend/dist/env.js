"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessTokenExpiry = exports.accessTokenSecret = exports.dbUrl = exports.port = void 0;
require("dotenv/config");
exports.port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "5000";
exports.dbUrl = (_b = process.env.DB_URL) !== null && _b !== void 0 ? _b : "";
exports.accessTokenSecret = (_c = process.env.ACCESS_TOKEN_SECRET) !== null && _c !== void 0 ? _c : "";
exports.accessTokenExpiry = (_d = process.env.ACCESS_TOKEN_EXPIRY) !== null && _d !== void 0 ? _d : "";
