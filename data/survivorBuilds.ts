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
      "Designed for the defiant and the daring, this build lets you turn the tables while being carried. Boil Over disrupts the killer’s grip, Flip Flop converts your struggle into potential recovery, Tenacity helps you crawl with purpose, and Power Struggle makes your final slap a stunning surprise. Wiggle free and make them pay for it.",
  },
  {
    name: "Shadow Walker Build",
    perks: ["Iron Will", "Urban Evasion", "Quick & Quiet", "Dance With Me"],
    description:
      "For the silent shadow who disappears like mist. This build lets you crouch-walk swiftly, vault without a sound, and vanish without a trace. No breathing, no noise — just silence and escape.",
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
      "A blessing among the damned. You rush to fallen allies, heal with speed, and radiate kindness. Every scream of pain is your call to action, every injured friend a reason to sprint. Healing is your weapon.",
  },
  {
    name: "Loop De Loop Build",
    perks: ["Dead Hard", "Lithe", "Windows of Opportunity", "Resilience"],
    description:
      "This is the build for the loop artist — the master of tiles and pallets. Spot every vault and pallet, vault faster when injured, and chain escapes like a choreographed dance. Loop until the killer weeps.",
  },
  {
    name: "Selfish Escape Build",
    perks: ["Adrenaline", "Decisive Strike", "Unbreakable", "Sprint Burst"],
    description:
      "Survival is the only goal. With Sprint Burst and Adrenaline, you're gone before the killer blinks. Get slugged? Rise again. Grabbed? Strike back. You're not here to help — you're here to *live*.",
  },
  {
    name: "The Aura Whisperer Build",
    perks: ["Kindred", "Bond", "Open-Handed", "Dark Sense"],
    description:
      "See all, know all. Whether allies are near or far, and whether the killer lurks nearby, you're always a step ahead. Your eyes pierce the Fog — and guide your friends to safety.",
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
      "Built for the brave who rush the hook and make miracles happen. You earn your freedom and protect others as you run interference. You’re the guardian angel with a backbone of steel.",
  },
  {
    name: "Generator Gremlin Build",
    perks: ["Prove Thyself", "Repressed Alliance", "Overzealous", "Resilience"],
    description:
      "Your mission is simple: power those gens. With a blessing or a cleanse, you surge with speed. With a teammate nearby, you fly. You're not flashy — you're the reason the gates open.",
  },
];
