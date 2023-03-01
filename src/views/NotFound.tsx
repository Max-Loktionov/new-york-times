import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { NAVLink } from "components/AppBar/AppBar.styled";

export default function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h2" sx={{ p: 8, textAlign: "center" }}>
        {t("home.notfound")}
      </Typography>

      <div>
        <NAVLink to={"/"}>{t("navigation.home")}</NAVLink>
      </div>
    </>
  );
}
