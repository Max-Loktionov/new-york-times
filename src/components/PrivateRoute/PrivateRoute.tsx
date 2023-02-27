import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import type { RootState } from "redux/store";

interface IRouteProps {
  navTo: string;
  restricted?: boolean;
}

export function PrivateRoute({ navTo = "/" }: IRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  // if user is authenticated we get connect to private route, otherwise redirected to login
  return isLoggedIn ? <Outlet /> : <Navigate to={navTo} />;
}

export function PublicRoute({ navTo = "/", restricted = false }: IRouteProps) {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navTo} /> : <Outlet />;
}
