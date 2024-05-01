import app from "../app";
import { port } from "../env";

export const connectDB = async () => {
    try {
        // const connectionInstance = await mongoose.connect(`${dbUrl}`);
        // console.log(
        //     `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
        // );
        app.listen(port, () => {
            console.log(`server running at ${port} port`);
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
