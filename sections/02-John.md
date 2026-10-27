# John Hartman

### 12:00

An Airbus 350-900 operated by Delta airlines with departure of Atlanta and destination of Seoul Sourth Korea had landed at Edmonton, Alberta at 04:36am EDT. The other had departed Edmonton at 07:31am, a Pilatus PC-12 with no destination filed and the flight number read **DAL27PDK** and it was squaking **7700**, general emergency. 

"Give me full details of **DAL27PDK** PC-12 departed Edmonton at 07:31am." 

**Arrived Minneapolis-St. Paul 10:45 EDT. Departed Minneapolis-St. Paul 11:30 EDT.** 

He glanced at the time, it was 12:10, that plane had left Minneapolis 40 minutes ago! 

"Have any of the other 351 aircraft diverted from their flight path after 2am EDT?" 

**No.**

"Show the live track of **DAL27PDK**." 

The PC-12 was passing through 8,000 feet in a southeast heading. 

"DAL27PDK", John said outloud. He looked back at the A350-900 that landed in Edmonton, it was Delta flight 27. The pieces fell together, a pilot from DAL27 is now flying this PC-12 and the destination is PDK. John knew PDK, it was Peachtree Dekalb Airport, it is where he spent most weekends maintaining or flying his Cessna 182.

"Nautical miles from Edmonton to PDK?" 

**1,700 miles**. 

"What is the range of the Pilatus PC-12?"

**1,803 nm with medium load.**

So he stopped in Minneapolis-St. Paul for fuel.

"Distance from Minneapolis-St. Paul to PDK and PC-12 flight time?"

**780nm and 2 h 47 min flighttime at 280 kt.**

"That's on the ground between 14:15 and 14:45." John said outloud. 

He pulled out his notebook and noted next to questions 1 and 3:
*1. Where else?* **global**
*2. How did this happen?*
*3. Is there anyone else alive?* **yes**
*4. Why am I alive?*
 
John was not sure how long it would take to get to PDK, on a regular Saturday it took about 35 minutes to get there, today? It may be a challenge. He decided to go right away. 

He grabbed his flight bag and added his laptop and charger to the bag and he grabbed the small power station that would charge the laptop couple of times, just in case. 

He took Georgia Highway 400 south like he had earlier that day, the fire on the east side had spread to the entire retail shopping center, he could feel the heat as he drove by. He stopped slowing down and looking into the cars he passed. It took him 40 minutes to travel to the interchange with Interstate 285, double the normal time. He took the ramp onto Interstate 285 east, there was a greater mixture of trucks and cars on 285. The trucks definently added to the chaos. Jack-knifed, flipped on sides... a couple spots, even with fours lanes, it looked like there was no way to pass. Past the bridge at Chamblee-Dunwoody road there was a mass of black smoke billowing up, from what looked like both sides of the interstate. He exited onto Chamblee-Dunwoody and went south an alternate route to PDK he had used many times when 285 was backed up. As he traveled he started gathering his thoughts and running scenarios for this new world he woke up to this morning. He talked to the Gemini chat to start making a checklist of things think through.

"I talk, you write it down. Group it however makes sense. Don't answer anything yet."

**Ready.**

He talked for most of the way down Chamblee-Dunwoody, slowing for a box truck across the center line, a minivan up on the curb at the Kroger. He talked about the grid, and the man in the car this morning with the pink fingers, and the Morrisons' dog. He talked about Mark's voicemail. He started on the internet and then went back to the grid because it was the same problem. Gemini didn't interrupt. At the light at Peachtree Industrial, cycling green for nobody, he said, "Read it back."

**Checklist**

**Power**
- The grid is running with nobody at the controls. How long before plants start tripping offline?
- Georgia Power's control center: is anyone there?
- Plant Vogtle and Plant Hatch. The reactors shut themselves down, but cooling still needs power. How long do the backup diesels run? Who refuels them? Spent fuel pools.
- Home generator: propane level, transfer switch on AUTO.
- Charge everything while the outlets work: laptop, phone, power station.

**Data**
- How long does the internet stay up? Data centers on backup generators: hours or days?
- The flight tracking, AIS, and grid feeds are live only. Snapshot them while they answer.
- Anything that lives on a server dies with it. Download maps, FAA charts, manuals.
- Photos. His and Naomi's are all in the cloud.
- Books. Real how-to from sources he can trust, not whatever a model averaged together: medicine, water treatment, engines, generators, radios, food. Download what he can. Paper copies for when the screens are dead.

**Communications**
- Satellite internet. The satellites keep flying, but the ground stations need power and a backbone to connect to. How long?
- Satellite phones. Same question. Where are the gateways, and what are they running on?
- Radios. The aviation handheld in the flight bag. What else doesn't need a tower?

**Water and food**
- Water pressure depends on pumps, and pumps depend on power. Fill containers.
- Refrigerator and freezer: what goes first.
- Nobody is restocking anything.
- Food plan. Eat the perishables first, then cans and dry goods. How many weeks in the pantry? Grocery stores before the coolers warm up.

**Fuel**
- Gas pumps work as long as the power holds. After that, how do you get it out of the underground tank?
- Gas cans. Fill them today.

**Hazards**
- Fires with nobody coming: the shopping center on 400, the smoke on 285.
- Stoves and gas lines left on.
- Dogs shut in houses with no one to let them out. The Morrisons'.
- The dead. Disease risk? How long before it matters? Gloves.

**Cause**
- No departures anywhere after 1:59. Did it happen at the same minute everywhere? Find other timestamps.
- People only. Dan is fine. The dogs are fine.
- The pink fingers on the man in the car. Does that explain a cause?
- Is it still here? Air, water. He has been breathing and drinking it all morning.
- Contagious? He touched Harry, the clerk, the firemen.

**People**
- The DAL27 pilot. Who are they? Could they be dangerous?
- Mark. Keep calling.
- How does a survivor show up? Only by doing something a system records: a call, a post, a departure.
- 911 calls. The AI agent answered and logged every one. Who has access to those logs? Not him. That means getting into county dispatch systems without authorization.
- Social media posts since 2:00.
- DOT cameras. Anything moving on a road after 2:00 is someone driving.
- Flock cameras. License plate readers on every other corner. A plate read after 2:00 is a car with a driver, and a time and a place.
- What else logs people without his access? Card transactions: the QuickTrip pump took his card this morning, so somebody's server recorded it. Cell carriers: phones moving between towers. Smart meters, doorbell cameras.

"Develop plans to systematically research and pull any data from my checklist.  Spin up multiple agents to start deep dives for each major subject."

The phone was only the front end. The agents would run on the dev box on his desk at home.

**8 agents. Writing to dev box internal storage. Copy to external drive on completion.**

| Agent | Subject | Sources | Output | Status |
|---|---|---|---|---|
| 1 | Capture | All live feeds you're authorized for: ADS-B, AIS, DOT cameras, EIA grid, distress beacons | Snapshot every feed hourly, backfilled to 02:00 where history exists | Running. First pass ~20 min |
| 2 | Power | EIA plant and balancing-authority data, NRC event reports, DHS infrastructure datasets | Plant-by-plant status; time to failure by region; Vogtle and Hatch backup power | Running |
| 3 | Data | Internet routing tables, cloud provider status pages | Estimate how long networks and data centers stay up | Running |
| 4 | Library | FAA charts and supplements, OpenStreetMap North America, Army field manuals, EPA and CDC water and sanitation guides, *Where There Is No Doctor*, equipment manuals | Offline copies. Print list for paper | Running. ~40 GB |
| 5 | Communications | Satellite operator status pages, gateway locations, FCC license records | Which satellite internet and phone systems are still up, and what their ground stations run on | Running |
| 6 | Food and water | Metro Atlanta water utility data, USDA food storage guidance | Days of water pressure; what spoils first; food plan for one adult and a dog | Running |
| 7 | Cause | Beacon logs, ADS-B, AIS, grid frequency records | Timeline of every recorded stop after 01:55 EDT, worldwide | Running |
| 8 | People | Public social media, DOT cameras, ADS-B and AIS departures after 02:00 | Any sign of a person acting after 02:00, with time and location | Running |

**6 tasks declined: county 911 dispatch records, Flock plate reads, card transaction records, cell carrier tower records, smart meter data, doorbell cameras. Not authorized.**

John had helped build that refusal. 

"Understood," he said. "Run what you can."

**Running.**
 


