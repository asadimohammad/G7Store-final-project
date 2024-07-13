import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./components/MainLayout.jsx";
import "./assets/styles/maFw.css";
import "./assets/styles/styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
