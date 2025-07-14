"use client";
import Image from "next/image";
import BlurText from "../ReactbitsComponents/BlurText";

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
      <div className="relative z-10 space-y-3 flex flex-col container m-auto justify-center items-center h-full text-white">
        <h1>
          <BlurText
            text="Off The Hook"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-glow animate-pulse text-5xl font-bold font-bebas tracking-widest uppercase"
          />
        </h1>
        <p className="text-md px-5 font-light text-center">
          Where survivors and killers gather by the fire… under the{" "}
          <span className="italic text-red-500/80 hover:animate-ping">
            Entity’s
          </span>{" "}
          gaze.
        </p>
        <button className="px-4 cursor-pointer mt-4 hover:bg-red-500/30 transition-all duration-150 py-2 rounded-full bg-red-500/40">
          Take a seat… if you dare. 🔥
        </button>
      </div>
    </section>
  );
};

export default Hero;
