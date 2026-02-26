import React from 'react';
import { motion } from 'framer-motion';

interface VerticalSelectorProps {
  selectedVertical: string | null;
  onSelect: (vertical: 'consumer' | 'infrastructure') => void;
}

// Natridy-style Product Silhouette Icon
const ProductSilhouetteIcon: React.FC = () => (
  <svg 
    viewBox="0 0 120 120" 
    className="w-20 h-20 sm:w-24 sm:h-24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Main product body - deconstructed view */}
    <motion.g 
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Base component */}
      <rect x="35" y="80" width="50" height="15" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Middle section */}
      <rect x="40" y="55" width="40" height="22" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Top component */}
      <rect x="45" y="30" width="30" height="22" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* Floating elements - deconstructed parts */}
      <motion.circle 
        cx="25" cy="45" r="6" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle 
        cx="95" cy="55" r="5" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.rect 
        x="20" y="70" width="10" height="10" rx="1" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        animate={{ y: [0, -2, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      {/* Connection lines */}
      <path d="M35 87 L25 87 L25 51" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
      <path d="M85 87 L95 87 L95 61" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
    </motion.g>
  </svg>
);

// 3D Fibre Node Network Icon
const FibreNetworkIcon: React.FC = () => (
  <svg 
    viewBox="0 0 120 120" 
    className="w-20 h-20 sm:w-24 sm:h-24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g 
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Central node */}
      <circle cx="60" cy="60" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.5" />
      
      {/* Satellite nodes with floating animation */}
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="30" cy="35" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      </motion.g>
      <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}>
        <circle cx="90" cy="35" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      </motion.g>
      <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}>
        <circle cx="25" cy="80" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      </motion.g>
      <motion.g animate={{ y: [0, 2, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}>
        <circle cx="95" cy="80" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      </motion.g>
      <motion.g animate={{ y: [0, -2, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}>
        <circle cx="60" cy="95" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
      </motion.g>
      
      {/* Connection lines */}
      <line x1="35" y1="38" x2="53" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="85" y1="38" x2="67" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="29" y1="77" x2="53" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="91" y1="77" x2="67" y2="65" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      <line x1="60" y1="90" x2="60" y2="68" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      
      {/* Data pulse animations along lines */}
      <motion.circle 
        cx="44" cy="46.5" r="1.5" 
        fill="currentColor"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle 
        cx="76" cy="46.5" r="1.5" 
        fill="currentColor"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
    </motion.g>
  </svg>
);

const VerticalSelector: React.FC<VerticalSelectorProps> = ({ selectedVertical, onSelect }) => {
  const tiles = [
    {
      id: 'consumer' as const,
      title: 'CONSUMER & RETAIL',
      subtitle: 'Engineered Products',
      description: 'Physical product deployment into concentrated retail ecosystems',
      icon: ProductSilhouetteIcon,
    },
    {
      id: 'infrastructure' as const,
      title: 'DIGITAL & INFRASTRUCTURE',
      subtitle: 'Cloud & AI Systems',
      description: 'Structured pathways for Cloud and AI-first infrastructure entry',
      icon: FibreNetworkIcon,
    },
  ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tiles.map((tile, index) => {
            const isSelected = selectedVertical === tile.id;
            const Icon = tile.icon;
            
            return (
              <motion.button
                key={tile.id}
                onClick={() => onSelect(tile.id)}
                className={`
                  relative flex-1 min-h-[320px] sm:min-h-[400px] p-6 sm:p-8
                  border transition-all duration-300 ease-out
                  flex flex-col items-center justify-center text-center
                  group cursor-pointer
                  ${isSelected 
                    ? 'bg-tile-bg border-optical-white' 
                    : 'bg-transparent border-silver-steel/30 hover:border-gold hover:shadow-tile-hover'
                  }
                `}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Icon */}
                <div className={`
                  mb-6 sm:mb-8 text-silver-steel transition-colors duration-300
                  ${isSelected ? 'text-gold' : 'group-hover:text-gold'}
                `}>
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-sm font-mono tracking-widest text-optical-white mb-2">
                  {tile.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono text-accent-muted mb-4">
                  {tile.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-accent-muted max-w-[240px] leading-relaxed">
                  {tile.description}
                </p>

                {/* Selection Indicator */}
                <motion.div 
                  className="absolute bottom-6 left-1/2 -translate-x-1/2"
                  initial={false}
                  animate={{ opacity: isSelected ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-optical-white" />
                </motion.div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-px bg-silver-steel/30" />
                <div className="absolute top-0 left-0 w-px h-4 bg-silver-steel/30" />
                <div className="absolute top-0 right-0 w-4 h-px bg-silver-steel/30" />
                <div className="absolute top-0 right-0 w-px h-4 bg-silver-steel/30" />
                <div className="absolute bottom-0 left-0 w-4 h-px bg-silver-steel/30" />
                <div className="absolute bottom-0 left-0 w-px h-4 bg-silver-steel/30" />
                <div className="absolute bottom-0 right-0 w-4 h-px bg-silver-steel/30" />
                <div className="absolute bottom-0 right-0 w-px h-4 bg-silver-steel/30" />
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalSelector;
