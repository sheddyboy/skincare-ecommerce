import { useAppSelector } from "app/hooks";
import useVerifyUser from "hooks/useVerifyUser";
import BlogPage from "pages/BlogPage/BlogPage";
import Login from "pages/Login/Login";
import Signup from "pages/Signup/Signup";
import SuccessPage from "pages/SuccessPage/SuccessPage";
import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./layouts/Root";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import Treatment from "./pages/Treatment/Treatment";
import Treatments from "./pages/Treatments/Treatments";

function App() {
  useVerifyUser();
  const { isLoggedIn } = useAppSelector((state) => state.authSlice);
  const router = createBrowserRouter([
    {
      path: "/",
      element: isLoggedIn ? <Root /> : <Navigate to="/login" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/treatments",
          element: <Treatments />,
        },
        {
          path: "/treatments/:slug",
          element: <Treatment />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/shop/:slug",
          element: <Product />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/blog/:slug",
          element: <BlogPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: !isLoggedIn ? <Login /> : <Navigate to="/" />,
    },
    {
      path: "/signup",
      element: !isLoggedIn ? <Signup /> : <Navigate to="/" />,
    },
    {
      path: "/success/:ref",
      element: <SuccessPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
