import { useNavigate } from "react-router-dom";
import { resetUserSession } from "../service/AuthService";

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    resetUserSession();
    navigate("/");
  };

  return <input type="button" value="Logout" onClick={logoutHandler} />;
};

export default Logout;
