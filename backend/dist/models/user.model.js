"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const argon2_1 = __importDefault(require("argon2"));
let User = class User {
};
exports.User = User;
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        unique: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typegoose_1.prop)({
        type: String,
    }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
exports.User = User = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    }),
    (0, typegoose_1.pre)("save", async function () {
        if (!this.isModified("password")) {
            return;
        }
        const hash = await argon2_1.default.hash(this.password);
        this.password = hash;
    })
], User);
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.default = UserModel;
