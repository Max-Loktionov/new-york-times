import { useSelector } from "react-redux";
import type { RootState } from "redux/store";
import { useTranslation } from "react-i18next";
import { NAVLink, NavContainer } from "components/AppBar/AppBar.styled";

const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  const { t } = useTranslation();

  return (
    <NavContainer>
      <NAVLink to="/">{t("navigation.home")}</NAVLink>
      <NAVLink to="/news">{t("navigation.news")}</NAVLink>
      {isLoggedIn && <NAVLink to="/profile">{t("navigation.profile")}</NAVLink>}
    </NavContainer>
  );
};

export default Navigation;
