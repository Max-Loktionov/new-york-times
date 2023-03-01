import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import type { RootState } from "redux/store";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import UserReg from "components/UserReg";
import { Button, Box, ButtonGroup } from "@mui/material";
import { Container, Header } from "./AppBar.styled";

export default function MenuAppBar() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <Container>
      <Header>
        <Navigation />
        <Box component="div" sx={{ p: 2, display: "flex" }}>
          {isLoggedIn ? <UserMenu /> : <UserReg />}

          <ButtonGroup variant="text" aria-label="text button group">
            <Button color="secondary" onClick={() => changeLanguage("ua")}>
              ua
            </Button>
            <Button color="secondary" onClick={() => changeLanguage("en")}>
              en
            </Button>
          </ButtonGroup>
        </Box>
      </Header>
    </Container>
  );
}
