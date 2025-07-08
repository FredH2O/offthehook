import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex justify-center items-center w-full h-screen border">
      <Image
        fill
        src="/images/campfire-wallpaper.jpg"
        alt="Wallpaper"
        priority
      />
    </section>
  );
};

export default Hero;
