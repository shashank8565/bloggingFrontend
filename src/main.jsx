import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import Blogs from "./components/Blogs";
import { Toaster } from "sonner";
import NavBar from "./components/NavBar";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/register",
    element: (
      <div>
        <Register />
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <NavBar />
        <Blogs />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>
);
