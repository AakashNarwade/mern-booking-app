import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";

function App() {
  const routeDefinition = createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/hotels" element={<List />} />
      <Route path="/hotels/:id" element={<Hotel />} />
    </Route>
  );

  const appRouter = createBrowserRouter(routeDefinition);
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     errorElement: <h2>Error element</h2>,
  //   },
  //   {
  //     path: "hotels",
  //     element: <h2>hhhhhhhhh</h2>,

  //     // element: <List />,
  //     children: [
  //       {
  //         path: ":id",
  //         element: <h2>idididididi</h2>,
  //       },
  //     ],
  //   },
  // ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
