import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(112.5deg, rgb(95, 10, 135) 11.4%, rgb(164, 80, 139) 60.2%)",
      }}
      className="text-white "
    >
      <div className="max-w-7xl justify-between flex mx-auto flex-col md:flex-row p-5">
        <div className="flex flex-col">
          <img src="https://i.ibb.co/c39zVYM/logo.png" alt="website logo" />
          {/* links */}
          <div className="flex justify-center text-center gap-5 flex-wrap md:flex-row">
            <Link to="/contact" className=" hover:underline hover:text-black">
              Contact
            </Link>
            <Link to="/contact" className=" hover:underline hover:text-black">
              Developers
            </Link>
            <Link to="/terms" className="hover:underline hover:text-black">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row text-3xl gap-5">
          <Link to='/facebook'>
            <FaFacebookF className="hover:text-black" />
          </Link>
          <Link>
            <FaXTwitter className="hover:text-black" />
          </Link>
          <Link>
            <FaYoutube className="hover:text-black" />
          </Link>
          <Link>
            <FaLinkedinIn className="hover:text-black" />
          </Link>
          <Link>
            <FaDiscord className="hover:text-black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
