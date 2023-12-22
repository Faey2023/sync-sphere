import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../page/home/Home";
import Login from "../layout/accounts/Login";
import Register from "../layout/accounts/Register";
import TaskDashboard from "../layout/task/TaskDashboard";
import ErrorPage from "../error/ErrorPage";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/task", element: <TaskDashboard /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default MyRouter;
