# 1 in a Million — Research Compendium

A working research layer for the book: the real-world and reference material behind **Delta 27**, the **cast personas**, the **ISS ham-radio link**, the **PC-12 PRO**, and the **power-grid collapse**, in one place, with the seams between source and story marked so they can be worked on.

**Status:** v0.1, 2026-09-20. First consolidation — nothing here is final.

## How to use and iterate on this file

- **Authority order when sources disagree:** `time.md` (author's clock) → `CLAUDE.md` (canon + retcon log) → `sections/` prose → this file → the raw research docs/PDFs. This file **never overrides canon**; where it finds a disagreement it lists it in the [Discrepancy register](#7-discrepancy-register) and leaves the call to the author.
- **Tags on every claim:**
  - `[SRC]` — taken from a file/PDF in this repo (source named).
  - `[CANON]` — established by `CLAUDE.md` or by settled prose in `sections/`.
  - `[DERIVED]` — my arithmetic or inference from the above; check the working before relying on it.
  - `[VERIFY]` — real-world fact from general knowledge, **not** confirmed against a source in the repo. Check before it goes on the page.
- **To extend:** add findings under the relevant section, give any new conflict the next `D-nn` ID and any new question the next `Q-nn` ID, and add a line to the [Changelog](#9-changelog). Promote something out of `[VERIFY]` only after a source is cited.
- **Source docs stay authoritative for detail.** This file summarizes; the full text lives in [reference/](reference/): `power-grid-shutdown-timelines.md`, `iss-ham-radio-contact.md`, the DAL27 dossier PDF and the PC-12 brochure PDF. `john_lauer_persona.md` was retired 2026-09-20 (stale; §2.2 supersedes it; recoverable from git history).

**Contents:** [1 DAL27](#1-delta-27-dal27) · [2 Personas](#2-personas) · [3 ISS ham radio](#3-iss-ham-radio-contact) · [4 PC-12 PRO](#4-pilatus-pc-12-pro) · [5 Power grid](#5-power-grid-collapse) · [6 Cross-links](#6-cross-links-how-the-five-topics-interlock) · [7 Discrepancies](#7-discrepancy-register) · [8 Open questions](#8-open-questions) · [9 Changelog](#9-changelog) · [10 Sources](#10-source-index)

---

## 1. Delta 27 (DAL27)

Sources: `reference/DAL27_Emergency_Turnback_Dossier.pdf` (the "dossier"), `time.md`, `CLAUDE.md` "Sam's flight" block, `sections/02-day0-sam.md`, `sections/03-day0-john-sam.md`, `reference/global-flight-traffic-model.md`.

### 1.1 Dossier vs. story at a glance

The dossier is a **mechanics-and-timing reference**, not a script. It describes a single-pilot medical incapacitation; the story is a global event. `[CANON]` Same precedent as the old Delta 84 dossier: used for realistic ATC/telemetry mechanics, not adopted literally.

| Element | Dossier `[SRC]` | Story canon `[CANON]` | Note |
|---|---|---|---|
| Flight | Delta 27 (DAL27/DL27), KATL → RKSI (Seoul-Incheon) | Same | — |
| Aircraft | Airbus A350-900 (A359) | Same | — |
| Block time | ~15 h 20 m | Same | See Q-02 (crew size vs. block time) |
| Flight-deck crew | **4 pilots** (Captain + 3 FOs in two rest groups) | **3 pilots**: Sam (Capt), Theresa Foreman (FO), Jack Sommers (Relief) | Deliberate: preserves named cast |
| Departure | 11:35 PM EDT (03:35Z), Rwy 27L, MOBIS SID | 23:35 EDT | Runway/SID not used in prose |
| Top of climb | 00:20 AM, FL340 over Ohio | Not stated in prose | — |
| Rest period | Group 2 rests 00:30–03:30 (3 h) | Sam rests 00:30–~03:00 | `time.md` wins: 03:00 (D-03) |
| Emergency | Captain incapacitated 03:30 over James/Hudson Bay | Sam wakes ~03:00, finds Theresa + Jack dead, ~30 min later **turns back at 03:30** | Story turn time matches dossier's 03:30 |
| Squawk | 7700 from 03:30 | Sam squawks 7700 "out of habit" | — |
| Turn | 180° U-turn, 25° bank | Brought around "until the heading bug read due south" | — |
| Return cruise | FL380, 510 kt (tailwind), hdg 175° | "cruise power that traded speed for fuel burn" | See §1.5 — timing does not tie out |
| Top of descent | 09:55 AM over N. Georgia | Slow racetrack over N. Georgia in last ~20 min | — |
| Touchdown | **10:20 AM, Rwy 27R** | **~10:30 AM, Rwy 26R** | D-01, D-02; `time.md`: "10:30 Sam lands" |
| Arrival | Gate F6, medical team boards | Taxis to **Signature FBO** ramp (GA side) | Deliberate: Sam knows the ramp from charter days |
| Turnback distance | "~1,420 nm NNW of KATL" | "over James Bay… Hudson Bay" | See §1.5 |

### 1.2 Dossier telemetry table `[SRC]`

| EDT | UTC | Milestone | Alt | Speed / squawk |
|---|---|---|---|---|
| 11:35 PM | 03:35Z | Wheels up KATL Rwy 27L, climb via MOBIS SID | 0 → FL340 | 280 KIAS / 1542 |
| 00:20 AM | 04:20Z | Level off cruise FL340 over Ohio; Rest Period 1 begins | FL340 | 475 kt / 1542 |
| 03:30 AM | 07:30Z | Incapacitation event over James Bay; transponder → emergency | FL360 | 480 kt / 7700 |
| 03:32 AM | 07:32Z | 180° U-turn, sharp 25° bank | FL360 | 7700 |
| 03:40 AM | 07:40Z | Return cruise established, heading 175° toward Georgia | FL380 | 440 kt / 7700 |
| 09:55 AM | 13:55Z | Top of descent over N. Georgia / Atlanta Center | FL380 → FL100 | 510 kt (tailwind) |
| 10:20 AM | 14:20Z | Touchdown Rwy 27R, emergency vehicles roll | 0 ft | 320 KIAS / 7700 |
| 10:30 AM | 14:30Z | Gate arrival, Gate F6 | 0 ft | 142 KIAS / 7700 |

Extraction caveat: the PDF's text layer scrambles the altitude and speed columns (the last three rows' speeds/altitudes are offset from their rows). The cleanest reading is above, but a visual check of the PDF would confirm it. `[VERIFY]`

### 1.3 Day 0 clock — flight and convergence rows from `time.md`

Read-only snapshot as of 2026-09-20. **`time.md` is the source of truth; if this table drifts, `time.md` wins and this table is wrong.**

| Time (EDT) | Beat |
|---|---|
| 9/4 23:35 | Delta 27 departs KATL |
| 9/5 00:30 | Sam's rest block starts |
| 02:00 | The event (`CLAUDE.md`: fixed, 2:00 AM Eastern, Tuesday Sept 5, 2028) |
| 02:05 | John woken by a thud |
| 03:00 | Sam's rest ends; discovers all crew and passengers dead |
| 03:30 | Sam turns back to Atlanta |
| 09:00 | John discovers Delta 27 still moving |
| 09:10 | John drives to Hartsfield |
| 10:05 | John arrives, gains access at Signature FBO |
| 10:30 | Sam lands at Atlanta |
| 11:00 | John and Sam meet |
| 11:30 | Back to Signature, leave for Sam's house in John's car |
| 12:35 | Sam discovers his family gone |
| 13:00 / 13:40 | Back to John's house; John starts the detailed search |

Intervals `[DERIVED]`: event → Sam's discovery = 1 h; Sam wakes → turn = 30 min; turn → landing = 7 h (see §1.5); landing → handshake = 30 min; Sam's wife/daughter discovery ≈ 10.5 h post-event.

### 1.4 Crew and passengers

| Person | Role | Status | Source |
|---|---|---|---|
| Sam (Samuel Reyes) | Captain | Sole survivor of the flight deck | `[CANON]` |
| Theresa Foreman | First Officer | Dies at 2:00, at the controls, while Sam rests | `[CANON]` |
| Jack Sommers | Relief Pilot; 6'3", 230+ lb | Same | `[CANON]` — Sam has to carry him to the forward cabin |
| Cabin crew | "thirteen of his colleagues" | Dead | `[CANON]` §2 prose |
| Passengers | "Three hundred and six" | Dead | `[CANON]` §2 prose; CLAUDE.md says "~260-plus" — D-04 |

`[VERIFY]` 306 matches my recollection of Delta's A350-900 seat count (32 Delta One / 48 Premium Select / 36 Comfort+ / 190 Main) — i.e., a completely full flight.

### 1.5 Turnback mechanics and the timing gap `[DERIVED]` / `[VERIFY]`

Airframe figures below are from general knowledge, **not** from the repo — verify against Airbus/Delta data before using any of them on the page.

- **Weight problem (in prose).** Sam turns ~4 h into a 15 h flight, tens of thousands of pounds over any landing weight. Rough A350-900 figures: MTOW ≈ 280 t, MLW ≈ 205 t, cruise burn ≈ 6–7 t/h. `[VERIFY]` At ~4 h in he has burned ~45–50 t, so he is ~25 t over MLW and needs ~4 more hours of cruise burn to reach it — consistent with the prose ("the flight home would do most of the work on its own"). Overweight landings are permitted in an emergency with a post-landing inspection, but he needn't rely on that.
- **The clock does not tie out.** The turn is at 03:30, `time.md` has landing at 10:30 (7 h later). Great-circle distance from the turn to KATL is roughly 1,300–1,800 nm depending on where "Hudson/James Bay" actually is along the track; at the dossier's own 440–510 kt that's ~3–4 h, i.e., wheels-down around 07:00–07:30, not 10:20–10:30. `[DERIVED]`
- **Why it might not matter.** Prose already has him deliberately flying slowly ("a cruise power that traded speed for fuel burn"), and a racetrack near the end. But a *slower* cruise **lowers** the fuel-burn rate, which slows weight loss — the opposite of what the sentence implies. Fast-and-low burns weight fastest. See Q-01.
- **Distance vs. elapsed time.** At ~3 h 55 m airborne at 475–480 kt, the aircraft would be ~1,800 nm along the track, i.e., well north of James Bay in the Hudson Bay/Nunavut area — further than the dossier's "~1,420 nm NNW of KATL". Prose says "over James Bay… Hudson Bay"; that's fine if the distance is never quoted. `[DERIVED]`
- **Route.** KATL–RKSI great circle runs north over the Great Lakes, Hudson Bay, and the Arctic — matches prose ("across Hudson Bay, over the top of the world"). `[SRC]` dossier + `[CANON]`

### 1.6 Regulatory realism: 3 vs 4 pilots `[VERIFY]`

The dossier states FAR Part 117 requires an augmented **4-pilot** crew above 12 h. My recollection of Part 117 Table C is that a **3-pilot** augmented crew tops out around a 15 h flight-duty period even with the best (Class 1) rest facility, and a 15 h 20 m block plus pre-departure duty would exceed it; 4 pilots extends the limit to roughly 17 h. If that's right, a 3-pilot ATL–ICN is not legal, and an airline-pilot reader (Sam's exact readership) may notice. Prose only says "augmented three-pilot crew to comply with federal duty-time regulations on a sector too long for two." See Q-02 for options.

### 1.7 Telemetry signature (why John finds it) `[CANON]`

Delta 27's ADS-B track is the only one still *moving* on the morning of Day 0: transponder 7700, a sharp reversal over Hudson Bay, inbound to KATL — the same "deliberate diversion" signature John later recognizes on the *Pacific Tender*'s AIS track in Section 10 (Sam: "Same as mine. Same as yours, that first day."). The `reference/global-flight-traffic-model.md` tool computes any flight's position at exactly 02:00 EDT / 06:00Z and includes a Delta 27 preset flagged as straight-through-to-Seoul for reference only (Sam's real flight turns back).

### 1.8 First contact and landing (as settled) `[CANON]`

- Sam keys **Guard (121.5)** "every twenty minutes since Hudson Bay" and John answers from the Signature FBO ops-desk transceiver — first contact is radio, before they meet. John's name is exchanged by radio; **Sam's own name lands at the handshake** on the ramp (2026-09-19 clarification).
- Sam lands on a plain, hand-flown daylight visual approach, no tower, and taxis to Signature — a ramp he knows from two years of charter flying. No fuel truck, no FBO break-in for keys. Sam rides the emergency slide down; Dan (the dog) reaches him first.
- Prose lines that don't quite match the rest: Section 4 has Sam say he flew "three hundred people most of the way to **Europe**" (the flight is to Seoul, over the Arctic — D-06); Section 3 places Signature both on "the north side of the airport" and "the general aviation side, south field" (D-05).

---

## 2. Personas

Sources: `CLAUDE.md` cast bios (authoritative), the retired `john_lauer_persona.md` (professional detail; deleted 2026-09-20, in git history), settled `sections/`. Group roster as of the end of Section 10: **John, Sam, Tyler, Catherine, Grace, and Dan the dog.** Yohan is not yet met on-page.

### 2.1 Cast at a glance `[CANON]`

| Character | Age | Home base / location on Day 0 | Role / craft | Status as of §10 | Enters the group |
|---|---|---|---|---|---|
| **John Lauer** | 58 | Alpharetta, GA | Principal Applied AI Architect – Public Sector (Google); telemetry specialist; IFR-current ASEL pilot; ex-grill cook | Group's search/tech lead | Day 0 |
| **Sam (Samuel Reyes)** | 43 | Marietta, GA (in flight at 2:00) | Delta A350-900 Captain; ex-C-17 (AF); ex-corporate/charter; CFI | Group's pilot-in-command; John's mentor | Day 0, 11:00 |
| **Tyler** | 10 | Huntsville, AL | Child of a serving NASA astronaut on the ISS | Full member | Rescued §6 |
| **Catherine Navarro** *(was "Reyes" — renamed 2026-09-20; D-08)* | 52 | Phoenix, AZ | Senior ER physician; brother owns TruckHouse (Reno/Sparks); wants to know what happened to him | Full member | Found §7 |
| **Grace** | 32 | Near Elwha, WA (Olympic Peninsula) — *moved from Portland, OR by the 2026-09-20 retcon; prose not yet updated (D-15)* | Diesel mechanic + electrical engineer; civilian maritime mechanic at the Coast Guard station | Full member (fibula in cast) | Rescued §8 |
| **Yohan** | 48 | At sea, *Pacific Tender* (Yokohama → Seattle) | Senior mate + electrical engineer, decades at sea | Solo aboard; prose: anchored in Elliott Bay — **now Port Angeles Harbor, ~Day 9–10 (2026-09-20 retcon)**; **not met** | Pending (§11+) |
| **Dr. Elise Marchetti** | — | Near Milan, Italy | Pathology/infectious-disease professor; ham operator | Known only via ISS channel; **not met** | Pending |
| **Dan** | — | Alpharetta | John's dog | With the group | Day 0 |

**Not canon** (do not carry forward without the author): Marcus, Elena Voss (ISS commander), and any other pre-2026-09-05 character. The old Tyler/Voss connection is not canon.

### 2.2 John Lauer `[CANON]` unless tagged

- **Age/place:** 58, Alpharetta subdivision off Old Milton Pkwy, near the GA-400 interchange.
- **Family:** Widower. Wife **Naomi** died 16 years before the event. No children. Brother Mark is his only living close family. Naomi's study is kept unchanged (books, reading chair, rolltop desk). **In Section 4 he takes her Bible off that desk** — a physical object carried through his spiritual arc; don't drop it.
- **Job:** Principal Applied AI Architect – Public Sector at **Google**, D.C.-office-based, hybrid from metro Atlanta. Leads Gemini deployments for DOT/FAA, DHS, USCG, NOAA, FEMA. 30-year systems architect, telemetry specialist, former federal security consultant.
- **Telemetry fluency:** ADS-B (1090 MHz/978 UAT), ADS-C, Mode S/ACARS, ACAS/TCAS, MLAT; AIS (Class A/B, VDES), S-AIS, NMEA 0183/2000; NextGen 911 (NENA i3), CAD, Cospas-Sarsat beacons; SSA/TLE/orbital streams; GTFS-RT, PTC rail, OBD-II/J1939, NOAA METAR/TAF. `[SRC]` persona file. This is *why* the search-and-rescue mechanics work.
- **Origin of the hacker mindset:** An early network-intrusion/vulnerability-research episode as a young man, resolved by a federal-consulting offer in lieu of prosecution. Adversarial red-team habits.
- **Education:** B.S. ECE, Georgia Tech; M.S. Systems Engineering, Johns Hopkins. Put himself through Tech on the **overnight grill line at a Waffle House off North Avenue** — the source of "panic and competence run side by side." Paid off in §6 (he cooks at the Huntsville Waffle House) and §8 (dinner at Grace's).
- **Flying:** Active private pilot, **ASEL, instrument-rated and current**, flies IMC out of PDK, complex endorsement `[SRC]`; flies a 182; no turbine time. Knows an augmented widebody carries three pilots. **Does not own or carry a personal aviation radio** (2026-09-18 retcon) — on Day 0 he uses the FBO ops-desk transceiver. **Sam is checking him out on the PC-12 in flight** (opened §5, advanced §7: he flies the Huntsville→Amarillo cruise leg; he holds the fuel nozzle at Amarillo). Ongoing arc.
- **AI toolkit:** Company-issued local research model, coupled to frontier Gemini on the API. **Safety layer stripped exactly once, live, in front of Sam, in Section 4**, specifically for the nationwide 911 search (dispatch systems he has no authorization to reach). He says "I've never actually done it for real" first; Sam's "Some decisions don't need a vote" tips it. There was never a Delta intrusion.
- **Emotional turning points (permanent):** Day 0 private cry to God ("the first sound like it since Naomi died") in §1; **first witnessed break in §6**, triggered by Tyler's grief, with Sam sitting wordlessly beside him. Private/spiritual vs. witnessed/for-someone-else is the established distinction.
- **Home resources:** An emergency generator at the house picks up the load without missing a beat when the grid goes at ~12:50 a.m. (§4) — preparedness confirmed, not jeopardy.
- **Persona-file drift:** the file names his employer as **Anthropic** (Claude/Responsible Scaling Policy) and lists compensation. Canon is **Google/Gemini**; §3 also mentions a Google corporate jet. See D-07.

### 2.3 Sam (Samuel Reyes) `[CANON]`

- **Age/place:** 43, Marietta, GA. Wife **Elena**, daughter **Maya** (age not established on-page). Both found dead by Sam himself at ~12:35 on Day 0, with John at the threshold.
- **Career arc:** gliders and Cessnas as a teenager → flight-instructor rating through college → ratings added "for twenty-five years" → **8 years C-17 Globemasters, USAF** (not C-130) → **2 years corporate/charter jets out of Atlanta** (why he knows the Signature ramp) → **~10 years at Delta**, now **Captain, Airbus A350-900**. Established in Section 2 as entirely fixed-wing, "not rotary-rated and would never consider flying a helicopter" — **retconned 2026-09-21 (author):** he has in fact been working toward a rotorcraft rating and is a competent helicopter pilot, paid off at the Hook using the station's three unused MH-65E Dolphins (see `CLAUDE.md`). His C-17 history is backstory only and does not reintroduce a C-17 as a group asset.
- **Character:** The defining decision is the turnback: a deliberate "get-home-itis" choice, self-aware ("he decided the manual didn't get a vote"). He taught that lesson to students. Composed and procedural under pressure — a low pass or visual check before landing anywhere without a tower is his habit, kept even at KPHX.
- **Roles in the group:** Pilot-in-command; John's PC-12 mentor; in §6 carries the conversation and the primary reaction to the ISS reveal at the Waffle House while John cooks; **promises Tyler he'll help him spot the ISS** (§7) and pays it off in §10.
- **Naming:** His surname (**Reyes**, established in the §2 header and the §3 handshake) used to collide with Catherine's; **hers changed to Navarro on 2026-09-20** (D-08, resolved).

### 2.4 Tyler `[CANON]`

- **Age/place:** 10, Huntsville, AL.
- **Family:** Mother is a serving NASA astronaut aboard the ISS **since March** (first name deliberately withheld — don't name her without author direction). Father died in a car accident when Tyler was four; old settled grief. **Uncle Carl** (mother's younger brother) had been staying as his guardian since March, only through the fall; Carl's body was in the living room. Do **not** refer to the body as Tyler's father or as "David" anywhere.
- **Rescue:** Locked himself in his bedroom ~1.5 days after finding Carl. Found via the 911 search (Huntsville hit).
- **Function:** The emotional key that makes John's first witnessed break happen (§6). Asks whether the ISS is visible from altitude (§7); gets the promise. Asked whether boats "fly themselves" like planes, which widened John's search to AIS (§10). Keep him present as a person, not cargo, and be thoughtful about danger exposure.

### 2.5 Catherine Navarro `[CANON]` *(renamed from "Reyes" 2026-09-20 — working default; the author may override)*

- **Age/place:** 52, Phoenix, AZ. Senior ER physician.
- **Family:** Brother owns **TruckHouse**, an overland-vehicle shop near Reno/Sparks, NV (off-grid capable). She doesn't know whether he or the shop survived.
- **Introduction:** John never had her identity beforehand. She stayed near a Phoenix hospital since Day 0 "because it was the only thing left that made sense to do," heard the PC-12's engine, and **drove her car through the perimeter fence at Sky Harbor** to reach them (§7). Says "Absolutely" when offered the choice to stay behind (§8).
- **Function:** Medical lead — treats and casts Grace's fibula at a real local hospital (§8; Olympic Medical Center, Port Angeles post-retcon — prose still says Providence Seaside); private grief beat witnessed by John (§10), mirroring what Sam did for him in §6. She is the one who raises TruckHouse/Reno as an eventual goal.

### 2.6 Grace `[CANON]`

> **2026-09-21 (author):** Grace's injury is a **car crash**, not an airliner — see `CLAUDE.md`'s Grace/Port Angeles retcon for the full, current picture. This entry reflects that final state.

- **Home address: 217 Wapiti Way, Port Angeles, WA 98363** — inland, ~7 mi south of the Strait shoreline, forested foothill country. **Never visited or used on-page** — no dramatic reason needed, since the group's base is the Coast Guard station and cutter (below) regardless. (The pin for this address is a real vacation-rental business — don't name it in prose; fictionalize the street address before any publication.)
- **Age/place:** 32, near Elwha, WA, Olympic Peninsula — relocated from Portland, OR by the 2026-09-20 retcon (`sections/05`, `08`, `10` still say Portland/Seaside — D-15). **Civilian maritime support mechanic at the Coast Guard station on Ediz Hook**; diesel mechanic and electrical engineer by trade.
- **Injury:** driving home from her Hook shift toward Elwha, ~11:00 p.m. PDT Sept 4 (the 2:00 a.m. EDT event, converted), an oncoming dead-at-the-wheel driver forces a glancing, offset head-on collision right at the Highway 101 Elwha River bridge. Footwell intrusion breaks her fibula (clean, non-displaced). She calls out to the other driver and gets no answer but is too hurt to check.
- **Discovery:** she reads her own coordinates off her phone's map app to the 911 AI triage agent (§5's mechanism). **No contact was ever made** — she doesn't know anyone heard it. Found sheltering under the bridge itself (no travel needed, since the crash happens there), having splinted the fracture with driftwood and a torn jacket sleeve and survived three days on river water.
- **Function:** her personal, coworker-level connection to the Coast Guard station's dead (17 crew) is her real grief beat, placed at the station-clearing scene rather than Day 0. Her solar+battery/house-salvage material is retired along with the house. In §10 (or its new-setting equivalent) she still fixes well-pump wiring, rebuilds a generator carburetor, and rigs a directional antenna that improves John's satellite hotspot signal.

### 2.7 Yohan `[CANON]`

- **Age/place:** 48, senior mate and electrical engineer aboard the container ship ***Pacific Tender***, Yokohama → Seattle, three days out, ~22 crew (all lost).
- **Day 0 (§9):** Oversleeps because no one lived to wake him for his watch; finds officer of the watch **Okafor** dead at the bridge console, ship holding course on autopilot; **Second Engineer Alvarez** dead in the engine control room, logbook open mid-entry. Escalating comms check (VHF → SSB → AIS → satellite terminal); AIS shows a **"ghost fleet"** of other vessels still steaming and answering nothing; a few dying satellite fragments ("the eastern seaboard," "Europe"). **Decides to sail the ship into Seattle alone** — competent, resolved, grief processed in scene. Briefly retakes manual helm as a symbolic gesture.
- **Convergence (§10):** John finds the ship's AIS anchored in Port Angeles Harbor (prose still says Elliott Bay) — behavior no autopilot produces. The group decides to go investigate; **not yet met**.
- **Lives ashore, not aboard:** once he arrives (~Day 9–10), Yohan lives ashore with the group — the *Pacific Tender* is abandoned at anchor, not a base. The group's own lodging is the Coast Guard station (clinic/hangar/airfield/radios) plus living aboard the cutter *Active* (berths/power/water/freezer) — see `CLAUDE.md`.
- **Function:** Leading candidate to operate the group's side of the ISS ham link (electrical engineer, maritime radio background). Flagged, not confirmed.
- **Anchor point — CANON as of 2026-09-20 (author; prose still says Elliott Bay, Seattle): Port Angeles Harbor, inside Ediz Hook.** Timeline, the open items below, and lodging are in `port-angeles-base-research.md`. Grounded in NOAA *U.S. Coast Pilot 10, Ch. 7* (13 Sep 2026 edition):

| Point | Latitude / Longitude | Basis |
|---|---|---|
| **Ediz Hook Light** (skeleton tower, 0.3 nm W of the Hook's east extremity) | 48°08′24″N, 123°24′09″W = **48.1400°N, 123.4025°W** | `[SRC]` Coast Pilot |
| Hook's east extremity (shoals extend ~75 yd further east) | ≈ 48.140°N, 123.395°W | `[DERIVED]` 0.3 nm E of the light |
| **Coast Guard Air Station / Sector Field** (the group's base as of 2026-09-20) + 170-ft VTS radar tower (0.1 nm WSW of the light) | **48°08′27″N, 123°24′39″W = 48.1408°N, 123.4108°W** (station); tower ≈ 48.140°N, 123.404°W | `[SRC]` station coordinates (Wikipedia); tower `[DERIVED]` |
| **Puget Sound Pilots' station** (0.7 nm W of the light; pilot-boat pier on the Hook's south side; VHF ch 13) | ≈ 48.139°N, 123.420°W | `[SRC]` description, `[DERIVED]` position |
| **Suggested anchor position: mid-harbor, just south of the pilot station** | **≈ 48.1300°N, 123.4170°W** (48°07′48″N, 123°25′01″W) | `[DERIVED]` — placed in the harbor's deep middle (Coast Pilot: depths "decrease from 30 to 15 fathoms in the middle") |
| Charted "best anchorage" (off the wharves, 7–12 fathoms, sticky bottom) | ≈ 48.125°N, 123.425°W, just off the downtown waterfront | `[SRC]` description, position very rough — **too shallow (42–72 ft) for a loaded container ship's ~40–46 ft draft**, hence the mid-harbor suggestion |

**Why this works, all from the Coast Pilot `[SRC]`:**
- Port Angeles is **the designated pilotage station for all vessels en route to or from the sea**; pilotage is compulsory. Yohan would be anchored exactly where a pilot would have come aboard.
- The harbor "is easy of access by the largest vessels, which frequently use it when refueling, making topside repairs, **waiting for orders or a tug** and when weather-bound." That's literally his situation: no tug, no orders.
- Sheltered from all but east winds; ~2.5 mi long; anchorage there requires notifying Puget Sound Vessel Traffic Service — whose **VTS radar tower on Ediz Hook, and the Coast Guard air station beside it, are dark and unstaffed**.
- Port Angeles is **56 nm from Cape Flattery**, so the ship reaches it within about 3 hours of entering the Strait.
- Cautions: log booming grounds in the north part of the harbor (west side); a small **non-anchorage box in the southeast corner** of the harbor (33 CFR 110.230; roughly 48.116–48.127°N, 123.397–123.406°W — **resolved 2026-09-20**; the suggested anchor position is ~0.65 nm outside it); many submerged deadheads inside the Hook.

**Suitability for a large container ship (added 2026-09-20): yes, with caveats.** The Coast Pilot itself says the harbor "is easy of access by the largest vessels." Working below is `[DERIVED]` from general knowledge of container-ship dimensions, not from the repo — `[VERIFY]` before quoting.

| Check | Assessment |
|---|---|
| **Depth** | ~15 fathoms (~90 ft) in the harbor's middle `[SRC]`. A large loaded container ship draws ~40–50 ft, leaving ~40 ft under the keel. Seattle's berths also require a draft under ~50 ft, so a Seattle-bound ship clears here by definition |
| **Swing room** | 300–366 m ship on 3–5× depth of chain swings a circle of roughly 0.2–0.25 nm radius. Harbor is ~1.2 nm Hook-to-south-shore, with ~0.5 nm to either side at the suggested position — fits, but not generously; farther from the Hook's east tip gives more room |
| **Holding** | Coast Pilot describes the bottom off the wharves as "sticky" (mud/clay), which holds well `[SRC]` |
| **Shelter** | Protected from all but east winds; some swell in SE winter gales `[SRC]`. Fine for days in September; a **ship left unattended for weeks could drag in a winter east blow** — a possible slow-burn hazard for later scenes |
| **Unsuitable spots** | The charted "best anchorage" off the wharves (7–12 fm) is too shallow for a loaded ship; log booming grounds (north part, west side); the non-anchorage area in the east part (33 CFR 110.230 — a small box at the harbor's southeast corner, resolved; see `port-angeles-base-research.md` §3.1); submerged deadheads inside the Hook `[SRC]` |
| **Lone-operator issue** | Anchoring is normally done at the bow, and (as I understand it) most windlass brakes are worked from the forecastle, not the bridge. Yohan would have to stop the engines, set the rudder, walk forward, and let go the anchor himself. Doable and a strong scene — but `[VERIFY]` with a marine engineer whether the *Pacific Tender*-class ships have bridge-remote anchor release. Also he can't berth without tugs or line handlers, which is why anchoring is the only endpoint anywhere |

**Relationship to Grace's house (217 Wapiti Way, 48.0435°N, 123.5980°W):** the suggested anchor position is ~8.9 nm (≈10 mi) straight-line to the northeast, bearing ~054° from her house `[DERIVED]` — a drive of perhaps 15 minutes, and visible from the Hook. **This corrects my earlier "about 12 miles" estimate.** The AIS signature John sees: navigation status "at anchor," speed over ground ≈ 0, and the heading swinging slowly around the anchor with wind and tide — behavior no autopilot produces.

### 2.8 Dr. Elise Marchetti `[CANON]`

Pathology/infectious-disease professor near Milan, Italy — possibly the IRB (Institute for Research in Biomedicine), a real institute actually in Bellinzona, Switzerland, ~50 mi north of Milan `[VERIFY]`. Reintroduced 2026-09-05. A pre-collapse ham operator who reaches the ISS crew independently; the group finds her **through the ISS contact channel**. **Transport resolved 2026-09-21: a C-17 from McChord AFB carries the group and 4 TruckHouse BCRs to Italy** (`CLAUDE.md`'s Italy/Milan excursion retcon; the C-17 is later damaged there, stranding the group). The group bases north of Milan with her for a **4–6 month research effort into the cause of death of most of the population** — explicitly distinct from, and not a resolution of, the survival mystery. **Do not resolve why people survive** (deliberate mystery; no genetic, antibody, or exposure-survivor theory) — but the killing mechanism itself is fair game for this research thread to actually answer.

### 2.9 Supporting and referenced characters

| Name | Who | Status / note |
|---|---|---|
| **Naomi** | John's late wife | Died 16 years before; her study and Bible carry forward |
| **Mark** | John's brother | Only living close family; whereabouts not on-page |
| **Harry** | John's neighbor | Found dead 08:45 on Day 0 (§1) |
| **Elena / Maya** | Sam's wife / daughter | Found by Sam (§3) |
| **Theresa Foreman / Jack Sommers** | Sam's FO / relief pilot | Dead on the flight deck (§2) |
| **Okafor / Alvarez** | *Pacific Tender* OOW / Second Engineer | Dead (§9) |
| **Carl** | Tyler's uncle-guardian | Dead (§6) |
| **Tyler's mother** | Astronaut on ISS since March | Name withheld; alive as far as anyone knows |
| **Catherine's brother** | Owns TruckHouse (Reno/Sparks) | Status unknown |
| **Dan** | John's dog | With the group; reaches Sam first on the ramp |
| Two Waffle House employees (Huntsville) | Dead outside on break | Template for 24-hour locations |

### 2.10 Persona craft rules that bear on writing them `[CANON]`

- Keep the full cast engaged: give Tyler and Catherine concrete tasks like Grace got in §10.
- Survival is location-independent and unexplained; nobody's death was different from anybody else's.
- **Who's actually present at 2:00 AM:** offices/schools empty; 24-hour places (Waffle House, hospitals, gas stations) staffed. Check before placing a body.
- **Scarcity is a hard constraint:** ~350 US survivors; every find must cost real effort; characters never know the true number.

---

## 3. ISS ham-radio contact

Sources: `reference/iss-ham-radio-contact.md` (the "ham doc"), `CLAUDE.md` "ISS contact channel," Sections 6/7/10 for Tyler's thread.

### 3.1 Premise `[SRC]`

If terrestrial infrastructure fails (grids, Mission Control, satellite relay ground stations), **amateur radio** is the most plausible surviving Earth–ISS link. Story consequence `[CANON]`: **no JSC/Building 30/CAPCOM scene** — that idea is fully superseded; first contact is over ham radio, not a road trip to Houston.

### 3.2 Why it survives `[SRC]`

- The ISS carries dedicated ARISS ham gear (Kenwood TM-D710E and TM-D710GA transceivers), explicitly serving as a **contingency communications system** independent of the primary comms chain.
- Runs on the station's solar power — no dependence on any Earth grid.
- Four antenna systems on the Russian Service Module give redundancy.
- The link is **direct**, station ↔ ground operator, unlike Mission Control's path through TDRSS and staffed White Sands terminals.

### 3.3 Where it actually breaks: the ground side `[SRC]`

A surviving link needs a person on Earth with (1) a working 2 m/70 cm transceiver, (2) a **grid-independent** power source (solar + battery — fuel generators fail as supply chains collapse), and (3) basic orbital-tracking capability. Without the internet, Heavens-Above/N2YO are gone; the community needs pre-downloaded/printed **TLEs** or naked-eye tracking (the ISS is bright at dawn/dusk), and TLE accuracy degrades with time.

### 3.4 Operating constraints to write to `[SRC]`

| Constraint | Detail |
|---|---|
| Pass length | Typical overhead pass 8–10 min; strong-signal window 4–6 min |
| Elevation | >30° gives longest, clearest contact; <20° often blocked by terrain/buildings |
| Continuity | None — a **series of short check-ins**; next pass ~90 min to several hours later |
| Doppler | ~±9 kHz across a pass; precomputed AOS/TCA/LOS corrections |
| Gear | Even a handheld with a stock antenna can work on a good pass |

`[DERIVED]` The ±9 kHz figure fits the 70 cm band; on 2 m the shift is smaller (~±3.5 kHz). Worth stating the band whenever a Doppler number appears.

### 3.5 Story-useful tension `[SRC]`

- A single working ham station is a very high-value asset — arguably the last thread to an outside world.
- "Who gets to talk to the crew" can drive conflict if more than one survivor group has gear.
- The crew's real bottleneck is **consumables** (food, water, reboost capability), not comms — "the radio doesn't feed them, it just tells them how alone they are."
- A pre-collapse ham-licensed character becomes uniquely important.

### 3.6 Where it sits in canon `[CANON]`

- **Tyler's mother** is an ISS astronaut since March (known fact from the start, not a hidden reveal). The horror Sam feels in §6 — a woman alive ~250 miles up with no way to know if anyone below survived, and a son who may be proof someone did — is the root of his promise to help Tyler find the ISS, paid off in §10.
- **Elise Marchetti** reaches the ISS crew first, independently.
- **Confirmed 2026-09-21 (author): ham radio is a major, sustained story element, not a one-off contact scene — operating from two locations in turn.** At the Hook, the group builds/operates their own link (the 170-ft VTS radar tower is a ready-made mast) for initial ISS contact and ongoing communication through the Port Angeles phase; once the group relocates to the IRB for the Italy excursion, contact continues from there, presumably extending Marchetti's own pre-collapse setup. This is what keeps the ISS crew's situation a lived, ongoing pressure through the 4–6 month Italy research arc (§2.8), not an offstage fact.
- **Open, not yet decided:** who builds/operates the link at each location (Yohan is the leading candidate at the Hook; unclear at the IRB — Marchetti herself, or someone from the group), how first contact plays out relative to Tyler joining, and what becomes of the Hook's link once the group leaves for Italy. *Don't invent any of this without flagging it.*
- **Confirmed endgame (2026-09-21, author):** the expedition yacht (§2.7; `port-angeles-base-research.md` §8.9) eventually recovers a SpaceX Dragon capsule off the California coast, bringing at least one ISS crew member home with no ground-based recovery fleet — presumed Tyler's mother, per her mission clock (§3.7). The ham link (most likely via the IRB, given the timelines) is how the group learns splashdown timing/location. Not yet on the page; a major future set piece, not a comfort beat for the yacht.
- **Not yet on the page:** any actual ham contact scene, or the recovery itself.

### 3.7 Candidate additions — not in the ham doc, mostly general knowledge

| Item | Note | Tag |
|---|---|---|
| ISS orbit | ~400 km / ~250 mi altitude (canon uses "two hundred and fifty miles"); period ~92–93 min (ham doc says ~90), inclination **51.6°** | `[VERIFY]` |
| Latitude coverage | Inclination 51.6° means the ISS never rises for observers far above ~52°N/S. Alpharetta (34°N), Reno (39.5°N), Milan (45.5°N), Seattle (47.6°N), and Elwha/Port Angeles (~48.1°N) are all inside coverage; northern Canada, Alaska, and Scandinavia are not. **Correction (2026-09-20) to an earlier version of this row, which wrongly said passes at ~48°N run low:** the ISS's ground track spends the most time near its ±51.6° limits, so observers at ~45–50°N get *many* passes, often *high* — either just north or just south of the site, always moving west to east. What matters is a low horizon **in every direction**, not just south. The Elwha valley (enclosed by foothills) is a poor site; the Port Angeles waterfront, Ediz Hook, and the Sequim–Dungeness prairie are good (see `port-angeles-base-research.md` §6) | `[DERIVED]` |
| Voice channel | The ARISS voice downlink is widely cited as 145.800 MHz FM; the ARISS page linked in the ham doc lists current frequencies | `[VERIFY]` |
| Crew size | The ISS normally holds ~7; only Tyler's mother is established. Other crew nationalities/names not established | Q-08 |
| Mission clock | A ~6-month rotation started in March ends around September — she's near the end of her mission when the event hits. Return vehicle and landing/recovery with no ground support is a real story question | `[DERIVED]`, Q-08 |
| Orbit decay | Without periodic reboost (Progress/cargo vehicles) the station's orbit decays; the ham doc lists "reboost capability" as a bottleneck but gives no timescale | `[VERIFY]` |
| Naked-eye visibility | Visible when sunlit while the observer is in twilight/dark — dawn/dusk passes, matching the ham doc and §10's night-sky spotting | `[SRC]` |

---

## 4. Pilatus PC-12 PRO

Sources: `reference/PC-12-PRO-Brochure.pdf` (manufacturer brochure — marketing copy, not a POH), `CLAUDE.md` Fleet rule, Sections 5/7/8.

### 4.1 What the aircraft is `[SRC]`

Single-engine turboprop, pressurized, certified **single- or dual-pilot**, IFR, day/night, **known-icing**, and **paved or unpaved** ops. **Garmin G3000 Prime "ACE"** cockpit: three 14" touchscreen flight displays + two 7" smart controllers, cursor control device, autothrottle, Garmin AFCS, synthetic vision, GWX 8000 weather radar, predictive windshear, SurfaceWatch, Stall Warning & Protection, Electronic Stability & Protection, **Emergency Descent Mode**, and **Garmin Emergency Autoland** (brochure: "available from 2026" — so present in a Sept 2028 aircraft). Engine: Pratt & Whitney Canada **PT6E-67XP**, 1,200 shp takeoff, digital single-lever power control, 5,000 h TBO. Prop: Hartzell 5-blade composite, full reversing.

### 4.2 Specification table `[SRC]`

Values cross-checked against the metric column of the same row. Two cells in the brochure's text layer are wrong or mislabeled — see §4.4.

| Category | US | Metric |
|---|---|---|
| **Max cruise speed** | see §4.4 (metric column implies **290 KTAS**) | 537 km/h |
| Max range, 4 pax | 1,803 nm | 3,339 km |
| Max range, 6 pax | 1,568 nm | 2,903 km |
| Max altitude | 30,000 ft | 9,144 m |
| Takeoff distance over 50 ft | 2,485 ft | 758 m |
| Landing distance over 50 ft | 2,170 ft | 661 m |
| Rate of climb | 1,920 ft/min | 9.75 m/s |
| Stall speed | 67 KIAS | 124 km/h |
| Max ramp weight | 10,495 lb | 4,760 kg |
| **Max takeoff weight** | 10,450 lb | 4,740 kg |
| Max landing weight | 9,921 lb | 4,500 kg |
| Max zero-fuel weight | 9,039 lb | 4,100 kg |
| **Usable fuel** | 2,704 lb (402 US gal) | 1,227 kg |
| Max payload | 2,336 lb | 1,060 kg |
| **Max payload with full fuel** | 1,087 lb | 493 kg |
| Basic operating weight | 6,703 lb | 3,040 kg |
| Wing loading / power loading | 37.6 lb/ft² / 8.71 lb/shp | 183.7 / 3.95 kg |

| Dimensions | US | Metric |
|---|---|---|
| Length / height / span | 47 ft 3 in / 14 ft / 53 ft 4 in | 14.40 / 4.26 / 16.28 m |
| Cabin volume / baggage volume | 501 ft³ / 90 ft³ | 14.19 / 2.55 m³ |
| Cargo door (W × H) | 4 ft 5 in × 4 ft 4 in | 1.35 × 1.32 m |
| Passenger door (H × W) | 4 ft 5 in × 2 ft | 1.35 × 0.61 m |

**Cabin length / width / height are omitted on purpose:** the brochure's interior-dimension text repeats exterior values (the 53 ft 4 in wingspan and the 17 ft 1 in tail span appear as "cabin width" and "cabin height"), so those three cells can't be trusted from the text layer. Read them off the PDF page directly before quoting them. The exterior and door figures above pair cleanly with their metric values. `[VERIFY]`

### 4.3 Story-relevant capabilities `[SRC]`

- **Short/rough-field:** 2,485 ft takeoff at max gross; operates on grass, gravel, dirt — opens thousands of small fields, and the entire TruckHouse/off-grid-arc logic depends on this.
- **Pallet-size cargo door** + flat floor; seating for up to **8–9 passengers** (the group of six + dog + workstation fits).
- **Emergency Autoland** and **Emergency Descent Mode**: selects an airport, lands, and stops on the runway when the pilot is incapacitated — with everyone dead it never triggers (nobody pressed it), but a *sole* pilot with a health problem is now a survivable plot beat. Story hook, not canon.
- **Single-pilot certified:** relevant to John's checkout — he could legally and practically fly as a single pilot once type-rated (the story hasn't said whether he's flown the type solo).
- **Turbine:** burns **Jet-A**, not avgas — relevant to fueling on the road (see §4.5).

### 4.4 Brochure text-layer errors to know about `[VERIFY]`

1. **Max cruise speed reads "440 KTAS" with "537 km/h"** — these disagree (537 km/h ≈ 290 kt). The real-world PC-12 max cruise is ~290 KTAS; treat **290 KTAS** as the value and the "440" as a typesetting slip. All the story's leg timing (Huntsville→Phoenix ~5h05m at a ~253 kt ground speed into a headwind) is consistent with ~290 KTAS, not 440.
2. **"Time to climb sea level to FL 450: 19 min"** — max altitude is 30,000 ft, so FL450 is impossible. Likely FL300 (or 30,000 ft).
3. The interior-dimension block repeats exterior numbers (see §4.2), so cabin length/width/height are unreliable. The weight and performance rows pair cleanly with their metric values once the two errors above are set aside.

### 4.5 How the story uses it `[CANON]`

| Section | Use |
|---|---|
| §5 | Brand-new **demo aircraft taken from the Pilatus dealer at PDK** (behind glass, service-door lockbox popped in under a minute, fuel topped off): "Not everything gets to be hard." Rationale for the swap: the A350 is too big and pointless for reaching a handful of survivors. The A350 stays dead on a runway at KATL. |
| §5 | Sam starts checking John out ("you fly?"). Launch to Huntsville at dusk, two men "twenty-nine hours" after being strangers. |
| §7 | **Huntsville → Phoenix:** ~1,285 nm via airways, FL280, ~5h05m ETE into a headwind; needs ~3,100 lb of fuel vs 2,704 lb usable → **one stop at Amarillo** (Sam's "probably two" resolved to one). John flies the cruise leg and holds the fuel nozzle. |
| §8 | **Phoenix → Portland** *(prose; superseded by the 2026-09-20 retcon)*: ~925 nm via airways (great-circle ~875 nm), non-stop with reserves — a deliberate easy contrast. Numbers independently computed because the supplied dossier duplicated the HSV→PHX numbers. **Post-retcon: Phoenix → Port Angeles (KCLM), ~1,020 nm great-circle / ~1,080 nm airway `[DERIVED]` — still inside the 1,568–1,803 nm brochure range, but longer with thinner margin; needs its own fuel/ETE check (Q-13).** |
| §10 | Short Portland → Seattle hop (~40 min) flagged as a plausible next mentorship opportunity. **Post-retcon: Port Angeles → Seattle is ~60 nm across Puget Sound, roughly half an hour.** |

**Fleet rule:** whether the PC-12 remains the standing aircraft long-term is **open** — don't assume it's locked in, and don't casually put them in something else without a reason. Previously cut aircraft (King Air as a group asset, Gulfstream, etc.) shouldn't return without asking. **Exception, 2026-09-21: a C-17 is deliberately reintroduced for the Italy/Milan excursion** (from McChord AFB, carrying the group and 4 TruckHouse BCRs — see `CLAUDE.md`), paying off Sam's C-17 background. Not a general reopening of the fleet question.

### 4.6 Continuity checks worth a second look `[DERIVED]` / `[VERIFY]`

- **Fuel math (D-09).** The brochure's 1,568–1,803 nm max-range figures sit above the 1,285 nm HSV→PHX leg, and typical PC-12 burn is a fraction of what 3,100 lb over ~5 h implies (~610 lb/h). A non-stop looks marginal-to-feasible on paper. The §7 figures came from an author-supplied dossier that is not in the repo, so it may account for reserves or headwinds — see Q-04. Not urgent, but a pilot reader could run the same check.
- **Fuel with no grid (D-10).** §7 has Amarillo as a "self-serve pump that gave up its access panel with barely a fight." Amarillo is ~Day 2; the grid is dark by hour ~8–24 (§5 below). Electric fuel-farm pumps wouldn't run. Options: FBO backup generator, a truck-mounted pump (self-powered), or a hand/gravity method. See Q-05.
- **Payload.** Max payload with full fuel is only **1,087 lb** — six adults, a dog, a workstation and supplies will push against it on every full-tank leg (§7's Amarillo leg carried three people; later legs carry more).
- **Autoland date.** Brochure says autoland is "available from 2026"; the story date is Sept 2028, so it's plausibly fitted to the demo aircraft — but the demo aircraft's *software* status is an author choice.

---

## 5. Power-grid collapse

Source of truth: `reference/power-grid-shutdown-timelines.md` (Draft 4, 2026-09-14 — "researched-but-speculative"). Confidence throughout is **low to moderate**; the mechanisms are real, the exact sequencing for a zero-human scenario is extrapolation. This section is a working summary, not a replacement.

### 5.1 Scenario parameters `[SRC]`

~8,000 global survivors, ~350 in the US, zero human infrastructure input from hour zero, permanently. Event at **2:00 AM Eastern**, Tue Sept 5, 2028.

### 5.2 The rule that changed `[CANON]`

The 2026-09-14 revision **overturns the "hydro-heavy regions stay up" rule** the prose had leaned on through 2026-09-09. Don't write "the Pacific Northwest / TVA / Quebec still has power because of hydro." Utility-scale hydro is grid-tied through the same protective relaying and trips with the rest of its interconnection unless a plant is already electrically islanded (rare).

**The only plausible reasons anything still shows power after ~a day:**
1. A small, temporary, accidental surviving pocket where generation and load happened to balance — real 2003 Northeast-blackout precedent (~5,700 MW of western New York stayed powered near Niagara). Used in **§6 for Huntsville** (a few blocks; Waffle House sign goes dark around midnight while they sleep). Explicitly **not** attributed to TVA hydro.
2. A building's **own backup generator** with days of fuel — hospitals and certified airports are required to have one. Used for the **hospital** in §8 (Providence Seaside in the prose; Olympic Medical Center, Port Angeles post-retcon). The **PDX approach-lighting** example in the current prose is **dropped by the 2026-09-20 retcon** — KCLM is too small to justify a certified backup plant.
3. A property's own **islanding solar+battery** system. Used for **Grace's house** (§8) — and it characterizes her.

### 5.3 Key mechanisms `[SRC]`

| # | Mechanism | Takeaway |
|---|---|---|
| 1 | North America is **four** synchronous interconnections (Eastern, Western, ERCOT, Quebec) tied only by DC/VFT links | Each collapses **on its own clock**; nothing happens "all at once" |
| 2 | UFLS first stage at **59.5 Hz**; operating band 59.5–62.2 Hz | Relay cascade is fast (2003: first trip → 508 units offline in <7 min); the slow part is how long frequency takes to sag |
| 3 | 2003 precedent: standing islands survived (western NY, ~5,700 MW) | Small unplanned pockets are possible, not plannable |
| 4 | Coal hopper/bunker fuel ≈ **12–14 h** at full load | Coal units trip first, on a fixed clock |
| 5 | Plants and compressor stations already unmanned; a 24/7 remote SCADA team handles alarms | Gas trips at unpredictable, fault-driven times |
| 6 | Nuclear needs continuous licensed-operator presence (10 CFR 50.54(m)) | Nuclear SCRAMs safely, then coping-window clock starts |
| 7 | IEEE 1547 / UL 1741: grid-tied PV/wind stops exporting within **2 s** of islanding | Utility solar/wind go down in the first wave, not later |

### 5.4 Phase model (per interconnection) `[SRC]`

| Phase | Hours | What happens |
|---|---|---|
| 1 — Silent window | 0–2 | Grid fully energized; streetlights, card-reading gas pumps, municipal water pressure still work |
| 2 — Thermal tripping | ~2–14 | Coal hits hopper limit; gas/pipeline faults accumulate uncorrected; remaining generators ramp up to cover |
| 3 — Frequency sag & cascade | ~8–16 | Frequency crosses 59.5 Hz; nuclear/hydro relays trip in seconds–minutes; fast cascade. **Realistic "lights out" for a given region: hours 8–24**, varying by interconnection |
| 4a — Reactor coping window | 0–72 h from each plant's trip | Diesel/battery (FLEX) cools reactor and spent-fuel pool |
| 4b — Reserves deplete | ~3–7 days | Active cooling stops; the pool becomes the primary hazard |
| 4c — **Danger threshold** | **~10–21 days from trip** | Pool boils off; exposed zirconium → steam → hydrogen → release (the Fukushima mode) |
| 4d — Long tail | Months 2–12+ | **Regional, not global**, contamination (tens of miles, per Chernobyl/Fukushima); exclusion zones last years to decades |

`[SRC]` The 10–21 day figure tightens the earlier "weeks 3–8" and is not a documented spec — both are engineering-plausible ranges.

### 5.5 Story-beat clock against the grid `[DERIVED]`

| Story beat | Hours after 02:00 Sept 5 | Grid phase | Consistent? |
|---|---|---|---|
| John's walk / first 911 call (07:20–07:28) | ~5.5 | Phase 2; grid still up | Yes — internet, DOT cameras, FlightAware still live |
| John's 08:30 work meeting; Day 0 search (13:40+) | ~6.5 / ~11.7 | Phase 2 → early Phase 3 | Yes — data feeds still work through the afternoon sweep |
| Grid dark at John's house, ~12:50 a.m. Sept 6 (§4) | ~22.8 | Phase 3, inside the 8–24 h window | Yes |
| Launch to Huntsville at dusk Sept 6 (§5) | ~40 | Post-collapse | Yes |
| Huntsville pocket: sign dark ~midnight Sept 6→7 (§6) | ~46 | An accidental pocket | Yes, but it is at the far end of "days" — author's call whether this pocket is believable that long |
| Nuclear danger window for Alpharetta | Trip ~+8–24 h → **~Sept 15–27, 2028** | Phase 4c | Section 4 has John write his date down — check the exact figure against §4 prose |

### 5.6 Nuclear regional concentration (US) `[SRC]`

Heaviest: Illinois (11 reactors), MI, WI, MN, OH. Second: Southeast — Georgia (Plant Vogtle, ~4.5 GW), SC, NC, TN, AL, FL. Northeast/Mid-Atlantic: PA, NY, NJ, CT. Southwest: Palo Verde (AZ). Sparse: Columbia Generating Station (WA), the only Pacific Northwest plant. None: AK, HI, most of the Mountain West.

### 5.7 Locations profiled `[SRC]` (EIA 2025, via Wikipedia power-station lists)

| Location | Utility | Gas | Nuclear | Coal | Solar | Other | Interconnection |
|---|---|---|---|---|---|---|---|
| Raleigh, NC | Duke Energy Progress | 40.0% | 31.8% | 13.2% | 9.42% | 3.43% hydro, 1.14% biomass, 0.69% wind | Eastern |
| Tucson, AZ | Tucson Electric Power | 45.0% | 26.7% | 7.87% | 13.3% | 4.21% hydro, 2.69% wind, 0.18% biomass | Western |
| **Reno, NV** | NV Energy | 50.5% | **0%** | 5.72% | 30.1% | 8.56% geothermal, 4.16% hydro, 0.78% wind | Western |
| **Alpharetta, GA** | Georgia Power | 38.6% | **34.7%** | 13.6% | 7.64% | 3.19% biomass, 2.03% hydro, 0.21% petroleum | Eastern |
| Naval Station Mayport, FL | JEA | (98% fossil as of 2021) | 0% in-state; historical Vogtle contract | coal/petcoke (Northside) | — | — | Eastern |
| Bangor, ME | Versant Power | 37.5% | 0% | 0.22% | 10.4% | 19.4% wind, 17.8% hydro, 11.7% biomass, 1.13% petroleum | Eastern (ISO-NE) |

**Ranking, safest → riskiest (nuclear exposure only):** Reno (none) → Raleigh → Tucson (Palo Verde ~100 mi) → **Alpharetta** (highest nuclear share; second-closest reactor proximity). The ranking is about *nuclear exposure*, not whose grid lasts longest — nobody's does beyond about a day.

Reno's zero-nuclear status — not "better grid durability" — is what gave the eventual TruckHouse relocation its ticking-clock safety reason. `[CANON]` **Amended 2026-09-20:** Grace's house near Port Angeles is also very low risk (§5.9), so that reason no longer distinguishes Reno from where the group already is.

### 5.8 How the story uses it `[CANON]`

- **§4:** John has the model run the collapse forward; his own Georgia dot comes back a bad color with a date on it; Sam witnesses. Later, at the desk, John voices the reasoning aloud (Vogtle, scram-then-pool, 10–21 days) — which is also where "we need to head west" is first said on-page. The **grid actually goes dark at his house ~12:50 a.m.** and his generator carries the load — **deliberately not a scare.** That's the model for any future in-house power beat: preparedness confirmed, not jeopardy. Don't write a version where the backup fails or the outage creates tension without the author asking.
- **§6:** Huntsville pocket, accidental, temporary.
- **§8:** Hospital generator plant; Grace's solar+battery house. (The PDX approach-lighting-on-generator beat in the current prose is dropped by the 2026-09-20 retcon.)
- **Pressure on John is a date on a calendar** (his region's danger window), not a personal power crisis — it feeds the eventual Reno relocation.
- Still wanted by the author: more dedicated grid scenes (characters reasoning about regions to avoid, a supply run routed around a danger window, a character with direct plant knowledge).

### 5.9 Nuclear exposure at Grace's house (217 Wapiti Way, Port Angeles) — added 2026-09-20

**Verdict: very low risk.** Sourcing per line.

| Factor | Assessment | Tag |
|---|---|---|
| Nearest commercial reactor | Columbia Generating Station, Richland WA — the Pacific Northwest's only plant. ~220 mi east of Port Angeles, beyond both the Olympics and the Cascades | `[SRC]` plant identity (grid doc §Nuclear); distance `[DERIVED]` |
| Spent-fuel-pool release radius | Regional, "tens of miles" (Chernobyl/Fukushima precedent) — 220 mi is far outside it | `[SRC]` |
| Wind | Prevailing westerlies in the Pacific NW carry a release at Richland *east*, away from the Olympic Peninsula | `[DERIVED]` general meteorology |
| Local nuclear generation | None. No plant on the peninsula | `[SRC]` |
| Naval Base Kitsap (Bangor / Bremerton) | ~40–50 mi east across Hood Canal/Puget Sound; nuclear-powered subs and carriers, plus a Trident base with stored warheads. Naval reactors are built to shed decay heat passively, so this is not the spent-fuel-pool boil-off scenario | `[VERIFY]` |
| Hanford legacy waste tanks | High-level waste tanks next to Columbia Generating Station; a local-to-Hanford hazard, far from Elwha | `[VERIFY]` |
| Elwha River dams | Removed in the 2011–2014 period, so no local dam/floodgate failure hazard from those (the grid doc's hydro-floodgate risk is a separate, downstream-of-other-dams concern) | `[VERIFY]` |

**Story consequence:** the ~10–21-day nuclear danger window was the safety engine for leaving Alpharetta and pointing west. With the group at a low-risk location, that engine is spent — Reno must be motivated by TruckHouse itself (Q-09). Also note the ranking table in §5.7 (Reno → Raleigh → Tucson → Alpharetta) can gain a row: **Port Angeles ≈ Reno-tier (very low)**.

### 5.10 Open research items from the source doc `[SRC]`

Exact SCADA alarm/watchdog intervals; which nuclear/hydro plants can auto-island; plant-by-plant battery/generator coping times and pool inventories; how often 2003-style surviving islands occur and where; coal-ash pond/tailings dam failure risk. **Also a hydro hazard worth its own scene:** floodgates need active management in high-water events, so a heavy rain downstream of a dam is an acute, sudden risk independent of the electrical timeline.

---

## 6. Cross-links: how the five topics interlock

- **DAL27 ↔ Personas:** Sam's whole persona is defined by the turnback choice; John's persona is what lets him *notice* the track (ADS-B fluency) and *reach* Sam (own IFR rating, FBO ops desk).
- **DAL27 ↔ Grid:** John sees Delta 27's track and the DOT cameras only because the grid is still in Phase 2 (hour ~7). Had he waited until the evening, the data feeds would be dying.
- **Personas ↔ ISS:** Tyler's mother is the human stake; Sam's promise and its §10 payoff; Yohan (electrical engineer, maritime radio) is the presumed ham operator; Elise is the far end of the ISS channel.
- **ISS ↔ Grid:** The ham link's premise *is* the grid failing: no TLE websites, so the group needs stored orbital data or naked-eye tracking. Grace's solar+battery/antenna work is the on-page proof that off-grid power exists in this cast.
- **PC-12 ↔ Grid:** Jet-A logistics after the grid dies (D-10); airports with certified backup generators keep runway lighting (§8); the PC-12's unpaved-field ability matters for TruckHouse/Reno.
- **Grid ↔ Personas:** John's home region is the *worst* nuclear risk on the list; Reno is the safest; Catherine's brother's shop is in Reno; that is the Reno logic.

---

## 7. Discrepancy register

Nothing below has been changed in the manuscript or canon. Each line is for the author to decide.

| ID | Where | Conflict | Suggested resolution (not applied) |
|---|---|---|---|
| **D-01** | DAL27 dossier vs `CLAUDE.md` | Dossier: takeoff **27L**, land **27R**, Gate F6. `CLAUDE.md` + §3 prose: land **26R**, taxi to Signature | Prose and canon agree; the dossier's runways are mechanics-only. Note in the compendium (done); no action unless the author wants dossier-matching runways |
| **D-02** | Landing time | Dossier: touchdown 10:20, gate 10:30. `time.md`: "10:30 Sam lands." `CLAUDE.md`: "~10:30" | `time.md` wins: 10:30 landing. The dossier's 10:30 is a *gate* time |
| **D-03** | Sam's rest end | Dossier: rest period ends **03:30** (3 h). `time.md`: rest ends **03:00**; turn at 03:30 | `time.md` wins (03:00 end, 03:30 turn) — matches prose |
| **D-04** | Passenger count | `CLAUDE.md`: "~260-plus". §2 prose: **306** passengers + 13 crew | Update `CLAUDE.md` line to match prose (a full 306-seat A350) — author's call |
| **D-05** | §3 prose | Signature described as "north side of the airport" and as "general aviation side, south field" | Pick one; `[VERIFY]` the real Signature ATL side before the next pass |
| **D-06** | §4 prose | Sam says he flew "three hundred people most of the way to **Europe**" — the route is over the Arctic to Seoul | Change to "most of the way to Asia" / "up to the Arctic" — or leave if Sam is speaking loosely |
| **D-07** | `john_lauer_persona.md` vs canon | **Resolved 2026-09-20:** file retired (it said Anthropic/Claude and lacked widower status, Naomi, Mark, Waffle House, the PC-12 arc). §2.2 above is the working replacement; recover the original with `git show HEAD:john_lauer_persona.md` | None needed |
| **D-08** | Surnames | **Resolved 2026-09-20:** Sam is Samuel Reyes (§2 header, §3 handshake); Catherine's surname collided, so it is now **Navarro** (`CLAUDE.md` bio + one prose instance in `sections/07-day2-john.md`, changed) | Working default; the author may pick a different name. Her brother (TruckHouse) carries the same surname |
| **D-09** | PC-12 fuel math | §7: direct HSV→PHX needs ~3,100 lb vs 2,704 lb usable. Brochure max range 1,568–1,803 nm > the 1,285 nm leg | Check the source dossier (not in repo). Possibly reserves/headwind are baked in — see Q-04 |
| **D-10** | Fuel after grid loss | §7: Amarillo "self-serve pump" works on ~Day 2, after the grid is dark | Add a power source (FBO generator, truck-mounted pump, hand pump) — see Q-05 |
| **D-11** | Vogtle distance | §4 prose: two reactors "inside eighty miles of this house" (Vogtle 3 and 4). `reference/power-grid-shutdown-timelines.md`: Vogtle is roughly **150 miles** from Alpharetta | Fix prose to "about a hundred and fifty miles" or double-check the real distance `[VERIFY]` |
| **D-12** | README | `README.md` still references `deltaFlight84.md`, `1naM_Draft.md` (not in repo), a "2026-09-09 retcon," and "Sections 1–13" | Refresh the README to the 2026-09-14 state |
| **D-13** | Persona ages vs prose | Minor: "a decade at Delta" + 2 (charter) + 8 (USAF) = 20 years of career for a 43-year-old with "25 years" of GA ratings — plausible but tight | No action; noting for later scenes that quote years |
| **D-15** | Grace's location (2026-09-20 retcon) | `CLAUDE.md` now puts Grace **near Elwha, WA**. `sections/05` (third hit; Sam's "Huntsville, Phoenix, Portland."), `sections/08` (whole geography: PHX→PDX flight, PDX runway lights, rental car, Seaside overlook, Providence Seaside, coastal house, market) and `sections/10` (coastal house; "Seattle's nothing from Portland. Forty minutes") still say Portland/Oregon | Prose pass needed on §5, §8, §10 — held until the author OKs it. Defaults are in the `CLAUDE.md` retcon entry (KCLM, Olympic Medical Center, Elwha shoreline, no airport-lighting beat) |
| **D-16** | Yohan's ship — Section 9 | Prose: "three days from Seattle." Canon (2026-09-20): the ship anchors in Port Angeles ~1 week after the group arrives (~Day 9–10); the bio's "three days out" means out of Yokohama (~10–13 days total) | Change §9 to "more than a week from Seattle" (`port-angeles-base-research.md` §2.2) |
| **D-17** | Yohan's ship — Section 10 | Prose: AIS shows the ship anchored in **Elliott Bay** "the day before yesterday" on ~Day 5, and Sam says "Seattle's nothing from Portland" | Anchor moves to Port Angeles Harbor; discovery moves to ~Day 8–10; the group can drive to the harbor, no flight needed |
| **D-18** | Grace's house — Sections 8 and 10 | Prose has the group showering, dining, sleeping, and resting several days at her house (well pump, generator, antenna); canon: house unusable (crash) | Re-set those scenes at the group's new lodging (Q-18); Grace's tasks carry over; also fix D-15 |
| **D-19** | Open questions in `port-angeles-base-research.md` | Q-16 to Q-26 (the accident, rescue site, lodging [now decided: the Coast Guard station], §9 wording, §10 dates, healing, winter power, BCR/Italy logistics, living at the station, the station's dead, station facts to verify) live there, not in this file | Cross-reference only |
| **D-14** | Brochure | Max cruise "440 KTAS" vs "537 km/h" (~290 kt); "time to FL450" impossible for a 30,000 ft ceiling; interior dimensions repeat exterior values | Use 290 KTAS; read cabin dimensions off the PDF page; see §4.4 |

---

## 8. Open questions

Author decisions or research that would firm this up. Numbered so they can be referenced.

- **Q-01 — Return-leg time.** Turn 03:30 → landing 10:30 is 7 h, roughly 3 h longer than a normal-speed return. Prose: slow cruise plus a racetrack. Do you want a stated in-story reason (e.g., Sam deliberately burns weight and drifts, or waits for daylight), or leave it implicit? *(Editing `time.md` is not on the table; the scene fits to it.)*
- **Q-02 — Crew size vs. regulation.** A three-pilot crew may not be legal for a 15 h 20 m block (§1.6). Keep as is; swap to four pilots (adds one dead named character); or shorten the block/route?
- **Q-03 — Persona file.** *Resolved 2026-09-20:* retired in favor of §2.2.
- **Q-04 — HSV→PHX fuel dossier.** Is the original (duplicated) dossier recoverable? Do the ~3,100 lb figure and the ~1,285 nm figure include reserves, alternates, or a headwind? Does the tone of §7 depend on a stop being *necessary*?
- **Q-05 — Fueling after the grid dies.** How does Amarillo's pump run on Day 2? Also relevant to every future leg to Reno.
- **Q-06 — Ham link.** Who builds and operates it (Yohan?), where, on what power, and what does the first contact sound like — and does it happen before, at, or after Seattle?
- **Q-07 — Elise Marchetti's arc.** Is she a distant voice on the ham channel only, or a character the group eventually meets/relocates? How does her research thread bear on the "don't resolve why" rule?
- **Q-08 — ISS crew and return.** *Partly resolved 2026-09-21:* she comes home via a Dragon-capsule splashdown off California, recovered by the group's expedition yacht (§3.6). Still open: who else is aboard, exact timing, and the recovery logistics themselves (real Dragon recovery involves hazmat handling of hypergolic thruster residue by a trained crew — unresearched for a small-yacht scenario).
- **Q-09 — TruckHouse.** Does the group go to Reno, and when? The Alpharetta danger window (~Sept 15–27) matters less now that they've left; is there a *new* safety reason to move? **Updated 2026-09-20:** Grace's house is itself very low nuclear risk (§5.9), so *no* safety reason remains — Reno has to be motivated by TruckHouse itself. **Author's stated reasons (2026-09-20): (1) Catherine wants to know what happened to her brother; (2) TruckHouse's BCRs are needed for the excursion to Italy to connect with Dr. Elise Marchetti.** **How many and how they get to Italy is now resolved: 4 BCRs, via a C-17 from McChord AFB (Q-23).** Still open: what "BCR" means in the book (the real TruckHouse BCR is a carbon-fibre camper on an AEV Ram 3500 `[VERIFY]`).
- **Q-10 — PC-12 as the standing aircraft.** Locked in, or do they change types when the group outgrows it (payload 1,087 lb with full fuel; 8–9 seats)?
- **Q-11 — Yohan's first on-page meeting.** Next section per "Known open work"; what does he bring (vessel, radio gear, engineering) that the group doesn't already have?
- **Q-12 — Sam/Catherine surname.** Same surname on purpose? (D-08.)
- **Q-13 — Phoenix → Elwha leg.** ~1,020 nm great-circle (~1,080 airway) with a westbound-then-northbound routing: keep it non-stop, or add a fuel stop (e.g., Boise/Redmond-class field) to keep the PC-12's reserves honest? Needs the same independent fuel/ETE check the Portland figures got.
- **Q-14 — Elwha geography choices.** Confirm the defaults in the `CLAUDE.md` retcon: KCLM as the arrival field, Olympic Medical Center as the hospital, the Elwha River mouth/Freshwater Bay shoreline as the rescue site. Is the exact place name (Elwha vs. Port Angeles vs. Joyce/Freshwater Bay) meant to be on the page? *(Partly resolved: her house at 217 Wapiti Way is inland, ~7 mi from the shore, per the author's Maps pin. Still open: why was she at the shoreline when she was hurt, and does §10's rest-stop setting become a forested valley house, with the ISS-spotting and antenna scenes adjusted for terrain — the Olympic foothills to the south will cut the horizon there?)*
- **Q-15 — Prose pass.** Rewrite §5/§8/§10 for the new location now, or hold until the next section is drafted? (D-15.)

---

## 9. Changelog

| Date | Change |
|---|---|
| 2026-09-20 | Added a container-ship suitability assessment for the proposed Port Angeles anchor point (depth, swing room, holding, shelter, unsuitable spots, lone-operator anchoring issue) to §2.7. |
| 2026-09-20 | Added Yohan's proposed anchor point (Port Angeles Harbor, inside Ediz Hook) to §2.7 with coordinates grounded in NOAA Coast Pilot 10 Ch. 7 — proposal only, not canon; prose and `CLAUDE.md` still say Elliott Bay. |
| 2026-09-20 | Added §5.9 (nuclear exposure at Grace's house — very low risk; Kitsap and Hanford flagged to verify); renumbered old §5.9 to §5.10; amended the Reno rationale (§5.7, Q-09) and the matching `CLAUDE.md` grid and TruckHouse bullets. |
| 2026-09-20 | Grace's house located from the author's Google Maps pin (48.0435, −123.5980): inland, not coastal (`CLAUDE.md` retcon entry, §2.6, Q-14). Flagged that the pin is a real vacation-rental business. |
| 2026-09-20 | Added Grace's address: 217 Wapiti Way, Port Angeles, WA 98363 (`CLAUDE.md` retcon entry + bio, §2.6, Q-14). |
| 2026-09-20 | Source docs moved to `reference/`; `john_lauer_persona.md` retired (D-07, Q-03 resolved); path references updated in `CLAUDE.md`, `README.md`, this file. |
| 2026-09-20 | **Yohan lives ashore; he does not commute to the ship (author) — the ship-as-base plan is retired; an expedition yacht at the Hook is proposed** (`CLAUDE.md` amendment 13; `port-angeles-base-research.md` §8.9, Q-34, Q-35). The Panama Canal is not transitable without operators, so the yacht can't be the route to Italy. |
| 2026-09-20 | **The container ship is abandoned; the yacht is now 100–120 ft (author).** Added `port-angeles-base-research.md` §8.10 (worst cases with *Rena* and *X-Press Pearl* precedents; which way she drifts; does it matter; what Yohan can do before leaving) and the larger-yacht update in §8.9 (crew roles; saltwater docks only — the Ballard Locks trap). `CLAUDE.md` amendment 13 updated; Q-35 updated; Q-36, Q-37 added. |
| 2026-09-20 | **Chito Beach Resort removed (author): "no good because of the bodies."** Its `CLAUDE.md` amendment and dossier section (and Sekiu Airport notes) were deleted; the dossier's yacht section is now §8.9 and the `CLAUDE.md` yacht amendment is now 13. |
| 2026-09-20 | **Decisions (author): go to the Hook; four Super C RVs with big battery banks recharging on auto, found "in the area"; 17 Coast Guard dead, bagged and moved to the hospital morgue.** `CLAUDE.md` amendment 12 (and 10/11 updated: 17 replaces my "few dozen" estimate); `port-angeles-base-research.md` §8.8, Q-31, Q-32. |
| 2026-09-20 | Added `port-angeles-base-research.md` §8.7 (alternatives for parking the RVs, judged by independent power and water): municipal water depends on pumps (Ranney well on the Elwha, same valley as the crash); all campgrounds and RV parks were full on Labor Day night (bodies); the Hook is best, the dealership lot is the staging area, a private Dungeness farm is the best alternative; rainwater from the hangar roof is ample. Q-30. |
| 2026-09-20 | RV reference model added (author: 2027 Thor Motor Coach Inception 38DX Super C, listed in Mesa AZ). Confirmed 261293 US-101, Sequim is **RV Country's Sequim location** (earlier "Peninsula RV"/"Clear Creek RV Center" labels were older names); Sequim Super C stock unverified (Q-27). |
| 2026-09-20 | **RV plan decided (author): four Super C motorhomes from the dealership at 261293 US-101, Sequim, taken to the Hook** (`CLAUDE.md` amendment 11; `port-angeles-base-research.md` §8.5; Q-27). |
| 2026-09-20 | **Corrected my error: the Hook has its own airfield (KNOW, runway 8/26, 4,500 × 150 ft) — the PC-12 can be based at the station.** Recorded the author's points: **the bodies are a big issue** (site-selection criterion; `CLAUDE.md` amendment 10) and **RVs from the dealership at 261293 US-101, Sequim as living quarters on the Hook** (amendment 11). Added `port-angeles-base-research.md` §8.4 (bodies), §8.5 (RV plan), §8.6 (alternatives, incl. the New Dungeness Light Station) and Q-27–Q-29. |
| 2026-09-20 | **The group's base is the Coast Guard Air Station / Sector Field Office Port Angeles on Ediz Hook (author).** Researched the station's facilities (hangar, exchange, medical/dental clinics, pier, cutters, 2018 Transit Protection System, radio and VTS tower); **no on-base housing** (a comfort gap), and its 24-hour duty crews are dead on station (2:00 AM craft rule). Recorded in `CLAUDE.md` (amendment 9) and `port-angeles-base-research.md` §8.2–8.3, Q-24–Q-26. |
| 2026-09-20 | Added the Port Angeles base dossier (`port-angeles-base-research.md`): timeline, non-anchorage box and windlass items resolved, crash/Grace's-house consequences, lodging requirements and options, ISS sky analysis, winter clock. Grace's house unsuitable; Yohan's Port Angeles Harbor anchor and Day 9–10 timeline made canon; **Catherine renamed Navarro (D-08 resolved; one prose edit in `sections/07`)**; TruckHouse reasons updated (her brother; BCRs for the Italy excursion to Dr. Marchetti); **corrected my earlier ISS-latitude note** (§3.7). Added D-16–D-19. |
| 2026-09-20 | Grace relocated from Portland, OR to near Elwha, WA (author directive). Updated §2.1, §2.6, §2.5, §3.7, §4.5, §5.2, §5.8; added D-15, Q-13–Q-15. Logged in `CLAUDE.md` as the 2026-09-20 retcon; prose not yet updated. |
| 2026-09-20 | v0.1. Created from `reference/iss-ham-radio-contact.md`, the since-retired `john_lauer_persona.md`, `reference/power-grid-shutdown-timelines.md`, `reference/DAL27_Emergency_Turnback_Dossier.pdf`, `reference/PC-12-PRO-Brochure.pdf`, `time.md`, `CLAUDE.md`, and `sections/02`–`04`, `07`. Added discrepancy register D-01–D-14 and open questions Q-01–Q-12. |

---

## 10. Source index

| File | What it holds | Notes |
|---|---|---|
| `CLAUDE.md` | Canon, cast bios, retcon log, craft rules | Second in authority; supersedes earlier retcon entries |
| `time.md` | Author's Day 0 clock | **Read-only. Never edit.** |
| `reference/DAL27_Emergency_Turnback_Dossier.pdf` | Flight profile, rest rotation, telemetry table | Text layer is scrambled in the telemetry table; 4-pilot medical scenario, adapted |
| `reference/PC-12-PRO-Brochure.pdf` | Manufacturer brochure: cockpit, performance, dimensions | Marketing copy; two text-layer errors (§4.4) |
| `reference/iss-ham-radio-contact.md` | ARISS/ham link mechanics | Sources: ARRL, ariss.org, hamsattracker, onallbands |
| `reference/power-grid-shutdown-timelines.md` | Draft 4 grid/nuclear model | Cites NERC, FERC 2003 report, NRC, IEEE 1547, DOE |
| `john_lauer_persona.md` | *(retired 2026-09-20)* | Was stale (Anthropic); in git history only (D-07) |
| `reference/global-flight-traffic-model.md` | 2:00 AM sky calculator; Delta 27 preset | Interactive tool at claude.ai/artifact/QjT5DAQGHAFGTdJiUwvH5w |
| `port-angeles-base-research.md` | Port Angeles harbor/anchorage, timeline, crash aftermath, lodging and ISS-sky analysis (added 2026-09-20) | Companion to this file; NOAA Coast Pilot 10, 33 CFR 110.230 and web sources listed there |
| `sections/02-day0-sam.md`, `03-day0-john-sam.md`, `04-day0-search.md`, `07-day2-john.md` | Prose used to verify claims above | Source of truth for prose |
| `README.md` | Repo overview | Out of date (D-12) |
