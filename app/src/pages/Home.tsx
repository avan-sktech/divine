import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, MapPin, Zap, Shield, Hammer, ZapOff, Activity, Check,
  Plug, ClipboardCheck, Globe, Droplets, ShieldCheck,
  Server, Cpu, Microchip, Sparkles
} from 'lucide-react';

const workflowSteps = [
  {
    number: '01',
    title: 'Site Intelligence',
    description: 'Identify, validate and secure land with power proximity, zoning clearance, fibre path and water access.',
    icon: MapPin,
    tag: 'WE OWN THIS',
    active: true,
  },
  {
    number: '02',
    title: 'Power & Utility',
    description: 'Heavy utility interface. Substation design, grid connection, medium voltage delivery to your boundary.',
    icon: Zap,
    tag: 'WE OWN THIS',
    active: true,
  },
  {
    number: '03',
    title: 'Permits & Safety',
    description: 'Planning approvals, WHS compliance and industrial safety automation, cleared before you break ground.',
    icon: Shield,
    tag: 'WE OWN THIS',
    active: true,
  },
  {
    number: '04',
    title: 'Build',
    description: 'Civil, structural and MEP construction, accelerated because Phases 1 through 3 are already resolved.',
    icon: Hammer,
    tag: 'YOU / YOUR EPC',
    active: false,
  },
  {
    number: '05',
    title: 'Energise',
    description: 'Grid-connected, commissioned and ready for tenant fit-out and IT load.',
    icon: ZapOff,
    tag: 'YOU / YOUR EPC',
    active: false,
  },
  {
    number: '06',
    title: 'Operate & Scale',
    description: 'Live facility management, capacity planning and continuous optimisation for growth.',
    icon: Activity,
    tag: 'YOU / YOUR EPC',
    active: false,
  },
];

const criteriaItems = [
  {
    Icon: Plug,
    name: 'Power Proximity',
    desc: 'Grid access, substation distance & MW capacity',
  },
  {
    Icon: ClipboardCheck,
    name: 'Zoning Clearance',
    desc: 'Planning approvals & industrial land classification',
  },
  {
    Icon: Globe,
    name: 'Fibre Path',
    desc: 'Dark fibre routes & latency to exchange points',
  },
  {
    Icon: Droplets,
    name: 'Water Access',
    desc: 'Cooling supply, wastewater rights & flow rates',
  },
  {
    Icon: ShieldCheck,
    name: 'WHS Compliance',
    desc: 'Industrial safety & construction regulatory readiness',
  },
];

const focusItems = [
  {
    Icon: Server,
    title: 'Hyperscale Data Centres',
    sub: 'Large-scale compute & colocation',
  },
  {
    Icon: Cpu,
    title: 'Supercomputers & AI Factories',
    sub: 'Sovereign AI, GPU clusters & HPC',
  },
  {
    Icon: Microchip,
    title: 'Semiconductor Fabs',
    sub: 'Advanced chip manufacturing',
  },
  {
    Icon: Sparkles,
    title: 'Advanced Cleanrooms',
    sub: 'Precision-controlled environments',
  },
];

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative min-h-[100svh] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/images/hero-infrastructure.jpg"
          >
            <source src="/videos/hero-bg.mov" type="video/quicktime" />
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-obsidian/75" />
        </div>

        {/* Grid Background - Hidden on mobile for performance */}
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
        
        {/* Gold Glow - Smaller on mobile */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start lg:items-center">
            
            {/* Left Column - Headline & Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-xl"
            >
              {/* Kicker */}
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                  Australian Site Intelligence Consultancy
                </span>
              </div>

              {/* Headline - Responsive sizes */}
              <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[52px] font-semibold tracking-tight text-optical-white leading-[1.05] mb-4 sm:mb-6">
                We Find Where
                <br />
                <span className="text-gold">Critical Infrastructure</span>
                <br />
                Belongs.
              </h1>

              {/* Gold Rule */}
              <div className="w-12 sm:w-14 h-0.5 bg-gold mb-4 sm:mb-6" />

              {/* Body Copy */}
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed mb-6 sm:mb-8 max-w-md">
                Divine Lab Worx is Australia&apos;s specialist infrastructure consultancy — identifying and validating locations for mission-critical facilities, then staying with you through permits, power, and project management until your site is build-ready. As sovereign AI factories, hyperscale data centres, and semiconductor fabs race to deploy, the bottleneck is no longer capital — it&apos;s{' '}
                <span className="text-optical-white font-medium">the right site, secured fast</span>.
                That&apos;s exactly what we deliver.
              </p>

              {/* CTAs - Stack on very small screens */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
                >
                  Engage Our Consultants
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 border border-silver-steel/30 text-optical-white text-xs sm:text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto"
                >
                  What We Do →
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Criteria Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:pl-8 mt-4 lg:mt-0"
            >
              <div className="border border-silver-steel/10 bg-tile-bg/80 backdrop-blur-sm relative overflow-hidden">
                {/* Top Gold Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{
                    background: 'linear-gradient(90deg, #D4AF37 0%, transparent 100%)',
                  }}
                />
                
                {/* Card Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 border-b border-silver-steel/10">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] text-gold uppercase">
                    Site Validation Criteria
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] sm:text-[9px] tracking-[0.12em] sm:tracking-[0.15em] text-emerald-500">
                    <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Criteria List */}
                <div className="divide-y divide-silver-steel/10">
                  {criteriaItems.map((item, index) => {
                      const CriteriaIcon = item.Icon;
                      return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                      className="flex items-start gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 hover:bg-gold/5 transition-colors"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                        <CriteriaIcon size={14} className="text-gold sm:hidden" />
                        <CriteriaIcon size={16} className="text-gold hidden sm:block" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-optical-white mb-0.5">
                          {item.name}
                        </div>
                        <div className="font-mono text-[9px] sm:text-[10px] text-accent-muted leading-snug">
                          {item.desc}
                        </div>
                      </div>
                      <span className="flex items-center gap-1 font-mono text-[7px] sm:text-[8px] tracking-[0.12em] sm:tracking-[0.15em] text-emerald-500 flex-shrink-0">
                        <Check size={9} className="sm:hidden" />
                        <Check size={10} className="hidden sm:block" />
                        <span className="hidden sm:inline">VERIFIED</span>
                      </span>
                    </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Focus Strip - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative z-10 border-t border-silver-steel/10 bg-obsidian/50 backdrop-blur-sm mt-auto"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex flex-col lg:flex-row">
              {/* Label */}
              <div className="flex items-center py-3 lg:py-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-silver-steel/10">
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] text-accent-muted uppercase whitespace-nowrap">
                  We consult to
                </span>
              </div>

              {/* Focus Items - 2 columns on mobile, 4 on desktop */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {focusItems.map((item, index) => {
                  const FocusIcon = item.Icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + index * 0.08 }}
                      className="flex items-center gap-3 px-3 sm:px-4 lg:px-6 py-3.5 sm:py-4 border-b sm:border-b-0 sm:border-r last:border-r-0 border-silver-steel/10 hover:bg-gold/5 transition-colors"
                    >
                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                        <FocusIcon size={16} className="text-gold sm:hidden" />
                        <FocusIcon size={18} className="text-gold hidden sm:block" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-semibold text-xs sm:text-sm text-optical-white leading-tight truncate">
                          {item.title}
                        </span>
                        <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.1em] sm:tracking-[0.12em] text-accent-muted truncate">
                          {item.sub}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Workflow Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 sm:mb-4 block">
              Our Process
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-3 sm:mb-4">
              The Deployment Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-accent-muted max-w-2xl mx-auto px-4 sm:px-0">
              We compress the critical path so your build starts ready, not waiting.
            </p>
          </motion.div>

          {/* Workflow Cards - Better spacing on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
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
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${
                      step.active ? 'text-gold/20' : 'text-silver-steel/10'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border flex items-center justify-center ${
                      step.active 
                        ? 'border-gold/50 text-gold' 
                        : 'border-silver-steel/20 text-silver-steel/50'
                    }`}>
                      <Icon size={18} className="sm:hidden" />
                      <Icon size={20} className="hidden sm:block" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 sm:mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-accent-muted leading-relaxed mb-4 sm:mb-6">
                    {step.description}
                  </p>

                  {/* Tag */}
                  <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-wider ${
                    step.active 
                      ? 'bg-gold/20 text-gold border border-gold/30' 
                      : 'bg-silver-steel/10 text-silver-steel border border-silver-steel/20'
                  }`}>
                    <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-current" />
                    {step.tag}
                  </div>

                  {/* Active Indicator Line */}
                  {step.active && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Legend */}
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
                <span className="text-accent-muted">Divine Lab Worx, fully managed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 sm:w-8 h-1 bg-silver-steel/30 rounded-full" />
                <span className="text-accent-muted">Client / EPC partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-optical-white mb-4 sm:mb-6">
              Deploy with Velocity
            </h2>
            <p className="text-sm sm:text-base text-accent-muted mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              We eliminate friction from the development of critical infrastructure. If you are scaling 
              compute, securing sites, or engineering advanced thermal architectures, engage our consulting 
              team to accelerate your timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto"
            >
              INITIATE STRATEGIC ENGAGEMENT
              <ArrowRight size={16} className="sm:hidden" />
              <ArrowRight size={18} className="hidden sm:block" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
