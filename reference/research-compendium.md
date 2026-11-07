# 1 in a Million — Research Compendium

The research layer behind the book: real-world facts, sources, derived arithmetic, and the things still to verify. **This file holds research only.** Canon (characters, plot, timeline, places as used) lives in exactly one place, [`CLAUDE.md`](../CLAUDE.md); where a topic here touches canon, a one-line pointer names the `CLAUDE.md` section instead of restating it.

**Status:** v0.3, 2026-10-16. Stripped to research: every canon summary was removed and replaced with a pointer, so this file can't drift out of step with canon again.

## How to use this file

- **Authority:** `CLAUDE.md` → `sections/` prose → this file → the raw research docs. This file never overrides canon. If research shows canon is wrong, raise it with the author; don't fix it here.
- **Tags:**
  - `[SRC]` — from a file or source named alongside it.
  - `[DERIVED]` — arithmetic or inference; check the working before relying on it.
  - `[VERIFY]` — general knowledge not yet confirmed against a source. Check before it goes on the page.
- **To extend:** add the finding under its topic with a tag and a source. Put anything awaiting a check in §8.

**Contents:** [1 Delta 27](#1-delta-27) · [2 People](#2-people) · [3 ISS and ham radio](#3-iss-and-ham-radio) · [4 PC-12 PRO](#4-pilatus-pc-12-pro) · [5 Power grid](#5-power-grid-collapse) · [6 C-17 and Europe](#6-c-17-and-europe) · [7 Discrepancies](#7-discrepancy-register) · [8 Verify list](#8-verify-list) · [9 Changelog](#9-changelog) · [10 Sources](#10-source-index)

---

## 1. Delta 27

**Canon:** `CLAUDE.md` Timeline and Sections 2–3. **Mechanics reference:** [`DAL27_Diversion_Edmonton.md`](DAL27_Diversion_Edmonton.md) (route, positions, door and comms sequence, diversion options, weights, the PC-12 legs, what John sees). It supersedes the Val-d'Or diversion notes and the old turnback dossier PDF, whose Atlanta-turnback telemetry no longer applies.

Research notes still useful:

- **Seat count.** 306 passengers matches Delta's A350-900 layout as remembered (32 Delta One / 48 Premium Select / 36 Comfort+ / 190 Main), i.e. a full flight. `[VERIFY]`
- **Crew size.** A four-pilot augmented crew fits the FAR Part 117 limits for a ~15 h 20 m block; a three-pilot crew likely would not. `[VERIFY]` Table C.
- **A350-900 weights.** MLW 207 t (~456,000 lb), OEW 142.4 t `[SRC]` aircraftinvestigation.info.
- **A350 review (2026-11-07).** [Source review and limits](2026-11-07_a350-incapacitation_edmonton-diversion-and-automation-dependencies.md): communications indications do not prove human receipt; jettison/overweight/autoland limits and numerical performance/oxygen assumptions need aircraft-specific verification. YEG documents ILS on 02/12/30 and back-course guidance on 20; runway/approach choice is held. Dossier §3 corrects clock arithmetic, not the route.

---

## 2. People

**Canon:** `CLAUDE.md` Characters (one five-field entry per character) and Point of view.

### 2.1 John's telemetry fluency `[SRC]` (retired persona file, in git history)

ADS-B (1090 MHz / 978 UAT), ADS-C, Mode S/ACARS, ACAS/TCAS, MLAT; AIS (Class A/B, VDES), S-AIS, NMEA 0183/2000; NextGen 911 (NENA i3), CAD, Cospas-Sarsat beacons; SSA/TLE orbital streams; GTFS-RT, PTC rail, OBD-II/J1939; NOAA METAR/TAF. This is the vocabulary that makes his search mechanics credible.

### 2.2 The random survivor draw (2026-10-16)

Caleb Rusk, Olivier Maurel and Monika Faller were drawn at random, not designed. The method is kept here so the draw can be audited or repeated. Script: [`survivor-draw.js`](survivor-draw.js) (`node reference/survivor-draw.js <seed>`).

- **Rules set by the author before rolling:** Europeans drawn from regions within ~400 km of Bellinzona, weighted by population; the American from the western states (CA, WA, OR, NV, AZ, UT, ID), weighted by population; age from real population pyramids, full range, re-rolled under 4 (an infant can't survive alone).
- **Data (approximate, 2023–24):** US Census age pyramid; Eurostat EU age pyramid; BLS employment shares by SOC major group; regional populations in millions. Employment, household, and where-at-the-event tables are rough shares, `[VERIFY]` before quoting any of them as statistics.
- **Draws:** seed 1804700894 was rejected by the author (a 68-year-old Piedmont forklift operator, a 30-year-old disabled single mother in rural Veneto, a 10-year-old girl in California). **Seed 2082101391 was accepted**: a 50-year-old Provence loan officer (→ Olivier), a 68-year-old Baden-Württemberg retired medical assistant (→ Monika), an 18-year-old rural Washington caregiver (→ Caleb).
- **Caleb's ethnicity** was rolled separately from approximate Forks demographics (white 64, Hispanic 22, two or more races 6, Native 5, other 3 `[VERIFY census]`): seed 647769873, roll 15.08 → white.
- **Why the base rates matter** `[DERIVED]`: among ~350 random US survivors, expect ~77 children (22% under 18), ~60 over 65, ~1 physician (~0.3% of the population), ~0.1 airline pilots, ~1 licensed ham operator. Survivors the group *finds* are biased toward people who acted traceably (a transponder, a 911 call, a radio), which is what justifies Sam and Marchetti.

### 2.3 Johan's anchorage `[SRC]` NOAA *U.S. Coast Pilot 10*, Ch. 7 (13 Sep 2026)

**Canon:** `CLAUDE.md` Places (the *Pacific Tender*'s anchorage). Geometry and suitability:

| Point | Latitude / Longitude | Basis |
|---|---|---|
| Ediz Hook Light (0.3 nm W of the Hook's east extremity) | 48°08′24″N, 123°24′09″W = 48.1400°N, 123.4025°W | `[SRC]` |
| Hook's east extremity (shoals ~75 yd further east) | ≈ 48.140°N, 123.395°W | `[DERIVED]` |
| Coast Guard Air Station / SFO; 170-ft VTS tower (0.1 nm WSW of the light) | 48.1408°N, 123.4108°W (station); tower ≈ 48.140°N, 123.404°W | `[SRC]` station (Wikipedia); tower `[DERIVED]` |
| Puget Sound Pilots' station (0.7 nm W of the light; VHF ch 13) | ≈ 48.139°N, 123.420°W | `[DERIVED]` |
| Anchor position used in canon: mid-harbor, south of the pilot station | ≈ 48.1300°N, 123.4170°W; ~0.65 nm from the station by boat | `[DERIVED]` (harbor middle, 30 → 15 fathoms) |
| Charted "best anchorage" off the wharves | ≈ 48.125°N, 123.425°W; 7–12 fathoms | `[SRC]`; too shallow for a loaded container ship (~40–46 ft draft) |

- **Why a Seattle-bound ship ends up here:** Port Angeles is the compulsory pilotage station for vessels to and from the sea; the harbor "is easy of access by the largest vessels, which frequently use it when … waiting for orders or a tug." `[SRC]` 56 nm from Cape Flattery, ~3 h after entering the Strait.
- **Suitability** (`[DERIVED]`, ship figures `[VERIFY]`): ~90 ft of water mid-harbor leaves ~40 ft under the keel; a 300–366 m ship on 3–5× scope swings ~0.2–0.25 nm radius, which fits but not generously; sticky mud bottom holds well `[SRC]`; sheltered from all but east winds, with some swell in SE winter gales `[SRC]`.
- **Avoid:** log booming grounds (north part, west side); the 33 CFR 110.230 non-anchorage box in the southeast corner (see `port-angeles-base-research.md` §3.1); deadheads inside the Hook.
- **What John sees on the station's AIS receiver:** a controlled slowdown, nav status "at anchor," speed over ground ≈ 0, and the heading swinging slowly around the anchor with wind and tide: behavior no autopilot produces.
- **Anchoring alone** is a forecastle job, not a bridge one; see `port-angeles-base-research.md` §3.2.

---

## 3. ISS and ham radio

**Canon:** `CLAUDE.md` The ISS contact channel; Kendra Vance. **Source doc:** [`iss-ham-radio-contact.md`](iss-ham-radio-contact.md).

### 3.1 Why the link survives `[SRC]`

- The ISS carries dedicated ARISS amateur gear (Kenwood TM-D710E and TM-D710GA), a contingency communications system independent of the primary comms chain.
- It runs on the station's solar power; four antenna systems on the Russian Service Module give redundancy.
- The link is direct, station to ground operator, unlike Mission Control's path through TDRSS and staffed White Sands terminals.

### 3.2 Where it breaks: the ground side `[SRC]`

A surviving link needs a person on Earth with a working 2 m / 70 cm transceiver, grid-independent power, and orbital tracking. Without the internet the tracking sites are gone; it takes stored or printed TLEs or naked-eye tracking, and TLE accuracy degrades with time.

### 3.3 Operating constraints `[SRC]`

| Constraint | Detail |
|---|---|
| Pass length | Typical overhead pass 8–10 min; strong-signal window 4–6 min |
| Elevation | Above ~30° gives the longest, clearest contact; below ~20° terrain and buildings often block it |
| Continuity | None: short check-ins, the next pass ~90 min to several hours later |
| Doppler | ~±9 kHz across a pass on 70 cm; ~±3.5 kHz on 2 m `[DERIVED]`. State the band with any Doppler number |
| Gear | Even a handheld with a stock antenna can work a good pass |

### 3.4 Orbit and visibility `[VERIFY]` / `[DERIVED]`

- ~400 km (~250 mi) up, period ~92–93 min, inclination 51.6°.
- The ground track spends the most time near ±51.6°, so observers at 45–50°N (Port Angeles ~48.1°N, Bellinzona ~46.2°N) get many passes, often high, north or south of the site. What matters is a low horizon in every direction (site analysis: `port-angeles-base-research.md` §6).
- Naked-eye passes need the ISS sunlit while the observer is in twilight or dark: dawn and dusk `[SRC]`.

### 3.5 The station's clock (research behind `CLAUDE.md`'s ISS clock) `[VERIFY]`

- **Dragon and Soyuz qualified life:** not a universal day-count expiry. Establish each vehicle's identity, launch/docking dates, applicable approved life and condition. The historical 210-day Dragon requirement is not a current blanket limit, and longer documented missions do not certify the fictional vehicles or supply a replacement universal timer. [Endurance research](2026-11-07_iss-endurance_food-life-support-and-return-dependencies.md).
- **ISS food reserves without cargo flights:** a few months at most for a full crew; cutting from seven to four (the Soyuz leaving) and rationing stretches it. Needs a sourced figure before the page quotes one.
- **Water and oxygen:** the US segment's water recovery (~98% `[VERIFY]`) and electrolysis oxygen generation; failure modes and spares are where Kendra's life-support background earns its scenes.
- **Orbit decay:** without reboosts from cargo vehicles the orbit decays; no timescale in the repo yet.
- **Soyuz without recovery teams:** a ballistic or nominal landing on the Kazakh steppe with no search-and-recovery helicopters.
- **ARISS station configuration in 2028:** whether the radio sits in packet/APRS digipeater mode between scheduled contacts, which shapes what Johan hears on his first passes.
- **Family conferences:** how ISS crew family calls actually work (from home or from JSC), which affects Tyler's entry.
- **Dragon recovery hazards:** real recoveries handle hypergolic thruster residue (MMH/NTO) with trained crews in protective gear from a purpose-built ship. Unresearched for a small-yacht recovery.

---

## 4. Pilatus PC-12 PRO

**Canon:** `CLAUDE.md` Aircraft and Section 6. **Reviewed November 7, 2026:** [PC-12 mission ledger and sources](2026-11-07_pc12_rescue-mission-ledger_variant-payload-fuel-and-time.md). Manufacturer brochures are marketing references, not approved flight manuals or dispatch calculations. The repository's [`PC-12-PRO-Brochure.pdf`](PC-12-PRO-Brochure.pdf) is retained unchanged; its printed errors are identified below.

### 4.1 The aircraft `[SRC]`

Single-engine pressurized turboprop, certified single- or dual-pilot, IFR, day/night, known icing, paved or unpaved. Garmin G3000 PRIME cockpit: three 14-in touchscreen flight displays plus two 7-in controllers, autothrottle, AFCS, synthetic vision, GWX 8000 radar, predictive windshear, SurfaceWatch, stall warning and protection, Electronic Stability & Protection, Emergency Descent Mode, and **Garmin Emergency Autoland**. Pilatus reported FAA/EASA Autoland certification on September 24, 2026; the installed configuration and approved supplement for the fictional aircraft still need checking. Engine: P&WC PT6E-67XP, 1,200 shp, single-lever digital power control, 5,000 h TBO. Prop: Hartzell 5-blade composite, full reversing.

The NGX uses Honeywell ACE; the PRO uses G3000 PRIME. Panel features and manuals do not transfer automatically. G1000 familiarity is background, not proof of mastery of the PRO.

### 4.2 Specifications `[SRC]`

Current manufacturer PRO brochure, printed p.40 / PDF p.43; EASA A.089 Issue 11 for the /47G limits. Direct links and source boundaries are in the mission ledger.

| Category | US | Metric |
|---|---|---|
| Max cruise speed | 290 KTAS at FL220 | 537 km/h |
| Max range, 4 pax / 6 pax | 1,765 nm / 1,565 nm | 3,269 / 2,898 km (rounded conversion) |
| Time to climb | 19 min to FL250 | 19 min to 7,620 m |
| Max altitude | 30,000 ft | 9,144 m |
| Takeoff / landing over 50 ft | 2,485 ft / 2,170 ft | 758 / 661 m |
| Rate of climb | 1,920 ft/min | 9.75 m/s |
| Stall speed | 67 KIAS | 124 km/h |
| Max ramp / takeoff / landing weight | 10,495 / 10,450 / 9,921 lb | 4,760 / 4,740 / 4,500 kg |
| Max zero-fuel weight | 9,039 lb | 4,100 kg |
| Usable fuel | 2,704 lb (402 US gal) | 1,227 kg |
| Max payload / with full fuel | 2,336 lb / **1,087 lb** | 1,060 / 493 kg |
| Basic operating weight | 6,703 lb | 3,040 kg |
| Length / height / span | 47 ft 3 in / 14 ft / 53 ft 4 in | 14.40 / 4.26 / 16.28 m |
| Cabin / baggage volume | 501 / 90 ft³ | 14.19 / 2.55 m³ |
| Cargo door (W × H) | 4 ft 5 in × 4 ft 4 in | 1.35 × 1.32 m |

Range assumes long-range cruise, ISA, FL300 and NBAA IFR reserves with a 100-nm alternate; the four- and six-passenger cases differ. Maximum cruise, maximum range and maximum payload are not simultaneous operating points. The 2,485/2,170-ft runway figures assume the stated weights, ISA, sea level and dry pavement; they do not validate Phoenix at 41°C or an unattended runway. Climb performance is condition-dependent, not a guaranteed mission time. Actual equipped weight and the PRO operating-weight pilot allowance remain unverified.

The NGX's 1,803/1,568-nm figures belong to its own 2024 sheet and assumptions, not the PRO. Cabin interior dimensions remain excluded pending a page check.

### 4.3 Brochure versions and source limits

1. Visual inspection found **440 KTAS**, **FL450** and the older range figures printed on p.40 of the repository PDF. They are not merely extraction errors. Do not use them as PRO performance.
2. The fresh manufacturer brochure gives **290 KTAS at FL220**, **19 minutes to FL250** and **1,765/1,565 nm** for its stated four-/six-passenger cases. The former guess that the climb label meant FL300 is withdrawn.
3. The applicable approved PRO AFM and Autoland supplement were not obtained. EASA identifies /47G POH Report 02523, Issue 02/Revision 00 or higher. A brochure is not that manual, and the repository PDF is not replaced by this correction.

### 4.4 Working checks `[DERIVED]` / `[VERIFY]`

- **Mission loading, not a generic group payload.** The 1,087-lb full-fuel payload is a screening figure with an operating-weight convention, not the fictional aircraft's measured capacity. The early missions carry two, then three people, not the later six-person group. Actual people, dog, bags, water, medical equipment, dev box, panels and Jackery need one manifest, actual equipped weight and loading arms. The ~135-lb Jackery is still a verification item. The former 170-lb Phoenix margin is unsupported; the prose's loading check is a fictional event, not validated arithmetic. Takeoff weight alone does not establish landing weight or CG compliance.
- **Full-fuel KCLM–KNOW transfer.** The eleven-minute hop needs its own landing-weight check. At maximum takeoff weight, reaching the normal 9,921-lb landing limit would require losing 529 lb; that conditional subtraction does not establish this flight's actual starting weight or an overweight landing. Do not invent offloading, fuel removal or a stop to solve an unknown manifest.
- **Sunday fuel.** Sept 10 starting fuel is not established by the Sept 8 KCLM fill before the transfer. Keep a mass ledger through taxi, climb, deviations, low passes, cruise, descent and reserve. Rounded remaining pounds and gallons added are not instrument-exact equivalents; density/temperature matter. No fresh top-off or reserve compliance is inferred.
- **Route arithmetic is not dispatch approval.** Phoenix–KCLM is about 1,022 nm great-circle, excluding low passes and deviations. The stated 16:10–20:25 MST/PDT interval is 4h15, but begins at start/taxi. Amarillo 13:50 CDT is 11:50 MST; the existing 15:15 MST Phoenix landing therefore gives 3h25, not an established two-hour leg. The schedule and sunset limit still need an author decision. Weather, actual fuel, reserves, loading and runway conditions remain unverified; brochure range alone cannot certify these missions.
- **Fuel with no grid:** a fuel truck with its own engine-driven pump (the Amarillo template), an FBO generator, or a hand or gravity method. Winter fields (Reno, the northern C-17 stops) add de-icing and snow.
- **Autoland:** a suitable GPS approach with lateral and vertical guidance, adequate fuel, weather and runway/performance limits matter; not simply the nearest runway or a database entry. Manufacturer certification supports a 2028 PRO discovery, not every installation or an NGX retrofit. Nothing reviewed establishes detection of new wreckage or animals. PRO-specific activation details, button guard/label and GPS-degradation tolerance still need the approved supplement; no drift rate is certified here.

---

## 5. Power-grid collapse

**Canon:** `CLAUDE.md` The grid-shutdown subplot. **Source doc:** [`power-grid-shutdown-timelines.md`](power-grid-shutdown-timelines.md) (Draft 4, "researched but speculative"; low-to-moderate confidence throughout). Also [`grid_2026-10-10.md`](grid_2026-10-10.md) and [`grid.kml`](grid.kml).

### 5.1 Key mechanisms `[SRC]`

| # | Mechanism | Takeaway |
|---|---|---|
| 1 | North America is four synchronous interconnections (Eastern, Western, ERCOT, Quebec) tied only by DC/VFT links | Each collapses on its own clock |
| 2 | UFLS first stage at 59.5 Hz; operating band 59.5–62.2 Hz | The relay cascade is fast (2003: first trip → 508 units offline in under 7 min); the slow part is how long frequency takes to sag |
| 3 | 2003 precedent: standing islands survived (western NY, ~5,700 MW) | Small unplanned pockets are possible, not plannable |
| 4 | Coal hopper/bunker fuel ≈ 12–14 h at full load | Coal trips first, on a fixed clock |
| 5 | Plants and compressor stations already unmanned; remote SCADA teams handle alarms | Gas trips at unpredictable, fault-driven times |
| 6 | Nuclear needs continuous licensed-operator presence (10 CFR 50.54(m)) | Nuclear SCRAMs safely; then the coping-window clock starts |
| 7 | IEEE 1547 / UL 1741: grid-tied PV and wind stop exporting within 2 s of islanding | Utility solar and wind go down in the first wave |
| 8 | Utility hydro is grid-tied through the same protective relaying | Hydro trips with its interconnection unless already islanded (rare) |

### 5.2 Phase model (per interconnection) `[SRC]`

| Phase | Hours | What happens |
|---|---|---|
| 1 — Silent window | 0–2 | Grid fully energized |
| 2 — Thermal tripping | ~2–14 | Coal hits hopper limits; gas faults accumulate uncorrected |
| 3 — Frequency sag and cascade | ~8–16 | Frequency crosses 59.5 Hz; fast cascade. Realistic lights-out for a region: hours 8–24 |
| 4a — Reactor coping window | 0–72 h from each trip | Diesel and battery (FLEX) cooling |
| 4b — Reserves deplete | ~3–7 days | The spent fuel pool becomes the primary hazard |
| 4c — Danger threshold | ~10–21 days from trip | Pool boils off; exposed zirconium → hydrogen → release (the Fukushima mode) |
| 4d — Long tail | Months 2–12+ | Regional contamination (tens of miles); exclusion zones last years to decades |

The 10–21-day figure is an engineering-plausible range, not a documented spec.

### 5.3 Story clock against the grid `[DERIVED]`

| Beat (per `CLAUDE.md` Timeline) | Hours after 02:00 EDT Sept 5 | Phase | Consistent? |
|---|---|---|---|
| John's walk and first 911 call (07:20–07:28) | ~5.5 | 2 | Yes: internet, cameras, FlightAware live |
| John's collection (09:15–12:41) | ~7–11 | 2 → early 3 | Yes |
| Grid dark at John's house, 00:50 Sept 6 | ~22.8 | 3 | Yes, inside 8–24 h |
| Huntsville pocket, dark ~midnight Sept 6→7 | ~46–47 | Accidental pocket | Plausible but at the far end; author's call |
| Vogtle danger window for Alpharetta | trip +8–24 h → ~Sept 15–27 | 4c | Section 5's boxed *Sept 16* is the early end |

### 5.4 Nuclear geography `[SRC]`

Heaviest: Illinois (11 reactors), MI, WI, MN, OH. Southeast: Georgia (Plant Vogtle, ~4.5 GW, ~150 mi from Alpharetta), SC, NC, TN, AL, FL. Northeast: PA, NY, NJ, CT. Southwest: Palo Verde (AZ). Pacific Northwest: only Columbia Generating Station (WA). None: AK, HI, most of the Mountain West.

| Location | Gas | Nuclear | Coal | Solar | Other | Interconnection |
|---|---|---|---|---|---|---|
| Raleigh, NC | 40.0% | 31.8% | 13.2% | 9.42% | hydro, biomass, wind | Eastern |
| Tucson, AZ | 45.0% | 26.7% | 7.87% | 13.3% | hydro, wind, biomass | Western |
| Reno, NV | 50.5% | 0% | 5.72% | 30.1% | 8.56% geothermal, hydro, wind | Western |
| Alpharetta, GA | 38.6% | 34.7% | 13.6% | 7.64% | biomass, hydro, petroleum | Eastern |
| Bangor, ME | 37.5% | 0% | 0.22% | 10.4% | 19.4% wind, 17.8% hydro, 11.7% biomass | Eastern (ISO-NE) |

`[SRC]` EIA 2025 via Wikipedia power-station lists. Nuclear exposure, safest → riskiest: Reno ≈ Port Angeles (very low) → Raleigh → Tucson → Alpharetta. Reno has no safety reason to visit; the trip is about Catherine's brother (`CLAUDE.md` Basin & Range Overland). Bangor's row matters again as the C-17's first fuel stop.

### 5.5 Port Angeles exposure

| Factor | Assessment | Tag |
|---|---|---|
| Nearest commercial reactor | Columbia Generating Station, ~220 mi east, beyond the Olympics and Cascades | identity `[SRC]`; distance `[DERIVED]` |
| Release radius | "Tens of miles" precedent; 220 mi is far outside it | `[SRC]` |
| Wind | Prevailing westerlies carry a Richland release east, away from the Peninsula | `[DERIVED]` |
| Naval Base Kitsap | ~40–50 mi east; naval reactors shed decay heat passively, not the pool scenario | `[VERIFY]` |
| Hanford waste tanks | A local hazard at Hanford, far from the Peninsula | `[VERIFY]` |
| Elwha River dams | Removed 2011–2014; no local dam-failure hazard from them | `[VERIFY]` |

### 5.6 Open research from the source doc `[SRC]`

SCADA alarm and watchdog intervals; which plants can auto-island; plant-by-plant coping times and pool inventories; how often 2003-style islands occur and where; coal-ash pond and tailings dam failure risk; floodgates that need active management in high water (a sudden downstream hazard independent of the electrical timeline).

---

## 6. C-17 and Europe

**Canon:** `CLAUDE.md` The Italy excursion. Everything below is `[VERIFY]` until sourced.

- **Payload-range.** McChord → northern Italy is ~4,900 nm great-circle `[DERIVED]`. Four loaded campers on Ram 3500s (~25–30 t) put the C-17's unrefueled range well short of that, hence canon's Bangor and Shannon stops. Need a sourced payload-range chart.
- **Self-service fueling a C-17:** hydrant vs. truck at Bangor (BGR) and Shannon (SNN); single-point refueling panel procedure; ground power for the fuel system.
- **Crew requirements:** the C-17 is normally two pilots plus a loadmaster. What a two-person crew (one current-ish pilot, one PC-12-level monitor) can and can't do; what the loadmaster's tie-down job takes (chains, devices, weight-and-balance for four vehicles).
- **Currency:** realistic ground-school, systems review, and engine-run time for a pilot twelve years off type.
- **Po Valley fog:** frequency and persistence in late autumn and winter; Malpensa (MXP) ILS without power; Nice Côte d'Azur (LFMN) runway lengths (~2,960 m on 04L/22R) and the over-water approach.
- **Nice → Bellinzona by road:** ~330 km via the coast and the Italian lakes, or over Alpine passes; winter closures and chain requirements.
- **Trams:** driver vigilance (dead-man) systems on Nice Line 1 and Freiburg trams: stop between stations, doors shut, emergency door release.
- **Survivor density in Europe:** higher than the US per `CLAUDE.md`; ratios not set.

---

## 7. Discrepancy register

**No live discrepancies as of 2026-10-16.** The register D-01–D-21 (Atlanta-turnback details, Portland/Seaside/Elliott Bay prose, Della's house, the Vogtle distance, surnames, the README) was closed by the October rewrite of Sections 1–10 and by canon changes since. A recheck on 2026-10-16 found no "Portland," "Seaside," "Elliott Bay," or "eighty miles" left in the prose; Section 6 gives Vogtle at about 150 miles. History is in git.

New conflicts get the next ID from **D-22** and go to the author.

---

## 8. Verify list

Open research checks, collected from this file and `CLAUDE.md`. Author decisions (names, plot choices) are listed in `CLAUDE.md` What's next and what's open, not here.

- **Aviation:** PC-12 Phoenix → KCLM fuel and ETE at full load; PC-12 PRO equipment and Autoland activation; whether N612PR and C-GKPX are real registrations; a Pilatus dealer at PDK; Epps Aviation details; C-17 payload-range and fueling (§6); LFMN runways.
- **ISS:** everything in §3.5; ARISS frequencies (145.800 MHz FM downlink widely cited); offline pass prediction from archived TLEs on the dev box.
- **Maritime:** Argus-class OPC specs used for *Active*; the *Pacific Tender*'s boats and whether she has a lift; walk-back vs. let-go at ~27 m; GMDSS certificate scope for a Second Mate; amateur satellite radio learning curve for a GMDSS-trained officer.
- **Medical:** Della's injury course and healing times; CT on emergency power at OMC; warfarin vs. DOAC management for Monika off monitoring; early-onset Alzheimer's memory care in Port Angeles (a fictional facility is planned).
- **Places:** Olympic Medical Center's backup plant; the Coast Guard station's standby power, fuel, galley, and clinic contents; Life Flight Network staffing at KCLM; Forks census figures; Basin & Range Overland isn't a real business.
- **People and tech:** John's dev box spec in 2028; Jackery 5000 Plus weight and kit; GPS degradation rate without ground uploads.

---

## 9. Changelog

| Date | Change |
|---|---|
| 2026-10-16 | **v0.3: stripped to research.** All canon summaries (cast, DAL27 turnback, story-use tables, cross-links) replaced with pointers to `CLAUDE.md`. Kept and tidied the research: John's telemetry list, the anchorage geometry, ISS mechanics, PC-12 specs, grid mechanisms and nuclear geography. Added the random survivor draw (§2.2, with `survivor-draw.js`), the ISS clock research items (§3.5), and C-17 and Europe research items (§6). Discrepancy register closed. |
| Earlier | v0.1 (2026-09-20) and v0.2 (2026-09-24): see git history. |

---

## 10. Source index

| File | What it holds |
|---|---|
| `CLAUDE.md` | All canon. The only place canon is written |
| `reference/DAL27_Diversion_Edmonton.md` | Delta 27 diversion mechanics; supersedes the Val-d'Or notes and the turnback dossier PDF |
| `reference/cause_and_effect_2026-10-10.md` | The event's mechanism, evidence chain, and hidden-canon tier |
| `reference/ai_triage_2026-10-10.md` | The AI 911 triage agent |
| `reference/global-flight-traffic-model.md` (+ `.xlsx`) | The 2:00 a.m. sky calculator |
| `reference/pc-12 to atl.md` | Historical CYVO–KATL premise, not the current CYEG–MSP–PDK mission |
| `reference/2026-11-07_pc12_rescue-mission-ledger_variant-payload-fuel-and-time.md` | PC-12 variants, source conditions, mission clock/load/fuel ledger and unresolved checks |
| `reference/PC-12-PRO-Brochure.pdf` | Retained manufacturer brochure; printed version errors and current-source correction in §4.3 |
| `reference/iss-ham-radio-contact.md` | ARISS and ham-link mechanics (ARRL, ariss.org, hamsattracker, onallbands) |
| `reference/power-grid-shutdown-timelines.md` | Draft 4 grid and nuclear model (NERC, FERC 2003 report, NRC, IEEE 1547, DOE) |
| `reference/grid_2026-10-10.md`, `reference/grid.kml` | Grid notes and map layer |
| `reference/survivor_location_probability_matrix.md` | Survivor location probabilities |
| `reference/more_to_think_about_unattended_world_hazards.md` | Unattended-world hazards; `CLAUDE.md` wins where they differ |
| `reference/port-angeles-base-research.md` | Port Angeles research: harbor, anchoring, the station, bodies, ISS sky, winter, yachts, the abandoned ship |
| `reference/survivor-draw.js` | The seeded random survivor draw (§2.2) |
