import Image from "next/image";
import Link from "next/link";

const Navigation = [
  { name: "Home", link: "/" },
  { name: "Random Perk", link: "/random-perk" },
  { name: "About Me", link: "/" },
];

const Nav = () => {
  return (
    <nav className="fixed z-100 top-0 w-full backdrop-blur-3xl flex justify-evenly items-center">
      <div className="flex items-center">
        <Image
          className="p-3"
          src="/campfire.png"
          alt="offthehook Logo"
          width={100}
          height={100}
        />
        <h2 className="text-xl font-bold">Off the Hook</h2>
      </div>

      <div>
        <ul className="flex gap-3 ">
          {Navigation.map((nav, index) => (
            <li
              key={index}
              className="hover:bg-red-500 px-3 py-1 rounded-sm transition-all duration-150"
            >
              <Link href={nav.link}>{nav.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
