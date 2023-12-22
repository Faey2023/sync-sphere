import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loadingAnimation.json";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <Lottie animationData={loadingAnimation} style={{ height: "50vh" }} />
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRouter;
