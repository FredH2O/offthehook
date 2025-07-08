import Image from "next/image";
import Link from "next/link";

const Navigation = ["Home", "Poll", "About"];

const Nav = () => {
  return (
    <nav className="fixed z-10 top-0 w-full flex justify-evenly items-center">
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
          {Navigation.map((index) => (
            <li
              key={index}
              className="hover:bg-red-500 px-3 py-1 rounded-sm transition-all duration-150"
            >
              <Link href="">{index}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
