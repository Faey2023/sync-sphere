import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Register = () => {
  AOS.init();
  return (
    <>
      <h1 className="text-center mt-5 text-xl md:text-4xl font-bold">
        Register
      </h1>
      <div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto my-5">
        <div className="card shrink-0 h-full max-w-md shadow-2xl bg-base-100 flex-1 mt-5">
          <form
            data-aos="fade-down"
            data-aos-duration="1600"
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="">
                  Already have an account?{" "}
                  <span className="text-purple-700 font-bold link-hover ">Login</span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
                Login
              </button>
            </div>
          </form>
        </div>
        <Lottie
          className="flex-1"
          animationData={loginAnimation}
          style={{ height: "80vh" }}
        />
      </div>
    </>
  );
};

export default Register;
