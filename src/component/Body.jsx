import Login from "./Login"
import Browse from "./Browse"
import Otp from "./Otp"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/otp",
    element: <Otp/>
  },
  {
    path: "/browse",
    element: <Browse/>
  }
])

const Body = () => {
  return <RouterProvider router={appRouter}/>
}

export default Body