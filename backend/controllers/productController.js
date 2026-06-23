import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
import mongoose from "mongoose";

// add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, warranty, specifications, bestseller } = req.body;

    // 🔋 Sirf ek single file pakdein ge req.file se
    const imageFile = req.file;
    let imageURL = "";

    if (imageFile) {
      let result = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      imageURL = result.secure_url; // Cloudinary ka link mil gaya
    }

    // 🔋 Product ka data ab hamare naye model ke mutabiq save hoga
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      warranty,
      specifications: JSON.parse(specifications),
      bestseller: bestseller === "true" ? true : false,
      image: [imageURL], // Model mein Array hai, toh hum single URL ko array mein wrap kar rahe hain
      date: Date.now(),
    };

    // console.log(productData);
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product added successfully!" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// update product
const updateProduct = async (req, res) => {
  try {
    const { id, name, description, price, category, warranty, specifications, bestseller } = req.body;

    // 1. Pehle purana product dhoondhein
    const product = await productModel.findById(id);
    if (!product) {
      return res.json({ success: false, message: "Product not found!" });
    }

    // 2. Ek object banayein jismein sirf wohi data daalenge jo update karna hai
    let updatedData = {
      name: name || product.name,
      description: description || product.description,
      price: price ? Number(price) : product.price,
      category: category || product.category,
      warranty: warranty || product.warranty,
    };

    // 3. Agar specifications bheje hain toh parse karein warna purane rehne dein
    if (specifications) {
      updatedData.specifications = JSON.parse(specifications);
    }

    // 4. Bestseller ka case-insensitive check (jo humne abhi seekha)
    if (bestseller !== undefined) {
      updatedData.bestseller = bestseller && bestseller.toLowerCase() === "true" ? true : false;
    }

    // 5. Agar Abuzar bhai nayi image upload kar rahe hain
    const imageFile = req.file;
    if (imageFile) {
      let result = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      updatedData.image = [result.secure_url]; // Nayi image ka URL array mein wrap kar diya
    }

    // 6. Database mein update save karein
    await productModel.findByIdAndUpdate(id, updatedData, { new: true });

    res.json({ success: true, message: "Product updated successfully!" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list all product
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Product Deleted successfully!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// get single product
const singleProduct = async (req, res) => {
  try {
    //get kabhi bhi json nhi leti body mai  
    const { id } = req.params;
    const product = await productModel.findById(id);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct, updateProduct };