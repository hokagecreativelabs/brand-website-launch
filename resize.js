const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = [300, 600, 900, 1200]; // Customize sizes as needed
const inputDir = "./public/images";
const outputDir = "./public/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  sizes.forEach((size) => {
    sharp(`${inputDir}/${file}`)
      .resize(size)
      .toFormat("webp")
      .toFile(`${outputDir}/${path.parse(file).name}-${size}.webp`, (err) => {
        if (err) console.error(`Error processing ${file}:`, err);
      });
  });
});

console.log("Image optimization complete!");
