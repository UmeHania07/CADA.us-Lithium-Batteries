import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Update = ({ token }) => {
  const { id } = useParams(); // URL se product ki ID uthayega
  const navigate = useNavigate();

  // Form States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null); // Nayi image select karne ke liye
  const [existingImage, setExistingImage] = useState(""); // Purani image dikhane ke liye
  const [loading, setLoading] = useState(false);

  // 🔋 NEW: Warranty aur Specifications ke liye states
  const [warranty, setWarranty] = useState("");
  const [specifications, setSpecifications] = useState(""); // Isko hum text area mein string banakar manage karenge

  // 🔄 1. Pehle se maujood product ka data fetch karna
  const fetchProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/single/${id}`);
      if (response.data.success) {
        const product = response.data.product;
        setName(product.name);
        setDescription(product.description || "");
        setPrice(product.price);
        setCategory(product.category);
        setExistingImage(product.image[0]); // Purani image set ki

        // 🔋 NEW: Backend se data lekar state fill ki
        setWarranty(product.warranty || "");

        // Agar specifications object hai, toh use hum stringify karke textarea mein dikhayenge
        if (product.specifications && typeof product.specifications === "object") {
          setSpecifications(JSON.stringify(product.specifications, null, 2));
        } else {
          setSpecifications(product.specifications || "");
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load product details");
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [id]);

  // 💾 2. Form Submit (Product Update) Handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(false);

    try {
      setLoading(true);
      const formData = new FormData();

      // Backend ko required fields bhejna (Sath mein ID bhejni zaroori hai)
      formData.append("id", id);
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);

      // 🔋 NEW: Warranty aur Specifications ko formData mein add kiya
      formData.append("warranty", warranty);

      // Validation: Check karein ke specifications sahi JSON format mein hain ya nahi
      try {
        if (specifications.trim() !== "") {
          JSON.parse(specifications); // Sirf check karne ke liye parsing
          formData.append("specifications", specifications);
        } else {
          formData.append("specifications", JSON.stringify({}));
        }
      } catch (jsonErr) {
        toast.error("Specifications must be a valid JSON object!");
        setLoading(false);
        return;
      }

      // Agar admin ne nayi image select ki hai toh bheinjiye, warna purani hi rahegi
      if (image) {
        formData.append("image", image);
      }

      const response = await axios.post(
        `${backendUrl}/api/product/update`,
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message || "Product updated successfully!");
        navigate("/list"); // Update hone ke baad wapas list par le jaye
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to update product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <p className="text-xl font-semibold text-gray-700 mb-6">Update Product Details</p>

      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 text-sm text-gray-600">

        {/* Image Upload/Preview Section */}
        <div className="flex flex-col gap-2 mb-2">
          <p className="font-medium">Product Image</p>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-gray-50 border rounded flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-contain"
                src={image ? URL.createObjectURL(image) : existingImage}
                alt="Product"
              />
            </div>
            <label htmlFor="image" className="cursor-pointer bg-gray-100 hover:bg-gray-200 border border-gray-300 px-4 py-2 rounded font-medium text-gray-700 transition">
              Change Image
              <input
                type="file"
                id="image"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        {/* Product Name */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Product Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
            placeholder="e.g. Cada Heavy Duty 12V Pro"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Description</label>
          <textarea
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 resize-none"
            placeholder="Write product specifications or details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Category */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Category</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
              placeholder="e.g. Lithium Battery"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          {/* Price */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">Price</label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
              placeholder="Price amount"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        {/* 🔋 NEW: Warranty Input Field */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Warranty</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
            placeholder="e.g. 1 Year, 2 Years"
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
          />
        </div>

        {/* 🔋 NEW: Specifications Input Field (JSON format string) */}
        <div className="flex flex-col gap-1">
          <label className="font-medium">Specifications (JSON Format)</label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 font-mono text-xs bg-gray-50"
            placeholder={`Example:\n{\n  "Capacity": "100Ah",\n  "Voltage": "12V"\n}`}
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto self-end mt-4 px-8 py-2.5 bg-black text-white font-medium rounded shadow hover:bg-gray-800 transition disabled:bg-gray-400"
        >
          {loading ? "Updating..." : "Save Changes"}
        </button>

      </form>
    </main>
  );
};

export default Update;