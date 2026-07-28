/**
 * Generate OG image using puppeteer-core + @sparticuz/chromium
 * Creates a 1200x630 branded image for social media previews
 */

import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'public', 'images');

const html = `
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      width: 1200px;
      height: 630px;
      background: #0A0A0A;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: 'Segoe UI', system-ui, sans-serif;
      position: relative;
      overflow: hidden;
    }
    .grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(to right, rgba(192, 192, 192, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(192, 192, 192, 0.05) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    .border-accent {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #D4AF37, #F5E6A3, #D4AF37);
    }
    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      padding: 0 80px;
    }
    .logo-letter {
      width: 80px;
      height: 80px;
      background: #F8F8F8;
      color: #0A0A0A;
      font-size: 44px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 32px;
      border-radius: 4px;
    }
    h1 {
      color: #F8F8F8;
      font-size: 56px;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 16px;
    }
    .tagline {
      color: #D4AF37;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 3px;
      text-transform: uppercase;
      margin-bottom: 24px;
    }
    .description {
      color: rgba(248, 248, 248, 0.6);
      font-size: 20px;
      line-height: 1.5;
      max-width: 700px;
      margin: 0 auto;
    }
    .footer {
      position: absolute;
      bottom: 32px;
      color: rgba(248, 248, 248, 0.3);
      font-size: 14px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <div class="grid"></div>
  <div class="border-accent"></div>
  <div class="content">
    <div class="logo-letter">D</div>
    <h1>Divine Lab Worx</h1>
    <div class="tagline">Deployment Architecture</div>
    <div class="description">
      Structured deployment of engineered systems in Australia.
      Capital protection and market integrity for MNCs.
    </div>
  </div>
  <div class="footer">divinelabworx.com</div>
</body>
</html>
`;

async function generateOgImage() {
  console.log('🎨 Generating OG image...');

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const executablePath = await chromium.executablePath();
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: { width: 1200, height: 630 },
    executablePath,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setContent(html);
  await new Promise(r => setTimeout(r, 500));

  const screenshot = await page.screenshot({
    type: 'jpeg',
    quality: 90,
  });

  const outputPath = join(OUTPUT_DIR, 'og-image.jpg');
  writeFileSync(outputPath, screenshot);

  await browser.close();
  console.log(`✅ OG image saved to ${outputPath}`);
}

generateOgImage().catch(console.error);
