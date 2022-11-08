import { createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../pages/AllServices.js/AllServices";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])

export default router;