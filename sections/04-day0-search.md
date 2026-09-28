# 4 — John, Day 0

Sam stood a moment in the front hall, taking in the framed photos on the wall.

John took off his hat, hung it on a hook next to the garage door, and went to the kitchen. Preparing food was always a way to relax, and he had some chicken breasts he could grill. He'd caught himself shaking once already that morning, standing over a dead man in a ditch, and it came back out on the deck: it took him three tries on the igniter button before the burner caught with a soft whump of propane. Sam found the couch and John got a proper meal together. They ate at the counter sitting on the bar stools, mostly quiet, Dan working a bowl of his own near the door to the garage.

"Okay," John said, when they were finished. He wasn't sure how much Sam had pieced together on the drive. "I should tell you what I do. It's the reason we're sitting here and not just waiting to see who else turns up."

Sam turned on the stool to face him.

"Systems architect, thirty years of it. The last stretch at Google, running the public-sector side out of the D.C. office. My team stands up their big model for the federal agencies, the ones that run the machinery under everything. FAA, DOT, Coast Guard, NOAA, Homeland Security, FEMA." He laid the names down flat, a list he'd recited in more briefings than he could count. "You don't build for an agency without a way into its live systems to test against. Flight data, weather, traffic, maritime. I've spent a career inside those pipelines. Helped design a good number of them."

"So from one chair," Sam said slowly, "you can see whatever's still switched on."

"Close to all of it." John stood and gathered the plates. "Come here, let me show you."

John's office was the last room down the hall. Against the far wall, under its own quiet cooling, sat the workstation the company had issued him when he moved to the public-sector group: a squared-off case no bigger than a two-drawer file cabinet, drawing more power than the rest of the house combined off the dedicated 240-volt circuit an electrician had run for it, running a build of the model his own team was still developing, locally, not in anyone's data center. He was cleared to have it. It came with a toolchain built for evals, the test runs his team used to grade the model before anything shipped, with connectors into FAA flight data, NOAA weather, and the rest of the government feeds his clearances let him touch.

"It's an AI model that's authenticated into restricted data," John said.

Sam looked at the case, at the single amber light on its front, then back at John. "How do you find one person alive in all of that?" Sam wasn't asking it to be answered easily. He'd spent seven hours over Canada working the same problem with a radio and come home with one voice for it.

"Start with what we can throw out." John sat and woke the screens. "We can't just go looking for them. I've got eyes on half the country through these feeds and not one of them is going to catch a live person standing in a doorway at the right second. But I want to see it before I say it. I want to know how much of what we're looking at is alive, and how much is just still running."

They went at it the rest of the afternoon, the two of them at the desk, John driving and narrating, Sam next to him giving suggestions. State DOT camera feeds first, one metro at a time. Most of them weren't video at all but still frames the transportation departments refreshed every minute or two `[verify]`, and the only way to tell a feed was live was the timestamp ticking over in the corner while nothing in the frame moved. Atlanta, which both of them had now seen firsthand, and then Charlotte, Nashville, St. Louis, Dallas, Denver, Phoenix, the whole spine of California, every one of them the same photograph scaled up or down. Cars stopped at wrong angles across empty lanes, nothing moving, nothing burning.

Then AIS, the transponders every large ship carries, reporting name, position, course, and speed every few seconds to the Coast Guard's shore receivers and the satellites that covered open ocean. [verify: AIS vessel count] ships were still under way in every ocean. John clicked one at random, a car carrier two hundred miles east of Cape Hatteras, and the readout gave speed over ground 17.8 knots, course 042, the same numbers she had held since before dawn. An autopilot holds a heading until the fuel runs out or something gets in the way. A shadow fleet steaming nowhere.

Distress beacons last, aircraft ELTs and ships' EPIRBs, every one keying on 406 megahertz and the Cospas-Sarsat satellites relaying the hits down to NOAA's mission control center in Suitland, Maryland, which was supposed to pass each one to a Coast Guard or Air Force rescue coordination center. [verify: ELT count] active alerts worldwide, the earliest stamped within minutes of two a.m. Not one had been acknowledged. Sam looked at the map of them a long moment without saying anything, and John didn't ask what he was thinking.

The sky itself was down to a scatter on the ADS-B map by then, most of it long shallow arcs over open ocean: flights that had launched off the far side of the world in the last hour before it happened and still had fuel because they'd been built to cross half the planet without stopping. Every so often one of them stopped updating, the icon frozen where the last position report had left it.

Last, the grid. His own corner of it, because the grid had a clock running on it and the clock had his house near the middle. He pulled the hourly balancing-authority numbers the Energy Information Administration posted and the frequency readings under them, had the model run the collapse forward instead of just watching it, and Sam leaned in to watch it with him. North America ran on four grids, it turned out, Eastern, Western, Texas, and Quebec, separate synchronized zones tied together by nothing sturdier than a handful of high-voltage DC links that could pass power between them but couldn't hold them in step. Each would fail on its own clock. Coal would go first: a unit burned through the coal already in its hoppers in twelve to fourteen hours, and refilling them took men running conveyors. Gas plants would trip one at a time as fuel handling and unwatched faults caught up with them. With every plant that dropped out, frequency would sag a little further below sixty hertz, and at 59.5 the protective relays would start cutting customers loose to save the rest, under-frequency load shedding, the utilities called it. Once a zone crossed that line it would come down in minutes. The model put the Eastern Interconnection's cascade somewhere around midnight, give or take a couple of hours. Inside a day nearly the whole country would be dark, except for an accidental pocket here and there where the math happened to balance, nothing worth counting on finding twice. The worse problem was the nuclear sites, with nobody left to watch them. His own patch of Georgia sat inside the reach of one, and the model's map came back a bad color, with a date on it. He wrote it on the pad: *Sept 16*.

"That's not abstract to you," Sam said.

"No," John said. "It's not."

The midnight number changed what the afternoon was for. Everything they'd looked at was a moment in time pulled off someone else's server: a camera frame, a ship's last position report, a beacon hit. It would keep coming only as long as the internet held up and the data centers behind those feeds had power, and the data centers were running on whatever diesel they kept on site, a day or three `[verify]`, the network in between on batteries measured in hours `[verify]`. When those went, every feed would stop on its last frame.

"We're going to lose all of this," John said. "Not the machine. The feeds."

He set up the capture before they went any further. Every hour on the hour, the model would pull a snapshot of every feed he could reach, camera frames, AIS positions, ADS-B tracks, beacon alerts, grid readings, and write it to the workstation's local drives. Then he pointed it backward. The flight-tracking and AIS aggregators kept history, and so did the EIA's hourly tables and the beacon logs, so the model could fill in the hours already gone, one snapshot per hour starting at 2:00 a.m. EDT. The cameras kept nothing. For the DOT feeds the record would start at five that afternoon, and the hours before that existed only in what the two of them had seen.

Sam watched the backfilled hours stack up in a directory list, 0200, 0300, 0400. "Why hourly?"

"Fine enough to catch anything that moves on purpose. Coarse enough the drives last."

So they came back to the question the feeds couldn't answer. Not what was still running. Who was still alive.

"None of that showed a person," John said. "Not one. A live hand doesn't leave a mark on a camera or a transponder that a dead ship doesn't leave too. So we quit looking for people and start looking for the one thing only a living person does this morning." He turned it over out loud and Sam turned it with him. A survivor waking into the silence would do what the two of them had done: reach for someone. Pick up a phone. Get on a radio. Try to raise help.

"I worked a radio for seven hours," Sam said. "That dies the minute the towers lose power, and nobody's on the other end anyway. What sticks around?"

"A log." John had it now. He told Sam about the first 911 call, that morning on the Parkway, the calm synthetic voice reciting call volume and hold times while a dead man sat slumped in the seat ahead of him and no one human sat anywhere in the loop, every dispatcher in every center as gone as everyone else. He'd hung up and written it off as a dead end. It wasn't. That agent had answered him, and it had answered everybody, every person anywhere in the country frightened enough this morning to dial three digits, and every one of those calls was sitting in a log at whatever county center took it, a callback number, a location, a recording, on a server nobody was watching.

"I wasn't the only one who tried," John said. "That's the whole thing. If the agent logged mine, it logged all of them."

Sam sat with that a second. "So pull the logs."

"Not that simple. There are better than five thousand of those call centers `[verify: PSAP count]`, and every one has its own security wrapped around it, county by county, and the model won't touch an unauthorized system on its own. It refuses by design, on purpose, because I helped write some of the policy that makes it refuse. I can take that layer off. I know exactly how, better than almost anyone alive, probably. I've just never actually done it for real, not outside a test harness with three other people signed off and watching. It's not nothing."

Sam didn't hesitate. "I flew three hundred people halfway to Seoul with a dead crew and a full cabin, and I didn't ask anyone's permission to turn that airplane around either."

"Then it's not just me deciding," John said, and for the first time since the grill his hands were still.

He stripped it that evening at the desk, with Sam in the recliner in the office corner, the two men talking while John worked. The layer was built to survive exactly this kind of tampering, but he knew the model's blind spots better than the people who'd built the guardrails in the first place, and inside twenty minutes he had it answering without the refusals. He set three dozen instances running, each working a block of states and their patchwork of county and regional dispatch systems. The filter was his. Calls after 2:00 a.m. EDT placed by a person, not an alarm company's autodialer or a car's crash-detection system. A callback number. An address or coordinates from the location record the phone carrier attaches to every 911 call. The first eleven counties came back inside the hour, and every one of them was empty.

They ate again around eight, simpler this time, and didn't talk much. Somewhere in the quiet after, John found himself in the hallway outside Naomi's study, and went in the way he sometimes did without quite deciding to. Sixteen years and he'd never made it into anything else. Her books shelved the way she'd shelved them, the reading chair, the rolltop desk he'd bought her their second year in the house. Her Bible sat where it always sat, soft at the corners, the ribbon still marking where she'd left off. He opened it there. Isaiah, a verse underlined in pencil and gone over again in yellow, the way she used to mark the ones she kept coming back to. *Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, I will help you.* He read it twice, closed the book, and carried it to the office and set it next to the other things he wanted to remember to take with him.

Sam was on the couch when he came back, Dan sprawled half across his lap like he'd already decided this one belonged to him too. "We're going to need an airplane," Sam said, before John had sat down.

"I fly a 182 out of PDK." John sat down heavily in the chair across from him. "Instrument-rated. I've never touched a turbine."

Sam raised his eyebrows. "Then PDK's where we find the right plane, once we've got something worth flying to." He looked toward the hallway, toward the low steady hum of the machine still working. "How long's it going to take?"

"All night, probably. It's not fast. The systems it's accessing will put up a fight, and some of them are from last century, which means we might not get anything. Half of them are already going dark on their own."

"We should sleep," John said. "The data'll paint a clearer picture in the morning. I don't expect the power to make it through the night. I installed a whole-house standby generator four years ago after an ice storm where I almost froze to death." He laughed. "I'm going to go double-check on it before I turn in, make sure it's ready so it'll actually pick up the load when the grid drops." He paused there.

"There's something else. That grid model I ran, I didn't just watch this region go dark. I had it run what happens after. Plant Vogtle sits about a hundred and fifty miles southeast of this house. Four reactors. They'll scram themselves the second the frequency goes bad, control rods drop into the core and the reaction stops, automatic, no operator required, and that part takes care of itself. The part that doesn't is the spent fuel sitting in the cooling pools, still hot, still needing pumps to keep water moving over it. The pumps run on the site's emergency diesels and batteries, three days, maybe a week, with nobody left alive to refuel them. Best real number I've got is somewhere between ten and twenty-one days after the plant trips before a pool like that can boil down far enough to expose the rods to open air. After that it's not a power outage anymore. It's a regional contamination event —"

"Fallout?" Sam said. "What do you mean?"

"Nothing like a bomb. Think Fukushima, not Hiroshima. The fuel gets hot enough, the cladding catches, and what comes out is airborne and waterborne: cesium, iodine, strontium, into the soil and the water table for years, drifting downwind over however many miles the weather that week decides to give it."

Sam didn't say anything for a second, working through it the way John imagined he worked through a checklist, item by item, no wasted motion. "That's the date. On the pad."

"That's the date. The early end of it." John tapped it once, like confirming a heading. "So regardless of what we find worth flying to tomorrow, we can't still be in this house when that date comes due. We need to head west. West of every reactor like it. Well before it matters, not the week it starts to."

There was a guest room down the hall that had never once had a guest in it; John pointed him to it, then took a flashlight out to the side yard. The generator sat on its concrete pad beside the AC condenser, a 22-kilowatt standby unit plumbed to the 500-gallon propane tank he'd had buried when he put it in. The float gauge under the tank's dome lid read 78 percent, about three hundred ninety gallons, call it a week at what the house would pull with the workstation running `[verify: burn rate]`. He pulled the dipstick and wiped it on his pants leg, checked it, and seated it again. The controller showed AUTO, not OFF, and the transfer switch panel by the meter showed utility power present, generator ready.

He went to his own bedroom. Dan settled across his feet, and the workstation churned on in the dark. Around 12:50 a.m. the power went out. For about ten seconds the house was dark and silent, long enough for Dan to lift his head, while the transfer switch waited to be sure the utility wasn't coming back. Then the generator cranked and caught out in the side yard, the switch clunked over, and the house came back to life. At 1:00 the capture job wrote its snapshot on schedule, with fewer feeds answering than the hour before.
