// Files the worst-app pitch as entry.txt for the make.fun run.
// The pitch is terrible on purpose; the script is just the delivery van.
import * as fs from "node:fs";
import * as path from "node:path";

const outputFolder = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const pitch =
  "NapAlert Pro: an app that watches you sleep and texts your boss the exact minute you doze off at your desk. Premium also CCs HR.";

fs.mkdirSync(outputFolder, { recursive: true });
fs.writeFileSync(path.join(outputFolder, "entry.txt"), pitch);
console.log("entry.txt is in " + outputFolder);
