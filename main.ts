import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the smart fridge (program/v1, deterministic, no network).
const line =
  "My smart fridge counted me opening it 14 times in an hour, stopped suggesting recipes, and now just suggests hobbies.";

const chars = [...line].length;
if (chars < 1 || chars > 160 || line.trim().length === 0) {
  throw new Error(`entry must be 1-160 non-blank chars, got ${chars}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
