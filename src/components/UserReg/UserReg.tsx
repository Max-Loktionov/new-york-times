import { useTranslation } from "react-i18next";
import { NAVLink } from "../UserMenu/UserMenu.styled";

export default function AuthNav() {
  const { t } = useTranslation();
  return (
    <div>
      <NAVLink to="login"> {t("login.enter")}</NAVLink>
    </div>
  );
}
