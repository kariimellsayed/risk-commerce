import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <main>
      <h1 className="text-center text-4xl text-mint font-semibold">
        {t("title")}
      </h1>
    </main>
  );
};

export default HomePage;
