import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DiagnosticFormProps {
  vertical: 'consumer' | 'infrastructure';
  onSubmitSuccess: () => void;
}

type FormStep = 'loading' | 'active' | 'submitting' | 'success';

interface FormData {
  companyName: string;
  email: string;
  marketMaturity: string;
  distributionDensity: number;
  frictionPoints: string[];
}

const FRICTION_OPTIONS = [
  { id: 'margin', label: 'Margin Compression' },
  { id: 'channel', label: 'Channel Conflict' },
  { id: 'regulatory', label: 'Regulatory/AS-NZS Compliance' },
  { id: 'infrastructure', label: 'Infrastructure Grid Density' },
];

const SUBMISSION_MESSAGES = [
  '[SCANNING MARKET INTEGRITY FRAMEWORK...]',
  '[CROSS-REFERENCING DEPLOYMENT ARCHITECTURE...]',
  '[FINALISING STRATEGIC INTAKE...]',
];

// Email validation - reject public domains
const isCorporateEmail = (email: string): boolean => {
  const publicDomains = [
    'gmail.com', 'outlook.com', 'hotmail.com', 'yahoo.com', 
    'aol.com', 'icloud.com', 'protonmail.com', 'mail.com',
    'live.com', 'msn.com', 'qq.com', '163.com', '126.com'
  ];
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;
  
  const domain = email.split('@')[1]?.toLowerCase();
  return !publicDomains.includes(domain);
};

const DiagnosticForm: React.FC<DiagnosticFormProps> = ({ vertical, onSubmitSuccess }) => {
  const [step, setStep] = useState<FormStep>('loading');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [emailError, setEmailError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    email: '',
    marketMaturity: '',
    distributionDensity: 500,
    frictionPoints: [],
  });

  // Initial loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setStep('active');
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Submission message cycling
  useEffect(() => {
    if (step === 'submitting') {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prev) => {
          if (prev >= SUBMISSION_MESSAGES.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setStep('success');
              onSubmitSuccess();
            }, 800);
            return prev;
          }
          return prev + 1;
        });
      }, 800);
      return () => clearInterval(interval);
    }
  }, [step, onSubmitSuccess]);

  const getDensityLabel = (value: number): string => {
    if (value < 100) return 'EMERGING (0-100)';
    if (value < 500) return 'MID-TIER (100-500)';
    return 'HIGH-DENSITY (500+)';
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    
    if (email && !isCorporateEmail(email)) {
      setEmailError('Please use a corporate email domain');
    } else {
      setEmailError('');
    }
  };

  const toggleFrictionPoint = (id: string) => {
    setFormData(prev => ({
      ...prev,
      frictionPoints: prev.frictionPoints.includes(id)
        ? prev.frictionPoints.filter(p => p !== id)
        : [...prev.frictionPoints, id],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCorporateEmail(formData.email)) {
      setEmailError('Please use a corporate email domain');
      return;
    }
    
    if (!formData.companyName || !formData.marketMaturity) {
      return;
    }
    
    setStep('submitting');
  };

  const isFormValid = 
    formData.companyName && 
    isCorporateEmail(formData.email) && 
    formData.marketMaturity;

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {step === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="py-12 flex items-center justify-center"
          >
            <div className="font-mono text-xs tracking-widest text-accent-muted">
              <span className="terminal-cursor">INITIALIZING DEPLOYMENT AUDIT... [OK]</span>
            </div>
          </motion.div>
        )}

        {step === 'active' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Terminal Header */}
            <div className="mb-8">
              <p className="font-mono text-xs tracking-widest text-accent-muted uppercase">
                &gt; DEPLOYMENT PATHWAY: {vertical === 'consumer' ? 'CONSUMER & RETAIL' : 'DIGITAL & INFRASTRUCTURE'}
              </p>
              <p className="font-mono text-xs tracking-widest text-accent-muted mt-1">
                &gt; AUDIT STATUS: ACTIVE
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Field Set A: Institutional Identity */}
              <div className="space-y-6">
                <h4 className="font-mono text-xs tracking-widest text-silver-steel/60 uppercase border-b border-silver-steel/20 pb-2">
                  INSTITUTIONAL IDENTITY
                </h4>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="CORPORATE ENTITY NAME"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full bg-transparent border-b border-silver-steel/30 py-3 outline-none focus:border-optical-white transition-colors font-mono text-sm text-optical-white placeholder:text-accent-muted/50"
                      required
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      placeholder="EXECUTIVE EMAIL (MNC DOMAIN ONLY)"
                      value={formData.email}
                      onChange={handleEmailChange}
                      className={`
                        w-full bg-transparent border-b py-3 outline-none transition-colors font-mono text-sm text-optical-white placeholder:text-accent-muted/50
                        ${emailError ? 'border-red-400/50 focus:border-red-400' : 'border-silver-steel/30 focus:border-optical-white'}
                      `}
                      required
                    />
                    {emailError && (
                      <motion.p 
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 text-xs font-mono text-red-400"
                      >
                        {emailError}
                      </motion.p>
                    )}
                  </div>
                </div>
              </div>

              {/* Field Set B: The Integrity Diagnostic */}
              <div className="space-y-6">
                <h4 className="font-mono text-xs tracking-widest text-silver-steel/60 uppercase border-b border-silver-steel/20 pb-2">
                  INTEGRITY DIAGNOSTIC
                </h4>

                {/* Market Maturity Dropdown */}
                <div>
                  <label className="block font-mono text-xs tracking-widest text-accent-muted mb-3 uppercase">
                    Market Maturity Stage
                  </label>
                  <select
                    value={formData.marketMaturity}
                    onChange={(e) => setFormData(prev => ({ ...prev, marketMaturity: e.target.value }))}
                    className="w-full bg-transparent border border-silver-steel/30 py-3 px-4 outline-none focus:border-optical-white transition-colors font-mono text-sm text-optical-white appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-obsidian text-accent-muted">SELECT MATURITY STAGE</option>
                    <option value="pre-entry" className="bg-obsidian">PRE-ENTRY (Architecture Planning)</option>
                    <option value="active" className="bg-obsidian">ACTIVE DISTRIBUTION (Scaling)</option>
                    <option value="established" className="bg-obsidian">ESTABLISHED (Integrity & Verification)</option>
                  </select>
                </div>

                {/* Distribution Density Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="font-mono text-xs tracking-widest text-accent-muted uppercase">
                      Distribution Density
                    </label>
                    <span className="font-mono text-xs text-optical-white">
                      {getDensityLabel(formData.distributionDensity)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={formData.distributionDensity}
                    onChange={(e) => setFormData(prev => ({ ...prev, distributionDensity: parseInt(e.target.value) }))}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="font-mono text-xs text-accent-muted/50">0</span>
                    <span className="font-mono text-xs text-accent-muted/50">1000+</span>
                  </div>
                </div>

                {/* Friction Points Multi-Select */}
                <div>
                  <label className="block font-mono text-xs tracking-widest text-accent-muted mb-3 uppercase">
                    Core Friction Points
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {FRICTION_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleFrictionPoint(option.id)}
                        className={`
                          px-4 py-3 border text-left font-mono text-xs transition-all duration-200
                          ${formData.frictionPoints.includes(option.id)
                            ? 'bg-optical-white text-obsidian border-optical-white'
                            : 'bg-transparent text-silver-steel border-silver-steel/30 hover:border-silver-steel/60'
                          }
                        `}
                      >
                        <span className="flex items-center gap-2">
                          <span className={`
                            w-3 h-3 border flex items-center justify-center transition-colors
                            ${formData.frictionPoints.includes(option.id)
                              ? 'border-obsidian bg-obsidian'
                              : 'border-silver-steel/50'
                            }
                          `}>
                            {formData.frictionPoints.includes(option.id) && (
                              <svg className="w-2 h-2 text-optical-white" fill="currentColor" viewBox="0 0 8 8">
                                <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </span>
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!isFormValid}
                className={`
                  w-full py-4 font-semibold text-sm tracking-tighter uppercase transition-all duration-300
                  ${isFormValid
                    ? 'bg-optical-white text-obsidian hover:bg-silver-steel'
                    : 'bg-silver-steel/20 text-accent-muted cursor-not-allowed'
                  }
                `}
                whileHover={isFormValid ? { scale: 1.01 } : {}}
                whileTap={isFormValid ? { scale: 0.99 } : {}}
              >
                GENERATE STRATEGIC REVIEW
              </motion.button>
            </form>
          </motion.div>
        )}

        {step === 'submitting' && (
          <motion.div
            key="submitting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-16 flex flex-col items-center justify-center"
          >
            <div className="font-mono text-xs space-y-4 text-center">
              {SUBMISSION_MESSAGES.map((msg, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index <= currentMessageIndex ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.3 }}
                  className={index === currentMessageIndex ? 'text-optical-white' : 'text-accent-muted'}
                >
                  {msg}
                </motion.p>
              ))}
            </div>
            
            {/* Progress indicator */}
            <div className="mt-8 w-48 h-px bg-silver-steel/20 overflow-hidden">
              <motion.div
                className="h-full bg-optical-white"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentMessageIndex + 1) / SUBMISSION_MESSAGES.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="py-12"
          >
            <div className="border border-silver-steel/30 p-8 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="w-12 h-12 mx-auto mb-6 border border-optical-white flex items-center justify-center"
              >
                <svg className="w-6 h-6 text-optical-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              
              <h3 className="text-lg font-semibold text-optical-white mb-4 tracking-tight">
                REQUEST RECEIVED
              </h3>
              
              <p className="text-sm text-accent-muted max-w-md mx-auto leading-relaxed">
                A Divine Lab Worx consultant will contact you within 24 hours.
              </p>
              
              <div className="mt-8 pt-6 border-t border-silver-steel/20">
                <p className="font-mono text-xs tracking-widest text-accent-muted uppercase">
                  REFERENCE: DLW-{Math.random().toString(36).substring(2, 10).toUpperCase()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DiagnosticForm;
