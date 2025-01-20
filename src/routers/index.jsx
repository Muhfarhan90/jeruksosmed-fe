import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Register from "../pages/Register";
import Following from "../pages/Following";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/following",
    element: <Following />,
    },
  
]);

export default router;
