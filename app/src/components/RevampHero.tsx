import { useEffect, useRef, type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Hero built to the 2026 design package's RevampHero template, rendered in
 * the Divine Lab Worx black and gold identity.
 *
 * Template characteristics carried across:
 *  - content anchored to the bottom of a tall stage (min-height 720px)
 *  - very large display heading, clamp(3.25rem, 8.3vw, 8.6rem), leading 0.88
 *  - accent phrase set in editorial serif italic
 *  - quarter-column vertical rules plus a horizontal midline in the backdrop
 *  - actions as wide outlined buttons, label left and arrow right
 *  - technical index code pinned bottom right
 *
 * Bandwidth and motion behaviour matches the package: the film is paused and
 * the poster shown when the visitor prefers reduced motion, is on a small
 * screen, or has data saver enabled.
 */

interface RevampHeroProps {
  eyebrow: string;
  /** Leading heading text */
  title: string;
  /** Accent phrase rendered in gold serif italic */
  titleAccent?: string;
  /** Optional third line after the accent */
  titleTail?: string;
  support: ReactNode;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  video?: string;
  image: string;
  imageAlt?: string;
  code?: string;
  /** Compact outlined tags rendered under the actions */
  tags?: string[];
  /** Optional slot rendered directly beneath the hero stage */
  children?: ReactNode;
}

const RevampHero = ({
  eyebrow, title, titleAccent, titleTail, support,
  primaryLabel, primaryHref, secondaryLabel, secondaryHref,
  video, image, imageAlt = '', code = 'DLW / INTL', tags, children,
}: RevampHeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 680px)');

    const shouldUsePoster = () => {
      // navigator.connection is not in the DOM lib types
      const connection = (navigator as unknown as { connection?: { saveData?: boolean } }).connection;
      return motionQuery.matches || mobileQuery.matches || connection?.saveData === true;
    };

    const update = () => {
      if (shouldUsePoster()) {
        el.pause();
        return;
      }
      // With preload="metadata" there may be no frames yet at mount, in which
      // case play() rejects. Retry once the film has data so the hero is never
      // left on a still when motion was wanted.
      el.play().catch(() => {
        const retry = () => {
          if (!shouldUsePoster()) el.play().catch(() => undefined);
        };
        el.addEventListener('canplay', retry, { once: true });
        el.addEventListener('loadeddata', retry, { once: true });
      });
    };

    update();
    motionQuery.addEventListener('change', update);
    mobileQuery.addEventListener('change', update);
    return () => {
      motionQuery.removeEventListener('change', update);
      mobileQuery.removeEventListener('change', update);
    };
  }, []);

  return (
    <section className="relative flex flex-col">
      <div className="relative min-h-[600px] sm:min-h-[720px] flex flex-col justify-end overflow-hidden pt-32 sm:pt-44 lg:pt-[185px] pb-14 sm:pb-[82px]">
        {/* Poster and film */}
        <img
          src={image}
          alt={imageAlt}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {video && (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={image}
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={video} type="video/mp4" />
          </video>
        )}

        {/* Quarter-column rules and midline, the package's technical backdrop */}
        <div
          className="absolute inset-0 pointer-events-none hidden sm:block"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 24.9%, rgba(255,255,255,.045) 25%, transparent 25.1%),
              linear-gradient(90deg, transparent 49.9%, rgba(255,255,255,.045) 50%, transparent 50.1%),
              linear-gradient(90deg, transparent 74.9%, rgba(255,255,255,.045) 75%, transparent 75.1%),
              linear-gradient(180deg, transparent 49.9%, rgba(255,255,255,.035) 50%, transparent 50.1%)
            `,
          }}
        />

        {/* Shade so the display type always clears the film */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,.82) 0%, rgba(10,10,10,.55) 38%, rgba(10,10,10,.88) 100%)',
          }}
        />
        {/* Gold wash, kept from the current site */}
        <div
          className="absolute pointer-events-none"
          aria-hidden="true"
          style={{
            right: '-60px',
            top: '22%',
            width: 'clamp(320px, 48vw, 720px)',
            height: 'clamp(320px, 48vw, 720px)',
            background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] text-gold uppercase mb-5 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse flex-shrink-0" />
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-[1060px] m-0 font-semibold text-optical-white text-display-hero"
            
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <em className="font-serif italic font-normal text-gold text-[1.06em] tracking-[-0.015em] pr-[0.05em]">
                  {titleAccent}
                </em>
              </>
            )}
            {titleTail && <> {titleTail}</>}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <div className="w-14 h-0.5 bg-gold mt-8 sm:mt-9 mb-6" />
            <div className="max-w-[680px] text-[clamp(0.95rem,1.5vw,1.3rem)] leading-relaxed text-optical-white/70">
              {support}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-wrap gap-3 mt-9 sm:mt-10"
          >
            <Link
              to={primaryHref}
              className="group inline-flex items-center justify-between gap-8 min-w-[190px] min-h-[54px] px-5 bg-gold text-obsidian font-mono text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
            >
              {primaryLabel}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                to={secondaryHref}
                className="group inline-flex items-center justify-between gap-8 min-w-[190px] min-h-[54px] px-5 border border-optical-white/35 text-optical-white font-mono text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase hover:border-gold hover:text-gold transition-colors"
              >
                {secondaryLabel}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            )}
          </motion.div>

          {tags && tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="flex flex-wrap gap-2 mt-8 sm:mt-9 max-w-4xl"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-optical-white/55 border border-optical-white/20 rounded-full px-3.5 py-1.5 bg-optical-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        {/* Technical index, pinned bottom right */}
        <span className="absolute right-5 sm:right-8 lg:right-12 bottom-3 font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.16em] text-optical-white/40 uppercase z-10">
          {code}
        </span>
      </div>

      {children}
    </section>
  );
};

export default RevampHero;
