import express, { json } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import router from "./routes";

const app = express();

app.use(json());

app.use(cookieParser());

app.use(morgan("combined"));

app.use(
    cors()
);

app.use(router);


export default app;