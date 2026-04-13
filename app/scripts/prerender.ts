/**
 * Post-build pre-rendering script
 *
 * Launches a static server on the dist/ folder, then uses Playwright
 * to visit each route, wait for JS to render, and save the full HTML.
 * This ensures crawlers (Google, LinkedIn, AI tools) see real content.
 */

import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, '..', 'dist');
const PORT = 4173;

// All routes to pre-render
const routes = [
  '/',
  '/services',
  '/industries',
  '/about',
  '/blog',
  '/blog/margin-leakage-australia',
  '/blog/channel-conflict-prevention',
  '/blog/as-nzs-compliance',
  '/blog/deployment-architecture-vs-marketing',
  '/blog/infrastructure-deployment-australia',
  '/blog/sovereign-observation-protocol',
  '/blog/ai-data-centre-sites-australia',
  '/blog/entering-australian-data-centre-market',
  '/blog/infrastructure-moat-data-centre-selection',
  '/blog/distribution-illusion-overseas-manufacturers',
  '/contact',
  '/privacy',
  '/terms',
];

// Simple static file server for the dist folder
function createStaticServer() {
  const mimeTypes: Record<string, string> = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.txt': 'text/plain',
    '.xml': 'application/xml',
  };

  return createServer((req, res) => {
    // Strip query string
    const urlPath = (req.url || '/').split('?')[0];
    let filePath = join(DIST_DIR, urlPath);

    try {
      // If the path exists and is a directory, look for index.html inside
      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        const indexPath = join(filePath, 'index.html');
        if (existsSync(indexPath)) {
          filePath = indexPath;
        } else {
          // SPA fallback
          filePath = join(DIST_DIR, 'index.html');
        }
      } else if (!existsSync(filePath)) {
        // File doesn't exist — SPA fallback to root index.html
        filePath = join(DIST_DIR, 'index.html');
      }
    } catch {
      filePath = join(DIST_DIR, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      res.writeHead(200, {
        'Content-Type': contentType,
        'Access-Control-Allow-Origin': '*',
      });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}

async function prerender() {
  console.log('🚀 Starting pre-render...\n');

  // Start static server
  const server = createStaticServer();
  await new Promise<void>((resolve) => server.listen(PORT, resolve));
  console.log(`📦 Static server running on http://localhost:${PORT}\n`);

  // Launch headless browser
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();

  let successCount = 0;
  let failCount = 0;

  for (const route of routes) {
    try {
      const page = await context.newPage();
      const url = `http://localhost:${PORT}${route}`;

      // Log console errors for debugging
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log(`    [console.error] ${msg.text()}`);
        }
      });
      page.on('pageerror', err => {
        console.log(`    [pageerror] ${err.message}`);
      });

      // Navigate and wait for network to settle
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

      // Wait for React to render and Framer Motion animations to start
      await page.waitForTimeout(3000);

      // Verify the root div has content
      const rootContent = await page.evaluate(() => {
        const root = document.getElementById('root');
        return root ? root.innerHTML.length : 0;
      });

      if (rootContent === 0) {
        console.error(`  ⚠️  ${route} → Root div is empty! JS may not have executed.`);
      }

      // Force all framer-motion elements to be visible (override opacity: 0)
      await page.evaluate(() => {
        document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
          (el as HTMLElement).style.opacity = '1';
        });
        document.querySelectorAll('[style*="transform"]').forEach((el) => {
          (el as HTMLElement).style.transform = 'none';
        });
      });

      // Get the full rendered HTML
      const html = await page.content();

      // Determine output path
      const outputDir = route === '/'
        ? DIST_DIR
        : join(DIST_DIR, ...route.split('/').filter(Boolean));

      const outputFile = join(outputDir, 'index.html');

      // Create directory if it doesn't exist
      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputFile, html, 'utf-8');
      const sizeKb = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
      console.log(`  ✅ ${route} → ${outputFile.replace(DIST_DIR, 'dist')} (${sizeKb} KB, root: ${rootContent} chars)`);
      successCount++;

      await page.close();
    } catch (error) {
      console.error(`  ❌ ${route} → Failed: ${error}`);
      failCount++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🏁 Pre-render complete: ${successCount} succeeded, ${failCount} failed\n`);

  if (failCount > 0) {
    process.exit(1);
  }
}

prerender().catch((error) => {
  console.error('Pre-render failed:', error);
  process.exit(1);
});
