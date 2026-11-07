# Grid and network dependencies: observations, not countdowns

**Research baseline:** November 7, 2026; fictional event September 5, 2028. Public engineering research for the novel, not an unattended-system forecast or operating instructions. Repository read-only; no prose changes, private monitoring, or peer messages.

**Snapshot:** reviewed approximately 3:04–3:08 PM EST, November 7. Section 05 last modified 2:59 PM EST; 06 and older 911 references are being independently revised, so their quoted wording may change. Read `reference/power-grid-shutdown-timelines.md` and `reference/grid_2026-10-10.md` in full; sampled `sections/02-John.md` 70–124, `05-John.md` 18–110 and 313–425, `06-John and Sam.md` 25–39 and 190–204, `07a-Marchetti.md` in full, relevant power passages in `09-Ediz Hook.md`, `16-Kendra.md` 1–105, and applicable `CLAUDE.md` entries. Not a full later-chapter or infrastructure audit.

## 1. Bottom line

John has a sound reason to **save records, charge equipment, check his generator and fuel, and prepare alternatives tonight**. The evidence does not give him a reliable number of hours until regional electricity, a particular website, or a callback fails. The present 02/05 distinction between **power, network reachability, and actual service** is correct and should remain.

Automatic controls do real work without someone moving a lever. They do not replace fuel delivery, maintenance, system-wide coordination, or every exceptional decision. Removing all humans creates an unprecedented scenario with uncertain initial conditions—not a documented two-hour grace period followed by one unavoidable frequency countdown.

**Highest-leverage author decision:** retain 05's smooth six-point frequency table as fictional, characterized measurements, or simplify it to the latest valid observation plus reporting gaps. Recommend simplification. It preserves John's urgency without implying an engineering model the book cannot substantiate.

## 2. What continues automatically—and what that does not promise

NERC's published *Balancing and Frequency Control* distinguishes primary, secondary, and tertiary control. Primary response is autonomous; governors change output when frequency changes. Primary response can arrest a deviation **without restoring exactly nominal frequency**. Automatic generation control (AGC), using SCADA/energy-management data, provides secondary balancing; dispatchers also act. Available headroom and functioning measurements/communications constrain response. [1]

Automatic voltage regulators (AVRs) address **voltage/reactive-power control**, not the same job as balancing active power and frequency. NERC VAR-002-4.1 explicitly describes AVR voltage control and its operational exceptions. Voltage behavior must not disappear from a failure model merely because John has a frequency chart. [2]

| Mechanism | Documented capability | Boundary for this scenario |
|---|---|---|
| Governors/other primary response | Automatically oppose frequency changes | Cannot create unlimited reserve or repair equipment |
| AGC/SCADA | Automatically adjust participating resources using system measurements | Does not establish unlimited unattended dispatch, fuel availability, or communication continuity |
| Protection/load shedding | Isolate faults, protect equipment, or disconnect demand to help stabilize a system | A trip is not necessarily the beginning of total collapse; shedding customers can save remaining service |
| Distribution automation | Some systems automatically isolate faults and restore unaffected customers from another circuit | Needs usable alternate supply and supporting controls; not a restart of a dead interconnection |
| Island-capable systems | Appropriately designed systems can maintain a local electrical island | Ordinary connected generation is not automatically an island-capable microgrid |
| Blackstart resources | Can start without electricity supplied by the external grid | Rebuilding a wider grid still requires a coordinated restoration process |

DOE's 2024 monitoring/control guide documents automatic fault isolation and service restoration; thus “nothing can come back without a person” is too broad. Conversely, ERCOT's June 2025 blackstart explanation describes transmission operators initiating and coordinating restoration, supported by tested resources and gas coordination. FERC's 2023 study likewise emphasizes electric–gas collaboration. **Independent startup capability is not synonymous with an automatic regional reboot.** [3–4]

The four systems in 05—Eastern, Western, ERCOT, and Québec—are the relevant major US/Canadian interconnections, not a complete enumeration of every North American power system. NERC describes their separate frequency-balancing roles. Disturbances do not mechanically impose one simultaneous continental outage, but neither are all physical, fuel, weather, and communications dependencies independent. [1]

## 3. Demand and generation: no universal unattended clock

**Human absence does not switch off existing household loads.** Refrigeration, thermostats, lights and scheduled controls may continue. Equally, it does not freeze demand at its overnight value: temperature and daylight change, timers operate, industries may trip, and normal human-driven morning activity does not occur. The size and direction of the net load change are scenario assumptions. Falling generation alone is not proof of an equal supply deficit: load, imports, coverage and curtailment also matter. NERC's balance framework establishes the mechanism, not the novel's future demand profile. [1]

Generation must remain design-specific:

- **Gas:** sustained operation depends on both the plant and its gas-supply chain; FERC documents their mutual dependencies. A normally automated process is not guaranteed indefinitely unattended, but no source opened here supplies a universal fault-arrival time. [4]
- **Coal:** the inherited **12–14-hour hard limit** is not supported by the opened primary evidence. The cited third-party worked example does describe bunkers as generally sized for 12–14 hours at full load; that supplies a capacity illustration, not evidence of every plant's inventory or an invariably human-operated replenishment chain. Remove the universal clock rather than replacing it with another guessed runtime. [17]
- **Nuclear:** operator-presence requirements are obligations, not physical sensors that necessarily trip a unit when staff vanish. Actual trip conditions and cooling provisions are separate. Loss of grid generation does not establish loss of all core cooling; the completed nuclear note governs those distinctions.
- **Hydro:** water, controls, auxiliaries, electrical configuration, reservoirs, and protection matter. A large hydro percentage alone cannot rank a region's unattended endurance; blackstart or island capability must be established separately.
- **Solar/wind/storage:** the reference's “all disconnect within two seconds of grid instability” conflates unintended-island protection with all disturbances and all inverter designs. DOE-hosted UNIFI specifications distinguish fault/frequency response, intentional island support, energy limits and optional blackstart capability. These specifications describe capabilities, not proof of their deployment at a particular plant. Neither universal immediate failure nor universal off-grid survival is justified. [5]

## 4. Reading 05's figures correctly

### Frequency: a condition, not a remaining-fuel gauge

**59.88 Hz is not inherently an impossible instantaneous measurement.** A sequence declining from 60.00 to 59.88 over the day is also not automatically fraudulent. But six sparse points do not show a continuous monotonic curve, establish exhausted reserves, or support extrapolation to midnight. Identify location, timestamp, averaging interval, measurement quality, and whether the monitored system remains interconnected or has become an island. A persistent offset requires a control/operating explanation; it is not the default consequence of every additional unit trip. [1]

05's “university frequency monitors” has a credible real-world category: UT's FNET/GridEye uses GPS-synchronized instruments at ordinary outlets and sends measurements over the internet to university servers. This also adds dependencies: outlet supply, recorder, network path, and server. Its public description does not give John guaranteed raw access, a complete interconnection inventory, or measured status of 312 identified thermal units. A source disappearing is not the same observation as measured frequency becoming zero. [6]

**The Texas 58.6-Hz value represents severe abnormal conditions if genuine—not a normal gradually weakening grid.** For comparison, the joint FERC/NERC 2021 report records ERCOT's first automatic underfrequency-load-shedding threshold at **59.3 Hz**, while that event's recorded nadir was **59.304 Hz**. Those are historical Texas-specific facts, not a proposed 2028 setting or a guarantee of a total blackout at any one frequency. A fleeting 58.6 reading, local island, recording problem, or different operating state requires discrimination, not automatic rejection. Current 05 correctly leaves the subsequent source loss unresolved. [7]

The old reference's **universal 59.5-Hz cliff** is a stronger error than simply uncertain timing. Its own cited PRC-006-NPCC-2 is a **regional** standard whose purpose is arresting and recovering declining frequency; its scope is not all Georgia/Texas protection. Underfrequency **load** shedding is not synonymous with tripping nuclear/hydro generators. Do not turn one regional criterion into “NERC requires every generator to trip outside one operating band.” [8]

### EIA: hourly resolution is not immediate availability

This is a concrete source-channel correction. EIA's documentation says today's demand is typically available about an hour after the operating hour, but **yesterday's net generation and generation by energy source are typically available by 11:00 AM Eastern today**. Its collection instructions put generation in daily submissions. Frequency is not among the listed EIA-930 data elements. [9]

Therefore same-evening generation declines and individual unit-trip counts need another characterized source or an explicit fictional 2028 reporting upgrade; “EIA hourly” alone does not supply them. Reporting latency also does not mean every automated submission stops immediately when people disappear. This does not make fictional telemetry impossible. Label its source rather than implying the real EIA product does something it does not document.

EIA also warns of revisions, incomplete visibility and aggregate imputation. Compare generation over a **matched reporting set**, not all early reporters against fewer later reporters. 05's 44-of-52 coverage makes that denominator question especially important. A generation reduction is not a household-outage count.

### One real disturbance, without apocalypse extrapolation

In February 2021, ERCOT combined automatic response with substantial operator-directed load shedding to arrest severe frequency decline; operators' actions helped avert further generator losses and potential total blackout. The report supports the importance of both automation and human intervention—not a probability or deadline for permanent human absence. [7]

For European perspective, ENTSO-E's **March 2026 final-report summary** attributes the 2025 Iberian blackout to interacting oscillations, voltage/reactive-power control gaps, output changes and generator disconnections. It reports no significant disturbance across the rest of the European system. That is a useful counterexample to a universal frequency-sag/cascade narrative, not a prediction for Switzerland. [10]

## 5. Communications: power your end, then test the whole path

A practical chain for John's external service is:

**Dev box/phone → local router and powered terminal → satellite/possible crosslinks → working ground gateway and onward network → destination service and its dependencies.**

Starlink's own engineering note explicitly distinguishes satellite/laser paths from gateway-to-internet connection paths and points of presence. Crosslinks can provide alternate paths; they do not place the destination website, its database, or every gateway in orbit. Do not assign John one immutable gateway whose loss necessarily kills his service, or assume every path fails at the same time. [11]

DNS supplies another distributed dependency; cached answers can allow some continued use. RFC 1034 distinguishes temporary communication/server failure from a nonexistent name. Application databases, authentication services and existing sessions can impose additional dependencies, but no provider-specific authentication expiry was established here. A powered server or reachable route does not prove a requested operation works. The current 02/05 three-layer treatment already explains this adequately. [12]

**06's failed callbacks do not diagnose cell-tower batteries.** FCC's Ian report separately tracks sites down from power, transport/backhaul and physical damage, and sites still operating on backup; it also warns site counts do not map directly to consumer availability. Battery condition, equipment load, generators, fuel, backhaul, core-network and destination-handset status differ. Four-to-eight hours can remain John's explicitly tentative guess, not a sourced universal runtime. “Through any gateway still up” also overstates his ability to select/complete a Teams-to-telephone route; his working uplink does not establish the downstream service. [13]

Do not cite residential voice backup rules as mobile-tower requirements. FCC 15-98 addressed options for **non-line-powered fixed residential voice**; its text also explicitly set a September 1, 2025 sunset. It is not evidence for a current nationwide tower runtime. A later extension/replacement was not established here; the historical order's scope alone defeats that use. [14]

## 6. Local power and later-scene implications

**Hospitals:** a building can retain selected emergency circuits while its neighborhood is dark. US hospital rules require emergency/standby systems, testing/maintenance, and an operational fuel plan—not an assurance of indefinite unattended operation or power to every appliance. They do not establish Swiss hospital/laboratory arrangements. Keep 07a's generators and emergency-circuit label as fictional observations with existing facility-verification flags; no exact duration was validated. [15]

**Ediz Hook:** preserve the dependable microreactor/island premise. Grid-forming/island concepts make autonomy a recognizable engineering category, but do not certify this fictional Navy installation or its unattended lifetime. In 09, shore undervoltage followed by normal power plus MODE ISLAND supports a **local supply interruption and island transfer**. That event alone cannot establish the entire Western Interconnection failed. If wider collapse remains canon, it needs separate evidence or remains John's inference—not a reason to weaken the base's dependable-power premise.

**ISS:** NASA describes TDRS relay satellites plus ground antennas, processing and networking; orbital hardware does not eliminate the ground chain. But the opened source does not establish that ordinary handovers require a live operator or predict a failed handover after a particular unattended interval. Preserve 16's observed loss of communication if desired; its asserted handover mechanism and permanence need specialist review. The chapter already has a verification flag. Direct amateur-radio contact is a different chain and need not fail with Houston's normal path. [16]

## 7. Minimum changes worth considering—not authorized edits

1. **05 optional, 315–335:** preferably replace the six-row smooth frequency progression with a latest-reading/last-response view. If retained, label sample location, interval and source assumptions. Keep the existing no-countdown and hydro caveats; do not add another caution wall.
2. **05, narrative 48 and optional 315–344:** separate EIA demand/history from faster generation telemetry and unit-status sources. Clarify matched coverage before interpreting −38%. Keep the 58.6 reading provisional unless the author chooses its channel and duration.
3. **Older grid references:** retire the two-hour universal “silent window,” universal 12–14-hour coal limit, 59.5-Hz collapse trigger and 8–24-hour regional forecast as empirical conclusions. `grid_2026-10-10.md` lines 9–21 still promises exact local utility hours and a midnight forecast, contradicting approved 02/05. The shutdown reference also contains superseded nuclear clocks and utility-mix hazard rankings; defer to the nuclear note rather than re-importing them.
4. **06/09/16 follow-up:** distinguish failed callback from diagnosed battery exhaustion; local utility loss from proven interconnection failure; observed ISS link loss from established handover causation. Coordinate later with ongoing 06 revisions, not concurrent edits here.

An internal timing issue reinforces this: 09's recorded Wednesday **04:12 PDT** transfer equals **07:12 EDT**, approximately **29 hours 12 minutes** after Tuesday's event—outside the old reference's 8–24-hour ceiling. Keep chosen fictional timestamps rather than bending scenes to an unsupported “engineering” limit. Kendra's three-night observation likewise should not be forced into that ceiling.

**Reader translation proposals:** one automatically shed neighborhood can illustrate protection saving another; one failed external request while John's local archive still opens can illustrate end-to-end dependence; the Hook's powered freezer and island indicator can demonstrate local independence. These are optional teaching patterns, not new canon or full prose.

## 8. Sources checked and limitations

Accessed November 7, 2026. Primary sources except the explicitly identified inherited secondary citation [17]. Relevant sections read; long technical reports were sampled, not exhaustively reviewed.

1. NERC, [*Balancing and Frequency Control*, May 11, 2021](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/rs/reference_document_nerc_balancing_and_frequency_control.pdf), printed pp. 1–3, 7–9 and primary-control discussion. Also inspected the [April 27, 2026 frequency guideline](https://www.nerc.com/globalassets/who-we-are/standing-committees/rstc/rs/8a-rstc_primary_frequency_control_reliability_guideline_2026_clean_v2.pdf): **marked Draft**, not asserted to be an adopted standard.
2. NERC, [VAR-002-4.1](https://www.nerc.com/pa/Stand/Reliability%20Standards/VAR-002-4.1.pdf), purpose, R1–R2 and rationale. Used for mechanism, not certification of 2028 effective requirements.
3. DOE/LBNL, [*Monitoring and Control Technologies*, September 2024](https://www.energy.gov/sites/default/files/2024-11/111524_Monitoring_and_Control_Technologies.pdf), printed p. 1, distribution automation/FLISR.
4. ERCOT, [*Black Start*, June 2025](https://www.ercot.com/files/docs/2025/06/20/ERCOT-Grid-Insights-Black-Start.pdf), procedure and gas coordination; FERC, [December 19, 2023 study summary](https://ferc.gov/news-events/news/blackstart-study-recommends-collaboration-planning-resilience).
5. DOE-hosted UNIFI, [*Specifications for Grid-forming Inverter-based Resources*, Version 1, December 2022](https://www.energy.gov/sites/default/files/2023-09/Specs%20for%20GFM%20IBRs%20Version%201.pdf), §§2.2.3–2.2.5, 3.1. Capability specifications, not universal deployment.
6. University of Tennessee, [FNET/GridEye description](https://fnetpublic.utk.edu/), measurement/transport architecture; no live plotted values used.
7. FERC/NERC/Regional Entities, [2021 cold-weather report](https://www.ferc.gov/sites/default/files/2021-12/Cold%20Weather%20Report_%202021_120821.pdf), printed pp. 132–138, frequency decline/recovery, especially p. 137 nadir.
8. NERC, [PRC-006-NPCC-2](https://www.nerc.com/globalassets/standards/reliability-standards/prc/prc-006-npcc-2.pdf), purpose/applicability/R1–R4. This is the old reference's cited regional document, not verification of future settings.
9. EIA, [EIA-930 documentation](https://www.eia.gov/electricity/930-content/about.html), data elements, availability, quality/imputation; [submission instructions](https://www.eia.gov/survey/form/eia_930/instructions.pdf), when/how to report and file layouts.
10. ENTSO-E, [March 20, 2026 final-report announcement](https://www.entsoe.eu/news/2026/03/20/entso-e-publishes-expert-panel-final-report-on-28-april-2025-blackout-in-spain-and-portugal/) and [incident summary](https://www.entsoe.eu/publications/blackout/28-april-2025-iberian-blackout/). Read the organization's summaries, not the entire final report.
11. Starlink, [*Improving Starlink's Latency*](https://starlink.com/public-files/StarlinkLatency.pdf), 2024 engineering note, “What Drives Latency.” Provider network-update webpage returned no readable body; no search snippet substituted for checked text.
12. IETF, [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034.html), §§2.4, 3.6, 5.2.3: naming, caching and temporary failures; foundational mechanism, not an exhaustive current DNS specification.
13. FCC, [Ian status report, September 28, 2022](https://docs.fcc.gov/public/attachments/DOC-387679A1.pdf), printed pp. 2–5. Historical carrier-submitted snapshot, not an autonomous live feed.
14. FCC, [15-98](https://docs.fcc.gov/public/attachments/FCC-15-98A1.pdf), ¶¶3–4, 91 and Appendix A §12.5(g): residential scope and sunset.
15. [42 CFR 482.15(b)(1), (e)](https://www.ecfr.gov/current/title-42/chapter-IV/subchapter-G/part-482/subpart-B/section-482.15), US hospital preparedness; no Swiss site certification.
16. NASA, [ISS communications architecture, November 6, 2020](https://www.nasa.gov/missions/station/the-international-space-station-20-years-of-communications-excellence/), TDRS/ground network. Historical architecture, not verification of 2028 relay scheduling.

17. Power Plant and Calculations, [coal-handling/bunker worked example](https://www.powerplantandcalculations.com/2020/05/calculation-of-coal-handling-plant-and.html), May 18, 2020, “Selection of bunker capacity.” **Secondary engineering blog**, checked because the inherited reference relies on it; not a fleet survey or unattended-operation study.

No opened primary source validates the novel's future outage chronology, generation percentages, monitor readings, universal fuel/battery endurance, or probability of surviving islands. Outstanding review: power-system dynamics for any retained frequency series; chosen fictional telemetry channels; actual facility configurations; telecom service paths; ISS handover behavior. Water, food cold-chain duration, full satellite-phone architecture and detailed plant cooling remain separate research topics.
