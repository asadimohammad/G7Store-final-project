import React, { useState } from "react";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Routers from "./Routers";


const MainLayout = () => {

  return (
    <div className="main-layout">
      <Routers/>
    </div>
  );
};

export default MainLayout;
