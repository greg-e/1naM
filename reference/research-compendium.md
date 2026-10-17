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

**Canon:** `CLAUDE.md` Timeline and Sections 2–3. **Mechanics reference:** [`DAL27_Diversion_Edmonton.md`](DAL27_Diversion_Edmonton.md) (route, positions, door and comms sequence, diversion options, weights, the PC-12 legs, what Wade sees). It supersedes the Val-d'Or diversion notes and the old turnback dossier PDF, whose Atlanta-turnback telemetry no longer applies.

Research notes still useful:

- **Seat count.** 306 passengers matches Delta's A350-900 layout as remembered (32 Delta One / 48 Premium Select / 36 Comfort+ / 190 Main), i.e. a full flight. `[VERIFY]`
- **Crew size.** A four-pilot augmented crew fits the FAR Part 117 limits for a ~15 h 20 m block; a three-pilot crew likely would not. `[VERIFY]` Table C.
- **A350-900 weights.** MLW 207 t (~456,000 lb), OEW 142.4 t `[SRC]` aircraftinvestigation.info.

---

## 2. People

**Canon:** `CLAUDE.md` Characters (one five-field entry per character) and Point of view.

### 2.1 Wade's telemetry fluency `[SRC]` (retired persona file, in git history)

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
- **What Wade sees on the station's AIS receiver:** a controlled slowdown, nav status "at anchor," speed over ground ≈ 0, and the heading swinging slowly around the anchor with wind and tide: behavior no autopilot produces.
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

- **Crew Dragon docked-life certification:** ~210 days. Canon has Kendra's Dragon flying months past it.
- **ISS food reserves without cargo flights:** a few months at most for a full crew; cutting from seven to four (the Soyuz leaving) and rationing stretches it. Needs a sourced figure before the page quotes one.
- **Water and oxygen:** the US segment's water recovery (~98% `[VERIFY]`) and electrolysis oxygen generation; failure modes and spares are where Kendra's life-support background earns its scenes.
- **Orbit decay:** without reboosts from cargo vehicles the orbit decays; no timescale in the repo yet.
- **Soyuz without recovery teams:** a ballistic or nominal landing on the Kazakh steppe with no search-and-recovery helicopters.
- **ARISS station configuration in 2028:** whether the radio sits in packet/APRS digipeater mode between scheduled contacts, which shapes what Johan hears on his first passes.
- **Family conferences:** how ISS crew family calls actually work (from home or from JSC), which affects Tyler's entry.
- **Dragon recovery hazards:** real recoveries handle hypergolic thruster residue (MMH/NTO) with trained crews in protective gear from a purpose-built ship. Unresearched for a small-yacht recovery.

---

## 4. Pilatus PC-12 PRO

**Canon:** `CLAUDE.md` Aircraft and Section 6. **Source:** [`PC-12-PRO-Brochure.pdf`](PC-12-PRO-Brochure.pdf) (marketing copy, not a POH).

### 4.1 The aircraft `[SRC]`

Single-engine pressurized turboprop, certified single- or dual-pilot, IFR, day/night, known icing, paved or unpaved. Garmin G3000 Prime "ACE" cockpit: three 14-in touchscreen flight displays plus two 7-in controllers, autothrottle, AFCS, synthetic vision, GWX 8000 radar, predictive windshear, SurfaceWatch, stall warning and protection, Electronic Stability & Protection, Emergency Descent Mode, and **Garmin Emergency Autoland** ("available from 2026"). Engine: P&WC PT6E-67XP, 1,200 shp, single-lever digital power control, 5,000 h TBO. Prop: Hartzell 5-blade composite, full reversing.

### 4.2 Specifications `[SRC]`

| Category | US | Metric |
|---|---|---|
| Max cruise speed | ~290 KTAS (see §4.3) | 537 km/h |
| Max range, 4 pax / 6 pax | 1,803 nm / 1,568 nm | 3,339 / 2,903 km |
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

Cabin length, width and height are omitted: the brochure's text layer repeats exterior values there. Read them off the PDF page. `[VERIFY]`

### 4.3 Brochure text-layer errors

1. Max cruise reads "440 KTAS" beside "537 km/h" (≈ 290 kt). Use 290 KTAS.
2. "Time to climb to FL 450" is impossible with a 30,000-ft ceiling; likely FL300.
3. The interior-dimension block repeats exterior numbers.

### 4.4 Working checks `[DERIVED]`

- **Payload is the binding limit.** 1,087 lb with full fuel against a group that grows from two to six people plus a dog, the dev box and its ~135-lb storm battery, and cargo. Every full-tank leg is a weight-and-balance problem; the Phoenix → KCLM leg (~1,020 nm great-circle, ~1,080 nm airway) still needs an independent fuel and ETE check at that load. `[VERIFY]`
- **Fuel with no grid:** a fuel truck with its own engine-driven pump (the Amarillo template), an FBO generator, or a hand or gravity method. Winter fields (Reno, the northern C-17 stops) add de-icing and snow.
- **Autoland depends on GPS** and a runway in its database, so it degrades as GPS drifts without ground uploads (`CLAUDE.md` Unattended-world hazards).

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
| Wade's walk and first 911 call (07:20–07:28) | ~5.5 | 2 | Yes: internet, cameras, FlightAware live |
| Wade's collection (09:15–12:41) | ~7–11 | 2 → early 3 | Yes |
| Grid dark at Wade's house, 00:50 Sept 6 | ~22.8 | 3 | Yes, inside 8–24 h |
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
- **People and tech:** Wade's dev box spec in 2028; Jackery 5000 Plus weight and kit; GPS degradation rate without ground uploads.

---

## 9. Changelog

| Date | Change |
|---|---|
| 2026-10-16 | **v0.3: stripped to research.** All canon summaries (cast, DAL27 turnback, story-use tables, cross-links) replaced with pointers to `CLAUDE.md`. Kept and tidied the research: Wade's telemetry list, the anchorage geometry, ISS mechanics, PC-12 specs, grid mechanisms and nuclear geography. Added the random survivor draw (§2.2, with `survivor-draw.js`), the ISS clock research items (§3.5), and C-17 and Europe research items (§6). Discrepancy register closed. |
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
| `reference/pc-12 to atl.md` | PC-12 legs to Atlanta |
| `reference/PC-12-PRO-Brochure.pdf` | Manufacturer brochure; text-layer errors in §4.3 |
| `reference/iss-ham-radio-contact.md` | ARISS and ham-link mechanics (ARRL, ariss.org, hamsattracker, onallbands) |
| `reference/power-grid-shutdown-timelines.md` | Draft 4 grid and nuclear model (NERC, FERC 2003 report, NRC, IEEE 1547, DOE) |
| `reference/grid_2026-10-10.md`, `reference/grid.kml` | Grid notes and map layer |
| `reference/survivor_location_probability_matrix.md` | Survivor location probabilities |
| `reference/more_to_think_about_unattended_world_hazards.md` | Unattended-world hazards; `CLAUDE.md` wins where they differ |
| `reference/port-angeles-base-research.md` | Port Angeles research: harbor, anchoring, the station, bodies, ISS sky, winter, yachts, the abandoned ship |
| `reference/survivor-draw.js` | The seeded random survivor draw (§2.2) |
