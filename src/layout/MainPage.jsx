import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/navbar/NavBar";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainPage;
