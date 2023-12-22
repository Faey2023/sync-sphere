import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";
import Home from "../page/home/Home";
import Login from "../layout/accounts/Login";
import Register from "../layout/accounts/Register";
import TaskDashboard from "../layout/task/TaskDashboard";
import ErrorPage from "../error/ErrorPage";
import PrivateRouter from "./PrivateRouter";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "/task",
    element: (
      <PrivateRouter>
        <TaskDashboard />
      </PrivateRouter>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

export default MyRouter;
