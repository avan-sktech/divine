import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Factory, Home as HomeIcon, Server } from 'lucide-react';
import { capabilities, governance, workstreams, gates, homeFaqs } from '../data/capabilities';
import { blogPosts } from './Blog';
import StrategyFilmstrip from '../components/StrategyFilmstrip';
import EditorialVideo from '../components/EditorialVideo';

const industries = [
  {
    icon: ShoppingBag,
    code: 'RTL',
    title: 'Retail',
    description: 'Launch new ranges, improve channel economics and find more revenue in the customer base already earned.',
    image: '/images/retail-deployment.jpg',
    link: '/industries#retail',
  },
  {
    icon: Factory,
    code: 'MFG',
    title: 'Manufacturing',
    description: 'Commercialise new equipment, improve asset utilisation and turn technical capability into market demand.',
    image: '/images/manufacturing-automation.jpg',
    link: '/industries#manufacturing',
  },
  {
    icon: HomeIcon,
    code: 'BLD',
    title: 'Sustainable and 3D homes',
    description: 'Align approvals, build systems, pilots, buyer confidence and repeatable delivery for modern construction.',
    image: '/images/construction-night.jpg',
    link: '/industries#sustainable-homes',
  },
  {
    icon: Server,
    code: 'INF',
    title: 'Critical infrastructure',
    description: 'Build the site, stakeholder and delivery evidence required for complex infrastructure investment.',
    image: '/images/data-center.jpg',
    link: '/industries/critical-infrastructure',
  },
];

const paths = [
  {
    number: 'PATH / 01',
    title: 'Launch something new.',
    description: 'Define the customer, commercial model and proof required before a major launch commitment.',
    image: '/images/editorial/commercial-analysis.webp',
    imageAlt: 'Commercial evidence under review before a new market decision',
    link: '/capabilities',
    linkLabel: 'EXPLORE LAUNCH CAPABILITY',
  },
  {
    number: 'PATH / 02',
    title: 'Grow what already works.',
    description: 'Turn existing customers, assets, channels and capabilities into the next revenue move.',
    image: '/images/editorial/team-collaboration.webp',
    imageAlt: 'Business team identifying growth opportunities within existing capacity',
    link: '/capabilities/capital-efficient-growth',
    linkLabel: 'EXPLORE CAPITAL-EFFICIENT GROWTH',
  },
];

const proofPoints = [
  { code: 'DLW', label: 'Strategy and commercial direction' },
  { code: 'STG', label: 'Technology and delivery capability' },
  { code: 'INTL', label: 'Cross-market decision support' },
  { code: '01', label: 'Accountable engagement' },
];

const credItems = [
  { big: 'Nearly a decade', label: 'of product launch and go-to-market strategy experience' },
  { big: 'Retail · Manufacturing · Housing · Infrastructure', label: 'the industries we consult to in Australia' },
  { big: 'One accountable team', label: 'from concept and specification to after-sales' },
  { big: 'Sharktech Global', label: 'Divine Lab Worx is its specialist consultancy arm' },
];

const heroTags = [
  'Market Entry',
  'Regulatory Pathway',
  'Distribution & Channel',
  'Product-to-Market (CPPD)',
  'Launch & Demand',
  'Critical Infrastructure',
  'AI Advisory',
];

const clientLogos = [
  { name: 'Natridy', src: '/images/clients/natridy.png', href: 'https://www.natridy.com/' },
  { name: 'Samaria Australia', src: '/images/clients/samaria.png', href: 'https://samaria.com.au/' },
];

// The strip is rendered twice and the marquee translates -50%, so the loop is seamless
const clientStrip = Array.from({ length: 4 }).flatMap(() => clientLogos);

const latestInsights = [...blogPosts]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Divine Lab Worx | Product Launch and Go-to-Market Strategy</title>
        <meta name="description" content="Divine Lab Worx turns strategy into market action. Product launch, market entry, compliance, channel, AI advisory and critical infrastructure, as one accountable team." />
        <link rel="canonical" href="https://divinelabworx.com" />
        <meta property="og:title" content="Divine Lab Worx | From Concept to After-Sales" />
        <meta property="og:description" content="Strategy, engineering and market action in one accountable team. Retail, manufacturing, sustainable housing and critical infrastructure in Australia." />
        <meta property="og:url" content="https://divinelabworx.com" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <meta name="answer-engine:question" content="What does Divine Lab Worx do?" />
        <meta name="answer-engine:answer" content="Divine Lab Worx turns a complex growth decision into market evidence, clear choices and accountable action. We take a product, a range, a build system or a facility from first concept and specification through compliance, distribution, demand and after-sales, as one accountable team." />
        <script type="application/ld+json">{JSON.stringify(homeJsonLd)}</script>
      </Helmet>

      <div className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover motion-reduce:hidden"
              poster="/images/hero-robot-poster.jpg"
            >
              <source src="/videos/hero-robot.mp4" type="video/mp4" />
            </video>
            {/* Static fallback for reduced motion and low bandwidth */}
            <img
              src="/images/hero-robot-poster.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover hidden motion-reduce:block absolute inset-0"
            />
            <div className="absolute inset-0 bg-obsidian/70" />
          </div>

          {/* Technical grid */}
          <div
            className="absolute inset-0 z-0 pointer-events-none hidden sm:block"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(228, 228, 231, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(228, 228, 231, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse 70% 80% at 60% 50%, rgba(0,0,0,0.6) 0%, transparent 80%)',
            }}
          />
          <div
            className="absolute z-0 pointer-events-none"
            style={{
              right: '-50px',
              top: '30%',
              transform: 'translateY(-50%)',
              width: 'clamp(300px, 50vw, 700px)',
              height: 'clamp(300px, 50vw, 700px)',
              background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                  Divine Lab Worx · Consultancy arm of Sharktech Global
                </span>
              </div>

              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-optical-white leading-[1.06] mb-4 sm:mb-6">
                From concept to after-sales.
                <br />
                <span className="text-gold">Strategy, engineering and market action</span>
                <br />
                in one accountable team.
              </h1>

              <div className="w-12 sm:w-14 h-0.5 bg-gold mb-4 sm:mb-6" />

              <p className="font-mono text-[10px] sm:text-xs tracking-[0.12em] text-optical-white uppercase mb-4 sm:mb-6">
                Workflow Design <span className="text-gold">+</span> Mechanical Engineering <span className="text-gold">+</span> CPPD <span className="text-gold">+</span> Go-to-Market Strategy <span className="text-gold">+</span> Software
              </p>

              <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-6 sm:mb-8 max-w-xl">
                We bring products, systems and facilities to market in Australia. Retail,
                manufacturing, housing and critical infrastructure. Held together by{' '}
                <span className="text-optical-white font-medium">one accountable team</span>,
                not four disconnected advisers.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
                >
                  Engage Our Strategists
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/capabilities"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 border border-silver-steel/30 text-optical-white text-xs sm:text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
                >
                  What We Do →
                </Link>
              </div>

              {/* Outlined service tags */}
              <div className="flex flex-wrap gap-2.5 mt-8 sm:mt-10">
                {heroTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-accent-muted border border-silver-steel/20 rounded-full px-3.5 py-1.5 bg-optical-white/[0.02]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Credibility band */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-10 border-t border-silver-steel/10 bg-obsidian/50 backdrop-blur-sm mt-auto"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-silver-steel/10 sm:divide-x">
              {credItems.map((item) => (
                <div key={item.big} className="px-6 py-5 sm:py-6">
                  <div className="text-base sm:text-lg font-semibold tracking-tight text-optical-white">
                    {item.big}
                  </div>
                  <div className="text-xs sm:text-[13px] text-accent-muted mt-1.5 leading-snug">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Direct answer */}
        <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-3 block">
                Direct answer
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-optical-white">
                What does Divine Lab Worx do?
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm sm:text-base text-accent-muted leading-relaxed"
            >
              Divine Lab Worx turns a complex growth decision into market evidence, clear choices
              and accountable action. We take a product, a range, a build system or a facility from
              first concept and specification through compliance, distribution, demand and
              after-sales, across Australia and international markets.
            </motion.p>
          </div>
        </section>

        {/* Strategy in motion: chessboard filmstrip */}
        <StrategyFilmstrip />

        {/* Client slider */}
        <section className="py-12 sm:py-16 border-t border-silver-steel/10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-8 sm:mb-10 block text-center px-4">
              Some of Our Clients
            </span>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-obsidian to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-obsidian to-transparent" />
              <div className="flex w-max animate-marquee">
                {[0, 1].map((half) => (
                  <div key={half} className="flex items-center" aria-hidden={half === 1}>
                    {clientStrip.map((client, index) => (
                      <a
                        key={`${half}-${index}`}
                        href={client.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={half === 1 ? -1 : undefined}
                        className="flex items-center px-10 sm:px-16 flex-shrink-0"
                        title={client.name}
                      >
                        <img
                          src={client.src}
                          alt={client.name}
                          loading="lazy"
                          className="h-9 sm:h-11 w-auto object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity duration-300"
                        />
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Methodology bridge */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-3 block">
                The DivineLab Concurrent Method
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-4">
                Strategy and delivery designed as one system.
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-6">
                Five workstreams mature together. Evidence controls when the next commercial
                commitment is safe to make.
              </p>
              <Link
                to="/methodology"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold hover:text-gold-light transition-colors"
              >
                EXPLORE OUR METHODOLOGY
                <ArrowRight size={13} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="border border-silver-steel/10 bg-tile-bg/60 p-6 sm:p-8"
              aria-label="Five concurrent workstreams across six evidence gates"
            >
              {workstreams.map((track) => (
                <div key={track} className="flex items-center gap-3 mb-2.5">
                  <span className="font-mono text-[10px] tracking-wider text-accent-muted uppercase w-20 sm:w-24 flex-shrink-0">
                    {track}
                  </span>
                  <div className="flex gap-1.5 flex-1">
                    {gates.map((gate) => (
                      <span
                        key={gate}
                        title={`${track}: ${gate}`}
                        className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-gold/50 to-gold/15"
                      />
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-silver-steel/10">
                <span className="w-20 sm:w-24 flex-shrink-0" />
                <div className="flex gap-1.5 flex-1">
                  {gates.map((gate) => (
                    <span
                      key={gate}
                      className="flex-1 font-mono text-[8px] sm:text-[10px] tracking-wider text-gold uppercase text-center"
                    >
                      {gate}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Two paths to revenue */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Two paths to revenue
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Build the new. Unlock the existing.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Different growth problems need different starting points. Both paths end with a
                clear customer, a credible route to market and measurable commercial evidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {paths.map((path, i) => (
                <motion.article
                  key={path.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-silver-steel/15 bg-obsidian/40 overflow-hidden hover:border-gold/50 transition-colors duration-300 flex flex-col"
                >
                  <figure className="relative h-44 sm:h-52 overflow-hidden">
                    <img
                      src={path.image}
                      alt={path.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.2em] text-gold uppercase">
                      {path.number}
                    </span>
                  </figure>
                  <div className="p-6 sm:p-8 flex flex-col flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-optical-white tracking-tight mb-2">
                      {path.title}
                    </h3>
                    <p className="text-sm text-accent-muted leading-relaxed mb-5 flex-1">
                      {path.description}
                    </p>
                    <Link
                      to={path.link}
                      className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold hover:text-gold-light transition-colors"
                    >
                      {path.linkLabel}
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Capability mosaic */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Complete capability
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Eight moves. One commercial system.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Start with one decision. Keep the whole route to market in view.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                  className={cap.image ? 'sm:col-span-1' : ''}
                >
                  <Link
                    to={cap.href}
                    className="group relative block h-full min-h-[210px] border border-silver-steel/15 bg-obsidian/40 overflow-hidden hover:border-gold transition-colors duration-300"
                    aria-label={`Explore ${cap.title}`}
                  >
                    {cap.image && (
                      <>
                        {cap.video ? (
                          <EditorialVideo
                            src={cap.video}
                            poster={cap.image}
                            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-55 transition-opacity duration-500"
                          />
                        ) : (
                          <img
                            src={cap.image}
                            alt=""
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-50 transition-opacity duration-500"
                          />
                        )}
                        <span className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/40" />
                      </>
                    )}
                    <div className="relative h-full p-5 sm:p-6 flex flex-col">
                      <span className="font-mono text-xs text-gold font-semibold tracking-widest">
                        {cap.number}
                      </span>
                      <h3 className="text-base font-semibold text-optical-white tracking-tight mt-3 mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-xs text-accent-muted leading-relaxed flex-1">
                        {cap.brief}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-mono tracking-widest text-accent-muted group-hover:text-gold transition-colors">
                        VIEW CAPABILITY
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 text-center"
            >
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                VIEW ALL CAPABILITIES
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Where we work
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Markets where execution matters.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                We work where regulation, physical delivery, channel design and buyer confidence
                have to move together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {industries.map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <motion.article
                    key={industry.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    <Link
                      to={industry.link}
                      className="group block h-full border border-silver-steel/15 bg-obsidian/30 overflow-hidden hover:border-gold/60 transition-colors duration-300"
                    >
                      <figure className="relative h-32 sm:h-36 overflow-hidden">
                        <img
                          src={industry.image}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover opacity-45 group-hover:opacity-65 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian to-transparent" />
                        <div className="absolute bottom-3 left-4 flex items-center gap-2">
                          <Icon size={15} className="text-gold" />
                          <span className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase">
                            {industry.code} / INTL
                          </span>
                        </div>
                      </figure>
                      <div className="p-5">
                        <h3 className="text-base font-semibold text-optical-white tracking-tight mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-xs text-accent-muted leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Governed by evidence */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Governed by evidence
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Every move answers four questions.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                This keeps decisions close to the customer and makes progress visible before more
                capital or effort is released.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {governance.map((item, i) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative border border-silver-steel/15 bg-obsidian/30 p-6 hover:border-gold/50 transition-colors duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/60 to-transparent" />
                  <span className="text-2xl font-bold text-gold/25 block mb-3">{item.number}</span>
                  <h3 className="text-base font-semibold text-optical-white tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-accent-muted leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Credibility / proof */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Credibility in the room
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Independent thinking. Delivery connected.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Divine Lab Worx is the consultancy division of Sharktech Global, led by strategist
                Dainu Devis and informed by expert work through the Guidepoint network.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-silver-steel/10 border border-silver-steel/10">
              {proofPoints.map((point) => (
                <div key={point.code} className="px-5 py-6 sm:px-6 sm:py-7">
                  <strong className="block text-xl sm:text-2xl font-semibold text-gold tracking-tight mb-1.5">
                    {point.code}
                  </strong>
                  <span className="text-xs text-accent-muted leading-snug">{point.label}</span>
                </div>
              ))}
            </div>

            {/* Advised by */}
            <div className="mt-10 pt-8 border-t border-silver-steel/10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase">
                Advised By
              </span>
              <a
                href="https://www.guidepoint.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Guidepoint"
              >
                <img
                  src="/images/partners/guidepoint.svg"
                  alt="Guidepoint"
                  loading="lazy"
                  className="h-6 sm:h-7 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <p className="text-xs sm:text-[13px] text-accent-muted leading-relaxed max-w-md">
                Our market evidence is strengthened by Guidepoint&apos;s global expert network.
              </p>
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-end mb-10"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                  Continue the thinking
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
                  Insight applied to real commercial decisions.
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Practical perspectives on market entry, product launch, growth and infrastructure
                decision-making.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {latestInsights.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="border border-silver-steel/15 h-full flex flex-col hover:border-gold transition-colors duration-300 overflow-hidden bg-obsidian/30">
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <img
                          src={post.image}
                          alt=""
                          loading="lazy"
                          className="w-full h-full object-cover opacity-55 group-hover:opacity-75 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                      </div>
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <span className="font-mono text-[9px] tracking-[0.2em] text-gold uppercase mb-3">
                          {String(i + 1).padStart(2, '0')} / {post.category}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold text-optical-white tracking-tight mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-accent-muted leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-1.5 mt-4 text-[10px] font-mono tracking-widest text-accent-muted group-hover:text-gold transition-colors">
                          READ INSIGHT
                          <ArrowRight size={11} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-accent-muted hover:text-gold transition-colors"
              >
                VIEW ALL INSIGHTS
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
                Common questions.
              </h2>
            </motion.div>
            <div className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
              {homeFaqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
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
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-4 block">
                Start with the decision
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-5">
                Launch the new or unlock the growth already there.
              </h2>
              <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Tell us where the business is now, what has to change and which commercial decision
                is next.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
                >
                  ENGAGE OUR STRATEGISTS
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/methodology"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-silver-steel/30 text-optical-white text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
                >
                  SEE HOW WE WORK
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
