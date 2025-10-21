import Header from "@/components/header/Header";
import { ModeToggle } from "@/components/modeToggle";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <main>
      <Header />
      <h1 className="text-center text-4xl text-mint font-semibold">
        {t("title", {
          defaultValue: "Hello",
          description: "this is title for home page",
        })}
      </h1>

      <ModeToggle />
    </main>
  );
};

export default HomePage;
