import mongoose from "mongoose";
export const connectMongoDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    }catch(error){
        console.log("Error connecting to db",error);
export const connectMongoDB = async () => {
    try {
        // Ensure the .env file is loaded correctly and MONGODB_URI is set
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
    }
};
