import Lottie from "lottie-react";
import bannerAnimation from "../../../assets/bannerAnimation.json";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto shadow-xl my-5">
      <div className="flex flex-col justify-center text-center items-center flex-1 space-y-3 ">
        <h1 className="font-bold text-xl md:text-4xl ">
          Elevate Your Productivity with <br />
          <span className="text-purple-700">Sync Sphere</span>
        </h1>
        <p className="text-lg md:text-2xl font-semibold">
          Simplify tasks, stay organized, achieve more.
        </p>
        <Link to="/login" className="btn btn-outline text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
          Let&apos;s Explore
        </Link>
      </div>
      <Lottie animationData={bannerAnimation} style={{ height: "80vh" }} />
    </div>
  );
};

export default Banner;

