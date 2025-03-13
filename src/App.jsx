import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Category from "./Components/Category";
import Home from "./Components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar stays visible on all pages */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
