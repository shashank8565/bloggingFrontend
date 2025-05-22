import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

import { Toaster } from "sonner";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import Detailed from "./components/detailed";
import CreateBlog from "./components/CreateBlog";

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
        <Home />
      </div>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <div>
        <NavBar />
        <Detailed />
      </div>
    ),
  },
  {
    path: "create",
    element: (
      <div>
        <NavBar />
        <CreateBlog />
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
