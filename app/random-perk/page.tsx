import SurvivorRandomPerk from "@/components/survivor-random-perks/SurvivorRandomPerks";

const RandomPerk = () => {
  return (
    <section className="container h-screen grid md:grid-cols-2 md:space-y-0 space-y-5 mx-auto pt-40">
      <SurvivorRandomPerk />
      <SurvivorRandomPerk />
    </section>
  );
};

export default RandomPerk;
