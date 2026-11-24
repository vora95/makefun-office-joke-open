// Make the AI Judge Laugh: the Office Joke Open — one original office one-liner.
// The grader runs this program twice; it must write byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked IT for a second monitor and got a lecture on minimalism from a man with four screens.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only whitespace,
// and a single line (the judge scores one-line jokes; a newline would break it).
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("joke must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
