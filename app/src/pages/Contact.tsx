import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import VerticalSelector from '../components/portal/VerticalSelector';
import DiagnosticForm from '../components/portal/DiagnosticForm';
import MIRPreview from '../components/portal/MIRPreview';

type VerticalType = 'consumer' | 'infrastructure' | null;

const Contact = () => {
  const [selectedVertical, setSelectedVertical] = useState<VerticalType>(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleVerticalSelect = (vertical: 'consumer' | 'infrastructure') => {
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
                Select your primary deployment pathway to begin the structural audit process. 
                Our team will review your market positioning against our Integrity Framework.
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
              /* Step 1: Vertical Selection */
              <motion.div
                key="selector"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <VerticalSelector 
                  selectedVertical={selectedVertical}
                  onSelect={handleVerticalSelect}
                />
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
