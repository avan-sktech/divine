import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Zap, Shield, Hammer, ZapOff } from 'lucide-react';

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
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-20 pb-12 sm:pb-0">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-optical-white mb-8 leading-tight">
              Divine Lab Worx: Engineering the Physical Layer of the Digital Economy
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base sm:text-lg text-accent-muted max-w-3xl mx-auto leading-relaxed mb-10">
              As the Australian infrastructure consulting arm of Sharktech Global, we provide a single point 
              of accountability for deploying mission-critical facilities. We design, site, and build hyperscale 
              data centres, semiconductor fabs, and advanced cleanrooms, turning complex capital projects into 
              operational, high-yield assets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-gold text-obsidian text-base font-semibold tracking-tight hover:bg-gold-light transition-colors min-h-[52px] shadow-lg shadow-gold/20"
            >
              ENGAGE DIVINE LAB WORX
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-4">
              The Deployment Lifecycle
            </h2>
            <p className="text-base text-accent-muted max-w-2xl mx-auto">
              We compress the critical path so your build starts ready, not waiting.
            </p>
          </motion.div>

          {/* Workflow Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative border rounded-lg p-6 sm:p-8 transition-all duration-300 ${
                    step.active 
                      ? 'border-gold/50 bg-obsidian/50 hover:border-gold' 
                      : 'border-silver-steel/10 bg-obsidian/30 opacity-70'
                  }`}
                >
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-4xl sm:text-5xl font-bold ${
                      step.active ? 'text-gold/20' : 'text-silver-steel/10'
                    }`}>
                      {step.number}
                    </span>
                    <div className={`w-12 h-12 rounded-lg border flex items-center justify-center ${
                      step.active 
                        ? 'border-gold/50 text-gold' 
                        : 'border-silver-steel/20 text-silver-steel/50'
                    }`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-optical-white mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-accent-muted leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Tag */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider ${
                    step.active 
                      ? 'bg-gold/20 text-gold border border-gold/30' 
                      : 'bg-silver-steel/10 text-silver-steel border border-silver-steel/20'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
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
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-silver-steel/10"
          >
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-gold rounded-full" />
                <span className="text-accent-muted">Divine Lab Worx, fully managed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-1 bg-silver-steel/30 rounded-full" />
                <span className="text-accent-muted">Client / EPC partner</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-6">
              Deploy with Velocity
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              We eliminate friction from the development of critical infrastructure. If you are scaling 
              compute, securing sites, or engineering advanced thermal architectures, engage our consulting 
              team to accelerate your timeline.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              INITIATE STRATEGIC ENGAGEMENT
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
