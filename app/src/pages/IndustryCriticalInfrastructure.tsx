import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Plug, ClipboardCheck, Globe, Droplets, ShieldCheck,
  Server, Cpu, Microchip, Sparkles, Check,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const criteriaItems = [
  { icon: Plug, name: 'Power Proximity', desc: 'Grid access, substation distance & MW capacity' },
  { icon: ClipboardCheck, name: 'Zoning Clearance', desc: 'Planning approvals & industrial land classification' },
  { icon: Globe, name: 'Fibre Path', desc: 'Dark fibre routes & latency to exchange points' },
  { icon: Droplets, name: 'Water Access', desc: 'Cooling supply, wastewater rights & flow rates' },
  { icon: ShieldCheck, name: 'WHS Compliance', desc: 'Industrial safety & construction regulatory readiness' },
];

const focusItems = [
  { icon: Server, title: 'Hyperscale Data Centres', sub: 'Large-scale compute & colocation' },
  { icon: Cpu, title: 'Supercomputers & AI Factories', sub: 'Sovereign AI, GPU clusters & HPC' },
  { icon: Microchip, title: 'Semiconductor Fabs', sub: 'Advanced chip manufacturing' },
  { icon: Sparkles, title: 'Advanced Cleanrooms', sub: 'Precision-controlled environments' },
];

const capabilities = [
  {
    id: 'site-selection',
    title: 'Site Selection & Rapid Due Diligence',
    description: 'From single-site acquisitions to multi-node expansions across Australia, our due diligence is built for hyperscale velocity. We empower operators to make capital-efficient decisions that mitigate risk, guarantee business continuity, and accelerate time-to-market.',
    services: [
      { category: 'Desktop Services', items: 'Data room analysis, constraint mapping, and initial utility outreach (power, fibre, water).' },
      { category: 'Field Services', items: 'Topological due diligence, environmental impact, and surface water profiling.' },
      { category: 'Utility Forecasting', items: 'Comprehensive modeling of power load and water supply against forecasted capacity demands.' },
    ],
  },
  {
    id: 'power',
    title: 'Power & Energy Infrastructure',
    description: 'Power is the absolute bottleneck of digital infrastructure. We deliver high availability, scalable energy solutions, from early stage grid planning to full site energisation, ensuring your facilities have the stranded capacity to grow.',
    services: [
      { category: 'Planning', items: 'Power system planning, high-voltage load forecasting, and utility coordination.' },
      { category: 'Design', items: 'Dedicated substation design and medium/high-voltage distribution networks.' },
      { category: 'Resilience', items: 'Redundancy modeling (concurrent maintainability, fault tolerance) and backup generation.' },
      { category: 'Sustainability', items: 'Renewable energy integration and sustainable portfolio sourcing.' },
    ],
  },
  {
    id: 'consulting',
    title: 'End-to-End Consulting',
    description: 'Whether designing a standalone edge facility or a gigawatt-scale campus, we manage the entire project lifecycle with precise, in-house engineering capabilities.',
    services: [
      { category: 'Advisory', items: 'Concept design, technical specifications, and RFP development.' },
      { category: 'Engineering', items: 'MEP design (Mechanical, Electrical, Plumbing, and Fire) tailored for mission-critical loads.' },
      { category: 'Project Controls', items: 'Rigorous cost estimation, schedule management, quantity surveying, and contract administration.' },
      { category: 'Delivery', items: 'BIM coordination, construction management, and continuous field services.' },
    ],
  },
  {
    id: 'fiber',
    title: 'Fibre & Subsea Infrastructure',
    description: 'We engineer the digital backbone. Divine Lab Worx provides full-lifecycle advisory and design for the critical network pathways that connect hyperscale ecosystems with low-latency route diversity.',
    services: [
      { category: 'Execution', items: 'Route feasibility analysis, permitting, and shore landing execution.' },
      { category: 'Design', items: 'Cable station design and secure terrestrial fibre duct planning.' },
      { category: 'Compliance', items: 'Navigating complex regulatory environments to accelerate network deployment.' },
    ],
  },
  {
    id: 'water',
    title: 'Water & Wastewater Engineering',
    description: 'We architect water infrastructure for extreme resilience and scale. Our systems optimise Water Usage Effectiveness (WUE) to ensure continuous facility uptime and strict environmental compliance.',
    services: [
      { category: 'Treatment', items: 'Advanced treatment, filtration, and municipal water reclamation.' },
      { category: 'Efficiency', items: 'Closed-loop and Zero-Liquid Discharge (ZLD) architectures.' },
      { category: 'Monitoring', items: 'Telemetry and digital tools for remote optimisation and continuous leak detection.' },
    ],
  },
  {
    id: 'maintenance',
    title: 'Critical Infrastructure Maintenance',
    description: 'Once a facility is energised, uptime is non-negotiable. We provide the ongoing operational engineering required to maintain hyperscale availability.',
    services: [
      { category: 'Maintenance', items: 'Preventative and predictive maintenance for critical power (UPS, generators) and cooling systems.' },
      { category: 'Optimisation', items: 'Capacity management, thermal load testing, and facility optimisation.' },
      { category: 'Continuity', items: 'Operational continuity planning and industrial safety automation monitoring.' },
    ],
  },
];

const faqs = [
  {
    question: 'What does Divine Lab Worx do for critical infrastructure?',
    answer: 'We identify and validate locations for mission-critical facilities in Australia, then stay with you through power, permits and project management until the site is build-ready. The practice covers hyperscale data centres, sovereign AI factories, semiconductor fabs and advanced cleanrooms.',
  },
  {
    question: 'What site validation criteria do you assess?',
    answer: 'Five critical criteria for every site: power proximity (grid access, substation distance and MW capacity), zoning clearance (planning approvals and industrial land classification), fibre path (dark fibre routes and latency to exchange points), water access (cooling supply, wastewater rights and flow rates) and WHS compliance (industrial safety and construction regulatory readiness).',
  },
  {
    question: 'Which types of facilities do you consult for?',
    answer: 'Hyperscale data centres, supercomputers and sovereign AI factories, semiconductor fabrication plants, and advanced cleanrooms requiring precision-controlled environments across Australia.',
  },
  {
    question: 'How does this fit with your go-to-market consulting?',
    answer: 'The same discipline runs through both practices. One accountable team, evidence over opinion, and a costed critical path before capital is committed. For infrastructure the deliverable is a build-ready site; for products it is a market-ready launch.',
  },
];

const infraJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      serviceType: 'Critical Infrastructure Site Consultancy',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Divine Lab Worx',
        parentOrganization: { '@type': 'Organization', name: 'Sharktech Global' },
      },
      areaServed: 'AU',
      description: 'Site intelligence, power and utility interface, permits and project delivery for hyperscale data centres, AI factories, semiconductor fabs and advanced cleanrooms in Australia.',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://divinelabworx.com/' },
        { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://divinelabworx.com/industries' },
        { '@type': 'ListItem', position: 3, name: 'Critical Infrastructure', item: 'https://divinelabworx.com/industries/critical-infrastructure' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
};

const IndustryCriticalInfrastructure = () => {
  return (
    <>
      <Helmet>
        <title>Critical Infrastructure | Divine Lab Worx - Data Centre & AI Factory Sites Australia</title>
        <meta name="description" content="Site intelligence, power, permits and project delivery for hyperscale data centres, sovereign AI factories, semiconductor fabs and advanced cleanrooms in Australia. Part of Sharktech Global." />
        <link rel="canonical" href="https://divinelabworx.com/industries/critical-infrastructure" />
        <meta property="og:title" content="Critical Infrastructure | Divine Lab Worx" />
        <meta property="og:description" content="We find where critical infrastructure belongs. Site intelligence, power, permits and project delivery until your site is build-ready." />
        <meta property="og:url" content="https://divinelabworx.com/industries/critical-infrastructure" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(infraJsonLd)}</script>
      </Helmet>
      <div className="w-full" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
      {/* Breadcrumb + Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-6">
              <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/industries" className="hover:text-gold transition-colors">Industries</Link>
              <span className="mx-2">/</span>
              <span className="text-optical-white">Critical Infrastructure</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              We Find Where <span className="text-gold">Critical Infrastructure</span> Belongs.
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We identify and validate locations for mission-critical facilities across Australia,
              then stay with you through permits, power and project management until your site is
              build-ready. As sovereign AI factories, hyperscale data centres and semiconductor
              fabs race to deploy, the bottleneck is no longer capital. It is the right site,
              secured fast. That is exactly what we deliver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-10"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              We Consult To
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              Mission-Critical Facilities
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border border-silver-steel/20 p-5 sm:p-6 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg border border-gold/50 text-gold flex items-center justify-center mb-4">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-optical-white tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-wide text-accent-muted">
                    {item.sub}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Site Validation Criteria */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
                How We Validate
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
                Five Criteria Decide Every Site
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                A site is only build-ready when power, planning, connectivity, water and safety
                all clear. We validate each one with utilities, authorities and field work before
                you commit capital, so the build starts ready, not waiting.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="border border-silver-steel/10 bg-tile-bg/80 backdrop-blur-sm relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)' }}
                />
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-silver-steel/10">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                    Site Validation Criteria
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.15em] text-emerald-500">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="divide-y divide-silver-steel/10">
                  {criteriaItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.name} className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={15} className="text-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm text-optical-white mb-0.5">{item.name}</div>
                          <div className="font-mono text-[9px] sm:text-[10px] text-accent-muted leading-snug">{item.desc}</div>
                        </div>
                        <span className="flex items-center gap-1 font-mono text-[7px] sm:text-[8px] tracking-[0.12em] sm:tracking-[0.15em] text-emerald-500 flex-shrink-0">
                          <Check size={10} />
                          <span className="hidden sm:inline">VERIFIED</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-12"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              What We Deliver
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              Full-Lifecycle Infrastructure Consulting
            </h2>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              From site selection to ongoing maintenance, we are your single point of accountability
              for mission-critical facilities.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-silver-steel/20 p-6 sm:p-8 hover:border-gold transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-optical-white mb-4 tracking-tight">
                  {capability.title}
                </h3>
                <p className="text-sm text-accent-muted leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="space-y-4">
                  {capability.services.map((service) => (
                    <div key={service.category}>
                      <span className="text-xs font-mono text-gold uppercase tracking-wider">
                        {service.category}:
                      </span>
                      <p className="text-xs text-accent-muted mt-1">{service.items}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
              Common Questions
            </h2>
          </motion.div>
          <div className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="py-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-optical-white tracking-tight mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-accent-muted leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Engage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Deploy with Velocity
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              If you are scaling compute, securing sites or engineering advanced facilities,
              engage our consulting team to compress your timeline and protect your capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
              >
                INITIATE STRATEGIC ENGAGEMENT
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-silver-steel/30 text-optical-white text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
              >
                INFRASTRUCTURE INSIGHTS →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default IndustryCriticalInfrastructure;
