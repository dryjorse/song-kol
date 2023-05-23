import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tours from "./pages/tours.tsx";
import BlogNews from "./pages/blogNews.tsx";
import Transport from "./pages/transport.tsx";
import Reviews from "./pages/reviews.tsx";
import FAQ from "./pages/FAQ.tsx";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/tours",
    element: <Tours />,
  },
  {
    path: "/blogNews",
    element: <BlogNews />,
  },
  {
    path: "/transport",
    element: <Transport />,
  },
  {
    path: "/reviews",
    element: <Reviews />,
  },
  {
    path: "/FAQ",
    element: <FAQ />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
