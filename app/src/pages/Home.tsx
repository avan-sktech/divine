import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Target, ShieldCheck, Network, Layers, Rocket, GitMerge,
  ShoppingBag, Factory, Home as HomeIcon, Check,
} from 'lucide-react';

const capabilities = [
  {
    number: '01',
    title: 'Market-entry strategy',
    description: 'Where to play and how to win: target customer, positioning, addressable market and the fastest legal route to volume.',
    icon: Target,
    link: null,
  },
  {
    number: '02',
    title: 'Regulatory & compliance pathway',
    description: 'Homologation, standards, approvals and registration mapped and coordinated with qualified Australian specialists.',
    icon: ShieldCheck,
    link: null,
  },
  {
    number: '03',
    title: 'Distribution & channel design',
    description: 'One accountable national backbone, partner sourcing, due diligence and agreements that prevent channel failure.',
    icon: Network,
    link: null,
  },
  {
    number: '04',
    title: 'Product-to-market (CPPD)',
    description: 'Concurrent product, process and service design so local market realities are built into the specification, not discovered after launch.',
    icon: Layers,
    link: '/capabilities/concurrent-product-process-design',
  },
  {
    number: '05',
    title: 'Launch & demand generation',
    description: 'Controlled pilots, trial-to-deposit conversion and measured demand before national inventory and spend.',
    icon: Rocket,
    link: null,
  },
  {
    number: '06',
    title: 'Programme integration',
    description: 'A single accountable programme that keeps scope, claims, cost and unresolved risk visible to the board throughout.',
    icon: GitMerge,
    link: null,
  },
];

const approachSteps = [
  {
    number: '01',
    title: 'Diagnose & position',
    description: 'Product reality check, target customer, positioning and the fastest defensible route to market.',
    tag: 'DIVINELAB OWNS',
    active: true,
  },
  {
    number: '02',
    title: 'Specification & compliance',
    description: 'Australian specification, evidence register and homologation scope, coordinated with specialists.',
    tag: 'DIVINELAB OWNS',
    active: true,
  },
  {
    number: '03',
    title: 'Distribution & partners',
    description: 'Partner sourcing, due diligence, channel economics and agreements to a signed, accountable distributor.',
    tag: 'DIVINELAB OWNS',
    active: true,
  },
  {
    number: '04',
    title: 'Go-to-market & demand',
    description: 'Trial, affiliate and scale phases, each with a defined audience, channel and measurable outcome.',
    tag: 'DIVINELAB OWNS',
    active: true,
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Controlled pilots and first compliant sales, once product, service and channel operate together.',
    tag: 'SHARED WITH CLIENT',
    active: false,
  },
  {
    number: '06',
    title: 'Scale',
    description: 'National rollout, demand generation and continuous optimisation for growth.',
    tag: 'CLIENT / PARTNERS',
    active: false,
  },
];

const industries = [
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Retailers and wholesalers scaling a range in Australia',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Manufacturers bringing a new product to market',
  },
  {
    icon: HomeIcon,
    title: 'Sustainable & 3D homes',
    description: 'Sustainable and 3D-printed homes, from concept to market',
  },
];

const whyItems = [
  {
    number: '01',
    title: 'One accountable programme',
    description: 'Specification, approval, warranty, service, channel and launch, aligned in one place rather than across four advisers.',
  },
  {
    number: '02',
    title: 'Evidence discipline',
    description: 'Assumptions become written quotes, test records, named owners and issue registers the board can rely on.',
  },
  {
    number: '03',
    title: 'Australian market fluency',
    description: 'Operator-level knowledge of regulation, distribution, consumer law and how launches actually work here.',
  },
  {
    number: '04',
    title: 'Concurrent product & process design',
    description: 'Led by experienced CPPD practitioners, so market realities shape the product before launch, not after.',
  },
];

const clientLogos = [
  { name: 'Natridy', src: '/images/clients/natridy.png', href: 'https://www.natridy.com/' },
  { name: 'Samaria Australia', src: '/images/clients/samaria.png', href: 'https://samaria.com.au/' },
];

// One half of the marquee strip; the strip is rendered twice and the
// animation translates -50%, so the loop is seamless
const clientStrip = Array.from({ length: 4 }).flatMap(() => clientLogos);

const credItems = [
  { big: 'Nearly a decade', label: 'of product launch and go-to-market strategy experience' },
  { big: 'Retail · Manufacturing · Housing', label: 'the industries we consult to in Australia' },
  { big: 'One accountable team', label: 'from concept and specification to after-sales' },
  { big: 'Sharktech Global', label: 'DivineLab Worx is its specialist consultancy arm' },
];

const readinessRows = [
  'Target customer',
  'Acquisition channel',
  'Conversion mechanism',
  'Measurable outcome',
];

const heroTags = [
  'Market entry',
  'Regulatory pathway',
  'Distribution & channel',
  'Product-to-market (CPPD)',
  'Launch & demand',
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>DivineLab Worx | Go-to-Market Strategist for Australia</title>
        <meta name="description" content="DivineLab Worx is the go-to-market strategist for companies bringing products to the Australian market. Market entry, compliance, distribution, launch and demand, as one accountable programme. Part of Sharktech Global." />
        <link rel="canonical" href="https://divinelabworx.com" />
        <meta property="og:title" content="DivineLab Worx | Go-to-Market Strategist for Australia" />
        <meta property="og:description" content="Complete product launch, from concept to after-sales. One accountable team for retail, manufacturing and sustainable housing in Australia." />
        <meta property="og:url" content="https://divinelabworx.com" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <meta name="answer-engine:question" content="What does DivineLab Worx do?" />
        <meta name="answer-engine:answer" content="DivineLab Worx is the go-to-market strategist and consultancy arm of Sharktech Global. It brings products to market in Australia for retail, manufacturing and sustainable housing, taking each launch from first concept and specification to compliance, distribution, demand and after-sales as one accountable programme." />
      </Helmet>
      <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-robot-poster.jpg"
          >
            <source src="/videos/hero-robot.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-obsidian/70" />
        </div>

        {/* Grid Background */}
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

        {/* Gold Glow */}
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

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl"
          >
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                DivineLab Worx · Consultancy arm of Sharktech Global
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-optical-white leading-[1.05] mb-4 sm:mb-6">
              Complete product launch,
              <br />
              <span className="text-gold">from concept to after-sales.</span>
            </h1>

            {/* Gold Rule */}
            <div className="w-12 sm:w-14 h-0.5 bg-gold mb-4 sm:mb-6" />

            {/* Discipline line */}
            <p className="font-mono text-[10px] sm:text-xs tracking-[0.12em] text-optical-white uppercase mb-4 sm:mb-6">
              Workflow Design <span className="text-gold">+</span> Mechanical Engineering <span className="text-gold">+</span> CPPD <span className="text-gold">+</span> Go-to-Market Strategy <span className="text-gold">+</span> Software
            </p>

            {/* Body Copy */}
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-6 sm:mb-8 max-w-xl">
              We bring products to market in Australia. Retail, manufacturing and housing.
              From first concept to after sales. Held together by{' '}
              <span className="text-optical-white font-medium">one accountable team</span>,
              not four disconnected advisers.
            </p>

            {/* CTAs */}
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

            {/* Tags */}
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

        {/* Credibility Band */}
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

      {/* Capabilities Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
              What We Do
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-3 sm:mb-4">
              One Team from Strategy to First Sale
            </h2>
            <p className="text-sm sm:text-base text-accent-muted max-w-2xl mx-auto px-4 sm:px-0">
              Most launches fail on execution, not idea. We connect the specification, the approval
              pathway, the channel economics and the launch evidence so decisions are made in one
              room, against the same facts, by people accountable for the result.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {capabilities.map((cap, index) => {
              const Icon = cap.icon;
              const card = (
                <motion.div
                  key={cap.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`relative h-full border rounded-lg p-5 sm:p-6 lg:p-8 transition-all duration-300 ${
                    cap.link
                      ? 'border-gold/50 bg-obsidian/50 hover:border-gold'
                      : 'border-silver-steel/10 bg-obsidian/30 hover:border-gold/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gold/20">
                      {cap.number}
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg border border-gold/50 text-gold flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 sm:mb-3 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent-muted leading-relaxed">
                    {cap.description}
                  </p>
                  {cap.link && (
                    <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono tracking-widest text-gold">
                      EXPLORE CPPD
                      <ArrowRight size={12} />
                    </span>
                  )}
                </motion.div>
              );
              return cap.link ? (
                <Link key={cap.number} to={cap.link} className="block h-full">
                  {card}
                </Link>
              ) : (
                card
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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

      {/* Clients Slider */}
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
            {/* Edge fades */}
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

      {/* Approach Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
              Our Approach
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-3 sm:mb-4">
              The Market-Entry Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-accent-muted max-w-2xl mx-auto px-4 sm:px-0">
              We compress the critical path so the launch starts ready, not waiting. We own the
              strategy, evidence and channel work. You and your partners own manufacture, sale and scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {approachSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative border rounded-lg p-5 sm:p-6 lg:p-8 transition-all duration-300 ${
                  step.active
                    ? 'border-gold/50 bg-obsidian/50 hover:border-gold'
                    : 'border-silver-steel/10 bg-obsidian/30 opacity-70'
                }`}
              >
                <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold block mb-4 sm:mb-6 ${
                  step.active ? 'text-gold/20' : 'text-silver-steel/10'
                }`}>
                  {step.number}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 sm:mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-accent-muted leading-relaxed mb-4 sm:mb-6">
                  {step.description}
                </p>
                <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider ${
                  step.active
                    ? 'bg-gold/20 text-gold border border-gold/30'
                    : 'bg-silver-steel/10 text-silver-steel border border-silver-steel/20'
                }`}>
                  <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-current" />
                  {step.tag}
                </div>
                {step.active && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-silver-steel/10"
          >
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 sm:w-8 h-1 bg-gold rounded-full" />
                <span className="text-accent-muted">DivineLab Worx owns this</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 sm:w-8 h-1 bg-silver-steel/30 rounded-full" />
                <span className="text-accent-muted">Client / partners</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
              Who We Work With
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-3 sm:mb-4">
              We Consult to Retail, Manufacturing and Housing
            </h2>
            <p className="text-sm sm:text-base text-accent-muted max-w-2xl mx-auto px-4 sm:px-0">
              We work with retailers, manufacturers and homebuilders, turning a product, a range or
              a build system into compliance, distribution, demand and revenue in the Australian market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to="/industries"
                    className="flex items-start gap-4 border border-silver-steel/10 rounded-lg p-5 sm:p-6 bg-obsidian/30 hover:border-gold/50 transition-all duration-300 h-full"
                  >
                    <div className="w-10 h-10 rounded-lg border border-gold/50 text-gold flex items-center justify-center flex-shrink-0">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="flex items-center gap-2 text-base font-semibold text-optical-white tracking-tight">
                        {industry.title}
                        <ArrowRight size={14} className="text-gold" />
                      </span>
                      <span className="block text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed">
                        {industry.description}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
                Why DivineLab Worx
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-optical-white mb-3 sm:mb-4">
                The Enabler and the Integrator
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-8">
                A product without distribution is a liability. We exist to remove the friction
                between a good product and a paying market, and to keep the whole launch
                accountable to one team.
              </p>
              <ul className="divide-y divide-silver-steel/10">
                {whyItems.map((item) => (
                  <li key={item.number} className="flex gap-4 py-4">
                    <span className="font-mono text-sm text-gold font-semibold min-w-[32px]">
                      {item.number}
                    </span>
                    <div>
                      <span className="block text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed">
                        {item.description}
                        {item.number === '04' && (
                          <>
                            {' '}
                            <Link
                              to="/capabilities/concurrent-product-process-design"
                              className="text-gold hover:text-gold-light transition-colors"
                            >
                              Explore CPPD →
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Engagement Readiness Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:sticky lg:top-32"
            >
              <div className="border border-silver-steel/10 bg-tile-bg/80 backdrop-blur-sm relative overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)' }}
                />
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-silver-steel/10">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                    Engagement Readiness
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.15em] text-emerald-500">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>
                <div className="divide-y divide-silver-steel/10">
                  {readinessRows.map((row) => (
                    <div key={row} className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4">
                      <span className="text-sm font-semibold text-optical-white">{row}</span>
                      <span className="flex items-center gap-1 font-mono text-[8px] sm:text-[9px] tracking-[0.15em] text-emerald-500">
                        <Check size={10} />
                        DEFINED
                      </span>
                    </div>
                  ))}
                </div>
                <p className="px-4 sm:px-6 py-4 text-xs sm:text-[13px] text-accent-muted leading-relaxed border-t border-silver-steel/10">
                  No initiative is complete unless it defines a target customer, an acquisition
                  channel, a conversion mechanism and a measurable outcome. If one is missing,
                  the work goes back for refinement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
              Engage
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-4 sm:mb-6">
              Bring Your Product to Market with One Accountable Team
            </h2>
            <p className="text-sm sm:text-base text-accent-muted mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              If you are launching a new product, growing a retail range, entering the Australian
              market or building sustainable homes, engage our strategists to compress the critical
              path and protect your capital.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
              >
                INITIATE STRATEGIC ENGAGEMENT
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border border-silver-steel/30 text-optical-white text-xs sm:text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
              >
                WHAT WE DO
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
