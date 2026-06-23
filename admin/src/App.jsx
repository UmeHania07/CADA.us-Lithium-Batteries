import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./pages/Add";
import List from "./pages/List";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from "./pages/Update";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = "Rs.";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token") : "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className='min-h-screen bg-gray-50 w-full'>
      <ToastContainer position="top-right" autoClose={3000} />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <div className="w-full">
          <Navbar setToken={setToken} />
          <hr className="border-gray-200" />
          <div className='flex items-start w-full'>
            <Sidebar />
            <div className='flex-1 p-8 text-gray-600 min-h-screen'>
              <Routes>
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                {/* 🔋 FIXED: Slash ke baad colon (:) lagaya hai */}
                <Route path='/update/:id' element={<Update token={token} />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;