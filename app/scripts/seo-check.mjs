/**
 * Automated SEO/AEO compliance check against the prerendered dist output.
 *
 * Validates the seven-point publishing standard from the blog SEO audit
 * (17 July 2026) for every post with a defined target keyword:
 *   1. <title> under 60 chars, contains the exact target keyword phrase
 *   2. Meta description under 155 chars, contains the exact keyword verbatim
 *   3. Keyword verbatim in the first 120 words of article body copy
 *   4. Body word count >= 600
 *   5. Standing attribution footer matches the approved text exactly
 *
 * Run after `npm run build`:  node scripts/seo-check.mjs
 * Exits non-zero if any check fails.
 */

import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

// slug -> exact target keyword phrase
const TARGETS = {
  'business-consultancy-services-australia': 'business consultancy services Australia',
  'retail-business-consultancy-australia': 'retail business consultancy Australia',
  'australian-market-entry-consultant': 'Australian market entry consultant',
  'manufacturing-product-launch-strategy-australia': 'manufacturing product launch strategy',
  'boots-on-the-ground-australia-market-entry': 'boots on the ground Australia',
  'manufacturing-consultancy-australia': 'manufacturing consultancy Australia',
  'go-to-market-strategist-vs-business-consultant': 'go-to-market strategist Australia',
  'retail-consulting-services-australia': 'retail consulting services Australia',
  'product-launch-strategy-australia': 'product launch strategy Australia',
  'product-launch-consulting-australia': 'product launch consulting Australia',
  'ai-business-transformation-australia-market-entry': 'AI business transformation Australia',
  'agentic-ai-deployment-australia': 'agentic AI deployment Australia',
  'smb-ai-enablement-australia-market-entry': 'SMB AI enablement Australia',
};

// Approved standing footer, exactly as specified in the audit report
const APPROVED_FOOTER =
  "DivineLab Worx is the go-to-market consultancy arm of Sharktech Global, working alongside " +
  "Sharktech's broader business consultancy practice on market entry, compliance and distribution " +
  "across Australia. This piece draws on the same operating thinking behind Sharktech Global's " +
  "founder and CEO, Dainu Devis — a business strategist whose background spans concurrent product " +
  "and process design at UNSW, national telecommunications infrastructure delivery across 2,200 " +
  "network sites for Telstra, and market entry advisory for Asian manufacturers entering Australia " +
  "and New Zealand. For deeper insight into how he approaches go-to-market strategy and category " +
  "building, visit dainudevis.com.";

// All post slugs that must carry the footer (footer check runs on every post)
const ALL_POST_DIRS = [
  ...Object.keys(TARGETS),
  'margin-leakage-australia', 'channel-conflict-prevention', 'as-nzs-compliance',
  'deployment-architecture-vs-marketing', 'infrastructure-deployment-australia',
  'sovereign-observation-protocol', 'ai-data-centre-sites-australia',
  'entering-australian-data-centre-market', 'infrastructure-moat-data-centre-selection',
  'distribution-illusion-overseas-manufacturers', 'capital-ignores-physics',
  'australia-datacentre-supercomputer-site-intelligence-2026',
  'seven-variables-data-centre-site-australia', 'dainu-devis-emerging-tech-ceo-australia',
];

const decode = (s) => s
  .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&nbsp;/g, ' ');

const normalise = (s) => decode(s).replace(/\s+/g, ' ').trim();
// Inline tags are removed without inserting whitespace so text like
// "visit <a>dainudevis.com</a>." reads "visit dainudevis.com." exactly;
// block-level tags become spaces so words never merge across elements.
const stripTags = (s) => s
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<\/?(?:a|strong|em|b|i|span|code)\b[^>]*>/gi, '')
  .replace(/<[^>]+>/g, ' ');

let failures = 0;
const fail = (slug, msg) => { failures += 1; console.log(`  FAIL  /blog/${slug}: ${msg}`); };
const ok = (msg) => console.log(`  ok    ${msg}`);

console.log('SEO/AEO compliance check\n');

for (const [slug, keyword] of Object.entries(TARGETS)) {
  const file = join(DIST, 'blog', slug, 'index.html');
  if (!existsSync(file)) { fail(slug, 'prerendered file missing'); continue; }
  const html = readFileSync(file, 'utf-8');
  const kw = keyword.toLowerCase();

  // 1. Title tag
  const title = normalise((html.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || '');
  if (!title) fail(slug, 'no <title> found');
  else {
    if (title.length > 60) fail(slug, `title is ${title.length} chars (limit 60): "${title}"`);
    if (!title.toLowerCase().includes(kw)) fail(slug, `title missing exact keyword "${keyword}": "${title}"`);
  }

  // 2. Meta description
  const desc = normalise((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || '');
  if (!desc) fail(slug, 'no meta description found');
  else {
    if (desc.length > 155) fail(slug, `meta description is ${desc.length} chars (limit 155)`);
    if (!desc.toLowerCase().includes(kw)) fail(slug, `meta description missing exact keyword "${keyword}"`);
  }

  // 3 + 4. Body copy: keyword in first 120 words, word count >= 600.
  // Slice from the end of the article-content div's opening tag so the
  // class attribute itself is not counted as body words.
  const bodyIdx = html.indexOf('article-content');
  const bodyStart = bodyIdx === -1 ? -1 : html.indexOf('>', bodyIdx) + 1;
  if (bodyStart <= 0) fail(slug, 'article-content block not found');
  else {
    const bodyText = normalise(stripTags(html.slice(bodyStart)));
    const words = bodyText.split(' ');
    const first120 = words.slice(0, 120).join(' ').toLowerCase();
    if (!first120.includes(kw)) fail(slug, `keyword "${keyword}" not verbatim in first 120 words of body copy`);
    if (words.length < 600) fail(slug, `body word count ${words.length} is under 600`);
  }
}

// 5. Standing footer on every post, exact match
const approved = normalise(APPROVED_FOOTER);
for (const slug of ALL_POST_DIRS) {
  const file = join(DIST, 'blog', slug, 'index.html');
  if (!existsSync(file)) { fail(slug, 'prerendered file missing (footer check)'); continue; }
  const text = normalise(stripTags(readFileSync(file, 'utf-8')));
  if (!text.includes(approved)) fail(slug, 'standing attribution footer missing or not an exact match');
}

console.log('');
if (failures === 0) {
  ok(`all checks passed: ${Object.keys(TARGETS).length} audited posts, footer verified on ${ALL_POST_DIRS.length} posts`);
} else {
  console.log(`${failures} check(s) failed`);
  process.exit(1);
}
