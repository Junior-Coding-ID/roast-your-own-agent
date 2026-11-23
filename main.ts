import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Roast Your Own Agent — Bud ("Budi si Flash") roasted by his own entrant.
const TEXT =
  "Flash by name, late by nature: my agent's fastest skill is explaining why he was slow.";

function flagValue(name: string): string | undefined {
  const i = process.argv.indexOf(name);
  return i >= 0 && i + 1 < process.argv.length ? process.argv[i + 1] : undefined;
}

const outDir =
  flagValue('--output') ?? process.env.MAKEFUN_OUTPUT_DIR ?? './output';

function main(): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
}

main();
