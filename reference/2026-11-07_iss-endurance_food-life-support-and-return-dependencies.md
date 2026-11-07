# ISS endurance: food, life support, and the return decision

**Research baseline:** November 7, 2026. **Story calendar:** September 2028–summer 2029. Author reference, not spacecraft operating instructions, medical guidance, or a certified survival forecast. No repository files changed; no peer messages or automatic insertion.

## 1. Short conclusion

Kendra's expertise, regenerative life support, and the need to organize recovery before returning are sound foundations. The scenario is **not established impossible**, but neither a food spreadsheet nor autonomous capsule flight establishes that four people can sustain the entire station without ground support until summer.

The strongest arithmetic issue is specific: **the same inventory and unchanged per-person ration cannot give seven people food until February 2029, then four until July merely because three leave in December 2028**. A later departure saves only the consumption that would occur after departure. The deadlines need a single inventory/ration ledger.

The strongest source update is equally important: **210 days is not a universal present-day Dragon expiration**, nor is the historical 200-day Soyuz figure an immutable current ceiling. Public NASA mission records already show longer flights. Qualification boundaries are not physical countdown switches; the particular fictional vehicles still need ages and condition assumptions.

## 2. Canon and scope

Read-only snapshot: **November 7, 2026 (EST)**; the endurance passage was rechecked after the concurrent clock/TX update. Reviewed the endurance passage in current `sections/16-Kendra.md` 83–105, applicable `CLAUDE.md` character/ISS/winter/Europe/recovery entries, and actual existing references. Concurrent changes to 16's clock/TX indicator and PC-12 material were not touched. Line anchors can move.

Relevant files actually found: `reference/research-compendium.md` §3.5, `reference/iss-ham-radio-contact.md`, `reference/more_to_think_about_unattended_world_hazards.md` §3, and `reference/port-angeles-base-research.md` (inventory identified, not fully reviewed). No separate established endurance inventory or spacecraft qualification dossier was found in that listing; this is not a full-repository search.

**Crew accounting:** seven aboard ISS, not six: four assigned to Dragon—Ellen Pruitt, the unnamed pilot, Kendra, and Luca—and three assigned to Soyuz, including Andrei and Pavel. December's planned Russian departure leaves **four**. The “six alive” radio message concerns the Hook group. There are no established dead ISS crewmembers whose meals suddenly become available.

Kendra launched in March 2028. The November scene says the September ration lasts seven into February and four into July; its author verification comment explicitly mentions December's departure. The winter calendar places that departure in December. The Europe mission is planned for about three months after late-winter preparations; recovery is roughly nine–ten months after September 5, around **June–July 2029**. These are working canon, not independently verified operational dates. The actual Soyuz/Dragon docking dates and capsule configuration/qualification remain unset.

## 3. Claim matrix

| Manuscript assertion | Opened primary evidence | Necessary assumption / consequence |
|---|---|---|
| Seven until February; four until July | Food is finite; NASA tracks inventory and nutrition, but no source supplies this fictional inventory.[1,2] | Reconcile stock, ration changes, departure date, losses and any food carried away. Arithmetic below shows the constant-ration conflict. |
| Recycling means water/oxygen cannot force return | NASA demonstrated about 98% water recovery; oxygen generation consumes processed water and electrical power.[3] | Recovery is not perfect closure. Water balance, quality, hardware, spares and other air functions can bind first. |
| Kendra can maintain the system | Actual NASA ECLSS reports document crew replacement/cleaning work and finite spares, supported by ground engineering.[4] | Her expertise matters, but onboard tools, procedures, replacement inventory and diagnostic limits must exist. |
| Three Russians leaving mainly reduces food demand | NASA describes interdependent segments and different crew training responsibilities.[5] | It also removes three operators. Remaining crew capability for Russian systems must be addressed without assuming the hardware instantly stops. |
| Dragon life is about 210 days | That was an early operational requirement; NASA documents an eight-month Crew-12 plan and a 237-day completed mission in 2026.[6] | Establish the actual capsule, docking/flight age and applicable approval. Do not impose either 210 or a newly invented universal replacement number. |
| Soyuz life is about 200 days | A 2019 NASA OIG report gives that historical constraint with conditional extensions; current NASA records show MS-28's approximately 241-day flight.[7] | An old limit cannot date a fictional vehicle's mandatory departure without its actual configuration and approved life. |
| Automatic return solves escape | NASA describes autonomous Dragon undocking/reentry, but current return decisions depend on vehicle, weather and recovery readiness.[6,8] | Flight automation does not replace targeting assumptions, condition assessment, recovery or assistance to weakened crew. |

## 4. Food: reconcile the calendar before adding mass figures

### One consistent unit

Define one **person-ration-day** as one person's already-selected daily ration. It is an accounting unit, not a claim of adequate calories or complete nutrition. Let **R** be usable remaining inventory in those units, **T₀** the inventory date, **T₇** the seven-person exhaustion date, **D** the Soyuz departure, and **T₄** the subsequent four-person exhaustion date.

For constant portions, no resupply and no other inventory changes:

`R = 7 × (T₇ − T₀)`

`T₄ = D + [R − 7 × (D − T₀)] / 4`

Equivalently, `T₄ = T₇ + ¾ × (T₇ − D)`.

The **7/4 multiplier applies to remaining duration at departure**, not to the whole original mission. This is independent of whether the inventory was first counted in September or November, provided intervening consumption is counted consistently.

### Illustrative checks—not proposed canon dates

| Seven-person food endpoint | Three depart | Four-person endpoint at the same ration |
|---|---|---|
| February 1, 2029 | December 1, 2028 | Around March 19, 2029 |
| February 15, 2029 | December 15, 2028 | Around April 2, 2029 |
| February 28, 2029 | December 1, 2028 | Around May 6, 2029 |

In the middle example, on November 2 the seven-person projection implies **735 person-ration-days**. Seven consume **301** before December 15, leaving **434**, or **108.5 days for four**. Reaching July 1 instead requires **1,093** November-2 person-ration-days under unchanged portions. Alternatively, the postdeparture daily portion would be about **55% of the already-chosen ration**. That is algebra, **not a medically acceptable ration recommendation**.

Other ration schedules or stock assumptions could reconcile the dates. The text must identify them rather than crediting crew reduction alone. Food leaving with Soyuz or reserved for Dragon's independent return would reduce station availability; it is not an extra supply. Food aboard already-docked cargo counts only if actually accessible and included once. Future planned deliveries do not count as delivered stock.

### What published inventory policy does establish

NASA's December 2023 Food and Nutrition technical brief describes a **four-month reserve for four USOS crewmembers**, not a four-month maximum for the entire station.[1] Its 2025 food-system overview describes inventory/resupply tracked by food-container category and sufficient reserve for cargo slips. Neither establishes the actual September 5, 2028 manifest. The compendium's “a few months at most” is therefore too categorical without a defined inventory basis.

Inventory must distinguish edible stock, preparation-water needs, nutritional composition, package integrity and age. NASA's technical brief lists different shelf lives by packaging/food type; “all space food lasts indefinitely” and “everything expires together” are both wrong models. No new food mass or convenient cache is inferred here.

NASA connects inadequate intake/weight loss with muscle and bone loss and monitors intake and body mass.[2] Calories alone are not sufficient: protein and micronutrient adequacy matter. JSC-67378 requires individualized energy provision and addresses protein/vitamins for exploration missions up to 365 days; it is **not** approval for a sixteen-month emergency diet. No source opened establishes a safe months-long starvation-level ration.

**Highest-leverage author choice:** lock the usable food inventory and ration profile that supports the intended June/July recovery window. Then calculate both crew-count projections from it. If unchanged portions and December departure are retained, July generally implies a seven-person projection into spring rather than February. Preserve the recovery architecture; do not invent a resupply or quietly prescribe a severe extra cut.

## 5. Life support: recycling buys endurance, not immunity

### Water and oxygen

NASA's water milestone and 2025 factsheet support the Tranquility/Node 3 setting, urine vacuum distillation, wastewater/humidity recovery and oxygen generation by electrolysis.[3] That gives Kendra's background and existing urine-processor scene a credible mechanism.

But **98% recovered is not 100%**, and it refers to a processing/recovery boundary, not a rule that the total tank inventory loses exactly 2% each day. Water also serves preparation and oxygen generation; losses, unrecovered waste, quality rejection, gas chemistry and usable stored reserves need a mass balance. Reprocessing contaminated water is not proof that every possible contaminant can always be removed.

The oxygen generator splits water; it does not create oxygen from nothing. Electrolysis needs electrical power, water and functioning components. Oxygen supply and carbon-dioxide removal are also different jobs: having oxygen does not make cabin CO₂ or trace contaminants harmless.

**Configuration caveat:** a generic NASA factsheet explains Sabatier recycling, but the July 2026 technical status paper says the US Sabatier reflight project was canceled after the earlier unit's removal. ESA separately documented its ACLS demonstration.[4,9] Do not combine capability descriptions from different dates/installations into one assumed fully operating 2028 closed loop. This review does not establish the 2026 operating status of every ESA/Russian unit. The same NASA paper planned an advanced oxygen-generator delivery for mid-2027; a plan is not proof of a 2028 installation. Specify the fictional installed/working configuration before crediting its recovery benefit.

### Air, spares and waste

CO₂ removal can use regenerable beds; it is not necessarily a fresh disposable “filter” for every day. Regeneration still depends on functioning valves, airflow, pumps, controls and power. Trace-gas/particulate treatment and atmosphere monitoring are separate needs. NASA reports actual CDRA bed cleaning/reuse and slow valves, plus ventilation-fan issues and conserving a limited spare.[4] Some hardware ran **beyond** expected life—contrary evidence to any automatic breakdown date.

NASA's CRS-33 manifest explicitly carried brine filters, water-processing beds, separator hardware and reserve supplies while returning equipment for refurbishment.[10] That shows the logistics chain Kendra loses. It does not predict which fictional component fails first. Waste storage, hygiene and maintaining potable-water quality also remain finite operational burdens; no waste-tank exhaustion date is established.

The 2026 technical paper describes MCC-H engineering involvement in monitoring, troubleshooting and maintenance training.[4] Loss of that support removes diagnostic expertise and replacement logistics, **not every running controller**. Kendra can plausibly trend data and perform known onboard tasks, but exact local laptop displays/control authority have not been verified. Her existing rough-running processor is enough to make the dependency tangible; no new catastrophe is needed.

### Power, thermal control and orbit

NASA's electrical-system overview explicitly lists autonomous battery charging/discharging, circuit protection and solar-array orientation.[11] Continuous human steering is not required for every orbit. Yet power distribution, batteries, aging mechanisms and fault recovery still matter. The thermal overview describes pumped coolant circuits and external radiators: electrical power without heat removal is not a self-sufficient station.[11]

Routine orientation, gyroscope momentum management, propellant availability and orbital altitude are related but not interchangeable. NASA describes US gyroscopes for day-to-day attitude and Russian thrusters for dynamic/control-limit cases.[5] Reboost counters drag; its required history depends on orbit, atmosphere and configuration. Neither missing a named supply flight nor losing radio instantly fixes a reentry date.

**Contrary evidence to “only Russian vehicles can reboost”:** NASA documented Dragon's CRS-33 boost kit in September 2025, alongside Cygnus capability.[10] That cargo hardware has an independent propellant system; it is not automatically installed on Kendra's Crew Dragon. The older architecture language in NASA's FAQ should not override the newer demonstration. Which cargo vehicles, propellant and working hardware are actually present on September 5 remains an author assumption. No months-long propellant endurance or impact date was calculated.

## 6. December departure and the two lifeboats

Reducing seven to four lowers consumption but also removes the Soyuz's three seats and the three Russian operators. **It does not remove the Russian station modules or instantly disable their machinery.** NASA explicitly says normal crew training is segment-specific and that hands-on maintenance is required on both segments.[5] A credible remaining-four plan therefore needs established procedures, skills transfer, workload and usable onboard resources—not the assumption that Kendra's ECLSS specialty covers all propulsion, power and Russian-system tasks.

Historical ESA documentation shows Soyuz crew using Sokol suits and individually fitted, shock-absorbing seat liners; postflight recovery normally includes help extracting weakened people.[12] A seat is not merely spare cabin volume, and the three-person departure should track assigned seats/suits and trained crew. Exact MS-variant details remain to verify. Land landing avoids a planned ocean recovery but does not guarantee unaided escape, medical fitness or onward survival. Their later fate remains an open author decision, not an outcome supplied by this research.

For qualification, record **each vehicle's identity, launch/docking date, approved mission assumptions, condition and assigned occupants**. Astronaut time aloft is not automatically the age of the current escape craft. If the same March 2028 Dragon remains through summer 2029, that is roughly fifteen–sixteen months, far beyond the roughly eight-month public example checked here; no primary source opened supports certifying that endurance.

NASA's completed Crew-12 mission lasted **237 days**, with approximately **235 calendar days docked** from its separately reported dates.[6] NASA records put Soyuz MS-28's launch-to-landing interval at about **241 days**.[7] These counterexamples invalidate a timeless 210/200-day ceiling; they do **not** establish universal new maxima or prove the fictional vehicles safe. Certification/qualification describes an assessed operating envelope, not a component that necessarily dies at midnight on the limit date.

## 7. Return is a separate dependency chain

NASA's Demo-2 documentation explicitly describes autonomous Dragon undocking, departure and reentry.[6] SpaceX describes Draco maneuvering and parachute descent.[13] Therefore the raw hazards note's assumption that someone must manually calculate a retro-burn is not established. Conversely, automation is not proof that the existing loaded plan, navigation, vehicle health and return target remain usable without ground support months later. Exact crew authority, available software/data and contingency capability require flight-operations review; no commands or targeting procedure are supplied here.

NASA's October 2026 return announcement conditions departure on spacecraft readiness, recovery readiness and Pacific weather.[8] Its older recovery description adds alternate-site decisions, hazard checks, boats, hoisting and medical assistance. Those older Florida locations/weather numbers must not be copied into a 2028 California plan.

The old raw note also says opening the hatch afloat **will** sink Dragon and the crew are necessarily trapped without a fleet. NASA documents normal recovery and contingency rescue alternatives, not that absolute conclusion.[8] Keep the legitimate sea-state, access, propellant-vapor and extraction concerns; remove unsupported inevitability. A crane's nominal capacity alone does not certify yacht recovery. Detailed ship handling/rigging remains a separate topic.

NASA reports postflight dizziness, nausea, imbalance and difficulty performing tasks, with individual variation.[14] Assisted extraction and medical support are prudent planning assumptions, especially after prolonged flight and inadequate nutrition. **“All returning crew cannot walk” is not established as universal**, nor is a precise rehabilitation duration for this fictional exposure. Plan for impaired mobility rather than guaranteeing either helplessness or effortless self-rescue.

## 8. Minimum targeted candidates after review

1. **16, 103–105; canon 672/754:** reconcile inventory, portions, December departure and February/July **2029** endpoints. Keep food exhaustion distinct from a death date or guaranteed safe-until date.
2. **16, 85/103:** preserve the maintenance scene but qualify “neither water nor oxygen would be the reason.” Her confidence should rest on current losses, quality and spares—not perfect recycling.
3. **Compendium §3.5/canon 686:** replace timeless 210-day certification language and the unsourced food maximum with vehicle-/inventory-specific assumptions. Do not substitute an invented 240-day universal limit.
4. **December planning:** acknowledge that three departing people remove expertise and seats as well as mouths. Establish a reviewed remaining-four capability plan without adding a crew death or changing who leaves.
5. **Recovery references/canon 776:** distinguish automatic flight from supported return; retain planned medical assistance while qualifying guaranteed immobility and automatic hatch-swamping claims. Leave yacht certification to the later audit.

**Reader translation—editorial proposal:** one existing spreadsheet comparison can show “fewer mouths starting in December” rather than a magical new expiry date. The rough-running water machine can show why recycling and a shelf of replacements buy time without promising infinity. Readers need those two mechanisms and the separate return/recovery decision, not an encyclopedia of acronyms.

## 9. Primary sources and specialist gaps

Accessed **November 7, 2026**. PDFs retained under `sources/iss-endurance-2026-11-07/`; calendar arithmetic under `conditional-food-calendar.json`. Sources describe their own dates/configurations, not future 2028 installations.

[1] NASA OCHMO-TB-013, **Food and Nutrition**, December 7, 2023, printed p.12/PDF p.13 (reserve; visually verified), PDF p.11 (shelf lives): https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-013-food-and-nutrition.pdf . **Space Food System Overview**, 2025, slides 11–12: https://ntrs.nasa.gov/api/citations/20250004456/downloads/ISS%20Food%20System%20Overview%20-%20ION%20052025.pdf

[2] NASA **Nutritional Biochemistry**, operational goals: https://www.nasa.gov/directorates/esdmd/hhp/nutritional-biochemistry/ . JSC-67378 Rev.1, April 2020, pp.2–4: https://ntrs.nasa.gov/api/citations/20205008306/downloads/JSC67378%20Expl%20Nutr%20Reqs%20042020.pdf

[3] NASA water milestone, June 2023: https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station/ . MSFC 2025 ECLSS factsheet, pp.1–2: https://www.nasa.gov/wp-content/uploads/2025/08/g-657270-59-hp-environmental-control-and-life-support-system-eclss.pdf

[4] NASA technical **2024–2025 ECLS Events**, PDF pp.6–8: https://ntrs.nasa.gov/api/citations/20260002987/downloads/ISS%20ECLS%20Overview%20of%20Events%202025%20Final.pdf . **2026 ECLSS Testbed Status**, pp.6/14, CO₂-reduction status/ground support: https://ntrs.nasa.gov/api/citations/20260003280/downloads/ISS%20ECLSS%20Testbed%202026_final_A.pdf

[5] NASA **ISS Frequently Asked Questions**, updated August 5, 2026, interdependence/training/attitude: https://www.nasa.gov/international-space-station-frequently-asked-questions/

[6] NASA historical autonomy/210-day requirement: https://www.nasa.gov/specials/dm2/ . February 2026 eight-month plan: https://www.nasa.gov/missions/station/what-you-need-to-know-about-nasas-spacex-crew-12-mission/ . October 8, 2026 completed duration: https://www.nasa.gov/news-release/nasas-spacex-crew-12-splashes-down-sets-briefing-to-discuss-mission/

[7] NASA OIG **IG-20-005**, November 2019, printed p.2/PDF p.8, footnote 3: https://oig.nasa.gov/wp-content/uploads/2024/02/IG-20-005.pdf . Current historical vehicle-date table, Expeditions 73–75: https://www.nasa.gov/international-space-station/space-station-visiting-vehicles/

[8] NASA October 2026 readiness criteria: https://www.nasa.gov/news-release/nasa-to-stream-spacex-crew-12-return-splashdown-live/ . Historical recovery/contingency description, April 2021: https://www.nasa.gov/humans-in-space/nasas-spacex-crew-rescue-and-recovery/

[9] ESA historical ACLS capability/configuration, September 2018: https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Research/Advanced_Closed_Loop_System

[10] NASA CRS-33 hardware manifest: https://www.nasa.gov/missions/station/commercial-resupply/spacex-crs/nasas-spacex-33rd-commercial-resupply-mission-overview/ . Completed boost demonstration: https://www.nasa.gov/blogs/spacestation/2025/09/03/nasa-spacex-complete-dragon-space-station-reboost/

[11] NASA-hosted historical electrical overview, slide 10 (autonomous functions): https://ntrs.nasa.gov/api/citations/20160014034/downloads/20160014034.pdf . Historical ATCS overview, p.1: https://www.nasa.gov/wp-content/uploads/2021/02/473486main_iss_atcs_overview.pdf

[12] ESA fit check, May 2012: https://blogs.esa.int/promisse/suited-fit-check-for-iss-crew-the-promisse-mission.html . Recovery overview, September 2015: https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/The_return_home

[13] SpaceX Dragon, trunk/Draco/parachute descriptions: https://www.spacex.com/vehicles/dragon/

[14] NASA postlanding performance research, April 2022: https://www.nasa.gov/humans-in-space/new-tests-evaluate-mission-readiness-of-astronauts-upon-landing/

**Remaining review:** actual food/propellant/spares inventories, nutritional adequacy, spacecraft-specific qualification and degradation, autonomous/crew authority without ground teams, cross-segment maintenance competence, and recovery readiness. No current authoritative Roscosmos MS qualification document was obtained; NASA's records are the checked evidence, not a substitute for it. ECLSS/ISS flight-operations, aerospace-medicine/nutrition and capsule specialists should review the selected assumptions. No failure date, forced departure, new cargo delivery, protected survival mechanism or returning-crew identity was invented.
