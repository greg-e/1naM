The issue is that enclosing the entire document inside a single triple-backtick code block (````markdown ... ````) forces the UI to render it inside a horizontal-scrolling code window rather than displaying it as a continuous, native formatted document.

Here is the complete dossier rendered directly in standard Markdown text without code fences.

---

# Flight Plan & Ground Staging Dossier

**Document Control:** Operational Flight Directive / Emergency Diversion Protocol

**Date of Operation:** September 5th

**Target Event:** Delta Air Lines Flight 84 (DAL84) Real-Time Telemetry Observation & Ground Staging

**Tracking Reference:** `[flightaware.com/live/flight/DAL84/history/20260908/0215Z/KATL/LFPG](https://flightaware.com/live/flight/DAL84/history/20260908/0215Z/KATL/LFPG)`

**Primary Diversion Airfield:** Halifax Stanfield International Airport (CYHZ)

---

## Part 1: Delta Flight 84 Emergency Flight Plan

### Flight Overview

* **Callsign:** Delta 84 (DAL84 / DL84)
* **Airframe:** Airbus A330-900neo
* **Origin:** Hartsfield-Jackson Atlanta International Airport (KATL)
* **Destination (Planned):** Paris Charles de Gaulle Airport (LFPG)
* **Destination (Actual Divert):** Halifax Stanfield International Airport (CYHZ)
* **Alternate Airport:** Greater Moncton Roméo LeBlanc International Airport (CYQP)

**Event Sequence:**

* **10:15 PM EDT / 02:15Z (Sept 4):** Departure KATL (Atlanta)
* **03:30 AM EDT / 04:30 AM ADT (Sept 5):** Emergency Event / Turnback Initiated
* *Dual-Pilot Incapacitation (~90 nm SW of Sydney / Cabot Strait)*


* **03:45 AM – 05:00 AM EDT:** High-Altitude Fuel Jettison over Cabot Strait
* *Jettison ~65,000 lbs Jet-A to reach Maximum Landing Weight (MLW)*


* **05:20 AM EDT / 06:20 AM ADT:** Attempt: Sydney (CYQY) ILS Runway 06
* *Aborted at 200 ft DA (Zero-Zero Fog / Non-Cat III); Divert to Halifax*


* **06:00 AM – 07:10 AM EDT:** En Route Transit & Ground Emergency Mobilization
* *Westbound transit at FL240; CYHZ emergency ground crews assemble*


* **07:25 AM EDT / 08:25 AM ADT:** 1st Attempt: Halifax (CYHZ) ILS Runway 23
* *Missed Approach: Transient low-level fog bank drops visibility below Cat III limits*


* **07:50 AM EDT / 08:50 AM ADT:** 2nd Attempt & TOUCHDOWN: Halifax (CYHZ) Runway 23
* *Fog clears; Full CAT III Autoland touchdown (Atlanta Observation Window)*


* **07:55 AM EDT / 08:55 AM ADT:** Vacate via Taxiway Echo/Delta to Main Passenger Apron

---

### Navigation Route String & Telemetry Milestones

#### Filed Route String

`KATL DCT HNN J149 EYW DCT ALB DCT GDM DCT MONCTON DCT CYQY DCT [DIVERT] VIGOS DCT TUFPY DCT CYHZ`

#### Phase 1: Departure & Transatlantic Transit

* **10:15 PM EDT / 02:15Z (Sept 4):** Wheels up KATL Runway 27L. Climb to initial cruise FL350.
* **02:45 AM EDT:** Crossing US/Canada border near Maine / New Brunswick. Cruise step to FL370.
* **03:30 AM EDT (04:30 AM ADT):** Reaching Cabot Strait vicinity (~90 nm southwest of Sydney, NS). Dual-pilot emergency event occurs; system initiates diversion toward closest airfield, Sydney (CYQY).

#### Phase 2: Weight Reduction & Sydney Approach

* **03:45 AM – 05:00 AM EDT:** **High-Altitude Fuel Jettison:** The A330neo enters a holding pattern over the Gulf of St. Lawrence to jettison approximately $65,000\text{ lbs}$ of fuel down to the Maximum Landing Weight (MLW) limit of $421,000\text{ lbs}$.
* **05:20 AM EDT (06:20 AM ADT):** **Sydney Approach Attempt:** Intercepts ILS Runway 06 at CYQY. Descends to Decision Altitude ($200\text{ ft AGL}$). Zero-zero fog conditions prevent landing on non-Cat III infrastructure. Automated missed approach executed; FMS selects Halifax (CYHZ) for Category III autoland capability.

#### Phase 3: Halifax Terminal Operations & Dual Approach Sequence

* **06:00 AM – 07:10 AM EDT:** Cruise transit westbound across Nova Scotia at FL240 while Halifax Regional Fire & Emergency, EHS Ambulances, and ground handling teams assemble at CYHZ.
* **07:25 AM EDT (08:25 AM ADT):** **1st Approach Attempt at Halifax (CYHZ):** Aircraft intercepts ILS Runway 23. At $200\text{ ft AGL}$, a transient coastal fog patch pushes Runway Visual Range (RVR) briefly below Category III autoland minimums. System executes a published missed approach (climbing to $3,000\text{ ft}$ and re-entering the approach pattern via TUFPY IAF).
* **07:40 AM EDT (08:40 AM ADT):** **2nd Approach Intercept:** RVR clears above Cat III minimums. Crossing **TUFPY IAF** at $4,000\text{ ft MSL}$ ($210\text{ KIAS}$). Mode S telemetry stream feeding Atlanta tracking stations.
* **07:45 AM EDT (08:45 AM ADT):** Intercept ILS Runway 23 localizer ($109.9\text{ MHz}$, heading $233^\circ$) 10 nm out at $3,000\text{ ft MSL}$. Flaps 2, gear down.
* **07:48 AM EDT (08:48 AM ADT):** Glideslope capture at $1,500\text{ ft AGL}$. Fully configured (Flaps FULL, $140\text{ KIAS}$). Autopilot locked in `DUAL LAND` / `AUTOLAND` guidance mode.
* **07:50 AM EDT (08:50 AM ADT):** **TOUCHDOWN:** Main gear touchdown on **CYHZ Runway 23** ($10,500\text{ ft} \times 200\text{ ft}$). Automated flare, ground spoilers, and symmetric reverse thrust deploy.
* **07:55 AM EDT (08:55 AM ADT):** Rollout complete. Vacates Runway 23 via **Taxiway Echo/Delta**, holding on the **Main Passenger Terminal Apron (Ramp 1)** for emergency medical extraction.

---

## Part 2: Flight Crew Rest Schedule (Augmented 3-Pilot Crew)

* **Total Cruise Rest Window:** **3 hours 00 minutes** (23:30 EDT to 03:00 EDT)
* **Crew Complement:** Pilot A (Captain), Pilot B (First Officer 1), Pilot C (First Officer 2)

**Rest Schedule Sequence:**

* **22:15 EDT:** Departure KATL (All Pilots Active)
* **23:30 – 00:15 EDT:** **REST PERIOD 1 (45 min):** Jack in Bunk (Pilots Sam & Theresa at Controls)
* **00:15 – 01:30 EDT:** **REST PERIOD 2 (75 min):** Theresa in Bunk (Pilots Sam & Jack at Controls)
* **01:30 – 03:00 EDT:** **REST PERIOD 3 (90 min):** Sam in Bunk (Pilots Theresa & Jack at Controls)
* **03:00 – 03:30 EDT:** **ALL PILOTS AWAKE:** Theresa and Jack found dead by Sam.

---

## Part 3: Aircraft Staging & PC-12 Ground Location Details at CYHZ

### Primary Airframe Positions at CYHZ

* **Gateway Facilities FBO / PAL Aerospace Apron**
* *Distance:* ~400m to Airside Service Road | ~850m to Main Terminal
* *Role:* Executive/Corporate Ramp & Primary PC-12 Medevac Staging


* **Main Terminal Ramp 1**
* *Role:* Gate 22/24 Heavy Apron & A330neo Emergency Egress



### 1. Pilatus PC-12 Staging Location

* **Primary Facility:** Gateway Facilities FBO / PAL Aerospace Apron (South Airfield Area).
* **Coordinates:** $44^\circ 52'\text{N},\ 063^\circ 30'\text{W}$
* **Parking Position:** Hardstand apron directly outside the Gateway / PAL Aerospace hangar complex.
* **Operational Capabilities:** Direct tarmac gate access for ground medical tenders, dedicated patient transfer zone, full auxiliary turbine power support.

### 2. Delta A330neo Emergency Position

* **Primary Facility:** Main Passenger Terminal Apron (Ramp 1).
* **Parking Position:** Gate 22/24 Deicing/Heavy Apron Area.
* **Operational Capabilities:** Immediate jetbridge or mobile airstair coupling, direct ramp perimeter vehicle access for Halifax Regional Fire & Emergency / EHS Ambulances.

---

### Airside Pedestrian Transit Route (Terminal Ramp to PC-12 Apron)

* **Total Walk Distance:** $\sim 850\text{ meters } (2,780\text{ feet})$
* **Transit Time:** 9 to 11 minutes on foot (under 3 minutes via airside ground tender)
* **Route Description:**
1. Exit south security doors of the main passenger terminal building onto **Ramp 1**.
2. Proceed south along the marked airside service road running parallel to Taxiway Hotel.
3. Pass the central Ground Support Equipment (GSE) building and air cargo complex at the 500-meter mark.
4. Enter the secure gate perimeter of the **Gateway Facilities / PAL Apron**; PC-12 is staged on the open concrete hardstand adjacent to the hangar doors.