import express from "express";
// 💡 Yahan humne updateProduct ko bhi import kar liya
import { addProduct, listProducts, removeProduct, singleProduct, updateProduct } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// 🔋 upload.fields hata kar upload.single('image') kar diya
productRouter.post("/add", adminAuth, upload.single('image'), addProduct);
productRouter.post("/update", adminAuth, upload.single('image'), updateProduct);
productRouter.delete("/delete/:id", adminAuth, removeProduct);
productRouter.get("/single/:id", singleProduct);
// Frontend (User Website) Ko Bhi Yeh Data Chahiye! jo admin dekha ga data 
productRouter.get("/list", listProducts);

export default productRouter;