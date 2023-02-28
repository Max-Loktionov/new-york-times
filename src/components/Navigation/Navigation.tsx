import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "redux/store";
import { useTranslation } from "react-i18next";

import { NAVLink } from "components/AppBar/AppBar.styled";

const Navigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state?.auth?.isLoggedIn);
  const { t } = useTranslation();

  return (
    <nav>
      <NAVLink to="/" style={{ margin: "20px" }}>
        {t("navigation.home")}
      </NAVLink>
      <NavLink to="/news">{t("navigation.news")}</NavLink>
      {isLoggedIn && <NavLink to="/profile">{t("navigation.profile")}</NavLink>}
    </nav>
  );
};

export default Navigation;
