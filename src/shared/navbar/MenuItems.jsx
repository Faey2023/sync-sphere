import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHome, FaTasks, FaAddressCard } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const MenuItems = () => {
  const { user, userSignOut } = useAuth();
  const handleLogOut = () => {
    userSignOut().then((res) => {
      toast.success("User Logged out successfully.");
    });
  };

  return (
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
        {user && (
          <Link className="hover:text-black" to="/task">
            <FaTasks className="inline-block mr-3" />
            Task
          </Link>
        )}
        {user ? (
          <button onClick={handleLogOut} className="hover:text-black">
            <IoIosLogOut className="inline-block mr-3" />
            Log Out
          </button>
        ) : (
          <Link className="hover:text-black" to="/login">
            <IoIosLogIn className="inline-block mr-3" />
            Log In
          </Link>
        )}
      </Menu>
    </div>
  );
};

export default MenuItems;
