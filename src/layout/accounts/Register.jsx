import Lottie from "lottie-react";
import loginAnimation from "../../assets/loginAnimation.json";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SharedButton from "../../shared/SharedButton";

const Register = () => {
  AOS.init();
  const { userRegister, userProfile } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    userRegister(email, password)
      .then((response) => {
        toast.success("User created successfully!!!");
        console.log(response.user);
        userProfile(name, image)
          .then((response) => {
            toast.success("User Update successful!!!");
          })
          .catch((error) => {
            toast.error(error.code);
          });
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <>
      <h1 className="text-center mt-5 text-xl md:text-4xl font-bold">
        Register
      </h1>
      <div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto my-5">
        <div className="card shrink-0 h-full max-w-md shadow-2xl bg-base-100 flex-1 card-body">
          <form
            onSubmit={handleRegister}
            data-aos="fade-down"
            data-aos-duration="1600"
            
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
                <span className="label-text">Image</span>
              </label>
              <input
                type="url"
                name="image"
                placeholder="Image"
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
                placeholder="Email"
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
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="">
                  Already have an account?{" "}
                  <span className="text-purple-700 font-bold link-hover ">
                    Login
                  </span>
                </Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-outline text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
                Register
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

export default Register;
