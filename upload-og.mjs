import { UTApi } from "uploadthing/server";
import { readFileSync } from "fs";

const utapi = new UTApi({
  token: "eyJhcGlLZXkiOiJza19saXZlX2E5ZGZhYjZhN2FlMTgyNTg2MDQwODJiMzc5ZjJkMjFhZWY3YmU2Y2EyZjI0M2JlYzg1OWFmOGM5ODFkMGQ3ZDUiLCJhcHBJZCI6ImJ6c2duc3Nya2oiLCJyZWdpb25zIjpbInNlYTEiXX0=",
});

const buffer = readFileSync("./og-image.png");
const file = new File([buffer], "cornerstone-og-image.png", { type: "image/png" });

const [result] = await utapi.uploadFiles([file]);
if (result.error) {
  console.error("Upload failed:", result.error);
} else {
  console.log("OG image URL:", result.data.ufsUrl);
}
