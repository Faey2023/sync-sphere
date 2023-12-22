import Lottie from "lottie-react";
import errorAnimation from "../assets/errorAnimation.json";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const ErrorPage = () => {
  return (
    <div className="flex max-w-7xl mx-auto mt-5">
      <Link className="text-3xl" to="/">
        <IoArrowBackOutline className="inline-block mr-3" />
        Back to home
      </Link>
      <Lottie style={{ height: "90vh" }} animationData={errorAnimation} />
    </div>
  );
};

export default ErrorPage;
