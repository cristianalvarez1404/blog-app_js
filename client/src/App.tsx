import React from "react";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./utilities/Layout";
import Write from "./pages/Write";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Dashboard from "./pages/Dashboard"
import Tasks from "./pages/Tasks";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const queryClient = new QueryClient()

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
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/tasks",
          element:<Tasks/>
        }
      ],
    },
  ]);

  return (
    <>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>

    <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
    </>

  );
}

export default App;
