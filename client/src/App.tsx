import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./utilities/Layout";
import Write from "./pages/Write";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingOut";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <Write />,
        },
        {
          path: "/signin",
          element: <SingIn />,
        },
        {
          path: "/signup",
          element: <SingUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
