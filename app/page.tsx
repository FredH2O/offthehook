import BuildOfTheWeek from "@/components/build-of-the-week/BuildOfTheWeek";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navigation/Nav";
import ScrollVelocity from "@/components/reactbits-components/ScrollVelocity";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Nav />
      <Hero />
      <ScrollVelocity
        texts={[
          "No Mither Gang, Unite!",
          "Killer or Survivor: Who’s Got the Edge?",
        ]}
        velocity={20}
        className="custom-scroll-text text-5xl py-1"
      />
      <BuildOfTheWeek />
    </div>
  );
}
