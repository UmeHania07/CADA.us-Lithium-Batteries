import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array, // Cloudinary ke multiple image URLs isme aayenge
    required: true,
  },
  category: {
    type: String, // E.g., "Car Battery", "Inverter Battery", "Solar Battery"
    required: true,
  },
  warranty: {
    type: String, // Batteries ke liye warranty boht important hoti hai (e.g., "1 Year", "6 Months")
    required: true,
  },
  specifications: {
    type: Array, // Yahan aap capacity/voltage rakh sakti hain (e.g., ["12V", "100Ah", "Maintenance Free"])
    required: true,
  },
  bestseller: {
    type: Boolean,
    default: false, // Agar true nahi bhejenge toh khud hi false rahega
  },
  date: {
    type: Number,
    required: true, // Yeh hum controller mein Date.now() se pass kar denge
  },
},
  { timestamps: true }
);

// Agar model pehle se bana hai toh wahi use karo, warna naya banao
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;