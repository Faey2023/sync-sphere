import { FaGithub, FaFacebookF, FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const SharedButton = () => {
    const {googleLogin}=useAuth()
    // const currentLocation = useLocation();
  // const destinedLocation = useNavigate();
  
    const handleSocialLogin=(data)=>{
        data()
        .then((response) => {
          toast.success("User created successfully!!!");
          console.log(response.user);
          // go to the route after login
        //   destinedLocation(currentLocation?.state ? currentLocation.state : "/");
        })
        .catch((error) => {
          toast.error(error.code);
        });
    }
  return (
    <>
      <div className="flex flex-col">
        <p className="divider">Or Log in using</p>
        <div className="flex flex-row justify-center gap-5 items-center">
          <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline rounded-full text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
            <FaGoogle />
          </button>
          <button className="btn btn-outline rounded-full text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
            <FaGithub />
          </button>
          <button className="btn btn-outline rounded-full text-purple-700 hover:text-white hover:bg-purple-700 hover:border-none">
            <FaFacebookF />
          </button>
        </div>
      </div>
    </>
  );
};

export default SharedButton;
