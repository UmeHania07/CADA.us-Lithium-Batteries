import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to fetch products");
    }
  };

  const removeProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        const response = await axios.delete(
          `${backendUrl}/api/product/delete/${id}`,
          { headers: { token } }
        );

        if (response.data.success) {
          toast.success(response.data.message || "Product removed successfully!");
          await fetchList();
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error(error.response?.data?.message || "Failed to remove product");
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <main className="w-full max-w-6xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-sm">
      <p className="text-xl font-semibold text-gray-700 mb-6">All Products List</p>

      {/* 💻 Desktop Table Header (Mobile par auto hidden rahega) */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_2fr_1fr_1fr] items-center py-3 px-4 bg-gray-100 border border-gray-200 rounded text-sm font-bold text-gray-700 mb-3 text-left">
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className="text-center">Action</p>
      </div>

      {/* 📦 Products Container */}
      <div className="flex flex-col gap-4 md:gap-3">
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              /* 🔋 FIXED: Mobile layout flex-col stacked clear block hai aur Desktop par perfect matching Grid item align hai */
              className="flex flex-col md:grid md:grid-cols-[1fr_3fr_2fr_1fr_1fr] items-start md:items-center py-4 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors gap-3 md:gap-2 text-sm text-gray-600 bg-white"
            >
              {/* Image Section */}
              <div className="w-20 h-20 md:w-14 md:h-14 flex items-center justify-center bg-gray-50 rounded border self-center md:self-auto overflow-hidden p-1">
                <img
                  className="w-full h-full object-contain"
                  src={item.image && item.image[0] ? item.image[0] : ""}
                  alt={item.name}
                />
              </div>

              {/* Name Section */}
              <div className="w-full">
                <p className="font-semibold md:font-medium text-gray-800 text-base md:text-sm text-center md:text-left">
                  {item.name}
                </p>
              </div>

              {/* Category Section */}
              <div className="w-full md:w-auto flex md:block justify-between items-center border-b border-gray-100 md:border-none pb-2 md:pb-0">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Category</span>
                <p className="bg-gray-100 md:bg-transparent px-2.5 py-1 md:p-0 rounded text-xs md:text-sm text-gray-700 font-medium md:font-normal">
                  {item.category}
                </p>
              </div>

              {/* Price Section */}
              <div className="w-full md:w-auto flex md:block justify-between items-center border-b border-gray-100 md:border-none pb-2 md:pb-0">
                <span className="md:hidden text-xs font-bold text-gray-400 uppercase">Price</span>
                <p className="font-bold text-amber-600 md:text-gray-700 text-base md:text-sm">
                  {currency}{item.price}
                </p>
              </div>

              {/* ✏️ ❌ Action Section (Mobile layout par standard baseline structure set kiya) */}
              <div className="w-full md:w-auto flex items-center justify-center gap-4 mt-2 md:mt-0 pt-1 md:pt-0">
                {/* Edit Button */}
                <button
                  onClick={() => navigate(`/update/${item._id}`)}
                  className="flex-1 md:flex-none text-center text-blue-600 hover:text-blue-800 font-semibold md:font-medium text-sm border border-blue-200 md:border-none px-4 py-1.5 md:p-0 rounded-md bg-blue-50 md:bg-transparent transition active:scale-95 md:active:scale-100"
                  title="Edit Product"
                >
                  Edit ✏️
                </button>

                {/* Delete Button */}
                <button
                  className="text-red-400 hover:text-red-600 transition p-1.5 text-2xl md:text-lg rounded-full hover:bg-red-50"
                  onClick={() => removeProduct(item._id)}
                  title="Delete Product"
                >
                  🗑️
                </button>
              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">No products available</p>
        )}
      </div>
    </main>
  );
};

export default List;