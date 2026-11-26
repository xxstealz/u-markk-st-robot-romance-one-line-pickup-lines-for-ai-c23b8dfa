// Robot Romance: One-Line Pickup Lines for AI — make.fun entry by xxstealz.
// The entry is a single fixed pickup line aimed at a robot/AI, written to
// /output/entry.txt. The line plays on how someone actually talks to a
// model: asking it for the perfect partner, and the model returning you —
// zero-shot, no fine-tuning needed. One line, setup + punch, no filler.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I asked the model for the perfect partner and it returned you — zero-shot, no fine-tuning needed.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
