import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { selectCurrentUser } from "redux/user/authSlice";
import { useLogOutUserMutation } from "redux/user/userApi";
import defaultAva from "img/ava.png";
import { Button } from "components/LoginForm/LoginForm.styled";
import { Box, Ava, Name, BoxGreet } from "./UserMenu.styled";

export default function UserMenu() {
  const [logOutUser] = useLogOutUserMutation();
  const { name } = useSelector(selectCurrentUser);
  const avatar = defaultAva;
  const { t } = useTranslation();
  return (
    <Box>
      <Ava src={avatar} alt="" width="32" />
      <BoxGreet>
        {t("login.greet")} , <Name> {name}</Name>
      </BoxGreet>
      <Button type="button" onClick={logOutUser}>
        {t("login.exit")}
      </Button>
    </Box>
  );
}
