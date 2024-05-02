import "dotenv/config";

export const port = process.env.PORT ?? "5000";
export const dbUrl = process.env.DB_URL ?? "";
export const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET ?? "";
export const accessTokenExpiry = process.env.ACCESS_TOKEN_EXPIRY ?? "";
