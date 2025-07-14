import SectionAndArticle from "../SectionAndArticle";
import { Lore } from "@/data/lore";
import { getDayOfYear } from "date-fns";

const LoreOfTheDay = () => {
  const today = new Date();
  const dayOfYear = getDayOfYear(today);

  const index = dayOfYear % Lore.length; // modulo to cycle
  const dailyLore = Lore[index];

  return (
    <div className="bg-red-500/50 py-5">
      <h2 className="text-5xl text-center">Lore Of The Day 📕</h2>
      <SectionAndArticle
        title={dailyLore.title}
        description={dailyLore.description}
      />
    </div>
  );
};

export default LoreOfTheDay;
