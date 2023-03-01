import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import { useGetUserQuery } from "redux/user/userApi";
import { useSelector } from "react-redux";
import type { RootState } from "redux/store";
import { Box } from "@mui/material";

const Layout = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  useGetUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <AppBar />
      <Box sx={{ my: 12, mx: "auto", p: 2, maxWidth: "lg" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
