/**
 * Post-build pre-rendering script
 *
 * Uses puppeteer-core + @sparticuz/chromium (serverless-compatible)
 * to visit each route and save the rendered HTML.
 * Works on both local machines and Vercel's build environment.
 */

import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
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
  '/blog/capital-ignores-physics',
  '/blog/australia-datacentre-supercomputer-site-intelligence-2026',
  '/blog/seven-variables-data-centre-site-australia',
  '/blog/dainu-devis-emerging-tech-ceo-australia',
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
    const urlPath = (req.url || '/').split('?')[0];
    let filePath = join(DIST_DIR, urlPath);

    try {
      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        const indexPath = join(filePath, 'index.html');
        filePath = existsSync(indexPath) ? indexPath : join(DIST_DIR, 'index.html');
      } else if (!existsSync(filePath)) {
        filePath = join(DIST_DIR, 'index.html');
      }
    } catch {
      filePath = join(DIST_DIR, 'index.html');
    }

    try {
      const content = readFileSync(filePath);
      const ext = extname(filePath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
      });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
}

// Find a Chrome executable for local development (Windows/Mac)
function findLocalChrome(): string | null {
  const paths = [
    // Windows
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    // Mac
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    // Linux
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ];
  for (const p of paths) {
    if (p && existsSync(p)) return p;
  }
  return null;
}

async function prerender() {
  console.log('🚀 Starting pre-render...\n');

  // Start static server
  const server = createStaticServer();
  await new Promise<void>((resolve) => server.listen(PORT, resolve));
  console.log(`📦 Static server running on http://localhost:${PORT}\n`);

  // Try @sparticuz/chromium first (Vercel/serverless), fall back to local Chrome
  let executablePath: string;
  let args: string[];

  try {
    executablePath = await chromium.executablePath();
    // Verify it actually exists
    if (!existsSync(executablePath)) throw new Error('Not found');
    args = chromium.args;
    console.log(`🌐 Using @sparticuz/chromium: ${executablePath}\n`);
  } catch {
    const localChrome = findLocalChrome();
    if (!localChrome) {
      throw new Error('No Chrome/Chromium found. Install Google Chrome or run on Vercel.');
    }
    executablePath = localChrome;
    args = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];
    console.log(`🌐 Using local Chrome: ${executablePath}\n`);
  }

  const browser = await puppeteer.launch({
    args,
    defaultViewport: { width: 1280, height: 800 },
    executablePath,
    headless: true,
  });

  let successCount = 0;
  let failCount = 0;

  // Render a single route. Returns true on success, false on failure.
  async function renderRoute(route: string): Promise<boolean> {
    let page;
    try {
      page = await browser.newPage();
      const url = `http://localhost:${PORT}${route}`;

      // Navigate and wait for network to settle.
      // networkidle2 tolerates up to 2 lingering connections (font streams,
      // analytics keep-alives, etc.) that would otherwise prevent
      // networkidle0 from ever firing on Vercel's build machine.
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

      // Wait for React to render and Framer Motion animations
      await new Promise(r => setTimeout(r, 3000));

      // Force all framer-motion elements to be visible
      await page.evaluate(() => {
        document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
          (el as HTMLElement).style.opacity = '1';
        });
        document.querySelectorAll('[style*="transform"]').forEach((el) => {
          (el as HTMLElement).style.transform = 'none';
        });
      });

      // Check root div has content
      const rootContent = await page.evaluate(() => {
        const root = document.getElementById('root');
        return root ? root.innerHTML.length : 0;
      });

      if (rootContent === 0) {
        console.error(`  ⚠️  ${route} → Root div is empty!`);
      }

      // Get the full rendered HTML
      const html = await page.content();

      // Determine output path
      const outputDir = route === '/'
        ? DIST_DIR
        : join(DIST_DIR, ...route.split('/').filter(Boolean));

      const outputFile = join(outputDir, 'index.html');

      if (!existsSync(outputDir)) {
        mkdirSync(outputDir, { recursive: true });
      }

      writeFileSync(outputFile, html, 'utf-8');
      const sizeKb = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
      console.log(`  ✅ ${route} → ${outputFile.replace(DIST_DIR, 'dist')} (${sizeKb} KB, root: ${rootContent} chars)`);
      return true;
    } catch (error) {
      console.error(`  ❌ ${route} → ${error}`);
      return false;
    } finally {
      if (page) {
        try { await page.close(); } catch { /* ignore */ }
      }
    }
  }

  for (const route of routes) {
    // Try once, retry once on failure. Transient timeouts on Vercel build
    // machines are common; a single retry catches most of them.
    let ok = await renderRoute(route);
    if (!ok) {
      console.error(`  🔁 ${route} → retrying once`);
      ok = await renderRoute(route);
    }
    if (ok) successCount++;
    else failCount++;
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
