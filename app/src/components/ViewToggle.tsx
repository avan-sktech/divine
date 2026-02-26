import { motion } from 'framer-motion';
import { useViewMode } from '../contexts/ViewModeContext';
import { Code2, Briefcase } from 'lucide-react';

const ViewToggle = () => {
  const { viewMode, setViewMode, isTechnical } = useViewMode();

  return (
    <div className="flex items-center gap-2 bg-obsidian/50 backdrop-blur-sm border border-silver-steel/20 rounded-lg p-1">
      <button
        onClick={() => setViewMode('technical')}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-300 ${
          isTechnical
            ? 'text-obsidian'
            : 'text-accent-muted hover:text-gold'
        }`}
      >
        {isTechnical && (
          <motion.div
            layoutId="viewModeBg"
            className="absolute inset-0 bg-optical-white rounded-md"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Code2 size={14} />
          TECHNICAL
        </span>
      </button>
      
      <button
        onClick={() => setViewMode('executive')}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono tracking-wider transition-all duration-300 ${
          !isTechnical
            ? 'text-obsidian'
            : 'text-accent-muted hover:text-gold'
        }`}
      >
        {!isTechnical && (
          <motion.div
            layoutId="viewModeBg"
            className="absolute inset-0 bg-optical-white rounded-md"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Briefcase size={14} />
          EXECUTIVE
        </span>
      </button>
    </div>
  );
};

export default ViewToggle;
