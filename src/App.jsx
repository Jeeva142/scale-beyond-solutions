import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Product from "./pages/Product/Product";
import Price from "./pages/Price/Price";
import Team from "./pages/Team/Team";
import Career from "./pages/Career/Career";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/product" element={<Product />} />

        <Route path="/price" element={<Price />} />

        <Route path="/team" element={<Team />} />

        <Route path="/career" element={<Career />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;