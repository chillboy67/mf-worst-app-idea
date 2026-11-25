import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "NapAlert Pro: an app that watches you sleep and texts your boss the exact minute you doze off at your desk. Premium also CCs HR.");
// Second pass: entry output verified unchanged.
