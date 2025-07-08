import { killerBuilds } from "@/data/killerBuilds";

const BuildOfTheWeek = () => {
  return (
    <section className="grid grid-cols-2 container mx-auto gap-x-10 px-4 py-8">
      {/* killer */}

      <div className="space-y-8">
        {killerBuilds
          .filter((element, index) => [2, 3].includes(index))
          .map((build, index) => (
            <div
              key={index}
              className="p-4 border border-gray-700/80 rounded-md bg-black/50 backdrop-blur-sm"
            >
              <div>
                <h3 className="text-3xl text-red-500/90">
                  Killer: {build.name}
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-200 mt-2">
                  {build.perks.map((perks) => (
                    <li
                      className="bg-red-800/80 px-3 py-1 rounded-full text-xs tracking-wide"
                      key={perks}
                    >
                      {perks}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mt-3 text-gray-300 text-md">
                  {build.description}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* survivor */}
    </section>
  );
};

export default BuildOfTheWeek;
