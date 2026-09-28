# 1 in a Million — Research Compendium

A working research layer for the book: the real-world and reference material behind **Delta 27**, the **cast personas**, the **ISS ham-radio link**, the **PC-12 PRO**, and the **power-grid collapse**, in one place, with the seams between source and story marked so they can be worked on.

**Status:** v0.2, 2026-09-24. Resynced to the restructured `CLAUDE.md` (per-character entries, Places, Timeline, scene-by-scene canon). Nothing here is final.

## How to use and iterate on this file

- **Authority order when sources disagree:** `CLAUDE.md` (canon, including its Timeline section, which replaced the deprecated `time.md`; `CLAUDE.md` no longer keeps a dated retcon log, so git history is the record of what changed) → `sections/` prose → this file → the raw research docs/PDFs. `CLAUDE.md` now says outright that anything it doesn't describe isn't canon. This file **never overrides canon**; where it finds a disagreement it lists it in the [Discrepancy register](#7-discrepancy-register) and leaves the call to the author.
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

Sources: `reference/DAL27_Emergency_Turnback_Dossier.pdf` (the "dossier"), `CLAUDE.md` Timeline and "Section 2: Sam's flight", `sections/02-day0-sam.md`, `sections/03-day0-john-sam.md`, `reference/global-flight-traffic-model.md`.

> **2026-09-23 re-geometry (author, Q-01):** departure moved from 23:35 to a **20:10 pushback**, so the 03:30 turn happens ~3,240 nm out over **Alaska's western North Slope**, not James/Hudson Bay, and the 7-hour return is real flying time at normal cruise. The slow-cruise and racetrack beats are gone. Everything in §1 below reflects that.

### 1.1 Dossier vs. story at a glance

The dossier is a **mechanics-and-timing reference**, not a script. It describes a single-pilot medical incapacitation; the story is a global event. `[CANON]` Same precedent as the old Delta 84 dossier: used for realistic ATC/telemetry mechanics, not adopted literally.

| Element | Dossier `[SRC]` | Story canon `[CANON]` | Note |
|---|---|---|---|
| Flight | Delta 27 (DAL27/DL27), KATL → RKSI (Seoul-Incheon) | Same | — |
| Aircraft | Airbus A350-900 (A359) | Same | — |
| Block time | ~15 h 20 m | Same | See Q-02 (crew size vs. block time) |
| Flight-deck crew | **4 pilots** (Captain + 3 FOs in two rest groups) | **4 pilots**: Sam (Capt), Theresa Foreman (FO), Jack Sommers and Ruth Gunn (Relief), resting in pairs | Matches (Q-02 resolved) |
| Departure | 11:35 PM EDT (03:35Z), Rwy 27L, MOBIS SID | **Pushback 20:10 EDT Sept 4, wheels up ~20:25** off 27L (prose) | Moved 2026-09-23 (Q-01); SID not used in prose |
| Top of climb | 00:20 AM, FL340 over Ohio | Jack takes the first rest block after top of climb; time not stated | — |
| Rest period | Group 2 rests 00:30–03:30 (3 h) | Sam rests 00:30–03:00 (second block; Jack took the first) | Timeline wins: 03:00 (D-03) |
| Event position | — | 02:00, ~2,500 nm out, near the **Mackenzie Delta** | `[CANON]` |
| Emergency | Captain incapacitated 03:30 over James/Hudson Bay | Sam comes down at 03:00, finds Theresa + Jack dead, checks the cabin, **turns back at 03:30** | Story turn time matches dossier's 03:30 |
| Squawk | 7700 from ~03:05 (after the first unanswered MAYDAY, per AIM 6-3-2) | Sam squawks 7700 | — |
| Turn | 180° U-turn, 25° bank | Over the western North Slope (~69.5°N 160.5°W); initial course home ~090° true | `[CANON]` |
| Return cruise | FL380, 510 kt (tailwind), hdg 175° | Normal cruise, ~7 h; no jettison, no holding | See §1.5 |
| Top of descent | 09:55 AM over N. Georgia | Not stated; hand-flown daylight visual approach | Racetrack dropped 2026-09-23 |
| Touchdown | **10:20 AM, Rwy 27R** | **~10:30 AM, Rwy 26R** | D-01, D-02 |
| Arrival | Gate F6, medical team boards | Taxis to **Signature FBO** ramp (GA side) | Deliberate: Sam knows the ramp from charter days |
| Turnback distance | "~1,420 nm NNW of KATL" | **~3,240 nm from KATL** | See §1.5 |

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

### 1.3 Day 0 clock — flight and convergence rows from the CLAUDE.md Timeline (formerly `time.md`)

Snapshot as of 2026-09-24. **The CLAUDE.md Timeline section is the source of truth; if this table drifts, CLAUDE.md wins and this table is wrong.**

| Time (EDT) | Beat |
|---|---|
| 9/4 20:10 | Delta 27 pushes back at KATL; wheels up ~20:25 |
| 9/5 00:30 | Sam's rest block begins |
| 02:00 | The event (Tuesday Sept 5, 2028, the day after Labor Day) |
| 02:05 | John woken by a thud |
| 03:00 | Sam's rest ends; finds the flight deck crew and all passengers dead |
| 03:30 | Sam turns back over the western North Slope (~3,240 nm from KATL) |
| 06:00 / 07:05 | John wakes / walks Dan |
| 07:20 / 07:28 | John finds the dead on the Parkway / first 911 call (AI triage agent) |
| ~07:40 | Delta 27: sunrise over Manitoba, near Lake Winnipeg |
| 08:10 / 08:30 | John home, first look at news, DOT cameras, FlightAware / work meeting, nobody connects |
| 08:45 | John finds Harry dead |
| 09:00 | John sees Delta 27's track still moving |
| 09:10 | John leaves for KATL |
| 10:05 | John into Signature; sets 121.5 (the emergency frequency) on the ops-desk radio and waits |
| ~10:20 | Sam's MAYDAY on 121.5; John answers |
| 10:30 | Sam lands on 26R, taxis to Signature |
| 11:00 | John and Sam meet on the ramp |
| 11:30 | Leave for Sam's house in John's car |
| 12:35 | Sam finds Elena and Rosa |
| 13:00 / 13:40 | Leave for / arrive at John's house; the detailed search starts |
| Evening | Nationwide 911 search seeded, runs overnight |
| ~00:50 Sept 6 | Grid goes dark at John's house; generator picks up the load |

Intervals `[DERIVED]`: wheels up → event ≈ 5 h 35 m; event → Sam's discovery = 1 h; Sam wakes → turn = 30 min; turn → landing = 7 h (see §1.5); landing → handshake = 30 min; Sam's family discovery ≈ 10.5 h post-event; grid dark ≈ 22.8 h post-event.

### 1.4 Crew and passengers

| Person | Role | Status | Source |
|---|---|---|---|
| Sam (Samuel Reyes) | Captain | Sole survivor of the flight deck | `[CANON]` |
| Theresa Foreman | First Officer | Dies at 2:00, at the controls, while Sam rests | `[CANON]` |
| Jack Sommers | Relief Pilot; 6'3", 230+ lb | Same | `[CANON]` — Sam has to carry him to the forward cabin |
| Cabin crew | "thirteen of his colleagues" | Dead | `[CANON]` §2 prose |
| Passengers | 306 (every seat of Delta's 306-seat A350-900 layout) | Dead | `[CANON]` — `CLAUDE.md` now matches the prose (D-04 resolved); **323 aboard** counting the four pilots |

`[VERIFY]` 306 matches my recollection of Delta's A350-900 seat count (32 Delta One / 48 Premium Select / 36 Comfort+ / 190 Main) — i.e., a completely full flight.

### 1.5 Turnback mechanics under the 2026-09-23 geometry `[DERIVED]` / `[VERIFY]`

Airframe figures below are from general knowledge unless marked `[CANON]` — verify against Airbus/Delta data before using any of them on the page. The old "clock doesn't tie out" problem (a James Bay turn only ~3–4 h from Atlanta) is **resolved** by the earlier departure.

- **Route.** The ATL–ICN great circle runs Great Lakes, Manitoba/Saskatchewan, Mackenzie Delta, northern Alaska, Bering `[CANON]`. Sam's return retraces it: North Slope → Mackenzie Delta → Manitoba (sunrise ~07:40, off the left side of the nose) → the upper Midwest → Atlanta.
- **Speeds tie out.** Wheels up → event: ~2,500 nm in ~5 h 35 m ≈ 448 kt average including climb. Wheels up → turn: ~3,240 nm in ~7 h 05 m ≈ 457 kt. Turn → landing: ~3,240 nm in 7 h ≈ 463 kt including descent. All plausible for an A350 at ~M0.85 (~485–490 KTAS) with modest winds. `[DERIVED]`; cruise speed `[VERIFY]`
- **Weight.** MLW ~207 t `[CANON, verify variant]`. With a rough MTOW ~280 t and burn ~6–7 t/h `[VERIFY]`, he's ~45–50 t lighter at the turn, so ~25–30 t over MLW; the 7-hour return burns ~40–45 t, putting him comfortably under MLW with normal reserves. No jettison, no holding `[CANON]`.
- **Closer fields he passes up** `[CANON]`: Kotzebue (~170 nm), Deadhorse (~250 nm), Nome (~325 nm), Fairbanks (~410 nm, the natural ETOPS alternate). Turning for Atlanta is a choice: nobody aboard can be saved by speed, and his family is in Marietta.
- **Radio calls home** `[CANON]`: Anchorage, Edmonton, Winnipeg, Minneapolis, Chicago/Indianapolis, Atlanta Center; nothing answers. MAYDAY transmitted in the blind on 121.5 and each center frequency every twenty minutes "since the North Slope" (prose §2, §3).
- **Sunrise check.** Ground-level sunrise at Lake Winnipeg on Sept 5 is roughly 06:55 CDT (07:55 EDT); at FL350+ it comes ~15–20 min earlier, so ~07:40 EDT is about right. `[VERIFY]` against an ephemeris for the exact position.

### 1.6 Regulatory realism: 3 vs 4 pilots `[VERIFY]`

The dossier states FAR Part 117 requires an augmented **4-pilot** crew above 12 h. My recollection of Part 117 Table C is that a **3-pilot** augmented crew tops out around a 15 h flight-duty period even with the best (Class 1) rest facility, and a 15 h 20 m block plus pre-departure duty would exceed it; 4 pilots extends the limit to roughly 17 h. If that's right, a 3-pilot ATL–ICN is not legal, and an airline-pilot reader (Sam's exact readership) may notice. Prose only says "augmented three-pilot crew to comply with federal duty-time regulations on a sector too long for two." See Q-02 for options.

### 1.7 Telemetry signature (why John finds it) `[CANON]`

Delta 27's ADS-B track is the only one still *moving* on the morning of Day 0: transponder 7700, a reversal over Alaska's North Slope, inbound to KATL — the same "deliberate diversion" signature John later recognizes on the *Pacific Tender*'s AIS track in Section 10 (Sam: "Same as mine. Same as yours, that first day."). The `reference/global-flight-traffic-model.md` tool computes any flight's position at exactly 02:00 EDT / 06:00Z and includes a Delta 27 preset flagged as straight-through-to-Seoul for reference only (Sam's real flight turns back).

### 1.8 First contact and landing (as settled) `[CANON]`

- Sam transmits the MAYDAY on **121.5** "every twenty minutes since the North Slope" and John answers from the Signature FBO ops-desk transceiver — first contact is radio, before they meet. John's name is exchanged by radio; **Sam's own name lands at the handshake** on the ramp (2026-09-19 clarification).
- Sam lands on a plain, hand-flown daylight visual approach, no tower, and taxis to Signature — a ramp he knows from two years of charter flying. No fuel truck, no FBO break-in for keys. Sam rides the emergency slide down; Dan (the dog) reaches him first.
- Prose lines that don't quite match the rest: Section 4 has Sam say he flew "three hundred people most of the way to **Europe**" (the flight is to Seoul, over the Arctic — D-06). The Section 3 north-side/south-field conflict (D-05) is gone from the current prose.
- **Section 2 ends as Atlanta rises out of the haze**, before any radio contact `[CANON]`. Section 3 carries the final MAYDAY, John's answer and the landing (Sam's POV block between two John blocks). His own empty airport disorients him more than a strange one would.

---

## 2. Personas

Sources: `CLAUDE.md` Characters section (authoritative; each entry now runs Demographics · Physical Appearance & Presence · Attire · Background · Friction & Flaws), the retired `john_lauer_persona.md` (professional detail; deleted 2026-09-20, in git history), settled `sections/`. Group roster as of the end of Section 10: **John, Sam, Tyler, Catherine, Grace, and Dan the dog.** Johan is not yet met on-page.

`CLAUDE.md` rule: the appearance and habit details are **reference, not copy** — use them through observed action, never pasted in as descriptive blocks. This section summarizes the story-relevant facts and the flaws; see `CLAUDE.md` for full physical and attire detail.

### 2.1 Cast at a glance `[CANON]`

| Character | Age | Home base / location on Day 0 | Role / craft | Status as of §10 | Enters the group |
|---|---|---|---|---|---|
| **John Lauer** | **61** | Alpharetta, GA | Principal Applied AI Architect, Public Sector (Google); telemetry specialist; instrument-rated private pilot (Cessna 182, PDK); ex-Waffle House grill cook | Group's search/tech lead | Day 0 |
| **Sam (Samuel Reyes)** | 43 | Marietta, GA (in flight at 2:00) | Delta A350-900 Captain; ex-C-17 (USAF); ex-corporate/charter; ~800 h in an earlier PC-12; rotorcraft-rated 2027 (low-time) | Group's pilot-in-command; John's mentor | Day 0, 11:00 |
| **Tyler Vance** | 10 | Huntsville, AL | Fifth grader; son of a NASA astronaut on the ISS | Full member | Rescued §6 |
| **Catherine Navarro** | 52 | Phoenix, AZ | Senior ER attending; brother Rafael owns TruckHouse (Reno/Sparks) | Full member | Found §7 |
| **Grace** | 32 | Near the Elwha River, Port Angeles, WA — *prose still says Portland/Oregon coast (D-15)* | Diesel mechanic + electrical engineer; civilian maritime support mechanic, USCG Air Station Port Angeles; ex-Army staff sergeant | Full member (fibula in cast) | Rescued §8 |
| **Johan Brandt** | 48 | At sea, *Pacific Tender* (Yokohama → Seattle); home Bremerhaven | Senior mate + electrical engineer, 26 years at sea | Solo aboard; anchors in Port Angeles Harbor ≈Day 9–10; **not met** | Pending (§11+) |
| **Dr. Elise Marchetti** | ~50 | Bellinzona, Ticino, Switzerland | Professor of Pathology and Infectious Disease, IRB; ham operator | Known only via ISS channel; **not met** | Italy excursion |
| **Dan** | 6 | Alpharetta | John's Mountain Cur (the third Dan) | With the group | Day 0 |

**Not canon** (do not carry forward without the author): Marcus, Elena Voss (ISS commander), and any other pre-2026-09-05 character. The old Tyler/Voss connection is not canon.

### 2.2 John Lauer `[CANON]` unless tagged

- **Age/place:** 61, Alpharetta subdivision off Old Milton Pkwy, near the GA-400 interchange. 6'1", rawboned, white-streaked brown beard and hair, black Wayfarers; T-shirts, olive drab BDU cargo pants, flip-flops (paid off at Amarillo, where Sam makes him swap for boots).
- **Family:** Widower. Wife **Naomi** died 16 years before the event. No children. Brother Mark is his only living close family. Naomi's study is kept unchanged (books, reading chair, rolltop desk). **In Section 4 he takes her Bible off that desk** — a physical object carried through his spiritual arc; don't drop it.
- **Job:** Principal Applied AI Architect – Public Sector at **Google**, D.C.-office-based, hybrid from metro Atlanta. Leads Gemini deployments for DOT/FAA, DHS, USCG, NOAA, FEMA. 30-year systems architect, telemetry specialist, former federal security consultant.
- **Telemetry fluency:** ADS-B (1090 MHz/978 UAT), ADS-C, Mode S/ACARS, ACAS/TCAS, MLAT; AIS (Class A/B, VDES), S-AIS, NMEA 0183/2000; NextGen 911 (NENA i3), CAD, Cospas-Sarsat beacons; SSA/TLE/orbital streams; GTFS-RT, PTC rail, OBD-II/J1939, NOAA METAR/TAF. `[SRC]` persona file. This is *why* the search-and-rescue mechanics work.
- **Origin of the hacker mindset:** An early network-intrusion/vulnerability-research episode as a young man, resolved by a federal-consulting offer in lieu of prosecution. Adversarial red-team habits.
- **Education:** B.S. ECE, Georgia Tech; M.S. Systems Engineering, Johns Hopkins. Put himself through Tech on the **overnight grill line at a Waffle House off North Avenue** — the source of "panic and competence run side by side." Paid off in §6 (he cooks at the Huntsville Waffle House) and §8 (pasta for the group from a stocked, unstaffed market; the dinner's setting is open, with the interim hotel the natural candidate — prose still sets it at Grace's house, D-18).
- **Flying:** Active private pilot, **ASEL, instrument-rated and current**, flies IMC out of PDK, complex endorsement `[SRC]`; flies a 182; no turbine time. Knows an augmented widebody carries extra pilots. **Does not own or carry a personal aviation radio** (2026-09-18 retcon) — on Day 0 he uses the FBO ops-desk transceiver. **Sam is checking him out on the PC-12 in flight** (opened §5, advanced §7: he flies the Huntsville→Amarillo cruise leg; he holds the fuel nozzle at Amarillo). Ongoing arc.
- **AI toolkit:** Company-issued local research model, coupled to frontier Gemini on the API. **Safety layer stripped exactly once, live, in front of Sam, in Section 4**, specifically for the nationwide 911 search (dispatch systems he has no authorization to reach). He says "I've never actually done it for real" first; Sam's "Some decisions don't need a vote" tips it. There was never a Delta intrusion.
- **Emotional turning points (permanent):** Day 0 private cry to God ("the first sound like it since Naomi died") in §1; **first witnessed break in §6**, triggered by Tyler's grief, with Sam sitting wordlessly beside him. Private/spiritual vs. witnessed/for-someone-else is the established distinction.
- **Home resources:** An emergency generator at the house picks up the load without missing a beat when the grid goes at ~00:50 Sept 6 (§4) — preparedness confirmed, not jeopardy.
- **Flaws (from `CLAUDE.md`):** the Safety Architect's Agony (overriding a safety layer he helped build costs him real moral pain); Systems Realism (an exhausting sense that he has to fix anomalies himself rather than wait on consensus); Quiet Withdrawal; Not Corporate; **Borrowed Faith** — Naomi's faith turned out to be hers, not his, and his arc is a spiritual journey toward a faith of his own. The Bible (above) is the object that carries it.
- **Employer:** canon is **Google/Gemini**; §3 also mentions a Google corporate jet. The retired persona file's Anthropic framing is dead (D-07).

### 2.3 Sam (Samuel Reyes) `[CANON]`

- **Age/place:** 43, Marietta, GA. Wife **Elena**, daughter **Rosa (12)**. Both found dead by Sam himself at ~12:35 on Day 0, with John at the threshold.
- **Career arc:** gliders and Cessnas as a teenager → flight-instructor rating through college → **right out of college, night runs for a medical test company in an earlier-generation PC-12, ~800 h in type** (why he can check John out in one) → **8 years C-17 Globemasters, USAF** → **2 years corporate/charter jets out of Atlanta** (why he knows the Signature ramp) → **~10 years at Delta**, now **Captain, Airbus A350-900**.
- **Rotorcraft:** earned his rotorcraft rating in **2027**, about a year before the event — a **current but low-time** helicopter pilot. At the Hook he transitions to the station's MH-65E Dolphins and builds hours (a type transition, not a checkride). The old §2 "not rotary-rated" line is gone from the prose.
- **C-17:** his USAF background now pays off directly — **Sam flies the C-17 to Italy** (§4.5).
- **Character:** The defining decision is the turnback: a deliberate choice to fly past Kotzebue, Deadhorse, Nome, and Fairbanks toward home. Composed and procedural under pressure — a low pass or visual check before landing anywhere without a tower is his habit, kept even at KPHX.
- **Flaws (from `CLAUDE.md`):** the Captain's Composure (steadiness as a performance for whoever's watching); Default Command (used to being PIC); Circadian Rhythm (long-haul years wrecked his sleep).
- **Roles in the group:** Pilot-in-command; John's PC-12 mentor; in §6 carries the conversation and the primary reaction to the ISS reveal at the Waffle House while John cooks; **promises Tyler he'll help him spot the ISS** (§7) and pays it off in §10.
- **Naming:** His surname (**Reyes**, established in the §2 header and the §3 handshake) used to collide with Catherine's; **hers changed to Navarro on 2026-09-20** (D-08, resolved).

### 2.4 Tyler Vance `[CANON]`

- **Age/place:** 10, Huntsville, AL; fifth grader. Knows space history cold (Rick Husband commanded *Columbia*, said aloud at Amarillo in §7). Flaw: **Half-Asked Questions** — he stops sentences that head somewhere he isn't sure the adults can handle.
- **Family:** Mother is a serving NASA astronaut aboard the ISS **since March** (first name deliberately withheld — don't name her without author direction). Father died in a car accident when Tyler was four; old settled grief. **Uncle Carl** (mother's younger brother) had been staying as his guardian since March, only through the fall; Carl's body was in the living room. Do **not** refer to the body as Tyler's father or as "David" anywhere.
- **Rescue:** Locked himself in his bedroom ~1.5 days after finding Carl. Found via the 911 search (Huntsville hit).
- **Function:** The emotional key that makes John's first witnessed break happen (§6). Asks whether the ISS is visible from altitude (§7); gets the promise. Asked whether boats "fly themselves" like planes, which widened John's search to AIS (§10). Keep him present as a person, not cargo, and be thoughtful about danger exposure.

### 2.5 Catherine Navarro `[CANON]`

- **Age/place:** 52, Phoenix, AZ. Senior ER attending, decades in Phoenix trauma bays.
- **Family:** Divorced 11 years from **Michael**, an orthopedic surgeon; no children. Parents emigrated from **Peru** in the 1950s, both deceased. Younger brother **Rafael** owns **TruckHouse**, the overland-vehicle shop in Reno/Sparks, NV. She doesn't know whether he or the shop survived.
- **Introduction (§7):** John never had her identity beforehand. Since Day 0 she'd waited in an **office building two miles off Sky Harbor's north fence** — closed at 2:00 a.m., so nobody died in it, and close enough to hear anything that flew in. She heard Sam's low pass, found no open gate on the perimeter road, and **drove her gray Subaru through the fence** onto the ramp, ~12:40 MST, about ten minutes after they landed. John tells her the group found her through her 911 call ("I argued with it. For a while."). Says "Absolutely" when offered the choice to stay behind (§8).
- **Function:** Medical lead — casts Grace's fibula at Olympic Medical Center (§8; prose still says Providence Seaside, D-15); private grief beat witnessed by John (§10), mirroring what Sam did for him in §6. She raises TruckHouse over dinner in §8 ("Eventually").
- **Flaws (from `CLAUDE.md`):** Physical Tax (chronic lower-back pain; anti-inflammatories at doses she'd lecture a patient about); Clinical Triage applied to personal life; Grief on Her Own Clock (alone, after midnight).

### 2.6 Grace `[CANON]`

- **Age/place:** 32, lives alone near the Elwha River, Port Angeles, WA (`sections/05`, `08`, `10` still say Portland/Seaside — D-15). **Lower Elwha Klallam Tribe**; raised by her grandmother, who died of COVID in 2020 and was everything to her; an aunt and cousins on the reservation.
- **Home address:** no longer in `CLAUDE.md`. The 217 Wapiti Way address (from the author's Maps pin) survives only in `port-angeles-base-research.md`, still tagged canon there — D-20. Either way the house is **never visited on-page**. (The pin is a real vacation-rental business — don't name it in prose.)
- **Craft:** **six years US Army** out of high school as a heavy-wheel mechanic, making **staff sergeant**; electrical engineering degree earned while serving. **Civilian maritime support mechanic at USCG Air Station Port Angeles (Ediz Hook)** — marine diesels, marine electronics, cutter and small-boat systems. Knows the station's generators, pumps, and boats before the group moves in, and **knew its 17 dead as coworkers**.
- **Injury (backstory, told within §8):** driving home on Highway 101 at ~23:00 PDT Sept 4, an oncoming dead-at-the-wheel driver forces a glancing, offset head-on collision **on the Highway 101 Elwha River bridge**. Footwell intrusion: clean, non-displaced fibula fracture. She calls out to the other driver, gets no answer, is too hurt to check.
- **Discovery:** reads her coordinates off her phone's map app to the 911 AI agent. Nobody ever called back, so she doesn't know if anything but a machine heard her. Shelters under the bridge deck by the abutment (river for water, the truck cab as fallback), splints with driftwood and a torn jacket sleeve, lasts three days.
- **Function:** her grief beat for the 17 belongs at the station-clearing scene. In §10 she fixes tripping pump wiring, rebuilds a generator carburetor, and rigs a directional antenna that improves John's satellite hotspot signal. Her solar+battery house material is retired.
- **Flaws (from `CLAUDE.md`):** Can't Sit Still (works on the broken leg sooner than Catherine likes); Fixes Instead of Feels; Plainspoken to a Fault; **borderline alcoholic**; no deep friendship since the Army.

### 2.7 Johan Brandt `[CANON]`

- **Name:** spelled Johan, pronounced "YO-hahn"; English speakers hear it as Yohan. (`sections/09-day0-yohan.md` was renamed `09-day0-johan.md` on 2026-09-23.)
- **Age/place:** 48, home port Bremerhaven, Germany. Divorced (ex-wife **Katrin**); daughter **Lena** (22), a university student in Hamburg. Senior mate and electrical engineer aboard the container ship ***Pacific Tender***, Yokohama → Seattle, three days out of Yokohama, ~9–10 days from Port Angeles; ~22 other crew, all lost. 26 years at sea, including two typhoons and a cargo-hold fire off Vladivostok. **Two fingers missing from his left hand**, lost early in his career.
- **Day 0 (§9):** Oversleeps because no one lived to wake him for his watch; finds officer of the watch **Okafor** dead at the bridge console, ship holding course on autopilot; **Second Engineer Alvarez** dead in the engine control room, logbook open mid-entry. Escalating comms check (VHF → SSB → AIS → satellite terminal); AIS shows a **"ghost fleet"** of other vessels still steaming and answering nothing; a few dying satellite fragments ("the eastern seaboard," "Europe"). **Decides to bring the ship in himself, alone** — grief processed in scene, a contrast to John and Sam. Briefly takes the helm by hand, then resumes course.
- **Convergence (§10):** John spots the ship anchoring in Port Angeles Harbor (prose still says Elliott Bay — D-17) — a controlled slowdown and careful anchoring no autopilot does. Sam: "Same as mine. Same as yours, that first day." The group decides to go out to her the next morning; **not yet met**.
- **Lives ashore, not aboard:** "he would not go back and forth to the ship... no thanks." The *Pacific Tender* stays abandoned at anchor; before leaving he secures her and gives his 22 crew burial at sea (`port-angeles-base-research.md` Q-35).
- **Function:** Operates the group's ISS ham link from the Hook.
- **Flaws (from `CLAUDE.md`):** No Cut Corners (he'll stop work to do it right); Ships Before People (he had to check the manifest for the cook's name, and the shame stays with him); a loner who struggles to empathize.
- **Anchor point: Port Angeles Harbor, inside Ediz Hook, ≈48.1300°N, 123.4170°W** `[CANON]`. Timeline, open items, and lodging are in `port-angeles-base-research.md`. Grounded in NOAA *U.S. Coast Pilot 10, Ch. 7* (13 Sep 2026 edition):

| Point | Latitude / Longitude | Basis |
|---|---|---|
| **Ediz Hook Light** (skeleton tower, 0.3 nm W of the Hook's east extremity) | 48°08′24″N, 123°24′09″W = **48.1400°N, 123.4025°W** | `[SRC]` Coast Pilot |
| Hook's east extremity (shoals extend ~75 yd further east) | ≈ 48.140°N, 123.395°W | `[DERIVED]` 0.3 nm E of the light |
| **Coast Guard Air Station / Sector Field Office** (the group's base) + 170-ft VTS radar tower (0.1 nm WSW of the light) | **48°08′27″N, 123°24′39″W = 48.1408°N, 123.4108°W** (station); tower ≈ 48.140°N, 123.404°W | `[SRC]` station coordinates (Wikipedia); tower `[DERIVED]` |
| **Puget Sound Pilots' station** (0.7 nm W of the light; pilot-boat pier on the Hook's south side; VHF ch 13) | ≈ 48.139°N, 123.420°W | `[SRC]` description, `[DERIVED]` position |
| **Anchor position (canon): mid-harbor, just south of the pilot station** | **≈ 48.1300°N, 123.4170°W** (48°07′48″N, 123°25′01″W) | `[CANON]`; originally `[DERIVED]` — placed in the harbor's deep middle (Coast Pilot: depths "decrease from 30 to 15 fathoms in the middle"); ~0.65 nm from the station by boat |
| Charted "best anchorage" (off the wharves, 7–12 fathoms, sticky bottom) | ≈ 48.125°N, 123.425°W, just off the downtown waterfront | `[SRC]` description, position very rough — **too shallow (42–72 ft) for a loaded container ship's ~40–46 ft draft**, hence the mid-harbor suggestion |

**Why this works, all from the Coast Pilot `[SRC]`:**
- Port Angeles is **the designated pilotage station for all vessels en route to or from the sea**; pilotage is compulsory. Johan would be anchored exactly where a pilot would have come aboard.
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
| **Lone-operator issue** | Anchoring is normally done at the bow, and (as I understand it) most windlass brakes are worked from the forecastle, not the bridge. Johan would have to stop the engines, set the rudder, walk forward, and let go the anchor himself. Doable and a strong scene — but `[VERIFY]` with a marine engineer whether the *Pacific Tender*-class ships have bridge-remote anchor release. Also he can't berth without tugs or line handlers, which is why anchoring is the only endpoint anywhere |

**The AIS signature John sees:** a controlled slowdown, then navigation status "at anchor," speed over ground ≈ 0, and the heading swinging slowly around the anchor with wind and tide — behavior no autopilot produces. The group is already on the Hook, ~0.65 nm away. (An earlier note measured the anchorage from Grace's 217 Wapiti Way pin, ~8.9 nm NE; moot now that the house is never visited and the address has left `CLAUDE.md`, D-20.)

### 2.8 Dr. Elise Marchetti `[CANON]`

~50, lives in **Bellinzona, Canton Ticino**. Married to **Paolo**, an architect in Lugano; son **Matteo** (19), a student at ETH Zurich. **Blind in her right eye** from a childhood accident — she turns her head slightly to bring someone on her right into view. Works in Italian, French, German, and English depending on the room; morning runs along the Ticino. Professor of Pathology and Infectious Disease at the **IRB (Institute for Research in Biomedicine, affiliated with the Università della Svizzera italiana), Bellinzona** — ~50 mi north of Milan, so the group crosses the Swiss border (play it deliberately: an international flight and landing with no customs or ATC anywhere). A pre-collapse ham operator, indirectly connected to research already underway on the pathogen, who reaches the ISS crew independently; the group finds her **through the ISS contact channel**. **Transport: a C-17 from McChord Field, Joint Base Lewis-McChord, flown by Sam, carries the group and 4 TruckHouse BCRs**; it is damaged in a hard or rough-field landing in Europe (an ordinary mishap from absent infrastructure, not malice), stranding the group. Flaws (from `CLAUDE.md`): Clinical Detachment; No Premature Conclusions; The Question She Can't Answer (why anyone survived). The group bases at the IRB with her for a **4–6 month research effort into the cause of death of most of the population** — explicitly distinct from, and not a resolution of, the survival mystery. **Do not resolve why people survive** (deliberate mystery; no genetic, antibody, or exposure-survivor theory) — but the killing mechanism itself is fair game for this research thread to actually answer.

### 2.9 Supporting and referenced characters

| Name | Who | Status / note |
|---|---|---|
| **Naomi** | John's late wife | Died 16 years before; her study and Bible carry forward |
| **Mark** | John's brother | Only living close family; whereabouts not on-page |
| **Harry** | John's neighbor | Found dead 08:45 on Day 0 (§1) |
| **Elena / Rosa** | Sam's wife / daughter | Found by Sam (§3) |
| **Theresa Foreman / Jack Sommers / Ruth Gunn** | Sam's FO / relief pilots | Theresa and Jack dead on the flight deck; Ruth dead in the crew-rest bunk (§2) |
| **Okafor / Alvarez** | *Pacific Tender* OOW / Second Engineer | Dead (§9) |
| **Carl** | Tyler's uncle-guardian | Dead (§6) |
| **Tyler's mother** | Astronaut on ISS since March | Name withheld; alive as far as anyone knows |
| **Rafael Navarro** | Catherine's younger brother; owns TruckHouse (Reno/Sparks) | Status unknown; drives the Reno arc |
| **Michael** | Catherine's ex-husband, orthopedic surgeon | Split 11 years ago; status unknown |
| **Grace's grandmother** | Raised Grace | Died of COVID, 2020 |
| **Katrin / Lena** | Johan's ex-wife / daughter (22, Hamburg) | Status unknown |
| **Paolo / Matteo** | Elise Marchetti's husband (architect, Lugano) / son (19, ETH Zurich) | Status unknown |
| **Dan** | John's dog: 6-year-old male Mountain Cur, ~45 lb brindle, the third Dan from the same breeder | With the group; reaches Sam first on the ramp and Catherine first at Sky Harbor; rides the PC-12's aft cabin floor. Prey drive: keep him leashed around wildlife |
| Two Waffle House employees (Huntsville) | Dead outside on break | Template for 24-hour locations |

### 2.10 Persona craft rules that bear on writing them `[CANON]`

- Keep the full cast engaged: give Tyler and Catherine concrete tasks like Grace got in §10.
- Survival is location-independent and unexplained; nobody's death was different from anybody else's.
- **Who's actually present at 2:00 AM:** offices/schools empty; 24-hour places (Waffle House, hospitals, gas stations) staffed. Check before placing a body.
- **Scarcity is a hard constraint:** ~350 US survivors; every find must cost real effort; characters never know the true number. Survivor density is higher in Canada, South America, Europe, and Asia (ratios not yet set).
- **Grief beats stay, without emotional adjectives:** carry them through physical action and observed detail (the operational-realism rule in `CLAUDE.md` applies to grief too).

### 2.11 Where the group lives: Port Angeles and the Hook `[CANON]`

Full detail and sourcing: `CLAUDE.md` Places and `port-angeles-base-research.md`.

| Place | Use in the story |
|---|---|
| **KCLM** (William R. Fairchild Intl) | Arrival field. FBO **Citizen Air** (Jet-A, 100LL, maintenance, crew car). No rental lot: the §8 car comes off the FBO key board or is the crew car. Life Flight Network base on the field (24-hour; staffing `[verify]`) |
| **Olympic Medical Center** (939 Caroline St.) | 67-bed acute-care, Level III trauma. Grace's acute treatment only; nobody lingers among its ~100–200 dead. Backup plant capacity `[verify]` |
| **Interim hotel/motel** | A cleared corner of rooms between Grace's rescue and the station and cutter being ready — a small version of the Hook clearing |
| **USCG Air Station / SFO Ediz Hook** | Clinic, hangar (three MH-65Es), pier, 170-ft VTS tower, radios, airfield **KNOW** (8/26, 4,500 × 150 ft). No on-base housing |
| **Cutter *Active*** | Argus-class OPC (~360 ft), provisioned for a Bering Sea patrol. The group lives aboard: berths, galley, RO water, generators, freezer, **medical bay** (Grace's ongoing care) |
| **The dead at the Hook: 22** | Station's 17 (Grace's coworkers) + 5 aboard *Active*. Bagged, identified, ledgered, moved to **the lumber buildings at the entrance to the Hook**, and left there; final disposition unresolved. (Replaces the earlier hospital-morgue plan.) This work plus getting the radios running fills ~Day 2–3 to ≈Day 9–10 |
| **Why the Hook** | 22 known dead is a bounded, finished piece of grief vs. ~100,000+ untended dead across Clallam County |
| **Length of stay** | At least through early to mid-November, long enough for Grace to start healing |

The four-Super-C-RV plan and Grace's house as lodging are both withdrawn.

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
- **Settled 2026-09-21: Johan operates the Hook's ham link, and the Hook goes dark (not revisited) once the whole group leaves for Italy** — everyone goes on the C-17, so nobody stays behind to run it; all ongoing ISS contact after that point happens from the IRB. **Still open:** who operates it at the IRB (Marchetti herself, or someone from the group), and how first contact plays out relative to Tyler joining. *Don't invent any of this without flagging it.*
- **Confirmed endgame (2026-09-21, author):** the expedition yacht (§2.7; `port-angeles-base-research.md` §8.9) eventually recovers a SpaceX Dragon capsule off the California coast, bringing at least one ISS crew member home with no ground-based recovery fleet — presumed Tyler's mother, per her mission clock (§3.7). The ham link is how the group learns splashdown timing/location. **Timing settled 2026-09-21: the recovery happens after the Italy/Switzerland stay**, once the group is back on the US West Coast — during the 4–6 month IRB research, the ham link keeps the group aware of the ISS crew's situation without the means to act on it yet, which is the actual source of the tension (§2.8). Not yet on the page; a major future set piece, not a comfort beat for the yacht.
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

1. **Max cruise speed reads "440 KTAS" with "537 km/h"** — these disagree (537 km/h ≈ 290 kt). The real-world PC-12 max cruise is ~290 KTAS; treat **290 KTAS** as the value and the "440" as a typesetting slip. The story's leg timing (Huntsville→Phoenix "five hours and change" at FL280) is consistent with ~290 KTAS, not 440.
2. **"Time to climb sea level to FL 450: 19 min"** — max altitude is 30,000 ft, so FL450 is impossible. Likely FL300 (or 30,000 ft).
3. The interior-dimension block repeats exterior numbers (see §4.2), so cabin length/width/height are unreliable. The weight and performance rows pair cleanly with their metric values once the two errors above are set aside.

### 4.5 How the story uses it `[CANON]`

| Section | Use |
|---|---|
| §5 | Brand-new **demo aircraft taken from the Pilatus dealer at PDK** (behind glass, service-door lockbox popped in under a minute, fuel topped off): "Not everything gets to be hard." Rationale for the swap: the A350 is too big and pointless for reaching a handful of survivors. The A350 stays dead on a runway at KATL. |
| §5 | Sam starts checking John out ("you fly?"). Launch to Huntsville at dusk, two men "twenty-nine hours" after being strangers. |
| §7 | **Huntsville → Phoenix, stop at Amarillo for caution, not necessity** (rewritten 2026-09-23). On paper the PC-12 makes it in one hop (five hours and change at FL280), but there's been no winds forecast since Monday night and nobody to say what's on the runway at Sky Harbor, so Sam stops at Amarillo to land at Phoenix with the tanks half full. Keep the fuel talk short. Clock: 08:40 CDT wheels up KHSV; ~11:45 CDT land KAMA (low pass down Runway 22 first); ~40 min on the ground; 12:25 CDT wheels up; ~12:30 MST land KPHX on 26 after a low pass, 106°F. **John hand-flies the cruise segment** (autopilot off, positive exchange of controls, heading 270, FL280, yaw damper on; overcorrects, then settles to ±40 ft flying the flight path marker and trim). At Amarillo, fuel comes from the **FBO's Jet-A truck** (keys in it, first-try start); John bonds the static cable and works the nozzle, after Sam makes him swap flip-flops for boots; Sam sumps the tanks. |
| §8 | **Phoenix → Port Angeles (KCLM)**: ~1,020 nm great-circle / ~1,080 nm by airway, inside range with thin margin; an easy contrast beat with no fuel stop and no crisis `[CANON]`. **Fuel and ETE still `[verify]` before writing it (Q-13).** Prose still flies Phoenix → Portland (~925 nm airway, D-15). Jet-A is on the field at KCLM (Citizen Air) for a refuel on arrival. |
| §10 | Next mentorship step: **Port Angeles → Seattle, ~60 nm, about half an hour** (prose still says "Seattle's nothing from Portland. Forty minutes" — D-17). |

**Fleet rule (`CLAUDE.md` Aircraft):** whether the PC-12 remains the standing aircraft long-term is **open** — don't switch without a reason, and ask the author before adding another type. Two other types are now canon: **a C-17 for the Italy excursion** (from McChord Field, JBLM; Sam flies it; carries the group and 4 TruckHouse BCRs), and **the station's three MH-65E Dolphins** for Sam's rotorcraft arc at the Hook.

### 4.6 Continuity checks worth a second look `[DERIVED]` / `[VERIFY]`

- **Fuel math (D-09) — resolved 2026-09-23.** §7 no longer claims the stop is necessary; it says the leg works on paper and the stop is Sam's caution. That matches the brochure's 1,568–1,803 nm range against the ~1,285 nm leg.
- **Fuel with no grid (D-10) — resolved 2026-09-23.** Amarillo fuel now comes from the FBO's Jet-A truck, which has its own engine-driven pump, so the dead grid doesn't matter. Future legs still need a fuel source that doesn't depend on grid power (a truck, an FBO generator, or a hand/gravity method).
- **Payload.** Max payload with full fuel is only **1,087 lb** — five adults and a child, a dog, a workstation and supplies will push against it on every full-tank leg (§7 carried three people plus Tyler and Dan; §8 adds Catherine and, on later legs, Grace). The Phoenix → KCLM leg, long and with thin fuel margin, is where this bites first (Q-13).
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
2. A building's **own backup generator** with days of fuel — hospitals and certified airports are required to have one. Used for **Olympic Medical Center** in §8 (portable X-ray and power on the backup plant, no staff; prose still says Providence Seaside, D-15). The **PDX approach-lighting** example in the current prose is dropped — KCLM is too small to justify a certified backup plant.
3. A property's own **islanding solar+battery** system. Still a valid mechanism in `CLAUDE.md`, but **no current scene uses it**: Grace's solar+battery house was retired with the house.

**At the group's own base, power is never jeopardy** `[CANON]` — *Active*'s generators and the station carry it. Any in-house power beat follows the §4 model: preparedness confirmed working.

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
| Grid dark at John's house, ~00:50 Sept 6 (§4) | ~22.8 | Phase 3, inside the 8–24 h window | Yes |
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

Reno's zero-nuclear status once gave the eventual TruckHouse trip a safety reason. **No longer:** Port Angeles is also very low risk (§5.9), and `CLAUDE.md` now says outright that the Reno trip "isn't a safety move." It's driven by Catherine's brother and the four BCRs for Italy.

### 5.8 How the story uses it `[CANON]`

- **§4:** John has the model run the collapse forward; his own Georgia dot comes back a bad color with a date on it; Sam witnesses. Later, at the desk, John voices the reasoning aloud (Vogtle, scram-then-pool, 10–21 days) — which is also where "we need to head west" is first said on-page. The **grid actually goes dark at his house ~12:50 a.m.** and his generator carries the load — **deliberately not a scare.** That's the model for any future in-house power beat: preparedness confirmed, not jeopardy. Don't write a version where the backup fails or the outage creates tension without the author asking.
- **§6:** Huntsville pocket, accidental, temporary.
- **§8:** Olympic Medical Center's generator plant. (Grace's solar+battery house and the PDX approach-lighting beat are both dropped.)
- **Pressure on John is a date on a calendar** (his region's danger window), not a personal power crisis — it is what sent the group west.
- Still wanted by the author: more dedicated grid scenes (characters reasoning about regions to avoid, a supply run routed around a danger window, a character with direct plant knowledge), and **the reasoning that names Reno and ties it to Catherine's brother**.

### 5.9 Nuclear exposure at Port Angeles and the Hook — added 2026-09-20

*Originally assessed for Grace's house (217 Wapiti Way); the verdict carries over unchanged to the Hook, ~9 nm away. `CLAUDE.md` now states it: Reno and Port Angeles are both very low risk, pending verification of Kitsap and Hanford.*

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

**Story consequence:** the ~10–21-day nuclear danger window was the safety engine for leaving Alpharetta and pointing west. With the group at a low-risk location, that engine is spent — Reno is motivated by TruckHouse itself (Q-09, resolved). Also note the ranking table in §5.7 (Reno → Raleigh → Tucson → Alpharetta) can gain a row: **Port Angeles ≈ Reno-tier (very low)**.

### 5.10 Open research items from the source doc `[SRC]`

Exact SCADA alarm/watchdog intervals; which nuclear/hydro plants can auto-island; plant-by-plant battery/generator coping times and pool inventories; how often 2003-style surviving islands occur and where; coal-ash pond/tailings dam failure risk. **Also a hydro hazard worth its own scene:** floodgates need active management in high-water events, so a heavy rain downstream of a dam is an acute, sudden risk independent of the electrical timeline.

---

## 6. Cross-links: how the five topics interlock

- **DAL27 ↔ Personas:** Sam's whole persona is defined by the turnback choice; John's persona is what lets him *notice* the track (ADS-B fluency) and *reach* Sam (own IFR rating, FBO ops desk).
- **DAL27 ↔ Grid:** John sees Delta 27's track and the DOT cameras only because the grid is still in Phase 2 (hour ~7). Had he waited until the evening, the data feeds would be dying.
- **Personas ↔ ISS:** Tyler's mother is the human stake; Sam's promise and its §10 payoff; Johan (electrical engineer, maritime radio) is the presumed ham operator; Elise is the far end of the ISS channel.
- **ISS ↔ Grid:** The ham link's premise *is* the grid failing: no TLE websites, so the group needs stored orbital data or naked-eye tracking (John's point in §7 that cached orbital elements may predict passes for a few days). The Hook's station runs on *Active*'s and the station's own power, and Grace's antenna work in §10 is the on-page proof the cast can build radio gear.
- **PC-12 ↔ Grid:** Jet-A logistics after the grid dies (Amarillo's self-powered fuel truck is the template); the PC-12's unpaved-field ability matters for TruckHouse/Reno.
- **Grid ↔ Personas:** John's home region is the *worst* nuclear risk on the list, which is why they went west. Reno and Port Angeles are both very low risk, so Reno is about Catherine's brother and the BCRs, not safety.
- **C-17 ↔ Personas ↔ ISS:** Sam's USAF C-17 years make the Italy flight possible; the C-17's damage in Europe strands the group while the ISS crew's consumables clock runs down ("we know, and we can't do anything yet").

---

## 7. Discrepancy register

Nothing below has been changed in the manuscript or canon. Each line is for the author to decide.

| ID | Where | Conflict | Suggested resolution (not applied) |
|---|---|---|---|
| **D-01** | DAL27 dossier vs `CLAUDE.md` | Dossier: takeoff **27L**, land **27R**, Gate F6. `CLAUDE.md` + §3 prose: land **26R**, taxi to Signature | Prose and canon agree; the dossier's runways are mechanics-only. Note in the compendium (done); no action unless the author wants dossier-matching runways |
| **D-02** | Landing time | Dossier: touchdown 10:20, gate 10:30. Timeline: "10:30 Sam lands" | Timeline wins: 10:30 landing. The dossier's 10:30 is a *gate* time |
| **D-03** | Sam's rest end | Dossier: rest period ends **03:30** (3 h). Timeline: rest ends **03:00**; turn at 03:30 | Timeline wins (03:00 end, 03:30 turn) — matches prose |
| **D-04** | Passenger count | **Resolved:** `CLAUDE.md` now says 306 passengers + 13 cabin crew + 4 pilots, 323 aboard, matching §2 prose | None needed |
| **D-05** | §3 prose | **Resolved:** the "north side" / "south field" conflict is no longer in the Section 3 prose | None needed; `[VERIFY]` the real Signature ATL side if it's ever named |
| **D-06** | §4 prose | Sam says he flew "three hundred people most of the way to **Europe**" — the route is over the Arctic to Seoul | Change to "most of the way to Asia" / "up to the Arctic" — or leave if Sam is speaking loosely |
| **D-07** | `john_lauer_persona.md` vs canon | **Resolved 2026-09-20:** file retired (it said Anthropic/Claude and lacked widower status, Naomi, Mark, Waffle House, the PC-12 arc). §2.2 above is the working replacement; recover the original with `git show HEAD:john_lauer_persona.md` | None needed |
| **D-08** | Surnames | **Resolved 2026-09-20:** Sam is Samuel Reyes (§2 header, §3 handshake); Catherine's surname collided, so it is now **Navarro** (`CLAUDE.md` bio + one prose instance in `sections/07-day2-john.md`, changed) | Working default; the author may pick a different name. Her brother (TruckHouse) carries the same surname |
| **D-09** | PC-12 fuel math | **Resolved 2026-09-23:** §7 and `CLAUDE.md` now say the leg works on paper and the Amarillo stop is caution (no winds forecast, unknown runway at Sky Harbor) | None needed |
| **D-10** | Fuel after grid loss | **Resolved 2026-09-23:** Amarillo fuel now comes from the FBO's Jet-A truck (keys in it, first-try start) | None needed; future legs need the same kind of answer |
| **D-11** | Vogtle distance | §4 prose: two reactors "inside eighty miles of this house" (Vogtle 3 and 4). `reference/power-grid-shutdown-timelines.md`: Vogtle is roughly **150 miles** from Alpharetta | Fix prose to "about a hundred and fifty miles" or double-check the real distance `[VERIFY]` |
| **D-12** | README | `README.md` still references `1naM_Draft.md` (not in repo), a "2026-09-09 retcon," "Sections 1–13" (there are 10), a Portland rescue, and an Oregon-coast rest stop. Its Timeline line is current | Refresh the README to the current `CLAUDE.md` state |
| **D-13** | Persona ages vs prose | Minor: Sam's career now runs CFI → ~800 h PC-12 medical runs → 8 yr USAF → 2 yr charter → ~10 yr Delta, 20+ years for a 43-year-old — tighter than before | No action; check whenever a scene quotes years |
| **D-15** | Grace's location | `CLAUDE.md` puts Grace **near the Elwha River, Port Angeles, WA**. `sections/05` (Sam's "Huntsville, Phoenix, Portland."), `sections/08` (PHX→Portland flight, "Portland" in John's pitch to Catherine, Seaside, **Providence Seaside**, coastal house) and `sections/10` (days at Grace's house; "Seattle's nothing from Portland. Forty minutes") still say Portland/Oregon. Checked 2026-09-24: still live | Prose pass on §5, §8, §10 — held until the author OKs it. Targets are the `CLAUDE.md` Section 8 and Places entries (KCLM + Citizen Air car, the Elwha River bridge, Olympic Medical Center, market pasta dinner) |
| **D-16** | Johan's ship — Section 9 | Prose: "still three days from Seattle." Canon: three days *out of Yokohama*, ~9–10 days from Port Angeles. Checked 2026-09-24: still live | Change §9 to "more than a week from Seattle" (`port-angeles-base-research.md` §2.2) |
| **D-17** | Johan's ship — Section 10 | Prose: AIS shows the ship anchored in **Elliott Bay** on ~Day 5, and Sam says "Seattle's nothing from Portland" | Canon: John watches her anchor in Port Angeles Harbor ≈Day 9–10, from the Hook; the group goes out by boat the next morning |
| **D-18** | Grace's house — Sections 8 and 10 | Prose has the group dining, sleeping, and resting several days at her house (well pump, generator, antenna); canon: the house is never visited | Re-set §8's dinner (setting open; interim hotel is the natural candidate) and §10 (a multi-day skip at the station and aboard *Active*, with the same Grace tasks, ISS spotting, and Catherine's grief beat) |
| **D-20** | Grace's address | `CLAUDE.md` no longer mentions 217 Wapiti Way (and says anything it doesn't describe isn't canon); `port-angeles-base-research.md` line 15 still tags it `[CANON]` | Ask the author whether the address is still wanted; if not, retag or drop it there |
| **D-21** | Catherine's §7 introduction | **Resolved 2026-09-23:** earlier notes had her waiting near a Phoenix hospital; `CLAUDE.md` and §7 now agree on the office building two miles off the north fence | None needed |
| **D-19** | Open questions in `port-angeles-base-research.md` | Q-16 to Q-26 (the accident, rescue site, lodging [now decided: the Coast Guard station], §9 wording, §10 dates, healing, winter power, BCR/Italy logistics, living at the station, the station's dead, station facts to verify) live there, not in this file | Cross-reference only |
| **D-14** | Brochure | Max cruise "440 KTAS" vs "537 km/h" (~290 kt); "time to FL450" impossible for a 30,000 ft ceiling; interior dimensions repeat exterior values | Use 290 KTAS; read cabin dimensions off the PDF page; see §4.4 |

---

## 8. Open questions

Author decisions or research that would firm this up. Numbered so they can be referenced.

- **Q-01 — Return-leg time. RESOLVED 2026-09-23 (author):** departure moved from 23:35 to a 20:10 pushback so that the 03:30 turn happens ~3,240 nm out over Alaska's western North Slope, making the 7-hour return to a 10:30 landing real flying time at normal cruise. The slow-cruise and racetrack beats are dropped. Sections 1–3 are updated, and §1 of this file was rewritten to match on 2026-09-24.
- **Q-02 — Crew size vs. regulation.** **Resolved (2026-09-27):** the crew is now four pilots (Ruth Gunn added as second relief pilot), which fits the Part 117 augmented-crew limit for the block.
- **Q-03 — Persona file.** *Resolved 2026-09-20:* retired in favor of §2.2.
- **Q-04 — HSV→PHX fuel dossier.** *Resolved 2026-09-23:* the stop is no longer necessary, only cautious (D-09), so the old ~3,100 lb figure no longer matters.
- **Q-05 — Fueling after the grid dies.** *Resolved for Amarillo 2026-09-23* (the FBO's Jet-A truck). Still open for future legs, especially Reno in winter.
- **Q-06 — Ham link.** *Mostly resolved:* Johan builds and operates it at the Hook, using the 170-ft VTS tower as a mast; the Hook goes dark when everyone leaves for Italy, and contact continues from the IRB. Still open (`CLAUDE.md`): who runs it at the IRB, and how first ISS contact plays out relative to Tyler joining.
- **Q-07 — Elise Marchetti's arc.** *Resolved:* the group meets her and bases at the IRB for 4–6 months. Her research may explain the killing mechanism, never the immunity. Still open: what it finds.
- **Q-08 — ISS crew and return.** *Partly resolved 2026-09-21:* she comes home via a Dragon-capsule splashdown off California, recovered by the group's expedition yacht (§3.6). Still open: who else is aboard, exact timing, and the recovery logistics themselves (real Dragon recovery involves hazmat handling of hypergolic thruster residue by a trained crew — unresearched for a small-yacht scenario).
- **Q-09 — TruckHouse.** *Resolved:* the group goes after the Port Angeles stay (~mid-November or later; Reno at ~4,500 ft, so Sierra winter is a real factor). History: Does the group go to Reno, and when? The Alpharetta danger window (~Sept 15–27) matters less now that they've left; is there a *new* safety reason to move? **Updated 2026-09-20:** Grace's house is itself very low nuclear risk (§5.9), so *no* safety reason remains — Reno has to be motivated by TruckHouse itself. **Author's stated reasons (2026-09-20): (1) Catherine wants to know what happened to her brother; (2) TruckHouse's BCRs are needed for the excursion to Italy to connect with Dr. Elise Marchetti.** **How many and how they get to Italy is now resolved: 4 BCRs, via a C-17 from McChord AFB (Q-23).** **BCR fully resolved 2026-09-21:** confirmed real (carbon-fiber monocoque camper on an AEV-upfitted Ram 3500 `[SRC]`), and confirmed never spelled out on the page, since TruckHouse doesn't publicly define the letters either.
- **Q-10 — PC-12 as the standing aircraft.** Locked in, or do they change types when the group outgrows it (payload 1,087 lb with full fuel; 8–9 seats)?
- **Q-11 — Johan's first on-page meeting.** Next to write per `CLAUDE.md`: the *Pacific Tender* at anchor, reached by boat from the Hook. What does he bring (radio skill, electrical engineering, a deck officer's safety discipline) that changes how the group works?
- **Q-12 — Sam/Catherine surname.** *Resolved* (D-08): Catherine is Navarro.
- **Q-13 — Phoenix → KCLM leg.** `CLAUDE.md` makes it non-stop, ~1,020 nm great-circle / ~1,080 nm airway, "inside PC-12 range with thin margin," and flags fuel and ETE `[verify]` before writing it. Still needs the independent fuel/ETE check, with the heavier load (five adults and a child plus Dan) against the 1,087 lb full-fuel payload.
- **Q-14 — Elwha geography choices.** *Resolved:* KCLM with a Citizen Air car, the Highway 101 Elwha River bridge as crash and rescue site, Olympic Medical Center, then the interim hotel and the Hook. Her house is never visited. Leftover: D-20 (the address).
- **Q-15 — Prose pass.** Rewrite §5/§8/§10 for the new location now, or hold until the next section is drafted? (D-15, D-17, D-18.)
- **Q-16 — John's §8 dinner setting.** Open in `CLAUDE.md`; the interim hotel is the natural candidate.
- **Q-17 — The C-17 landing accident.** Open in `CLAUDE.md`: gear damage, a blown tire and runway excursion, or FOD. Also open: how the group gets from Switzerland back to the West Coast afterward.
- **Q-18 — Yacht and splashdown.** Open: how the group acquires the 100–120 ft yacht, and how they learn splashdown timing and location.

---

## 9. Changelog

| Date | Change |
|---|---|
| 2026-09-24 | **v0.2 resync to the restructured `CLAUDE.md`** (per-character entries, Places, full Timeline, scene-by-scene canon, and the 9/23d Section 7 changes). §1 rewritten for the 20:10 pushback and the North Slope turnback (new speed, weight, alternates, and sunrise checks). §2: John now 61; full surnames (Tyler Vance, Johan Brandt); new bio facts and flaws for every character (Sam's PC-12 hours and 2027 rotorcraft rating, Catherine's office building and family, Grace's Army/tribal background, Johan's family and fingers, Marchetti's family and blind eye, Dan's breed); new §2.11 on the Hook (22 dead to the lumber buildings, *Active* as quarters, interim hotel). §4.5: §7 rewritten (Amarillo is caution; the fuel truck; John's hand-flying). §5: Grace's solar house retired; Reno no longer a safety move. Discrepancies: D-04, D-05, D-09, D-10 resolved; D-12, D-15–D-18 rechecked against the prose and still live; D-20 (Grace's address) and D-21 added. Questions: Q-04, Q-06, Q-07, Q-09, Q-12, Q-14 resolved or mostly resolved; Q-16–Q-18 added from `CLAUDE.md`'s open decisions. Note: `port-angeles-base-research.md` keeps its own Q-16 onward (D-19), so Q-16–Q-18 here are this file's own. |
| 2026-09-20 | Added a container-ship suitability assessment for the proposed Port Angeles anchor point (depth, swing room, holding, shelter, unsuitable spots, lone-operator anchoring issue) to §2.7. |
| 2026-09-20 | Added Johan's proposed anchor point (Port Angeles Harbor, inside Ediz Hook) to §2.7 with coordinates grounded in NOAA Coast Pilot 10 Ch. 7 — proposal only, not canon; prose and `CLAUDE.md` still say Elliott Bay. |
| 2026-09-20 | Added §5.9 (nuclear exposure at Grace's house — very low risk; Kitsap and Hanford flagged to verify); renumbered old §5.9 to §5.10; amended the Reno rationale (§5.7, Q-09) and the matching `CLAUDE.md` grid and TruckHouse bullets. |
| 2026-09-20 | Grace's house located from the author's Google Maps pin (48.0435, −123.5980): inland, not coastal (`CLAUDE.md` retcon entry, §2.6, Q-14). Flagged that the pin is a real vacation-rental business. |
| 2026-09-20 | Added Grace's address: 217 Wapiti Way, Port Angeles, WA 98363 (`CLAUDE.md` retcon entry + bio, §2.6, Q-14). |
| 2026-09-20 | Source docs moved to `reference/`; `john_lauer_persona.md` retired (D-07, Q-03 resolved); path references updated in `CLAUDE.md`, `README.md`, this file. |
| 2026-09-20 | **Johan lives ashore; he does not commute to the ship (author) — the ship-as-base plan is retired; an expedition yacht at the Hook is proposed** (`CLAUDE.md` amendment 13; `port-angeles-base-research.md` §8.9, Q-34, Q-35). The Panama Canal is not transitable without operators, so the yacht can't be the route to Italy. |
| 2026-09-20 | **The container ship is abandoned; the yacht is now 100–120 ft (author).** Added `port-angeles-base-research.md` §8.10 (worst cases with *Rena* and *X-Press Pearl* precedents; which way she drifts; does it matter; what Johan can do before leaving) and the larger-yacht update in §8.9 (crew roles; saltwater docks only — the Ballard Locks trap). `CLAUDE.md` amendment 13 updated; Q-35 updated; Q-36, Q-37 added. |
| 2026-09-20 | **Chito Beach Resort removed (author): "no good because of the bodies."** Its `CLAUDE.md` amendment and dossier section (and Sekiu Airport notes) were deleted; the dossier's yacht section is now §8.9 and the `CLAUDE.md` yacht amendment is now 13. |
| 2026-09-20 | **Decisions (author): go to the Hook; four Super C RVs with big battery banks recharging on auto, found "in the area"; 17 Coast Guard dead, bagged and moved to the hospital morgue.** `CLAUDE.md` amendment 12 (and 10/11 updated: 17 replaces my "few dozen" estimate); `port-angeles-base-research.md` §8.8, Q-31, Q-32. |
| 2026-09-20 | Added `port-angeles-base-research.md` §8.7 (alternatives for parking the RVs, judged by independent power and water): municipal water depends on pumps (Ranney well on the Elwha, same valley as the crash); all campgrounds and RV parks were full on Labor Day night (bodies); the Hook is best, the dealership lot is the staging area, a private Dungeness farm is the best alternative; rainwater from the hangar roof is ample. Q-30. |
| 2026-09-20 | RV reference model added (author: 2027 Thor Motor Coach Inception 38DX Super C, listed in Mesa AZ). Confirmed 261293 US-101, Sequim is **RV Country's Sequim location** (earlier "Peninsula RV"/"Clear Creek RV Center" labels were older names); Sequim Super C stock unverified (Q-27). |
| 2026-09-20 | **RV plan decided (author): four Super C motorhomes from the dealership at 261293 US-101, Sequim, taken to the Hook** (`CLAUDE.md` amendment 11; `port-angeles-base-research.md` §8.5; Q-27). |
| 2026-09-20 | **Corrected my error: the Hook has its own airfield (KNOW, runway 8/26, 4,500 × 150 ft) — the PC-12 can be based at the station.** Recorded the author's points: **the bodies are a big issue** (site-selection criterion; `CLAUDE.md` amendment 10) and **RVs from the dealership at 261293 US-101, Sequim as living quarters on the Hook** (amendment 11). Added `port-angeles-base-research.md` §8.4 (bodies), §8.5 (RV plan), §8.6 (alternatives, incl. the New Dungeness Light Station) and Q-27–Q-29. |
| 2026-09-20 | **The group's base is the Coast Guard Air Station / Sector Field Office Port Angeles on Ediz Hook (author).** Researched the station's facilities (hangar, exchange, medical/dental clinics, pier, cutters, 2018 Transit Protection System, radio and VTS tower); **no on-base housing** (a comfort gap), and its 24-hour duty crews are dead on station (2:00 AM craft rule). Recorded in `CLAUDE.md` (amendment 9) and `port-angeles-base-research.md` §8.2–8.3, Q-24–Q-26. |
| 2026-09-20 | Added the Port Angeles base dossier (`port-angeles-base-research.md`): timeline, non-anchorage box and windlass items resolved, crash/Grace's-house consequences, lodging requirements and options, ISS sky analysis, winter clock. Grace's house unsuitable; Johan's Port Angeles Harbor anchor and Day 9–10 timeline made canon; **Catherine renamed Navarro (D-08 resolved; one prose edit in `sections/07`)**; TruckHouse reasons updated (her brother; BCRs for the Italy excursion to Dr. Marchetti); **corrected my earlier ISS-latitude note** (§3.7). Added D-16–D-19. |
| 2026-09-20 | Grace relocated from Portland, OR to near Elwha, WA (author directive). Updated §2.1, §2.6, §2.5, §3.7, §4.5, §5.2, §5.8; added D-15, Q-13–Q-15. Logged in `CLAUDE.md` as the 2026-09-20 retcon; prose not yet updated. |
| 2026-09-20 | v0.1. Created from `reference/iss-ham-radio-contact.md`, the since-retired `john_lauer_persona.md`, `reference/power-grid-shutdown-timelines.md`, `reference/DAL27_Emergency_Turnback_Dossier.pdf`, `reference/PC-12-PRO-Brochure.pdf`, `time.md`, `CLAUDE.md`, and `sections/02`–`04`, `07`. Added discrepancy register D-01–D-14 and open questions Q-01–Q-12. |

---

## 10. Source index

| File | What it holds | Notes |
|---|---|---|
| `CLAUDE.md` | Canon: premise, characters, places, Timeline, scene-by-scene canon, ongoing threads, future arcs, aircraft, writing rules, open decisions | Top authority; no retcon log (git history is the record) |
| `time.md` | Author's Day 0 clock | **Deprecated 2026-09-23** — folded into the CLAUDE.md Timeline and removed |
| `reference/DAL27_Emergency_Turnback_Dossier.pdf` | Flight profile, rest rotation, telemetry table | Text layer is scrambled in the telemetry table; 4-pilot medical scenario, adapted |
| `reference/PC-12-PRO-Brochure.pdf` | Manufacturer brochure: cockpit, performance, dimensions | Marketing copy; two text-layer errors (§4.4) |
| `reference/iss-ham-radio-contact.md` | ARISS/ham link mechanics | Sources: ARRL, ariss.org, hamsattracker, onallbands |
| `reference/power-grid-shutdown-timelines.md` | Draft 4 grid/nuclear model | Cites NERC, FERC 2003 report, NRC, IEEE 1547, DOE |
| `john_lauer_persona.md` | *(retired 2026-09-20)* | Was stale (Anthropic); in git history only (D-07) |
| `reference/global-flight-traffic-model.md` | 2:00 AM sky calculator; Delta 27 preset | Interactive tool at claude.ai/artifact/QjT5DAQGHAFGTdJiUwvH5w |
| `port-angeles-base-research.md` | Port Angeles harbor/anchorage, timeline, crash aftermath, lodging and ISS-sky analysis (added 2026-09-20) | Companion to this file; NOAA Coast Pilot 10, 33 CFR 110.230 and web sources listed there |
| `sections/01`–`10` | Prose used to verify claims above (`09-day0-yohan.md` renamed `09-day0-johan.md`, 2026-09-23) | Source of truth for prose |
| `README.md` | Repo overview | Out of date (D-12) |
