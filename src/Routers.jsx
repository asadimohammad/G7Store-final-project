import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Blog from "./pages/Blog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />}>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Route>
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
};

export default Routers;
