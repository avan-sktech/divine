import type { APIRoute } from 'astro';
import { site } from '../data/site';

export const GET: APIRoute = () =>
  new Response(
    `# ${site.name}

> Business strategy and transformation consultants for Australian and international mandates, part of Sharktech Global.

${site.name} is a business strategy and transformation consultancy that helps organisations enter markets, launch new offers, evaluate complex opportunities and grow from existing customers, assets, channels and capabilities. The firm is led by strategist Dainu Devis, operates as part of Sharktech Global and supports Australian and international mandates.

## Primary capabilities
- Strategy, transformation and feasibility: executive studies, cross-market evidence, stakeholder pathways, commercial options and staged decision programmes
- Go-to-market strategy consulting: target customer, positioning, pricing, route to market, sales motion, demand and delivery readiness
- Australian market entry consulting: market validation, regulatory pathway, local channel, pilot and investment gates
- Channel strategy consulting: direct, distributor, reseller, retail and hybrid route-to-market design
- Product commercialisation: customer, evidence, compliance, production, delivery and pilot design
- Concurrent Product and Process Design methodology: proposition, delivery system, economics, assurance and evidence developed together
- Capital-Efficient Growth: more revenue from existing customers, assets, channels, data and capabilities
- AI advisory and governance: readiness, use-case prioritisation, business case, responsible controls and implementation
- Construction commercialisation: modular, prefabricated, 3D-printed and modern construction systems
- Data centre site selection: power, planning, fibre, water, land and delivery pathway assessment

## Key pages
- ${site.url}/capabilities
- ${site.url}/go-to-market-strategy
- ${site.url}/market-entry-australia
- ${site.url}/channel-strategy
- ${site.url}/product-commercialisation
- ${site.url}/methodology
- ${site.url}/capabilities/capital-efficient-growth
- ${site.url}/advisory
- ${site.url}/construction
- ${site.url}/infrastructure
- ${site.url}/industries
- ${site.url}/blog
- ${site.url}/about
- ${site.url}/contact

## Contact
- Email: ${site.email}
- Phone: ${site.phoneDisplay}
- Address: ${site.address}
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
