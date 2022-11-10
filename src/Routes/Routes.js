import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AllServices from "../pages/AllServices.js/AllServices";
import ServiceDetails from "../pages/AllServices.js/ServiceDetails";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import AddService from "../pages/MyReviewAndService/AddService";
import MyReview from "../pages/MyReviewAndService/MyReview";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><AllServices></AllServices></PrivateRoute>
      },
      {
        path: '/serviceDetails/:id',
        loader: ({ params }) => fetch(`https://mental-press-server.vercel.app/services/${params.id}`),
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: '/myReview',
        element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
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
  },
  {
    path: '*',
    element: <div className="mx-96 my-80"><h1 className="text-4xl">OOPPSS Nothing Found !!!</h1></div>
  }
])

export default router;