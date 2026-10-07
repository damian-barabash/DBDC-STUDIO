// Растровый логотип → PGM для potrace (кроп по знаку, апскейл ×4, сглаживание)
// node scripts/trace-logo.mjs <src.png> <out.pgm> && potrace out.pgm -s -a 1.3 -O 1 -u 1 -o logo.svg
import sharp from 'sharp'
import { writeFile } from 'node:fs/promises'
const [src, out] = process.argv.slice(2)
const img = sharp(src).extract({ left: 410, top: 400, width: 270, height: 270 }).resize(1080, 1080, { kernel: 'cubic' }).greyscale().blur(5).threshold(128)
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
await writeFile(out, Buffer.concat([Buffer.from(`P5\n${info.width} ${info.height}\n255\n`), data]))
