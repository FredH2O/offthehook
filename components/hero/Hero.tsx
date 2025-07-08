"use client";
import Image from "next/image";
import BlurText from "../reactbits-components/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed.");
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background image */}
      <Image
        src="/images/campfire-wallpaper.jpg"
        alt="Wallpaper"
        fill
        className="object-cover"
        priority
      />

      {/* Blurred glass overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Foreground content (optional) */}
      <div className="relative z-10 flex flex-col container m-auto justify-center items-center h-full text-white">
        <h1>
          <BlurText
            text="Off The Hook"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-5xl font-bold font-bebas tracking-widest uppercase"
          />
        </h1>
        <p className="text-lg mt-4 font-light">
          Where survivors chat by the fire.
        </p>
      </div>
    </section>
  );
};

export default Hero;
