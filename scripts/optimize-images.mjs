import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceDir = path.join(root, "public/images/source");
const outputDir = path.join(root, "public/images/optimized");

const jobs = [
  ["hair27-logo-zwart.png", "hair27-logo-zwart-1024.webp", 1024],
  ["hair27-logo-wit-1024x228.png", "hair27-logo-wit-1024.webp", 1024],
  ["homepage-scaled.jpg", "homepage-1600.webp", 1600],
  ["website-mobile-homepage-scaled.jpg", "website-mobile-homepage-900.webp", 900],
  ["overhair27-zw-scaled.jpg", "overhair27-zw-1200.webp", 1200],
  ["contact-zw.jpg", "contact-zw-1200.webp", 1200],
  ["openingstijden-scaled.jpg", "openingstijden-1400.webp", 1400],
  ["producten-gedraaid-scaled.jpg", "producten-gedraaid-1200.webp", 1200],
  ["STMNT.jpeg", "STMNT-1000.webp", 1000],
  ["lookbook1-scaled.jpg", "lookbook1-1000.webp", 1000],
  ["lookbook2-scaled.jpg", "lookbook2-1000.webp", 1000],
  ["lookbook4-scaled.jpg", "lookbook4-1000.webp", 1000]
];

await fs.mkdir(outputDir, { recursive: true });

for (const [input, output, width] of jobs) {
  const inputPath = path.join(sourceDir, input);
  const outputPath = path.join(outputDir, output);
  await sharp(inputPath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outputPath);
  console.log(`optimized ${output}`);
}

for (const favicon of [
  "cropped-Favicon-Hair27-bijgesneden-32x32.png",
  "cropped-Favicon-Hair27-bijgesneden-192x192.png",
  "cropped-Favicon-Hair27-bijgesneden-180x180.png"
]) {
  await fs.copyFile(path.join(sourceDir, favicon), path.join(root, "public", favicon));
}
