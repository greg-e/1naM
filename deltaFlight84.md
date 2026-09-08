# Flight Plan & Ground Staging Dossier

**Document Control:** Operational Flight Directive / Emergency Diversion Protocol  
**Date of Operation:** September 5th  
**Target Event:** Delta Air Lines Flight 84 (DAL84) Real-Time Telemetry Observation & Ground Staging  
**Tracking Reference:** `flightaware.com/live/flight/DAL84/history/20260905/0255Z/KATL/LFPG`

> **Manuscript note (read before quoting any of this in prose).** This is a real-world-grounded research artifact, not canon prose. Where it and the settled sections disagree, the sections win. Three deliberate adaptations already made against the raw operational assumptions:
> 1. **The surviving pilot is the Captain (Sam), not the First Officer.** The generic single-pilot-diversion literature assumes the junior pilot is the one left flying; here it is the Pilot-in-Command. Adjust any borrowed wording accordingly.
> 2. **All flight-deck deaths occur at exactly 2:00 AM Eastern**, simultaneous with the global event — no sealed-cabin delay, no toxicological in-flight cause. The First Officer and Relief Pilot die at the controls; the aircraft then flies itself, untouched, for nearly four hours.
> 3. **Landing field is Gander (CYQX) — but St. John's (CYYT) comes first, as a fogged-out attempt.** The Captain turns first for St. John's as the nearest suitable field, is waved off by a zero-zero coastal fog after two ILS approaches to minimums, and only then diverts ~100 nm inland to Gander, where he lands. This is *not* a reversion of the earlier "St. John's as destination" draft (see the retcon log in `1naM_Draft.md`) — the destination is still Gander. The St. John's leg was added on 2026-09-08 to satisfy a Section 1 timing constraint: John, on the ground in Georgia, must still be able to watch this landing on live FlightAware, and he can't be at his laptop before ~8:00 AM Eastern. The extra diversion pushes the Gander touchdown to ~8:25 AM Eastern. See the timing analysis in the retcon log.

---

## Part 1: Delta Flight 84 Emergency Flight Plan

### Flight Overview
* **Callsign:** Delta 84 (DAL84 / DL84)
* **Airframe:** Airbus A330-900neo
* **Powerplants:** 2 × Rolls-Royce Trent 7000-72 turbofans
* **Origin:** Hartsfield-Jackson Atlanta International Airport (KATL)
* **Destination (Planned):** Paris Charles de Gaulle Airport (LFPG)
* **Destination (Actual Divert):** Gander International Airport (CYQX)
* **Alternate Airport:** Halifax Stanfield International Airport (CYHZ)
* **Great-circle ATL→CDG:** ~3,900 nm / close to 9h scheduled block eastbound
* **Souls on board:** ~275 (261 passengers + 14 crew, including the Captain)
* **Avionics suite:** Dual FMS, triple ADIRU/IRS, FLS (FMS Landing System), ROPS (Runway Overrun Prevention System), BTV (Brake-to-Vacate) — the aircraft is capable of flying its full FMS route and a coupled approach with no pilot input.

### Why St. John's first, then Gander
The nearest suitable widebody field to the discovery point (~500 nm ENE of Newfoundland) is **St. John's (CYYT)**, on the eastern edge of the Avalon Peninsula — ILS-equipped, an ~8,500 ft primary runway, and roughly 430–450 nm from the aircraft (vs. ~500+ nm for Gander). Procedure and instinct both send the Captain there first. But St. John's sits right on the coast, and the Avalon grows dense **advection fog** off the cold Labrador Current for much of the year — on this morning it is effectively **zero-zero**, an unbroken deck sitting on the water. With no ATC, no ATIS, and no RVR readout, and unwilling to gamble a blind coupled autoland at an unmanned field while fuel and daylight remain, the Captain flies two ILS approaches to minimums, misses both, and diverts inland.

**Gander (CYQX)** is the designated widebody transatlantic diversion field for exactly this stretch of the North Atlantic Track system. Built in 1938 as a ferry-command staging airport, it sits in the interior of north-central Newfoundland — **~100 nm inland, up out of the marine fog layer** — and carries a **10,200 ft main runway (03/21) with full ILS**, more than an A330-900 at diversion weight needs. It is inside Gander Oceanic's own control area. The town it serves is small (~11,000), but the airfield and terminal were sized for a century of transatlantic traffic that has since moved on; it is the airport that absorbed 38 airliners and ~6,600 passengers during Operation Yellow Ribbon in 2001. Newfoundland's grid is overwhelmingly hydroelectric, so field lighting, ILS, and PCL are assumed live even with no staff present (see grid-shutdown reference doc).

---

## Part 2: Flight Crew Structure & Rest Rotations

Under FAA Part 117 for a long-haul transatlantic sector, DL84 carries a 3-pilot **augmented flight crew**. Every pilot holds an FAA ATP certificate with an A330 type rating and is qualified to operate the aircraft solo in all phases of flight.

### Flight Deck Roster
1. **Captain (PIC)** — Pilot-in-Command *(the survivor)*
2. **First Officer (SIC)** — Senior First Officer *(lost, at the controls)*
3. **Relief Pilot (SIC)** — fully qualified First Officer *(lost, at the controls)*

### In-Flight Rest Schedule (as actually flown)

Overhead Flight Crew Rest (OFCR) bunks above the forward cabin. This sector ran **two** rest periods, not three — the Relief Pilot rested first, then the Captain took a single extended block through to the planned pre-descent handoff. This is why, at 2:00 AM, **both other pilots were on the flight deck and the Captain was in the bunk.**

| Time Window (EDT) | Flight Deck at Controls | In Overhead Rest Bunk | Phase |
| :--- | :--- | :--- | :--- |
| 10:55 PM push / ~11:15 PM wheels-up | Captain + First Officer | *None* | Departure / climb |
| 11:15 PM – 1:15 AM | Captain + First Officer | Relief Pilot | Cruise Rest 1 |
| **1:15 AM – 5:45 AM** | **First Officer + Relief Pilot** | **Captain** | Cruise Rest 2 (extended) |
| 5:45 AM onward *(planned)* | All 3 pilots | *None* | Pre-descent / arrival |

---

## Part 3: Emergency Timeline & Diversion Sequence

All times EDT.

| Time | Event |
| :--- | :--- |
| **02:00:00** | The event. The First Officer and Relief Pilot are incapacitated at the controls, instantaneously, simultaneous with the global event. No alarm, no configuration change. Autopilot and autothrust remain engaged; the FMS continues to fly the filed North Atlantic routing toward LFPG. |
| 02:00 – 05:45 | The aircraft flies itself for **~3 h 45 m** with zero flight-deck input — altitude, heading, and speed held exactly as briefed. Cabin service crew also lost; no cabin call reaches the flight deck. |
| ~05:45 | The Captain's alarm wakes him for the planned handoff. He returns to the flight deck and discovers both pilots dead. Position: **~500 nm east-northeast of Newfoundland** (mid-ocean, roughly 49°N 042°W). Skin already cool — consistent with the elapsed time. |
| 05:45 – 06:05 | Captain confirms no pulse on either pilot, confirms the autopilot is still flying the aircraft correctly, and walks the cabin to establish scope. Confirms he is the only living person aboard. ~20 minutes total. |
| ~06:05 | Captain declares an emergency on guard and company frequencies out of procedure, expecting and receiving no reply. Carrier tone present on all frequencies; no voice response anywhere. Begins the turn — direct **St. John's (CYYT)**, the nearest suitable field. LFPG abandoned. |
| 06:05 – ~07:00 | Transit inbound to St. John's, ~430–450 nm, autopilot coupled, Captain briefing a single-pilot approach into an uncontrolled field. |
| ~07:00 – 07:40 | **St. John's is zero-zero.** The Avalon Peninsula is under a solid advection-fog deck (a routine Newfoundland condition, worst spring through fall) sitting on the water, top unbroken and plainly visible. No ATIS, no ATC, no RVR. Captain flies the ILS coupled to minimums twice, breaks out into nothing both times, flies the published missed each time. Declines to gamble a blind autoland at an unmanned field while fuel and daylight remain. Elects to divert inland. |
| ~07:40 – ~08:05 | Transit St. John's → **Gander (CYQX)**, ~100 nm west-northwest, climbing back out from under the marine layer. Autopilot coupled; third approach brief, aloud, solo. |
| ~08:05 – 08:25 | Arrival Gander area. **No ATC, no ATIS, no ground vehicle to sweep the runway.** Captain orbits the field once at altitude, flies one low pass along Runway 03/21 (gear up) to inspect the surface, then sets up and flies a full approach to landing — checklist aloud, solo. No go-around here: the diligence was done at St. John's, and the fuel state now has two diversions in it. Field lighting is on and cycling; runway is clear. |
| ~08:25 | Touchdown CYQX. Manual rollout and braking (ROPS/BTV available but not required). Taxi clear with no ground guidance; parks on a wide apron clear of the dark terminal. Extended shutdown. |
| Post-landing | No jetway, no ground power, no marshaller, no responders. Egress via the forward door emergency slide. |

---

## Part 4: Real-Time Telemetry Observation (Ground Staging)

### The diversion signature (what an outside observer sees)
On public ADS-B / FlightAware, DL84 is one of a handful of oceanic tracks still live after the event. Its track is distinguishable from the others by **deliberate, purposeful deviation**:
* Track line bends **north and west off the filed LFPG routing** at ~06:05, a clean commanded turn, not a drift.
* The track runs to the coast near **St. John's**, descends, flies two full ILS approaches — each ending in a published missed-approach climb-out — then **turns inland**. A machine holding its last instruction does not shoot an approach, miss, and re-route to a second airport.
* Ground speed and altitude step down in a normal descent profile on the **Gander** arrival — not a spiral, not a flat line.
* The position marker then **orbits a single airport, flies a straight low segment, breaks off, and re-approaches** — a pattern that reads as someone inspecting a field before committing, i.e. a conscious pilot, not a runaway autopilot or a coupled auto-land.

This is the tell: every other surviving track is ballistic (holding its last commanded state until fuel exhaustion). DL84 is being *flown*. The signature is unusually rich — a commanded turn, a fogged-out approach sequence at one field, a re-route, and an inspection pattern at a second — and an observer coming to live FlightAware after ~08:00 Eastern sees the whole history trail at once, plus the live Gander arrival and landing (~08:25). This is the same anomaly class that later flags Yohan's vessel on AIS in Section 15 — a machine doing something no automation would do on its own.

### Ground conditions at CYQX on arrival
* **Weather:** Gander VMC / marginal-VMC — the advection fog that closed the Avalon coast does not reach ~100 nm inland.
* **Airfield:** lit and operable (hydro grid), ILS and PCL live, runway physically clear.
* **ATC:** none. Gander tower and the Area Control Centre are unmanned.
* **Ground handling:** none. No power cart, no stairs, no fuel service on the apron.
* **Terminal:** dark, unlocked, unstaffed. Because the event struck at 02:00 — before the first early-morning departure bank would have drawn staff and passengers in — the terminal holds far fewer dead than a mid-day event would have left; those present are overnight security, cleaning, and the earliest-arriving travelers and ground staff for the morning's first flights.
* **GA / FBO apron (PAL Aviation handling):** light aircraft tied down for the night — several PC-12s, a couple of King Airs, and provincial water bombers parked for a fire season that will not be called. This is the pool the surviving Captain draws his onward aircraft from (Section 6); he is fixed-wing only, so the practical choice is King Air vs. PC-12.
