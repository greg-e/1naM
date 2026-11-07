# ISS amateur radio: pass prediction, packet evidence, and earned contact

**Research baseline:** November 7, 2026. **Fictional setting:** September–November 2028. Author reference only; no repository changes, radio transmissions, peer messages, or operational ISS commands. Existing research has not been overwritten.

## 1. Conclusion

The emotional architecture works: seeing the station does not establish that its crew is alive; receiving their voice does not mean they can hear an answer; and a good pass provides minutes, not a permanent connection. The established amateur equipment can support this without functioning terrestrial internet or NASA's relay-ground chain.

**Do not remove the saved-message beat as technically impossible.** Kenwood's primary manual expressly supports received APRS text, unread indicators and a message list. However, digipeating alone is not an indefinitely available mailbox. The story needs an explicit receiving mode/address/logging assumption that connects the transmitted packet to the particular screen Luca reads.

The largest unresolved claims concern the fourteen-line orbit fit, exact fictional passes and the remaining weeks of failed contact after both sides know where to listen. Concrete corrections also include a stock-radio display detail and the stated ninety-three-minute wait.

## 2. Reviewed snapshot and established facts

Read-only review, November 7, 2026, afternoon **EST**: all `reference/iss-ham-radio-contact.md`; all `sections/16-Kendra.md`; `sections/11-Return to Ediz Hook.md` 95–164; `CLAUDE.md` ISS contact/Section 16 entries, especially 663–700. Concurrent grid/PC-12 work elsewhere was not changed or interrupted. Subsequent edits may move these anchors. No full consumables, Dragon, HF propagation or ground-network audit is claimed.

The fourteen notebook entries are **copied app predictions for Huntsville**, not fourteen measured sightings. Each has a time, direction and elevation number; exact dates, time precision and separate rise/maximum/set fields are not exhibited (11, 99–125). Tyler separately reports actual sightings and later records the Hook sighting. These are different evidence classes.

Canon already supplies a recovered satellite-capable dual-band radio, handheld satellite Yagi, tracking laptop, frequency sheet and past-contact logbook, with dependable base power. Exact ground radio/antenna models are **not established**; no substitute purchase or new gear is required by this note. Columbus has the Kenwood TM-D710GA/NA1SS. The first heard voice in late September is the commander, not Kendra; the November two-way scene culminates in Tyler speaking to his mother. Preserve that sequence.

## 3. Source-to-claim matrix

| Question | Opened evidence | What remains conditional / scene implication |
|---|---|---|
| Crewed voice versus automatic repeater | ARISS lists direct crew voice at 145.800 MHz down, 144.490 up in the Americas; the crossband repeater instead uses 145.990 up / 437.800 down.[1] | A repeater conversation is not automatically the crew speaking. The commander must actually choose crew voice operation. |
| Packet frequency and location | ARISS's November 4, 2026 status lists Columbus in voice-repeater mode and Zvezda APRS on **437.825 MHz**. The 2022 two-radio announcement describes APRS on **145.825 MHz**.[2,3] | Neither frequency is an immutable 2028 default. Specify the fictional mode/channel plan privately; do not transplant today's status into the novel. |
| Packet retention/display | Kenwood describes APRS message text, sender/time/date, unread indication, recall and finite-memory behavior; PACKET mode is separately documented.[4] | Retention is possible, but requires suitable reception/configuration. Repeating a packet does not establish crew awareness or display storage. |
| Simultaneous services | ARISS explicitly achieved voice-repeater plus APRS operation using **two radios**, one in each module.[3] | Do not silently assign all services to one radio at once. This does not prove every possible dual-receiver arrangement impossible. |
| Local pass prediction | NASA publishes observer-specific sighting fields and dated orbital ephemerides; CelesTrak explains model-specific TLE propagation and variable accuracy.[5,6] | Cached elements, cached predictions and fresh measurements are not interchangeable. No 2026 element set certifies a 2028 pass. |
| Receive versus transmit | ARISS says handhelds/scanners can receive strongly; its ground-station guidance separately addresses transmit capability and antennas. Its packet guide warns that strong downlink reception does not ensure a successful uplink.[1,7] | Hearing the station is not a completed two-way link. Pointing, mode, frequency and operator attention remain independent. |

## 4. Fourteen entries: useful constraints, not an oracle

NASA's app documentation defines sighting start time, visible duration, maximum elevation, and appearance/disappearance directions and elevations.[5] That establishes a plausible source category, **not the identity or exact 2028 behavior of Tyler's unspecified app**. A visible appearance may begin when the ISS emerges from shadow rather than at geometric rise. “Disappears” can likewise mean entering shadow, not crossing the horizon.

Before accepting the reconstructed orbit, establish in author reference:

- Dates, clock zone, rounding and observer coordinates for every row.
- Whether the time means geometric rise, visible appearance, maximum elevation or another event.
- Whether a direction is a coarse compass label or a numerical azimuth, and which event it describes.
- Whether maximum elevation, duration and setting information were actually copied.
- The source epoch, if recoverable, and which orbital properties are supplied as known priors.

Fourteen sufficiently informative rows spanning multiple passes **might constrain a useful approximate orbit**, especially with known ISS identity and physically appropriate priors. Fourteen coarse three-field entries do not, merely by their count, demonstrate a unique, accurately recovered full state. Common prediction origin, rounding, event-definition ambiguity and alternative fits matter. No inverse fit was executed here because the actual rows are absent.

The **51.6° inclination** is independently published NASA information, so it may be a prior rather than something the model discovers.[5] The reported **415 km / 92.7 minutes / eight-second residual / forty-two passes above 10°** remain fictional solver results, not verified measurements. An eight-second in-sample residual, even if calculated correctly, is not eight-second future prediction accuracy. No source establishes that precision from the exhibited notebook fields.

The strongest minimal repair is to identify data and assumptions, not slow the computer down. Under-a-minute computation is not the fundamental objection. John can distinguish a provisional solution from a trustworthy schedule and test it against the actual Hook sighting already written. Preserve Tyler's contribution: the notebook supplies something useful; his subsequent observations test and improve it.

**Available-data hierarchy:** first check whether the already-established ham laptop/app cache actually contains dated TLEs or an ephemeris; otherwise use the copied predictions as constrained reconstruction evidence. This is a proposed check, not a new claim that a convenient archive exists. A copied Huntsville list cannot simply be relabeled Port Angeles. A genuine orbit model can generate predictions for a different observer.

## 5. Keeping predictions useful without internet

NASA's current public trajectory explanation says drag accumulates prediction error and controllers update the ephemeris approximately three times weekly. Its OEM is a time-tagged position/velocity forecast over fifteen days, including planned maneuvers and visiting-vehicle events.[5] That is distinct from a TLE, which contains model-specific mean elements intended for the appropriate SGP4-family propagation.[6]

CelesTrak's accuracy discussion expressly rejects one universal accuracy figure: orbit, measurements, environment and maneuvers matter. Therefore **“error grows; rate unknown” is a good caveat**, while an invented seconds-per-day drift would not be. No-reboost is a useful stated assumption, but not a complete drag model. Attitude/configuration and atmospheric conditions also affect prediction. Docking/departure can change the relevant assumptions; a months-old prediction does not become reliable just because internet access has ended.

Tyler's timed sightings can check observed-minus-predicted arrival, but a single timing correction is not a permanent repair to all future geometry. Keep dates, site and clock basis with observations; test subsequent predictions. No fixed lifespan for an old element set is established here.

Luca's onboard predictor also needs a declared data/software basis. A historical NASA technical paper establishes that onboard GPS position/velocity solutions update ISS navigation state; it distinguishes that capability from higher-precision ground processing.[8] It does **not** prove that a particular crew laptop automatically reads those data, or that 2028 GPS conditions and software access match the old system. A ground-track map alone is not proof of arbitrary-site AOS/LOS forecasting. Choose an existing aboard software/data arrangement in reference after specialist review; do not invent a cloud dependency or additional flight-control access.

## 6. The radio chain and the saved text

### Voice, repeater and packet are different services

For the established direct crew voice plan, 145.800 is the ground's listening frequency and 144.490 its transmitting frequency over Washington.[1] ARISS says the crew selects the regional uplink; it does **not scan both regional uplinks simultaneously**. The tape label in 16 can stay, but “listened on the others” should not imply simultaneous monitoring.

Johan answering on the downlink can credibly produce one revealing failure. Explain it as an assumption carried over from his usual channel habit, not proof that an experienced GMDSS officer cannot understand split frequencies. Once the frequency sheet and prior-contact log are available, ignorance alone should not explain weeks of repetition.

The packet guide describes short digital bursts and connectionless packets being retransmitted, generally originating with ground stations.[7] Packet activity therefore proves functioning radio equipment, not an awake astronaut. A voice unexpectedly heard requires a compatible receiver setting and an actual human transmission; packet decoding does not turn a burst into speech. The recovered station can switch services, but the transition should be knowable rather than magical.

Doppler is a changing frequency offset from relative motion, not generic fading. Its effect scales with frequency, so the 70-cm side needs more attention than the 2-m side. AMSAT's current guidance treats Doppler compensation as an explicit tracking task.[9] This pass does not independently verify the reference's exact ±3.5-kHz number; avoid “FM tolerates it” as an unconditional guarantee. Similarly, a handheld beam's aim and polarization can affect reception without proving that mountains caused a loss.

### What the Kenwood really remembers

Kenwood's **APRS-6 / PDF p.51** explicitly depicts a received message with sender, receive time/date and text, an unread-message count, and subsequent access through the message list. It allows up to **67 text characters**. The existing *PORT ANGELES WA. 6 ALIVE. LISTENING EVERY PASS 145.800.* is **55 characters**, so its length fits.[4]

The manual separately describes station data from up to **100 stations**; that is not a claim of one hundred indefinitely retained messages. Incoming and outgoing messages share finite dedicated memory. Its full-memory rules include replacement/rejection behavior depending on whether old messages have been accessed. One-day-late discovery is therefore plausible **with the right receive configuration and message type**; indefinite retention is not established. Persistence through a power cycle was not verified.

PACKET mode has different TNC indicators, including mailbox indicators, and supports a digipeater function.[4] These are not evidence that every relayed APRS packet becomes a readable crew message in the APRS list. A sender/path/address, receiving mode, and retained-message or computer-log mechanism must connect the events. A radio acknowledgment can establish machine receipt, not that Luca read the message.

**Highest-leverage author choice:** Which already-existing onboard radio/mode actually receives and retains the Port Angeles message? Options requiring verification include an addressed APRS message received in the Columbus radio's APRS configuration, or a record received at the existing second station and subsequently read by the crew. These are alternatives, not proposed new canon. Selecting one resolves the screen, mode-switch and crew-awareness continuity together without removing the emotional beat or adding hardware.

## 7. Passes, terrain and the delayed conversation

A geometric pass, a visible sighting and an active crew-radio window are three different things. NASA's sighting guidance depends on illumination and a darker observer sky; radio does not require the ISS to be sunlit.[5] ARISS specifically ties casual crew voice activity to crew availability.[1] Thus the unseen passes in 11 may still be radio opportunities, but they are not guarantees that somebody is listening.

The reference's **8–10 minutes total / 4–6 good minutes** is a useful scenario scale, not a guaranteed contact allocation. High elevation can improve the link; actual duration depends on trajectory, local mask, equipment and activity. A fourteen-degree pass over unobstructed water is not ruled out by a supposed universal twenty-degree minimum. ARISS's description of near-horizon reception is contrary evidence to treating that reference threshold as a hard rule.[1]

No terrain profile was calculated. The Mount Angeles description in 11 and the proposed Olympic blockage at **30° elevation** in 16 require an actual azimuth-dependent skyline/site-height check before becoming established causes. A named mountain's height and approximate distance do not establish the horizon along a whole moving track. **“Maybe…or it's their antenna” already correctly preserves uncertainty.** Keep that uncertainty rather than repeating a stronger diagnosis elsewhere.

Likewise, “selected the antenna that looked down and west” (16, 113) has no support in the opened ARISS installation description or the stock Kenwood controls. Multiple fixed installed antennas are not automatically a selectable compass-steered array. Verify the actual flight antenna routing/switching or remove that unnecessary specificity. Ground Yagi pointing is supported; onboard west-selection has not been established.

**Clock check:** 16's initial four-minute warning at **17:31 UTC (13:31 EDT)** suggests AOS at **17:35 UTC (13:35 EDT)**. The next claimed AOS is **19:05 UTC (15:05 EDT)**: **ninety minutes later**, not ninety-three. The wait after the first conversation ends is shorter still. Orbital period is not automatically the separation between local AOS events. Label AOS, maximum and LOS consistently, then compute Ellen's wait from the actual event; do not alter a pass by three minutes merely to match an approximate orbital period. Neither the 61°/14° pair nor either November pass was astronomically validated.

The existing weeks-delay components are plausible categories: acquiring gear, correcting the initial frequency assumption, stale prediction uncertainty, missed crew attention, and manual beam tracking. **Their actual cumulative duration is not established.** After the crew reads a location/message and calls every Northwest pass, another two weeks of unsuccessful exchanges needs a concrete, demonstrated remaining limitation—not a generic appeal to distance or radio mystery. Do not manufacture an outage to meet the calendar.

## 8. Minimum scene/reference candidates

1. **11, 113–133:** specify the notebook fields/source epoch in author reference; distinguish copied predictions from sightings and fitting residual from forecast error. Retain the already-written observational test.
2. **16, 9, and canon 695:** choose the packet receiving/storage mechanism. Preserve the day-late screen discovery, but stop calling the relay itself an unattended mailbox.
3. **16, 7/113 and existing reference:** make the mode transition and regional uplink explicit; remove unsupported onboard compass-steering. Refresh the reference's hardware/status assumptions rather than claiming a permanent default.
4. **16, 43 and 63–71:** use the manual-supported **transmit indicator**, not an undocumented red transmit lamp. The stock manual describes a TX icon/power meter; its backlight options are amber/green. The three-second dead-carrier beat needs no color. Separately reconcile the ninety-three-minute wait.
5. **Canon's delay sequence:** show which existing obstacle is tested and resolved at each stage. Do not leave the correct frequency sheet unused for weeks; hearing versus answering can teach the mechanism through one failed exchange, without a technical lecture.

**Reader-facing proposal, not a rewrite:** preserve one simple contrast—“we heard them” is a receive-path result; “they repeated our words back” is the two-way result. An unread packet lies between those outcomes. That distinction carries the technical uncertainty and the emotional escalation together.

## 9. Sources and limitations

All opened/accessed **November 7, 2026**. Current pages establish the research baseline, not fictional 2028 operations.

1. **ARISS, Contact the ISS**, “Frequencies in Use,” “Radios, Modes and Antennas,” packet and crew-availability sections: https://www.ariss.org/contact-the-iss.html
2. **ARISS, Current Status**, explicitly dated November 4, 2026: https://www.ariss.org/current-status-of-iss-stations.html
3. **ARISS, August 12, 2022**, two-radio simultaneous operations: https://ariss-usa.org/simultaneous-operations-of-aprs-and-voice-repeater-now-a-reality-on-iss/
4. **JVCKENWOOD TM-D710GA/GE manuals**: complete English manual, PACKET-1/PDF39; APRS-3/PDF48; APRS-6/PDF51; APRS-16/PDF61: https://manuals.jvckenwood.com/download/files/TM-D710G_CD-ROM_English.pdf . Basic manual, printed pp.23/34/45 (PDF pp.31/42/53), transmission/backlight/specifications: https://manuals.jvckenwood.com/download/files/B62-2562-10.pdf . APRS message page visually checked; stock manual is not proof of every ISS modification.
5. **NASA, Spot the Station**, sighting-field definitions and “International Space Station Trajectory Data”: https://www.nasa.gov/spot-the-station/ . The page has an apparent position-unit typo; no coordinates were taken from it. Supplementary orbital/solar-power context: https://www.nasa.gov/international-space-station/space-station-facts-and-figures/
6. **T. S. Kelso, CelesTrak**, “More Frequently Asked Questions,” March 1998, model-conversion and prediction-accuracy answers: https://celestrak.org/columns/v04n05/ . Expert methodological explanation, not NASA/2026 ISS status; historical distribution/update examples are not used as current schedules.
7. **JoAnne Maenpaa, K9JKM, ARISS-hosted packet paper (2012)**, PDF pp.2–5, packet sounds/receive–transmit distinction/connectionless operation: https://www.ariss.org/uploads/1/9/6/8/19681527/k9jkm_2012_symposium_ver2.pdf . Historical mechanisms, not current frequency status.
8. **NASA technical paper, Three Years of Global Positioning System Experience on International Space Station**, historical navigation discussion, PDF pp.8/16 (paper pp.2/10): https://ntrs.nasa.gov/api/citations/20060045063/downloads/20060045063.pdf
9. **AMSAT, Station and Operating Hints**, updated February 15, 2026, antenna/polarization and Doppler-compensation resource descriptions: https://www.amsat.org/station-and-operating-hints/

**Outstanding:** the actual fourteen rows, flight-radio configuration/retention behavior, crew pass-prediction software/data interface, chosen ground equipment, site skyline, and a coherent fictional 2028 ephemeris. No actual contemporary ISS pass was represented as a story pass. The separate TDRS-handover explanation remains unverified; this note neither certifies nor replaces it. Protected survival physics, consumables and recovery were not investigated. A satellite-amateur operator and orbital-determination specialist should review the selected mechanism before exact numerical predictions become canon.
