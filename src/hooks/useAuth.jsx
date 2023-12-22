import { useContext } from "react";
import { AuthContext } from "../authentication/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
