# PC-12 rescue missions: variant, payload, fuel, and time

**Research baseline:** November 7, 2026. **Story:** September 2028. Author reference, not flight planning, an aircraft release, or approved performance guidance. No manuscript or repository files changed.

## 1. Short verdict

The rescue sequence is **not demonstrated impossible**. Its principal distances fit the general capability of the chosen aircraft, but brochure range cannot validate these particular missions. The strongest confirmed defect is a **ground-clock contradiction**, not inadequate aircraft range: arriving at the PDK hangar at 10:05, spending another seventy minutes reviewing the manual, and starting/taxiing at 10:45 cannot all happen.

The PRO/Autoland choice has stronger real-world support than the existing references imply: Pilatus announced FAA/EASA certification in September 2026. However, John's description overstates what Autoland needs. Actual loading, especially the full-fuel short hop to the Hook, requires a real weight-and-balance basis before the manuscript's precise margins can be endorsed.

## 2. Manuscript facts and review boundaries

Read-only snapshot: November 7, 2026, afternoon **EST**. Section 06's observed modification time was 3:11 PM EST; concurrent survivor-evidence/grid revisions may subsequently move lines. Anchors below describe the reviewed snapshot, not a frozen repository.

Reviewed: `CLAUDE.md` aircraft/timeline entries; flight passages in `01-Sam.md` 145–177, `02-John.md` 3–37, `06-John and Sam.md` 185–241; all `07-Phoenix.md`; `09-Ediz Hook.md` 75–99; `10-Huntsville.md` 1–110 and 287–344; arrival in `11-Return to Ediz Hook.md` 1–43; `reference/research-compendium.md` §4; `reference/pc-12 to atl.md`; and the actual `reference/PC-12-PRO-Brochure.pdf`. The workbook `reference/global-flight-traffic-model.xlsx` was identified but not used. This is not an exhaustive aircraft or weather audit.

**Settled aircraft:** Day 0 is Honeywell-equipped NGX **C-GKPX**; Day 1 onward is Garmin-equipped PRO **N612PR**, six-seat executive interior (`CLAUDE.md` 780–783). Sam has about 800 earlier PC-12 hours, not zero familiarity. Actual empty weight, loading arms, equipment list, current differences training and the fictional registrations' real-world availability remain unverified. John's G1000 experience is useful background, not proof of mastery of G3000 PRIME.

## 3. Primary-source claim matrix

| Claim | What the opened source establishes | Boundary / scene implication |
|---|---|---|
| NGX versus PRO | Pilatus's NGX release identifies Honeywell ACE and PT6E-67XP; PRO documents identify G3000 PRIME. EASA distinguishes PC-12/47E and /47G configurations.[1–4] | The panel change is real; do not transfer a panel feature or manual automatically between aircraft. |
| PRO speed and range | Current brochure: **290 KTAS at FL220**; **1,765 nm with four passengers / 1,565 nm with six**, at long-range cruise, ISA, FL300, NBAA IFR 100-nm alternate assumptions.[1] | These are different operating points, not simultaneous maximum speed/full payload/maximum range. |
| NGX range | 2024 NGX sheet: **1,803 / 1,568 nm** for four/six passengers; its range table specifies single-pilot, six-seat executive configuration and the stated reserve/cruise assumptions.[3] | The 1,803-nm answer in 02 concerns the NGX and can stay appropriately qualified. Do not apply it to the PRO. |
| Fuel and weights | PRO brochure: **2,704 lb / 402 US gal usable fuel**, **2,336 lb maximum payload**, **1,087 lb with full fuel**, **6,703 lb basic operating weight**. EASA /47G: **10,450 lb takeoff, 9,921 lb landing**, with separate ramp and CG limits.[1,4] | Full fuel is not full payload; “under takeoff weight” does not establish landing-weight or CG compliance. |
| Autoland in 2028 | Pilatus's September 24, 2026 release reports FAA/EASA approval, button/inactivity activation, and airport choice using weather, wind, fuel and runway considerations.[5] | Supports the established discovery beat, not a universal retrofit or any specific aircraft's installed/approved software configuration. |
| Autoland requirements | Garmin's certification release describes a suitable GPS approach with lateral **and vertical** guidance and multiple performance/environmental criteria.[6] | “Nearest runway” and “GPS and runway database…that's all” are too categorical; confirm PRO-specific limits in its own supplement. |
| Runway figures | Brochure takeoff/landing figures, **2,485 / 2,170 ft over a 50-ft obstacle**, explicitly assume specified weights, ISA, sea level and dry pavement.[1] | They do not validate Phoenix at the manuscript's **41°C**, a particular touchdown point, or an unattended runway's condition. |

**Important reference correction:** visual inspection of the repository brochure's printed p.40 confirms that “440 KTAS,” “FL450,” and the older range numbers are actually visible in that edition. These are **not merely extraction errors**. The fresh manufacturer brochure's same page says 290 KTAS, climb to **FL250** in 19 minutes, and PRO range 1,765/1,565 nm. The compendium's suggestion that the climb label probably means FL300 should not survive that comparison. Source quality/version control matters here.

## 4. First mission ledger

Times below preserve story-local clocks and offsets. EDT = UTC−4, CDT = UTC−5, MDT = UTC−6, and both Arizona MST and Washington PDT = UTC−7. Elapsed times are arithmetic on the stated clocks, not certified airborne/block times. Some prose headings precede engine start/taxi, while canon calls them wheels-up; that distinction needs normalization.

US airport identifiers/coordinates were checked against AirNav's FAA-derived records, effective October 29, 2026.[8] Computed distances are rounded **great-circle lower bounds**, not filed routes; they exclude circuits, deviations and low passes. CYEG's leg distance below is manuscript information, not an independently calculated distance.

| Date / aircraft / route | Stated local clocks | Nominal elapsed / distance | Load and fuel evidence; confidence |
|---|---|---|---|
| Sept 5, NGX: CYEG → KMSP | 05:31 MDT → 09:45 CDT | **3h14**; prose says about 940 nm | Sam alone; Edmonton filled to 2,704 lb. Arrival/refill shown in 01, 167–177. High confidence in textual clocks, not performance. |
| Sept 5, NGX: KMSP → KPDK | 10:30 CDT → about 14:18 EDT | **2h48**; **779 nm** | Sam alone; full tanks at MSP, 45-minute turn. Departure in 01/02; PDK arrival time from canon. |
| Sept 6, PRO: KPDK → KAMA | 10:45 EDT → 13:15 CDT | **3h30**; **863 nm** | Sam, John, Dan, Jackery/panels, dev box, bags/food; full tanks claimed in 06. Launch clock contradicted by preceding review. |
| Sept 6, PRO: KAMA → KPHX | 13:50 CDT → 15:15 MST | **3h25**; **522 nm** | Same load; Amarillo refuel, quantity unstated. Tempe low passes at 14:50 MST. 35-minute Amarillo turn. |
| Sept 6, PRO: KPHX → KCLM | 16:10 MST → 20:25 PDT | **4h15**; **1,022 nm** | Adds Catherine, duffel, water and medical bag; Phoenix refuel, quantity unstated. Text claims 170-lb margin. 55-minute Phoenix turn. |
| Sept 8, PRO: KCLM → KNOW | Around 10:30 PDT transfer; **eleven minutes** on panel clock | **3.7 nm** direct, plus low pass/circuit | Both tanks filled at KCLM; Sam, John, Dan, Jackery/dev box. John flies; Sam lands. 09, 75–97. Exact clock measurement boundary unstated. |
| Sept 10, PRO: KNOW → KOMA | 06:35 PDT → 13:05 CDT | **4h30**; **1,236 nm** | Sam and Catherine; John, Della and Dan stay. Jackery explicitly removed; medical equipment, saline, two oxygen cylinders, stretcher added. About **780 lb** remain; then **290 gal** added. Starting fuel not explicitly established that morning. |
| Sept 10, PRO: KOMA → KHSV | 13:50 CDT → 16:05 CDT | **2h15**; **588 nm** | Same two people/equipment; includes Browns Ferry/house search flying. Omaha turn 45 minutes; actual departure fuel mass unstated. |
| Sept 11, PRO: KHSV → KOMA | 06:50 CDT → 10:25 CDT | **3h35**; **588 nm** direct, storm deviations additional | Adds Tyler/backpack and changed rescue load; **140 gal** added at HSV “right up to 2,704 pounds”; **760 lb** at Omaha. 10, 287–343. |
| Sept 11, PRO: KOMA → KNOW | About 11:10 CDT → 14:20 PDT | **5h10**; **1,236 nm** | Three aboard; canon gives about **500 lb** on arrival. These departure/fuel figures are canon, not shown in the sampled arrival prose. 11 confirms 14:05 radio call, forty miles out, landing about fifteen minutes later. |

## 5. What the ledger can—and cannot—prove

### A. Time: one contradiction and two decisions

**Confirmed contradiction:** 06, 214–236 places hangar arrival at 10:05, then logs/system discussion, a request for fifteen minutes, then “an hour and ten minutes later,” followed by towing/loading and 10:45 start/taxi. Seventy minutes after arrival alone is **11:15**. The estimate becoming seventy minutes can be good characterization; the clock cannot run backward.

**Amarillo–Phoenix:** 13:50 CDT is **11:50 MST**. Thus the Tempe passes at 14:50 occur three hours later, and PHX landing is 3h25 after Amarillo. A slower route or substantial search flying is possible, but none should be invented to repair what canon already flags as an approximately two-hour leg. Resolve which working time is intended. Breakfast's Nashville fuel plan versus Amarillo can be a changed plan, but currently lacks an explicit transition (`06` 196; canon 542).

**Dusk:** Phoenix and Port Angeles have the same UTC offset in September. No extra hour appears on that leg. In 07, 154, Sam gives sunset as 19:55 but arrival as 20:25, after earlier saying he will not risk arrival past sunset. That is a conflict with his stated limit, not proof that this day/night-certified aircraft cannot fly then. Decide whether he consciously revises the limit; do not silently redefine sunset. The actual astronomical sunset has not been independently checked here.

Lower-bound distance divided by nominal elapsed yields approximately **247 kt PDK–AMA, 241 kt PHX–CLM, 275 kt KNOW–OMA, and 261 kt OMA–HSV**. These are not required indicated airspeeds: wind, climb/descent and extra distance matter. The 290-groundspeed observation in 10 is one observation, not a complete wind/performance solution. No leg is rejected merely because a marketing maximum and an average differ.

### B. Payload, balance, and the short-hop trap

The prose supplies **45 lb for Dan** (06) and **125 lb for Catherine** (07). Sam/John/Tyler, panels, dev box, bags, groceries, water and medical equipment lack a complete mission manifest. The compendium's approximately 135-lb Jackery remains a **verification item**, not a measured aircraft load. The developing six-person group is not aboard these early missions.

The NGX sheet explicitly says its **6,803-lb operating-weight example includes one pilot**. The reviewed PRO tables do not spell out an equivalent pilot allowance. Do not blindly double-count Sam—or omit him—when using the PRO's 6,703-lb example. Get the fictional aircraft's actual empty/equipped weight and the selected operating-weight convention first.

The full-fuel payload number is only a screening value. Published ramp weight is about **45 lb above maximum takeoff weight**; ramp allowance is not permission to take off at ramp maximum. CG additionally requires actual stations/arms, approved seating, compartment limits and secured loads. “Inside the envelope with 170 pounds to spare” is presently unverified and does not say which limit binds.

**KCLM–KNOW deserves a specific landing-weight check.** It starts with full tanks and heavy equipment aboard but lasts only eleven minutes. At maximum takeoff weight, **529 lb** must be lost to reach the published normal landing limit. That does **not** mean this flight actually starts at maximum weight or is overweight: a light enough manifest can solve it. It means the previous long leg's substantial fuel burn cannot be assumed for this hop. This is a conditional constraint, not grounds to invent a stop, dump cargo, or declare an accident.

### C. Fuel: promising internal arithmetic, incomplete performance evidence

If the Sept 10 KNOW departure were at 2,704 lb, arriving with about 780 after 4.5 hours implies approximately **428 lb/hour overall**. But the latest explicit full-tank event is Sept 8 at KCLM, before the transfer; a fresh Sunday top-off is not shown. That starting-fuel assumption needs resolving, not silently adopting.

The source's nominal conversion, 2,704 lb ÷ 402 US gal, is about **6.73 lb/gal**. On that reference basis, 290 gal adds about 1,951 lb: combined with “about 780,” about 2,731 lb. The roughly 27-lb difference from capacity is **not a proven overfill**: the remainder is approximate and actual volume-to-mass conversion depends on density/temperature. Preserve one consistent mass ledger rather than treating every rounded number as instrument-exact.

The return's explicit full HSV departure and 760-lb Omaha arrival imply **1,944 lb consumed over 3h35**, approximately **543 lb/hour overall**. That is internally compatible with a higher-burn low-altitude segment followed by climbing; it does not verify the stated **600 versus 400 lb/hour** performance claim. Pilatus's NGX cost example uses 69 gal/hour over a specified 300-nm climb/cruise/descent mission—not a PRO fuel table for either altitude.[3]

Every real mission calculation needs taxi, climb, descent, low passes, deviations, weather, usable fuel and reserve. A nominal 100-nm-alternate marketing assumption is not a dependable usable alternate in this world. A long runway on a map is not confirmation of clear pavement or accessible fuel. No universal reserve or dispatch approval is inferred here.

### D. Ground turns and equipment

The shown **35/55/45-minute** Amarillo/Phoenix/Omaha turns are not inherently impossible; no source establishes that these particular unattended turns work. Working equipment, energy to dispense fuel, accessible keys, usable product and sufficient time for checks are author-established conditions, not automatic properties of an abandoned airport. Keep deliberately easy stops easy; don't manufacture breakdowns to demonstrate research.

AirNav's FAA-derived KNOW record supports the existing **4,500-ft runway**, but not its fictional 2028 surface, lighting, clearance or performance conditions. No refueling improvisation or procedure is recommended. Rescue equipment also needs mass, restraint and configuration checks; empty passenger seats do not establish suitability for an occupied stretcher.

## 6. Minimum edit candidates after author review

1. **Fix the PDK master clock first.** Choose an earlier hangar arrival or later launch and propagate only the resulting necessary changes. Preserve believable differences familiarization rather than forcing it into an implausibly short review.
2. **Refresh the PC-12 reference table, not the whole novel.** Separate NGX and PRO; replace the obsolete PRO range/climb entries; correct the claim that the visible old-brochure errors are only text-layer problems. Keep 02's NGX answer qualified to its source assumptions.
3. **Narrow John's Autoland explanation.** Retain automatic activation/discovery. Remove “nearest” and “that's all it needs”; convey suitable approach, aircraft condition, fuel/weather limits. The manufacturer cockpit diagram identifies button 7, but exact guard/label and installed supplement still need confirmation. Nothing opened establishes detection of new wreckage or animals on the selected runway.
4. **Complete one private mission load/fuel sheet before retaining exact margins.** Include normal landing weight on the full-fuel short hop, Sunday's departure fuel, and the return load change. Do not invent people's weights to make the answer fit.
5. **Reconcile the secondary schedule statements.** Resolve the already-flagged Amarillo/Arizona hour, Nashville plan change and Sam's sunset limit. Preserve existing destinations and rescue order; these are continuity decisions, not reasons to add a fuel stop.

**Highest-leverage author choice:** Which Day 1 departure clock should govern the existing rescue sequence? Aircraft identity is already settled. Locking the launch clock before polishing individual ETAs prevents several local repairs from contradicting one another.

**Reader translation—editorial proposal, not new canon:** make one existing loading/fuel decision carry the lesson: the airplane can carry fuel or useful load only within shared limits, and reaching a destination is not the same as retaining options. In 10, the already-written lower-altitude fuel recalculation can teach that mechanism without a specification lecture. In 09, an unobtrusive checked landing-weight result could establish competence if the manifest supports it; no new obstacle is required.

## 7. Sources actually opened and remaining review

Accessed **November 7, 2026**; manufacturer's numerical tables extracted and relevant pages visually checked against rendered PDFs.

1. **Pilatus, current PC-12 PRO brochure**, printed p.40 / PDF p.43, performance/weights; p.41 operations: https://www.pilatus-aircraft.com/assets/files/Brochures/PC-12-PRO/PC-12-PRO-Brochure.pdf
2. **Pilatus, PC-12 PRO Just the Facts (2025)**, printed pp.10–11 / PDF p.7, performance/weights; pp.18–19 / PDF p.11, cockpit/button 7: https://www.pilatus-aircraft.com/assets/files/PC-12-PRO-Just-The-Facts-2025-web.pdf
3. **Pilatus, PC-12 NGX Just the Facts (2024)**, printed pp.6–7 / PDF p.4, operating-weight basis; pp.10–11 / PDF p.6, payload/range and cost assumptions: https://oldwww.pilatus-aircraft.com/data/document/2024_PC-12_NGX_Just_The_Facts_6667f3a4e3383.pdf . NGX manufacturer panel/engine description: https://www.pilatus-aircraft.com/en/news/the-world-s-best-turboprop-better-than-ever-pilatus-reveals-the-pc-12-ngx
4. **EASA TCDS A.089, Issue 11, July 7, 2025**, §D.IV p.31 (NGX-era /47E POH Report 02406); §E.III pp.33–36 and §E.IV p.38 (/47G limits and POH **02523**, Issue 02/Revision 00 or higher): https://www.easa.europa.eu/en/downloads/7348/en . Current listing checked: https://www.easa.europa.eu/en/document-library/type-certificates/aircraft-cs-25-cs-22-cs-23-cs-vla-cs-lsa/easaa089-pc-12-and
5. **Pilatus, September 24, 2026, “PC-12 PRO: Safety Autoland is Certified,”** introduction and “A smart system for emergencies”: https://www.pilatus-aircraft.com/en/news/pc-12-pro-safety-autoland-is-certified
6. **Garmin, May 18, 2020, Autoland certification release**, airport-selection/approach paragraphs; general architecture, not PRO-specific approved instructions: https://www.garmin.com/en-US/newsroom/press-release/aviation/2020-garmin-autoland-achieves-faa-certification-for-general-aviation-aircraft/
7. **Pilatus technical-data calculator assumptions**, NBAA reserve, person/loading and flight-planning disclaimer: https://www.pilatus-aircraft.com/en/pc-12/technical-data . Numeric fields did not render reliably, so no table numbers were taken from that page.
8. **Secondary coordinate source:** AirNav FAA-derived airport profiles, effective October 29, 2026: https://www.airnav.com/airport/KMSP ; https://www.airnav.com/airport/KPDK ; https://www.airnav.com/airport/KAMA ; https://www.airnav.com/airport/KPHX ; https://www.airnav.com/airport/KCLM ; https://www.airnav.com/airport/KNOW ; https://www.airnav.com/airport/KOMA ; https://www.airnav.com/airport/KHSV . Haversine calculation, spherical radius 3,440.065 nm; inputs/results preserved in `sources/pc12-2026-11-07/distance-calculation.json`. Not independently checked against original FAA coordinate records; precision is rounded accordingly.

**Limitations:** The applicable approved PRO AFM and Autoland supplement were not obtained. A bounded search located manual references, not enough approved performance data to certify these legs. Garmin's ALuse endpoint did not expose useful limits in the fetched page. Airport profiles are not fictional-day NOTAMs or weather. `reference/pc-12 to atl.md` concerns an older **CYVO–KATL** premise, not this CYEG–MSP–PDK mission; its burn/reserve numbers were not imported. Storm technique, turbulence speed, icing, present-day pilot qualifications, actual W&B and hot-day performance require a PC-12-qualified specialist/current approved documents. Future Atlantic ferry planning remains separate. No new stop, route, aircraft, accident or cargo removal is proposed as canon.
