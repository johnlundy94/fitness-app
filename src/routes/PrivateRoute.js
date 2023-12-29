import { Navigate, Route } from "react-router-dom";
import { getToken } from "../service/AuthService";

const PrivateRoute = ({ element }) => {
  return getToken() ? element : <Navigate to="/signin" />;
};
export default PrivateRoute;
