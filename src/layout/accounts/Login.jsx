import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../hooks/useAuth";
import SharedButton from "../../shared/SharedButton";
import toast from "react-hot-toast";

const Login = () => {
  AOS.init();
  const { loginUser } = useAuth();
  // const currentLocation = useLocation();
  // const destinedLocation = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((response) => {
        toast.success("Login successfully!!!");
        console.log(response.user);
        // go to the route after login
        // destinedLocation(currentLocation?.state ? currentLocation.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <>
      <h1 className="text-center mt-5 text-xl md:text-4xl font-bold">Login </h1>
      <div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto my-5">
        <div className="card shrink-0 h-full max-w-md shadow-2xl bg-base-100 flex-1 mt-14 card-body">
          <form
            onSubmit={handleLogin}
            data-aos="fade-down"
            data-aos-duration="1600"
          >
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
                <Link to="/register" className="">
                  Don&apos;t have an account?{" "}
                  <span className="text-purple-700 font-bold link-hover ">
                    Register
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
                Login
              </button>
            </div>
          </form>
          <SharedButton />
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
