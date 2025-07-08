const BuildOfTheWeek = () => {
  return (
    <section className="grid grid-cols-2 container m-auto space-x-50">
      {/* killer */}

      <div className="space-y-5">
        <div>
          <h3 className="text-4xl">Killer</h3>
          <ul className="flex space-x-3">
            <li>Fire Up</li>
            <li>Brutal Strength</li>
            <li>Nowhere to Hide</li>
            <li>Bamboozle</li>
          </ul>
        </div>

        {/* description */}
        <div>
          <p>
            This build specializes in vaulting speed and generator control. By
            kicking generators, you can reveal survivors locations and
            drastically reduce chase time — by up to 80%. The pros? You’ll find
            survivors fast and end chases even faster, simply by tracking which
            gens are being worked on. However, there are a few cons. Without
            Corrupt Intervention, survivors can start doing gens immediately.
            There’s also not much slowdown built into the kit, and your ability
            to kick generators is limited. Overall, this build works well with
            nearly every killer in the game — especially M1-based killers. Fire
            Up becomes more powerful as the trial progresses, making you
            increasingly lethal in the late game.
          </p>
        </div>
      </div>
      {/* survivor */}

      {/* <div>
        <div>
          <h3>Survivor</h3>
          <ul>
            <li>Finesse</li>
            <li>Kindred</li>
            <li>Resilience</li>
            <li>Lithe</li>
          </ul>
        </div>
        <div>
          <p>
            This build specializes in chase efficiency, squeezing out every
            precious second to buy your teammates time to complete generators.
            Lithe gives you a burst of speed after a vault, Resilience boosts
            your vault speed when youre injured, and Finesse helps you secure
            those lightning-fast vaults early on. Pros: If you’re confident with
            loops and timing your vaults, this build can be absolutely lethal —
            even while injured. Cons: Finesse doesn’t activate when youre
            injured, and Resilience only works when youre not at full health —
            so there’s a bit of trade-off depending on your state. Overall, this
            build offers solid versatility for almost every situation. Kindred
            provides essential aura reading — unless youre up against a stealth
            killer, in which case... well, may the Entity have mercy.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default BuildOfTheWeek;
