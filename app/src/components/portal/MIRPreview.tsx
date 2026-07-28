import React from 'react';
import { motion } from 'framer-motion';

const MIRPreview: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px]">
      {/* Blurred Dashboard Preview */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dashboard Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-tile-bg to-obsidian border border-silver-steel/20">
          {/* Mock Dashboard Content - Blurred */}
          <div className="p-6 space-y-4 filter blur-[3px] opacity-60">
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-silver-steel/20">
              <div className="w-32 h-3 bg-silver-steel/30 rounded" />
              <div className="w-20 h-3 bg-silver-steel/20 rounded" />
            </div>
            
            {/* Chart Area */}
            <div className="h-32 bg-silver-steel/10 rounded flex items-end p-4 gap-2">
              {[40, 65, 45, 80, 55, 70, 60, 85, 50, 75].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-silver-steel/30 rounded-t"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 bg-silver-steel/10 rounded">
                  <div className="w-16 h-2 bg-silver-steel/30 rounded mb-2" />
                  <div className="w-12 h-4 bg-silver-steel/40 rounded" />
                </div>
              ))}
            </div>
            
            {/* Table */}
            <div className="space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 py-2 border-b border-silver-steel/10">
                  <div className="w-24 h-2 bg-silver-steel/20 rounded" />
                  <div className="w-16 h-2 bg-silver-steel/20 rounded" />
                  <div className="w-20 h-2 bg-silver-steel/20 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* SAMPLE Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-4 border-optical-white/20 px-8 py-4 transform -rotate-12"
          >
            <span className="text-4xl sm:text-5xl font-bold text-optical-white/10 tracking-widest">
              SAMPLE
            </span>
          </motion.div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/50 pointer-events-none" />
      </div>
      
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="font-mono text-xs text-accent-muted text-center leading-relaxed"
        >
          Your input will generate a preliminary Market Integrity Brief.
          <br />
          Full diagnostic reports are reserved for Strategic Partners.
        </motion.p>
      </div>
      
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-6 h-px bg-silver-steel/30" />
      <div className="absolute top-0 left-0 w-px h-6 bg-silver-steel/30" />
      <div className="absolute top-0 right-0 w-6 h-px bg-silver-steel/30" />
      <div className="absolute top-0 right-0 w-px h-6 bg-silver-steel/30" />
      <div className="absolute bottom-0 left-0 w-6 h-px bg-silver-steel/30" />
      <div className="absolute bottom-0 left-0 w-px h-6 bg-silver-steel/30" />
      <div className="absolute bottom-0 right-0 w-6 h-px bg-silver-steel/30" />
      <div className="absolute bottom-0 right-0 w-px h-6 bg-silver-steel/30" />
    </div>
  );
};

export default MIRPreview;
