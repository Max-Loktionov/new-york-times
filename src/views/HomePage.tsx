import { useTranslation } from "react-i18next";
import { Oval } from "react-loader-spinner";

export default function Home() {
  const { t, ready } = useTranslation();

  if (ready) {
    return (
      <div>
        <h1>{t("home.head")}</h1>
        <p>{t("home.title")}</p>
        <p>
          {t("home.description.part1")}
          {t("home.description.part2")}
        </p>
      </div>
    );
  }
  return (
    <div>
      <Oval />
    </div>
  );
}
