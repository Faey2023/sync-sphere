import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../page/home/Home";
import Login from "../layout/accounts/Login";
import Register from "../layout/accounts/Register";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home /> },

      // { path: "/", element: <Home />},
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default MyRouter;
