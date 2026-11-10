# Amateur ("ham") radio: a working reference for the book

**Research baseline:** November 8, 2026. **Story:** September 2028 – spring 2029. Author reference, not canon. ISS-specific operation is covered in more depth in [iss-ham-radio-contact.md](iss-ham-radio-contact.md) and [2026-11-07_iss-amateur-radio_pass-prediction-and-earned-contact.md](2026-11-07_iss-amateur-radio_pass-prediction-and-earned-contact.md); this doc points to them rather than repeating them. Figures marked `[verify]` weren't confirmed this session.

**Contents:** 1. Why ham radio matters here · 2. Who's left on the air · 3. Licenses, callsigns, and the law · 4. Bands · 5. Propagation · 6. Modes · 7. Station hardware · 8. Antennas · 9. Power · 10. Operating procedure and phraseology · 11. Other radio services a survivor might use · 12. Maritime and aviation crossover (including HF in the PC-24 and PC-12, and the Broomfield portable station) · 13. The book's stations · 14. Things to verify or decide · Sources

## 1. Why ham radio matters here

A ham station is self-contained: a transceiver, an antenna, and a 13.8 V DC supply. HF signals travel thousands of kilometers by bouncing off the ionosphere, and VHF signals reach anything in line of sight, including a satellite. No tower, exchange, satellite network, or server sits between two stations. That makes it the one long-distance communication system in the book that doesn't die with the grid.

The catch is that someone has to be at the other end. Every link on the page is a person on each side, at an agreed time, on an agreed frequency.

## 2. Who's left on the air

The US had ~711,000 active amateur licenses in mid-2026, down from ~749,000 in 2024 (ARRL summary of FCC data `[verify exact figure]`). At one in a million, the expected number of surviving US hams is **less than one**. Worldwide, at an often-quoted ~3 million licensees `[verify]`, it's about three.

So the bands are silent. A survivor tuning across 20 meters hears noise, the automatic beacons (§5) while their power lasts, and stray carriers from radios left keyed. Marchetti being a licensed, equipped operator is a deliberate authorial choice, not a statistical given. It also means:

- Most survivors who reach anyone by radio will be **non-hams using whatever they find**, like John with Arthur Keene's gear. They'll make newcomers' mistakes (§10, and the CTCSS tone in Section 15c).
- A survivor is likelier to pick up a CB or a family walkie-talkie than a ham rig (§11).

## 3. Licenses, callsigns, and the law

- **US license classes:** Technician (VHF/UHF, limited HF), General (most HF phone), Amateur Extra (everything). All require an exam. None of the group holds one.
- **Callsign formats:** US calls start with K, N, W, or AA–AL (e.g., W7xxx, a 7-district call for Washington, though calls are no longer tied to region). Canada uses VE/VA (VE7 = British Columbia). Switzerland uses HB9 (Marchetti: HB9EMT, "Hotel Bravo Niner Echo Mike Tango"; `[verify not assigned]` stands in CLAUDE.md). The ISS is NA1SS on US gear and RS0ISS on the Russian side. A ham reads a callsign as a country and, often, a region.
- **Station ID:** US rules require a station to give its callsign at the end of a contact and at least every 10 minutes (47 CFR 97.119). Unlicensed survivors have no callsign. "Ediz Hook" works as a tactical call on voice, and *EDIZHK* (Section 15c) is a plausible improvised APRS source address (APRS accepts arbitrary six-character tactical names `[verify]`).
- **Emergency rule:** 47 CFR 97.403 says nothing in Part 97 prevents an amateur station from using any means of radio communication at its disposal for essential communications needs tied to the immediate safety of human life and the immediate protection of property, *when normal communication systems are not available*. §97.405 lets a station in distress use any means to attract attention. That covers the group legally. Nobody is left to enforce anything anyway, but it gives John (the Safety Architect, who agonizes over rules) a clean answer if the question ever comes up.

## 4. Bands

| Band | Frequencies (US) | Character | Typical use in the book |
| --- | --- | --- | --- |
| 160 m | 1.8–2.0 MHz | Night only; big antennas | Unlikely |
| 80 m | 3.5–4.0 MHz | Night regional; daytime absorption | Regional/NVIS at night (§5) |
| 60 m | 5 MHz, five US channels `[verify current US rules]` | Regional, day | Regional backup |
| 40 m | 7.0–7.3 MHz (Europe 7.0–7.2) | Day regional (NVIS), night long-distance | The regional workhorse; night DX |
| 30 m | 10.1–10.15 MHz | CW/digital only | Digital weak-signal |
| **20 m** | **14.0–14.35 MHz** | Daytime long distance, the classic DX band | Hook–Bellinzona |
| 17 m | 18.068–18.168 MHz | Like 20 m, quieter, needs more solar activity | Daytime DX alternate |
| 15 / 12 / 10 m | 21 / 24.9 / 28 MHz | Need high solar activity | Mostly closed by winter 2028–29 |
| 6 m | 50–54 MHz | Erratic; mostly line of sight | — |
| **2 m** | **144–148 MHz** | Line of sight; FM voice; repeaters; satellites | ISS (145.800 down / 144.490 up in the Americas) |
| 70 cm | 420–450 MHz | Line of sight; repeaters; satellites | ISS crossband repeater (437.800 down `[verify for 2028]`) |

**Band edges differ by region.** Europe's 40 m band stops at 7.200 MHz; the Americas go to 7.300. A transatlantic contact on 40 m phone is often worked split (each station transmitting where it's allowed). Marchetti would know this; John wouldn't.

**Named frequencies a ham would recognize:**

- **14.100** (also 18.110, 21.150, 24.930, 28.200): the NCDXF/IARU beacon network (§5). Canon has Marchetti listening there on Day 0.
- **14.074 / 7.074:** FT8 (§6). The busiest frequencies on HF in 2026.
- **14.078 / 7.078:** JS8Call, keyboard chat.
- **14.230:** the slow-scan TV (picture) calling frequency. **Note on canon:** Marchetti's Day 0 log entry is *14.230 SSB, CQ, no reply*. That's legal phone spectrum, but a ham would recognize it as the SSTV channel. A voice CQ there reads slightly off to anyone who knows. Options: keep it (she chose the busiest-sounding spot), or move it to e.g. 14.200 or 14.250 `[decide]`.
- **14.300:** the Maritime Mobile Service Network, where hams have long kept watch for vessels at sea. A thread for Johan's world `[verify net status]`.
- **144.390:** APRS in North America. **145.825:** the ISS APRS digipeater in the book (the 2026 ARISS status lists Zvezda's APRS on 437.825; see the ISS notes).

## 5. Propagation

**Line of sight (VHF/UHF).** The radio horizon from a mast is roughly √(2 × height), giving distance in miles for height in feet. From the Hook's 170-ft tower that's ~18 mi to a handheld at ground level, and much farther to a hilltop. The Olympics and Cascades block VHF outright. That's why the handheld link to John is gone by Everett in Section 10. Satellites are line of sight too, only from above.

**Skywave (HF).** The ionosphere's F2 layer refracts HF back to Earth, in hops of up to ~3,000–4,000 km each. The **maximum usable frequency (MUF)** for a path rises with sunlight on the path and with solar activity. Below it a band is open; above it the signal goes into space. The lowest bands are absorbed by the daytime D layer. In practice: high bands by day, low bands by night.

**Skip zone.** Between the end of ground wave (a few tens of km) and the first skywave return, a band can be dead. On 20 m that gap is often several hundred to more than 1,000 km. A station 300 km away can be inaudible on 20 m while Europe comes in clearly.

**NVIS (near-vertical incidence skywave).** For regional links of ~0–500 km, beyond VHF line of sight and inside HF's skip zone, the fix is to shoot straight up. A horizontal dipole mounted low, on a frequency below the vertical critical frequency (foF2), puts the signal straight up so it comes down everywhere within a few hundred km, mountains included. Typical heights quoted: about 4–7 m for 40 m and about 8–13 m for 80 m (sources disagree). 40 m works by day. On winter nights in a declining solar cycle, foF2 often drops below 7 MHz, so a regional schedule moves to 80 m at night `[verify with VOACAP/NVIS charts for the date]`. **This is the technique for any link between the Hook and a place inland across the Cascades.** VHF won't clear the range, and 20 m skips over it.

**Solar cycle.** Cycle 25 peaked around October 2024 (smoothed sunspot number ~161). NOAA SWPC's forecast puts the smoothed number at ~62 in January 2028, ~50 by June 2028, ~37 by December 2028, and ~35 by January 2029. So in the book's winter:

- 10, 12, and 15 m are mostly closed for long distance.
- 17 and 20 m carry the daytime long-distance traffic.
- 30, 40, and 80 m carry the nights.
- MUFs are lower than in recent memory. A ham who learned on 2024's conditions would find the bands quieter.

**Geomagnetic storms and aurora.** Storms (from solar flares and coronal mass ejections) weaken high-latitude paths for hours to days. Polar paths suffer most, and nobody is issuing space-weather warnings.

**The Hook–Bellinzona path** (my great-circle calculation):

- **8,557 km**, short-path beam heading **032° true** from the Hook (northeast).
- It crosses Hudson Bay, Baffin Bay, and west Greenland. The midpoint is ~69.5°N 55°W, right at the edge of the auroral zone.
- At least 3 F2 hops.

That makes it a **polar path**, which is real friction for the page: auroral flutter (a watery, warbling SSB voice), sudden fades, and days when a storm closes the path completely. The long path (212° from the Hook, ~31,500 km) is rarely useful but occasionally opens.

**When the path opens, winter 2028–29.** Bellinzona is UTC+1 in winter, the Hook UTC−8. Canon puts the HF schedule in "the overlap of her evening and the Hook's morning," which is 16:00–21:00 UTC (08:00–13:00 PST; 17:00–22:00 CET), on 20 m. That's plausible. The well-known winter pattern on US West Coast to Europe paths is a 20 m (and 17 m) opening in the Pacific Northwest morning, which can be short and weak near solar minimum. A second candidate is 40 m in the Hook's late evening to Europe's early morning (~05:00–08:00 UTC), when the whole path is dark. **Run VOACAP for December 2028, SSN ~37, both paths and both bands before fixing a schedule** `[verify]`. A realistic schedule has a primary and a backup band and time, as any ship's radio schedule would.

**The beacons as a propagation meter.** The NCDXF/IARU network is 18 beacons, each sending its callsign in Morse and then four one-second dashes at 100 W, 10 W, 1 W, and 0.1 W. Each beacon gets one 10-second slot in a 3-minute cycle on 14.100 MHz, rotating through the five frequencies, day and night. Hearing which beacons come through, and how many dashes, tells an operator where the band is open and how well. Slot 1 is 4U1UN (UN, New York), slot 2 VE8AT (Eureka, Nunavut), slot 18 YV5B (Venezuela). Others in canon: W6WX (California), KH6 (Hawaii), ZL6B (New Zealand), VK6RBP (Western Australia), JA2IGY (Japan), RR9O (Novosibirsk). **The beacons run on mains power.** After the grids fail, they go silent one by one, a clock audible only to someone who knows the schedule. Which ones survive on generators or solar is `[decide]`. Check the full list and which beacons were off-air in 2026 `[verify]`.

## 6. Modes

- **SSB (single sideband) voice.** HF's standard phone mode. By convention lower sideband below 10 MHz and upper sideband above (60 m is USB). A newcomer on the wrong sideband sounds like Donald Duck and can't be understood, which is a good newcomer error for the page. SSB is efficient but needs a decent signal, and weak or fluttery paths get hard to copy.
- **CW (Morse).** Works at signal levels where voice fails. Marchetti may or may not know it `[decide]`. Nobody at the Hook does, though Johan may have the Morse from his training.
- **FM voice.** VHF/UHF, repeaters, the ISS. Strong, clean signals, but only line of sight.
- **AM.** Rare on ham bands; standard in aviation and CB.
- **FT8.** A digital mode run by software. Transmissions last 15 seconds in fixed slots, and it decodes signals ~20 dB below what an ear can hear. It only exchanges callsigns, grid locators, and signal reports, so it's useless for conversation. But it's a superb **"is anybody there"** tool: a laptop can monitor 14.074 all day and list every station it decodes.
- **JS8Call.** FT8's weak-signal engine with free-text keyboard chat, store-and-forward messages, and automatic **heartbeats** that tell listeners "I'm here." A Hook station left running JS8Call on 40 m and 20 m would announce itself to any survivor with a ham rig and the software, and keep messages for them. It's a plausible, quiet search tool if someone in the group learns it `[verify the software is on Arthur's laptop, or decide]`.
- **WSPR.** Automated low-power beacons that report propagation. A tiny WSPR transmitter on a solar panel could run for years: a "machine keeps going" echo if ever wanted (deliberate use only, per CLAUDE.md).
- **Winlink.** Email over radio through gateway stations. Its central servers are on the internet, and its radio-only mode depends on other stations. With nobody alive to run gateways, it's largely useless.
- **APRS / packet.** Short digital text messages and position reports on VHF, relayed by digipeaters, including the ISS (Section 15c). On the ground, the North American APRS network relied on internet gateways and powered hilltop digipeaters, so mostly dead within days.

## 7. Station hardware

**HF transceiver.** About 100 W output on 13.8 V DC. Draws ~20–23 A transmitting at full power, ~1–2 A receiving. Common 2026 models: Icom IC-7300 (by far the most common base rig), Yaesu FT-710 and FT-991A (the 991A also covers VHF/UHF), Kenwood TS-590SG and TS-890S, Elecraft K4. Portables at about 10 W: Icom IC-705 and Elecraft KX3. Arthur has no HF set in canon; the Hook's HF station is *Active*'s own MF/HF set (Section 15, §12). A built-in automatic antenna tuner matches only modest mismatches; a wire for several bands needs an external tuner.

**Dual-band VHF/UHF mobile.** Arthur's radio (his only set) with its own packet modem fits a Kenwood TM-D710G-family radio (the same family as the ISS's TM-D710GA) or a Yaesu FTM-400/500-series `[decide]`. These store frequency, offset, CTCSS tone, and power **per memory channel**, which is exactly the trap in Section 15c. On a split satellite channel (145.800 receive, 144.490 transmit) the radio is simply set to an "odd split" memory.

**Satellite antenna.** A handheld two-band Yagi, with 2 m and 70 cm elements on one boom and a short handle (Arrow II-style), is what Arthur owned in Section 14.

**Accessories that appear on a real desk:** a 30 A switching or linear 13.8 V supply (canon: Della reads "30 amps" off the label); an SWR/power meter; an antenna tuner; coax (RG-8X in a shack, LMR-400 for long runs, which matters on a 170-ft tower); connectors (PL-259/SO-239 "UHF" connectors on most HF and VHF rigs, N on better VHF gear, BNC/SMA on handhelds); a ground bar; lightning arrestors; headphones; a desk mic; a Morse key; a 24-hour UTC clock; and a paper logbook.

## 8. Antennas

**Dipole.** A wire cut to half a wavelength, fed in the middle. Approximate total length in feet = 468 ÷ frequency in MHz:

- 20 m (14.2): ~33 ft
- 40 m (7.15): ~65 ft
- 80 m (3.8): ~123 ft

Hung as an inverted V from one high point, it needs only one support. An **end-fed half-wave** (with a 49:1 transformer at the end) lets one wire cover several bands, fed from one end. That's convenient off a tower.

**Height decides the angle.** For long distance, high is better: at least a half wavelength up (~33 ft on 20 m) for low takeoff angles. For NVIS, low is better: ~0.1–0.2 wavelength. **One antenna can't do both well.** A group that wants Europe and a regional link needs two wires, or one wire and the acceptance of a compromise.

**At the Hook** (canon: *Active*'s MF/HF set and its mast antenna, Section 15; no wire on the tower):

- A cutter's HF antenna is typically a large whip or fan fed by an automatic coupler that matches it across 2–30 MHz `[verify Argus-class HF antenna and coupler]`. Nobody has to cut a wire for a band.
- A vertical favors low takeoff angles, good for Bellinzona and Broomfield, weaker for NVIS on the short regional legs.
- Her mast also carries radar, AIS, and the VSAT dome. HF transmit power can couple into nearby receivers; check the tower's AIS feed after the first transmission.
- Salt air on the spit corrodes connectors. Tape and seal anything the group adds.

**Beam and rotator.** A directional Yagi on a mast, turned by a rotator. The beam Sam spotted at Arthur's house (Section 13) is a VHF/UHF antenna for his dual-band set, not HF; the mast and its cables stayed behind in Section 14.

**Ground.** A copper bar and ground rod for lightning and RF; canon has Arthur's ground strap and the ground cable John didn't bring (Section 14).

## 9. Power

- **The Hook:** reactor-fed shore power, so power isn't a constraint and isn't a source of jeopardy (CLAUDE.md grid rule). The 30 A supply on mains is enough.
- **Battery stations:** a 100 Ah LiFePO4 battery runs a 100 W HF rig for a typical daily schedule (an hour of operating, about a third of it transmitting) with plenty left. A 100–200 W solar panel and charge controller keep it up in summer; northern winter sun is weak `[verify sizing for a given latitude and month]`.
- **Marchetti's power is undecided in canon.** Bellinzona's grid fell ~01:45 CEST Wednesday Sept 6, yet her HF station runs through the winter. She needs a generator with fuel, solar plus battery, or the IRB's emergency circuit. Her Wednesday has the IRB freezer on an emergency circuit, but her radio is at home `[decide]`.

## 10. Operating procedure and phraseology

**A call:** "CQ CQ CQ, this is HB9EMT, Hotel Bravo Niner Echo Mike Tango, calling CQ and standing by." For a scheduled contact: "Ediz Hook, Ediz Hook, this is HB9EMT on schedule, over."

**Signal reports** use RST: readability 1–5, strength 1–9 (plus tone 1–9 for CW). "You're five and nine" means perfectly readable, strong. A plain, honest "three by five" (readable with difficulty, fair strength) is better on the page than a reflexive 59.

**Q-codes heard on voice:**

| Code | Meaning |
| --- | --- |
| QTH | location |
| QSL | I acknowledge / confirm |
| QRZ? | who is calling me? |
| QRM | interference from other stations |
| QRN | static, natural noise |
| QSB | fading |
| QSY | change frequency |
| QRT | stopping, going off the air |
| QRP | low power |
| QRX | stand by, wait |

**Words:**

- "Over" (your turn), "out" (done), "roger" (received, not "yes"), "break" (interrupt), "say again," "stand by."
- "73" (best regards), at the end of a contact.
- "Sked" is a scheduled contact, "net" a group on a frequency, "net control" whoever runs it.
- The ITU phonetic alphabet (Alfa, Bravo, Charlie… Juliett, Kilo… Zulu). Hams say "niner" for 9 by habit.

**Time is UTC, always.** Logs, schedules, and pass times are kept in UTC. Marchetti's transcript headers already follow this; Johan's ship's logs keep ship's time, which is a nice contrast.

**A logbook line:** date, UTC time on and off, frequency, mode, station worked, RST sent and received, remarks. A ship's radio log and a ham log are close cousins, and Johan would accept one without comment.

**Formal messages.** The ARRL radiogram format is the standard for traffic that must arrive exact:

- **Preamble:** message number, precedence (EMERGENCY / PRIORITY / WELFARE / ROUTINE), handling, station of origin, check (word count), place, time, date.
- Address, text in groups, signature.
- The receiving station reads back the count.

It's a natural fit for passing evidence between the Hook and Bellinzona: Catherine's figures, the 911 timestamps, Marchetti's equipment list read back by Catherine. It's also Johan's kind of rigor.

**Newcomer mistakes, all usable on the page:**

- Transmitting on the downlink (ISS; already in canon).
- Leaving a repeater tone on (Section 15c).
- Low power left set.
- Wrong sideband.
- Talking without listening first.
- Not saying "over," so both stations transmit at once.
- Holding the mic too close, or too far.
- Forgetting the 10-minute ID (nobody cares now).
- Calling on a frequency without checking whether the band is open (the beacons would tell you).

## 11. Other radio services a survivor might use

These matter for the search plan: a survivor is far likelier to have one of these than a ham rig.

| Service | Frequencies | Range | Who'd have it |
| --- | --- | --- | --- |
| **CB** | 27 MHz, 40 channels; **ch 9** emergency, **ch 19** truckers | A few miles; occasionally far by skip | Truckers, rural households, some farms |
| **FRS/GMRS** | 462/467 MHz | Under a mile to a few miles (GMRS repeaters farther) | Families, hunters, kids' walkie-talkies; very common |
| **MURS** | 151–154 MHz | A few miles | Farms, businesses |
| **Marine VHF** | Ch 16 (156.8) distress/calling | Line of sight | Boat owners; canon: the Hook monitors 16, 22A, 70 |
| **Aviation** | 121.5 emergency; ELT/PLB homing | Line of sight to aircraft | Pilots; beacon owners |
| **Ham repeaters** | 2 m and 70 cm, on hilltops | A county or more through the repeater | Hams, or anyone who finds a handheld |

**Repeaters are worth thinking about.** A repeater on a hilltop retransmits a handheld's signal across a whole county. Many have battery backup that lasts hours to days, and some remote sites run on **solar** and could keep working indefinitely. Repeaters identify themselves automatically in Morse every few minutes. The 67 Hz tone in Arthur's memory 12 means a local repeater existed. If it, or any solar-powered machine within range, is still up, the Hook can monitor its output frequency, and a survivor anywhere in its coverage with any 2 m radio could reach them `[decide whether the Port Angeles repeater is solar, and verify typical repeater backup]`.

**Scanning** across CB 9/19, FRS channel 1, marine 16, and the local repeaters is a cheap, continuous search. John's dev box already watches 16, 22A, and 70 and wakes him (Section 11). The same pattern extends to these channels with a scanner or SDR.

## 12. Maritime and aviation crossover

**Johan (GMDSS).** His certificate covers marine VHF with DSC (channel 70 for alerts, 16 for voice), MF/HF DSC and voice, NAVTEX, and Inmarsat-C/SafetyNET (canon: the SafetyNET printout). Marine HF voice uses designated channels, upper sideband by convention, and he knows HF propagation from the bridge. What's new to him is ham practice: open frequencies with no channel plan, callsign etiquette, satellites. Canon gives him "You know this one?" / "No. Ship radios. Not this." at Arthur's satellite set (Section 14).

**The cutter's radios.** *Active*, as a Coast Guard cutter, carries HF transceivers with large antennas, and **her MF/HF set in the radio room is the Hook's HF station** (canon from Section 15, Sept 23: Johan has looked at it, the same kind as his ship's). It works the group's HF-equipped airplanes and, from November, Marchetti. Military and government HF sets are typically general-coverage, so tuning ham frequencies is likely; whether it reaches 14 MHz and whether it needs crypto or a login (like her bridge AIS in Section 11) is `[verify]`. It can't work the ISS: that link is 2 m VHF and stays on Arthur's set.

**Aircraft HF for the crossing.** Long-range jets carry HF for oceanic position reports to Gander and Shanwick, and nobody is there to hear them.

**Does the PC-24 have HF?** Only if they pick one that does.

- **HF is an option, not standard.** Honeywell lists its Primus HF-1050 (200 W, 2–29.9999 MHz, 99 programmable channels) as compatible with the PC-24, though one version of Honeywell's page lists only the PC-12 NG `[verify against Pilatus's PC-24 options list]`. In the PC-24 it would be run from the panel's radio controls rather than a separate control head `[verify]`.
- **Pilatus's second long-range radio is a satellite phone.** Oceanic airspace generally requires two long-range communication systems, at least one of them HF. On the PC-24, Latitude's SkyNode S200 Iridium satellite voice was offered to replace the second HF (trade press, 2017). So an oceanic-equipped PC-24 most likely has one HF set plus satellite voice.
- **Satellite voice is no use in the story.** Iridium calls go through a ground gateway (Tempe, last seen on generator in Section 5), and nobody is on the other end. An Iridium handset at the Hook wouldn't help, because handset-to-handset calls also route through the gateway `[verify Iridium routing with the gateway down]`. HF is the only long-range link that needs nobody in between.
- **A new PC-24 at Broomfield may have neither.** An airplane awaiting delivery to a US owner who flies domestic routes wouldn't need oceanic radios. So HF becomes a selection criterion at Broomfield, alongside hours and paperwork. Sam (or Johan) reads the equipment list in each delivery folder for "HF," the way Sam read N612PR's delivery folder in Section 6. If none has it, an in-service PC-24 flown by an operator that goes to Alaska, the Caribbean, or overseas might `[verify; decide]`.

Aircraft HF sets tune continuously across ~2–30 MHz in USB and can work ham frequencies. With HF installed, Sam and Johan can keep a schedule with John at the Hook from Goose Bay, Narsarsuaq, Reykjavik, and Lugano, on 20 or 17 m by day and 40 m by night, subject to the polar-path problems in §5. Without it, they carry the portable station they took to Broomfield (below) and hang the wire at each stop: no contact in flight, only from the ground. That choice shapes the John-at-the-radio half of the crossing chapters `[decide]`.

### Adding HF to the PC-12

**Why it comes up.** Without HF, the PC-12's long legs are silent. The handheld link to the Hook is gone by Everett (Section 10), and the Huntsville plan is no contact en route, with John staying put if they aren't back by Tuesday night (Section 9). The Hook's own HF station doesn't exist until ~mid-to-late November. After that, the only long PC-12 flight in canon is the December ferry to Broomfield, and the airplane stays there. So an install is a lot of work for one flight unless more PC-12 trips are added `[decide]`. For that flight, the portable station (below) is the cheaper answer: no contact in the air, a daily schedule once they're on the ground. Flown at ~290 kt `[verify PRO cruise at FL250–280]`, the 928-nm leg is about 3 hours 10 minutes, about 2 hours 30 of it out of VHF range. Its value on the page is as a rehearsal: the same schedule, gear question, and ground test the PC-24 crossing needs, done once over land first.

**N612PR almost certainly has no HF.** HF is an option on the PC-12, not standard equipment, and a new PRO delivered to a Charlotte company for domestic flying wouldn't need it `[verify PRO HF option, and whether it integrates with the G3000 touchscreen controllers]`. Honeywell lists its Primus HF-1050 (the KHF 1050 family) as compatible with the PC-12 NG. There are two ways to get HF into the air:

1. **Find a PC-12 that already has it.** Operators that fly beyond VHF coverage fit HF: northern Canadian and Alaskan medevac and charter, and government and military PC-12s such as the Air Force's U-28A `[verify]`. C-GKPX, a Fort McMurray–Edmonton charter airplane, is worth checking before anyone picks up a drill `[verify its equipment list, or decide]`. This is the low-risk path, and it fits Sam: take an airplane that was built and tested with the radio rather than modify one.
2. **Install a set.** A real avionics job. The nearest thing to it in the group's experience is Della's marine electronics work.

**What an install involves** (KHF 1050 as the example):

- **The boxes.** A receiver-exciter, a power amplifier, and an antenna coupler, plus a control head or integration into the panel. Honeywell gives 200 W PEP on 28 V DC, 2.0–29.9999 MHz in 100 Hz steps: every ham band from 80 to 10 m. The amplifier and coupler can mount together or apart. The KAC 1052 coupler alone is 15.7 lb `[verify total installed weight with cabling]`. It all goes into the weight and balance, aft, alongside the Jackery.
- **The antenna.** The coupler has to sit very close to the antenna feed (installers of the older KHF 950 aim for 6 in, 18 in at most), so it goes in the unpressurized tail cone behind the pressure bulkhead. Honeywell's KHF 1050 manual prefers a protruding surface such as the vertical stabilizer and says a wide fuselage section performs poorly. On a small turboprop that usually means a wire from a mast on the aft fuselage to the fin, or a conformal antenna built into the fin `[verify the PC-12's approved HF antenna and attach points]`. Any new penetration of the fin has to be sealed: CASA has found exfoliation corrosion in PC-12 fins where water got past an antenna plate's seal.
- **The wiring.** A 28 V feed on its own breaker (the amplifier draws heavily on transmit `[verify current]`); control and audio lines forward; coax aft through the pressure bulkhead by existing pass-throughs, never a new hole in the pressure vessel. The audio has to reach the audio panel so Sam hears HF in his headset `[verify a spare input on the PRO's audio panel]`.
- **Bonding.** HF couplers fail to tune on a bad ground, and installers hold bonding straps to milliohms (one figure quoted is 0.003 Ω). Della knows this from marine SSB, where the same physics shows up as a copper ground plane and a tuner at the base of a backstay.
- **Who does what.** Della wires it and does the bonding; Sam makes the airworthiness call and reads the installation manual; John writes the test plan. Nobody in the group is an avionics technician, and Della can follow an installation manual's wiring diagram but can't design one (her entry), so the manual has to come with the parts.

**Where the parts come from, nearest first** `[decide]`:

- The station hangar. The MH-65Es probably carry HF `[verify MH-65E HF fit]`. A helicopter's set and coupler are matched to a different antenna and airframe, so the coupler has to retune to the new wire, and nobody certified the combination.
- Avionics shops and parts shelves at KCLM, Boeing Field, or Paine Field.
- The Broomfield completion center, which installs options on new Pilatus airplanes and may have HF kits on the shelf `[verify]`. But by the time they're in Broomfield, the PC-12's long flying is over.

**The ground test before it flies.** A 200 W transmitter a few feet from new wiring can get into other systems. Before the first flight: run up on the ramp with every system on, key the HF on each band to be used, and watch the autopilot, AHRS, GPS, fuel quantity, engine indications, and Autoland status. Then a test flight near the Hook with the autopilot engaged, keying on each band, with VHF to John as the backup. That is "don't launch with known holes" (CLAUDE.md craft rules) as a concrete checklist, and Johan's kind of rigor.

**Why a portable ham rig won't work in flight.** An IC-705 or a 100 W rig inside the cabin can't radiate usefully: the aluminum fuselage shields it, and a 20 m wave is about 21 m long against windows a foot across. A wire strung outside the airframe would be untested for flutter, icing, and strike damage, and would be a hazard to the airplane. The portable rig works only as a ground station at each stop, as in the PC-24 note above.

**Working the Hook from the airplane:**

- **Bands by distance.** Hook to Broomfield (KBJC) is 928 nm (1,719 km), initial heading 115° (my great-circle calculation; Hook to Huntsville is 1,816 nm):
  - **0 to ~200 nm: VHF.** At FL250 the radio horizon to the Hook's 170-ft tower works out to ~210 nm, but the Olympics and Cascades shadow parts of it. An agreed aviation frequency, or 2 m.
  - **~200 to ~600 nm: 40 m by day, 80 m at night.** The airplane is past VHF range and inside 20 m's skip zone (§5).
  - **Beyond ~600 nm:** 40 m still, with 20 m opening somewhere past ~1,000 km on a winter day near solar minimum `[verify with VOACAP for December 2028]`.
  - *Active*'s mast antenna favors low-angle long distance `[verify its type and pattern]`; the regional legs may want a second, low wire for 40/80 m (§8). It's the same two-antenna problem as the regional search link.
- **Sideband.** Aeronautical HF runs upper sideband by convention, while hams use lower sideband on 40 and 80 m (§6). Either the airplane's set offers LSB `[verify KHF 1050 modes]` or both ends agree to run USB on every band. An agreed exception the Hook's operator has to remember, the newcomer's wrong-sideband mistake in reverse.
- **Schedule.** Modeled on oceanic position reports: a check-in at takeoff, then every 30 or 60 minutes at fixed UTC times, giving position, altitude, fuel, and ETA, each logged by John. A missed check-in means the backup band, then the next scheduled time. Agree before departure when "missed" becomes "overdue" (the route, return time, overdue rule from Section 13).
- **SELCAL.** Many aircraft HF installations include SELCAL, a decoder that keeps the speaker quiet until the ground station sends the airplane's code of two tone pairs `[verify whether a donor PC-12 or kit has it]`. Without it, a single pilot listens to HF static for hours. With it, the dev box can generate the tones through the Hook's rig and chime the airplane: the kind of fix John builds. The code is set on the airplane's decoder; they read it off before departure.
- **Noise.** Precipitation static in cloud and snow can blank HF reception in flight; static wicks on the trailing edges reduce it `[verify]`. A winter flight in cloud may lose the link for as long as it's in the cloud, with nothing wrong with the gear.
- **Workload.** HF is the right seat's job, not the pilot's: Catherine on a trip like Huntsville (Section 10), or Johan on the Broomfield ferry, who already works HF at sea.

### The Broomfield trip: a portable HF station

**Why carry one.** In December, Sam and Johan fly the PC-12 to KBJC, choose a PC-24, and fly it home, Sam's first jet flight. They'll be on the ground there for days `[decide how many: choosing the airplane, reading its manuals, ground runs, fuel, waiting on weather]`, 928 nm from the Hook, with no other way to reach it. A portable station keeps a daily schedule from the ramp. It's also the kit they'd carry on the crossing if the PC-24 turns out to have no HF, so Broomfield doubles as the rehearsal over land. It can't work in flight (above).

**The kit** (roughly 45–55 lb `[verify weights]`):

- **Transceiver.** A 100 W HF rig, since *Active*'s set stays aboard for the Marchetti schedule. A second rig from one of the club-directory houses: Sam found a room of gear he couldn't identify on Oct 3 (Section 15) `[decide]`. An IC-705 is lighter and easier on a battery, but 10 W on SSB over this path in a low-sunspot winter is marginal. It's a backup, or a digital-mode rig (JS8Call gets through at 10 W where voice fails, if someone learns it, §6).
- **Power.** One 100 Ah LiFePO4 battery (~25 lb `[verify]`). The rig draws ~20–23 A transmitting and 1–2 A receiving. A one-hour schedule, about a third of it transmitting, uses ~9 Ah, so one battery covers about a week to 80% discharge without recharging. Broomfield's grid has been down since September, so there's no hangar outlet; a 100 W folding panel and charge controller top it up if the stay runs long. Not the Jackery: it weighs ~135 lb and it's the dev box's power.
- **Antenna.** A wire for 40 and 20 m: an end-fed half-wave for 40 m (~66 ft, which also works on 20 m) with a 49:1 transformer, or a 40/20 linked dipole. A throw line and weight to get it up a ramp light pole, a hangar roof edge, or a tree. 50 ft of RG-8X coax and a short ground lead. An external tuner if the rig has none built in (the IC-705 doesn't).
- **The rest.** Headphones and mic, an SWR meter if the rig lacks one, spare fuses, tape and sealant, a logbook and pencils, a watch set to UTC, and a laminated card with the schedule, frequencies, and fallback rules. A VHF handheld for checks on the ramp.
- It goes in the PC-12's weight and balance on the way out and the PC-24's baggage compartment on the way home `[verify PC-24 baggage access and limits]`.

**Who runs it.** Johan. HF from the bridge is his world; what's new is ham practice (§12, GMDSS). Hanging the wire is his kind of rigging, and the log is his kind of log. That leaves Sam free for the PC-24 manuals.

**The path.** 1,719 km on a bearing of 115° from the Hook, ~295° back from Broomfield: one F2 hop at mid-latitudes, clear of the auroral zone, so far easier than the polar path to Bellinzona. The Rockies don't matter to skywave. At this range the takeoff angle is low enough that *Active*'s mast antenna should suit it `[verify]`, and no NVIS wire is needed.

- **40 m by day** is the likely workhorse.
- **20 m** may open around midday.
- **80 m** after dark, as the usable frequency falls.
- `[verify all three with VOACAP for December 2028, SSN ~37]`

**The schedule.** It has to fit around Marchetti's (16:00–21:00 UTC, 08:00–13:00 PST), since the Hook has one HF rig. Broomfield keeps MST (UTC−7). A working version:

| Schedule | UTC | Hook (PST) | Broomfield (MST) | Band |
| --- | --- | --- | --- | --- |
| Primary | 22:00 | 14:00 | 15:00 | 40 m, LSB |
| Backup | 22:15 | 14:15 | 15:15 | 20 m, USB |
| Evening | 03:00 | 19:00 | 20:00 | 80 m, LSB |

- Fixed frequencies agreed before they leave and written on both cards, with the rule "no contact in 10 minutes on primary, go to backup."
- Both ends are ham rigs, so the normal sideband convention holds (§6). That changes if the PC-24 has an aircraft set, which defaults to USB (above).
- The traffic: status, plan, airplane chosen, problems, departure plan. John logs it.
- The overdue rule (Section 13: route, return time, overdue) is agreed before departure, including how many missed schedules make them overdue.

**The flight home.** The last schedule is on the ramp before engine start, with planned wheels-up time and ETA. With HF in the PC-24, Johan works it from the right seat. Without it, there's silence until VHF range, ~200 nm from the Hook. At ~420 kt over the ground `[verify PC-24 cruise]`, the 928 nm is about 2 hours 15 minutes, about 1 hour 45 of it silent. That's John's wait at the radio, and a small version of the crossing.

## 13. The book's stations

- **Arthur Keene's station** (Sections 14–15c): dual-band VHF/UHF set with packet modem (no HF), 30 A supply, laptop with tracking software, handheld two-band Yagi, ARISS frequency sheet with pencil margin notes, logbook with NA1SS contacts, a club directory listing other hams' addresses. The rooftop beam, mast, and cables stayed at the house. Callsign `[decide; fictional, verify unassigned]`.
- **The Hook station:**
  - **ISS:** the dual-band set and Yagi in the operations building, John on the radio, Johan aiming, Tyler calling angles (Section 15c).
  - **HF:** *Active*'s MF/HF set and mast antenna, from late September for the airplanes, and ~mid-to-late November for Marchetti (CLAUDE.md).
  - **Monitoring:** the tower's VHF for marine 16/22A/70 with the dev box listening.
- **HB9EMT, Bellinzona** (Marchetti):
  - HF transceiver, wire to the chestnut in the garden, crossed satellite Yagis on the roof (unused since summer until October).
  - Day 0: hears the beacons on 14.100, calls CQ on 20 and 40 m for 90 minutes.
  - From October: ISS passes on 145.200 up / 145.800 down (Region 1), with transcripts typed from recordings.
  - Power `[decide]`, §9.
- **The portable station** (Sam and Johan, December): a 100 W rig from a club-directory house, a 100 Ah battery, a 40/20 m wire, and a schedule card. It goes to Broomfield, then on the crossing if the PC-24 has no HF (§12).
- **NA1SS:** Kenwood TM-D710GA in Columbus, Luca operating (Section 16). See the ISS notes for modes, APRS, and the 2026 ARISS status.

## 14. Things to verify or decide

1. A VOACAP run for Hook–Bellinzona, December 2028 – February 2029, SSN ~35–40, on 20/17/40 m and both paths. Set a primary and backup schedule from it.
2. Marchetti's station power source.
3. Whether to keep *14.230* in her Day 0 log (SSTV calling frequency) or move it.
4. Arthur's callsign and radio model (suggest a TM-D710G-family set).
5. Whether *Active*'s HF can work ham bands.
6. Whether the PC-24 has HF installed. This drives how the crossing's radio schedule works.
7. Whether any local repeater is solar-powered and still up. That could become part of the new search plan.
8. Which NCDXF beacons keep transmitting after their grids fail, and the full 2026 beacon roster.
9. Whether anyone at the Hook learns JS8Call or FT8, as listening and heartbeat tools for the search.
10. The exact current count of US amateur licensees (§2).
11. Whether any PC-12 flight after mid-November needs HF at all, given the portable station covers Broomfield from the ground. If one does: find an HF-equipped PC-12 (C-GKPX, a northern operator) or install a set in N612PR, and where the parts come from (§12).
12. The PC-12's approved HF antenna, its audio-panel and G3000 integration, and the MH-65E's HF fit as a parts source.
13. Whether the PC-24 they choose has HF: Pilatus's options list, the Broomfield delivery folders, and an in-service fallback. This drives the crossing (§12).
14. The portable station's rig and where it comes from, how long the Broomfield stay lasts, and a VOACAP check of the Broomfield schedule.

## Sources

- ARRL, FCC license counts: https://www.arrl.org/fcc-license-counts
- 47 CFR 97.403 / 97.405 (emergency communications): https://hallikainen.org/org/FCC/FccRules/2017/97/403 ; https://www.customsmobile.com/regulations/title47_chapterI-i4_part97_subpartE_section97.403
- NCDXF/IARU beacon schedule and format: https://ncdxf.org/beacon/beaconschedule.html ; https://www.qsl.net/kc9s/beacons.html ; https://www.iaru.org/on-the-air/beacons/
- NOAA SWPC solar cycle progression and predicted sunspot number: https://www.swpc.noaa.gov/products/solar-cycle-progression ; https://swpc-drupal.woc.noaa.gov/products/predicted-sunspot-number-and-radio-flux ; peak timing: https://www.space.com/the-universe/sun/is-solar-maximum-over-solar-cycle-25
- NVIS heights and skip zone: https://kv5r.com/ham-radio/nvis-antennas/nvis-page-3/ ; https://www.ipellejero.es/hf/antenas/dipolo_horiz/english.php ; https://hackaday.io/project/9032-near-vertical-incidence-skywave-antenna ; https://www.hamradioschool.com/post/near-vertical-incidence-skywave-nvis
- Honeywell Primus HF-1050 (PC-24 listed): https://aerospace.honeywell.com/us/en/products-and-services/product/hardware-and-systems/navigation-and-radios/primus-hf-1050 ; PC-24 SATVOICE replacing a second HF: https://www.wingsmagazine.com/pilatus-selects-latitudes-satcom-solution-for-the-pc-24-15125/
- Primus HF-1050 / KHF 1050 (PC-12 NG compatibility, 200 W PEP, 28 V, 2.0–29.9999 MHz): https://www.honeywellaerospace.com/us/en/products-and-services/products/cabin-and-cockpit/radios/high-frequency-radios/primus-hf-1050-high-frequency-radio ; https://www.seaerospace.com/documents/promotions/SEA-HF1050-System.pdf ; KAC 1052 coupler weight: https://shop.boeing.com/cpd/bdi_064-01074-0101%3Dbj ; KHF 1050 antenna placement: https://manualslib.com/manual/1280963/Honeywell-Khf-1050.html?page=62 ; KHF 950 coupler-to-antenna lead: https://www.seaerospace.com/sales/product/Honeywell/KAC-952
- PC-24 SATVOICE (Latitude SkyNode S200, Iridium): https://satnews.com/2016/11/15/skynode-s200-primed-for-pilatus-business-jet ; oceanic two-LRCS requirement: https://ops.group/blog/the-big-satvoice-question/
- PC-12 fin corrosion at antenna plates (CASA): https://www.casa.gov.au/index.php/aircraft/airworthiness/airworthiness-bulletins/possible-corrosion-vertical-stabiliser-pilatus-pc-12-aircraft
- Hook–KBJC distance and heading, and the FL250 radio horizon: calculated this session.
- ISS amateur radio: see [iss-ham-radio-contact.md](iss-ham-radio-contact.md) and [2026-11-07_iss-amateur-radio_pass-prediction-and-earned-contact.md](2026-11-07_iss-amateur-radio_pass-prediction-and-earned-contact.md) and their sources (ARISS, Kenwood TM-D710 manual).
- Hook–Bellinzona distance and bearing: great-circle calculation from 48.1408°N 123.4108°W to 46.19°N 9.02°E (this session).
- Not verified this session, from general ham practice: band edges, dipole formula, Q-codes, RST, FT8/JS8Call frequencies, 14.230 SSTV and 14.300 maritime net conventions, ARRL radiogram format, CB/FRS/MURS allocations, transceiver current draw. These are standard, but check any specific figure that goes on the page.
