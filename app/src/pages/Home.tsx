import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
              data centres, semiconductor fabs, and advanced cleanrooms—turning complex capital projects into 
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

      {/* The Strategic Advantage Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-optical-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-obsidian">
                The Strategic Advantage
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                In the deployment of digital infrastructure, velocity is the ultimate competitive advantage. 
                We secure and validate sites across Australia that are primed for hyperscale expansion. By 
                vertically integrating site selection, heavy utility engineering, and industrial safety 
                automation, we remove the friction from the development lifecycle. We manage the physical 
                complexities so you can scale your compute without delay.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              The Engine Room
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white">
              Core Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Capability 1: Site Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Site Selection & Rapid Due Diligence
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                From single-site acquisitions to multi-node expansions across Australia, our due diligence 
                is built for hyperscale velocity.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Data room analysis, constraint mapping</li>
                <li>• Field services: topological due diligence</li>
                <li>• Utility forecasting & capacity modeling</li>
              </ul>
            </motion.div>

            {/* Capability 2: Power & Energy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Power & Energy Infrastructure
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                Power is the absolute bottleneck of digital infrastructure. We deliver high-availability, 
                scalable energy solutions.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Power system planning & HV load forecasting</li>
                <li>• Substation design & distribution networks</li>
                <li>• Renewable integration & sustainability</li>
              </ul>
            </motion.div>

            {/* Capability 3: Liquid Cooling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Advanced Liquid Cooling & Thermal Management
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                We engineer advanced cooling topologies to support extreme-density racks and precision 
                manufacturing environments.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Chilled water loop design & CDU integration</li>
                <li>• Process Cooling Water (PCW) systems</li>
                <li>• Thermal optimization for AI workloads</li>
              </ul>
            </motion.div>

            {/* Capability 4: End-to-End Consulting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                End-to-End Consulting
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                Whether designing a standalone edge facility or a gigawatt-scale campus, we manage the 
                entire project lifecycle.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Concept design & technical specifications</li>
                <li>• MEP design for mission-critical loads</li>
                <li>• BIM coordination & construction management</li>
              </ul>
            </motion.div>

            {/* Capability 5: Water & Wastewater */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Water & Wastewater Engineering
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                We architect water infrastructure for extreme resilience and scale, optimizing Water Usage 
                Effectiveness (WUE).
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Advanced treatment & filtration systems</li>
                <li>• Closed-loop & Zero-Liquid Discharge (ZLD)</li>
                <li>• Telemetry & leak detection systems</li>
              </ul>
            </motion.div>

            {/* Capability 6: Fiber & Subsea */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Fiber & Subsea Infrastructure
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                We engineer the digital backbone, providing full-lifecycle advisory and design for critical 
                network pathways.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Route feasibility analysis & permitting</li>
                <li>• Cable station design & terrestrial fiber</li>
                <li>• Regulatory navigation & compliance</li>
              </ul>
            </motion.div>

            {/* Capability 7: Critical Infrastructure Maintenance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="border border-silver-steel/20 p-8 hover:border-gold transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                Critical Infrastructure Maintenance
              </h3>
              <p className="text-sm text-accent-muted leading-relaxed mb-4">
                Once a facility is energized, uptime is non-negotiable. We provide ongoing operational 
                engineering for hyperscale availability.
              </p>
              <ul className="text-xs text-accent-muted space-y-2">
                <li>• Preventative & predictive maintenance</li>
                <li>• Capacity management & thermal testing</li>
                <li>• Operational continuity planning</li>
              </ul>
            </motion.div>
          </div>
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
