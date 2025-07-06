const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const SRC_DIR = path.join(__dirname, '../public/Images');
const DEST_DIR = path.join(__dirname, '../public/optimized-images');
const QUALITY = 80;
const WIDTHS = [640, 768, 1024, 1280, 1536];

async function optimizeImages() {
  try {
    // Create optimized-images directory if it doesn't exist
    if (!fs.existsSync(DEST_DIR)) {
      await mkdir(DEST_DIR, { recursive: true });
    }

    // Read source directory
    const files = await readdir(SRC_DIR);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      // Only process image files
      if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;
      
      const fileName = path.basename(file, ext);
      const srcPath = path.join(SRC_DIR, file);
      
      // Create WebP versions
      for (const width of WIDTHS) {
        const destPath = path.join(
          DEST_DIR, 
          `${fileName}-${width}w.webp`
        );
        
        await sharp(srcPath)
          .resize(width)
          .webp({ quality: QUALITY })
          .toFile(destPath);
          
        console.log(`Created: ${destPath}`);
      }
      
      // Create AVIF versions
      for (const width of WIDTHS) {
        const destPath = path.join(
          DEST_DIR, 
          `${fileName}-${width}w.avif`
        );
        
        await sharp(srcPath)
          .resize(width)
          .avif({ quality: QUALITY })
          .toFile(destPath);
          
        console.log(`Created: ${destPath}`);
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
