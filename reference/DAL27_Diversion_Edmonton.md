# Flight Operations Dossier: DAL27 Crew Incapacitation & Diversion to Edmonton

**Supersedes:** `DAL27_Diversion_Val_dOr.md` (its James Bay route sits east of the real ATL–ICN track, its timings don't match a 480 kt cruise, and its 45,000 lb jettison figure is about half what the weights require) and `reference/DAL27_Emergency_Turnback_Dossier.pdf` (the old Alaska turnback).

**Status:** working reference for Sections 1–4. Positions are great-circle estimates, not a filed route; items marked `[verify]` need a source or a pilot's check before they go on the page as hard numbers.

**Flight:** Delta Air Lines 27 (DAL27), KATL → RKSI (Seoul-Incheon)
**Aircraft:** Airbus A350-900, 2 × Rolls-Royce Trent XWB-84
**Diversion field:** Edmonton International (CYEG)
**Return:** Sam alone in a Pilatus PC-12 NGX, CYEG → KMSP → KPDK

---

## 1. Crew

Augmented four-pilot crew (FAA Part 117, Class 1 rest facility), flown as two pairs.

| Pilot | Role | Pair | At 02:00 EDT |
| --- | --- | --- | --- |
| Jack Sommers, 63 | Captain (PIC) | Primary | First break, crew rest bunk. Dies there. |
| Samuel Reyes, 43 | First Officer | Primary | First break, crew rest bunk. Survives. |
| Theresa Foreman | Relief captain | Relief | Left seat. Dies there. |
| Ruth Gunn | Relief first officer | Relief | Right seat. Dies there. |

All four pilots fly the departure and climb. After top of climb Jack and Sam take the first break; Theresa and Ruth take the seats. Pilots in cruise wear lap belts, not shoulder harnesses.

Aboard: 4 pilots, 13 cabin crew, 306 passengers. **323 total.**

---

## 2. The flight deck and the crew rest

- The A350's flight crew rest compartment (FCRC) is in the crown, immediately aft of the flight deck: two bunks and a seat. Its stair is behind its own secure door with a combination lock, in a zone that also holds a pilots' lavatory.
- **Canon layout (author, two doors):** the crew rest stair door opens onto the forward entry area; the flight deck door is a second locked door. `[verify against Delta's A350 configuration]`
- **Getting back onto the flight deck:** the keypad beside the flight deck door. A normal entry request sounds a chime inside; a pilot looks at the door video and unlocks it from the pedestal. With no response, the emergency access code starts a continuous chime and a countdown; if nobody inside denies it, the door unlocks for a few seconds at the end. Airbus's delay is ~30 s, airline-configurable. `[verify Delta's delay]`
- **Ending a break:** normally the flight deck calls the bunk on the interphone near the end of the break. Nobody calls Sam. His own alarm wakes him, and he leaves without disturbing the captain's curtain.

---

## 3. Route and timeline

Times EDT, with UTC. Positions assume wheels up 23:35, top of climb ~00:00 about 150 nm out, and a 470 kt groundspeed in cruise. The route is the great circle; a real filed track would bend with the winds. `[verify with a Delta pilot: typical DL27 routing]`

| EDT | UTC | Event | Position (approx.) | Track / alt |
| --- | --- | --- | --- | --- |
| 23:35 (Sep 4) | 03:35Z | Wheels up KATL, runway 26L `[verify; ATL departs off 26L/27R in west flow; the old prose said 27L, an arrival runway]` | KATL | Initial course ~335° |
| ~00:00 | 04:00Z | Top of climb | ~35.9°N 85.7°W, north of Chattanooga | FL340 |
| ~00:30 | 04:30Z | First break: Jack and Sam to the bunks | ~39.4°N 87.9°W, west-central Indiana | FL340 |
| 02:00 | 06:00Z | **The event.** Theresa and Ruth die in the seats, Jack in his bunk. Autopilot holds LNAV/altitude. | ~49.6°N 96.0°W, southeast Manitoba, just north of the Minnesota line | ~327°, FL340 or FL360 after a step climb `[verify]` |
| 02:00–03:30 | | DAL27 flies on, no one alive on the flight deck. ATC calls go unanswered at every handoff because nobody's left at the scopes either. | Across Manitoba and Saskatchewan | |
| ~03:15 | 07:15Z | **Sam's alarm.** No interphone call. He leaves Jack's curtain closed. | ~59.0°N 108.3°W, northern Saskatchewan near Lake Athabasca | ~317° |
| ~03:30 | | Flight deck door: normal request, no answer; emergency access code; waits out the delay. | ~59.0°N 108.3°W | |
| ~03:31 | 07:31Z | On the flight deck. Speaks to Theresa and Ruth and checks them: dead in their lap belts. Then reads the airplane (autopilot, FL360, ECAM clear) and **turns south on heading 180** toward the en route alternates (Fort McMurray, Edmonton, Saskatoon) rather than fly farther from them while he works the problem. | ~59.2°N 108.6°W | Hold, FL360 |
| ~03:33–03:37 | | Calls the captain on the crew rest interphone; no answer. Goes up, finds Jack dead; back in on the emergency code. Moves Theresa to the observer seat; takes the left seat. | Southbound | |
| ~03:35–03:58 | | **Works every channel before declaring** (see §4). | Southbound, FL360 | |
| ~03:58 | 07:58Z | MAYDAY in the blind; squawk 7700; MAYDAY over CPDLC. | ~55.7°N 108.3°W | Hdg 180 |
| ~04:00 | 08:00Z | **Diversion decision: Edmonton.** Direct CYEG. | ~235 nm NE of CYEG, course ~215° | Descent in ~15 min |
| ~04:10–04:45 | | Cruise and descent; overweight landing checklist; ILS approach briefed alone. | Over northern Alberta | |
| ~04:36 | 08:36Z | **Overweight landing at CYEG** (02:36 MDT), night, runway 20 `[verify ILS 20 availability and runway choice; 02/20 is the 11,000 ft runway]` | CYEG | |
| ~04:40–05:30 | | Taxi in and shutdown; Section 2 ends after the cabin walk. | CYEG apron | |

Distances along the track from KATL: event ~1,090 nm; Sam wakes ~1,795 nm; total ATL–ICN great circle ~6,200 nm.

---

## 4. Communications sequence before the MAYDAY

Sam checks, then checks again, before he declares, because three dead pilots and a silent radio could also mean a failed radio. In order:

1. **Frequency in use** on VHF 1: whatever is still tuned (the last handoff the relief pair took, likely Winnipeg or Edmonton Center `[verify FIR boundary near 59°N 108°W]`). Then the published frequency for the sector he's in, from the EFB.
2. **Equipment check:** the second VHF on the same frequency; a different audio control panel; headset vs. speaker. The radios transmit (sidetone, TX indication), but nothing comes back.
3. **121.5** on VHF 2 (always monitored), addressed to any station.
4. **123.45**, air-to-air, any aircraft.
5. **CPDLC:** the ATC mailbox. Last uplink time-stamped shortly before 06:00Z. Downlinks go out with no response.
6. **ACARS** free text to Delta's operations center (OCC). Status SENT, no reply.
7. **SATCOM voice:** dispatch, then the STAT-MD medical line `[verify Delta's medical provider; the old dossier names UPMC STAT-MD]`. Calls connect and ring out.
8. **Cabin interphone:** call to the forward galley, then all-call, then emergency call. No flight attendant picks up.
9. **SATCOM to Elena.** Voicemail.

Only then: **"MAYDAY, MAYDAY, MAYDAY,"** transmitting in the blind on the center frequency and 121.5, in AIM order: station, callsign and type ("Delta Twenty-Seven Heavy, Airbus A350"), nature (crew incapacitation, one pilot), weather, intentions, position, altitude, fuel in minutes, people on board. Squawk 7700. A MAYDAY downlink on CPDLC.

---

## 5. The diversion decision

Fields within reach at the decision point (~55.7°N 108.3°W, after ~25 min southbound):

| Field | Distance | Longest runway | Assessment |
| --- | --- | --- | --- |
| Fort McMurray (CYMM) | ~115 nm | ~7,500 ft `[verify]` | Closest. Too tight for a heavy overweight A350 landing alone at night with no fire crew confirmed. |
| **Edmonton (CYEG)** | **~235 nm** | **11,000 ft (02/20)** `[verify]` | **Nearest suitable.** Long runway, ILS, major airport, full rescue and fire coverage on paper. About 15 minutes farther than Fort McMurray. |
| Saskatoon (CYXE) | ~220 nm | ~8,300 ft `[verify]` | About as far as Edmonton, with a shorter runway. |
| Yellowknife (CYZF) | ~450 nm | ~7,500 ft `[verify]` | Short, and now well behind him. |
| Churchill (CYYQ) | ~495 nm | 9,200 × 160 ft | Farther and shorter than Edmonton. |

"Nearest suitable," not "nearest." Sam trades about fifteen minutes for 3,500 more feet of runway. That's exactly the judgment an airline crew is trained to make, and he has to make it alone.

---

## 6. Weight and the overweight landing

Estimates, not dispatch figures. `[verify against a Delta A350 planning sheet if available]`

| Item | Value |
| --- | --- |
| Max takeoff weight | ~280 t (617,000 lb) `[verify variant]` |
| Takeoff weight, ~15 hr sector | ~270–280 t |
| OEW | 142.4 t (aircraftinvestigation.info) |
| Max landing weight (MLW) | 207 t (~456,000 lb) |
| Burn | ~6–7 t/hr average, higher in the climb |
| Burned by touchdown (~5 hr 25 min) | ~33–35 t |
| **Landing weight** | **~240–245 t: ~35 t (~75,000–85,000 lb) over MLW** |
| Fuel aboard at landing | ~60 t |

The A350-900 has a fuel jettison system, but Sam doesn't use it. He runs the **overweight landing checklist** instead. The airplane is certified to land overweight in an emergency, and an 11,000 ft runway leaves margin. What's on the page:

- Higher approach speed (Vref rises with weight). Flap/slat configuration per the checklist `[verify the A350 overweight landing configuration]`.
- A gentle touchdown, low sink rate.
- Autobrake setting and reversers per the landing performance computed on the EFB.
- Brake temperatures afterward. A real crew would watch them climb on the ECAM wheel page and expect fuse plugs to melt if they get hot enough.
- A required overweight-landing inspection before the airplane flies again. Nobody will ever do it.

Autoland vs. hand-flown: autoland on an ILS is approved in good weather with the right equipment; the choice and the minimums are `[verify]`. A pilot alone at night after a 90-minute shock could reasonably let the airplane fly the approach and take it by hand for the flare, or fly it all himself.

---

## 7. Edmonton on the ground

- **Local time:** Mountain (MDT = EDT − 2). Landing ~02:36 MDT. Sunrise around 06:45 MDT `[verify]`. Dark through the cabin walk and the PC-12 departure.
- **Grid:** the Western Interconnection, in the first hours after the event. Field lighting and terminal power still on, per the grid subplot's silent window.
- **Getting down:** no airstairs or jet bridge crew. At ATL in the old prose Sam used the slide; here he can use a slide, or find a jet bridge he can't run alone. `[decide in prose]`
- **Staffing at 03:00:** an international airport runs overnight with security, ARFF, ramp and maintenance crews, and a few overnight cargo and FBO staff. Apply the 2:00 a.m. rule before placing bodies.
- **FBOs:** Signature, Shell AeroCentre, and Executive Flight Centre are all on the field `[verify current names]`.

---

## 8. Sam's return: PC-12, CYEG → KMSP → KPDK

**The airplane:** a Pilatus PC-12 NGX, registration C-GKPX `[verify not a real airframe]` (radio callsign "Charlie Golf Kilo Papa X-ray"; Sam never uses the Flight ID on the radio), six-seat charter interior, nose-out in an open FBO hangar at CYEG with half tanks (last journey-log entry Fort McMurray–Edmonton the afternoon before). Honeywell Primus Apex avionics, autothrottle, PT6A-67P `[verify]`. Fuel 2,704 lb (402 US gal) full; max range ~1,800 nm `[verify]`. Operator and registration are `[verify / decide]`; the group flies it from Section 6 on, so it must have a back row Tyler can sleep across (Section 7). Sam has ~800 hours in an earlier PC-12.

| Leg | Distance | Time (EDT) | Notes |
| --- | --- | --- | --- |
| CYEG → KMSP | ~940 nm | dep ~07:30 (05:30 MDT, dark) → arr ~10:45 (09:45 CDT) | ~3 hr 15 min at ~280 KTAS with a westerly tailwind component `[verify]`. Inside the 47E's range with reserves. |
| KMSP ground | | ~10:45–11:30 | Low pass over 30L, land, fuel from an FBO truck. A dead hub airport in daylight. |
| KMSP → KPDK | ~780 nm | dep ~11:30 → arr ~14:15 | ~2 hr 45 min. 121.5 and center frequencies on the hour and half hour. |

- **Flight ID:** before engine start Sam replaces the registration in the transponder's Flight ID field with **DAL27PDK** (letters and digits, 8 max). With no flight plan filed, trackers would otherwise show an unknown Canadian PC-12 going nowhere; the ID tells any watcher which airplane he came off of and where he's going. Exact entry on the Apex avionics `[verify]`. (From the author's `pc-12 to atl.md`; its hyphenated examples like `TO-KATL` likely can't be entered.)
- Range, fuel capacity, and burn: `[verify against the POH]`.
- From Edmonton to PDK direct is ~1,700 nm. That's past the NGX's practical range with reserves, so the Minneapolis stop is necessary, not optional.

---

## 9. What John sees (Section 1)

All from FlightAware's ADS-B data on John's screens:

- **~09:00:** DAL27's track: north-northwest out of Atlanta, steady to northern Saskatchewan, then a deliberate turn south, squawk 7700, a turn direct Edmonton, a descent, landed CYEG ~04:36. Stopped.
- **~09:00:** one new target that departed CYEG at ~07:30, the only takeoff he can find anywhere since 02:00. A PC-12, southeast-bound, Flight ID **DAL27PDK**.
- **~10:45:** it lands at Minneapolis. **~11:30:** it leaves Minneapolis, still southeast-bound, toward Atlanta.
- John's inference: the same pilot. Nobody else on the continent is moving.

Revised Day 0 times after the Edmonton change (working values):

| EDT | Beat |
| --- | --- |
| 09:10–12:41 | John stays home collecting data while power and connection hold; watches the Minneapolis stop from his desk. |
| 12:41 | John leaves for PDK, later than planned. |
| ~13:40 | John at the PDK FBO, on the radio, watching the track. |
| ~14:05 | Sam's call on 121.5; John answers. |
| ~14:15 | Sam lands at PDK; they meet on the ramp. |
| ~14:40 | Leave for Dunwoody. |
| ~15:00 | Sam finds Elena and Rosa. |
| ~15:35 | Leave for John's. |
| ~16:00 | Arrive at John's in Alpharetta. |
