import { Outlet } from "react-router-dom";
import AppBar from "components/AppBar/AppBar";
import { useGetUserQuery } from "redux/user/userApi";
import { useSelector } from "react-redux";
import type { RootState } from "redux/store";
import { Container } from "@mui/material";

const Layout = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  useGetUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <AppBar />
      <Container maxWidth="md">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
