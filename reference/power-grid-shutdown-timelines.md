# Power Grid Shutdown Timelines — Hypothetical Scenario Reference

**Scenario parameters:** ~8,000 global survivors, ~350 in the US, zero human infrastructure input from hour zero, permanently. Event occurs 2:00 AM Eastern.

**Status — reviewed November 7, 2026:** The old hour-by-hour forecast is withdrawn. Its two-hour grace period, universal coal limit, frequency cliff and regional blackout window were scenario assumptions, not established engineering limits. Keep chosen fictional outages, including John's house at 00:50 September 6 and Ediz Hook's dependable independent power; do not use these estimates to predict them.

Current source checks and limits: [grid/network research](2026-11-07_grid-and-network_dependencies-observations-not-countdowns.md). Nuclear estimates below are superseded by the [plant-specific nuclear research](2026-11-07_nuclear-risk_first-evening-relocation-research.md) and revised Section 5. The dated research uses a 2026 baseline, not verified 2028 configurations.

## Revision history (historical scenario provenance)

1. Draft 1 assumed demand instability, nuclear trips in hours and gas/coal collapse in 1–5 days.
2. Draft 2 assumed flat automated demand and extended runtimes to weeks. Human absence does not freeze the load profile.
3. Draft 3 treated bunker capacity, staffing rules, anti-islanding and historical cascade speed as clocks, producing a 12–48-hour estimate. That inference was not validated.
4. Draft 4 split the scenario by interconnection and introduced the 0–2-hour "silent window," 2–14-hour plant-fault phase and 8–24-hour regional forecast. These remain provenance, not current predictions.
5. Current use: observations, source coverage and design-specific dependencies, with no supported outage countdown.

## Key mechanisms — not elapsed-time predictions

**1. Separate frequency-balancing systems.** Eastern, Western, ERCOT and Quebec are the relevant major US/Canadian interconnections, not every North American electrical system. A disturbance need not cause simultaneous continental failure; fuel, weather and communications dependencies can still cross boundaries. [NERC, Balancing and Frequency Control](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/rs/reference_document_nerc_balancing_and_frequency_control.pdf)

**2. Automatic control and protection do useful work.** Governors provide primary response; automatic generation control helps balance participating resources. Available reserve, measurements and communications limit what they can do. Voltage/reactive-power control is a different job, not irrelevant to stability. Underfrequency load shedding can preserve remaining service; it is not synonymous with generator trips or total collapse. [NERC VAR-002-4.1](https://www.nerc.com/pa/Stand/Reliability%20Standards/VAR-002-4.1.pdf)

The old 59.5-Hz national cliff and 59.5–62.2-Hz universal generator-trip band are withdrawn. The cited [PRC-006-NPCC-2](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-006-npcc-2.pdf) is a regional load-shedding standard, not proof of those claims. Historical disturbance behavior does not supply a no-humans blackout deadline.

**3. Local survival and restoration are separate questions.** Some distribution systems can isolate faults and restore customers automatically where alternate supply works. Island-capable systems may maintain local power; blackstart capability does not by itself coordinate a regional restart. Do not reduce every surviving source to a rare accidental balance. [DOE monitoring/control guide](https://www.energy.gov/sites/default/files/2024-11/111524_Monitoring_and_Control_Technologies.pdf); [ERCOT blackstart explanation](https://www.ercot.com/files/docs/2025/06/20/ERCOT-Grid-Insights-Black-Start.pdf)

**4. Coal capacity is not a universal clock.** The inherited [12–14-hour bunker example](https://www.powerplantandcalculations.com/2020/05/calculation-of-coal-handling-plant-and.html) is a secondary worked capacity illustration, not a fleet survey or proof that replenishment always requires an immediate human action. Actual inventory, load, fuel handling and faults differ. No replacement unattended duration is established.

**5. Gas and demand remain conditional.** Automated plant/pipeline operation does not guarantee indefinite unattended service or identify the hour of an unhandled fault. Electric–gas dependencies matter. Household thermostats and refrigerators may keep running while daylight, weather, industrial trips and absent human activity change demand. Falling generation alone is not a measured supply deficit. [FERC blackstart/gas-coordination study summary](https://ferc.gov/news-events/news/blackstart-study-recommends-collaboration-planning-resilience)

**6. Staffing requirements are not automatic trip sensors.** Nuclear operator-presence obligations do not prove when an unattended unit trips. Actual trip conditions and continued cooling are separate; the nuclear assessment is deferred to the plant-specific research, not recomputed here.

**7. Inverter behavior is design-specific.** Unintended-island protection is not "every solar/wind plant disconnects within two seconds of any instability." Ride-through, intentional-island support, energy limits and blackstart differ. Capability specifications do not establish deployment at a particular facility. [DOE-hosted UNIFI specifications](https://www.energy.gov/sites/default/files/2023-09/Specs%20for%20GFM%20IBRs%20Version%201.pdf)

## Historical phase model — withdrawn as a forecast

The old sequence assumed a uniform 0–2-hour energized window, faults during hours 2–14, a cascade during hours 8–16 and regional lights-out during hours 8–24. None is a supported universal interval. A working pump or traffic signal is a local observation, not evidence that all places are still inside a shared grace period.

### Deferred utility estimate (historical wording, not a house-specific forecast)

The following water paragraph is retained for provenance, not validated by the grid research. Current Section 5 establishes no pressure reserve or time-to-loss for John's house.

**Caveat: municipal water pressure outlasts the grid.** Unlike streetlights and gas pumps, household water pressure doesn't depend on live power. Pumps fill elevated tanks and hilltop reservoirs, and gravity pushes that water through the mains, so pressure holds after the pumps stop and falls only as storage drains. Utilities typically size storage for about a day of average demand plus fire reserve `[general engineering practice; verify for any specific system]`, and some pump stations have auto-start backup generators that add a day or more. In this scenario demand collapses almost to zero: no showers or laundry, and lawn irrigation, the biggest normal overnight use, stops when its controllers lose power. What drains the tanks is leaks, running toilets, open fixtures, and unrepaired main breaks. **Working estimate `[derived]`:** normal pressure for at least the first day after a region's lights-out, often several days, then an uneven decline over roughly a week or two. High-elevation neighborhoods and dead-end lines lose it first. Once pressure drops, backflow and intrusion can contaminate the mains, so tap water should be treated as boil-before-drinking from then on. Hot water depends on the building's own water heater: gas works without the grid, and electric needs a generator (John's house has one).

### Historical nuclear phase — superseded, not a current safety timeline

The table and note below preserve the old draft's claims only. They are not validated plant-specific margins, current Section 5 guidance or a release schedule; see the nuclear research linked above. No nuclear calculation is revised in this grid pass.

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
Water, controls, auxiliaries, protection and electrical configuration affect hydro operation. Hydro share alone supplies neither an unattended duration nor proof of automatic islanding. Establish any island/blackstart capability separately; the novel's dependable Ediz Hook supply remains an explicit story premise.

**Deferred reservoir-hazard note (unreviewed historical wording):** Regardless of electrical status, floodgates need active management during high-water events; without operators watching reservoir levels, a heavy rain event at any point afterward could cause overtopping or failure — an acute, sudden, downstream risk independent of the electrical timeline. Regional concentration: Pacific Northwest, Tennessee Valley, parts of the Northeast.

## Wind and Solar (utility-scale, grid-tied)
Grid connection alone does not decide behavior under every disturbance. Inverter controls, protection, alternate supply and stored energy matter; neither immediate universal disconnection nor indefinite off-grid survival is established.

---

## Current use in the novel

- Preserve selected outage observations and local backup operation; do not derive their timestamps from a generic fuel or frequency threshold.
- Keep power, network reachability and actual service separate, with measurement time, last response, coverage and archive status.
- EIA-930 hourly demand/history supplies neither frequency nor unit-trip states; generation normally arrives the next day. Compare percentages only across a matched reporting set. [EIA documentation](https://www.eia.gov/electricity/930-content/about.html)
- No region's generation mix establishes its unattended endurance or a nuclear-exposure ranking. Nuclear margins and water estimates remain separate, plant-/system-specific work.

## Historical locality inputs — not runtime or safety rankings

### Original generation-mix compilation

Original attribution: 2025 EIA data via Wikipedia power-station lists. The figures and utility/state coverage were not revalidated in this pass; retain as historical inputs, not verified 2028 supply.

| Location | Utility | Gas | Nuclear | Coal | Solar | Other |
|---|---|---|---|---|---|---|
| Raleigh, NC | Duke Energy Progress | 40.0% | 31.8% | 13.2% | 9.42% | 3.43% hydro, 1.14% biomass, 0.69% wind |
| Tucson, AZ | Tucson Electric Power | 45.0% | 26.7% | 7.87% | 13.3% | 4.21% hydro, 2.69% wind, 0.18% biomass |
| Reno, NV | NV Energy | 50.5% | 0% | 5.72% | 30.1% | 8.56% geothermal, 4.16% hydro, 0.78% wind |
| Alpharetta, GA | Georgia Power | 38.6% | 34.7% | 13.6% | 7.64% | 3.19% biomass, 2.03% hydro, 0.21% petroleum |

The old locality narratives placed Raleigh/Alpharetta in the Eastern system and Tucson/Reno in the Western system. Shared system membership does not guarantee a shared local outage time; separate systems do not remove every common dependency.

**Withdrawn locality conclusions:** coal-first hard deadlines, a mandatory cascade taking every other source with it, and the Reno → Raleigh → Tucson → Alpharetta safest-to-riskiest order. Generation percentages and nearest-plant distances do not establish those outcomes. No replacement endurance or exposure ranking is supplied.

### Additional historical utility notes

The following utility/site descriptions and citations were not rechecked. They are not confirmation of current supplies, backup runtime or a site's nuclear safety.

## Naval Station Mayport, FL (Eastern Interconnection)
**Utility:** JEA, under an intergovernmental agreement (approved October 2024) to serve Mayport and NAS Jacksonville. (https://www.jea.com/Pdf/Download/12884912627) As of 2021, JEA met 98% of demand with fossil fuels — coal/petcoke at Northside Generating Station, gas at Greenland Energy Center. (https://www.sierraclub.org/sites/default/files/2025-01/2530_clean-energy-is-cheaper-jea-report_02.pdf) No in-state nuclear, but JEA has historically purchased Vogtle power under contract, roughly 140 miles away. (https://jaxtoday.org/2025/08/26/jea-moves-to-pursue-1-57-billion-natural-gas-plant/)

The listed fossil-fuel mix does not establish a coal clock or a regional cascade deadline. The earlier nuclear-safety inference from a power-purchase contract is withdrawn; no exposure assessment is supplied here. Naval Station Mayport maintains dedicated on-site backup diesel generators for mission-critical infrastructure, confirmed for its wastewater treatment plant; exact fuel reserve capacity is not public. (https://www.americanelectricofjacksonville.com/industrial-electrical-contracting/generators/) Ships in port carry their own onboard generators independent of shore power, as long as fuel remains and automated systems can run without crew — speculative, not a documented unattended-operation capability.

## Bangor, ME (Eastern Interconnection, via ISO New England)
**Utility:** Versant Power. 2025 mix: 37.5% gas, 19.4% wind, 17.8% hydro, 11.7% biomass, 10.4% solar, 1.13% petroleum, 0.22% coal. No in-state nuclear (Maine Yankee closed 1997); imports roughly a quarter of its electricity, mostly Canadian hydropower via ISO-NE. (https://en.wikipedia.org/wiki/List_of_power_stations_in_Maine)

No validated unattended duration or safety ranking follows from the listed mix/imports. The earlier coal-clock, blanket wind/solar trip and hydro-only survival claims are withdrawn; source-specific controls and configuration require separate assessment. Shared electrical connections are not a contamination map.

---

## Open questions for further research
- Plant-specific fuel inventories, automation, faults and supporting-system dependencies; no generic SCADA interval establishes an unattended runtime.
- Which specific facilities support intentional islanding or blackstart, with what controls and dependencies; not an exception to an assumed universal collapse clock.
- Precise plant-by-plant battery/generator coping times and spent fuel pool water inventories (not publicly uniform).
- How often, historically, accidental surviving islands like the 2003 western New York pocket have occurred, and whether any pattern predicts where they'd form.
- Coal ash pond and tailings dam failure risk as a secondary, slower environmental hazard category.
- Storage volume and pump-station backup power for the specific water systems in the book (Alpharetta/north Fulton, Huntsville, Phoenix, Port Angeles), to pin down how long pressure lasts in each.
