import {
    getModelForClass,
    modelOptions,
    pre,
    prop,
    Severity,
} from "@typegoose/typegoose";
import argon2 from "argon2";

@modelOptions({
    schemaOptions: {
        timestamps: true,
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})
@pre<User>("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    const hash = await argon2.hash(this.password);

    this.password = hash;
})
export class User {
    @prop({
        required: true,
        unique: true,
        type: String,
    })
    email!: string;

    @prop({
        type: String,
    })
    name?: string;

    @prop({
        required: true,
        type: String,
    })
    password!: string;

    @prop({
        type: String,
    })
    avatar?: string;
}

const UserModel = getModelForClass(User);

export default UserModel;
