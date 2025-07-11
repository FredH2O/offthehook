"use client";
import Image from "next/image";
import { survivorPerks } from "@/data/survivorPerks";
import { useState } from "react";
import Loading from "../uiverse-component/Loading";

const getRandomSurvivorPerk = (count: number) => {
  const selected: string[] = [];

  while (selected.length < count) {
    const perk =
      survivorPerks[Math.floor(Math.random() * survivorPerks.length)];
    if (!selected.includes(perk)) {
      selected.push(perk);
    }
  }

  return selected;
};

export type Perks = string[];

const SurvivorRandomPerks = () => {
  const [perks, setPerks] = useState<Perks>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleRandomize = () => {
    setLoading(true);

    setTimeout(() => {
      setPerks(getRandomSurvivorPerk(4));
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-5">
      <h2 className="text-4xl text-center">🎲 Survivor Random Perk</h2>

      <div className="min-h-[350px]">
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 justify-center items-center gap-1 p-1">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex flex-col w-full justify-center items-center px-3 py-2"
              >
                <Image
                  priority
                  src={`/survivor-perks-logo/${perk}.webp`}
                  width={100}
                  height={100}
                  alt="Random Survivor Perk"
                />
                <div>
                  <p className="px-3 py-1 rounded-sm bg-green-500/40 text-sm">
                    {perk.slice(0, 1).toUpperCase() +
                      perk.replace(/_/g, " ").slice(1)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <button
        disabled={loading}
        onClick={handleRandomize}
        className="px-3 py-1 disabled:bg-gray-500 disabled:line-through border hover:cursor-pointer transition-all duration-75 active:translate-y-0.5 text-black active:bg-blue-500/50 bg-blue-500 rounded-sm"
      >
        Randomize My Perks
      </button>
    </div>
  );
};

export default SurvivorRandomPerks;
