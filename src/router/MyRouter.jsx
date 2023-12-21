import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../page/home/Home";
import Login from "../layout/accounts/Login";

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
  { path: "/regi", element: <Home /> },
]);

export default MyRouter;
