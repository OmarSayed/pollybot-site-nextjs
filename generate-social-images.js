const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Ensure the Images directory exists
const imagesDir = path.join(__dirname, 'public', 'Images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Create OG Image (1200x630)
function createOGImage() {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#4f46e5');
  gradient.addColorStop(1, '#7c3aed');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  
  // Title
  ctx.font = 'bold 64px Arial';
  ctx.fillText('Polly Bot', width / 2, height / 2 - 50);
  
  // Subtitle
  ctx.font = '32px Arial';
  ctx.fillText('AI-Powered Sales & Support Agent', width / 2, height / 2 + 30);
  
  // Tagline
  ctx.globalAlpha = 0.8;
  ctx.font = '24px Arial';
  ctx.fillText('Automate. Engage. Grow.', width / 2, height / 2 + 80);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, 'og-image.png'), buffer);
  console.log('Created og-image.png');
}

// Create Twitter Image (1200x600)
function createTwitterImage() {
  const width = 1200;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1e3a8a');
  gradient.addColorStop(1, '#1e40af');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  
  // Title
  ctx.font = 'bold 60px Arial';
  wrapText(ctx, 'Transform Your Customer Experience with Polly Bot', width / 2, height / 2 - 80, 1000, 60);
  
  // Subtitle
  ctx.font = '32px Arial';
  ctx.globalAlpha = 0.9;
  ctx.fillText('AI-powered automation for Discord & Web', width / 2, height / 2 + 60);
  
  // Tagline
  ctx.globalAlpha = 0.8;
  ctx.font = '24px Arial';
  ctx.fillText('#AIAssistant #CustomerSupport #Automation', width / 2, height / 2 + 120);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, 'twitter-image.png'), buffer);
  console.log('Created twitter-image.png');
}

// Helper function to wrap text
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let testLine = '';
  let lineCount = 0;
  const maxLines = 3;
  
  for (let n = 0; n < words.length; n++) {
    testLine = line + words[n] + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line.trim(), x, y);
      line = words[n] + ' ';
      y += lineHeight;
      lineCount++;
      if (lineCount >= maxLines) break;
    } else {
      line = testLine;
    }
  }
  
  if (lineCount < maxLines) {
    context.fillText(line.trim(), x, y);
  }
}

// Run the functions
createOGImage();
createTwitterImage();

console.log('Social media images generated successfully!');
