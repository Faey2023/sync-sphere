import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const showSettings = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <Menu>
        <a id="home" className="menu-item" href="/">
          <GiHamburgerMenu />
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu> */}
    </>
  );
};

export default NavBar;
// https://i.ibb.co/c39zVYM/logo.png
