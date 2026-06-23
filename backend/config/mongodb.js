import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("DB connected");
    })

    // Yahan e-commerce hata kar cada-batteries kar dein
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}

export default connectDB;