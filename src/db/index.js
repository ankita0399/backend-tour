import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const port = process.env.MONGODB_URI;
console.log(port, DB_NAME)

const connectDB = async () => {
    try{
       const connectionInstance =  await mongoose.connect(`${port}/${DB_NAME}`)
       console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MONGODB connection failed", error)
        process.exit(1)
    }
}

export default connectDB;