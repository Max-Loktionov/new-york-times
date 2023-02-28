import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import type { RootState } from "redux/store";

import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import UserReg from "components/UserReg";
// import { Container } from "./AppBar.styled";

export default function AppBar() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    // <Container>
    <div>
      <div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <UserReg />}
        <div>
          <button onClick={() => changeLanguage("ua")}>ua</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </div>
      </div>
    </div>
    //  </Container>
  );
}
