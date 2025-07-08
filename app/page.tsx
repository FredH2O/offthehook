import Hero from "@/components/hero/Hero";
import Nav from "@/components/navigation/Nav";
import ScrollVelocity from "@/components/reactbits-components/ScrollVelocity";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ScrollVelocity
        texts={[
          "No Mither Gang, Unite!",
          "Killer or Survivor: Who’s Got the Edge?",
        ]}
        velocity={20}
        className="custom-scroll-text text-5xl"
      />
    </div>
  );
}
