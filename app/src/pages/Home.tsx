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
