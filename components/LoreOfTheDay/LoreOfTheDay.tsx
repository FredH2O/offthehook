import SectionAndArticle from "../SectionAndArticle";
import { Lore } from "@/data/lore";
import { getDayOfYear } from "date-fns";

const LoreOfTheDay = () => {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);

  const index = dayOfYear % Lore.length; // modulo to cycle
  const dailyLore = Lore[index];

  return (
    <>
      <SectionAndArticle
        title={dailyLore.title}
        description={dailyLore.description}
      />
    </>
  );
};

export default LoreOfTheDay;
