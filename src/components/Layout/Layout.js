import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import { useGetUserQuery } from 'redux/user/userApi';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const { token } = useSelector(state => state.auth);

  useGetUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
