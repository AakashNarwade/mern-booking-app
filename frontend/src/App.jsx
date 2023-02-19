import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h2>Error element</h2>,
    },
    {
      path: "hotel",
      element: <Hotel />,
    },
    {
      path: "list",
      element: <List />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
