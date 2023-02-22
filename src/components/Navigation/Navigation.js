import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NAVLink } from 'components/AppBar/AppBar.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <nav>
      <NAVLink to="/" style={{ margin: '20px' }}>
        Home
      </NAVLink>
      <NavLink to="/news">News</NavLink>
      {isLoggedIn && <NAVLink to="/contacts"> Contacts </NAVLink>}
      {isLoggedIn && <NavLink to="/profile">Profile</NavLink>}
    </nav>
  );
};

export default Navigation;
