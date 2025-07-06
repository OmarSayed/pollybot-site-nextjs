const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// List of pages to include in the sitemap
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
  { url: '/help', changefreq: 'weekly', priority: 0.7 },
  { url: '/terms-of-service', changefreq: 'monthly', priority: 0.5 },
  { url: '/privacy-policy', changefreq: 'monthly', priority: 0.5 },
  { url: '/affiliates', changefreq: 'weekly', priority: 0.6 },
];

// Create sitemap
async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({
      hostname: 'https://pollybot.ai',
      lastmodDateOnly: false,
      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false,
      },
    });

    const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
    const writeStream = fs.createWriteStream(sitemapPath);
    
    sitemap.pipe(writeStream);
    
    // Add each page to the sitemap
    for (const page of pages) {
      sitemap.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    }
    
    sitemap.end();
    
    await streamToPromise(Readable.from(pages).pipe(sitemap));
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();
