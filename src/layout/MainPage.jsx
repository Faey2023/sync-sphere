import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const MainPage = () => {
  return (
    <div>
      <h1>main page</h1>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
