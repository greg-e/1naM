# The Event: Mechanism, Survival, and Safe Return

Canon reference for what killed everyone, why the ISS crew lived, and how the group can establish that it's safe for the crew to come home. Two tiers:

- **On-page knowable:** what the characters can measure, deduce, and say out loud. The Italy research and the ISS thread can reach all of it.
- **HIDDEN CANON (author only):** true in the book's world, kept consistent by the science, **never confirmed on the page**. Marchetti can suspect it; nobody proves it. The title's mystery holds.

Tags: `[fiction]` = invented physics or biology, keep internally consistent; `[verify]` = real-world fact to check before it goes in prose; `[decide]` = author's call.

---

## 1. The event `[fiction]`

- **Source:** a starquake on a magnetar (a neutron star with an extreme magnetic field) roughly 8,000–10,000 light-years away. Real candidate at about that distance: XTE J1810-197 (~2.5 kpc) `[verify distance]` `[decide: name a real object or keep it unnamed]`.
- **The wave:** a short, tightly collimated burst of exotic weakly interacting particles (axion-like or sterile-neutrino-like `[decide]`). It passes through the whole planet at light speed. Inorganic matter, water, electronics, and the grid are untouched.
- **Timestamp:** 06:00:00 UTC, Tuesday September 5, 2028 (02:00:00 EDT). Single pulse, duration well under a second. Every time zone is hit at the same instant; the far side of the Earth is hit through the planet.
- **It's over.** Nothing lingers in air, water, soil, or bodies. No residue, no contagion, no fallout. This is the fact the safe-return question turns on (§5).

## 2. Cause of death

- **Target:** cytochrome c oxidase (Complex IV), the last enzyme of the mitochondrial respiratory chain, at its oxygen-binding heme a3–CuB center. `[fiction]` The wave's energy resonates with that site's geometry and flips it into a state that no longer binds oxygen, permanently for that enzyme molecule.
- **Why only people (and other primates):** the catalytic core is conserved across animals, but the subunits that shape its geometry evolved unusually fast in the anthropoid primates (humans, apes, monkeys) `[verify: accelerated evolution of COX subunits in anthropoid primates, Grossman/Goodman et al.]`. The resonance only matches the primate geometry `[fiction]`. **Dogs, birds, livestock, and wildlife live. Zoo apes and monkeys die.** Dan is fine.
- **Physiology: histotoxic hypoxia.** The lungs still work and the blood stays saturated, but the cells can't use the oxygen. Same end state as massive cyanide poisoning, with no cyanide.
  - Unconsciousness in ~10 seconds; death in minutes.
  - People asleep never wake. People awake show air hunger: **eyes open, mouth open as if gasping**, sometimes a brief seizure.
  - **Dried blood under the nose** comes from collapse injuries (falls, faces hitting a counter or steering wheel, convulsions), not from the mechanism. Not every body has it.
  - **Cherry-red / bright pink lividity**, because venous blood stays oxygenated. This is the classic cyanide and carbon monoxide sign, so any ER doctor reads it at once.

## 3. Survivor symptoms (on-page)

Survivors take a partial hit: some fraction of their Complex IV is knocked out, not all of it. The cells replace damaged enzyme as mitochondria turn over, so symptoms fade over days to months, unevenly from person to person.

| Symptom | Mechanism | On page |
| --- | --- | --- |
| Headache | Brain is the first organ short on usable energy | John, Day 0 on |
| Shortness of breath, air hunger, can't get a full breath on a hill | Respiratory drive up from lactic acidosis; muscles short on energy | John |
| Scratchy chest, dry cough | Hours of rapid mouth-breathing; dry airliner cabin (~10–20% humidity `[verify]`) | Sam |
| Fatigue, exercise intolerance | Reduced aerobic capacity | Anyone; show it on stairs and hills |

**Catherine's clinical clue:** a patient short of breath with a pulse oximeter reading 97–99%. Venous blood drawn at OMC comes out bright red, like arterial blood; a venous blood gas shows high venous oxygen and a raised lactate. That's textbook histotoxic hypoxia, and she knows it from cyanide and smoke-inhalation cases. Combined with cherry-red lividity on the dead and no source of cyanide or CO anywhere, she concludes **something stopped people's cells from using oxygen, with no chemical agent present.**

## 4. HIDDEN CANON: why ground survivors lived

- About 1 in a million people carry a rare variant (an archaic-lineage inheritance `[fiction]`) that shifts the geometry of the oxygen-binding site by a fraction of a nanometer. The enzyme works normally, but its resonance sits just outside the wave's lethal band. **Same principle as the ISS crew: detuning.** The ISS crew were detuned by velocity, survivors by structure.
- Partial detuning explains why survivors still have symptoms: they sit near the edge of the band, so a minority of their enzyme flips.
- **On the page:** Marchetti can measure that survivors' Complex IV took less damage than the dead's. She can't find the cause, can't sequence enough survivors to prove a variant, and won't say what she suspects (her *No Premature Conclusions* flaw). The question stays open in the text. Never use the words "gene," "variant," or "inherited" as a confirmed finding.

## 5. Why the ISS crew lived (on-page, solvable)

**Mechanism: relativistic Doppler detuning.** `[fiction physics, real kinematics]`

- The ISS moves at ~7.66 km/s, β ≈ 2.56 × 10⁻⁵. Relative to the wave, the crew sees its energy shifted by about β·cos θ, where θ is the angle between the station's velocity and the wave's direction. `[verify: ISS orbital velocity]`
- Everyone on the ground shares Earth's motion, so the wave's energy is the same for all of them except for rotation: at most ±0.465 km/s at the equator, β ≈ 1.6 × 10⁻⁶. An airliner at cruise adds ~0.25 km/s, β ≈ 8 × 10⁻⁷.
- **So the lethal band has a fractional half-width of about 1 × 10⁻⁵** `[fiction: the working number]`: wide enough that rotation and airliners don't matter (it killed Delta 27's crew at 500 knots and everyone from Quito to Oslo alike), narrow enough that orbital speed escapes it.
- The ISS escapes if cos θ ≳ 0.4, meaning the station was moving within ~65° of directly toward or away from the source. **No precise alignment is needed**, only a roughly favorable point in the orbit. If the station had been ~25 minutes further around its 92-minute orbit, the crew would be dead.
- The crew may have had **mild, short-lived symptoms** if cos θ was near the threshold `[decide]`. Their own reports over the ham link become data for Catherine and Marchetti.
- **Earth survivors on the ground get nothing from this**, and the ISS crew are presumably *not* among the 1 in a million. Every rule in §4 still holds for them.

**How the group works it out (the operational chain):**
1. **The timestamp.** The 911 logs John pulled in Section 5 include the autodialer calls his filter threw out: crash-detection calls from cars, fall-detection calls from smartwatches. They spike together at 02:00–02:02 EDT in every time zone. One instant, not a spreading outbreak. (John has had this data since Day 0 and hasn't looked at the calls he discarded.)
2. **The source and direction.** Automated physics alerts need no human in the loop:
   - **SNEWS** (Supernova Early Warning System) issues an automatic alert when two or more neutrino detectors (Super-Kamiokande, IceCube, others) record a burst within seconds of each other. `[verify: SNEWS 2.0 coincidence window, alert path through NASA GCN]` `[fiction: the wave registers as a burst]`
   - **NASA GCN** (General Coordinates Network) machine notices from gamma-ray satellites (Fermi GBM, Swift BAT) on the side of the Earth facing the source, if the starquake also threw off a gamma-ray flare, as real magnetar giant flares do (SGR 1806-20, Dec 2004). These give a sky position. `[verify]`
   - Both are public, machine-generated, and timestamped to the millisecond at **06:00:00 UTC**. John's Day 0 pull needs to have captured them, either in the hourly archive or in the NOAA space-weather and science pulls. **This is a prose hook to add (Section 1 or 5).** `[decide which]`
3. **The geometry.** The ISS position and velocity at 06:00 UTC, from the orbital elements (TLEs) John archived and that Tyler knows how to read from his tracking habit, combined with the source's sky position, give cos θ. **Tyler can do or check this part.**
4. **The biology.** Catherine's clinical picture (§3) plus Marchetti's tissue assays at the IRB: Complex IV structurally paralyzed, GC-MS toxicology clean (no cyanide, no CO, no bound toxin). Without the physics this is a mechanism with no cause; with it, the picture closes.
5. **The closure.** A light-speed transient that hit an energy-specific molecular resonance; the ISS crew escaped by velocity. Nobody can prove the resonance in a lab. It's the only model that fits all five data sets.

## 6. Is it safe for the crew to come home?

**What the group can establish:**
- The event was a single pulse (detector rates back to baseline within seconds of 06:00 UTC).
- Nothing persists. Survivors are recovering, not getting worse. No new deaths among anything after 2:00 (the animals living around the group are the cleanest evidence). Toxicology is clean.
- So **the air, water, and ground are as safe for a non-immune person as they were on September 4.**

**What they can't establish: it could happen again.** Magnetars flare repeatedly. A repeat pulse would kill a returned crew on the ground, and would kill them in orbit too unless the geometry happened to favor them again. Staying up offers no protection, and consumables and reboost limits force the issue anyway (`iss-ham-radio-contact.md`). The honest answer the group gives the crew: *"It's clean now. Nobody alive can tell you it won't come back."* That's the Dragon recovery's undercurrent. Marchetti won't put a probability on it.

## 7. What changed from earlier canon

- Replaces the "fast-acting, airborne" agent and "pathogen" framing in CLAUDE.md. The prose never named either, so no section depends on it.
- Replaces the earlier draft of this file: "perfectly healthy" survivors (now partial-hit symptoms), "precise" ISS alignment and "fraction of a percent" shift (now ~65° tolerance and ~0.003%), and confirmed genetic immunity (now hidden canon).
