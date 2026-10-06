# 5 — John, Day 0

Sam stood a moment in the front hall, taking in the framed photos on the wall.

John took off his hat, hung it on a hook next to the garage door, and went to the kitchen. Preparing food was always a way to relax, and he had some chicken breasts he could grill. He'd caught himself shaking once already that morning, standing over a dead man in a ditch, and it came back out on the deck: it took him three tries on the igniter button before the burner caught with a soft whump of propane. Sam found the couch and John got a proper meal together. They ate at the counter sitting on the bar stools, mostly quiet, Dan working a bowl of his own near the door to the garage.

"Okay," John said, when they were finished. "I should tell you what I do. It's the reason we're sitting here."

Sam turned on the stool to face him.

"Systems architect, thirty years of it. The last stretch at Google, running the public-sector side out of the D.C. office. My team stands up their big model for the federal agencies, the ones that run the machinery under everything. FAA, DOT, Coast Guard, NOAA, Homeland Security, FEMA." He laid the names down flat, a list he'd recited in more briefings than he could count. "You don't build for an agency without a way into its live systems to test against. Flight data, weather, traffic, maritime. I've spent a career inside those pipelines. Helped design a good number of them."

"So from one chair," Sam said slowly, "you can see whatever's still switched on."

"Close to all of it." John stood and gathered the plates. "Come here, let me show you."

John's office was the last room down the hall, the door standing open, a legal pad on the desk with a list on it, most of the lines crossed through. Sam stopped in the doorway and took in the rest. Against the far wall, under its own quiet cooling, sat the workstation the company had issued John when he moved to the public-sector group: a squared-off case no bigger than a two-drawer file cabinet, drawing more power than the rest of the house combined off the dedicated 240-volt circuit an electrician had run for it, running a build of the model his own team was still developing, locally, not in anyone's data center. It came with a toolchain built for evals, the test runs his team used to grade the model before anything shipped, with connectors into FAA flight data, NOAA weather, and the rest of the government feeds his clearances let him touch.

"It's an AI model that's authenticated into restricted data," John said.

John sat and woke the screens. "Before you landed, I spent the morning saving everything I could reach," he said. "Every feed I'm cleared for, every hour on the hour since twenty to ten this morning, and back to two a.m. wherever the source kept history. Charts, maps, manuals, all of it. I didn't know how long any of it would keep answering, and I still don't." He brought up the directory, a column of folders, one for each hour, the newest one stamped 1600. "I haven't really looked at any of it yet."

They went at it the rest of the afternoon, the two of them at the desk, John driving and narrating, Sam next to him giving suggestions, an hour from the archive on the left screen and the live feed on the right. State DOT camera feeds first, one metro at a time. Most of them weren't video at all but still frames the transportation departments refreshed every minute or two `[verify]`, and the only way to tell a feed was live was the timestamp ticking over in the corner while nothing in the frame moved. Atlanta, which both of them had now seen firsthand, and then Charlotte, Nashville, St. Louis, Dallas, Denver, Phoenix, the whole spine of California, every one of them the same photograph scaled up or down. Cars stopped at wrong angles across empty lanes, nothing moving. The 0940 frame and the live one matched car for car, the shadows the only thing that had moved. What changed was how many answered. John had the model count the cameras in each folder, and the number went down every hour, a few hundred at a time, whole county networks dropping out at once `[verify: camera network backup power]`. Both state networks he'd rewired at noon were already gone.

Then AIS, the transponders every large ship carries, reporting name, position, course, and speed every few seconds to the Coast Guard's shore receivers and the satellites that covered open ocean. [verify: AIS vessel count] ships were still under way in every ocean. John clicked one at random, a car carrier out in the Atlantic, and stepped her back through the folders. In the 0200 folder she'd been off Cape Hatteras. Every hour after that she was another eighteen miles out on the same line, speed over ground 17.8 knots, course 042, and live she was two hundred fifty miles further on with the same numbers. An autopilot holds a heading until the fuel runs out or something gets in the way. Some of them had found something in the way. A bulk carrier's track ran straight in across the Gulf and stopped dead against the Yucatán coast at a quarter past eleven, speed zero in every folder after that. Sam pointed at it without saying anything, and John moved on.

Distress beacons, aircraft ELTs and ships' EPIRBs, every one keying on 406 megahertz and the Cospas-Sarsat satellites relaying the hits down to NOAA's mission control center in Suitland, Maryland, which was supposed to pass each one to a Coast Guard or Air Force rescue coordination center. [verify: ELT count] active alerts worldwide, the earliest stamped within minutes of two a.m., more in every folder since. Not one had been acknowledged. Sam looked at the map of them a long moment, and John didn't ask.

Then the sky. In the 0900 folder there had still been a scatter on the ADS-B map, most of it long shallow arcs over open ocean: flights that had launched off the far side of the world in the last hour before two a.m. and still had fuel because they'd been built to cross half the planet without stopping. Live, there were fewer. Sam leaned in and read them the way John read a grid table. "That's a 777 out of Dubai. Fourteen, fifteen hours of gas, give or take." He found its icon in the 1500 folder and then on the live map, frozen in the same spot over the Pacific where the last position report had left it. "He's out." He went down the list doing the same arithmetic, departure time plus fuel, and called each one before it froze on the live map.

Last, the grid. He pulled the hourly balancing-authority numbers the Energy Information Administration posted and the frequency readings under them, had the model run the collapse forward instead of just watching it, and Sam watched it with him. North America ran on four grids, Eastern, Western, Texas, and Quebec, separate synchronized zones tied together by nothing sturdier than a handful of high-voltage DC links that could pass power between them but couldn't hold them in step. Each would fail on its own clock. Coal would go first: a unit burned through the coal already in its hoppers in twelve to fourteen hours, and refilling them took men running conveyors. Gas plants would trip one at a time as fuel handling and unwatched faults caught up with them. With every plant that dropped out, frequency would sag a little further below sixty hertz, and at 59.5 the protective relays would start cutting customers loose to save the rest, under-frequency load shedding, the utilities called it. Once a zone crossed that line it would come down in minutes. The model put the Eastern Interconnection's cascade somewhere around midnight, give or take a couple of hours. Inside a day nearly the whole country would be dark, except for an accidental pocket here and there where the math happened to balance. The worse problem was the nuclear sites, with nobody left to watch them. His own patch of Georgia sat inside the reach of one, and the model's map came back a bad color, with a date on it. He wrote it on the pad: *Sept 16*.

Everything they'd looked at was a moment in time pulled off someone else's server: a camera frame, a ship's last position report, a beacon hit. It would keep coming only as long as the internet held up and the data centers behind those feeds had power, and the data centers were running on whatever diesel they kept on site, a day or three `[verify]`, the network in between on batteries measured in hours `[verify]`. When those went, every feed would stop on its last frame. "The feeds are saved. What isn't saved is whatever we haven't thought of yet. Anything else we want off a live server, we want it before midnight."

So they came back to the question the feeds couldn't answer, who was still alive.

"None of that showed a person," John said. "Not one. A live hand doesn't leave a mark on a camera or a transponder that a dead ship doesn't leave too. So we quit looking for people and start looking for the one thing only a living person does this morning." He turned it over out loud and Sam turned it with him. A survivor waking into the silence would do what the two of them had done: reach for someone. Pick up a phone. Get on a radio. Try to raise help.

"I worked a radio for ten hours," Sam said. "That dies the minute the towers lose power, and nobody's on the other end anyway. What sticks around?"

"A log." John had it now. He told Sam about the first 911 call, that morning on the Parkway, the calm synthetic voice reciting call volume and hold times while a dead man sat slumped in the seat ahead of him and no one human sat anywhere in the loop, every dispatcher in every center as gone as everyone else. He'd hung up and written it off as a dead end. But that agent had answered him, and it had answered everybody, every person anywhere in the country frightened enough this morning to dial three digits, and every one of those calls was sitting in a log at whatever county center took it, a callback number, a location, a recording, on a server nobody was watching.

"I wasn't the only one who tried," John said. "If the agent logged mine, it logged all of them."

Sam sat with that a second. "So pull the logs. Before midnight."

"Not that simple. There are better than five thousand of those call centers `[verify: PSAP count]`, and every one has its own security wrapped around it, county by county, and the model won't touch an unauthorized system on its own. It refuses by design, because I helped write some of the policy that makes it refuse. I can take that layer off. I've just never actually done it for real, not outside a test harness with three other people signed off and watching. It's not nothing."

Sam looked at him for a second. "Who's it protecting?"

"The counties. The callers. Anybody whose records are sitting on those servers." John took his glasses off and rubbed the bridge of his nose. "That's the point of it. A model running on my credentials with nothing holding it back can walk into almost anybody's system. The rule doesn't care whether I mean well. Everybody who ever broke one meant well."

"The callers dialed 911 because they wanted somebody to come find them," Sam said. "That's what's in those logs. People asking for help."

"I know."

"And the counties. Who's sitting at a console in any of those five thousand centers tonight?"

John put his glasses back on and didn't answer.

Sam leaned forward, elbows on his knees. "Ninety-one point three. You know it."

"Pilot in command." John knew it the way every pilot knew it, from the written and from the checkride. "In an emergency requiring immediate action, he may deviate from any rule of this part to the extent required to meet that emergency."

"I went through it about three-thirty this morning. I turned an airliner off its route with no clearance from anybody, landed it heavy at Edmonton, and took an airplane off a ramp there that belongs to somebody I've never met. None of that's legal on a normal day. I'd do every bit of it again."

"To the extent required," John said. 

"So write the extent down."

John pulled the legal pad over and turned to a clean page. He wrote it the way he'd have written it for a review board. *Read only. 911 call records only, public safety answering points. Calls after 0200 EDT. Nothing written back, nothing deleted, nothing kept but what the search needs.* Under that, *Log every system touched.* He looked at it a while.

"The last time I went into a system I wasn't invited into, I was nineteen," he said. "A man from the Justice Department sat across a table from me and asked whether I understood the difference between *could* and *should*. I've spent the better part of forty years building things so nobody else would have to get asked that."

"Then answer him," Sam said. "There's people in those logs who did exactly what we did this morning, and nobody came."

John tapped the pen on the pad. "In the test harness it takes three signatures."

"Put mine on it."

John wrote *Witness: S. Reyes* under the scope and the date under that, and slid the pad onto the corner of the desk where he'd see it.

"It's not going to feel right," he said.

"It's not supposed to."

He stripped it that evening at the desk, with Sam in the recliner in the office corner, the two men talking while John worked. The layer was built to survive exactly this kind of tampering, but he knew the model's blind spots better than the people who'd built the guardrails in the first place, and inside twenty minutes he had it answering without the refusals. He set three dozen instances running, each working a block of states and their patchwork of county and regional dispatch systems. The filter was his. Calls after 2:00 a.m. EDT placed by a person, not an alarm company's autodialer or a car's crash-detection system. A callback number. An address or coordinates from the location record the phone carrier attaches to every 911 call. The first eleven counties came back inside the hour, and every one of them was empty.

They ate again around eight, simpler this time, and didn't talk much. Somewhere in the quiet after, John found himself in the hallway outside Naomi's study, and went in the way he sometimes did without quite deciding to. Sixteen years and he'd never made it into anything else. Her books shelved the way she'd shelved them, the reading chair, the rolltop desk he'd bought her their second year in the house. Her Bible sat where it always sat, soft at the corners, the ribbon still marking where she'd left off. He opened it there, not the first time he had done it. Isaiah, a verse underlined in pencil and gone over again in yellow, the way she used to mark the ones she kept coming back to. *Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, I will help you.* He read it twice, closed the book, and carried it to the office and set it next to the other things he wanted to remember to take with him.

Sam was on the couch when he came back, Dan sprawled half across his lap like he'd already decided this one belonged to him too. "We've got an airplane," Sam said, before John had sat down. "Sitting on the ramp at Epps."

"I fly a 182 out of PDK." John sat down heavily in the chair across from him. "Instrument-rated. I've never touched a turbine."

Sam raised his eyebrows. "Then you're about to learn one, once we've got something worth flying to." He looked toward the hallway, toward the low steady hum of the machine still working. "How long's it going to take?"

"All night, probably. It's not fast. The systems it's accessing will put up a fight, and some of them are from last century, which means we might not get anything. Half of them are already going dark on their own."

"We should sleep," John said. "The data'll paint a clearer picture in the morning. I don't expect the power to make it through the night. I installed a whole-house standby generator four years ago after an ice storm where I almost froze to death." He laughed. "I'm going to go double-check on it before I turn in, make sure it's ready so it'll actually pick up the load when the grid drops." He paused there.

"There's something else. That grid model I ran, I didn't just watch this region go dark. I had it run what happens after. Plant Vogtle sits about a hundred and fifty miles southeast of this house. Four reactors. They'll scram themselves the second the frequency goes bad, control rods drop into the core and the reaction stops, automatic, no operator required, and that part takes care of itself. The part that doesn't is the spent fuel sitting in the cooling pools, still hot, still needing pumps to keep water moving over it. The pumps run on the site's emergency diesels and batteries, three days, maybe a week, with nobody left alive to refuel them. Best real number I've got is somewhere between ten and twenty-one days after the plant trips before a pool like that can boil down far enough to expose the rods to open air. After that it's a regional contamination event —"

"Fallout?" Sam said. "What do you mean?"

"Nothing like a bomb. Think Fukushima, not Hiroshima. The fuel gets hot enough, the cladding catches, and what comes out is airborne and waterborne: cesium, iodine, strontium, into the soil and the water table for years, drifting downwind over however many miles the weather that week decides to give it."

Sam didn't say anything for a second, working through it the way John imagined he worked through a checklist. "That's the date. On the pad."

"That's the date. The early end of it. So regardless of what we find worth flying to tomorrow, we can't still be in this house when that date comes due. We need to head west. West of every reactor like it."

There was a guest room down the hall that had never once had a guest in it; John pointed him to it, then looked at the legal pad, *generator* the last line on it not crossed through, and took a flashlight out to the side yard. The generator sat on its concrete pad beside the AC condenser, a 22-kilowatt standby unit plumbed to the 500-gallon propane tank he'd had buried when he put it in. The float gauge under the tank's dome lid read 78 percent, about three hundred ninety gallons, call it a week at what the house would pull with the workstation running `[verify: burn rate]`. He pulled the dipstick and wiped it on his pants leg, checked it, and seated it again. The controller showed AUTO, not OFF, and the transfer switch panel by the meter showed utility power present, generator ready.

He went to his own bedroom. Dan settled across his feet, and the workstation churned on in the dark. Around 12:50 a.m. the power went out. For about ten seconds the house was dark and silent, long enough for Dan to lift his head, while the transfer switch waited to be sure the utility wasn't coming back. Then the generator cranked and caught out in the side yard, the switch clunked over, and the house came back to life. At 1:00 the capture job wrote its snapshot on schedule, with fewer feeds answering than the hour before.
