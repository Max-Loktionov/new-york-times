import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "redux/store";

import { NAVLink } from "components/AppBar/AppBar.styled";

const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  return (
    <nav>
      <NAVLink to="/" style={{ margin: "20px" }}>
        Home
      </NAVLink>
      <NavLink to="/news">News</NavLink>
      {isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
    </nav>
  );
};

export default Navigation;
