import { UTApi } from "uploadthing/server";
import { readFileSync } from "fs";

const utapi = new UTApi({
  token: "eyJhcGlLZXkiOiJza19saXZlX2E5ZGZhYjZhN2FlMTgyNTg2MDQwODJiMzc5ZjJkMjFhZWY3YmU2Y2EyZjI0M2JlYzg1OWFmOGM5ODFkMGQ3ZDUiLCJhcHBJZCI6ImJ6c2duc3Nya2oiLCJyZWdpb25zIjpbInNlYTEiXX0=",
});

const files = [
  { path: "./og-image.png",     name: "cornerstone-og-image.png",    type: "image/png" },
  { path: "./favicon-512.png",  name: "cornerstone-favicon-512.png", type: "image/png" },
  { path: "./favicon-192.png",  name: "cornerstone-favicon-192.png", type: "image/png" },
  { path: "./favicon-32.png",   name: "cornerstone-favicon-32.png",  type: "image/png" },
  { path: "./favicon.svg",      name: "cornerstone-favicon.svg",     type: "image/svg+xml" },
];

const uploadFiles = files.map(f => new File([readFileSync(f.path)], f.name, { type: f.type }));
const results = await utapi.uploadFiles(uploadFiles);

results.forEach((r, i) => {
  if (r.error) console.error(`✗ ${files[i].name}:`, r.error);
  else console.log(`✓ ${files[i].name} → ${r.data.ufsUrl}`);
});
