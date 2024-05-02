import mongoose from "mongoose";
import app from "../app";
import { dbUrl, port } from "../env";

export const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl);
        console.log(`MongoDB connected at ${dbUrl}`);
        app.listen(port, () => console.log(`Server running at ${port} port`));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
