import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import type { RootState } from "redux/store";

import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import UserReg from "components/UserReg";
import { Button, Box } from "@mui/material";
import { Container, Header, ButtonLan } from "./AppBar.styled";

export default function MenuAppBar() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Container>
      <Header>
        <Navigation />
        <Box
          component="div"
          sx={{ p: 2, display: "flex", border: "1px dashed grey" }}
        >
          {isLoggedIn ? <UserMenu /> : <UserReg />}

          <ButtonLan variant="text" aria-label="text button group">
            <Button onClick={() => changeLanguage("ua")}>ua</Button>
            <Button onClick={() => changeLanguage("en")}>en</Button>
          </ButtonLan>
        </Box>
      </Header>
    </Container>
  );
}
