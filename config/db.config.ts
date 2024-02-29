// import { Url } from "url";
import mongoose, { ConnectOptions } from "mongoose";

mongoose.set("strictQuery", true);

async function ConnectMongoDb(url: string, options?: ConnectOptions): Promise<typeof mongoose> {
    return mongoose.connect(url, options);
}

export { ConnectMongoDb };
