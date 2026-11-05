---
name: stop-slop
description: Remove AI-generated slop from prose, technical specifications, and UI copy. Run this before finalizing drafts. Trigger when asked to "deslop", "clean up the writing", or "remove AI slop".
---
# Stop Slop Editing Directives

When invoked, evaluate the provided text against the following rules and rewrite it to eliminate AI tells, filler, and synthetic structures. `CLAUDE.md` wins wherever the two differ.

## 1. Eliminate Clutter & Concept Nouns
* **The Bracket Test:** Identify every word that serves no functional purpose and ruthlessly remove it. If the sentence works without it, it stays out.
* **Strip Qualifiers:** Remove words like *very, quite, rather, a bit, slightly, truly*. Let the base nouns and verbs carry the weight.
* **Kill Concept Nouns:** Replace abstract, synthetic vocabulary (e.g., "a grand display of human resilience," "an intricate web of interconnected fates") with concrete, physical details and grounded reality. 

## 2. Enforce Operational Realism
* **Focus on Mechanics:** Avoid poeticizing a crisis or technical action. Focus on the actual procedures, logistics, and tactical positioning. 
* **Show, Don't Summarize:** Ground scenes and systems in physical reality or specific architectural constraints rather than emotional or vague summaries. 
* **Trust the Reader:** Present facts, actions, and dialogue directly. Never over-explain or spoon-feed the takeaway to the audience.

## 3. Ban the "AI Slop" Lexicon
* **Forbidden Words:** delve, tapestry, seamlessly, leverage, unlock, navigate the complexities, robust, transformative, elevate, testament, symphony, "in a world where".
* **Break Formulaic Structures:** Never use the "Introduction -> three points -> balanced conclusion -> polite final sentence" format. 
* **Cut the Sweep:** Eliminate the "from X to Y" sweeping generalizations (e.g., "From simple tasks to complex workflows...").

## 4. Vary Rhythm and Syntax
* **Cadence Check:** Do not string together three consecutive sentences of the exact same length. Break up the rhythm with short, punchy statements.
* **Avoid Repetitive Openers:** Stop starting sentences with gerunds (e.g., "Leveraging this technology...") or prepositional phrases.

## 5. Technical Documentation & Specs
* State the architecture, constraint, or logic directly. 
* Eliminate conversational filler ("Here is the solution," "As you can see," "Let me know if you need anything else"). 
* Do not summarize what a script or configuration does before showing it, only to summarize it again afterward.
