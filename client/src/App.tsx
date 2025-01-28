import React from "react"
import Home from "./pages/Home"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Header from "./components/Header"
import Layout from "./utilities/Layout"
import Write from "./pages/Write"


function App() {
  const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/:id",
          element:<Write/>
        }
      ]
    }, 
])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
