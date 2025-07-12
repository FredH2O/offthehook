import SectionAndArticle from "../SectionAndArticle";
import { Lore } from "@/data/lore";

const LoreOfTheDay = () => {
  const dailyLore = Math.floor(Math.random() * Lore.length); // change this everyday
  const pickedRandomLore = Lore[dailyLore];

  return (
    <>
      <SectionAndArticle
        title={pickedRandomLore.title}
        description={pickedRandomLore.description}
      />
    </>
  );
};

export default LoreOfTheDay;
