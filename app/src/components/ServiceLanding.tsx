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

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white leading-[1.08] mb-5">
                {title}{titleAccent && <> <span className="text-gold">{titleAccent}</span></>}
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
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start"
            >
              <div>
                <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-3 block">
                  Direct answer
                </span>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-optical-white">
                  {answerQuestion}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">{answer}</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {scopeItems.map((item, i) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-silver-steel/20 p-6 hover:border-gold/50 transition-all duration-300 bg-obsidian/30"
              >
                <span className="text-2xl font-bold text-gold/20 block mb-3">{num(i)}</span>
                <h3 className="text-base font-semibold text-optical-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-accent-muted leading-relaxed">{item.description}</p>
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

        {/* FAQ */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white">
                {serviceName}, answered.
              </h2>
            </motion.div>
            <div className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="py-6"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-optical-white tracking-tight mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-accent-muted leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-4 block">
                {ctaEyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-5">
                {ctaTitle}
              </h2>
              <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                {ctaCopy}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
              >
                {ctaLabel}
                <ArrowRight size={18} />
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
  <section
    className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 ${
      dark ? 'bg-tile-bg/40' : ''
    }`}
  >
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-10"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-3">
          {heading}
        </h2>
        <p className="text-sm sm:text-base text-accent-muted leading-relaxed">{copy}</p>
      </motion.div>
      {children}
    </div>
  </section>
);

export default ServiceLanding;
