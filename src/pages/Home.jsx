import React, { useEffect } from "react";
import { Outlet, Routes, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    let tkn = localStorage.getItem("access-token");
    if (!tkn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Home;
