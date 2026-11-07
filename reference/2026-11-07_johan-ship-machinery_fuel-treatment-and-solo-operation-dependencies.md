# Johan and the Pacific Tender: machinery, fuel treatment and solo-operation dependencies

**Research snapshot: November 7, 2026 (EST).** Fictional-voyage plausibility review, not operating or repair instructions. Current local manuscript/canon read without repository changes, copying or messages. Bruh's A350/Della work, dependable Hook power and held PC-12/ISS choices are untouched. No analysis of the protected event mechanism and no invented crew, equipment, casualty or shutdown deadline.

## 1. Bottom line

The voyage's main failure chain is credible: a ship can carry sufficient bunker fuel while exhausting the **clean fuel immediately available to its engine**. Transferring storage fuel into a settling tank does not complete treatment or replenish a service tank. The current distinction between those two jobs is a strong, teachable mistake for an experienced deck officer working outside his specialty.[1,2]

Periodically unattended machinery spaces can keep a serviceable plant running and call engineers when attention is needed; they are not engineering staff, and not an indefinitely autonomous ship.[3] The story already shows this boundary rather than instant mechanical collapse.

**Strongest supported technical correction candidate:** the later retelling's **putty-knife scraping of separator discs** (12:232) should not be treated as verified Alfa Laval practice. A maker-authored representative manual specifically warns that mechanical cleaning can scratch discs and accelerate deposits, and distinguishes bowl cleaning from cleaning drive components.[4] The exact installed model remains unspecified, so this is a supported concern, not proof the entire recovery is impossible. Preserve the labor and emotional beat; verify or remove unsupported tool/solvent specificity.

The largest unresolved feasibility package is **which fuel/separator/auxiliary-power arrangement makes the stated recovery possible**. Neither unlimited automation nor instant doom follows from the missing information. Select a coherent plant and review a few consequential dependencies with a merchant chief engineer before certifying the detailed teardown/restart.

## 2. What the current text actually establishes

Read in full: `03-Johan.md`, `05a-Johan.md`, `08a-Johan.md`, `09a-Johan.md`, `11a-Johan.md`, `12-Pacific Tender.md`; scoped `CLAUDE.md` character, ship timeline and corresponding scene entries; the compendium's maritime material and `reference/port-angeles-base-research.md`§8. This is not a full machinery/anchoring/lifeboat audit. The older port reference contains a broader risk list, not a certified ship-operating package.

**Johan:** 48, second mate/navigating officer, 26 years at sea, holder of a Chief Mate's license (canon194–215). He knows bridge/deck work, passage planning and GMDSS; the engine room is explicitly outside his professional specialty. Missing two fingers affects handling, not his intelligence or authority. Do not recast him as an engineer, a novice seafarer or categorically unable to learn a bounded task.

**Ship:** *Pacific Tender*, container ship, Yokohama–Seattle, 23 people originally aboard, Johan the only survivor. Canon contrasts her single slow-turning screw with the later yacht's twin screws. The brand **Alfa Laval** appears at12:234, but no separator model is established. Main-engine make/model, build year, dimensions/TEU, flag/class notation, actual fuel grade, tank capacities, automation settings and auxiliary-generator fuel arrangements remain unknown. Draft12.8m, an eleven-tonne anchor and a seven-minute bridge-to-bow walk do not identify all that machinery.

**Already strong:** Alvarez's unfinished log, actual piping diagram, waiting for a rising tank indication, a written transfer entry, alarm history, retained printed/manual resources and Johan's later change to his sleeping arrangement. These make competence fallible and observable. Do not replace them with effortless AI repair or a technical lecture.

### Clock ledger

Story times below use **EDT (UTC−4)**. Original ship clocks/UTC are retained for audit, rather than converting September scenes to November EST.

| Beat | Eastern / UTC / original | Consequence |
|---|---|---|
| Wakes Sept 5 |13:10 EDT /17:10Z /06:10 ship, UTC−11 | 03:3–35; initially19kt, machinery running. Slows to11.5kt later that day. |
| First SafetyNET strip |Sept 5,21:41 EDT /Sept 6,01:41Z /Sept 5,14:41 ship, UTC−11 | 05a:3–27; working text receiver, failed broadband/voice path. No new messaging research here. |
| Fuel-transfer/crossing scene |Sept 7,18:50–Sept 8,00:30 EDT /22:50–04:30Z /Thu11:50–17:30 ship, UTC−11 | 08a:3–23; settling-tank alarm, prolonged time below, late encounter. |
| No. 1 purifier trip |Sept 8,05:12 EDT /09:12Z **if already UTC−10** /original Thu23:12 | 09a:11. If still UTC−11, both converted times are one hour later. Record the clock-change point. |
| Service-tank alarm |Sept 9,05:40 EDT /09:40Z /Fri23:40 ship, UTC−10 | 09a:11; acknowledged without effective response. |
| Engine stops |Sept 9,10:00 EDT /14:00Z /Sat04:00 ship, UTC−10 | 09a:3–11; propulsion lost, other services continue. |
| Restart |Sept 10,20:02 EDT /Sept 11,00:02Z /Sun14:02 ship, UTC−10 | **34h02** after shutdown, correctly calculated at the established same offset. |
| Anchorage / departure |Sept 14,16:01 EDT /20:01Z /13:01 PDT; departure following day |12:118–150; long-term unmanned anchorage is a separate problem from arriving. |

Canon392 says clocks advance fromUTC−11 near157°W, then ultimately to Pacific time. The approximate29-hour purifier interval fits **28h48** if Thursday's trip is already recorded atUTC−10. Do not manufacture a contradiction by assuming the offset never changed; do not silently apply the Saturday offset backward either. A consistent UTC alarm-history column would settle this compactly.

Simple planning arithmetic also fits the rough scale:1,950nm/11.5kt ≈7.1 days, versus≈4.3 days at19kt, **before** drift, maneuvering, weather/current and downtime. It is not a validated route/fuel plan. The34-hour interruption accounts for substantial delay; no new stop is required.

## 3. The fuel chain: the reader needs one distinction

Wärtsilä's manufacturer encyclopedia separates **transfer, treatment and engine-supply systems**.[1] MAN's fuel-cleaning letter supplies a representative storage/settling/separator/service-tank diagram and explains temperature, flow, recirculation and final filtration.[2] They are mechanism references, not the *Tender*'s approved diagrams.

At reader level:

**Bulk storage → transfer/settling → controlled heating and separation → usable service fuel → engine-side supply/conditioning/filtering.**

Returns, recirculation, standby equipment and alternate tanks make the real layout less linear. Settling removes some gross water/solids; a centrifugal separator removes further contaminants. Neither creates fuel. A full settling tank is not an instruction to route untreated oil around protection or a guarantee the engine's supply is adequate.

The Thursday discovery is therefore good: Johan finds a repeated transfer job in the log and restores that stage, but mistakes the visible rising inventory for the whole feeding chain being healthy (08a:9–17). Saturday's alarm review reveals the second stage. That is a credible systems-learning problem, not proof he is incompetent.

**Manual versus automatic transfer:** public examples include automated equipment and differing packages. No evidence establishes that a ship this size universally needs a manually performed daily transfer, or universally transfers everything automatically. Retain Alvarez's recorded routine as this ship's selected arrangement, conditional on its controls. Do not turn it into a fleet-wide rule.

Similarly, the usable service inventory, tank in use, alternative clean-fuel supply and automatic changeover need definition behind the page. A stated bunker total would not establish29 hours of service-tank endurance. Alarm threshold, consumption at reduced load, actual starting level and any standby response determine that interval. The text need not list capacities; it needs a coherent author calculation.

Fuel does not become unusable simply because the engineers disappear. Conditions, existing maintenance state and continuing treatment matter. No new incompatible bunker delivery, contaminated fuel or fixed “fuel spoils in X days” event is proposed. The existing No. 2 fault already establishes degraded redundancy; No. 1's precise failure/condition is still an author choice.

## 4. What separator automation does—and does not fix

Alfa Laval's P Flex leaflet describes automatic process operation, intermittent sludge discharge, control/operating-water needs, heaters/pumps, pressure alarms and optional vibration monitoring.[5] Its2025 marine presentation identifies actual alarm families involving bowl sludge, failed discharge, water supply and outlet pressure.[6] These support the **kind** of indications used in the scene; they do not identify its controller or authorize copying alarm codes into an unspecified installation.

“Automatic sludge discharge” is not “never inspect or clean.” Conversely, it is not normal to assume every disc stack must be manually stripped every few days. Manufacturer preventive-maintenance intervals and actual condition are different things. Both machines heavily fouled can be selected history, but the story should not imply that two days without a human inevitably produces baked-solid bowls.

No. 2's earlier **high vibration** is not a diagnosis. Sediment imbalance can contribute; incorrect assembly, damaged rotating parts, bearings or other faults may also matter. Cleaning both stacks does not itself prove that the original No. 2 fault was corrected.[4] Keep the existing distinction between finding contamination and confirming a sound return to service. No new bearing casualty is invented.

### The repair: plausible possibility, substantial specialist-review gap

The representative maker-authored **P605 manual, June2009, Rev4**, was opened through a distributor-hosted copy.[4] It is **not selected as the story's machine**. Its safety/maintenance sections establish important boundaries:

- A high-speed rotor is a precision, balanced assembly; unsuitable parts, damage or assembly can have consequences beyond a poor cleaning result.
- The equipment needs competent/instructed work, proper special tools, safe isolation and appropriate lifting arrangements—not merely a book nearby.
- Disc-stack compression, matching components, seals and inspections matter. Exact disc count and bowl handling depend on the actual model.
- Handling/cleaning can damage disc surfaces. The manual separates bowl/sludge cleaning requirements from drive-component solvent guidance.

These are author-level dependencies, **not teardown directions**. The opened manual does not validate the scene's eight bolts, hammer specification,120 discs, solvent bath, lifted-assembly sequence or seaway handling. Another Alfa Laval model may support some details; do not call them impossible solely because this representative example differs.

The most vulnerable **specific** image is12:232's putty knife. Preserve “one by one” and exhausting labor; qualify or remove the unsupported scraping prescription pending the correct manual. Likewise, diesel being a listed cleaner somewhere in a manual would not automatically validate its use on these bowl deposits/materials.

A swinging heavy bowl in a rolling ship is a separate problem from its static weight. The2026 UK MCA code considers ship movement, the individual's physical limits, machinery isolation/stored energy and competent lifting operations.[7] A chain hoist does not by itself control lateral motion, clearances and safe handling. Johan's missing fingers makes the handling challenge more concrete, not automatically fatal. An independently reviewed, secured-work arrangement can support the survival plot without publishing a rigging recipe.

The forgotten **operating-water supply** is a credible conditional mistake: representative self-cleaning systems use water in their operating/sealing/discharge functions, and the maker's2025 fault material links inadequate water to process/output faults.[5,6] It does not establish the exact alarm/trip displayed on *Tender*. Retain the admission and recovery, rather than generalizing “everybody does that” into an instruction to restart after any trip.

Good existing sequencing: No. 1 is reassembled/running before he opens No. 2 (09a:19). Preserve that bounded progress; no main-engine overhaul is implied.

## 5. Propulsion loss is not the same as blackout

The narrative needs enough **independent usable auxiliary power** to sustain lights, radar, pumps/controls and the repaired separator while the main engine is stopped. The note at09a:17 already flags separate generator fuel. That is a prerequisite, not something this research has verified about an identified ship.

A ship may have distinct fuel grades/circuits or locally usable supply for auxiliaries. It may also have common dependencies. “Diesel generator” does not by itself mean unlimited separate clean distillate. Its actual source, treatment, return arrangements, load and remaining usable inventory are needed; no spare generator or fuel stock is invented here.

The quiet failure chain also needs electrical/control power, lubricating-oil and cooling services. If the selected treatment fuel requires heat, its heat source must remain available **with the main engine stopped**. MAN documents temperature/flow limitations; Alfa Laval offers differing heater/module arrangements.[2,5] Do not assume main-engine waste heat continues, or that an electric heater/auxiliary boiler is fitted merely because either would solve the scene. Select/document the actual arrangement privately; one observed healthy support system may be enough on the page.

**Low fuel-inlet pressure** can explain lost combustion/propulsion, but the precise alarm/slowdown/shutdown response belongs to the selected engine and controls. The displayed M/E SHUTDOWN label should be checked, not promoted as universal behavior. A protection action preserving machinery is not synonymous with catastrophic damage. A serviceable plant can plausibly be restored after usable supply returns, subject to its restart prerequisites.

Starting air, compressors, control permission, lubrication/cooling readiness and the fuel system all participate in a restart; “tank60percent” alone does not establish readiness. The exact30→26bar decrement, recharge time and three-attempt sequence remain unverified. No ship-specific main-engine project/operating guide was obtained, so these figures cannot be certified from a generic diesel analogy. Do not add a new failed start, command sequence or interlock bypass.

**Slowing helps some problems, not all.** MAN's2021 letter supports low-load operation for specified two-stroke families, while explicitly requiring appropriate precautions and more attention to the engine/turbocharger/exhaust-boiler condition.[8] It does not identify *Tender*'s engine.11.5kt is vessel speed, not an engine-load percentage. Therefore “working easily” should mean Johan reduces propulsion demand, not that every subsystem becomes maintenance-free. The almost-hour slowdown attributed to a load program likewise needs the selected engine/control behavior, especially loading versus unloading; preserve the slowdown/archive beat without declaring that duration universal.

## 6. One man cannot be two watch systems

DNV's explanation of periodically unattended machinery spaces quotes SOLASII-1/46 and emphasizes essential sensors, remote alarms, standby-start functions, independent pre-shutdown warnings and regular testing.[3] It supports running without someone constantly beside the engine. It does **not** remove engineers from the safety model or provide an autonomous repair crew.

Likewise, acknowledging a bridge alarm is not correcting its cause. The logged **ACCEPTED BRIDGE** entries and his lack of memory are good causal evidence for this ship. Exact controller wording/escalation behavior is unverified, but no new failure is needed to make fatigue consequential.

IMO's BNWAS standard permits a3–12-minute dormant interval and escalating bridge/remote indications.[9] Thus twelve minutes is a supported setting; exact keyed controls, reset detection and stages remain installation-specific. It is a bridge-alertness system, not the same thing as machinery alarms or radar guard zones. No instructions for disabling it are supplied.

His first sleep becoming fragmented, then automatic acknowledgment, fits IMO fatigue guidance: continuity matters; sleep inertia impairs short-term memory/decisions, and sleep-deprived people can misjudge their own condition.[10] The evidence supports plausibility, not a diagnosis that any particular acknowledgment necessarily happened during sleep. His later move across the bridge adds friction to casual acknowledgment; it does not replace adequate sleep or guarantee he will interpret the next alarm correctly. Five hours at anchor is a reprieve, not certified recovery from ten days' workload.

**Lookout remains the irreducible conflict.** IMO's COLREG overview requires a proper lookout by sight/hearing and all appropriate means; a radar guard zone/AIS is not another watchkeeper.[11] Hours below tracing piping, doing repairs or sleeping create unobserved intervals. A24-mile empty radar picture is bounded information, not a guarantee nothing will enter. This is a forced compromise already dramatized by *Ocean Prosper*, not a reason to force a collision or call Johan's entire voyage impossible.

One narrow correction in08a:21: being stand-on is not an absolute obligation to wait while an evidently nonresponsive give-way vessel approaches. IMO's Rule 17 summary permits action once failure to take appropriate action becomes apparent.[11] Do not infer that two miles is a universal legal/action threshold. Preserve his seamanship and encounter; avoid portraying waiting as compelled by an inflexible rule. No new helm instructions are needed.

Docking remains different from crossing open water. His rejection of Seattle's pilot/tug/linesmen-dependent berth is a competent boundary (11a:7). Bridge propulsion control and autopilot do not give him remote mooring hands. This pass does not certify the later seven-minute bridge-to-bow absence, anchoring geometry, lifeboat release or winter holding arrangement.

## 7. Forty hours after leaving: an estimate needs a basis

The existing shutdown list, tags, observations and logs are stronger than “he switched everything off.” However, isolating bulk/main-engine fuel while leaving No. 2 generator supplied needs the actual tank/return arrangement and the generator's supporting services to agree. Do not infer that every fuel valve can be closed while any selected machine keeps running.

The **forty-hour** day-tank statement (12:132,214) requires usable volume, starting level, actual operating load/consumption and switch time. It can remain Johan's estimate from ship data; it is not a class-rule runtime or a guaranteed Sunday blackout. Refrigeration/ventilation and pumps are part of the selected load, not free add-ons. No endurance is derived from unspecified tankage here.

Temporary generator operation does not preserve the ship indefinitely; anchorage/security/weather remain separate dependencies. This review does not question the dependable *Active* base or its already-established RO plant.

## 8. Preserve locally, at the right time

Johan already has the most valuable resources **aboard**: Alvarez's actual logs, the ship's piping diagram, model-specific purifier manual and tagged equipment. His broadband fails on the first day; a later online manual session is not established. John cannot retroactively guide the voyage from the Hook or conjure post-cutoff downloads.

| Archive / when | Available or actually located | Limit / verification needed |
|---|---|---|
| On discovery of the engineering problem | Existing ship manuals, diagrams, running logs and panel history are on-page | Preserve actual equipment IDs/revisions and readings. Diagram topology alone is not a safe operating procedure or proof he understands every interdependency. |
| Before leaving the ship | He explicitly carries both logs, charts, almanac and tables | Relevant machinery/configuration, tank/consumables and shutdown records could also support later decisions if actually taken/copied. Do not silently add copies to canon. |
| After he joins the Hook | John can ingest materials Johan physically brings; existing archive stops Sept 6,08:00 EDT | No new internet or remote ship-console access is assumed. Imported material needs provenance and ship-clock/UTC mapping. |
| Public representative references | Locally saved: Alfa Flex leaflet, MAN fuel/low-load letters, IMO BNWAS/fatigue PDFs, MCA2026 code; some IMO HTML | They are not the *Tender*'s installed manuals. Acquisition manifests and saved documents are in `sources/johan-machinery-2026-11-07/`. |
| Actual operating package | Main engine/generator/starting-air/cooling documentation; separator/controller versions; piping/electrical drawings; spares, seals, filters, approved consumables; alarm/maintenance records | Needed, not obtained. Exact vessel software/manual entitlement, local files, dependencies and offline access require legitimate checking, not credential workarounds. |
| Offline test | Reopen local documents/diagrams, confirm legibility and versions, retain paper essentials and backup copies | A saved PDF is not tested control/diagnostic software or machinery competence. No operational/offline device test performed here. |

The maker-authored P605 manual was read via a distributor copy, but direct archival download returned403; DNV likewise opened but direct saving failed. The Wärtsilä product-guide attempt failed, so no specifications from that guide are used. The opened manufacturer fuel-system encyclopedia is a mechanism reference, not an acquired ship-specific guide.



## 9. Narrow handoff scope

1. **Choose the minimum coherent machinery package** behind08a/09a: fuel type, separator family, usable service/standby supply and auxiliaries/heat available during the stop. No decorative ship-model retcon is needed.
2. **Review09a:15–21 /12:232–244** against the selected manufacturer manual: remove unsupported putty-knife/solvent/count/handling precision; preserve difficult manual-guided repair, water-supply mistake and successful recovery. No hazardous procedural expansion.
3. **Keep the three-layer fuel lesson**: stored fuel ≠ settled fuel ≠ usable engine supply. One gauge/history observation should cause one decision; no encyclopedia inserted into dialogue.
4. **Bound automation and timing claims**: UTC alarm history, configured low-pressure response, slowdown behavior and generator40-hour estimate. Keep the already-correct34h02 interval; do not invent a new deadline.
5. **Retain the fatigue consequence, qualify the rule**: alarms do not supply lookout; stand-on status does not require waiting indefinitely. Preserve Johan's authority, not an impossible promise of safe simultaneous bridge/engineering duty.

**Highest-leverage author choice:** define what still provides usable power, heat and clean auxiliary fuel during the34-hour main-engine stop. Then have a merchant chief engineer/separator service specialist review the short recovery sequence, and a deck officer review lookout/maneuvering constraints. Exact ship configuration, capacities, numerical restart/performance data and lifting arrangement remain explicit gaps. Intended survival is not disproven; the detailed operation is not certified.

## Opened primary-source register

All accessed **November 7,2026**. Historical publications remain labelled; none establishes a particular2028 installation.

[1] Wärtsilä manufacturer encyclopedia, **Fuel Oil System**, Transfer/Treatment/Supply sections: https://www.wartsila.com/encyclopedia/term/fuel-oil-system . Generic arrangement; its illustrative temperatures/two-stage scheme are not adopted as universal settings.

[2] MAN Diesel & Turbo, **SL2017-638/DOJA**, February 2017, Fuel Cleaning System/Fig.5 p. 3; Separator Operation p. 4; Tank Cleaning p. 5: https://www.man-es.com/docs/default-source/service-letters/sl2017-638.pdf?sfvrsn=607695b4_4

[3] DNV, **Unattended Machinery Spaces: E0/AUT**, 2017, Basis/Annual Survey/Test Plan: https://www.dnv.com/news/2017/unattended-machinery-spaces-class-notations-e0-and-aut-clarifications-on-the-annual-survey-85588/

[4] Alfa Laval, **P605 Separator Manual**, Book 577460-02 Rev4, June 22,2009; pp. 7–17 (safety/qualifications),18–25 (function),47 (disc stack),52–55 (lifting/cleaning),58 (vibration); representative maker-authored document on distributor host: https://alphahellas.gr/manual/purifiers/alfa-laval-p-605-separator-manual.pdf

[5] Alfa Laval, **P Flex605/615** leaflet EMD00231EN1304, Operating Principle/System Layout/Options/Operations: https://assets.alfalaval.com/documents/p4dc4bb2a/alfa-laval-flex-separation-systems-p-separators-605615-product-leaflet-en.pdf . Current expanded605/615/617 leaflet also opened: https://www.alfalaval.com/globalassets/documents/products/separation/centrifugal-separators/separators/s-and-p-flex/product_leaflet_p_605_615_617_separator_and_system_en.pdf

[6] Alfa Laval Taiwan, **Marine Separator Maintenance Tech Talk**, June 26,2025, Design/ALCAP/Common Alarms: https://www.alfalaval.tw/globalassets/documents/20250626_marine-tech-talks_seperator_jun_vf_.pdf

[7] UK MCA, **Code of Safe Working Practices2026**, Chapters 10 (manual handling/ship movement),19 (lifting),20.2–20.3 (machinery isolation/stored energy): https://assets.publishing.service.gov.uk/media/69bd45a5ed813d0d8b690c2b/code-of-safe-working-practices-for-merchant-seafarers-2026-edition.pdf . Risk reference; *Tender*'s flag is unset, so UK applicability is not claimed.

[8] MAN Energy Solutions, **SL2021-714/PXN**, June 2021, Summary/Introduction/Operation Recommendations pp. 1–3: https://www.man-es.com/docs/default-source/service-letters/sl2021-714.pdf?sfvrsn=5279d333_4 . Specified ME/ME-C/dual-fuel families, not an identified story engine.

[9] IMO **MSC.128(75)**, May 20,2002, BNWAS Scope/§4.1 operational requirements: https://wwwcdn.imo.org/localresources/en/KnowledgeCentre/IndexofIMOResolutions/MSCResolutions/MSC.128(75).pdf

[10] IMO **MSC.1/Circ.1598**, December 2018, Guidelines on Fatigue, Module 1§§20–23 (continuity/debt/inertia): https://wwwcdn.imo.org/localresources/en/OurWork/HumanElement/Documents/MSC.1-Circ.1598.pdf . Current IMO overview also opened: https://www.imo.org/en/OurWork/HumanElement/Pages/Seafarers-hours-of-work-and-rest.aspx

[11] IMO **COLREG Convention overview**, Part B Rules 5–8,17 and Part C navigation-status distinctions: https://www.imo.org/en/About/Conventions/Pages/COLREG.aspx . Not a whole-voyage COLREG/pilotage/anchoring compliance certification.
