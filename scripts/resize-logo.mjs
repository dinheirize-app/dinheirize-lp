import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '..', 'public', 'dinheirize-logo.png');

const beforeMeta = await sharp(input).metadata();
const beforeStat = (await import('node:fs/promises')).stat;
const beforeBytes = (await beforeStat(input)).size;

await sharp(input)
  .resize(512, 512, { fit: 'cover' })
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(input + '.tmp');

const fs = await import('node:fs/promises');
await fs.rename(input + '.tmp', input);

const afterMeta = await sharp(input).metadata();
const afterBytes = (await beforeStat(input)).size;

console.log(`Before: ${beforeMeta.width}x${beforeMeta.height}  ${(beforeBytes / 1024).toFixed(0)} KB`);
console.log(`After:  ${afterMeta.width}x${afterMeta.height}   ${(afterBytes / 1024).toFixed(0)} KB`);
console.log(`Reduction: ${(100 - (afterBytes / beforeBytes) * 100).toFixed(1)}%`);
