import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaTasks, FaAddressCard } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import "./navbar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  const showSettings = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <Menu className="text-2xl" customBurgerIcon={<GiHamburgerMenu />}>
            <Link id="home" className="hover:text-black" to="/">
              <FaHome className="inline-block mr-3" />
              Home
            </Link>
            <Link id="about" className="hover:text-black" to="/about">
              <FaAddressCard className="inline-block mr-3" />
              About
            </Link>
            <Link id="contact" className="hover:text-black" to="/contact">
              <MdOutlineContactPhone className="inline-block mr-3" />
              Contact
            </Link>
            <Link
              onClick={showSettings}
              className="hover:text-black"
              to="/task"
            >
              <FaTasks className="inline-block mr-3" />
              Task
            </Link>
          </Menu>
        </div>
        <div>
          <img
            className="h-20 w-80 mt-2"
            src="https://i.ibb.co/c39zVYM/logo.png"
            alt="website logo"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
