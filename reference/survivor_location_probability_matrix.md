# Survivor Location Probability Matrix

Author's working model for why the Day 0 nationwide 911 search (Section 5) returns **three leads** (Section 6). The characters never see this math and never know the true survivor count. Numbers are tuning knobs, not findings; any change has to land on a sparse yield (writing rule: Scarcity).

Survival is not explained here or anywhere on the page. See `cause_and_effect_2026-10-10.md` §4 for the hidden-canon reason.

## 1. Baseline

| Pool | Population | Survivors |
| --- | --- | --- |
| Continental US | ~335 M | **~350** (canon; no concentration anywhere) |
| Georgia | ~11 M | ~11 |
| Global | ~8 B | ~8,000 at the US rate; higher in reality, since canon puts survivor density above the US rate in Canada, South America, Europe, and Asia `[decide ratios]` |

## 2. Why John searches 911 and nothing else

Section 5's reasoning, with the alternatives a reader will ask about:

| Source | Why it isn't the search |
| --- | --- |
| Cameras, AIS, ADS-B, beacons | Passive. Shows dead machinery still running; a living person leaves no mark a dead one doesn't. |
| **Social media** | Worth one line on the page, because readers will ask. With almost no human posting left, a new post *is* clean signal. But platforms dropped precise geotags years ago, so a post proves someone is alive, not where. A handful of posts from nowhere confirms survivors exist (some abroad) and can't be acted on. `[decide: add John's check to Section 5]` |
| Amateur radio / WebSDR | Internet-connected receivers die with local power and internet. HF voice gives no position without a multi-receiver fix (KiwiSDR TDoA `[verify]`). Ham is the ISS channel's job, and Marchetti is found through the ISS, not by a scan. |
| ISP traffic monitoring | Would be a second unauthorized intrusion, and a surveillance one, breaking "the safety layer comes off exactly once." John's own Day 0 downloads would be the biggest anomaly in it. Not used. |
| **911 call logs** | The one action that leaves a durable record **with a location attached**: the carrier's location record rides along with every 911 call. The AI triage agent answered and logged every call. |

## 3. The 911 yield (US)

Each factor cuts the pool. The interception factors are the honest levers.

| Step | Factor | Running count | Reasoning |
| --- | --- | --- | --- |
| US survivors | | ~350 | Canon |
| Call 911 on Day 0 | ~0.5 | ~175 | Most who find their dead reach for a phone. Kids, the very old, the injured, people in dead zones, and people who wake late or alone and never find anyone don't. The agent answers, so nobody gives up on a busy signal. |
| Their PSAP is reached and its logs read before it goes dark | ~0.15 | ~25 | ~5,000+ PSAPs `[verify count]`, each with its own security and a patchwork of CAD vendors and on-prem servers. 36 model instances work them through the night while the Eastern Interconnection drops at ~00:50 and county IT and network links fall behind it. Many counties come back unreadable or empty. |
| Record usable (human caller, callback number, location, after 02:00) | ~0.5 | ~12 | Filters out alarm-company and car crash-detection autodialers; drops calls with no fix or a cell-sector-only location. |
| Actionable by morning | | **3** | Callback numbers dead by morning (Huntsville's tower is already down). Repeat calls rank higher (Huntsville 16, Phoenix 4). Single calls with precise coordinates and injury content rank high (Elwha). The rest are stale, unlocatable, or duplicates. Characters see "three leads"; whether a few weaker hits were set aside is `[decide]`. |

**Output: three leads, each an address or coordinates, a dead callback number, and a transcript fragment.** Matches Section 6.

## 4. What the discarded calls are good for

The autodialer calls the filter throws out (car crash detection, smartwatch fall detection) spike together at 02:00–02:02 EDT nationwide. That's the event's synchronized timestamp, sitting in data John already has. See `cause_and_effect_2026-10-10.md` §5.
