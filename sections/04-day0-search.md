# 4 — John, Day 0

Sam stood a moment in the front hall, taking in the framed photos on the stair wall.

John went to the kitchen and did the only thing he currently knew how to do with his hands that wasn't dangerous — preparing food was always a way relax, he had some chicken breasts he could grill. He'd caught himself shaking once already that morning, standing over a dead man in a ditch, he could feel his hands now, a trembling and manifestation of something deep within him. Sam found the couch and John got a proper meal together. They ate at the counter sitting on the bar stools, mostly quiet, Dan working a bowl of his own near the door to the garage.

"Okay," John said, when they were finished. "Here is what I am thinking." John detailed all the things he had been considering through the day, the 911 system, all the other transportation systems, cameras, sensors. His thoughts around what was going to happen with power.

Johns office was the last room down the hall. Against the far wall, under its own quiet cooling, sat the workstation the company had issued him when he moved to the public-sector group — a squared-off case no bigger than a two-drawer file cabinet, drawing more power than the rest of the house combined, running locally and off the network a build of the model his own team was still developing. He was cleared to have it. It came with a toolchain built for evals — connectors into aviation telemetry, weather, the government data feeds his clearances let him touch.

"It's an AI model that is authenticate into restricted data."

They spent the afternoon on the actual size of the thing — the two of them at the desk, John driving and narrating, Sam looking on next to him giving suggestions. State DOT camera feeds, one metro at a time: Atlanta, which both of them had now seen firsthand, and then Charlotte, Nashville, St. Louis, Dallas, Denver, Phoenix, the whole spine of California, every one of them the same still photograph scaled up or down — cars stopped at wrong angles across empty lanes, nothing moving, nothing burning. Maritime AIS: hundreds of ships still under way in every ocean, transponders reporting position and course and speed — a shadow fleet steaming nowhere. Distress beacons worldwide, thousands of ELTs. Sam looked at the scatter of them a long moment without saying anything, and John didn't ask what he was thinking.

The sky itself was down to a scatter by then, most of it long shallow arcs over open ocean — flights that had launched off the far side of the world in the last hour before it happened and still had fuel because they'd been built to cross half the planet without stopping.

Last, the grid — his own corner of it, because the grid had a clock running on it and the clock had his house near the middle. He pulled the telemetry and had the model run the collapse forward instead of just watching it, and Sam leaned in to watch it with him. North America wasn't one grid, it turned out, but four — separate synchronized zones tied together by nothing sturdier than a handful of DC links — and each would fail on its own clock, not all together. Individual plants would start tripping within hours as fuel handling and unwatched faults caught up with them one at a time; then, zone by zone, frequency would sag past the threshold that held the lights on at all, and each interconnection would go down hard and fast once it crossed that line — minutes, not days, once it started. Inside a day, maybe less, nearly the whole country would be dark, in patches too small and too random to plan around — an accidental pocket here and there where the math happened to balance, nothing worth counting on finding twice. What actually mattered wasn't where the lights stayed on. It was what happened after they went out at a nuclear site with nobody left to watch it: the reactors would scram themselves safe, same as always, and sit on backup power with a second, slower clock now running underneath the first — one that had nothing to do with the grid at all. His own patch of Georgia sat near two of those reactors, and the model's map came back a bad color, with a date on it. He wrote the date down and didn't look at it again yet.

"That's not abstract to you," Sam said, watching him write the date down on the pad without comment.

"No," John said. "It's not." He didn't say anything else about it.

It was the smaller thing, sideways, that mattered most. John told him about the first 911 call, that first morning — a calm synthetic voice reciting call volume and response times while a dead man sat slumped in the seat ahead of him, no human being anywhere in the loop because every dispatcher in every center in the country was as gone as everyone else. He'd written it off in the moment as a dead end. It wasn't. That voice hadn't just answered him. It had answered *everyone* — every person anywhere in the country who'd been frightened enough that morning to dial three digits, and every one of those calls was still sitting in a log on some server nobody was watching.

"I wasn't the only one who tried," John said. "That's the whole thing. If the agent logged mine, it logged all of them."

Sam sat with that a second, "So pull the logs."

"Not that simple. Every one of those dispatch systems has its own security wrapped around it, county by county, and the model won't touch an unauthorized system on its own — refuses by design, on purpose, because I helped write some of the policy that makes it refuse. I can take that layer off. I know exactly how, better than almost anyone alive, probably. I've just never actually done it for real — not outside a test harness with three other people signed off and watching. It's not nothing."

Sam didn't hesitate. "I flew three hundred people most of the way to Europe with a dead crew and a full cabin and I didn't ask anyone's permission to turn that airplane around either."

"Then it's not just me deciding," John said, and something in that seemed to steady him more than he let on.

He stripped it that evening, at the desk, with Sam sitting in the recliner in the office corner - the two men talked as John worked on the layer built to survive exactly this kind of tampering, but he knew the model's blind spots better than the people who'd built the guardrails in the first place, and inside twenty minutes he had it answering without the refusals, paired with the real thing his company actually shipped, still live, data centers were still getting power. He set it running not as one instance on one thread but three dozen, each reaching into a different state's patchwork of county and regional dispatch systems, filtering for the thing that actually mattered. Looking for calls after 2am EDT that were not automated and could be traced to an address and a legit phone number.

They ate again around eight, simpler this time, and didn't talk much. Somewhere in the quiet after, John found himself in the hallway outside Naomi's study, and went in the way he sometimes did without quite deciding to. Sixteen years and he'd never made it into anything else — her books shelved the way she'd shelved them, the reading chair, the rolltop desk he'd bought her their second year in the house. Her Bible sat where it always sat, soft at the corners, the ribbon still marking where she'd left off. He opened it there. Isaiah, a verse underlined in pencil and gone over again in yellow, the way she used to mark the ones she kept coming back to. *Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, I will help you.* He read it twice, closed the book, and carried it to the office and set it next to the other things he wanted to remember to take with him.

Sam was on the couch when he came back, Dan sprawled half across his lap like he'd already decided this one belonged to him too. "We're going to need an airplane," Sam said, before John had sat down. "We can find the right plane at PDK once we've got something worth flying to." Sam looked toward the hallway, toward the low steady hum of the machine still working. "How long's it going to take?"

"All night, probably. It's not fast. The systems it's reaching accessing will put up a fight and some of them are from last century which means we might not get anything. Half of them are already going dark on their own." John sat down heavily in the chair across from him. "I fly a 182 out of PDK, I am working on my instrument rating." Sam raised his eyebrows.

"We should sleep," John said. "The data'll paint a clearer picture in the morning. I don't expect the power to make it through the night — I installed a backup whole house generator 4 years ago after an ice storm where I almost froze to death" laughing, "I'm going to go double-check on it before I turn in, make sure it's ready so it'll actually pick up the load when the grid drops." He paused there. 

"There's something else, that grid model I ran — I didn't just watch this region go dark. I had it run what happens after. There are two reactors inside eighty miles of this house. Vogtle Units 3 and 4, the newer ones. They'll scram themselves the second the frequency goes bad, automatic, no operator required — that part takes care of itself. The part that doesn't is the spent fuel sitting in the cooling pool afterward, still hot, still needing power to keep water moving over it, running on backup diesel with nobody left alive to refuel them. Best real number I've got is somewhere between ten and twenty-one days before a pool like that can boil down far enough to expose the rods to open air. After that it's not a power outage anymore. It's a regional contamination event —"

"Fallout?" Sam said. "What do you mean?"

"Nothing like a bomb. Think Fukushima, not Hiroshima. The fuel gets hot enough, the cladding catches, and what comes out is airborne and waterborne — cesium, iodine, strontium, into the soil and the water table for years, drifting downwind over however many miles the weather that week decides to give it."

Sam didn't say anything for a second, working through it the way John imagined he worked through a checklist — item by item, no wasted motion. "That's the date. On the pad."

"That's the date." John tapped it once, like confirming a heading. "So regardless of what we find worth flying to tomorrow — we can't still be in this house when that date comes due. We need to be west of here. West of every reactor like it. Well before it matters, not the week it starts to."

There was a guest room down the hall that had never once had a guest in it; John pointed him to it and went to his own bedroom. Dan settled across his feet, the workstation churned on in the dark, and outside the window a country that had been running for two hundred and fifty years sat in silence. Around 12:50am the power went out, not missing a beat the generator kicked on and the house came back to life.
