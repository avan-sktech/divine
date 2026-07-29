import { motion } from 'framer-motion';
import EditorialVideo from './EditorialVideo';

/**
 * "Strategy in motion" filmstrip.
 *
 * Three chessboard films carrying the strategy metaphor: establish the
 * position, read the whole board, make the next move count. Ported from the
 * 2026 design package and rendered in the black and gold identity.
 */

const films = [
  {
    number: '01',
    caption: 'Establish the position',
    video: '/video/editorial/chess-opening.mp4',
    poster: '/images/editorial/chess-opening-poster.webp',
    primary: true,
  },
  {
    number: '02',
    caption: 'Read the whole board',
    video: '/video/editorial/chess-collaboration.mp4',
    poster: '/images/editorial/chess-collaboration-poster.webp',
    primary: false,
  },
  {
    number: '03',
    caption: 'Make the next move count',
    video: '/video/editorial/chess-executive.mp4',
    poster: '/images/editorial/chess-executive-poster.webp',
    primary: false,
  },
];

const StrategyFilmstrip = () => (
  <section
    className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10"
    aria-labelledby="strategy-filmstrip-title"
  >
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-10"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-3 block">
          Strategy in motion
        </span>
        <h2
          id="strategy-filmstrip-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-4"
        >
          Position. Read. Move.
        </h2>
        <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
          Good strategy is not a collection of slides. It is a sequence of informed choices,
          made with a clear view of the board and the next decision.
        </p>
      </motion.div>

      {/* Primary film takes two columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {films.map((film, i) => (
          <motion.figure
            key={film.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative m-0 overflow-hidden border border-silver-steel/15 bg-obsidian/40 group ${
              film.primary ? 'lg:col-span-2 sm:col-span-2' : ''
            }`}
          >
            <div className={film.primary ? 'aspect-[16/10]' : 'aspect-[4/3]'}>
              <EditorialVideo
                src={film.video}
                poster={film.poster}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
              />
            </div>
            <span
              className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 flex items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-[0.2em] text-gold">
                {film.number}
              </span>
              <span className="text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                {film.caption}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

export default StrategyFilmstrip;
