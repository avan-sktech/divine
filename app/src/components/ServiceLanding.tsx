import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, X } from 'lucide-react';
import EditorialVideo from './EditorialVideo';

/**
 * Shared capability-page template.
 *
 * Mirrors the 2026 design package's ServiceLanding structure (hero, direct
 * answer, who it is for, what the engagement covers, how the work proceeds,
 * comparison, FAQ, CTA) rendered in the Divine Lab Worx black and gold
 * industrial identity.
 */

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ComparisonRow {
  decision: string;
  weak: string;
  strong: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceLandingProps {
  eyebrow: string;
  /** Technical index shown in the hero, e.g. "ENT / AU" */
  code: string;
  title: string;
  /** Optional trailing phrase rendered in gold */
  titleAccent?: string;
  lede: string;
  seoTitle: string;
  metaDescription: string;
  path: string;
  /** AEO direct-answer block */
  answerQuestion: string;
  answer: string;
  /** Optional editorial image band */
  /** Editorial band image, with an optional film that plays while in view */
  media?: { src: string; alt: string; caption?: string; video?: string };
  audienceHeading: string;
  audienceCopy: string;
  audienceItems: ServiceItem[];
  scopeHeading: string;
  scopeCopy: string;
  scopeItems: ServiceItem[];
  processHeading: string;
  processCopy: string;
  processItems: ServiceItem[];
  comparisonHeading?: string;
  comparisonCopy?: string;
  comparisonRows?: ComparisonRow[];
  faqs: Faq[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Service schema fields */
  serviceName: string;
  serviceType: string | string[];
}

const gridBackground = {
  backgroundImage: `
    linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

const num = (i: number) => String(i + 1).padStart(2, '0');

const ServiceLanding = (props: ServiceLandingProps) => {
  const {
    eyebrow, code, title, titleAccent, lede, seoTitle, metaDescription, path,
    answerQuestion, answer, media,
    audienceHeading, audienceCopy, audienceItems,
    scopeHeading, scopeCopy, scopeItems,
    processHeading, processCopy, processItems,
    comparisonHeading, comparisonCopy, comparisonRows,
    faqs, ctaEyebrow, ctaTitle, ctaCopy, ctaLabel,
    secondaryLabel, secondaryHref, serviceName, serviceType,
  } = props;

  const url = `https://divinelabworx.com${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: serviceName,
        url,
        description: metaDescription,
        serviceType,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Divine Lab Worx',
          parentOrganization: { '@type': 'Organization', name: 'Sharktech Global' },
        },
        areaServed: [
          { '@type': 'Country', name: 'Australia' },
          { '@type': 'Place', name: 'International markets' },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://divinelabworx.com/' },
          { '@type': 'ListItem', position: 2, name: 'Capabilities', item: 'https://divinelabworx.com/capabilities' },
          { '@type': 'ListItem', position: 3, name: serviceName, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <meta name="answer-engine:question" content={answerQuestion} />
        <meta name="answer-engine:answer" content={answer} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="w-full" style={gridBackground}>
        {/* Hero */}
        <section className="relative pt-24 sm:pt-32 pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <nav className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-6">
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/capabilities" className="hover:text-gold transition-colors">Capabilities</Link>
              </nav>

              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-gold uppercase">
                  {eyebrow}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-accent-muted border border-silver-steel/20 rounded-full px-3 py-1">
                  {code}
                </span>
              </div>

              <h1 className="text-display-1 font-semibold text-optical-white mb-6 max-w-[24ch]">
                {title}
                {titleAccent && (
                  <>
                    {' '}
                    <em className="font-serif italic font-normal text-gold text-[1.06em] tracking-[-0.015em] pr-[0.05em]">
                      {titleAccent}
                    </em>
                  </>
                )}
              </h1>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <p className="text-base sm:text-lg text-accent-muted leading-relaxed max-w-2xl">
                {lede}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
                >
                  Start an Engagement
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to={secondaryHref || '/capabilities'}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-silver-steel/30 text-optical-white text-xs sm:text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors"
                >
                  {secondaryLabel || 'See All Capabilities'}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Direct answer */}
        <section className="border-t-2 border-gold/70 bg-tile-bg/40">
          <div className="max-w-shell mx-auto px-gutter py-section-tight">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-16 items-baseline"
            >
              <div>
                <span className="flex items-center gap-2.5 font-mono text-micro text-gold uppercase mb-4">
                  <span aria-hidden="true" className="text-sm leading-none">+</span>
                  Direct answer
                </span>
                <h2 className="text-display-3 font-semibold text-optical-white max-w-[22ch]">
                  {answerQuestion}
                </h2>
              </div>
              <p className="text-lede text-accent-muted max-w-measure">{answer}</p>
            </motion.div>
          </div>
        </section>

        {/* Editorial media band */}
        {media && (
          <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-6xl mx-auto relative overflow-hidden border border-silver-steel/10 rounded-lg"
            >
              {media.video ? (
                <EditorialVideo
                  src={media.video}
                  poster={media.src}
                  className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover"
                />
              ) : (
                <img
                  src={media.src}
                  alt={media.alt}
                  loading="lazy"
                  className="w-full h-[220px] sm:h-[320px] lg:h-[380px] object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 flex flex-wrap items-end justify-between gap-3">
                <span className="text-sm sm:text-base text-optical-white font-medium max-w-xl">
                  {media.caption}
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-gold uppercase">
                  {code}
                </span>
              </figcaption>
            </motion.figure>
          </section>
        )}

        {/* Who this is for */}
        <Section
          eyebrow="Who this is for"
          heading={audienceHeading}
          copy={audienceCopy}
        >
          <ul className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
            {audienceItems.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-5 py-5"
              >
                <span className="font-mono text-sm text-gold font-semibold min-w-[28px]">{num(i)}</span>
                <div>
                  <span className="block text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                    {item.title}
                  </span>
                  <p className="text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </Section>

        {/* What the engagement covers */}
        <Section
          eyebrow="What the engagement covers"
          heading={scopeHeading}
          copy={scopeCopy}
          dark
        >
          {/* Hairline matrix: gap-px over a rule-coloured backing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-silver-steel/15">
            {scopeItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-obsidian p-6 sm:p-8 min-h-[190px] flex flex-col hover:bg-tile-bg transition-colors duration-300"
              >
                <span className="font-mono text-micro-xs text-gold uppercase">{num(i)}</span>
                <div className="mt-auto pt-8">
                  <h3 className="text-base sm:text-lg font-semibold text-optical-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-body-copy text-accent-muted">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* How the work proceeds */}
        <Section
          eyebrow="How the work proceeds"
          heading={processHeading}
          copy={processCopy}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {processItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex gap-4 border border-silver-steel/10 rounded-lg p-5 bg-obsidian/30 hover:border-gold/40 transition-all duration-300"
              >
                <span className="font-mono text-base text-gold font-bold min-w-[32px]">{num(i)}</span>
                <div>
                  <span className="block text-sm sm:text-base font-semibold text-optical-white tracking-tight">
                    {item.title}
                  </span>
                  <span className="block text-xs sm:text-sm text-accent-muted mt-1 leading-relaxed">
                    {item.description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Comparison */}
        {comparisonRows && comparisonRows.length > 0 && (
          <Section
            eyebrow="Decision discipline"
            heading={comparisonHeading || ''}
            copy={comparisonCopy || ''}
            dark
          >
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-silver-steel/20">
                    <th className="py-3 pr-4 font-mono text-[10px] tracking-widest text-accent-muted uppercase font-medium">
                      Decision
                    </th>
                    <th className="py-3 px-4 font-mono text-[10px] tracking-widest text-accent-muted uppercase font-medium">
                      Common weak approach
                    </th>
                    <th className="py-3 pl-4 font-mono text-[10px] tracking-widest text-gold uppercase font-medium">
                      Decision-ready approach
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-steel/10">
                  {comparisonRows.map((row) => (
                    <tr key={row.decision} className="align-top">
                      <td className="py-4 pr-4 text-sm font-semibold text-optical-white tracking-tight whitespace-nowrap">
                        {row.decision}
                      </td>
                      <td className="py-4 px-4 text-xs sm:text-sm text-accent-muted leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <X size={13} className="text-accent-muted/50 mt-0.5 flex-shrink-0" />
                          {row.weak}
                        </span>
                      </td>
                      <td className="py-4 pl-4 text-xs sm:text-sm text-silver-steel leading-relaxed">
                        <span className="inline-flex items-start gap-2">
                          <Check size={13} className="text-gold mt-0.5 flex-shrink-0" />
                          {row.strong}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {/* FAQ: sticky rail plus native disclosure rows */}
        <section className="border-t border-silver-steel/10">
          <div className="max-w-shell mx-auto px-gutter py-section grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-32"
            >
              <span className="flex items-center gap-2.5 font-mono text-micro text-accent-muted uppercase mb-4">
                <span aria-hidden="true" className="w-3 h-px bg-gold" />
                Questions
              </span>
              <h2 className="text-display-3 font-semibold text-optical-white max-w-[18ch]">
                {serviceName}, answered.
              </h2>
            </motion.div>

            <div className="border-t border-silver-steel/15">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-silver-steel/15 py-5 sm:py-6"
                >
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none marker:hidden [&::-webkit-details-marker]:hidden">
                    <h3 className="text-base sm:text-lg font-semibold text-optical-white tracking-tight group-hover:text-gold transition-colors">
                      {faq.question}
                    </h3>
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 mt-1 text-gold font-mono text-lg leading-none transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="text-body-copy text-accent-muted max-w-measure mt-4">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA: asymmetric closing band */}
        <section className="border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-shell mx-auto px-gutter py-section grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="flex items-center gap-2.5 font-mono text-micro text-gold uppercase mb-4">
                <span aria-hidden="true" className="w-3 h-px bg-gold" />
                {ctaEyebrow}
              </span>
              <h2 className="text-display-2 font-semibold text-optical-white max-w-[20ch]">
                {ctaTitle}
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-lede text-accent-muted max-w-measure mb-8">{ctaCopy}</p>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-8 min-w-[240px] min-h-[54px] px-5 bg-gold text-obsidian font-mono text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase hover:bg-gold-light transition-colors"
              >
                {ctaLabel}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

/** Section shell with eyebrow, heading and lead copy */
const Section = ({
  eyebrow, heading, copy, dark, children,
}: {
  eyebrow: string;
  heading: string;
  copy: string;
  dark?: boolean;
  children: React.ReactNode;
}) => (
  <section className={`border-t border-silver-steel/10 ${dark ? 'bg-tile-bg/40' : ''}`}>
    <div className="max-w-shell mx-auto px-gutter py-section">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-16 items-baseline mb-section-heading"
      >
        <div>
          <span className="flex items-center gap-2.5 font-mono text-micro text-accent-muted uppercase mb-4">
            <span aria-hidden="true" className="w-3 h-px bg-gold" />
            {eyebrow}
          </span>
          <h2 className="text-display-2 font-semibold text-optical-white max-w-[20ch]">
            {heading}
          </h2>
        </div>
        <p className="text-lede text-accent-muted max-w-measure">{copy}</p>
      </motion.div>
      {children}
    </div>
  </section>
);

export default ServiceLanding;
