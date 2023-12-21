import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../page/home/Home";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      { path: "/", element: <Home />},
      { path: "/login", element: <Home />},
      // { path: "/", element: <Home />},
      // { path: "/", element: <Home />},
  ],
  },
]);

export default MyRouter;
