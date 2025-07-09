export type SurvivorBuild = {
  name: string;
  perks: string[];
  description: string;
};

export const survivorBuilds: SurvivorBuild[] = [
  {
    name: "Wiggle Slap Build",
    perks: ["Flip Flop", "Boil Over", "Power Struggle", "Tenacity"],
    description:
      "Designed for the defiant and the daring, this build lets you turn the tables while being carried. Boil Over disrupts the killer’s grip, Flip Flop converts your struggle into potential recovery, Tenacity helps you crawl with purpose, and Power Struggle makes your final slap a stunning surprise. It’s a build for those who don’t just endure the torment — they fight back, tooth and nail. Wiggle free, rise again, and make them regret every second they carried you.",
  },
  {
    name: "Shadow Walker Build",
    perks: ["Iron Will", "Urban Evasion", "Quick & Quiet", "Dance With Me"],
    description:
      "For the silent shadow who disappears like mist in the moonlight. This build lets you crouch-walk swiftly through grass and rubble, vault without a whisper, and vanish without a trace. Iron Will silences your pain, and Urban Evasion glides you under the radar. No breathing, no noise — just footsteps fading into nothingness. Perfect for the ghost who was never truly seen.",
  },
  {
    name: "Healing Hands Build",
    perks: [
      "We'll Make It",
      "Desperate Measures",
      "Botany Knowledge",
      "Empathy",
    ],
    description:
      "A blessing among the damned. When others cry out, you’re already running to their side. Your healing is swift, almost sacred — Botany and Empathy guide your hands while Desperate Measures fuels your resolve. You’re not just a survivor; you're the beating heart of the team, the light that doesn’t flicker, even when all hope seems lost.",
  },
  {
    name: "Loop De Loop Build",
    perks: ["Dead Hard", "Lithe", "Windows of Opportunity", "Resilience"],
    description:
      "This is the build for the loop artist — the one who sees the map like a maze to be danced. Every vault, every pallet, every tile becomes your stage. Injured? You vault faster. Sprinting? You dart like a fox. With resilience and knowledge, you loop until the killer’s patience runs out. The chase is your art — and you never stop painting.",
  },
  {
    name: "Selfish Escape Build",
    perks: ["Adrenaline", "Decisive Strike", "Unbreakable", "Sprint Burst"],
    description:
      "Survival is the only goal. You are the embodiment of self-preservation, a blur of adrenaline and resolve. Sprint Burst starts your flight, Adrenaline ends it in glory. If you fall, Unbreakable brings you back. If they grab you, Decisive Strike hits back hard. You’re not the team player — you’re the survivor who *always* makes it to the gate, no matter what.",
  },
  {
    name: "The Aura Whisperer Build",
    perks: ["Kindred", "Bond", "Open-Handed", "Dark Sense"],
    description:
      "See all, know all — the eyes and ears of your team. Bond lets you sense your allies, Kindred reveals the truth in hooks, Open-Handed expands your insight, and Dark Sense warns you of danger to come. You guide, protect, and plan. You are the strategist in the Fog, and your knowledge is your greatest power.",
  },
  {
    name: "Unhook Hero Build",
    perks: [
      "Borrowed Time",
      "Off the Record",
      "Deliverance",
      "Decisive Strike",
    ],
    description:
      "Built for the brave who rush the hook without a second thought. You take the risk, shield the unhooked, and if needed, fight your way out. Borrowed Time gives others a chance, Off the Record keeps you safe, and Deliverance rewards your selfless heart. You're not just a hero — you're the storm that disrupts the killer's plan.",
  },
  {
    name: "Generator Gremlin Build",
    perks: ["Prove Thyself", "Repressed Alliance", "Overzealous", "Resilience"],
    description:
      "Your mission is clear: power those gens, no matter the cost. With Prove Thyself, you speed the process with teammates. Overzealous kicks in after cleansing — your cleanse is your engine. Repressed Alliance buys time, and Resilience keeps the tempo high, even when injured. You’re not flashy, but you are relentless. You are the hum behind every gate that opens.",
  },
];
