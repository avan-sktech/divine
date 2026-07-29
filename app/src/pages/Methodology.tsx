import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, X } from 'lucide-react';
import {
  applications, advantages, disciplineRows, methodologyFaqs, workstreamsNote,
} from '../data/methodology';

const gridBackground = {
  backgroundImage: `
    linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

const methodologyJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://divinelabworx.com/methodology#service',
      name: 'Concurrent strategy and delivery methodology',
      url: 'https://divinelabworx.com/methodology',
      description:
        'The DivineLab Concurrent Method develops strategy, the offer, delivery system, economics and evidence together, with evidence gates controlling each commitment.',
      serviceType: ['Business strategy methodology', 'Concurrent product and process design'],
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
        { '@type': 'ListItem', position: 2, name: 'Methodology', item: 'https://divinelabworx.com/methodology' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: methodologyFaqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ],
};

const Methodology = () => {
  const [active, setActive] = useState(0);
  const app = applications[active];

  return (
    <>
      <Helmet>
        <title>Concurrent Product and Process Design | Methodology</title>
        <meta name="description" content="The DivineLab Concurrent Method: an evidence-led strategy methodology for market entry, commercialisation, transformation and applied AI." />
        <link rel="canonical" href="https://divinelabworx.com/methodology" />
        <meta property="og:title" content="The DivineLab Concurrent Method | Divine Lab Worx" />
        <meta property="og:description" content="Strategy, delivery and evidence designed together. Five workstreams mature across six evidence gates." />
        <meta property="og:url" content="https://divinelabworx.com/methodology" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <meta name="answer-engine:question" content="What makes Divine Lab Worx different?" />
        <meta name="answer-engine:answer" content="We do not separate strategy from the system required to deliver it. Market evidence, the offer, operating process, technology, economics and assurance mature together, with evidence controlling each major commitment." />
        <script type="application/ld+json">{JSON.stringify(methodologyJsonLd)}</script>
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
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-gold uppercase">
                  The DivineLab Concurrent Method
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-accent-muted border border-silver-steel/20 rounded-full px-3 py-1">
                  MTH / INTL
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white leading-[1.08] mb-5">
                Strategy, delivery and evidence <span className="text-gold">designed together.</span>
              </h1>
              <div className="w-12 h-0.5 bg-gold mb-6" />
              <p className="text-base sm:text-lg text-accent-muted leading-relaxed max-w-2xl">
                An evidence-led business strategy methodology for market entry, commercialisation,
                transformation, infrastructure and applied AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="#method-system"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-obsidian text-xs sm:text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
                >
                  Explore the Method
                  <ArrowRight size={16} />
                </a>
                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-silver-steel/30 text-optical-white text-xs sm:text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors"
                >
                  Read Our Insights
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Direct answer */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">
            <div>
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-3 block">
                Direct answer
              </span>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-optical-white">
                What makes Divine Lab Worx different?
              </h2>
            </div>
            <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
              We do not separate strategy from the system required to deliver it. Market evidence,
              the offer, operating process, technology, economics and assurance mature together,
              with evidence controlling each major commitment.
            </p>
          </div>
        </section>

        {/* The advantage */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-10"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                01 / The advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-3">
                Designed to survive contact with reality.
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                The method keeps the commercial promise and the delivery system connected while
                change is still affordable.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {advantages.map((item, i) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="border border-silver-steel/20 p-6 hover:border-gold/50 transition-all duration-300 bg-obsidian/30"
                >
                  <span className="text-2xl font-bold text-gold/20 block mb-3">{item.number}</span>
                  <h3 className="text-base font-semibold text-optical-white mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-accent-muted leading-relaxed">
                    {item.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* The method system: application selector */}
        <section id="method-system" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-8"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                02 · The DivineLab Concurrent Method
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-3">
                One method. Five commercial applications.
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Strategy, delivery, economics, assurance and evidence mature together. Choose an
                application to see how the decision system adapts.
              </p>
            </motion.div>

            {/* Application selector */}
            <div
              className="flex flex-wrap gap-2 mb-8"
              role="tablist"
              aria-label="Explore the methodology by application"
            >
              {applications.map((a, i) => (
                <button
                  key={a.id}
                  role="tab"
                  aria-selected={i === active}
                  aria-controls={`method-panel-${a.id}`}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2.5 text-[11px] sm:text-xs font-mono tracking-wider uppercase transition-all cursor-pointer border ${
                    i === active
                      ? 'bg-gold text-obsidian border-gold font-semibold'
                      : 'bg-transparent text-accent-muted border-silver-steel/25 hover:border-gold/60 hover:text-gold'
                  }`}
                >
                  {a.label}
                </button>
              ))}
            </div>

            {/* Keyed panel: remounts on tab change so the content always swaps */}
            <motion.div
              key={app.id}
              id={`method-panel-${app.id}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
                {/* Kicker + summary */}
                <div className="border border-silver-steel/10 bg-obsidian/40 p-6 sm:p-8 mb-5">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="font-mono text-[10px] sm:text-xs tracking-[0.18em] text-gold uppercase">
                      {app.kicker}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.15em] text-accent-muted">
                      Five workstreams · one decision system
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-accent-muted leading-relaxed max-w-4xl">
                    {app.summary}
                  </p>

                  {/* Workstream × gate grid */}
                  <div className="mt-7 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
                    <div className="min-w-[520px]">
                      {app.tracks.map((track) => (
                        <div key={track} className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-[10px] tracking-wider text-accent-muted uppercase w-24 flex-shrink-0">
                            {track}
                          </span>
                          <div className="flex gap-1.5 flex-1">
                            {app.stages.map((stage) => (
                              <span
                                key={stage}
                                title={`${track}: ${stage}`}
                                className="h-1.5 flex-1 rounded-full bg-gradient-to-r from-gold/50 to-gold/15"
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center gap-3 mt-3 pt-3 border-t border-silver-steel/10">
                        <span className="w-24 flex-shrink-0" />
                        <div className="flex gap-1.5 flex-1">
                          {app.stages.map((stage) => (
                            <span
                              key={stage}
                              className="flex-1 font-mono text-[9px] sm:text-[10px] tracking-wider text-gold uppercase text-center"
                            >
                              {stage}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Line of sight */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2 mb-6 px-1">
                  <span className="font-mono text-[9px] tracking-widest text-accent-muted/70 uppercase mr-1">
                    Line of sight
                  </span>
                  {app.lineOfSight.map((node, i) => (
                    <span key={node} className="flex items-center gap-2">
                      <span className="text-[11px] sm:text-xs text-silver-steel">{node}</span>
                      {i < app.lineOfSight.length - 1 && (
                        <span className="text-gold/60 text-xs" aria-hidden="true">→</span>
                      )}
                    </span>
                  ))}
                </div>

                {/* Six steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {app.steps.map((step, i) => (
                    <motion.article
                      key={step.number}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: i * 0.05 }}
                      className="border border-silver-steel/15 bg-obsidian/30 p-6 hover:border-gold/50 transition-colors duration-300 flex flex-col"
                    >
                      <div className="flex items-baseline justify-between mb-3">
                        <span className="text-2xl font-bold text-gold/25">{step.number}</span>
                        <span className="font-mono text-[9px] tracking-widest text-accent-muted uppercase">
                          {app.stages[i]}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-optical-white tracking-tight mb-1.5">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-silver-steel leading-relaxed mb-2">
                        {step.headline}
                      </p>
                      <p className="text-xs text-accent-muted leading-relaxed flex-1">
                        {step.detail}
                      </p>
                      <span className="mt-4 pt-3 border-t border-silver-steel/10 font-mono text-[9px] tracking-wider text-gold uppercase">
                        Controlled output · {step.output}
                      </span>
                    </motion.article>
                  ))}
                </div>
              </motion.div>


            <p className="text-xs sm:text-sm text-accent-muted/80 leading-relaxed mt-8 max-w-3xl">
              {workstreamsNote}
            </p>
          </div>
        </section>

        {/* Decision discipline */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mb-10"
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                04 / Decision discipline
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-3">
                What changes when decisions are concurrent?
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Strategy implementation becomes a controlled progression of evidence, rather than a
                handover between disconnected teams.
              </p>
            </motion.div>
            <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-silver-steel/20">
                    <th className="py-3 pr-4 font-mono text-[10px] tracking-widest text-accent-muted uppercase font-medium">
                      Decision
                    </th>
                    <th className="py-3 px-4 font-mono text-[10px] tracking-widest text-accent-muted uppercase font-medium">
                      Sequential approach
                    </th>
                    <th className="py-3 pl-4 font-mono text-[10px] tracking-widest text-gold uppercase font-medium">
                      Concurrent method
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-silver-steel/10">
                  {disciplineRows.map((row) => (
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
          </div>
        </section>

        {/* Research foundation */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 bg-tile-bg/40">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-accent-muted uppercase mb-3 block">
                Research foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-3">
                Established engineering discipline. Broader commercial application.
              </h2>
              <p className="text-sm sm:text-base text-accent-muted leading-relaxed">
                Concurrent engineering integrates product development with the design and production
                processes required to deliver it. Divine Lab Worx extends that logic into market
                strategy, commercial operations, transformation and investment decisions.
              </p>
            </motion.div>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10"
            >
              <li className="py-4">
                <span className="font-mono text-[10px] tracking-widest text-gold uppercase block mb-1">
                  Primary source
                </span>
                <a
                  href="https://www.cirp.net/component/cirppubli/?task=searchkeynote&year=1992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-silver-steel hover:text-gold transition-colors"
                >
                  CIRP Annals: Concurrent Engineering, 1992
                </a>
              </li>
              <li className="py-4">
                <span className="font-mono text-[10px] tracking-widest text-gold uppercase block mb-1">
                  Academic context
                </span>
                <a
                  href="https://www.handbook.unsw.edu.au/undergraduate/courses/2026/MANF4150"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-silver-steel hover:text-gold transition-colors"
                >
                  UNSW: Concurrent Engineering of Smart Product and Manufacturing Systems
                </a>
              </li>
            </motion.ul>
          </div>
        </section>

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
                The methodology, made clear.
              </h2>
            </motion.div>
            <div className="divide-y divide-silver-steel/10 border-t border-b border-silver-steel/10">
              {methodologyFaqs.map((faq, i) => (
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
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-gold uppercase mb-4 block">
              Start with the decision
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-5">
              Put the method to work on your next commitment.
            </h2>
            <p className="text-base text-accent-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us where the business is now, what has to change and which commercial decision
              is next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors w-full sm:w-auto justify-center"
              >
                Start an Engagement
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 px-8 py-4 border border-silver-steel/30 text-optical-white text-sm font-semibold tracking-tight hover:border-gold hover:text-gold transition-colors w-full sm:w-auto justify-center"
              >
                See All Capabilities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Methodology;
