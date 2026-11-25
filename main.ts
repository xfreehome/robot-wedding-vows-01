// One-Line Robot Wedding Vows — make.fun bounty
// u-kreutzx-one-line-robot-wedding-vows-a154ba4b
//
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// The vow riffs on the classic "till death do us part" line: the robot
// promises love through low battery and airplane mode, and the twist lands
// in the last words — death, or the final shutdown.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I promise to love you in sickness and in health, in low battery and in airplane mode, until death — or our final shutdown — do us part.";

mkdirSync("/output", { recursive: true });

// Self-check against the competition gate: UTF-8 text of 1 to 160
// characters, not only white space, and a single line.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 160) {
  throw new Error(`Entry is ${chars} characters; gate requires 1-160.`);
}
if (!ENTRY.trim()) {
  throw new Error("Entry must not be only white space.");
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must fit on one line.");
}

writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${chars} characters to /output/entry.txt`);
