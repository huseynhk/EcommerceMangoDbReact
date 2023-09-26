import mongoose from "mongoose";

const connectDB = async () => {
 try{
    const connected = await mongoose.connect(process.env.MANGO_URL)
    console.log(`Connected to database, ${connected.connection.host}`);
 }
 catch(error){
    console.log(`Error connecting to database, ${error}`);
 }
}

export default connectDB