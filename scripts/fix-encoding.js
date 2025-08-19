import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const exts = [".astro", ".md", ".css", ".js", ".ts", ".json", ".yaml", ".yml"];

const MAP = new Map(Object.entries({
  "Ã¼":"ü","Ãœ":"Ü","Ã¶":"ö","Ã–":"Ö","Ã¤":"ä","Ã„":"Ä","ÃŸ":"ß",
  "â‚¬":"€","â€“":"–","â€”":"—","â€ž":"„","â€œ":"“","â€ž":"„","â€ž":"„",
  "â€¡":"‡","â€¡":"‡","â€¢":"•","â€¦":"…","â€™":"’","â€˜":"‘","â€œ":"“","â€³":"″",
}));

function fixText(s){
  let t = s;
  for (const [bad, good] of MAP) t = t.split(bad).join(good);
  return t;
}

function walk(dir){
  for (const name of readdirSync(dir, { withFileTypes:true })) {
    const p = join(dir, name.name);
    if (name.isDirectory()) { walk(p); continue; }
    if (!exts.some(e => name.name.toLowerCase().endsWith(e))) continue;

    const orig = readFileSync(p, "utf8");
    const fixed = fixText(orig);
    if (fixed !== orig) {
      writeFileSync(p, fixed, { encoding: "utf8" });
      console.log("fixed:", p);
    }
  }
}

walk(join(root, "src"));
walk(join(root, "public"));
console.log("Done.");
