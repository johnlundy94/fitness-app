import { Navigate } from "react-router-dom";
import { getToken } from "../service/AuthService";

const PublicRoute = ({ element }) => {
  return !getToken() ? element : <Navigate to="/home" />;
};
export default PublicRoute;
