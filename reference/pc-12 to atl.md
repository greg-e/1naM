# Operational Flight Plan & ADS-B Telemetry Profile

**Document Control:** Repositioning / Medical Transit Flight  
**Aircraft Type:** Pilatus PC-12 NGX (Single-Engine Turboprop)  
**Origin:** Val-d'Or Airport, Quebec, Canada (CYVO)  
**Destination:** Hartsfield-Jackson Atlanta International Airport (KATL)  
**Special Operations Note:** Non-Standard ADS-B Intent Broadcasting ("Flight ID Hack")  

---

## 1. Flight Plan Overview (CYVO to KATL)

* **Cruise Altitude:** FL280
* **True Airspeed (TAS):** 285 knots
* **Great Circle Distance:** 882 nm
* **Airway Distance:** 932 nm
* **Estimated Time En Route (ETE):** ~3 hours 55 minutes (includes standard Appalachian autumn headwinds)
* **Departure Time:** 06:00 AM EDT
* **Estimated Arrival (Touchdown):** 09:55 AM EDT

### Route String
`CYVO DCT YSB Q947 DERLO DCT ERI J106 BFD J61 PSK OZZZI5 KATL`

### Navigation Milestones

| Waypoint / Fix | Airway / Segment | Course | Distance | Altitude | Cumulative Time | Remarks |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CYVO** | Origin | — | — | 1,069 ft | 0:00 | Takeoff Runway 18 |
| **YSB** (Sudbury) | Direct | 196° | 128 nm | Climbing to FL280 | 0:32 | Montreal Center handoff |
| **DERLO** | Q947 | 191° | 134 nm | FL280 | 1:03 | Cross US/Canada border |
| **ERI** (Erie) | Direct | 185° | 82 nm | FL280 | 1:22 | Lake Erie crossing / Cleveland Center |
| **BFD** (Bradford) | J106 | 129° | 56 nm | FL280 | 1:35 | Appalachian corridor entry |
| **PSK** (Pulaski) | J61 | 197° | 242 nm | FL280 | 2:31 | Overflying southwest Virginia |
| **OZZZI** | OZZZI5 STAR | 215° | 114 nm | Descending | 3:00 | Top of Descent (TOD) / Atlanta Center |
| **PUPYE** | OZZZI5 STAR | 215° | 48 nm | 14,000 ft | 3:18 | Cross at 250 KIAS |
| **WOMAC** | OZZZI5 STAR | 215° | 32 nm | 10,000 ft | 3:30 | Inbound radar vectoring |
| **KATL** | Final Approach | Vectors | 96 nm | 1,026 ft | 3:55 | Touchdown Runway 26R / 27L |

### Performance & Fuel Planning (PC-12 NGX)
* **Ramp Fuel:** 2,704 lbs (Full tanks / 402 US gallons)
* **Taxi / Takeoff Burn:** 50 lbs
* **Trip Burn:** ~1,980 lbs (average ~500–520 lbs/hr with headwind)
* **Reserves (45 min + Alternate):** ~550 lbs
* **Fuel Margin at Gate:** ~124 lbs (Requires strict energy management in Atlanta terminal airspace)

---

## 2. The ADS-B "Flight ID Hack" (Intent Signaling without ATC)

If the PC-12 departs Val-d'Or without establishing VHF radio contact with Air Traffic Control or opening an electronic flight plan, the aircraft will still be tracked globally via its **ADS-B Out (1090 MHz Extended Squitter)** broadcast. However, ground tracking networks (FlightAware, Flightradar24, ADS-B Exchange) will not know the destination. 

To signal intent to ground personnel, company dispatch, or observers without talking to ATC, the pilot can manually overwrite the transponder's Flight ID.

### Execution in the PC-12 NGX (Honeywell Primus Apex)
1. The pilot navigates to the **XPDR / Transponder** menu on the center Multi-Function Display (MFD).
2. The pilot selects the **FLIGHT ID** field (which normally defaults to the aircraft's tail registration, e.g., `C-FABC`).
3. Using the alphanumeric keypad on the pedestal, the pilot types a custom 8-character code: **`TO-KATL`**, **`MED-ATL`**, or **`DL-RELF`**.
4. The pilot presses `ENTER`. The transponder immediately begins broadcasting the new callsign to the global ADS-B network.

### What Appears on Public Trackers
* **Position/Altitude/Speed:** Fully visible and updating once per second.
* **Origin:** CYVO (Inferred by the software tracking the wheels-up location).
* **Destination:** `Unknown` or `N/A` (Because no ATC flight plan is linked).
* **Callsign / Flight Number:** `TO-KATL` 

### Operational Context
While highly non-standard for normal airline or corporate operations, this modification is a viable, real-world method used during uncoordinated ferry flights, flight testing, or emergency operations where radio communications are compromised but transponder broadcasts are functional. It effectively turns the aircraft's radar tag into a direct messaging system.