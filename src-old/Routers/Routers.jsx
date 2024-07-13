import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Shop from "../components/Shop";
import Blog from "../components/Blog";
import LastProd from "../components/LastProd";

const Routers = () => {
  return (
    <Routes>
      <Route path="/shop" element={<Shop />} >
        <Route path="last-products" element={<LastProd/>}/>
      </Route>
      <Route path="/blog" element={<Blog />} />
    </Routes>
  )
};

export default Routers;
