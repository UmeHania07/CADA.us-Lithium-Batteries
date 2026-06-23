import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image, setImage] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Lithium Ion");
  const [subCategory, setSubcategory] = useState("12V");
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔋 NEW: Warranty aur Specifications ki states
  const [warranty, setWarranty] = useState("1 Year"); // Default 1 Year rakha hai
  const [specifications, setSpecifications] = useState(
    JSON.stringify({ Capacity: "100Ah", Voltage: "12V" }, null, 2) // Ek standard example preset kar diya
  );

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      if (image) {
        formData.append("image", image);
      }

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);

      // 🔋 NEW: Input se real data nikal kar formData mein bhejna
      formData.append("warranty", warranty);

      // Validation: Check karein ke specifications sahi JSON hai ya nahi
      try {
        if (specifications.trim() !== "") {
          JSON.parse(specifications); // Check validity
          formData.append("specifications", specifications);
        } else {
          formData.append("specifications", JSON.stringify({}));
        }
      } catch (jsonErr) {
        toast.error("Specifications must be a valid JSON object!");
        setLoading(false);
        return; // Code yahin ruk jayega agar JSON galat hoga
      }

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message || "Product Added Successfully!");

        // Form Reset
        setName("");
        setDescription("");
        setPrice("");
        setImage(false);
        setBestseller(false);
        setWarranty("1 Year");
        setSpecifications(JSON.stringify({ Capacity: "100Ah", Voltage: "12V" }, null, 2));
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full max-w-4xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <p className="text-xl font-semibold text-gray-700 mb-6">Add New Battery Product</p>

      <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4 text-sm text-gray-600">

        {/* ---- Single Image Upload Section ---- */}
        <div>
          <p className="mb-2 font-medium text-gray-700">Upload Product Image</p>
          <div className="flex gap-3">
            <label htmlFor="image" className="cursor-pointer">
              <img
                className="w-24 h-24 object-contain border-2 border-dashed border-gray-300 rounded hover:border-amber-500 bg-gray-50 p-1"
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt="upload area"
              />
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="image"
                accept="image/*"
                hidden
                required
              />
            </label>
          </div>
        </div>

        {/* ---- Product Name ---- */}
        <div className="w-full">
          <p className="mb-1.5 font-medium text-gray-700">Product Name</p>
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
            type="text"
            placeholder="e.g. CADA Heavy Duty 12V Pro"
            required
          />
        </div>

        {/* ---- Product Description ---- */}
        <div className="w-full">
          <p className="mb-1.5 font-medium text-gray-700">Product Description</p>
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 resize-none"
            rows="3"
            placeholder="Write battery descriptions..."
            required
          />
        </div>

        {/* ---- Select Dropdowns & Price ---- */}
        <div className="flex flex-col sm:flex-row sm:gap-6 gap-4 w-full max-w-[500px]">
          <div className="flex-1">
            <p className="mb-1.5 font-medium text-gray-700">Category</p>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 bg-white"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Lithium Ion">Lithium Ion</option>
              <option value="LiFePO4">LiFePO4 (Lithium Phosphate)</option>
              <option value="Solar Battery">Solar Battery</option>
              <option value="Inverter Battery">Inverter Battery</option>
            </select>
          </div>

          <div className="flex-1">
            <p className="mb-1.5 font-medium text-gray-700">Voltage / SubCategory</p>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 bg-white"
              name="subCategory"
              value={subCategory}
              onChange={(e) => setSubcategory(e.target.value)}
            >
              <option value="12V">12V</option>
              <option value="24V">24V</option>
              <option value="48V">48V</option>
              <option value="51V">51V</option>
              <option value="Custom Pack">Custom Pack</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <p className="mb-1.5 font-medium text-gray-700">Product Price</p>
          <input
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full max-w-[200px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
            type="number"
            placeholder="Price in Rs."
            required
          />
        </div>

        {/* 🔋 NEW: Warranty Input Field */}
        <div className="w-full">
          <p className="mb-1.5 font-medium text-gray-700">Warranty</p>
          <input
            type="text"
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500"
            placeholder="e.g. 1 Year, 2 Years, 6 Months"
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
            required
          />
        </div>

        {/* 🔋 NEW: Specifications Textarea (JSON Code block structure) */}
        <div className="w-full">
          <p className="mb-1.5 font-medium text-gray-700">Specifications (JSON Format)</p>
          <textarea
            rows="5"
            className="w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded outline-none focus:border-amber-500 font-mono text-xs bg-gray-50"
            placeholder={`{\n  "Capacity": "100Ah",\n  "Voltage": "12V"\n}`}
            value={specifications}
            onChange={(e) => setSpecifications(e.target.value)}
            required
          />
        </div>

        {/* ---- Bestseller ---- */}
        <div className="flex items-center gap-2 mt-1">
          <input
            name="bestseller"
            type="checkbox"
            id="bestseller"
            className="w-4 h-4 accent-amber-500 cursor-pointer"
            checked={bestseller}
            onChange={() => setBestseller((prev) => !prev)}
          />
          <label htmlFor="bestseller" className="cursor-pointer select-none font-medium text-gray-700">
            Mark as Bestseller Product
          </label>
        </div>

        {/* ---- Submit Button ---- */}
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto mt-4 px-8 py-2.5 bg-black text-white font-medium rounded shadow hover:bg-gray-800 transition disabled:bg-gray-400 uppercase tracking-wider"
        >
          {loading ? "Adding..." : "Add Battery Product"}
        </button>
      </form>
    </main>
  );
};

export default Add;