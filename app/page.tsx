import BuildOfTheWeek from "@/components/BuildOfTheWeek/BuildOfTheWeek";
import Hero from "@/components/Hero/Hero";
import LoreOfTheDay from "@/components/LoreOfTheDay/LoreOfTheDay";
import ScrollVelocity from "@/components/ReactbitsComponents/ScrollVelocity";

export default function Home() {
  return (
    <div className="flex flex-col space-y-1">
      <Hero />
      <div className="bg-red-500/30 py-5">
        <ScrollVelocity
          texts={[
            "On Going Event: Twisted Masquerade 🎭",
            "Killer 🔪 or Survivor 👟: Who’s Got the Edge?",
          ]}
          velocity={20}
          className="custom-scroll-text text-5xl py-1"
        />
      </div>

      <BuildOfTheWeek />
      <LoreOfTheDay />
    </div>
  );
}
