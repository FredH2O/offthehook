import { killerBuilds, type KillerBuild } from "@/data/killerBuilds";
import { survivorBuilds, type SurvivorBuild } from "@/data/survivorBuilds";

const BuildOfTheWeek = () => {
  return (
    <section className="container mx-auto  px-4 py-8">
      <h2 className="text-5xl text-center py-10">
        Weekly Builds to Shake Things Up!
      </h2>
      <div className="grid grid-cols-2 gap-x-10 h-full place-items-center justify-center">
        {/* killer */}
        <div className="space-y-8 flex flex-col  justify-stretch h-full">
          {killerBuilds
            .filter((_: KillerBuild, index: number) => [0, 3].includes(index))
            .map((build: KillerBuild, index: number) => (
              <div
                key={index}
                className="p-4 border hover:bg-slate-500/10 transition-all duration-50 border-gray-700/80 rounded-md bg-black/50 backdrop-blur-sm"
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
        <div className="space-y-8 flex flex-col justify-stretch h-full">
          {survivorBuilds
            .filter((_: SurvivorBuild, index: number) => [0, 2].includes(index))
            .map((build, index) => (
              <div
                key={index}
                className="p-4 border hover:bg-slate-500/10 transition-all duration-50 border-gray-700/80 rounded-md bg-black/50 backdrop-blur-sm max-h-full"
              >
                <div>
                  <h3 className="text-3xl text-green-400/90">
                    Survivor: {build.name}
                  </h3>
                  <ul className="flex flex-wrap gap-2 text-sm text-gray-200 mt-2">
                    {build.perks.map((perks) => (
                      <li
                        key={perks}
                        className="bg-green-800/80 px-3 py-1 rounded-full text-xs tracking-wide"
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
      </div>
    </section>
  );
};

export default BuildOfTheWeek;
