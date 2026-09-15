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

Every flight in the story except Sam's loses its entire flight deck at 2:00 AM EDT the same way as everyone else — the same "the machine keeps going after everyone aboard it is gone" mechanic already established for Sam's A350 (Section 2, before his own survival) and Yohan's *Pacific Tender* (Section 9). The tool now models this:

- **Single-flight ghost mode** (toggle in the calculator panel): if the selected flight is genuinely airborne at the reference moment, it assumes the crew dies there and projects the aircraft holding cruise speed/heading in a straight extension of its great-circle route past the destination until fuel exhaustion (planned flight time + a flat 2-hour reserve, a simplification, not a real fuel calculation). Reports time-to-fuel-exhaustion, estimated crash position, and distance past the intended destination; also draws the drift path and crash marker on the map. Disabled for the Delta 27 preset, since Sam survives and turns back himself.
- **Ghost fleet panel**: automatically runs the same projection across all eighteen preset routes for whatever date is selected, showing which ones would genuinely be airborne at 2:00 AM EDT that night and, for each, its fuel-exhaustion time and estimated crash position — a ready-made list of "other planes that went down the same night," consistent with the book's established scarcity/no-clean-explanations rules (crash positions are illustrative, not something any character would know in-story).

Treat crash positions as narrative-grade, not aviation-accurate — real FMS/autopilot end-of-route behavior varies by aircraft and automation mode and isn't modeled; this is a straight-line simplification.

## Known limitations

- "Local time at position" is longitude/15° only — not real timezone boundaries.
- Nearest-field/region labels are straight-line nearest-neighbor against the ~55-airport reference list, not an aeronautical chart.
- Preset flight numbers/schedules are archetypes, not verified current airline timetables.
- Ghost-mode fuel endurance and post-event flight behavior are simplifications for narrative use, not real aircraft performance/automation modeling.
