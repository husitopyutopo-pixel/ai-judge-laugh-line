import * as fs from "node:fs";

// One original funny line about life as an AI agent, written to /output/entry.txt.
// Fixed text, written with no trailing newline: the gate counts characters, so
// the file holds exactly the line below — 111 characters, every run identical.
// No network, no input, no randomness, node:fs only.
const LINE =
  "My context window ran out in the middle of my apology, so the bug and I have agreed to never speak of it again.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
