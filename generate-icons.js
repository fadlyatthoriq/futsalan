const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const src = path.join(__dirname, 'src/assets/logo-512.png');
const outDir = path.join(__dirname, 'src/assets/icons');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

sizes.forEach((size) => {
  sharp(src)
    .resize(size, size)
    .toFile(path.join(outDir, `icon-${size}x${size}.png`), (err) => {
      if (err) console.error(`Error creating icon-${size}x${size}.png:`, err);
      else console.log(`icon-${size}x${size}.png created`);
    });
});
