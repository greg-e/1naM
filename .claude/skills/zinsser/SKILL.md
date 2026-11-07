---
name: zinsser
description: Draft, revise, or audit writing in the 1 in a Million repo using William Zinsser's principles from On Writing Well (simplicity, cutting clutter, strong verbs, unity, leads and endings, rewriting) plus AI-slop removal, adapted for this novel's close-third POV, operational realism, and the author's plain voice. Covers the novel's prose in sections/ and the repo's non-fiction (CLAUDE.md, reference docs, notes). Use when writing a new scene, tightening or line-editing a passage, or when the author asks for a "Zinsser pass," a clutter check, to "deslop," "clean up the writing," "remove AI slop," or whether a passage reads clean.
---

# Zinsser pass for *1 in a Million*

William Zinsser wrote *On Writing Well* for nonfiction, but its core is the same as this book's: say the true thing in the fewest plain words, and trust the reader. This skill turns his principles into working passes for the novel. It sits **under** CLAUDE.md: canon, POV rules, the operational-realism rules, and the teaser-line ban all win if anything here seems to pull the other way. Most of the time they agree.

This is the repo's only line-editing skill. It covers the novel's prose and, through the non-fiction section at the end, CLAUDE.md, the `reference/` docs, and notes.

## Voice

**Be yourself, and here "yourself" is the author.** Zinsser's chapter on style says the writer's voice is the product; don't put on airs. The author's voice is:

- **Plain words.** The common word over the impressive one.
- **Conversational.** It reads like someone telling you what happened, with contractions.
- **Comma rhythm.** Sentences often run on through commas rather than stopping; that's the rhythm, not an error to convert to periods.
- **Dry humor, small and occasional,** usually in John's or Sam's observation of a dog, a habit, or an absurd machine still working.
- **Almost no crafted metaphor.** Things are what they are.
- **Not clipped.** A run of short, verbless sentences is its own affectation, and it's the one CLAUDE.md bans as teaser fragments.

A Zinsser pass makes that voice clearer. It never replaces it with a polished literary register. When in doubt, cut a word rather than add a phrase.

## Three standing rules

These hold in every mode and every pass.

1. **No mannered flourishes.** No crafted closers, no lyrical turns, no sentence built to be admired ("a silence he did not yet know the size of"). If a line draws attention to its writing, rewrite it plain.
2. **POV observes only.** Narration reports what the POV character perceives and knows: what they see, hear, read off a screen or instrument, or work out. Never what the reader knows from another thread, never another character's unspoken thoughts, never an omniscient summary of the larger plot.
3. **Model voice is facts only.** When John's model or agents speak (tables, status lines, query results), they give terse data: counts, times, positions, "Unknown." No inference, no reassurance, no explanation of what the data means. Interpretation belongs to the human reading it.

## Modes

Pick the mode from the request. **Session is the default**; use Revise or Audit only when the author asks for them by name ("just fix it," "audit only," "no edits").

- **Session** (default): work through the passage with the author as a teammate, fixing as you go.
  1. Run the three reads privately and rank the findings, most important first (canon and POV, then structure, then lines).
  2. Bring up **one finding at a time** with the AskUserQuestion tool. Each question quotes the line with its `file:line`, names the problem in one sentence, and offers two or three fixes, the recommended one first and marked "(Recommended)", plus "Leave it." The question has to make sense by itself, because the author may see only the question dialog.
  3. **Apply the author's pick right away** with Edit, then bring up the next finding. If they choose "Other" and write their own wording, use it as written.
  4. **Ask a craft question only when the answer changes the fix**: what a character knows at this point, what a beat is for, whether a rough line is rough on purpose. Ask it as multiple choice with the likely readings as options. Don't ask what the page already answers or what CLAUDE.md settles.
  5. **Stop after the ten findings that matter most.** Give one line of what's left by category ("Also: 6 qualifiers, 2 *there was*") and ask whether to keep going. The author can stop at any point.
  6. **Wrap up** in two or three lines: what changed and what the author chose to leave. Then ask whether to commit. If the author's choices showed a voice preference the skill doesn't state yet (e.g. keeping an adverb that is a real rate), offer to add it to this skill.
  Batch nothing and fix nothing silently, typos included; a typo can share a question with the finding next to it.
- **Draft**: writing a new scene. Before writing, settle the POV logic and the layout privately: whose scene it is, what that character can see, hear, read off an instrument, or work out, and where everyone and everything sits in the space. If a choice that shapes the scene isn't settled by CLAUDE.md or the request, ask the author first, one multiple-choice question at a time with a recommendation. Apply the principles as you write, run the three reads once over the result, then hand over the finished prose without notes on your process.
- **Revise** (only when asked by name, e.g. "just fix it"): edit the file in place without asking, keep changes small and local, preserve sentence order and dialogue unless asked. After editing, list the kinds of change you made in two or three lines, not a line-by-line essay; git and the editor's diff show the rest.
- **Audit** (only when asked by name, or for a check with no edits): don't touch the file. Report the ten findings that matter most, each as `file:line`, the quoted phrase, the principle, and a suggested fix, most important first. Then one line of totals for everything else by category (e.g. "Also: 23 qualifiers, 4 adverbial tags, 2 *there was*"). Give the full list only if asked.

For the author's own passages, default to the lightest touch that fixes the problem. Rewriting a paragraph the author wrote needs a reason you can name.

## The three reads

Do them in this order, as three separate reads. The scene read comes first because a sentence-level fix is wasted on a beat that's going to change.

### Read 1: the scene

Read the whole scene once for structure, not sentences.

**Clarity.** Zinsser: clear thinking becomes clear writing. For each beat, answer: who is doing what, where, and what the POV character sees or knows. If you can't answer, the problem is the thinking, not the sentence. Fix the beat (or flag it), then go on. Common failures:
- A pronoun with two possible owners ("he" with John and Sam both in the frame).
- A time jump the reader can't place. The `### 07:15` headers do much of this work; prose shouldn't repeat them ("He checked his watch: 7:25" under a `### 7:25` header says it twice).
- An object that appears without being set up (the reader meets the FBO's crew car before anyone said there was one).

**Unity.** Zinsser asks for one pronoun, one tense, one mood, one attitude, held for the whole piece. For this book:
- **One POV per scene file**, close third (standing rule 2). A head-hop is a unity break.
- **One tense**: past. Watch drafts that slide into present during tension.
- **One register per POV**: John thinks in systems and data flows and is dry; Sam in procedure and command; Johan in seamanship and spare German-English; Kendra in consumables and checklists; Marchetti in measured clinical terms. A line in John's scene that sounds like Sam's is a unity break.
- **One attitude**: plain and grave, with small dry humor. Don't swing into lyricism for a grief beat or into thriller voice for an action beat.

**Leads and endings.**
- **The lead** does the most work in the fewest words: a concrete action or observation that puts the reader in place and time. Don't open with weather-as-mood, a summary of what's about to happen, or a backstory block.
- **The ending**: stop when you're done. End on the last concrete beat that matters. No reflective closing line, no mannered closer, no sentence that tells the reader what the scene meant. If the last paragraph explains the one before it, cut the last paragraph.

**Place and people.**
- **Place**: pick the few details only this place has, the ones the POV character would actually notice. One chosen detail beats a catalog. No travel-brochure words (*nestled, sprawling, quaint, bustling*).
- **Technical material** (Zinsser's chapter on science writing): lead the reader one step at a time from what they know to what they don't, per CLAUDE.md's jargon rule. Never stack two unexplained plot-bearing terms in one sentence. Exact nomenclature, in short active sentences.
- **People**: let them talk. Keep the lines that sound like that person; cut the ones that only carry information the reader already has. Characters under stress talk short, in the shorthand of their trade; no conversation is an expository monologue in disguise.

### Read 2: the lines

Now go sentence by sentence.

**Clutter.** "Clutter is the disease of American writing." Strip every word that does no work:
- **Little qualifiers**: *a bit, a little, sort of, kind of, rather, quite, very, pretty, somewhat, really, just, actually, almost, seemed to, began to, started to, managed to.* Keep one only when it's a true measurement ("almost cold" is a real reading of skin; "very quiet" isn't).
- **Doubled words**: two adjectives or two verbs saying the same thing. Keep the more exact one, unless the pair is the author's rhythm and both carry weight.
- **Inflated phrases**: *the resulting X, at this point in time, in order to, the fact that, due to the fact, for the purpose of, was able to, made his way to, proceeded to, in the direction of.* Replace with the plain word.
- **Redundant pairs**: *nod his head, shrug his shoulders, stood up to his feet, sat down in the seat, continued on.*
- **AI lexicon**: *tapestry, delve, testament, robust, synergy, palpable, nuanced, symphony, seamlessly, leverage, unlock, transformative, elevate,* and their cousins. Replace with the plain word or the concrete thing. Also cut the "from X to Y" sweep ("from the cockpit to the cabin, everyone...").
- **Told-after-shown**: a line that names the feeling the previous action already showed. "He backed away from the car and called 911 with Dan pressed against his leg" needs no "He was shaken."
- **Pre-stated payoffs**: CLAUDE.md's teaser rule. A line that announces what the next sentences show ("His doubts caught up with him" before three sentences of doubts) can usually go.
- **Repetitive openers**: a run of sentences that all start with a gerund ("Checking the gauge, he...") or a prepositional phrase ("In the cockpit... At the panel... On the ramp..."). Vary them, usually by starting with the subject.
- **Formulaic shape**: setup, three neat points, a balanced conclusion, a polite closing line. Real scenes and real paragraphs don't fall into threes on schedule; break the pattern.

**Verbs and modifiers.** Zinsser: verbs are the most important tool; use active verbs, and use the exact one.
- Prefer the active voice. Passive is right when the actor is unknown or beside the point, wrong when it hides who did something the POV character watched.
- Replace *was/were + -ing* and *there was/there were* when a direct verb is available ("there was only one other car in the lot" → "one other car sat in the lot"). Don't force it; a deliberate setup line can keep its *there was*.
- **Adverbs**: most are clutter. CLAUDE.md's audit words (*quickly, suddenly, dangerously, massively, intensely*) get replaced with a measurement, a reading, or a procedural step. The exception is an adverb doing comic or character work in the POV's voice; keep it.
- **Adjectives**: only when they add a fact. "A flushed pink" is a clinical clue; keep. "Overwhelming silence" is a feeling dressed as a fact; replace it with what the character hears, or doesn't.
- **Concept nouns**: "the quietness made him curious" → what was quiet, and what did he do about it. Name the thing.
- **Stock phrases**: *a chill ran up his spine, his heart sank, time stood still, an eerie silence, a deafening silence, the calm before the storm.* Replace with the specific observation, or cut.
- **"The way" similes**: a trailing clause that explains an action by comparing it to a habit or a type (*, the way it did when he was trying not to cry; the way an FM receiver went quiet when...; the way he called everything; the way it was done*). The author reads these as slop. Cut the clause; the action stands by itself.
- **Mystery by negation**: describing a thing the POV character already knows by what it isn't, to make it sound uncanny (*a line of text nobody aboard had sent; a voice that wasn't his; a sound that shouldn't have been there*). It's a teaser in disguise, and usually the real thing follows a colon later. Name it plainly ("a packet message"). A real absence the character observes ("Nothing had answered on any of them," "a carrier somewhere that nobody had switched off") is a fact, not this pattern; keep it.
- **Stock emotional summaries**: a line that reports how a feeling has changed instead of showing what the character does (*it had stopped feeling like anything; something in her went still; it hit him all at once*). Cut it, or replace it with the concrete fact or action.

**Usage and mechanics.**
- Fix typos and agreement. Ask about them in Session mode, correct them silently in Revise mode, list them in Audit mode.
- **Contractions** in narration and dialogue, as the author uses them, except where a character is formal by habit (Johan's careful English, Marchetti).
- **Punctuation**: commas carry the author's rhythm; don't convert them all to periods. Semicolons sparingly. Dashes for interruptions in dialogue. Exclamation points almost never outside dialogue.
- **Mood changers**: *But*, *Still*, *Then*, *Instead* at the start of a sentence when the turn needs it; Zinsser prefers *But* to *However*.
- **That / which**: *that* for restrictive clauses, *which* (with a comma) for the rest.
- **Dialogue tags**: no adverbial tags (*said angrily, replied softly*). Use an action beat when it anchors the speaker in the place; otherwise "said," which is invisible. Don't hang a gesture on every line. The reader always knows who is speaking by the time the words land.

**CLAUDE.md terminology.** Check the passage against CLAUDE.md's Writing rules, especially the radio phraseology, airline terminology, plain-text units, and survivor-symptom rules. Read them there; don't work from memory, since they change.

### Read 3: aloud

Zinsser: rewriting is the essence of writing. Read the passage at speaking pace, in your head or aloud. Mark every place you stumble, lose the subject, or run out of breath, and fix only those. Then stop. A passage tightened three times starts losing the author's voice; the goal is the author's sentences, cleaner, not new sentences.

## Quick audit search

For a first sweep in Session or Audit mode, grep the section for the usual offenders, then read each hit in context; a hit is a question, not a verdict.

```
\b(very|quite|rather|really|just|a bit|a little|sort of|kind of|somewhat|pretty|actually|seemed to|began to|started to|managed to|quickly|suddenly|slowly|dangerous(ly)?|massive(ly)?|intense(ly)?|overwhelming|eerie|resulting|in order to|the fact that|made his way|proceeded to|tapestry|delve|testament|robust|synergy|palpable|nuanced|symphony|seamlessly|leverage|transformative)\b
```

Also search for:
- "there was" and "there were" for weak constructions.
- `, the way` for trailing similes, and `stopped feeling|feeling like anything` for stock emotional summaries.
- `(nobody|no one|nothing)( \w+){0,3} had \w+`, `that (wasn't|shouldn't)`, and `(something|someone) (that )?(wasn't|shouldn't)` for mystery by negation. Most hits are real absences; flag only the ones where the character already knows what the thing is.
- "was \w+ing" and "were \w+ing". This search is low-yield: most hits are correct past progressive for background action ("Luca was taking the names down"). Flag only the ones carrying the main action of a beat.
- "!" outside dialogue, and adverbial tags (`(said|asked|replied|whispered|called) \w+ly`).
- Runs of two or more short verbless sentences in a row ("And then nothing. Not static. Not the hiss."). The grep can't find these reliably; watch for them on the line read.

## Non-fiction: CLAUDE.md, reference docs, notes

The same clutter, verb, and AI-lexicon rules from Read 2 apply. Skip Voice, the standing rules, and Read 1, which are for scenes. Then:

- **State it directly.** Give the fact, constraint, or decision first; reasons after, if needed.
- **No conversational filler**: *Here is, As you can see, Note that, It's worth mentioning, Let me know if.*
- **Don't summarize twice.** No intro that says what a section will cover followed by a recap of what it covered.
- **Concrete over abstract**: name the system, number, file, or date, not "various factors" or "key considerations."
- **Tables and lists only where the content is truly parallel**; otherwise plain sentences.
- For CLAUDE.md, keep its own conventions (canon entries as plot facts, `[verify]`/`[decide]` markers, current-state wording rather than change history).

## What this skill doesn't do

- It doesn't change canon, events, or their order. If tightening reveals a canon problem, flag it to the author.
- It doesn't add detail for color. New specifics must be real and verified per CLAUDE.md, or marked `[verify]`.
- It doesn't impose a word count. Zinsser cuts to make room for what matters; a scene can get longer when a beat the reader needs was missing.
