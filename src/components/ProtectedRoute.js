import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  const authdUser = useSelector((state) => state.authdUser);
  const location = useLocation();

  return authdUser ? (
    children
  ) : (
    <Navigate to="/signin" replace state={{ path: location.pathname }} />
  );
};

export default ProtectedRoute;
