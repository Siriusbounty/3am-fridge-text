// The 3AM Fridge Text entry: one line a smart fridge texts its owner at 3am.
// Writes the line to /output/entry.txt (1-140 chars, UTF-8, deterministic).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "3:04 AM. The leftover pizza has formed opinions about you, and frankly, so have I. Come and get it before I start talking to the pickles.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
