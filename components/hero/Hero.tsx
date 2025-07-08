import Image from "next/image";

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
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-5xl font-bold font-bebas tracking-widest uppercase">
          Off The Hook
        </h1>
        <p className="text-lg mt-4 font-light">
          Where survivors chat by the fire.
        </p>
      </div>
    </section>
  );
};

export default Hero;
