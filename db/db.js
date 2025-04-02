import mongoose from "mongoose";


const dbConnect = async ()=>{
    try {
        const dbInstance = await mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGODB_NAME}`)
        console.log("Database connected");
        // console.log("Db Instance",dbInstance);

    } catch (error) {
        console.log("error",error.message);
        process.exit(1)
    }
}


export default dbConnect