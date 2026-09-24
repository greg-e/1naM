# Global flight traffic model — "The 2:00 AM Sky"

Interactive tool: https://claude.ai/artifact/QjT5DAQGHAFGTdJiUwvH5w

A scenario calculator for placing any real-world-style flight's phase (pre-departure / climb / cruise / descent / arrived) and position at exactly 2:00 AM EDT (06:00 UTC) on any date — built to ground future flights the way `DAL27_Emergency_Turnback_Dossier.pdf` grounded Sam's turnback in Section 2. Give it a departure airport, arrival airport, aircraft type, and local departure time, and it computes where that aircraft actually is — position, altitude, speed, day/night, nearest field — at the story's fixed moment.

## Why it isn't a literal historical data pull

The original ask was to use real historical ADS-B data for a global 2:00 AM EDT snapshot. That turned out to be infeasible, and the gap is worth recording so it isn't re-attempted the same way later:

- OpenSky Network's free REST API serves only **live** state vectors to anonymous callers (the `time` parameter is ignored for anonymous users; authenticated users get back to one hour). Bulk historical queries for an arbitrary past date require their Trino/MinIO interface, which is gated to registered universities, governments, and aviation authorities — not available here.
- The story's date (September 5, 2028) doesn't exist yet regardless, so no historical pull could ever be "real" for that specific night. Any tool has to be a model, not a recording.

## What the tool actually does instead

- **Real live snapshot as calibration texture.** One genuine global ADS-B snapshot was pulled live from OpenSky (8,529 real aircraft, captured 2026-09-15 01:02 UTC / 2026-09-14 21:02 EDT). A curated sample of 63 real aircraft (real callsigns, positions, altitudes, speeds, on-ground status) across the Americas, Europe/Africa, and Asia-Pacific is embedded in the tool as a reference table and optional map overlay — genuine data, but a texture/calibration layer, not the scenario itself.
- **A deterministic scenario engine built on real facts:** ~55 real major airports with real coordinates and September-correct UTC/DST offsets, published cruise-speed/altitude specs for ten real aircraft types, great-circle routing (haversine distance + spherical interpolation), a three-phase climb/cruise/descent timing model, and a real solar-declination/equation-of-time calculation that draws the actual day/night terminator for the chosen date.
- **Eighteen preset routes**, including Delta 27 itself (flagged with a canon note: the tool shows the straight-through hypothetical to Seoul for distance/position reference only — Sam's actual flight turns back at 3:30, per Section 2) and one PC-12 mentorship leg (PDK→HSV). The other presets pair real airlines with real long-haul corridors and realistic aircraft/departure-time combinations — same caveat as the DAL27 dossier: real for mechanics and timing, not verified current timetables. Treat any specific flight number in a preset as illustrative, not sourced.

## Using it for a scene

Pick a preset or set a custom route/aircraft/departure time, leave the reference clock at 2:00 AM EDT, and the readout gives phase, lat/lon, altitude, ground speed, elapsed/remaining time, distance remaining, an approximate local time (by longitude, not a real timezone boundary), day/night, and the nearest reference airport. Good for answering "where would a flight departing X for Y at approximately Z o'clock actually be when the event happens" before writing it into a scene.

## Ghost mode — autopilot after the event

Every flight in the story except Sam's loses its entire flight deck at 2:00 AM EDT the same way as everyone else — the same "the machine keeps going after everyone aboard it is gone" mechanic already established for Sam's A350 (Section 2, before his own survival) and Johan's *Pacific Tender* (Section 9). The tool now models this:

- **Single-flight ghost mode** (toggle in the calculator panel): if the selected flight is genuinely airborne at the reference moment, it assumes the crew dies there and projects the aircraft holding cruise speed/heading in a straight extension of its great-circle route past the destination until fuel exhaustion (planned flight time + a flat 2-hour reserve, a simplification, not a real fuel calculation). Reports time-to-fuel-exhaustion, estimated crash position, and distance past the intended destination; also draws the drift path and crash marker on the map. Disabled for the Delta 27 preset, since Sam survives and turns back himself.
- **Ghost fleet panel**: automatically runs the same projection across all eighteen preset routes for whatever date is selected, showing which ones would genuinely be airborne at 2:00 AM EDT that night and, for each, its fuel-exhaustion time and estimated crash position — a ready-made list of "other planes that went down the same night," consistent with the book's established scarcity/no-clean-explanations rules (crash positions are illustrative, not something any character would know in-story).

Treat crash positions as narrative-grade, not aviation-accurate — real FMS/autopilot end-of-route behavior varies by aircraft and automation mode and isn't modeled; this is a straight-line simplification.

## Snapshot: who's airborne at 2:00 AM EDT, September 5, 2028 (a Tuesday)

Computed straight from the tool's own engine (bug fix below applied). Fourteen of the eighteen preset flights are genuinely in the air at the reference moment; the other four (ANA NRT→LAX, Delta's LAX→JFK transcon redeye, Air New Zealand AKL→JFK, and John's PC-12 PDK→HSV leg) are excluded here because they either haven't departed yet or have already landed by 2:00 AM EDT that night.

"Likely on autopilot" reflects real airline ops (cruise is essentially always autopilot-coupled; climb is coupled by these altitudes in practice) *and* the story mechanic that everyone aboard except Sam's flight deck dies at this exact instant, at which point nothing disengages it either way.

| Flight | General direction | Altitude | Time remaining to destination | Likely on autopilot when the event hits |
|---|---|---|---|---|
| Delta 27 (ATL→Seoul) | NNW, polar-ish route toward Seoul | FL390 | 10h 47m | **Exception** — Sam is alive and conscious at the controls; doesn't find the dead flight deck until ~3:00 AM EDT |
| British Airways (JFK→LHR) | NE, transatlantic to London | FL350 | 2h 51m | Very high — cruise |
| Delta (JFK→CDG) | NE, transatlantic to Paris | FL370 | 2h 53m | Very high — cruise |
| United (IAD→FRA) | NE, transatlantic to Frankfurt | FL350 | 4h 32m | Very high — cruise |
| Virgin Atlantic (JFK→LHR) | NE, transatlantic to London | FL390 | 3h 17m | Very high — cruise |
| Korean Air (JFK→ICN) | NNW, polar route toward Seoul | ~25,700 ft, still climbing | 12h 13m | High — most crews couple the autopilot well before this altitude |
| Singapore Airlines (SIN→JFK) | N, polar route toward New York | FL390 | 3h 03m | Very high — cruise |
| Emirates (DXB→JFK) | NW, toward New York | FL350 | 11h 15m | Very high — cruise |
| Qatar Airways (DOH→JFK) | NW, toward New York | FL350 | 4h 02m | Very high — cruise |
| Qantas (LAX→SYD) | WSW, Pacific crossing toward Sydney | ~38,000 ft, near top of climb | 13h 10m | High — essentially at cruise altitude already |
| LATAM (GRU→MIA) | NW, toward Miami | FL350 | 3h 34m | Very high — cruise |
| American (JFK→EZE) | SSE, toward Buenos Aires | FL350 | 5h 24m | Very high — cruise |
| FedEx cargo (MEM→CDG) | NE, transatlantic to Paris | FL330 | 3h 49m | Very high — cruise |
| Ethiopian (ADD→IAD) | NW, toward Washington DC | FL390 | 3h 42m | Very high — cruise |

## Bug fixed while building this snapshot

The FedEx preset was labeled "MEM→CDG" but its departure airport was wired to Houston (`KIAH`) rather than Memphis — `KMEM` (Memphis Intl, 35.0424, -89.9767) didn't exist in the airport table yet. Added it and repointed the preset. If you pulled numbers from this tool for that flight before 2026-09-18, re-check them.

## Global sky census — statistical model (not named flights)

The 18-preset table above is illustrative, not a census — real global air traffic runs **~10,000–15,000 aircraft airborne simultaneously worldwide** at any given moment (flight-tracker networks; peaks above 24,000 in the busiest overlap hours). This section models that full picture quantitatively by region, for 2:00 AM EDT / 06:00 UTC on Tuesday, September 5, 2028.

**Method:** each region's daily flight-departure volume is converted to a typical simultaneous-airborne count via Little's Law (airborne ≈ daily departures × average flight duration ÷ 24), scaled to a 12,000-aircraft global daily-average anchor, then adjusted by a generic diurnal traffic curve evaluated at that region's **local time** at the reference moment — this is the whole point of the exercise: 2:00 AM EDT is only quiet in the Americas. Everywhere else is somewhere in its own business day.

| Region | Basis | Local time at 06:00 UTC | Day/night | Share of global traffic | Airborne now | Cruise / Climb / Descent | Likely on autopilot |
|---|---|---|---|---|---|---|---|
| North America | Sourced (FAA ~44,360/day) + estimated Canada/Mexico/Caribbean | 01:00 | Night (deep trough) | 39.2% | **~2,565** | 1,649 / 458 / 458 | 94.0% |
| Europe | Sourced (EUROCONTROL, ~30,474/day, 2025 avg) | 08:00 | Day (morning rush) | 22.4% | **~3,542** | 2,144 / 699 / 699 | 93.5% |
| China (mainland) | Sourced (~5.37M flights/yr, 2025) | 14:00 | Day (afternoon) | 10.8% | **~1,458** | 911 / 273 / 273 | 93.8% |
| Rest of Asia (Japan/Korea/India/SE Asia) | Estimated | 12:00 | Day (midday) | 14.7% | **~2,069** | 1,364 / 353 / 353 | 94.2% |
| Middle East | Estimated (small count, long-haul-hub heavy) | 10:00 | Day (mid-morning) | 3.3% | **~446** | 385 / 30 / 30 | 97.1% |
| Africa | Estimated | 08:00 | Day (morning) | 2.1% | **~325** | 219 / 53 / 53 | 94.4% |
| Latin America (South America) | Estimated | 02:00 | Night (trough) | 5.1% | **~307** | 192 / 57 / 57 | 93.8% |
| Oceania (Australia/NZ/Pacific) | Estimated | 16:00 | Day (afternoon) | 2.4% | **~331** | 228 / 52 / 52 | 94.6% |
| **Global total** | | | | 100%* | **~11,043** | 7,092 / 1,975 / 1,975 | ~94.2% |

*Regional daily-departure estimates sum to ~136,000/day against a real sourced global figure of ~109,000/day (OAG, 2025-26) — the overshoot is expected: these are loosely-bounded regions (e.g., an international flight can register in more than one), and everything past the three sourced anchors (North America, Europe, China) is an order-of-magnitude estimate, not a reconciled census. Treat the "share" column as relative ordering, not a precise partition.

**The non-obvious finding:** despite North America being the single largest aviation market (39% of estimated global volume), **more aircraft are actually airborne over Europe than over North America at 2:00 AM EDT** — because Europe is in its morning rush while the Americas are at their overnight nadir. Latin America, in its own 2:00 AM local trough, is the only other region running quiet. Everywhere else — all of Asia, the Middle East, Africa, Oceania — is somewhere in full daytime operation. This is exactly why the book's survivor distribution (higher density in Canada, South America, Europe, and Asia per the core premise) doesn't map cleanly onto "who was flying" — the two are separate axes, and this table is the one to consult if a future scene needs "how much of the world's aviation was airborne, and where" rather than "was this one specific flight in the air."

**Autopilot-likelihood method:** cruise segments are modeled at 99% autopilot-coupled (real airline ops), climb/descent segments at 85% (typically coupled shortly after takeoff/before short final) — blended per region by its cruise-vs-climb/descent time split, which itself depends on average flight duration (short-haul-heavy regions spend proportionally more time in climb/descent than long-haul-hub regions like the Middle East).

**What this model deliberately doesn't do:** it isn't drawn from a real schedule database (OAG/Cirium access isn't available here) — it's Little's-Law-and-diurnal-curve reasoning anchored to real, sourced totals where they exist. Treat it as good for order-of-magnitude questions ("roughly how many planes, roughly where"), not for picking a specific real flight — use the named-preset table above or the interactive tool's custom-route mode for that.

## Known limitations

- "Local time at position" is longitude/15° only — not real timezone boundaries.
- Nearest-field/region labels are straight-line nearest-neighbor against the ~55-airport reference list, not an aeronautical chart.
- Preset flight numbers/schedules are archetypes, not verified current airline timetables.
- Ghost-mode fuel endurance and post-event flight behavior are simplifications for narrative use, not real aircraft performance/automation modeling.
