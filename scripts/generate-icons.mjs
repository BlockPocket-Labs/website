import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const source = path.join(root, "public", "logo.png");

const outputs = [
  { file: "public/favicon-16x16.png", size: 16 },
  { file: "public/favicon-32x32.png", size: 32 },
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "public/icon-192.png", size: 192 },
  { file: "public/icon-512.png", size: 512 },
  { file: "src/app/icon.png", size: 32 },
  { file: "src/app/apple-icon.png", size: 180 },
];

async function generateIcon({ file, size }) {
  const outputPath = path.join(root, file);
  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 17, g: 18, b: 21, alpha: 1 },
    })
    .png()
    .toFile(outputPath);

  console.log(`Created ${file}`);
}

async function generateFavicon() {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(source)
        .resize(size, size, {
          fit: "contain",
          background: { r: 17, g: 18, b: 21, alpha: 1 },
        })
        .png()
        .toBuffer(),
    ),
  );

  const ico = await toIco(pngBuffers);
  const appFaviconPath = path.join(root, "src", "app", "favicon.ico");
  await writeFile(appFaviconPath, ico);
  console.log("Created src/app/favicon.ico");
}

async function main() {
  for (const output of outputs) {
    await generateIcon(output);
  }

  await generateFavicon();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
