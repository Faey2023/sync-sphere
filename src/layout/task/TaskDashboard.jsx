import { Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Items from "./Todo/Items";

const TaskDashboard = () => {
  const { user, userSignOut } = useAuth();
  const { displayName, photoURL } = user || {};
  //   const redirectHome = redirect();
  const handleLogOut = () => {
    userSignOut().then((res) => {
      toast.success("User Logged out successfully.");
      //   redirectHome("/");
    });
  };
  return (
    <>
      {/*  */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mt-5">
          {/* Page content here */}
          <Items />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open Dashboard
          </label>
        </div>
        <div
          className="drawer-side"
          style={{
            background:
              "linear-gradient(112.5deg, rgb(95, 10, 135) 11.4%, rgb(164, 80, 139) 60.2%)",
            width: "200px",
            color: "white",
            fontSize: "24px",
          }}
        >
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* Sidebar content here */}
          <div>
            <div className="avatar flex flex-col items-center p-5">
              <div className="w-20 rounded-full ">
                <img alt="user photo" src={photoURL} />
              </div>
              <p className="text-center">{displayName}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col">
            <Link id="home" className="hover:text-black ml-10" to="/">
              <FaHome className="inline-block mr-3" />
              Home
            </Link>
            {user && (
              <button onClick={handleLogOut} className="hover:text-black">
                <IoIosLogOut className="inline-block mr-3" />
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default TaskDashboard;
