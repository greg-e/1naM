# Grocery store backup power at Port Angeles: plausibility

Research note, 2026-11-15. Question: could Port Angeles grocery stores have run on backup power after the grid fell, for how long, and could the group keep a few of them going to save frozen food and keep the stores from rotting? Figures are rough planning numbers from vendor and agency sources; anything going on the page needs its `[verify]` cleared.

## 1. The stores

From directory and SNAP-retailer listings (all `[verify for 2028]`):

| Store | Address |
| --- | --- |
| Safeway #1492 | 110 E 3rd St |
| Safeway #1922 | 2709 E Hwy 101 (a 3500 E Hwy 101 listing may be stale) |
| Walmart Supercenter #2196 | 3411 E Kolonels Way |
| Grocery Outlet | 2823 E Hwy 101 (opened 2021) |
| Albertsons (possible) | 200 W 1st St (unconfirmed) |
| QFC #841 | 990 E Washington St, **Sequim** (none in Port Angeles) |

## 2. Backup power: who had it, and for how long

- **Most supermarkets have little or none.** No Washington law requiring grocery generators was found. HB 1841 (2007) would have required backup power for groceries with 20+ employees by 2009; passage unconfirmed `[verify]`. Industry sources say most store generators carry lights, registers, and controls, not refrigeration. Full-refrigeration backup is mostly a hurricane-country practice (Publix, H-E-B).
- **No natural gas, probably.** The early-2000s Orca pipeline proposal describes the Olympic Peninsula as not served by natural gas `[verify current status with Cascade Natural Gas / Clallam PUD]`. Natural gas is how stores elsewhere get open-ended runtime. Here any generator is almost certainly diesel or propane with a finite tank.
- **Typical tanks:** 8, 24, or 48 hours at full load. NFPA 110 Level 1 (24 h at full load) applies to life-safety systems, not groceries. Partial load stretches a tank toward 48–72 h.

### Against the book's timeline

- Event: 23:00 PDT Mon Sept 4. Western grid falls 04:12 PDT Wed Sept 6, ~29 hours later. Until then every store's refrigeration ran normally.
- A store with a generator transfers at 04:12 Wednesday and, on a 24–48 h tank, runs dry roughly **Thu 04:00 to Fri 04:00**.
- A store without one: open-front cases warm within hours. A closed walk-in freezer holds frozen for roughly 1–2 days (sources are mostly home freezers: full ~48 h, half full ~24 h; a full walk-in likely longer `[verify]`).
- **The window to save anything is Thursday and Friday (Days 2–3)**, exactly when the group is bagging *Active*'s five, starting Della's withdrawal care, and moving the airplane (Section 9).
- Existing hook: Section 8's approach shows "one lit building in Sequim." It could be a store on its generator.

## 3. Keeping a store running

- **Load.** US supermarkets average ~50 kWh/sq ft/yr. A 50,000 sq ft store ≈ 2.5 GWh/yr ≈ **285 kW average**; refrigeration ≈ 50–70% ≈ **140–200 kW**. With lights and HVAC off, call it ~150 kW.
- **Fuel.** Diesel at 150–200 kW and ¾–full load: ~8–14 gal/hr. **~200–260 gal/day per store**; three stores ~700 gal/day, a tank-truck run every few days.
- **Fuel sources** (not the limit): *Active*'s tanks, the Hook's standby-diesel tanks, local bulk plants, KCLM's Jet-A trucks (Jet-A in a diesel genset `[verify lubricity/engine tolerance]`).
- **What breaks it:**
  - Standby gensets are rated for short outages, not months of continuous duty. Oil changes every ~250–500 h (every 10–20 days) `[verify per engine]`. That's Della's trade, but she's a patient until ~late November and doesn't run jobs from her bunk (canon).
  - Supermarket rack refrigeration needs defrost cycles, condenser cleaning, refrigerant service. Nobody in the group is a refrigeration tech. The first compressor alarm ends it.
  - **The return is terrible.** Six people eat ~15 kg of food a day. Running a whole store's refrigeration for that is almost entirely waste, and John would do that arithmetic.

## 4. Better versions

1. **The cutter already covers frozen food.** *Active* was provisioned for 60+ days for ~100–120 crew: 6,000+ person-days, roughly 1,000 days for six people (not all frozen). The real gap is variety (fresh produce, dairy), not calories.
2. **Reefer trailers to the Hook.** Grocery distribution reefer trailers have their own diesel units (~0.5–1 gal/hr) and often an electric standby plug (230/460 V) `[verify Carrier/Thermo King standby specs]`. Load the best stock from a Safeway walk-in at the dock, haul it to the Hook, plug it into reactor-fed power. A 40 ft marine reefer at −18°C draws ~6–9 kW (peaks ~13–15 kW); the reactor's 1.1 MW runs dozens without noticing. One afternoon's work instead of a standing fuel run.
3. **One walk-in, not three stores**, if they want a cold store in town.
4. **Shelf-stable stock is the stores' real value**: canned goods, rice, pasta, flour, coffee, pet food, good for years. One Safeway holds more than six people eat in a decade. The work is moving it into sealed bins at the Hook before rodents get into the packaging.

## 5. Pests and rot

Whatever isn't emptied rots in place: meat, dairy, and produce in every store within a week or two of the power failing, then flies, rats, raccoons, possibly black bears. The group won't clean out every store. They pick one, strip its perishables in a day, and let the rest go. This fits the bounded-vs-unbounded contrast in "Why the Hook" (CLAUDE.md, Places).

## 6. Story options

- **Declined on the page (Day 2).** John or Sam weighs a lit store against the Hook work, does the 250-gal/day arithmetic, and lets it go. A quiet grief beat; keeps the machine-keeps-going motif honest.
- **The reefer-trailer save.** A small, competent win in the first two weeks; a real task for Sam or Catherine; milk and fresh vegetables in the galley.
- **Later**, the stores in October: a supply run shaped by a danger window (CLAUDE.md, Threads to keep developing).

## Open `[verify]` items

- Natural gas service in Port Angeles (Cascade / Clallam PUD).
- The 2028 store list, and whether any Port Angeles store had a refrigeration-capable generator.
- HB 1841 (2007) status.
- Walk-in freezer hold time with the door shut.
- Reefer trailer electric-standby voltage/plug and draw.
- Jet-A in a diesel standby generator.
- Oil-change interval for continuous standby-genset duty.
- *Active*'s frozen vs dry provision split.

## Sources

- Grocery Outlet opening: https://www.peninsuladailynews.com/?p=186093
- Walmart #2196: https://www.walmart.com/store/2196
- EBT store list, Port Angeles: https://acceptsebt.pages.dev/washington/port-angeles/
- Marathon Electric, generators in supermarkets: https://www.marathonelectric.com/articles/the-vital-role-of-generators-in-supermarkets
- Generac, Festival Foods natural gas generator: https://www.generac.com/Industrial/professional-resources/news-whitepapers/powerconnect-newsletter/archived-articles/june-2016/festival-foods-selects-natural-gas-generator
- Diesel fuel storage and NFPA 110: https://muhammed.portlandiaelectric.supply/blogs/generators/diesel-fuel-storage-emergency-backup-power
- GenPower, diesel continuous runtime: https://www.genpowerusa.com/blog/guide-how-long-a-diesel-generator-can-run-continuously
- Server Room Environments, generator runtime: https://www.serverroomenvironments.co.uk/faqs/generator-services-faqs/how-long-can-a-generator-provide-backup-power-for
- WA HB 1841 (2007): https://lawfilesext.leg.wa.gov/Biennium/2007-08/Htm/Bills/House%20Bills/1841.htm
- RILA emergency generator fact sheet: https://www.rila.org/getmedia/70939203-31fa-4774-8883-2524338108c9/Emergency-Generator-Fact-Sheet-4_2025.pdf?ext=.pdf
- NGI, Orca pipeline proposal: https://www.naturalgasintel.com/new-pipeline-sets-sights-on-the-northwest/
- UIUC Energy Sense, supermarkets: https://energysense.uillinois.edu/supermarkets/
- ENERGY STAR supermarket chapter (archived): https://webarchive.library.unt.edu/web/20120924194854/http:/www.energystar.gov/ia/business/EPA_BUM_CH11_Supermarkets.pdf
- Depco diesel consumption chart: https://www.depco.com/resources/diesel-fuel-consumption-chart/
- Generator Source diesel consumption: https://www.generatorsource.com/Diesel_Fuel_Consumption.aspx
- Oregon OEM, freezer safety after outages: https://apps.oregon.gov/oregon-newsroom/OR/OEM/Posts/Post/freezer-safety-after-outages
- UMaine Extension, frozen food during outages: https://extension.umaine.edu/publications/?p=2676
- Container Handbook, reefer power consumption: https://containerhandbuch.de/chb_e/wild/wild_08_01_02.html
- Identec, reefer plugs: https://www.identecsolutions.com/news/101-reefer-plugs
- Identec, reefer operations: https://blog.identecsolutions.com/news/reefer-operations-how-to-optimize-efficiency-and-safety?hsLang=en
- Peninsula Daily News, windstorm outages: https://www.peninsuladailynews.com/news/more-than-22000-lose-power-on-peninsula-in-overnight-storm
