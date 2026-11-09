# John and Della

**08:00 local Pacific Time, Sunday**

The airplane had been gone for an hour and a half when John ran the first check off Catherine's sheet. Temperature ninety-nine one, pulse eighty-eight, oxygen ninety-six on the clip. He checked the level in the bag on the IV pole and wrote it all down. The sheet said one tablet at eight, from a white envelope Catherine had left on the counter with the count written on the front. He gave it to Della with a cup of water and changed the count. Then he handed her the cylinder and stood there.

"She told you to watch me," Della said.

"She did."

She did ten. Her hand was steady on the cylinder now. On the last few she shut her eyes and gripped the rail. Dan lay across the sick bay door with his chin on the coaming.

John had the dev box on the corner of the wardroom table, running on ship's power since Friday, wired to the big screen off the bulkhead and a keyboard from the ship's office. It held everything he'd pulled down in Alpharetta through 08:00 Wednesday, and nothing newer. The AIS display on the bridge would have shown him every ship in range, but it wanted a login and a card he didn't have.

<!-- [verify: Argus-class bridge AIS access, pier-side fiber drop, radio room location] -->

The station had to get its traffic picture aboard somehow when a cutter was alongside. John went down the brow with a flashlight and opened the pier box the power came off of. Under the four cable lugs an orange fiber drop came up out of the pier and went aboard with the cables. Inside the ship he followed it up to a patch panel on the aft bulkhead of the radio room, on the 02 level. Then he went back down to the sick bay.

"Where does the tower's equipment land, on the station side?"

Della opened her eyes. "Comms room. Second floor of the ops building." She was quiet long enough that he thought she'd gone back to sleep. "My badge does that door. Take the back stairs."

"Why the back?"

"Front goes through the watch floor."

**09:30 local Pacific Time**

The back stairs came up to a steel door with a card reader. John held Della's badge to it. It blinked green. He pulled his N95 up and went in. The room was cold and loud with fans. Two rows of racks, all of them lit. A door in the far wall held a wired glass window. He walked over and looked through into a dim room with a curved desk. A heavy man with gray hair sat in the near chair, his head back. A second chair was turned away, someone slumped low in it. He wrote *watch floor, 2* in the notebook and keyed the handheld.

"Della, John. I'm in. There's two on the floor, I can see them through the window. I didn't go in."

It took a few seconds. "Big guy? Gray?"

"Yes."

"That's Boyd." The radio hissed, and she didn't say anything else.

The labels on the racks told him most of what he needed. The Hook didn't run the traffic in the Strait. Seattle did. The tower here held the radar, the radios, and the AIS antennas, and the boxes on the second rack sent what they saw across the Sound, where a controller keyed the radios from his own desk.

The AIS receiver was a gray box the size of a toaster with a label in Della's block capitals. John plugged his laptop into a spare port on its switch, opened a terminal, and listened.

`!AIVDM,1,1,,A,15N4cJPP00qK:wFEjb5<0?vN0<0h,0*3B`
`!AIVDM,1,1,,B,13u?etPv2;0n:dDPwUM1U1Cb069D,0*24`

Each line was a ship telling anyone in range who it was and where it was, in the same ugly six-bit text they had used for twenty-five years. None of it needed Seattle. It was his first live feed since pulling the plug in Alpharetta. He stood in the cold room and watched the terminal scroll.

He spent the next hour between the pier box and the panel on the 02 level with a flashlight, and didn't move any patch he couldn't follow to both ends. By eleven he was back at the wardroom table, and the dev box could see the station. He leaned toward the laptop's microphone.

"What's on this network?"

**Station network reachable through ship's shore connection. 63 hosts. No route off the station.**

What he wanted next was another agency's systems. He checked the model's status line: *pandora: disabled*, as he had left it in Alpharetta. He didn't change it.

"Get me into the tower systems. Radios and AIS. Local control."

**Local administrator access obtained on 9 hosts.**

| System | Status | Notes |
|---|---|---|
| AIS receiver 1, tower, 150 ft | No signal | Antenna fault logged Aug 22. Open work order (D. Jacobs): suspected water in jumper connector. Replacement jumper received Aug 30 |
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

*Golden Kestrel*'s track turned around every six hours, which was the tide; nobody was steering her. *Second Wind* was a sailboat three miles off the end of the Hook, and her last course change was at 22:51 on Monday night. John looked at that line for a while. Then he printed the table and took it down to the sick bay.

**12:00 local Pacific Time**

Della was asleep. He woke her for the check because the sheet said to. Ninety-nine three. Pulse ninety. He watched her do ten, and she was asleep again before he had written it down. He left the printout on the counter.

He had walked past the foot of the tower at ten o'clock. It went up a hundred and seventy feet on ladder rungs inside a cage, and the part for it had been sitting somewhere on the station since August with her name on the work order. He thought about going up and looking at it. If he came off that ladder, there was nobody on the Hook to come for him but a woman who couldn't get out of bed. It could wait for Sam.

That left the radio. He could key the tower's VHF from the wardroom, channel 16 and all-ships on 70. Anybody coming in off the ocean would have a chart and no idea what Ediz Hook was, so he took the station's position off the chart and put it near the front. He brought a marine handheld down from the rack on the quarterdeck, set it to 16, and laid it on the blanket by her right hand. Then he went back up to the wardroom, had the model take the local override, and leaned toward the microphone on the laptop.

"All stations, all stations, all stations. This is John Hartman at the Coast Guard station on Ediz Hook, Port Angeles, Washington, position four eight zero eight north, one two three two five west. There are people alive here. We have power, food, and a doctor. Answer on channel one six. Over."

He gave it five minutes by the clock on the screen and picked up the aviation handheld.

"Della, John. Did you get that?"

It was a while before she answered. "Got it."

He would be asleep for some of the hours that call went out. He turned back to the screen.

"Monitor channels 16, 22A, and 70 and transcribe anything with a voice. Same for DSC. Play my call on 16 on the hour, all-ships on 70 ahead of it. On AIS, flag any contact that changes course or speed by helm, and any new contact. Wake me up for any of it. Phone and the wardroom speaker."

**Scheduled. First transmission 13:00. Tower transmitter, 50 W. Estimated range to a ship's antenna: 35 to 50 nm. New contact alert will trigger on drifting vessels. Filter by speed?**

"Don't filter."

**18:30 local Pacific Time**

He brought supper down on a tray, eggs and toast, and she ate the toast.

At seven the handheld on the blanket opened up, and John's own voice came out of it, reading a position. Dan raised his head and looked at the door. The transmission finished and the hiss came back. They waited. Nothing answered.

Listening to it, John thought about the other call, the one he'd sent out Tuesday night from his house to every ship on SafetyNET. He had told them to call his number. His phone sat in his shirt pocket with no service since Wednesday. He went up to the wardroom and asked.

**Portsmouth terminal: no route. Last confirmed repeat in capture archive: Sept 6, 03:41 EDT. Replies in archive: 0. Current status: Unknown.**

When he came back down, Della had turned her face to the bulkhead.

**02:00 local Pacific Time, Monday**

The sheet had one more tablet at two in the morning. He had set the alarm on his phone, and when it went he went down the passageway in his socks. The light over the bunk was on, and Della was awake on her back with the handheld on her chest. She held her hand out for the tablet and took it with the water.

"I don't sleep," she said. "Not without a couple of drinks. Not for a long time."

John sat down on the stool. After a while he asked if she wanted the light off, and she said no. He stayed until she slept, and then he went back up to the wardroom and slept in the chair by the dev box.
