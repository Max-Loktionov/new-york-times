import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "redux/store";

interface IPrivateRouteProps {
  children: JSX.Element;
  navTo?: string;
}
function PrivateRoute({ children, navTo = "/" }: IPrivateRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  const navigate = useNavigate();

  // if user is authenticated we get connect to private route, otherwise redirected to login
  return isLoggedIn ? children : navigate(navTo);
}

export default PrivateRoute;
