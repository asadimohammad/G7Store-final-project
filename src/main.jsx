import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainLayout />
  </BrowserRouter>
);
