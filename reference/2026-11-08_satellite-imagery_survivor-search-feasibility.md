# Satellite imagery and diff checks for survivors: feasibility

**Research baseline:** November 8, 2026. **Story:** September 2028. Author research, not canon. Nothing here changes a scene; the closing section suggests where it could go.

## 1. Conclusion

John can get real imagery, and it's worth having, but it's a poor way to find survivors. The technique works on paper: in a world where the dead don't move, anything that changes between two images taken *after* 02:00 was moved by someone alive. What breaks it is time. The imagery reaches him only through the internet, through cloud processors and ground stations that nobody is tending, and the window closes the morning he leaves Alpharetta (Wednesday, ~08:15). That gives him one round of post-event daytime images (Tuesday morning, local) and one night-lights pass (the night of Sept 5–6). He never gets a second post-event daytime image to compare against the first. The one exception is weather satellites that broadcast to anyone; a receiving station at the Hook could give him night lights all winter (§8).

What imagery does well in that window, in order:

1. **An independent check for question 1 ("Where else?").** Sentinel-2 can count moving trucks, so Tuesday mid-morning shows empty interstates across the whole country. This is the "independent normal-activity check in separated daytime regions" that Section 2 already assigns.
2. **Hazards.** Fires, smoke plumes, burn scars, crash sites, and cooling-tower plumes that have stopped.
3. **The grid's collapse, seen from above.** On the night of Sept 5–6 the Eastern Interconnection is dark and the West is still lit. This agrees with what Kendra saw from the cupola in Section 16.

As a survivor finder it mostly turns up noise. That fits the Scarcity rule. It also teaches the same lesson as the QuikTrip control: an empty result tells you about the coverage, not about the world.

## 2. What exists, and what each sensor can see

| Source | Ground resolution | Revisit | Tasking | Survivor value |
| --- | --- | --- | --- | --- |
| **VIIRS Day/Night Band** (NOAA-20, NOAA-21; Suomi NPP if still flying in 2028 `[verify]`) | ~750 m; Black Marble gridded 500 m | Nightly, ~01:30 local | None; images everything | Lights, not people. NASA says the high-definition Black Marble maps should not be used to monitor individual buildings. |
| **GOES-East/West ABI** | 0.5–2 km | Every 5 min over CONUS | None | Fires and smoke only |
| **Landsat 8/9** | 30 m multispectral, 15 m pan, 100 m thermal | ~8 days combined | Fixed acquisition plan | Fires, burn scars, plumes |
| **Sentinel-2** (A/B/C) | 10 m | 5 days at the equator, shorter at mid-latitudes | Fixed plan, written 10–15 days ahead | **Moving trucks** (see §3), fires, plumes |
| **PlanetScope SuperDoves** | ~3.7 m native, sold as 3 m | Near-daily, all land | Automated, always on | Large ground signals, crashed trucks, smoke; individual cars only marginally |
| **Planet Pelican** | 40–50 cm-class (Gen 2 aims for 30 cm) | Tasked | Customer orders | Cars clearly; a person as a dot |
| **Vantor (ex-Maxar) WorldView Legion** | 30 cm pan | Up to 15 revisits/day mid-latitude, best case | Customer orders; NGA standing orders | Cars clearly; a person as a 1–2 pixel dot with a shadow |
| **Commercial SAR** (Capella, ICEYE, Umbra) | ~0.25–1 m `[verify]` | Tasked | Orders | Sees through cloud and at night; vehicles, disturbed ground |

**The resolution floor for a person is ~30 cm**, and only for satellites that photograph what's on an order list. All of Legion's 30 cm capacity is ~3.6 million km² a day worldwide. CONUS is ~8 million km², and most of that capacity goes to standing defense and commercial orders, not suburbs.

## 3. The one mechanism that genuinely helps: Sentinel-2's moving-truck rainbow

The Sentinel-2 instrument records its color bands a fraction of a second apart. A stationary object lines up across all the bands. A moving one doesn't, so a truck at highway speed shows up as a short streak split into colors. Fisser et al. (2022) built a classifier on this effect, scored F1 ≈ 0.74 globally, and matched German traffic-count stations at r = 0.82. It works on trucks moving faster than about 50 km/h. It doesn't work on cars, and it gives relative abundance, not exact counts. Aircraft in flight show the same split.

For the book this is a gift: it's real, it's specific, and it answers a question nobody can answer from the ground. On **Tuesday Sept 5, ~10:30 local solar time** (Sentinel-2's descending-node time), across every tile imaged that morning, the truck count on the interstates drops to almost nothing. Compare it with the previous Tuesday, **not Monday**: Monday was Labor Day, with holiday traffic and full driveways.

**What it can't do:**
- It can't see John's car on GA-400 (a car is half a 10 m pixel). John is no positive control here, unlike his 911 call.
- It could catch Sam's PC-12 in flight (Edmonton–MSP 07:31–10:45 EDT; MSP–PDK 11:30–14:18 EDT), but only if a 290 km swath crossed his track at the right minute. That's a real possibility, not a given `[verify with an orbit propagation for Sept 5, 2028]`. If it happens it's a strong positive control; if it doesn't, it proves nothing.
- **Hits aren't people.** In 2028, Waymo runs driverless 24/7 in Phoenix and on surface streets in Atlanta, and Aurora runs driverless trucks on Texas freeways (Dallas–Houston from 2025 `[verify; from memory, not checked this session]`). A driverless truck still on I-45 Tuesday morning is the "machine keeps going" motif, and CLAUDE.md requires any new use of that motif to be a conscious echo. Whether a driverless truck finishes its run and parks, or starts new runs with nobody to load it, is `[decide]`. Expect false positives too: brightly colored roofs, and cars on rail lines.

## 4. Night lights: generators, not people

The dark map is easy to imagine: after the grid falls, any light still on the ground must be... something. But **every dead household with a standby generator lights up too.** John's own house picks up its generator at 00:50 Wednesday. So do hospitals, data centers, cell sites with gensets, and homes with islanding solar-plus-battery. Detection sensitivity isn't the problem: the Day/Night Band picks up lit fishing boats, and Elvidge's group reports it can see isolated point sources as faint as single street lamps `[verify: the 2015 Remote Sensing paper's exact claim; I couldn't open it]`. The trouble is that a lit point on the map is a generator, not a survivor.

The survivor signal would be a **change from one night to the next** (a light that was off comes on). John gets only one post-event night pass before he leaves, and the tool's own limits (750 m pixels, cloud, moonlight, viewing angle) make a one-house change too small to trust.

**Timing that fits canon:** the Sept 5–6 night passes cross the US between ~05:30 and ~10:00 UTC. NASA's LANCE near-real-time Black Marble aims to deliver within ~3 hours. So the East's 01:30 EDT pass could be in hand by ~04:30–06:30 EDT Wednesday, about when John comes down to breakfast (06:30) and tells Sam about the grid. It would show the Eastern Interconnection dark (it collapsed around midnight; John's house lost power at 00:50) and the West still lit at its 01:30 PDT pass (the Western grid falls at 04:12 PDT). ERCOT is `[decide]`: Section 5 has Texas's frequency source silent after 13:47 Tuesday, which isn't the same thing as Texas being dark. All of this assumes every link in the chain was still powered: the downlink stations (Svalbard, McMurdo), NASA Goddard in Maryland on generator, and the distribution servers `[verify]`.

## 5. The chain the pictures travel, and when it breaks

Each image passes through: the satellite's stored plan → a ground station antenna → a processor → a distribution server or cloud catalog → the internet → Starlink → John's house. None of it has an operator after 02:00 EDT (08:00 CEST in Europe). All of it runs on automation and on whatever power each site has.

- **Sentinel-2:** published within ~3 hours (near-real-time target) to ~6 hours (L1C page). Processing and distribution are European, unattended from 08:00 CEST Tuesday. Tuesday's US acquisitions (~14:30–19:00 UTC) should appear ~18:00 UTC Tuesday to ~01:00 UTC Wednesday, which is John's evening review (19:30–23:00 EDT). The westernmost tiles may be lost if European sites lose power first; Bellinzona's grid falls ~23:45 UTC Tuesday.
- **Landsat:** 4–6 hours via USGS EROS, Sioux Falls, for scenes downlinked there. EROS is on the Eastern Interconnection, so it runs on generator after ~midnight.
- **PlanetScope:** fully automated from commanding through delivery (Planet says nominal operations are fully automated), with its processing on Google Cloud. A published latency figure wasn't found `[verify]`.
- **Earth Engine** ingests Sentinel-2 and Landsat after ESA and USGS publish them. Ingest latency is unpublished `[verify]`. It's the natural place for John to *compute*: he works for Google, the public catalog is authorized access, and a diff runs on Google's machines, so only a few MB of results cross his Starlink. Downloading the raw tiles instead would mean hundreds of GB for one day's CONUS coverage over a link Section 5 already calls degrading.
- **Data center fuel:** industry practice is ~48 hours on site (Microsoft states up to 48), with refueling by delivery contract, and nobody is delivering. Google's own figure isn't public `[verify]`. Cloud compute probably outlasts John's connection to it.
- **The satellites themselves** keep imaging for a while on stored plans (Sentinel-2 plans run 10–15 days), with nowhere to send the pictures. Planet's Doves depend on automated daily commanding from ground stations that are themselves losing power `[verify how long a Dove images without fresh uploads]`.
- **The Charter route is closed.** The International Charter on Space and Major Disasters (which frees up commercial high-res tasking for disasters) is activated when an authorized user, for the US the USGS, calls a 24-hour number and files a request, and a project manager coordinates the response. Nobody answers. That's a good one-line scene if John tries it, and it echoes the FEMA and Warrenton calls in Section 0.

**After Wednesday morning no imagery comes through the internet.** The Hook has the station network over pier fiber, not the internet (Section 11's ISS orbit fit from Tyler's notebook depends on that). The only way to get imagery after that is to receive it straight from the satellite; see §8.

## 6. Rough odds of photographing a survivor (author estimate, not research)

Canon puts ~350 survivors in CONUS. At 2 a.m. EDT nearly everyone was indoors, so on Tuesday a person-sized dot outside in 30 cm imagery is a strong candidate (in Europe at 08:00 it wouldn't be; the dead are in the streets). Suppose a survivor spends ~10% of daylight outside, and 30 cm imagery covers ~1–5% of CONUS that day. Then the chance of catching any one survivor is ~0.1–0.5%, or ~0–2 survivors nationwide. Those 0–2 dots would sit somewhere in tens of thousands of km² of tasked imagery, among dogs, statues, and shadows, and John would have no way to tell which dot is a person. PlanetScope's near-daily 3 m coverage can't resolve a person at all. It could see a large deliberate ground signal (a few white doors or sheets laid flat in a field would be a bright feature a few pixels across), but nobody lays one out on Day 0, and by October nothing is downlinking.

That last point is worth knowing even if it never reaches the page: by the time survivors start making signals for the sky, the satellites that could see them have nowhere to send the picture.

## 7. Where it could go (suggestions, not canon)

- **Section 2 brainstorm:** the model proposes Sentinel-2 truck counts as one of the independent daytime-region checks. John adds the Labor Day baseline catch himself ("not Monday, the Tuesday before"). That suits his engineer's habit.
- **Section 5 review:** the result is one more recorded aggregate. Truck detections on interstates are near zero in every imaged tile. A handful of hits go into the leads table and get sorted: a driverless truck (a conscious echo), a misdetection, one or two unresolved (like the two unresolved plate reads). The post-vs-post job is queued for Wednesday's images. **He never sees its result.** That's a quiet line, and it's honest.
- **Section 6 breakfast:** the Black Marble image of the night (East dark, West lit) on the laptop between them. The lit points are generators, his own house probably among them, which teaches the lights-aren't-people lesson in one exchange with Sam. It's also a visual anchor for John's grid briefing and a match for Kendra's view in Section 16.
- **Hazards:** the smoke columns John already sees from the road could show from orbit. Cooling-tower plumes at Vogtle and Hatch disappearing after the morning trips would visually confirm the unit trips Section 5 records.

Constraints if used: model voice stays terse and factual, never inferring deaths. A count of zero trucks isn't a death count. The access is authorized public or Google-held data, so no Pandora question arises. Keep the resolution limits honest: no faces, no reading plates from orbit, no "thermal signatures of the living" (Landsat's thermal band is 100 m, and a body at ambient temperature doesn't stand out).

## 8. Receiving straight from the satellite (no ground segment)

**Two kinds of downlink.** The imaging satellites that matter for detail (Landsat, Sentinel-2, Planet, Vantor, Pelican) turn their transmitters on only when commanded, over their own ground stations, and the commercial ones encrypt. Nobody else can receive them, and commanding a satellite takes the operator's uplink and crypto keys. That door is shut, and not because of any Pandora setting. **Weather satellites are the exception.** Several broadcast their data continuously, to anyone with an antenna, as a public service. Nobody on the ground has to do anything for the signal to arrive.

| Broadcast | Band | Ground gear | Data | Use to the group |
| --- | --- | --- | --- | --- |
| **JPSS HRD** (NOAA-20, NOAA-21) | X-band, 7812 MHz | Tracking dish (the one comparable hobby X-band setup found used 2.4 m `[verify the size needed for HRD]`), LNA, downconverter, wideband SDR, decoder | Full VIIRS, **including the Day/Night Band** | **Night lights over the Hook's region, every clear night, for as long as the satellites run** |
| **Metop-B/C AHRPT** | L-band, 1701.3 / 1707 MHz | ~1 m dish (hobbyists use a 65 cm Discovery Dish for 1.7 GHz), LNA, cheap SDR, SatDump | AVHRR, ~1.1 km, no low-light band | Weather; very large fires on the infrared channel at night |
| **Meteor-M LRPT** (Russian) | VHF, 137.1 / 137.9 MHz | V-dipole or QFH, RTL-SDR, SatDump | ~1 km imagery | Weather. The easiest of all, but modes and frequencies change without notice. |
| **GOES HRIT/EMWIN, GRB** | L-band | Small fixed dish | Full-disk imagery, weather text | **Dies with the ground.** These are processed at Wallops (or Suitland) and uplinked for rebroadcast, so they're not a direct path. |

**The big consequence: JPSS night lights at the Hook, all winter.** This fixes §4's time problem. With an X-band station on the spit, John gets the Day/Night Band every clear night with no internet. And the signal improves as the season goes on. On Day 1, every dead household's standby generator is lit. Over the following weeks those generators run their propane tanks dry `[verify: natural-gas line pressure with compressor stations unattended]`, and the map thins to what is still lit: solar-plus-battery houses (on a schedule, much the same every night), the occasional lit boat, and the Hook itself.

- **The Hook is the positive control.** Its pole lights burn on reactor power every night (Section 9). If the receiver doesn't show the Hook, it can't be trusted to show anything else. It's the same logic as John's own 911 call.
- **The survivor signal is a change from one night to the next**: a light that comes on, moves, or goes dark on an irregular schedule, where nothing else is lit. A light like that is far more meaningful in December than on Day 1.
- **Limits:** 750 m pixels place a hit to within about a kilometer. That's enough to send the 182, not enough to find a door. Pacific Northwest winter cloud will blank most nights; moonlight and viewing angle shift the readings. Reception reaches roughly 2,500 km from the Hook at 5° elevation (about Alaska's panhandle to the Southwest, east toward the upper Midwest; my geometry, `[verify]`). It's a western map, not a national one. **And it can't find a survivor who has no power**, which by midwinter is most of them. That keeps it honest under the Scarcity rule.

**Two clocks run against it.**
- **Satellite health.** Nobody is commanding NOAA-20 or NOAA-21. How long they keep broadcasting before an unhandled fault or safe mode cuts the instrument is unknown `[verify JPSS onboard autonomy]`. The same goes for Metop (EUMETSAT, Darmstadt) and Meteor. One morning a pass could simply come up empty.
- **Pointing.** A dish tracks a pass from orbital elements, and those stopped updating when CelesTrak and Space-Track went dark. JPSS flies at 834 km, where drag is small, so the predictions drift slowly. But an X-band beam is about a degree wide, so over weeks the error will matter. This is the ISS timing problem again, and it's a natural job for Tyler's predicted-vs-actual column. L-band and VHF are far more forgiving.

**Getting the hardware is the real obstacle.** An L-band or VHF station is ordinary ham gear: a QFH antenna and an RTL-SDR running SatDump on Arthur Keene's shelf would be entirely plausible `[decide]`. That gets them weather pictures, which matter for Sam over the North Atlantic, but not night lights. An X-band HRD station is an institutional item, run by universities, NOAA, military weather units, and some research labs (NOAA counts ~47 HRD users). Building one from parts without internet ordering is a stretch. Finding an existing one within the PC-12's range is a search in its own right `[verify: X-band direct-readout sites in the Pacific Northwest]`. Moving and recommissioning it would be Della and John's kind of job.

**One satellite system built to find people: Cospas-Sarsat** (406 MHz distress beacons). Its satellites relay beacon bursts to ground receiving stations and on to the US Mission Control Center in Suitland, Maryland, and that chain is unattended like everything else. A beacon can still be heard *directly* in line of sight. Most personal locator beacons and aircraft ELTs also put out a 121.5 MHz homing signal, and every airplane in the group already monitors 121.5. The early noise would be ELTs from the Day 0 crashes, sounding until their batteries die (a day or two `[verify battery requirements]`). After that, a fresh 121.5 tone on an air search is a lead.

## Sources

- Fisser, Khorsandi, Wegmann, Baier, "Detecting Moving Trucks on Roads Using Sentinel-2 Data," *Remote Sensing* 14(7):1595, 2022. https://mdpi-res.com/d_attachment/remotesensing/remotesensing-14-01595/article_deploy/remotesensing-14-01595.pdf ; follow-on: https://isprs-annals.copernicus.org/articles/XI-3-2026/43/2026/isprs-annals-XI-3-2026-43-2026.pdf
- Sentinel-2 orbit (786 km, 10:30 descending node, 5-day revisit): https://sentiwiki.copernicus.eu/web/s2-mission ; https://sentinel.esa.int/web/sentinel/missions/sentinel-2/satellite-description/orbit
- Sentinel-2 L1C timeliness (within 6 h): https://sentinels.copernicus.eu/sentinel-data-access/sentinel-products/sentinel-2-data-products/collection-1-level-1c ; NRT <3 h target: https://eof.esa.int/?p=6384
- Sentinel mission planning, 10–15 day horizon: https://sentinels.copernicus.eu/copernicus-operations/mission-planning
- Landsat Collection 2 Level-1, 4–6 h availability: https://www.usgs.gov/landsat-missions/landsat-collection-2-level-1-data ; https://www.usgs.gov/faqs/after-landsat-scene-collected-when-will-it-become-available-search-and-download
- NASA Black Marble NRT (~3 h) and building-level caution: https://www.earthdata.nasa.gov/data/projects/black-marble ; https://science.nasa.gov/earth/earth-observatory/pinpointing-where-lights-went-out-in-puerto-rico-91044
- DNB sensitivity: Elvidge et al. 2019 (combustion sources), https://mdpi.com/2072-4292/11/4/395 ; AMS 2015 abstract, https://ams.confex.com/ams/95Annual/webprogram/Paper268359.html ; boat-light classes, https://mdpi.com/2072-4292/17/17/2967 ; street-lamp claim attributed to https://mdpi.com/2072-4292/7/1/971 (not opened, 403)
- NOAA-20 orbit and HRD direct broadcast: https://space.oscar.wmo.int/satellites/view/noaa_20 ; https://noaasis.noaa.gov/POLAR/HRD/hrd.html
- Planet automation and Google Cloud: https://www.nasa.gov/sites/default/files/atoms/files/how_to_effectively_operate_100s_of_satellites_-_lessons_learned_from_planet_mission_operations.pdf ; https://cloud.google.com/customers/planet ; https://blog.apnic.net/2022/07/27/behind-the-network-that-images-the-whole-world-every-day
- Planet Pelican: https://www.businesswire.com/news/home/20260503216574/en/Planet-Launches-Three-Additional-High-Resolution-Pelican-Satellites ; https://investors.planet.com/news/news-details/2025/Planet-Launches-High-Resolution-Pelican-5-Pelican-6-Satellites-and-36-SuperDoves/default.aspx
- WorldView Legion: https://vantor.com/blog/maxar-successfully-launches-fifth-and-sixth-worldview-legion-satellites/ ; https://vantor.com/blog/the-power-of-dawn-to-dusk-intelligence-collection/ ; https://docs.up42.com/data/vantor
- International Charter activation: https://www.usgs.gov/emergency-operations-portal/activation-process ; https://un-spider.org/international-charter-space-and-major-disasters
- Data center fuel (~48 h): https://local.microsoft.com/wp-content/uploads/2022/05/Datacenter-fuel-safety-and-sustainability-fact-sheet.pdf ; https://enchantedrock.com/refueling-diesel-the-numbers-dont-add-up
- Waymo service areas: https://waymo.com/whereyoucango/ ; https://www.wabe.org/waymos-robotaxis-have-started-carrying-passengers-in-atlanta-expanding-uber-partnership/
- NOAA-20 HRD at 7812 MHz and X-band hobby difficulty: https://www.satelliteguys.us/xen/threads/noaa-20-receiving-and-decoding.386943 ; comparable 2.4 m X-band setup: https://www.rtl-sdr.com/receiving-x-band-images-from-the-arktika-m1-arctic-monitoring-satellite/
- L-band hobby dish (65 cm, ~1.69 GHz): https://www.rtl-sdr.com/discovery-dish-pre-launch-a-lightweight-dish-and-feed-for-l-band-weather-satellites-and-hydrogen-line-reception/ ; SatDump on amateur reception: https://www.satdump.org/posts/beyond-poes-amateur-satellite-reception/
- Metop AHRPT frequencies: https://space.oscar.wmo.int/satellites/view/metop_c ; https://user.eumetsat.int/s3/eup-strapi-media/TD_18_Metop_Direct_Readout_AHRPT_Technical_Description_v3_A_1cb789b653.pdf
- Meteor-M N2-4 LRPT: https://space.oscar.wmo.int/satellites/view/meteor_m_n2_4 ; status log: https://usradioguy.com/?p=5849
- GOES GRB and HRIT ground dependence: https://ospo.noaa.gov/operations/goes/grb/ ; https://usradioguy.com/?p=4072 ; https://www.noaasis.noaa.gov/pdf/HRIT_Overview.pdf
- Earth Engine Sentinel-2 catalog (no published ingest latency): https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED
