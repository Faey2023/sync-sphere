import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-center mt-10 text-xl md:text-4xl font-bold">Login </h1>
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-10">
        <div className="card shrink-0 h-full max-w-md shadow-2xl bg-base-100 flex-1 mt-14">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/regi" className="label-text-alt link link-hover">
                  Don&apos;t have an account?{" "}
                  <span className="text-purple-700 font-bold">Register</span>
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

export default Login;
