import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Network } from 'lucide-react';
import DiagnosticForm from '../components/portal/DiagnosticForm';
import MIRPreview from '../components/portal/MIRPreview';

type VerticalType = 'infrastructure' | null;

const Contact = () => {
  const [selectedVertical, setSelectedVertical] = useState<VerticalType>(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleVerticalSelect = (vertical: 'infrastructure') => {
    setSelectedVertical(vertical);
    setTimeout(() => {
      setShowForm(true);
    }, 300);
  };

  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/command-center.jpg" 
            alt="Command Center"
            loading="lazy"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-4 block">
              STRATEGIC INTAKE PORTAL
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-optical-white leading-tight">
              INITIATE DEPLOYMENT
              <br />
              ARCHITECTURE REVIEW
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {showForm ? (
              <motion.p 
                className="mt-6 sm:mt-8 text-sm sm:text-base text-accent-muted max-w-[60ch] mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Complete the diagnostic form below. Your input will generate a preliminary 
                Market Integrity Brief for our Commercial Architects.
              </motion.p>
            ) : (
              <motion.p 
                className="mt-6 sm:mt-8 text-sm sm:text-base text-accent-muted max-w-[60ch] mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                Select your deployment pathway to begin the structural audit process. 
                We specialize in digital infrastructure, data centres, and mission-critical facilities.
              </motion.p>
            )}
          </motion.div>

          {/* Decorative Line */}
          <motion.div 
            className="mt-12 sm:mt-16 flex justify-center"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-silver-steel/30 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {!showForm ? (
              /* Step 1: Infrastructure Selection - Single Option with subtle consumer mention */
              <motion.div
                key="selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full px-4 sm:px-6 lg:px-8 py-8"
              >
                <div className="max-w-4xl mx-auto">
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {/* Primary: Digital & Infrastructure */}
                    <motion.button
                      onClick={() => handleVerticalSelect('infrastructure')}
                      className="relative min-h-[280px] sm:min-h-[360px] p-6 sm:p-8 border border-gold bg-tile-bg transition-all duration-300 ease-out flex flex-col items-center justify-center text-center group cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="mb-6 sm:mb-8 text-gold">
                        <Server className="w-16 h-16 sm:w-20 sm:h-20" />
                      </div>
                      <h3 className="text-sm sm:text-base font-mono tracking-widest text-optical-white mb-2">
                        DIGITAL & INFRASTRUCTURE
                      </h3>
                      <p className="text-xs font-mono text-accent-muted mb-4">
                        Cloud, AI & Mission-Critical Facilities
                      </p>
                      <p className="text-xs sm:text-sm text-accent-muted max-w-[240px] leading-relaxed">
                        Data centres, fibre networks, power systems, and hyperscale deployments
                      </p>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      </div>
                    </motion.button>

                    {/* Secondary: Consumer & Retail (subtle mention) */}
                    <motion.div
                      className="relative min-h-[280px] sm:min-h-[360px] p-6 sm:p-8 border border-silver-steel/20 bg-transparent flex flex-col items-center justify-center text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="mb-6 sm:mb-8 text-silver-steel/50">
                        <Network className="w-16 h-16 sm:w-20 sm:h-20" />
                      </div>
                      <h3 className="text-sm sm:text-base font-mono tracking-widest text-silver-steel/70 mb-2">
                        CONSUMER & RETAIL
                      </h3>
                      <p className="text-xs font-mono text-accent-muted/50 mb-4">
                        Selective Engagement
                      </p>
                      <p className="text-xs sm:text-sm text-accent-muted/60 max-w-[240px] leading-relaxed">
                        For premium brands navigating Australia's concentrated retail landscape, please contact us directly
                      </p>
                      <Link 
                        to="mailto:info@divinelabworx.com" 
                        className="mt-6 text-xs font-mono text-gold hover:text-gold-light transition-colors"
                      >
                        CONTACT FOR RETAIL
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              /* Step 2: Form + Preview */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                  {/* Form Column */}
                  <div className="lg:col-span-7">
                    <div className="border border-silver-steel/30 p-6 sm:p-8">
                      {selectedVertical && (
                        <DiagnosticForm 
                          vertical={selectedVertical}
                          onSubmitSuccess={handleFormSuccess}
                        />
                      )}
                    </div>
                  </div>

                  {/* Preview Column - Hidden on mobile after submission */}
                  <AnimatePresence>
                    {!formSubmitted && (
                      <motion.div 
                        className="lg:col-span-5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        <div className="sticky top-24">
                          <MIRPreview />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Contact Information Section */}
      <section className="border-t border-silver-steel/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="font-mono text-[10px] tracking-widest text-accent-muted uppercase mb-8 block">
              GET IN TOUCH
            </span>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-optical-white mb-2">
                  Divine Lab Worx
                </h3>
                <p className="text-sm text-accent-muted">
                  PART OF SHARKTECH GLOBAL
                </p>
              </div>
              
              <div className="space-y-3 text-sm text-silver-steel">
                <p>244 Macquarie St, Liverpool NSW 2170, Australia</p>
                <p>+61 468 017 373</p>
                <p>
                  <a 
                    href="mailto:info@divinelabworx.com" 
                    className="hover:text-gold transition-colors"
                  >
                    info@divinelabworx.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
