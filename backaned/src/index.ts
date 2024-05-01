
import { connectDB } from "./config/db.config";

connectDB().catch((error:any) => {
    console.error("Error starting express server:", error.message);
    process.exit(1);
});