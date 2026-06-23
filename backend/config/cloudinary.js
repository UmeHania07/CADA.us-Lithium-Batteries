import { v2 as cloudinary } from "cloudinary";

// Cloudinary (Aapka Main Cloud Warehouse): Jab Multer image ko nikal kar server par rakh deta hai, tab Cloudinary ka kaam shuru hota hai. Cloudinary aapke server se woh file uthata hai aur use internet par (cloud par) hamesha ke liye save karke aapko ek permanent URL (https://res.cloudinary.com/...) de deta hai.
const connectCloudinary = async () => {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY,
    });
  };
  
  export default connectCloudinary;
  