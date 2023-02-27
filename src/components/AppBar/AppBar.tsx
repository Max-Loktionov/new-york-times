import { useSelector } from "react-redux";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import UserReg from "components/UserReg";
// import { Container } from "./AppBar.styled";
import type { RootState } from "redux/store";

export default function AppBar() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    // <Container>
    <div>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <UserReg />}
      </div>
    </div>
    //  </Container>
  );
}
