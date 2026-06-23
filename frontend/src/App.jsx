import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop"
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import ProductDetail from "./components/ProductDetail";
import Services from "./Pages/Services";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  return (
    // Yahan se px-4 aur responsive paddings bilkul hata di hain
    <div className='overflow-x-hidden'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/service' element={<Services/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
