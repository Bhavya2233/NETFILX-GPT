import Auth from "./Auth"
import Browse from "./Browse"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Auth/>
  },
  {
    path:"/browse",
    element:<Browse/>
  }
])

const Body = ()=>{
  return <RouterProvider router={appRouter}/>
}

export default Body