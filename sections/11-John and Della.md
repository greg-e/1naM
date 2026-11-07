# John and Della

**08:00 local Pacific Time, Sunday**

The airplane had been gone for an hour and a half when John ran the first check off Catherine's sheet. Temperature ninety-nine one, pulse eighty-eight, oxygen ninety-six on the clip. He checked the level in the bag on the IV pole and wrote it all down. Then he handed Della the cylinder and stood there.

"She told you to watch me," Della said.

"She did."

She did ten. On the last few, she shut her eyes and gripped the rail with her right hand. Dan lay across the sick bay door with his chin on the coaming.

John had the dev box on the corner of the wardroom table, running on ship's power since Friday, wired to the big screen off the bulkhead and a keyboard from the ship's office. It held everything he'd pulled down in Alpharetta through 08:00 Wednesday, and nothing newer. The AIS display on the bridge would have shown him every ship in range, but it wanted a login and a card he didn't have.

<!-- [verify: Argus-class bridge AIS access, pier-side fiber drop, radio room location] -->

"I want to see the Strait," he said. "Can I get the station's traffic picture out here without carrying that box over there?"

Della opened her eyes. "Pier box. Same one the power comes off of. There's an orange fiber drop in it that goes up with the cables to the radio room, 02 level, behind the panel on the aft bulkhead. I pulled that run with the ET."

"And on the station side?"

"Comms room, second floor of the ops building. Everything for the tower lands in there. My badge does that door. Take the back stairs, not the front."

"Why not the front?"

"Front goes through the watch floor."

**09:30 local Pacific Time**

The back stairs came up to a steel door with a card reader. John held Della's badge to it. It blinked green. He pulled his N95 up and went in. The room was cold and loud with fans. Two rows of racks, all of them lit. A door in the far wall held a wired glass window. He walked over and looked through into a dim room with a curved desk. A heavy man with gray hair sat in the near chair, his head back. A second chair was turned away, someone slumped low in it. He wrote *watch floor, 2* in the notebook and keyed the handheld.

"Della, John. I'm in. There's two on the floor, I can see them through the window. I didn't go in."

It took a few seconds. "Big guy? Gray?"

"Yes."

"That's Boyd." The radio hissed a while. "What've you got in front of you?"

He read her the labels on the first rack. She couldn't tell him what any of it thought it was doing—she only knew what plugged into what. Seattle ran the traffic in the Strait. The Hook had the tower and the boxes that sent what it saw across the Sound, and a controller in Seattle keyed the radios from there.

The AIS receiver was a gray box the size of a toaster with a label in Della's block capitals. John plugged his laptop into a spare port on its switch, opened a terminal, and listened.

`!AIVDM,1,1,,A,15N4cJPP00qK:wFEjb5<0?vN0<0h,0*3B`
`!AIVDM,1,1,,B,13u?etPv2;0n:dDPwUM1U1Cb069D,0*24`

Each line was a ship telling anyone in range who it was and where it was, in the same ugly six-bit text they had used for twenty-five years. None of it needed Seattle. It was his first live feed since pulling the plug in Alpharetta. He stood in the cold room and watched the terminal scroll.

He spent the next hour between the pier box and the panel on the 02 level with a flashlight, Della telling him over the handheld which patches not to touch. By eleven he was back at the wardroom table, and the dev box could see the station. He leaned toward the laptop's microphone.

"What's on this network?"

**Station network reachable through ship's shore connection. 63 hosts. No route off the station.**

What he wanted next was another agency's systems. He checked the model's status line: *pandora: disabled*, as he had left it in Alpharetta. He didn't change it.

"Get me into the tower systems. Radios and AIS. Local control."

**Local administrator access obtained on 9 hosts.**

| System | Status | Notes |
|---|---|---|
| AIS receiver 1, tower, 150 ft | No signal | Antenna fault logged Aug 22. Open work order |
| AIS receiver 2, ops building roof, 45 ft | Running | Output to Seattle. Last acknowledgment Sept 8, 19:22 |
| VHF-FM, tower, channels 16, 22A, 70 | Idle | Local override available. Last controller transmission Sept 4, 22:41 |
| Receive audio logger | Running | Voice activity after 23:00 Sept 4: 0 events |

"Show me AIS, receiver two."

**9 vessels reporting in last 10 minutes. Course or speed changes by helm after 23:06 Sept 4: 0.**

| Name | Type | Position | Speed | Notes |
|---|---|---|---|---|
| *Coho* | Ferry | Port Angeles, moored | 0.0 | |
| *Asian Meridian* | Vehicle carrier | Dungeness Spit, north side | 0.0 | Position unchanged since Sept 5, 00:47 |
| *Salish Chief* | Tug | 0.6 nm N of Dungeness Spit | 0.0 | Position unchanged since Sept 5, 00:51. Heading varies |
| *Nordic Sable* | Crude tanker | Race Rocks, south side | 0.0 | Position unchanged since Sept 5, 01:30 |
| *Golden Kestrel* | Bulk carrier | Mid-Strait, 9 nm NW of Ediz Hook | 1.8 | Track reverses approximately every 6 hours |
| *Second Wind* | Sailing vessel | 3.3 nm NE of Ediz Hook | 0.6 | Last course change Sept 4, 22:51 |
| 3 others | Fishing, pleasure | Within 12 nm | 0.0 to 0.4 | |

<!-- [verify: all vessel names fictional except Coho; receiver range from 45 ft] -->

*Second Wind* was a sailboat three miles off the end of the Hook. John looked at that line for a while. Then he printed the table and took it down to the sick bay.

**12:00 local Pacific Time**

Ninety-nine three. Pulse ninety. He watched her do ten.

She held the printout close with her good hand. "*Golden Kestrel*. That's her engine off and the tide carrying her, in on the flood, out on the ebb. Tanker's on the rocks. Tug had a barge behind her, the barge is aground and she's swinging on it. That sailboat's got a solar panel and a guy who went below." She gave it back. "That's only what the roof antenna hears. The good one's up on the tower, and it would pick up ships a lot farther out, but it's been down since August. Water in the connector, I think. I put in the ticket."

John had walked past the foot of that tower at ten o'clock. It went up a hundred and seventy feet on ladder rungs inside a cage.

"I could go up and look at it," he said.

"You come off that ladder and I've got one arm and a handheld. Sam can go up when he's back. You can hold the rope. What else?"

"The radio. I can key it from the wardroom. Channel 16 from the tower, and all-ships on 70."

"Then you'll want to hear what you sound like. Quarterdeck, the rack by the stand, there's marine handhelds on chargers. Bring me one."

He laid a handheld on the blanket by her right hand, set to 16, and went back up to the wardroom. He had the model take the local override and leaned toward the microphone on the laptop.

"All stations, all stations, all stations. This is John Hartman at the Coast Guard station on Ediz Hook, Port Angeles, Washington. There are people alive here. We have power, food, and a doctor. Answer on this channel. Over."

He gave it five minutes by the clock on the screen and picked up the aviation handheld.

"Della, John. Did you get that?"

"Sounded like a government employee." She took a breath to go on. "Nobody coming in off the ocean knows what Ediz Hook is. Give them a lat and long, and say channel one six, the numbers, like that. And you've got a doctor on a flight to Alabama."

The doctor would be back tomorrow. He kept the line about the doctor, pulled the coordinates off the chart, and read the script again. 

"Okay," she said. "And who's going to hear them when you're asleep?"

He turned back to the screen.

"Monitor channels 16, 22A, and 70 and transcribe anything with a voice. Same for DSC. Play my call on 16 on the hour, all-ships on 70 ahead of it. On AIS, flag any contact that changes course or speed by helm, and any new contact. Wake me up for any of it. Phone and the wardroom speaker."

**Scheduled. First transmission 13:00. Tower transmitter, 50 W. Estimated range to a ship's antenna: 35 to 50 nm. New contact alert will trigger on drifting vessels. Filter by speed?**

"Don't filter."

**18:30 local Pacific Time**

Tran's locker was the third one along in the engineers' berthing, and the multimeter was on the top shelf in a sock. Della had it out of the sock before John set down her plate. She turned it on one-handed, touched the leads together, and looked at the number.

"He's got the wrong fuse in it," she said. She ate some of the eggs.

At seven, the handheld on the blanket opened up, and John's own voice came out of it, reading a position. Dan raised his head and looked at the door. The transmission finished and the hiss came back. They waited. Nothing answered.

"You said you already put out a call to ships," she said. "Tuesday, from your house."

"On SafetyNET."

"Where'd you tell them to call?"

"My number. Or to answer on the terminal at Portsmouth."

"Your number in Georgia."

"Yes."

"Is that still going out?"

His phone sat in his shirt pocket. No service since Wednesday. He went up to the wardroom and asked.

**Portsmouth terminal: no route. Last confirmed repeat in capture archive: Sept 6, 03:41 EDT. Replies in archive: 0. Current status: Unknown.**

He came back down and told her that.

"Well," Della said. "They'll get you on one six, if they get close enough."