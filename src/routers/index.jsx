import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Following from "../pages/Following";
import Layout from "../layout/index";
import DetailPostingan from "../pages/DetailPostingan";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
      {
        path: "/following",
        element: <Following />,
      },
      {
        path: "/post/:id",
        element: <DetailPostingan />,
      },
    ],
  },
]);

export default router;
