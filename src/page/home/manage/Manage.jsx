import Lottie from "lottie-react";
import taskAnimation from "../../../assets/taskAnimation.json";
import { Link } from "react-router-dom";

const Manage = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse max-w-7xl mx-auto shadow-xl my-5">
      <div className="flex flex-col justify-center text-center items-center flex-1 space-y-3">
        <h1 className="font-bold text-xl md:text-4xl ">
          Effortless Task Management
        </h1>
        <p className="text-lg md:text-2xl font-semibold">
          Effortlessly manage tasks for enhanced productivity. Our tools
          simplify your workflow, making each day more efficient.
        </p>
        <Link
          to="/task"
          className="btn btn-outline text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none"
        >
          Explore Tasks
        </Link>
      </div>
      <Lottie animationData={taskAnimation} style={{ height: "85vh" }} />
    </div>
  );
};

export default Manage;
