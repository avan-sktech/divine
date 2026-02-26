import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const capabilities = [
  {
    id: 'site-selection',
    title: 'Site Selection & Rapid Due Diligence',
    description: 'From single-site acquisitions to multi-node expansions across Australia, our due diligence is built for hyperscale velocity. We empower operators to make capital-efficient decisions that mitigate risk, guarantee business continuity, and accelerate time-to-market.',
    services: [
      { category: 'Desktop Services', items: 'Data room analysis, constraint mapping, and initial utility outreach (power, fiber, water).' },
      { category: 'Field Services', items: 'Topological due diligence, environmental impact, and surface water profiling.' },
      { category: 'Utility Forecasting', items: 'Comprehensive modeling of power load and water supply against forecasted capacity demands.' },
    ],
  },
  {
    id: 'power',
    title: 'Power & Energy Infrastructure',
    description: 'Power is the absolute bottleneck of digital infrastructure. We deliver high-availability, scalable energy solutions—from early-stage grid planning to full site energization—ensuring your facilities have the stranded capacity to grow.',
    services: [
      { category: 'Planning', items: 'Power system planning, high-voltage load forecasting, and utility coordination.' },
      { category: 'Design', items: 'Dedicated substation design and medium/high-voltage distribution networks.' },
      { category: 'Resilience', items: 'Redundancy modeling (concurrent maintainability, fault tolerance) and backup generation.' },
      { category: 'Sustainability', items: 'Renewable energy integration and sustainable portfolio sourcing.' },
    ],
  },
  {
    id: 'cooling',
    title: 'Advanced Liquid Cooling & Thermal Management',
    description: 'The next generation of AI workloads requires a fundamental shift in thermal architecture. We engineer advanced cooling topologies to support extreme-density racks and precision manufacturing environments.',
    services: [
      { category: 'Hyperscale Data Centres', items: 'Chilled water loop design, Coolant Distribution Unit (CDU) integration, and thermal optimization for high-density AI retrofits.' },
      { category: 'Cleanrooms', items: 'Process Cooling Water (PCW) systems, secondary loops, and strict controls for absolute purity.' },
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
    id: 'water',
    title: 'Water & Wastewater Engineering',
    description: 'We architect water infrastructure for extreme resilience and scale. Our systems optimize Water Usage Effectiveness (WUE) to ensure continuous facility uptime and strict environmental compliance.',
    services: [
      { category: 'Treatment', items: 'Advanced treatment, filtration, and municipal water reclamation.' },
      { category: 'Efficiency', items: 'Closed-loop and Zero-Liquid Discharge (ZLD) architectures.' },
      { category: 'Monitoring', items: 'Telemetry and digital tools for remote optimization and continuous leak detection.' },
    ],
  },
  {
    id: 'fiber',
    title: 'Fiber & Subsea Infrastructure',
    description: 'We engineer the digital backbone. Divine Lab Worx provides full-lifecycle advisory and design for the critical network pathways that connect hyperscale ecosystems with low-latency route diversity.',
    services: [
      { category: 'Execution', items: 'Route feasibility analysis, permitting, and shore landing execution.' },
      { category: 'Design', items: 'Cable station design and secure terrestrial fiber duct planning.' },
      { category: 'Compliance', items: 'Navigating complex regulatory environments to accelerate network deployment.' },
    ],
  },
  {
    id: 'maintenance',
    title: 'Critical Infrastructure Maintenance',
    description: 'Once a facility is energized, uptime is non-negotiable. We provide the ongoing operational engineering required to maintain hyperscale availability.',
    services: [
      { category: 'Maintenance', items: 'Preventative and predictive maintenance for critical power (UPS, generators) and cooling systems.' },
      { category: 'Optimization', items: 'Capacity management, thermal load testing, and facility optimization.' },
      { category: 'Continuity', items: 'Operational continuity planning and industrial safety automation monitoring.' },
    ],
  },
];

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
              Capabilities
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              The Engine Room
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              We provide full-lifecycle infrastructure consulting for mission-critical facilities. 
              From site selection to ongoing maintenance, we are your single point of accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-optical-white mb-4 tracking-tight">
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
                      <p className="text-xs text-accent-muted mt-1">
                        {service.items}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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

export default Services;
