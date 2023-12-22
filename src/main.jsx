import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./router/MyRouter.jsx";
import AuthProvider from "./authentication/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster/>
      <RouterProvider router={MyRouter} />
    </AuthProvider>
  </React.StrictMode>
);
