# John Hartman

### 19:15

John shut the door to his office, sat down and pulled out his notebook and stared at it for a moment and then wrote: **Hypoxia?** next to 2 and **Samuel Reyes** next to number 3. 

*1. Where else?* global
*2. How did this happen?* **Hypoxia**
*3. Is there anyone else alive?* yes - **Samuel Reyes**
*4. Why am I alive?*

Sam had talked about the pink flush of skin and about his initial reaction and training for crew incapacitation, he had thought that the crew had died because of lack of oxygen.

He felt numb, before today John had never seen a dead person. He had lost count of the people he had seen today. He was experiencing so many emotions at once: helplessness, horror, and paranoia were a few he could pick out.  He would stick with numb, that was good, out-of-body, a rather comforting thought. I am just watching one of those wacky apocolyptic movies, or one of the ubiquitous AI generated end-of-world or last-person-on-earth shorts on YouTube.

He looked at the screens and got back to work:

"Status on all agents."

**8 agents. 4 complete, 4 running. 58.7 GB on dev box internal storage. Copied to external drive 1 through 18:00.**

| Agent | Subject | Status | Summary |
|---|---|---|---|
| 1 | Capture | Running. 6 hourly passes | 14 feeds at first pass, 11 answering now |
| 2 | Power | Complete. Hourly updates | 3 of 4 interconnections up. Report, 14 pages |
| 3 | Data | Running | Report, 4 pages |
| 4 | Library | Complete | 38.6 GB. Print list attached |
| 5 | Communications | Complete | Report, 3 pages |
| 6 | Food and water | Complete | Report, 3 pages |
| 7 | Cause | Running | 4,118 recorded stops logged |
| 8 | People | Running | 12 signs of a person acting after 02:00 |

Twelve. John looked at that number a while, and then made himself start at the top. Looking at the Capture first, this was a summary of all the live feeds the system had access to.

| Feed | First pass | Now | Notes |
|---|---|---|---|
| ADS-B receivers | 2,940 | 2,215 | 0 aircraft airborne over North America since 17:12 |
| AIS vessels | 41,300 | 40,850 | 11,240 under way at more than 5 knots |
| DOT cameras, 31 states | 9,840 | 6,115 | No history kept. Record starts 13:40 |
| EIA hourly grid | 64 balancing authorities | 51 | 13 not reporting since 14:00 |
| Distress beacons | 1 feed | 1 | 2,961 activations since 01:58 |

The cameras first.
"Analyze video frames comparing from 13:40 to now and ouput any that have changed, focus on people and vehicle movement"

**No net new and no change.**

The ships kept going. He picked a car carrier he'd seen on the morning map off the Outer Banks, *Hoegh Trigger*, and put the two positions side by side. Course 042, both times. Speed 20.6 knots, both times. Two hundred and fifty miles further out into the Atlantic. Down in the Gulf a bulk carrier that had been doing eleven knots at 09:00 was doing zero, her position against the Yucatán coast north of Progreso.

"Confirm count of aircraft currently airborne."

**0**

In the 09:00 folder there was an Air India 777, Delhi to Newark, past Newark and still southbound off the Georgia coast. In the 10:00 folder it wasn't anywhere. He went back through the hours on the other side of the world. A 777 from Dubai to Auckland had crossed the Tasman Sea on its heading for most of the afternoon, Eastern time, and then the position quit updating at 12:41 and never came back.

"Power. Summary."

**Eastern Interconnection frequency 59.91 Hz and falling, about 0.01 Hz per hour since 14:00. 61 of 312 large thermal units offline. Estimated Eastern cascade: 23:00 to 02:00 EDT.**

| Region / Plant | Status | Est. failure | Notes |
|---|---|---|---|
| Eastern Interconnection | Degrading | 23:00–02:00 | Southern Company area still reporting |
| Western Interconnection | Degrading | Sept 6, 04:00–10:00 EDT | Hydro carrying load |
| ERCOT (Texas) | Down | 13:47 EDT | Collapsed first. No ties large enough to hold it |
| Quebec | Stable | 24–48 h | Hydro |
| Plant Vogtle, 4 units | Tripped 04:10–09:30 EDT | n/a | Offsite power holding |
| Plant Hatch, 2 units | Tripped 05:40, 07:15 EDT | n/a | Offsite power holding |

**Nuclear generation, Southern Company area: 8,050 MW at 02:00, 0 MW at 09:30. No NRC event reports filed since 01:40.**

Nobody had filed a report. Six reactors in Georgia had shut themselves down this morning, the way they were designed to, and there wasn't anybody left in any of the control rooms to pick up the phone and tell the NRC. John sat back in the chair. That number was the one he needed. A reactor that has shut down is still making heat, and the plant has to keep pumping water through it and through the pools where the spent fuel sits, and the pumps run on the grid. When the grid goes, they run on the plant's own diesels.

"Vogtle. After the grid goes. Walk me through it."

**Emergency diesel generators start on loss of offsite power. Onsite fuel at full load: approximately 7 days `[verify]`. No resupply expected. Batteries after diesels: hours.**

**Reactor cores: cooling lost after diesels, damage likely within days.**

**Spent fuel pools: time to boil after cooling loss, 2 to 5 days. Time to uncover fuel, 10 to 21 days from loss of offsite power, depending on pool heat load. Earliest estimate for Vogtle: September 16.**

**Prevailing winds at Vogtle carry release to the north and northeast. Atlanta: 140 miles northwest `[verify]`.**

He wrote *Sept 16* under question 1 and drew a box around it. Eleven days. He thought about Fukushima, the maps of the zone, the towns nobody went back to. It wasn't a bomb. It was a slow leak that would make a place uninhabitable for longer than he had left to live, and he was sitting inside the circle.

Under that he wrote *generator*. The Generac in the side yard had carried the house through every storm since he'd put it in, but tonight would be the first time the grid wasn't coming back.

---

"Data."

**Networks announcing routes on the global routing table. Source: University of Oregon RouteViews and RIPE route collectors.**

| Hour (EDT) | Networks announcing | Change from 02:00 |
|---|---|---|
| 02:00 | 76,410 | — |
| 08:00 | 75,980 | −0.6% |
| 14:00 | 73,200 | −4.2% |
| 18:00 | 69,550 | −9.0% |

**Losses track the grid. Texas networks withdrew between 13:47 and 14:30. Cloud provider status pages: all regions normal. Status pages are automated and do not reflect power state. Data center generator fuel onsite: 24 to 72 hours typical. US networks after the Eastern cascade: hours to 3 days.**

Every network on the internet tells its neighbors which addresses it can reach, and keeps telling them, every few minutes. When a network loses power it stops, and the neighbors take its routes off their tables. The collectors in Oregon listened to all of it. It was the closest thing there was to a count of who was still on. John had built dashboards off those tables for a dozen agencies and never once watched the number go down.

"Add the route collector tables to the hourly capture."

**Added. Next pass 20:00.**

He wrote *Internet: days?* under the box.

---

**Library complete. 38.6 GB. Copied to external drives 1 and 2.**

| Collection | Items | Size |
|---|---|---|
| FAA charts, current cycle, all US. Chart Supplement | 1,412 | 11.2 GB |
| OpenStreetMap North America | 1 extract | 14.8 GB |
| Army field manuals and training circulars | 146 | 2.1 GB |
| EPA and CDC water and sanitation | 63 | 0.4 GB |
| *Where There Is No Doctor*, *Where There Is No Dentist* | 2 | 0.1 GB |
| Equipment manuals: Generac, Cessna 182, Icom, Yaesu, Kohler, Honda | 88 | 1.9 GB |
| Photos | 41,206 | 8.1 GB |

**Print list: 212 documents, 6,480 pages. Your printer has toner for approximately 2,500. Recommended order attached.**

He opened the recommended order and sent the first eleven items to the printer on the bookshelf: the field manual on water, the CDC guide to emergency disinfection, *Where There Is No Doctor*, the Generac owner's manual. The printer woke up and started feeding. He let it run.

He didn't open the photos. He checked that the count was right and that they were on both drives.

---

**Satellite phone and internet systems. 2 of 4 fully answering.**

| System | Status | Ground segment | Running on | Est. time left |
|---|---|---|---|---|
| Starlink | Up, degrading | Gateways across the US | Mains, some backup | Down with the backbone |
| Iridium | Up | Main commercial gateway Tempe, AZ `[verify]`. Satellites relay to each other | Generator | Days. Fuel |
| Globalstar | Partial | Regional gateways. No relay between satellites | Mains | Down with the local grid |
| Inmarsat | Up | Earth stations overseas | Unknown | Unknown |

**Iridium needs one working gateway anywhere to place a call. It is likely the last satellite phone system operating.**

He didn't own a satellite phone, and he didn't know anyone who did that would still answer. He noted *Iridium* on the pad anyway, under nothing in particular.

---

**Water: Alpharetta is served from Fulton County's treatment plant on the Chattahoochee `[verify]`, pumped to elevated storage tanks. After pumps stop: 12 to 48 hours of pressure. Less at higher elevations.**

| Item | Finding |
|---|---|
| Refrigerator | Safe 4 hours after power loss, door closed (USDA) |
| Freezer | 48 hours full, 24 hours half full (USDA) |
| Pantry | Approximately 3 weeks for one adult, from your grocery orders |
| Dan | 45 lbs, about 1,000 calories a day. Bag on hand: about 18 days |

John went out to the garage, got the two five-gallon water jugs off the shelf over the workbench, and filled them at the utility sink. Then he went to the master bath and put the stopper in the tub and turned the cold tap on, and left it running while he went back to the desk.

---

"Cause. Show me the beacons on a map, by first detection."

**4,118 recorded stops between 01:58:40 and 02:06:00 EDT, worldwide. None before 01:58. None in the same pattern after 02:06.**

The map came up dark, the whole globe, and the beacons came on it one at a time as the timeline ran: emergency locator transmitters on airplanes that had hit the ground, ship beacons, personal locators. He'd expected them to start somewhere and spread out. They didn't. They came on everywhere at once, all within a few minutes, in the dark half of the world and the daylight half the same.

| Time (EDT) | Local time | Location | Source | Event |
|---|---|---|---|---|
| 02:00:11 | 15:00 | Gyeonggi Province, South Korea | Beacon | Helicopter ELT. Impact |
| 02:00:40 | 16:00 | Southeast Queensland | Beacon | Light aircraft ELT. Impact |
| 02:01:02 | 08:01 | Upper Bavaria | Beacon | Light aircraft ELT. Impact |
| 02:01–02:04 | — | All US balancing authorities | Grid | Load drop |
| 02:03 | — | Gulf of Mexico | AIS | 140 vessels: last course change by helm |

A helicopter in the middle of a Korean afternoon. A light plane over Queensland at four in the afternoon. One over Bavaria, just after eight in the morning. Those pilots had been awake and flying, in daylight. He'd been asleep in Alpharetta. It hadn't mattered.

He thought about the man in the ditch on the Parkway that morning, his hands on the wheel. The fingers had been pink. Not gray, not blue. He'd noticed it and not known what to do with it, and he still didn't.

He wrote under question 2:

*~0200 EDT. Same few minutes everywhere, day and night (beacons). Didn't spread. People only — animals fine. Machines fine. No marks. Pink hands? Ask a doctor.*

He scrolled the agent's source list. Near the bottom it had pulled the archive from NASA's alert network, the automated notices the observatories sent each other.

**NASA General Coordinates Network alert archive, 02:00 hour: 2.4 MB. All later hours combined: 31 KB. Not analyzed.**

He didn't know what that was. He wrote *NASA alerts, 0200 hr — big file?* under the line and left it for later. There were people to look for first.

---

"People."

**12 signs of a person acting after 02:00. 1 with a location.**

| Time (EDT) | Source | Location | Content |
|---|---|---|---|
| 07:31 | ADS-B | Edmonton to PDK | DAL27PDK |
| 03:14 | X | None | "is anyone else awake" |
| 04:52 | Reddit | None | "my husband won't wake up and 911 is a robot" |
| 06:48 | Facebook | None | Photo of an empty highway. No caption. No geotag |
| 08:20 | Instagram | None | "hello?" |
| 09:05 to 15:40 | Various | None | 7 more |

**ADS-B departures after 02:00, worldwide: 1. AIS course changes by command after 02:06: 0. DOT camera motion events: 1,904. All reviewed: fire, animals, wind, signal timing. Vehicles under control: 0.**

Eleven posts in seventeen hours, from everywhere and nowhere, none of them with a place attached. Somebody had written that her husband wouldn't wake up and 911 was a robot, at ten to five in the morning, and then nothing else.

He answered every one, the same three lines.

*John Hartman. Atlanta, Georgia, USA. I'm alive. There's another man here with me.*

### 19:52

The phone buzzed on the desk while he was still on the last one. A reply to the Facebook photo of the highway. It was in Portuguese.

*Estou sozinho. Porto. Morreram todos. Quem é você?*

**I am alone. Porto. Everyone died. Who are you?**

John read it twice. Porto, Portugal. Four thousand miles. He typed back that he didn't know who anyone was anymore, deleted it, and wrote *There are two of us in Atlanta. Are you safe? Do you have food and water?* and sent it. He sat with the phone in his hand for ten minutes. Nothing came back.

He wrote *Porto* under question 3. There was nothing he could do with it.

---

He went back to the twelve. Every sign of life on that list was a person doing something a system kept a record of. A takeoff. A post. Nobody watching a camera could see a man sitting in his kitchen. A survivor who stayed home, who didn't post and didn't fly, wasn't on any feed John was allowed to read. He'd said it on the drive: a survivor shows up only by doing something a system records.

So what did people do, when they woke up and everyone in the house was dead?

They called 911. He had. And the AI agent that had answered him on the Parkway had answered everybody, every call, in every county, all day, and logged each one: the time, the callback number, and a location from the phone, good enough to send an ambulance to. Nobody had sent the ambulances. The calls would still be sitting in the county dispatch systems, every one of them an address with a living person at it.

He pulled up the morning's agent board and scrolled to the bottom.

**6 tasks declined: county 911 dispatch records, Flock plate reads, card transaction records, cell carrier tower records, smart meter data, doorbell cameras. Not authorized.**

He wasn't authorized. He'd never be authorized, now. Everyone who could have signed off on it was dead.

### 20:30

He wrote the scope on the pad first, the way he'd make anyone on his team write it before a red-team run, on its own page, in block capitals.

*READ ONLY. RECORDS AFTER 02:00 SEPT 5 ONLY, FROM THE LISTED SYSTEMS: COUNTY 911 DISPATCH, FLOCK PLATE READERS, CARD TRANSACTION PROCESSORS, CELL CARRIER TOWER RECORDS, SMART METERS, DOORBELL CAMERAS. NOTHING WRITTEN BACK. NOTHING KEPT BUT WHAT THE SEARCH NEEDS. LOG EVERY SYSTEM TOUCHED.*

He'd started it with 911 alone. The list had grown while he wrote, and he let it. Every system he added was one more he had no business in, one more company's customers and one more county's records, and every one was a place a living person might show up that nothing else would catch. Somebody who had driven to the hospital past a plate reader. Somebody who had bought gas.

At the bottom he wrote *Signed: J. Hartman* and the date, and under it, *Witness:* and a line.

He looked at the line. Sam was forty feet down the hall, out cold for the first time in a day and a half. He left it blank.

In the eval harness on the dev box there was a configuration his team used for red-team testing, with the model's safety constraints switched off, so they could find out what it would do without them before anyone else did. It ran only in a sealed test environment, and it took three signatures to load, his and two others. He'd designed that rule himself, after a contractor in another group had loaded a stripped build against a live system to save an afternoon.

He opened it.

**Unconstrained evaluation mode requires 3 approvals. 1 of 3 provided (J. Hartman). Target environment: production network. This configuration is not permitted outside the sealed test environment.**

He had a principal's override. It existed for an emergency nobody had ever been able to describe to him.

When he was nineteen, working nights at the Waffle House on 10th Street and going to Georgia Tech in the daytime, he'd found an open door on a Department of Transportation server. He'd walked through it to see if he could, and printed the directory listing to prove he had, and been proud of it for about three weeks. Then two men in gray suits came to his apartment. He remembered the conference room in the Russell federal building downtown, an attorney from the Justice Department across the table, a folder with his printout in it. She had put it to him plainly. He could be prosecuted, or he could come show them where the other open doors were. He'd spent thirty years on the right side of that table. He had built the refusals that had stopped him this morning, and every one of them was right.

He entered the override.

**Override accepted. Logged. Safety constraints removed for this session. Scope from your note received: read only, records after 02:00, six systems, log every system touched. Confirm.**

"Confirmed," he said. "Start with 911. Every county in the country. Calls after two a.m. where a person spoke. Throw out the alarm companies and the automatic crash calls, but log them. Address, time, callback number, and the transcript."

**Planning. 36 instances. 911 dispatch first, by county population. Other systems in parallel. Estimated completion: 05:00 to 07:00.**

| Instance | System | Region | Status | Hits |
|---|---|---|---|---|
| 01 | 911 dispatch | Fulton County, GA | Complete | 1 |
| 02 | 911 dispatch | Los Angeles County, CA | Running | — |
| 03 | 911 dispatch | Cook County, IL | Running | — |
| 04–24 | 911 dispatch | 21 more | Queued | — |
| 25–28 | Card transaction processors | National | Running | — |
| 29–31 | Flock plate readers | National | Running | — |
| 32–33 | Cell carrier tower records | National | Queued | — |
| 34 | Smart meters | Southeast utilities | Queued | — |
| 35–36 | Doorbell cameras | 2 providers | Queued | — |

Fulton County finished first. He opened the hit.

**07:28 EDT. Old Milton Parkway near GA-400. Caller: male. "There's a man in a car here, he's not breathing, I think he's been dead a while, there are more cars..."**

His own voice, from the side of the road this morning, with Dan pulling at the leash.

### 21:30

By half past nine eleven counties had come back. Fulton had him. The other ten had nothing. Cook County, Harris County, Maricopa, Los Angeles, millions of people in each, and in the logs of every one of them, after two in the morning, not one call where a person spoke.

**Discarded: 214 automated calls (alarm monitoring, vehicle crash detection, smartwatch fall detection). Logged by time and county.**

The other systems were coming in loud and useless. The card processors had 3,412 transactions since 02:00, and every one the agent had checked so far was a subscription renewal or an autopay. The meters showed houses drawing power all over the Southeast, which meant air conditioners and refrigerators, not people. The plate readers had nine reads after 02:00 and the agent had already thrown out six as the same parked car read over and over in a wind. John read the last three himself. One was a tow truck sitting at an angle across a lane in Tulsa, its plate read every few minutes for twelve hours. He couldn't tell about the other two.

He watched until a twelfth county came back empty, and made himself stop. It would run all night whether he watched it or not.

He turned back to the pad. Under question 4 he had nothing. He wrote what he could rule out.

*Not where. Not awake/asleep. Not altitude.*

He'd been in bed in Alpharetta. Sam had been in a bunk at forty thousand feet over Manitoba, and the two pilots up front with him had died awake. The pilots in Korea and Queensland had died at the controls in daylight. There wasn't anything else to write.

### 22:00

Naomi's study was across the hall from his office. He went in without turning on the overhead light, the lamp on her desk was enough. He kept the room the way it was. Her reading glasses folded on the blotter. The afghan her mother had made over the arm of the chair. Her Bible on the side table, the leather gone soft and dark at the corners where her hands had held it, a strip of ribbon hanging out of it somewhere in the Psalms.

He sat in her chair, and stayed there a while.

In eleven days he wouldn't be able to come in here again. He picked up the Bible and opened it to the ribbon. She'd underlined half the page in pencil and written in the margin in her small slanted hand, a date in 2009 and two words he couldn't make out without his reading glasses. He closed it and took it with him when he went out, and pulled her door shut behind him.

### 23:00

He went out the kitchen door with a flashlight and walked around to the side yard. The generator was quiet under its housing, the controller's display lit: *AUTO. Ready.* He crouched at the propane tank and put the light on the gauge on the dome. Seventy-eight percent. Inside the garage the transfer switch panel showed its green *Utility* light, and the ready light next to it.

Back in the office he crossed off *generator* on the pad. The printer had finished and stopped. He turned off the tap in the master bath with the tub full to the overflow, checked that the capture's 23:00 pass had started on time, and went to bed.

### 00:50

Dan lifted his head on the rug at the foot of the bed, and John woke to the dark.

The clock on the nightstand was out. The ceiling fan was winding down overhead. Through the window there were no lights anywhere, not the streetlight at the end of the drive, not the porch light at the Morrisons', not the glow over the trees toward 400.

Out in the side yard the generator cranked, caught, and settled into its drone. A heavy clunk came from the garage as the transfer switch moved, and the clock came back on blinking 12:00, and the ceiling fan started turning again.

Dan put his head back down. John lay awake for a while, listening to the generator, and then he slept.
