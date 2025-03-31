// scripts/optimize-images.js
import fs from "fs"
import path from "path"
import sharp from "sharp"

const inputDir = "static/images/team"
const widths = [200, 400]
const formats = ["webp", "avif"]

const isImage = (file) =>
  /\.(jpe?g|png)$/i.test(file) && !/-\d+\.(webp|avif)$/i.test(file)

async function optimizeImage(file) {
  const inputPath = path.join(inputDir, file)
  const name = path.parse(file).name

  for (const width of widths) {
    const image = sharp(inputPath).resize(width)

    for (const format of formats) {
      const outputPath = path.join(inputDir, `${name}-${width}.${format}`)

      await image.toFormat(format, { quality: 80 }).toFile(outputPath)

      console.log(`✅ Created: ${outputPath}`)
    }
  }
}

async function run() {
  const files = fs.readdirSync(inputDir).filter(isImage)

  if (files.length === 0) {
    console.log("No images found.")
    return
  }

  for (const file of files) {
    await optimizeImage(file)
  }

  console.log("✨ All images optimized!")
}

run().catch((err) => {
  console.error("❌ Error:", err)
})
