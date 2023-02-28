import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n, ready } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (ready) {
    return (
      <div>
        <h1>{t("home.head")}</h1>
        <p>{t("home.title")}</p>
        <button onClick={() => changeLanguage("ua")}>ua</button>
        <button onClick={() => changeLanguage("en")}>en</button>
        <p>
          {t("home.description.part1")}
          {t("home.description.part2")}
        </p>
      </div>
    );
  }
  return <span>Loading...</span>;
}
