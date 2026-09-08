# Power Grid Shutdown Timelines — Hypothetical Scenario Reference

**Scenario parameters:** ~8,000 global survivors, ~350 in the US, zero human infrastructure input from hour zero.

**Confidence level:** Low to moderate throughout. This document is speculative scenario-modeling, not documented fact or prediction. Mechanisms described (SCRAM behavior, generator runtimes, spent fuel pool physics) are based on real, sourced engineering documentation. Timing estimates for a *fully unattended, zero-intervention* event are extrapolation, since no real-world case (including Fukushima) had zero human response at all sites simultaneously.

**Standing framework correction (applies to every section below):** Earlier drafts of this document assumed grid failure is driven mainly by chaotic human-demand swings colliding with automated supply — lights, HVAC, and businesses turning on and off unpredictably with no one managing the balance. With **zero humans present anywhere, ever**, that trigger doesn't exist. The only load on the grid becomes flat, predictable, automated draw: thermostats cycling, refrigeration compressors, data centers, water/wastewater pumps, streetlights on photocells. This is close to the most stable load profile a grid could have. The result: demand-driven collapse is no longer the primary failure mode. The new primary failure mode is **slow, uncorrected mechanical/maintenance drift** — clogged filters, fouled intake screens, sensor calibration drift, lubrication breakdown, ash/fuel handling backups — accumulating over days to weeks until an individual unit trips on its own protective systems, with no one to reset it or catch the fault early. Net effect: most timelines below are **longer** than earlier drafts stated, and the failure point is fuzzier and more staggered (each plant fails on its own maintenance clock, not simultaneously as a grid-wide event). This correction is speculative reasoning, not documented engineering fact, and confidence on the exact revised durations is low.

**Sources used:**
- U.S. NRC, "Fukushima Fact Sheet" — https://www.nrc.gov/reading-rm/doc-collections/fact-sheets/fs-japan.html
- U.S. EIA, Nuclear FAQ — https://www.eia.gov/tools/faqs/faq.php?id=207&t=21
- U.S. EIA, "US operates world's largest nuclear fleet" — https://www.eia.gov/todayinenergy/detail.php?id=65104
- NRC, List of Power Reactor Units — https://www.nrc.gov/reactors/operating/list-power-reactor-units
- EIA, state electricity profiles (Texas, Washington, Illinois, California) — https://www.eia.gov/electricity/state/

---

## 1. Nuclear

### Correction to initial assumption
Reactors do not SCRAM (auto-shutdown) the instant human input stops. Reactor control is highly automated and can maintain stable output on autopilot for a period. Earlier drafts assumed the trip trigger was grid-wide demand instability; under the automated-only-demand correction (see top of document), that trigger is largely absent, and the more likely trip cause becomes an individual, uncorrected mechanical or sensor fault reaching a protective setpoint — a slower, less predictable process, staggered plant by plant.

### Timeline (revised under automated-only-demand framework)

| Time | Event |
|---|---|
| Hours 0–24 | Plant continues running on automatic control against a flat, predictable, all-automated grid load — arguably the most stable operating condition the plant has ever seen. |
| Days 1–7 (revised, longer than earlier draft) | The likelier failure driver becomes an uncorrected individual fault — sensor drift, a sticking valve, a clogged intake screen — rather than grid-wide instability. Each plant is on its own maintenance clock, not a synchronized grid event. |
| Week 1–2 (revised) — **likely SCRAM window** | An accumulated fault crosses a protective threshold with no one to catch or reset it early, triggering an automatic trip. Reactor core stops fissioning; decay heat remains and requires active cooling. |
| From trip point +0–72 hours | Emergency diesel generators / battery-backed systems (required under post-Fukushima "FLEX" safety upgrades) power cooling pumps for both reactor core and spent fuel pool. This is a designed coping window, not indefinite, and it starts counting from whenever the actual trip happens — not from hour zero. |
| From trip point +3–10 days (extrapolated) | Generator fuel or battery reserves deplete with no one to refuel. Active cooling stops. Reactor core is by this point low-heat and less urgent; spent fuel pool becomes the primary hazard. |
| From trip point +10–30 days (extrapolated) | Spent fuel pool water heats toward boiling without circulation; evaporation accelerates once boiling begins. Water level drops toward top of fuel racks. |
| From trip point +weeks 3–8 (extrapolated) — **danger threshold** | Fuel rod exposure becomes plausible at plants with smaller pools or fuller pools nearing capacity. Exposed zirconium cladding can react with steam, generating hydrogen and releasing radioactive material — the Fukushima failure mode. Not simultaneous across all 54 plants; staggered both by each site's battery/generator capacity *and* by when each plant's individual trip occurs under this revised framework. |
| Months 2–12+ from trip point | For any plant that reaches fuel exposure, resulting contamination is a **regional, not global**, hazard — bounded to tens of miles based on Chernobyl/Fukushima precedent. Affected zones likely remain hazardous for years to decades. |

### Regional concentration (US)
- **Heaviest:** Illinois (11 reactors, most of any state), plus Michigan, Wisconsin, Minnesota, Ohio — highest density of long-term pool risk in one region.
- **Second heaviest:** Southeast — Georgia (Plant Vogtle, largest US plant at ~4.5 GW), South Carolina, North Carolina, Tennessee, Alabama, Florida.
- **Northeast/Mid-Atlantic:** Pennsylvania, New York, New Jersey, Connecticut — high plant density per square mile.
- **Southwest:** Palo Verde, Arizona (largest US plant before Vogtle's expansion; uses treated wastewater, not a river/ocean, for cooling).
- **Sparse:** Columbia Generating Station, Washington — the only nuclear plant in the entire Pacific Northwest.
- **None:** Alaska, Hawaii, and most of the Mountain West.

---

## 2. Natural Gas

| Time | Event |
|---|---|
| Hours 0–24 | Combustion control, pressure regulation, and safety interlocks are automated and continue running against flat, predictable automated demand. Gas peaker plants (built specifically for demand spikes) likely see reduced or no dispatch at all, since the demand spikes they exist for no longer occur — baseload combined-cycle gas plants keep running. |
| Days 1–5 (revised, longer than earlier draft) | Compressor stations along pipelines (needed to maintain delivery pressure) are also automated and can run unattended for a period, but accumulate the same uncorrected-fault risk as any unattended industrial system — filter fouling, minor leaks, sensor drift. |
| Days 5–10 (revised) — **grid contribution lost** | Natural gas generation, the largest single source in gas-heavy states, goes offline as individual compressor or plant faults accumulate past safety thresholds. No prolonged danger phase — failure mode is loss of power, not a hazard like nuclear. |

**Regional concentration:** Texas (roughly half its power from gas), Louisiana, Pennsylvania, Ohio.

---

## 3. Coal

| Time | Event |
|---|---|
| Hours 0–48 | Automated stoking, cooling water intake screening, and emissions controls run against a flat, stable automated load. Baseload coal plants (unlike gas peakers) keep running much as they normally would overnight. |
| Days 2–10 (revised, longer than earlier draft) | Fuel handling and ash removal are semi-automated but accumulate uncorrected faults over time — clogged screens, ash buildup, conveyor jams — without a person to clear them. Even with 30+ days of on-site coal reserves typical at many plants, these mechanical faults are likelier to cause a trip before fuel actually runs out. |
| Days 7–14 (revised) — **grid contribution lost** | Coal generation offline as accumulated faults cross safety thresholds. No prolonged hazard phase; primary risk is regional, from coal ash pond containment structures losing any active water management, a slower-developing environmental (not acute life-threatening) issue over months to years. |

**Regional concentration:** West Virginia, Wyoming, Kentucky, Missouri, Indiana.

---

## 4. Hydroelectric

| Time | Event |
|---|---|
| Hours 0–ongoing | Turbines can continue spinning passively as long as water flow and floodgate position remain stable — no fuel needed, so this is the most likely source to persist without intervention under stable water conditions. |
| Variable, weather-dependent — **danger threshold** | The wildcard: floodgates need active management during high-water/flood events. Without operators watching reservoir levels, a heavy rain event anywhere from days to months after shutdown could cause a dam to overtop or fail. This is a **structural failure risk to people downstream**, not a slow contamination risk — it is acute and geographically sudden if it happens. |
| Indefinite absent flood conditions | Under normal/dry conditions, hydro could remain the single longest-functioning grid-scale power source with zero human input. |

**Regional concentration:** Pacific Northwest (Washington generates the majority of its power from hydro; also Oregon), Tennessee Valley (Southeast), parts of the Northeast.

---

## 5. Wind

| Time | Event |
|---|---|
| Days 1–7 (revised, longer than earlier draft) | With demand-driven grid instability largely removed, turbines can likely keep generating into a stable, flat-demand grid for longer than originally estimated. Automated brake/feathering systems still engage in high wind or fault conditions to prevent mechanical damage — turbines are designed to lock into a safe, stationary position rather than run uncontrolled. |
| Week 1–3 (revised) — **grid contribution lost** | Turbines stop producing usable power as individual mechanical faults (bearing wear, yaw motor issues, blade icing in some climates) accumulate without maintenance, or as connected grid infrastructure elsewhere fails and disconnects them. This is a passive, non-hazardous shutdown. No danger phase. |

**Regional concentration:** Texas (largest wind generation by far), Iowa, Oklahoma, Kansas.

---

## 6. Solar (utility-scale)

| Time | Event |
|---|---|
| Indefinite | No fuel, no water intake, minimal moving parts. Panels continue producing during daylight as long as wiring and inverters remain physically intact. |
| Years (slow degradation) | Primary failure mode is inverter electronics degrading over years, not days — this is the most durable grid-scale source in the scenario and carries no hazard phase at all. |

**Regional concentration:** California (largest by far), Texas, North Carolina, Arizona, Nevada.

---

## Summary ranking: time to shutdown, fastest to slowest (revised under automated-only-demand framework)

1. Natural gas — days 5–10
2. Coal — days 7–14
3. Nuclear (active generation) — SCRAM likely week 1–2 (not hours), then **danger phase weeks 3–8 from that trip point**, i.e. roughly week 4–10 from event start
4. Wind — week 1–3 (non-hazardous)
5. Hydroelectric — days to indefinite, with conditional flood/dam-failure risk
6. Solar — indefinite, no hazard phase

## Summary ranking: life-threatening danger, if any

1. **Nuclear spent fuel pools** — roughly week 4–10 from event start under the revised framework, regional contamination, years-to-decades exclusion zones. Highest-severity, most geographically concentrated hazard in the scenario.
2. **Hydroelectric dam failure** — acute, sudden, conditional on rainfall/flood timing; downstream-only.
3. All other sources (gas, coal, wind, solar) — no direct life-threatening hazard from the shutdown itself; risk is secondary (loss of power for medical equipment, refrigeration, heating/cooling, water treatment).

**Note on this revision:** these are wide, low-confidence bands, not firm numbers. The tradeoff behind the longer timelines: automated systems left completely uncorrected for weeks are also accumulating small faults the whole time, so "longer" does not mean "safer," just "the failure clock moved from hours to weeks and got less predictable."

## 7. Location-Specific Timelines: Raleigh NC, Tucson AZ, Reno NV, Alpharetta GA

State-level generation mix data (2025 full-year, EIA-sourced via Wikipedia power station lists). Confidence: high on percentages, moderate on how well state-wide mix represents a specific city's actual grid draw, since regional grids pool resources across state lines.

### Generation mix by location

| Location | Utility | Gas | Nuclear | Coal | Solar | Other |
|---|---|---|---|---|---|---|
| Raleigh, NC | Duke Energy Progress | 40.0% | 31.8% | 13.2% | 9.42% | 3.43% hydro, 1.14% biomass, 0.69% wind |
| Tucson, AZ | Tucson Electric Power | 45.0% | 26.7% | 7.87% | 13.3% | 4.21% hydro, 2.69% wind, 0.18% biomass |
| Reno, NV | NV Energy | 50.5% | 0% | 5.72% | 30.1% | 8.56% geothermal, 4.16% hydro, 0.78% wind |
| Alpharetta, GA | Georgia Power | 38.6% | 34.7% | 13.6% | 7.64% | 3.19% biomass, 2.03% hydro, 0.21% petroleum |

Sources: https://en.wikipedia.org/wiki/List_of_power_stations_in_North_Carolina · https://en.wikipedia.org/wiki/List_of_power_stations_in_Arizona · https://en.wikipedia.org/wiki/List_of_power_stations_in_Nevada · https://en.wikipedia.org/wiki/List_of_power_stations_in_Georgia_(U.S._state)

### Raleigh, NC

| Time | Event |
|---|---|
| Days 5–10 (revised) | Gas share (40%, largest single source) fails as compressor stations and combustion controls accumulate uncorrected faults. |
| Week 1–2 (revised) | Nuclear plants (Shearon Harris, Brunswick, Robinson) trip — likelier from an accumulated individual fault than grid-wide instability, since automated-only demand is stable. |
| Days 7–14 (revised) | Coal share (13.2%) offline as fuel handling/ash management faults accumulate. |
| Trip point +3–10 days | Nuclear generator/battery reserves deplete; spent fuel pools begin unmonitored heating. |
| Trip point +weeks 3–8 (roughly week 4–10 from event start) — **danger window** | Potential fuel exposure at NC's nuclear sites. |
| Week 2+ | Remaining ~9.4% solar share, plus any surviving hydro/biomass, is the only output left — contingent on local wiring staying intact and isolated from the wider collapsing grid. |

### Tucson, AZ

| Time | Event |
|---|---|
| Days 5–10 (revised) | Gas share (45%, largest of all four locations) fails as accumulated faults cross safety thresholds. |
| Week 1–2 (revised) | Palo Verde Nuclear Generating Station trips — from an accumulated fault, not grid-wide instability. |
| Days 7–14 (revised) | Coal share (7.87%) offline. |
| Trip point +3–10 days | Palo Verde's cooling reserves deplete. |
| Trip point +weeks 3–8 (roughly week 4–10 from event start) — **danger window** | Palo Verde is roughly 100 miles from Tucson — the closest proximity to a nuclear hazard of the four locations. |
| Ongoing | 13.3% solar share (highest of the four) is Tucson's strongest long-term asset; Southwest climate maximizes solar reliability. |

### Reno, NV

| Time | Event |
|---|---|
| Days 5–10 (revised) | Gas share (50.5%, over half of state supply) fails as accumulated faults cross safety thresholds — largest single-source collapse of the four locations. |
| Days 7–14 (revised) | Coal share (5.72%, smallest of the four) offline. |
| No nuclear phase | Nevada has zero nuclear generation — this is the only location on the list with no spent-fuel-pool hazard at all, and therefore the only one unaffected by the nuclear-timeline revision entirely. |
| Ongoing | Solar (30.1%) plus geothermal (8.56%) together approach 40% of supply. Both are low-maintenance and not fuel-delivery-dependent; geothermal runs on continuous underground heat, unlike weather/daylight-dependent solar. This is the strongest long-term power position of the four locations. |

### Alpharetta, GA

| Time | Event |
|---|---|
| Days 5–10 (revised) | Gas share (38.6%) fails as accumulated faults cross safety thresholds. |
| Week 1–2 (revised) | Plant Vogtle trips — likelier from an accumulated fault than grid-wide instability, given stable automated-only demand overnight and beyond. |
| Days 7–14 (revised) | Coal share (13.6%) offline. |
| Trip point +3–10 days | Vogtle's cooling reserves deplete. |
| Trip point +weeks 3–8 (roughly week 4–10 from event start) — **danger window** | Vogtle is roughly 150 miles from Alpharetta. Georgia's 34.7% nuclear share is the highest of the four locations, making this the most concentrated nuclear risk on the list. |
| Ongoing | Only ~7.6% solar share remains — the smallest renewable buffer of the four locations. |

### Ranking: safest to riskiest (this scenario)

1. **Reno, NV** — no nuclear hazard; strongest solar/geothermal durability.
2. **Raleigh, NC** — moderate nuclear exposure; moderate solar.
3. **Tucson, AZ** — moderate-high nuclear exposure (closest proximity to Palo Verde); best solar share of the four.
4. **Alpharetta, GA** — highest nuclear share and second-closest reactor proximity; weakest solar buffer.

---

## 8. Naval Station Mayport, FL

**Utility:** JEA (Jacksonville Electric Authority), a municipal utility serving Duval, Clay, Nassau, and St. Johns counties. JEA holds an intergovernmental agreement (approved October 2024) with the Department of the Navy to provide utility services directly to both Naval Air Station Jacksonville and Naval Station Mayport. (https://www.jea.com/Pdf/Download/12884912627)

### Generation mix
JEA is unusually fossil-fuel-heavy compared to the Florida state average: as of 2021, JEA met 98% of demand with fossil fuels, primarily coal and petroleum coke at the Northside Generating Station (two large units, ~1,300 MW combined nameplate), natural gas turbines at the Greenland Energy Center (~350–380 MW), and one oil-fired peaking plant used only for backup. (https://www.sierraclub.org/sites/default/files/2025-01/2530_clean-energy-is-cheaper-jea-report_02.pdf) JEA has no nuclear generation of its own, but has historically purchased power under contract from Georgia Power's Plant Vogtle — meaning a portion of JEA's supply carries indirect exposure to the Vogtle spent-fuel-pool hazard described in Section 1, despite the reactor sitting roughly 140 miles away in Georgia. (https://jaxtoday.org/2025/08/26/jea-moves-to-pursue-1-57-billion-natural-gas-plant/)

### Timeline

| Time | Event |
|---|---|
| Days 5–10 (revised) | JEA's gas turbines (Greenland Energy Center) fail as accumulated faults cross safety thresholds, same mechanism as any gas plant. |
| Days 7–14 (revised) | Coal/petcoke units at Northside Generating Station go offline as fuel handling and ash management faults accumulate. |
| No local nuclear phase | JEA operates no nuclear plant directly, so there is no on-site spent-fuel-pool hazard at Mayport itself. |
| Trip point +weeks 3–8 (roughly week 4–10 from event start) | Indirect nuclear risk only via JEA's Vogtle power purchase contract — if Vogtle's pools reach the danger window described in Section 1, it affects JEA's contracted supply, not a hazard physically located at Mayport. |
| Base-specific factor | Naval Station Mayport and NAS Jacksonville maintain dedicated on-site backup diesel generators for mission-critical infrastructure — confirmed for the base's wastewater treatment plant, among other facilities. (https://www.americanelectricofjacksonville.com/industrial-electrical-contracting/generators/) Military installations often carry larger on-site fuel reserves than civilian facilities, though exact reserve capacity for Mayport specifically is not public information — flagged as unknown rather than assumed. |
| Ships in port | Navy vessels berthed at Mayport carry their own onboard gas-turbine or diesel-electric generators, independent of shore power, as long as fuel remains and automated engineering systems can run without crew — a factor with no clear civilian equivalent elsewhere in this document. This is speculative extrapolation, not a documented capability for unattended operation. |

### Ranking placement
Mayport sits between Reno (no nuclear hazard at all) and Alpharetta (highest direct nuclear share) — no on-site reactor, but a fossil-fuel-dominant grid that fails fast, partially offset by base-level backup generation and shipboard power that have no equivalent at the civilian locations already in this document.

---

## Open questions for further research
- Whether any US nuclear plants are capable of "islanding" (disconnecting from grid, self-powering their own site) — would be the outlier case for extended unattended safe operation.
- Precise plant-by-plant battery/generator coping-time specifications (varies by plant, not publicly uniform).
- Coal ash pond and tailings dam failure risk as a secondary, slower environmental hazard category.
