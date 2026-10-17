// Random survivor draw for 1naM (see research-compendium.md §2.2).
// Usage: node reference/survivor-draw.js [seed]. Seeded PRNG (mulberry32); the seed is printed for reproducibility.
const crypto = require("crypto");
const seed = process.argv[2] ? Number(process.argv[2]) : crypto.randomBytes(4).readUInt32BE(0);
let s = seed >>> 0;
const rand = () => { s = (s + 0x6D2B79F5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
console.log(`seed ${seed}\n`);

const pick = (table) => { const e = Object.entries(table); const tot = e.reduce((a, [, w]) => a + w, 0);
  let r = rand() * tot; for (const [k, w] of e) { if ((r -= w) < 0) return k; } return e[e.length - 1][0]; };
const choice = (arr) => arr[Math.floor(rand() * arr.length)];

const EUROPE = { "Switzerland": 8.9, "Lombardy, IT": 10.0, "Piedmont, IT": 4.25, "Liguria, IT": 1.5,
  "Veneto, IT": 4.85, "Emilia-Romagna, IT": 4.45, "Trentino-Alto Adige, IT": 1.08,
  "Friuli-Venezia Giulia, IT": 1.19, "Aosta Valley, IT": 0.12, "Tuscany, IT": 3.66,
  "Vorarlberg, AT": 0.40, "Tyrol, AT": 0.77, "Salzburg, AT": 0.56, "Liechtenstein": 0.04,
  "Baden-Wuerttemberg, DE": 11.2, "Bavaria, DE": 13.4, "Auvergne-Rhone-Alpes, FR": 8.1,
  "Alsace, FR": 1.9, "Franche-Comte, FR": 1.2, "Provence-Alpes-Cote d'Azur, FR": 5.1 };
const WEST = { "California": 39.4, "Washington": 7.96, "Oregon": 4.27, "Nevada": 3.27,
  "Arizona": 7.58, "Utah": 3.50, "Idaho": 2.00 };
const BR = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85];
const AGE_US = [5.7,6.0,6.3,6.5,6.5,6.7,7.0,6.8,6.4,6.0,6.1,6.3,6.4,5.6,4.6,3.3,2.0,1.9];
const AGE_EU = [4.4,4.8,5.2,5.2,5.3,5.6,6.1,6.5,6.9,7.1,7.6,7.7,6.9,6.0,5.4,4.6,3.0,3.1];
const OCC = {
  "office/admin": [12.5, ["receptionist", "bookkeeping clerk", "customer service rep", "office manager", "postal clerk"]],
  "sales": [9.3, ["retail salesperson", "cashier", "sales rep, wholesale", "real estate agent"]],
  "food service": [8.9, ["line cook", "server", "fast-food worker", "barista", "dishwasher"]],
  "transport/moving": [9.3, ["truck driver", "warehouse laborer", "delivery driver", "bus driver", "forklift operator"]],
  "healthcare practitioner": [6.2, ["registered nurse", "pharmacist", "physical therapist", "dental hygienist", "paramedic"]],
  "healthcare support": [4.9, ["home health aide", "nursing assistant", "medical assistant"]],
  "management": [6.9, ["general manager", "construction manager", "restaurant manager", "IT manager"]],
  "business/finance": [6.6, ["accountant", "project manager", "HR specialist", "loan officer"]],
  "education": [5.9, ["elementary teacher", "high-school teacher", "teaching assistant", "preschool teacher"]],
  "production": [5.8, ["machinist", "assembler", "welder", "food-processing worker", "baker"]],
  "construction": [4.2, ["carpenter", "electrician", "construction laborer", "plumber", "roofer"]],
  "repair/maintenance": [3.9, ["auto mechanic", "HVAC tech", "building maintenance worker"]],
  "computer/math": [3.4, ["software developer", "IT support tech", "data analyst"]],
  "building/grounds": [3.0, ["janitor", "landscaper", "housekeeper"]],
  "personal care": [2.0, ["hairdresser", "childcare worker", "fitness trainer"]],
  "protective service": [2.4, ["security guard", "police officer", "firefighter"]],
  "community/social": [1.6, ["social worker", "counselor", "clergy"]],
  "architecture/engineering": [1.8, ["civil engineer", "mechanical engineer", "drafter"]],
  "arts/media": [1.3, ["graphic designer", "photographer", "musician"]],
  "science": [0.9, ["lab technician", "environmental scientist", "chemist"]],
  "legal": [0.8, ["lawyer", "paralegal"]],
  "farming/forestry": [1.0, ["farmworker", "rancher", "logger", "vineyard worker"]],
};
const job = () => choice(OCC[pick(Object.fromEntries(Object.entries(OCC).map(([k, v]) => [k, v[0]])))][1]);

function person(regions, ages, localTime, whereTable) {
  const region = pick(regions);
  let age;
  for (;;) { const b = Number(pick(Object.fromEntries(ages.map((w, i) => [i, w]))));
    age = BR[b] + Math.floor(rand() * (b < BR.length - 1 ? 5 : 12)); if (age >= 4) break; }
  const pf = age < 65 ? 0.5 : age < 80 ? 0.54 : 0.62;
  const sex = rand() < pf ? "female" : "male";
  const setting = pick({ "city": 45, "suburb/town": 35, "rural": 20 });
  let occ, hh;
  if (age < 18) { occ = "school student";
    hh = pick({ "two parents + siblings": 55, "single parent": 25, "grandparents/relatives": 8, "two parents, only child": 12 });
  } else if (age >= 65) {
    occ = rand() < 0.15 ? "still working: " + job() : "retired (was " + job() + ")";
    hh = pick({ "lives with spouse": 50, "lives alone": 30, "with adult children": 12, "care home / assisted living": age >= 80 ? 8 : 2 });
  } else { const r = rand();
    if (age < 25 && r < 0.40) occ = "university/trade student";
    else if (r < 0.74) occ = job();
    else occ = pick({ "unemployed": 25, "homemaker / caregiver": 35, "disabled, not working": 25, "between jobs / gig work": 15 });
    hh = pick({ "lives alone": 25, "partner, no kids": 25, "partner + kids": 32, "single parent": 8, "roommates / with parents": 10 });
  }
  return { region, setting, age, sex, occupation: occ, household: hh, at_event: `${localTime}: ${pick(whereTable)}` };
}
const EU_WHERE = { "at home, getting ready": 40, "commuting (car/train/bike/foot)": 30, "already at work or school": 22, "elsewhere (shop, cafe, gym)": 8 };
const US_WHERE = { "at home, asleep": 58, "at home, awake": 30, "at work on a night shift": 7, "out (driving, bar, friend's place)": 5 };
for (const [label, args] of [["EUROPE 1", [EUROPE, AGE_EU, "08:00 CEST Tue", EU_WHERE]],
    ["EUROPE 2", [EUROPE, AGE_EU, "08:00 CEST Tue", EU_WHERE]], ["US WEST", [WEST, AGE_US, "23:00 Mon local", US_WHERE]]]) {
  console.log(label); for (const [k, v] of Object.entries(person(...args))) console.log(`  ${k.padEnd(10)} ${v}`); console.log();
}
