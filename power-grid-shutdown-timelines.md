# Power Grid Shutdown Timelines — Hypothetical Scenario Reference

**Scenario parameters:** ~8,000 global survivors, ~350 in the US, zero human infrastructure input from hour zero, permanently. Event occurs 2:00 AM Eastern.

**Confidence level:** Low to moderate throughout. This is speculative scenario-modeling, not documented fact or prediction. The mechanisms cited below (regulatory requirements, engineering design limits, grid protection standards, historical blackout data) are real and sourced. The exact hour-by-hour sequencing for a scenario with zero human response anywhere on Earth is extrapolation.

## Revision history (read this first)

1. **Draft 1** assumed grid-wide demand instability was the primary trigger; nuclear SCRAM in "hours," gas/coal collapse in 1–5 days.
2. **Draft 2** reasoned zero humans means flat automated demand, removing that trigger, and pushed timelines out to weeks. **Overcorrection** — only addressed the demand side.
3. **Draft 3** corrected back toward hours-scale collapse using sourced hard limits (coal hopper capacity, NRC operator-presence requirements, anti-islanding standards, 2003 blackout cascade speed), landing on a rough 12–48 hour full-collapse estimate.
4. **Draft 4 (current)** refines the *sequence* within that window into a more mechanistically specific phase model, and corrects an overstatement in that phase model: a real cascading failure does not take down "100% of North America" simultaneously. North America's grid is physically divided into separate synchronous zones tied together only by asynchronous DC links, so a frequency collapse in one zone does not automatically propagate into the others. (https://www.energy.gov/oe/learn-more-about-interconnections) This draft also corrects an overstated claim about power plants needing "continuous manual tuning," and adds a practical "silent window" concept.

## Key mechanisms

**1. North America is not one grid — it's four, and they fail independently, not simultaneously.**
The Eastern Interconnection, Western Interconnection, Texas Interconnection (ERCOT), and Quebec Interconnection each operate as internally synchronized zones, connected to each other only via high-voltage DC ties or variable-frequency transformers that functionally isolate each zone's AC frequency from the others. (https://www.carboncollective.co/sustainable-investing/north-american-electric-reliability-corporation-nerc) A frequency collapse cascading through the Eastern Interconnection does not directly drag down ERCOT or the Western Interconnection at the same moment — each zone has its own fault timeline, generation mix, and collapse point. **This is the single biggest correction in this draft: nothing about this scenario happens "all at once" across the country.**

**2. Within a single interconnection, once frequency starts sagging, protective relays react in fractions of a second — but the sag itself takes time to build.**
NERC's under-frequency load-shedding threshold is 59.5 Hz for the first stage, with relay operating times on the order of a fraction of a second once that threshold is crossed. (https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-006-npcc-2.pdf) NERC also requires systems to stay within a 59.5–62.2 Hz operating band, with generator protective relays tripping outside it. (https://arxiv.org/pdf/2201.10505) So the fast part (relay cascade) is genuinely fast — seconds to a few minutes, consistent with the 2003 Northeast blackout, where the cascade from first major relay trip to 508 generating units offline took under seven minutes. (https://www.ferc.gov/sites/default/files/2020-05/09-12-03-blackout-sum.pdf) The slow part — how long it takes enough generation to drop out that frequency actually reaches that threshold in the first place — is the real bottleneck, and that's governed by the fuel/monitoring limits below, not by the relays themselves.

**3. Even in the 2003 precedent, with active human intervention trying to stop it, the cascade did not produce a total blackout — it left standing islands where generation and load happened to stay balanced.**
Roughly 5,700 MW of demand in western New York stayed powered throughout, sustained by generators near Niagara that weren't pulled into the cascade. (https://www.ferc.gov/sites/default/files/2020-05/09-12-03-blackout-sum.pdf) In a zero-human scenario nothing would slow the *cascade itself* down, but the same physics that produced an accidental surviving island in 2003 could produce similar small, unplanned pockets here — not by design, just by chance balance.

**4. Coal-fired boilers have a hard, engineered fuel-supply limit independent of demand.**
Active hopper/bunker fuel — separate from the larger yard stockpile — is sized for roughly 12–14 hours of full-load operation before requiring conveyor-fed replenishment, which itself requires human-operated equipment. (https://www.powerplantandcalculations.com/2020/05/calculation-of-coal-handling-plant-and.html)

**5. Correction: most power plants and gas compressor stations are already automated and unmanned in day-to-day operation — the dependency isn't "continuous manual tuning," it's a 24/7 remote team that responds to alarms an automated system can't resolve on its own.**
Most natural gas compressor stations run unmanned, monitored by off-site SCADA. (https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/8616005) Utilities keep a 24/7 SCADA team specifically to catch and correct the abnormalities automation alone can't fix. (https://www.pumpsandsystems.com/article/ensuring-flow-natural-gas-scada-systems/) Remove that team permanently, and any fault serious enough to need a judgment call — not routine operation — goes uncorrected and escalates toward a trip. This is a narrower, later-triggering failure mode than "constant tuning," and it means these plants could plausibly run fine for longer stretches *unless* a fault happens to occur, which is inherently unpredictable timing.

**6. Nuclear plants are the one generation type where continuous human presence is a hard regulatory requirement, not a convenience.**
10 CFR 50.54(m) and NRC guidance require a licensed senior operator continuously present in the control room with authority for prompt corrective action. (https://www.nrc.gov/docs/ML0823/ML082380236.pdf) The NRC has separately flagged cases where licensees inappropriately substituted automation for required operator actions. (https://www.nrc.gov/docs/ML0310/ML031050065.pdf) A routine transient a human would normally handle can escalate toward a trip without one.

**7. Grid-tied solar and wind disconnect within seconds of detecting grid instability — this is a deliberate safety feature, not a fallback advantage.**
IEEE 1547 and UL 1741 require inverters to detect an islanding condition and stop exporting within two seconds, to protect utility line workers from a live, de-energized-looking line. (https://solectria.com/blog/anti-islanding-protection-with-grid-tied-pv-inverters/) Utility-scale solar and wind are not a durable long-term source once the grid they're tied to destabilizes — they go down with the first wave, not after it.

---

## Hour-by-hour phase model (applies per interconnection, not simultaneously across all four)

### Phase 1 — Hours 0–2: the automated phase, and the "silent window"
Grid is fully energized at 60 Hz. Automated SCADA systems and mechanical fail-safes continue running exactly as designed. Background automated load continues uninterrupted: industrial machinery, refrigeration, HVAC on existing thermostat settings, streetlights, municipal water pressure, and — notably — automated, card-reading gas station pumps. **This is a real, if narrow, practical window:** for the first couple of hours, someone who realized what had happened could still use a working card-reading gas pump, working traffic lights, and pressurized municipal water before any of it degrades. It's not a long window, and it closes unevenly by location as Phase 2 begins.

### Phase 2 — Hours ~2–14: individual thermal plant tripping
No single grid-wide event yet — this is many small, independent failures accumulating, timed differently at every plant:
- Coal units begin hitting the 12–14 hour hopper hard limit (Key Mechanism 4).
- Gas-fired plants and pipeline segments begin tripping as isolated faults — fuel feed jams, pressure anomalies, unhandled software alarms — go uncorrected without a remote SCADA team to intervene (Key Mechanism 5). Timing here is inherently less predictable than the coal hopper limit, since it depends on *when* a fault happens to occur, not a fixed fuel supply.
- As individual thermal units drop out, remaining generators — including nuclear and hydro — automatically ramp up to cover the shortfall, which is standard grid behavior and does not itself indicate a problem yet.

### Phase 3 — Hours ~8–16: frequency sag and cascade, per interconnection
As enough thermal generation drops out within a given interconnection, that zone's frequency sags toward the 59.5 Hz UFLS threshold (Key Mechanism 2). Once crossed, protective relays at nuclear and hydro plants detect the instability and trip within seconds to minutes, not hours — consistent with the 2003 precedent. Losing that baseload generation pulls the rest of that interconnection down in a fast cascade, typically complete within minutes of the frequency threshold being crossed.

**Critically, this phase plays out separately in each of the four interconnections** (Eastern, Western, ERCOT, Quebec), each with its own generation mix, fault timing, and collapse point — not as one national event. A given US region's actual "lights out" moment is best estimated somewhere in the **hours 8–24 range**, with meaningful variation across regions rather than a single fixed hour, and with the small possibility of an accidental, unplanned surviving pocket per Key Mechanism 3.

### Phase 4 — Beyond hour ~24: reactor safety timeline (from each plant's individual trip point)
| Time from trip | Event |
|---|---|
| 0–72 hours | Emergency diesel generators / battery-backed systems (post-Fukushima "FLEX" upgrades) power reactor and spent fuel pool cooling — a designed coping window. |
| ~3–7 days | Generator fuel or battery reserves deplete. Active cooling stops for both reactor core (by now low-heat) and spent fuel pool (becomes the primary hazard). |
| ~10–21 days — **danger threshold** | Spent fuel pool water boils off without circulation; fuel rod exposure becomes plausible at plants with smaller or fuller pools. Exposed zirconium cladding can react with steam, generating hydrogen and releasing radioactive material — the Fukushima failure mode. |
| Months 2–12+ | Where exposure occurs, resulting contamination is a **regional, not global**, hazard — bounded to tens of miles based on Chernobyl/Fukushima precedent, with exclusion zones persisting years to decades. |

*Note:* this draft tightens the danger-threshold window to roughly 10–21 days (down from the "weeks 3–8" in Draft 3), reflecting a more specific — though still unsourced for the exact figure — estimate. Neither number is a documented spec; both are engineering-plausible ranges.

---

## Nuclear — regional concentration (US)
- **Heaviest:** Illinois (11 reactors, most of any state), plus Michigan, Wisconsin, Minnesota, Ohio.
- **Second heaviest:** Southeast — Georgia (Plant Vogtle, ~4.5 GW), South Carolina, North Carolina, Tennessee, Alabama, Florida.
- **Northeast/Mid-Atlantic:** Pennsylvania, New York, New Jersey, Connecticut.
- **Southwest:** Palo Verde, Arizona.
- **Sparse:** Columbia Generating Station, Washington — the only plant in the Pacific Northwest.
- **None:** Alaska, Hawaii, most of the Mountain West.

## Hydroelectric
Turbines can continue spinning as long as water flow and floodgate position remain stable, but most utility-scale hydro is grid-connected via the same protective relaying as fossil and nuclear plants, and deliberately switching to standalone "island" mode is normally an operator-initiated action. Absent that, hydro likely trips with the rest of its interconnection during Phase 3, not by default surviving it — *unless* a specific plant happens to already be electrically isolated. Regardless of electrical status, floodgates need active management during high-water events; without operators watching reservoir levels, a heavy rain event at any point afterward could cause overtopping or failure — an acute, sudden, downstream risk independent of the electrical timeline. Regional concentration: Pacific Northwest, Tennessee Valley, parts of the Northeast.

## Wind and Solar (utility-scale, grid-tied)
Disconnect within seconds of their local interconnection entering Phase 3, per Key Mechanism 7 — not a later fallback, regardless of their own mechanical or physical condition. Only genuinely off-grid or intentionally-islanded systems (rare at utility scale) escape this.

---

## Summary: realistic collapse estimate, corrected for "not all at once"

| Element | Estimate |
|---|---|
| Automated/"silent window" phase | Hours 0–2, uniform across all locations |
| Individual thermal plant faults begin | Hours 2–14, staggered and plant-specific (coal has a hard 12–14 hr ceiling; gas is fault-timing-dependent) |
| Frequency-driven cascade within a given interconnection | Hours 8–16 once triggered, minutes-scale once the threshold is crossed |
| Realistic full regional "lights out" | Hours 8–24, varying by interconnection — **not a single national hour** |
| Possible small surviving pockets | Rare, unplanned, accidental — based on 2003 precedent, not something to plan around |
| Nuclear danger threshold | Roughly 10–21 days from each plant's individual trip point, not from hour zero |

---

## Location-Specific Timelines: Raleigh NC, Tucson AZ, Reno NV, Alpharetta GA

### Generation mix by location (2025, EIA-sourced via Wikipedia power station list data only)

| Location | Utility | Gas | Nuclear | Coal | Solar | Other |
|---|---|---|---|---|---|---|
| Raleigh, NC | Duke Energy Progress | 40.0% | 31.8% | 13.2% | 9.42% | 3.43% hydro, 1.14% biomass, 0.69% wind |
| Tucson, AZ | Tucson Electric Power | 45.0% | 26.7% | 7.87% | 13.3% | 4.21% hydro, 2.69% wind, 0.18% biomass |
| Reno, NV | NV Energy | 50.5% | 0% | 5.72% | 30.1% | 8.56% geothermal, 4.16% hydro, 0.78% wind |
| Alpharetta, GA | Georgia Power | 38.6% | 34.7% | 13.6% | 7.64% | 3.19% biomass, 2.03% hydro, 0.21% petroleum |

All four are in the **Eastern Interconnection** except Reno, which is in the **Western Interconnection** — meaning Reno's collapse is mechanically independent of the other three, not just numerically different. Tucson is also Western Interconnection. Raleigh and Alpharetta are both Eastern Interconnection, so their collapses are more likely (though not guaranteed) to be linked to the same cascade if one starts nearby.

### Raleigh, NC (Eastern Interconnection)
Coal (13.2%) hits its 12–14 hour hopper limit first. Gas (40%) and nuclear (Shearon Harris, Brunswick, Robinson) trip during the Phase 3 cascade, hours 8–24. Solar (9.4%) disconnects within seconds of that cascade starting, not as a later fallback. Nuclear danger threshold ~10–21 days from trip point.

### Tucson, AZ (Western Interconnection)
Coal (7.87%, smallest of the four) hits its hopper limit first. Gas (45%, largest of the four) and Palo Verde trip during that interconnection's own Phase 3 cascade — mechanically separate from the Eastern locations. Solar (13.3%, highest of the four) disconnects with the cascade. Palo Verde is roughly 100 miles from Tucson, the closest nuclear proximity of the four.

### Reno, NV (Western Interconnection)
Coal (5.72%, smallest of the four) hits its hopper limit first. Gas (50.5%, over half of state supply) trips during the Western Interconnection's cascade — the same synchronous zone as Tucson, so these two could plausibly go down together, or at different times, depending on where the fault originates. Solar (30.1%) and geothermal (8.56%, grid-tied via conventional synchronous generation, also subject to loss-of-mains protection) both disconnect with the cascade. No nuclear generation in-state — no spent-fuel-pool hazard regardless of what happens elsewhere.

### Alpharetta, GA (Eastern Interconnection)
Coal (13.6%) hits its hopper limit first. Gas (38.6%) and Plant Vogtle trip during the Eastern Interconnection's cascade — the same synchronous zone as Raleigh. Solar (7.6%, smallest of the four) disconnects with the cascade. Vogtle is roughly 150 miles from Alpharetta; Georgia's 34.7% nuclear share is the highest of the four, the most concentrated nuclear risk on the list.

### Ranking: safest to riskiest (unchanged conclusion, refined mechanism)
1. **Reno, NV** — no nuclear hazard.
2. **Raleigh, NC** — moderate nuclear exposure.
3. **Tucson, AZ** — moderate-high nuclear exposure (closest to Palo Verde).
4. **Alpharetta, GA** — highest nuclear share, second-closest reactor proximity.

---

## Naval Station Mayport, FL (Eastern Interconnection)
**Utility:** JEA, under an intergovernmental agreement (approved October 2024) to serve Mayport and NAS Jacksonville. (https://www.jea.com/Pdf/Download/12884912627) As of 2021, JEA met 98% of demand with fossil fuels — coal/petcoke at Northside Generating Station, gas at Greenland Energy Center. (https://www.sierraclub.org/sites/default/files/2025-01/2530_clean-energy-is-cheaper-jea-report_02.pdf) No in-state nuclear, but JEA has historically purchased Vogtle power under contract, roughly 140 miles away. (https://jaxtoday.org/2025/08/26/jea-moves-to-pursue-1-57-billion-natural-gas-plant/)

Northside's coal units hit the 12–14 hour hopper limit first; Greenland's gas turbines trip during the Eastern Interconnection's Phase 3 cascade, the same synchronous zone as Raleigh and Alpharetta. No local nuclear hazard; indirect risk only via the Vogtle contract if Vogtle itself reaches its danger window. Naval Station Mayport maintains dedicated on-site backup diesel generators for mission-critical infrastructure, confirmed for its wastewater treatment plant; exact fuel reserve capacity is not public. (https://www.americanelectricofjacksonville.com/industrial-electrical-contracting/generators/) Ships in port carry their own onboard generators independent of shore power, as long as fuel remains and automated systems can run without crew — speculative, not a documented unattended-operation capability.

## Bangor, ME (Eastern Interconnection, via ISO New England)
**Utility:** Versant Power. 2025 mix: 37.5% gas, 19.4% wind, 17.8% hydro, 11.7% biomass, 10.4% solar, 1.13% petroleum, 0.22% coal. No in-state nuclear (Maine Yankee closed 1997); imports roughly a quarter of its electricity, mostly Canadian hydropower via ISO-NE. (https://en.wikipedia.org/wiki/List_of_power_stations_in_Maine)

Negligible coal share offline almost immediately once its tiny hopper reserve depletes. Gas (37.5%) trips during the Eastern Interconnection cascade. Wind and solar disconnect within seconds of that cascade, not later. No local nuclear hazard, though Bangor carries indirect exposure via New Hampshire's Seabrook Station through the shared interconnection. Hydro (17.8%, domestic and imported) is the one source that could plausibly persist, but only under the narrow already-islanded condition described above — not the default outcome.

---

## Open questions for further research
- Exact SCADA alarm-response and watchdog-acknowledgment intervals at real US plants are not public; the fault-timing estimates for gas specifically are the least precisely sourced part of this document.
- Which, if any, US nuclear or hydro plants are pre-configured for automatic islanding without operator action — the clearest exception to the fast-collapse timeline.
- Precise plant-by-plant battery/generator coping times and spent fuel pool water inventories (not publicly uniform).
- How often, historically, accidental surviving islands like the 2003 western New York pocket have occurred, and whether any pattern predicts where they'd form.
- Coal ash pond and tailings dam failure risk as a secondary, slower environmental hazard category.
