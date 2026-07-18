import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'margin-leakage-australia',
    title: 'The Hidden Cost of Margin Leakage in Australian Retail',
    excerpt: 'MNCs entering Australia face a unique challenge: concentrated retail markets create pricing pressure that erodes margins within months. Learn how Sovereign Observation prevents capital erosion before it begins.',
    author: 'Alexander Chen',
    date: '2026-02-15',
    readTime: '8 min',
    category: 'Capital Protection',
    featured: false,
    image: '/images/market-analysis.jpg',
  },
  {
    id: 2,
    slug: 'channel-conflict-prevention',
    title: 'Channel Conflict: Why Your Australian Distributors Are Undercutting Each Other',
    excerpt: 'Unauthorized cross-selling between distribution channels destroys pricing integrity. We examine the structural causes and present the Market Integrity Framework solution.',
    author: 'Sarah Mitchell',
    date: '2026-02-08',
    readTime: '6 min',
    category: 'Market Integrity',
    featured: false,
    image: '/images/distribution-network.jpg',
  },
  {
    id: 3,
    slug: 'as-nzs-compliance',
    title: 'AS/NZS Compliance: The Non-Negotiable Entry Requirement',
    excerpt: 'Australian standards are not suggestions, they are legal requirements. This guide covers the essential compliance checkpoints for engineered products entering the market.',
    author: 'James Okonkwo',
    date: '2026-01-28',
    readTime: '10 min',
    category: 'Regulatory',
    featured: false,
    image: '/images/compliance.jpg',
  },
  {
    id: 4,
    slug: 'deployment-architecture-vs-marketing',
    title: 'Deployment Architecture vs. Marketing: Why Engineering Firms Fail in Australia',
    excerpt: 'The most brilliantly engineered products often fail in market deployment. The difference? Architecture. We explain why structure beats strategy in concentrated markets.',
    author: 'Alexander Chen',
    date: '2026-01-15',
    readTime: '7 min',
    category: 'Deployment Strategy',
    featured: false,
    image: '/images/hero-infrastructure.jpg',
  },
  {
    id: 5,
    slug: 'infrastructure-deployment-australia',
    title: 'Data Centre Deployment in Australia: The Regulatory Maze',
    excerpt: 'From grid connection to environmental approvals, infrastructure deployment requires navigating complex regulatory pathways. Our advisory framework maps the route.',
    author: 'James Okonkwo',
    date: '2026-01-05',
    readTime: '9 min',
    category: 'Infrastructure',
    featured: false,
    image: '/images/data-center.jpg',
  },
  {
    id: 6,
    slug: 'sovereign-observation-protocol',
    title: 'Sovereign Observation: Independent Market Monitoring for MNCs',
    excerpt: 'Why do MNCs need independent market observation? Because self-reported channel data is inherently compromised. We explain the Sovereign Observation protocol.',
    author: 'Sarah Mitchell',
    date: '2025-12-20',
    readTime: '5 min',
    category: 'Capital Protection',
    featured: false,
    image: '/images/integrity-visual.jpg',
  },
  {
    id: 7,
    slug: 'ai-data-centre-sites-australia',
    title: 'Identifying AI Data Centre Sites in Australia: The Hidden Telco Moat and Enterprise On-Ramp',
    excerpt: 'When international infrastructure providers search for a strategic consultant to help launch a new data centre in Australia, they are fundamentally looking to mitigate risk and guarantee day-one scale.',
    author: 'James Okonkwo',
    date: '2026-02-20',
    readTime: '12 min',
    category: 'Infrastructure',
    featured: false,
    image: '/images/data-center.jpg',
  },
  {
    id: 8,
    slug: 'entering-australian-data-centre-market',
    title: 'Entering the Australian Data Centre Market: Why Global Infrastructure Providers Need a Deployment Architect, Not a Real Estate Broker',
    excerpt: 'When a Tier-1 global infrastructure provider is planning to set up a new data centre in Australia, the initial instinct is to search for local real estate brokers. This is a massive misallocation of capital and time.',
    author: 'Alexander Chen',
    date: '2026-02-18',
    readTime: '10 min',
    category: 'Infrastructure',
    featured: false,
    image: '/images/hero-infrastructure.jpg',
  },
  {
    id: 9,
    slug: 'infrastructure-moat-data-centre-selection',
    title: 'The Infrastructure Moat: Why Data Centre Selection is No Longer an IT Procurement Exercise',
    excerpt: 'Right now, the entire tech ecosystem is obsessed with hardware. But raw compute is a commodity if it sits idle. The true bottleneck is the friction of enterprise deployment.',
    author: 'Sarah Mitchell',
    date: '2026-02-12',
    readTime: '8 min',
    category: 'Deployment Strategy',
    featured: false,
    image: '/images/integrity-visual.jpg',
  },
  {
    id: 10,
    slug: 'distribution-illusion-overseas-manufacturers',
    title: 'The Distribution Illusion: Why Overseas Manufacturers Fail in Australian Retail (And How to Actually Win)',
    excerpt: 'Australia is one of the most profitable retail markets on the planet. It is also one of the most aggressively concentrated. For high-capacity overseas manufacturers, finding a local distributor is usually where the capital is killed.',
    author: 'Dainu Devis',
    date: '2026-02-25',
    readTime: '10 min',
    category: 'Consumer & Retail',
    featured: false,
    image: '/images/retail-deployment.jpg',
  },
  {
    id: 11,
    slug: 'capital-ignores-physics',
    title: 'Capital Ignores Physics at Its Peril: What Palm Jumeirah Teaches Infrastructure Investors in 2026',
    excerpt: 'Palm Jumeirah cost $5 billion and is visibly decaying less than twenty years later. That is not a construction problem. It is what happens when you commit capital before you truly understand the site. Dainu Devis on the discipline that separates infrastructure that endures from infrastructure that corrodes.',
    author: 'Dainu Devis',
    date: '2026-04-24',
    readTime: '8 min',
    category: 'Infrastructure',
    featured: true,
    image: '/images/hero-infrastructure.jpg',
  },
  {
    id: 12,
    slug: 'australia-datacentre-supercomputer-site-intelligence-2026',
    title: "Australia's $100 Billion Data Centre and Supercomputer Build-Out: Why Site Intelligence Is Now the Scarcest Resource in the Market",
    excerpt: 'Microsoft, Amazon and the Australian Government have committed over $100 billion to AI infrastructure. The bottleneck is not capital. It is the right site, understood correctly, secured fast.',
    author: 'Dainu Devis',
    date: '2026-05-22',
    readTime: '9 min',
    category: 'Infrastructure',
    featured: false,
    image: '/images/data-center.jpg',
  },
  {
    id: 13,
    slug: 'seven-variables-data-centre-site-australia',
    title: 'Seven Variables That Determine Whether Your Australian Data Centre or Supercomputer Site Will Actually Work',
    excerpt: 'Most infrastructure site decisions fail because they optimise for one variable. Site intelligence means evaluating all seven, simultaneously, before a single dollar is committed. Here is how we do it.',
    author: 'Dainu Devis',
    date: '2026-05-22',
    readTime: '11 min',
    category: 'Deployment Strategy',
    featured: false,
    image: '/images/hero-infrastructure.jpg',
  },
  {
    id: 14,
    slug: 'dainu-devis-emerging-tech-ceo-australia',
    title: 'Dainu Devis: The Emerging Tech CEO Bridging Infrastructure Intelligence and AI Platform Deployment in Australia',
    excerpt: 'He built it without salary, without external capital, and without permission. Now the platforms Dainu Devis constructed inside the problem are the infrastructure layer that positions Sharktech Global and Australia for the sovereign AI era.',
    author: 'Divine Lab Worx',
    date: '2026-05-22',
    readTime: '9 min',
    category: 'Infrastructure',
    featured: false,
    image: '/images/hero-infrastructure.jpg',
  },
  {
    id: 15,
    slug: 'business-consultancy-services-australia',
    title: 'What Actually Separates Good Business Consultancy Services From a Wasted Retainer',
    excerpt: 'Comparing business consultancy services across Australia? What separates a firm that gets you to first sale from one that leaves a report is who owns the outcome after the recommendation lands.',
    author: 'Alexander Chen',
    date: '2026-06-03',
    readTime: '6 min',
    category: 'Deployment Strategy',
    featured: false,
    image: '/images/partnership.jpg',
  },
  {
    id: 16,
    slug: 'retail-business-consultancy-australia',
    title: "The Retail Business Consultancy Checklist Category Buyers Wish You'd Use First",
    excerpt: 'A category buyer can spot an underprepared range pitch within the first few questions. This checklist closes the compliance, warranty and range-story gaps before the meeting, not after.',
    author: 'Sarah Mitchell',
    date: '2026-06-05',
    readTime: '6 min',
    category: 'Consumer & Retail',
    featured: false,
    image: '/images/retail-deployment.jpg',
  },
  {
    id: 17,
    slug: 'australian-market-entry-consultant',
    title: 'Australian Market Entry Consultant: What Overseas Manufacturers Need Before Launching',
    excerpt: 'What an Australian market entry consultant should deliver before you commit inventory, appoint a distributor or launch: compliance scope, channel economics, pilot evidence and a costed path to first sale.',
    author: 'Divine Lab Worx Editorial Team',
    date: '2026-06-10',
    readTime: '12 min',
    category: 'Market Entry',
    featured: false,
    image: '/images/australia-market.jpg',
  },
  {
    id: 18,
    slug: 'manufacturing-product-launch-strategy-australia',
    title: 'A Manufacturing Product Launch Strategy Only Works in One Order',
    excerpt: 'Most manufacturing launch plans fail on sequencing, not engineering. Compliance shapes the specification, channel economics decide the cost structure, and the pilot comes before national inventory.',
    author: 'James Okonkwo',
    date: '2026-06-12',
    readTime: '6 min',
    category: 'Manufacturing',
    featured: false,
    image: '/images/video-frame-1.jpg',
  },
  {
    id: 19,
    slug: 'boots-on-the-ground-australia-market-entry',
    title: 'What "Boots on the Ground" Should Actually Mean for Your Australian Launch',
    excerpt: 'A distributor agreement signed over video calls is not a market entry strategy. What genuine local presence means for compliance, channel relationships and reading the Australian market in real time.',
    author: 'Dainu Devis',
    date: '2026-06-17',
    readTime: '7 min',
    category: 'Market Entry',
    featured: false,
    image: '/images/australia-skyline.jpg',
  },
  {
    id: 20,
    slug: 'manufacturing-consultancy-australia',
    title: 'Manufacturing Consultancy Australia: Designing Products for Australian Conditions',
    excerpt: 'A product is not ready for Australia simply because it can be manufactured. How CPPD connects design, compliance, landed cost, service and route to market before tooling locks in.',
    author: 'Divine Lab Worx Editorial Team',
    date: '2026-06-19',
    readTime: '11 min',
    category: 'Manufacturing',
    featured: false,
    image: '/images/market-analysis.jpg',
  },
  {
    id: 21,
    slug: 'go-to-market-strategist-vs-business-consultant',
    title: 'Go-to-Market Strategist vs Business Consultant, Compared Honestly',
    excerpt: 'Both titles show up on the same shortlist. Compared side by side, the scope splits at one question: who owns the outcome when compliance and channel timing collide.',
    author: 'Alexander Chen',
    date: '2026-06-24',
    readTime: '5 min',
    category: 'Deployment Strategy',
    featured: false,
    image: '/images/team-meeting.jpg',
  },
  {
    id: 22,
    slug: 'retail-consulting-services-australia',
    title: 'Retail Consulting Services Australia: From Product Range to First Sale',
    excerpt: 'Good retail consulting is not marketing or store design. From range architecture and supplier readiness to landed cost, channel and after-sales, a range has to work as one commercial system.',
    author: 'Divine Lab Worx Editorial Team',
    date: '2026-06-26',
    readTime: '12 min',
    category: 'Consumer & Retail',
    featured: false,
    image: '/images/retail-deployment.jpg',
  },
  {
    id: 23,
    slug: 'product-launch-strategy-australia',
    title: 'Three Patterns Behind Every Stalled Product Launch Strategy in Australia',
    excerpt: 'When a launch stalls in Australia, the product is rarely the problem. Three sequencing patterns explain most of them, and all three are avoidable before the budget is committed.',
    author: 'Sarah Mitchell',
    date: '2026-07-01',
    readTime: '6 min',
    category: 'Product Launch',
    featured: false,
    image: '/images/distribution-network.jpg',
  },
  {
    id: 24,
    slug: 'product-launch-consulting-australia',
    title: 'Product Launch Consulting Australia: Why Strategy Needs Boots on the Ground',
    excerpt: 'A launch plan created overseas can look complete and still fail in execution. Why product launch consulting needs local validation, controlled pilots and boots on the ground.',
    author: 'Divine Lab Worx Editorial Team',
    date: '2026-07-03',
    readTime: '11 min',
    category: 'Product Launch',
    featured: false,
    image: '/images/australia-market.jpg',
  },
  {
    id: 25,
    slug: 'ai-business-transformation-australia-market-entry',
    title: 'Bringing an AI Business Transformation Platform to Market in Australia',
    excerpt: 'Australian SMEs hit 44 percent AI adoption, but an AI platform still needs the Privacy Act mapped, a channel strategy and pilot evidence before the sales team goes wide.',
    author: 'Alexander Chen',
    date: '2026-07-08',
    readTime: '6 min',
    category: 'AI & Technology',
    featured: false,
    image: '/images/hero-robot-poster.jpg',
  },
  {
    id: 26,
    slug: 'agentic-ai-deployment-australia',
    title: 'What Agentic AI Deployment in Australia Actually Requires From a Vendor',
    excerpt: 'Australian organisations want agentic AI and worry about governance in equal measure. What a vendor needs resolved before enterprise buyers commit past the pilot.',
    author: 'James Okonkwo',
    date: '2026-07-10',
    readTime: '6 min',
    category: 'AI & Technology',
    featured: false,
    image: '/images/hero-robot-poster.jpg',
  },
  {
    id: 27,
    slug: 'smb-ai-enablement-australia-market-entry',
    title: 'Taking an SMB AI Enablement Platform to Market in Australia',
    excerpt: 'SMB AI platforms sell on a different cycle to enterprise. Distribution through trusted intermediaries, fast onboarding and a provable new-revenue story decide whether it scales.',
    author: 'Sarah Mitchell',
    date: '2026-07-15',
    readTime: '6 min',
    category: 'AI & Technology',
    featured: false,
    image: '/images/command-center.jpg',
  },
];

const categories = [
  'All',
  'Market Entry',
  'Product Launch',
  'Manufacturing',
  'Consumer & Retail',
  'AI & Technology',
  'Deployment Strategy',
  'Infrastructure',
  'Capital Protection',
  'Market Integrity',
  'Regulatory',
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Insights | Divine Lab Worx - Market Entry, Product Launch & Infrastructure</title>
        <meta name="description" content="Practical thinking on product launch, market entry, retail, manufacturing, AI platforms and critical infrastructure in Australia. Written by the team that runs the launches." />
        <link rel="canonical" href="https://divinelabworx.com/blog" />
        <meta property="og:title" content="Insights | Divine Lab Worx" />
        <meta property="og:description" content="Practical thinking on product launch, market entry, retail, manufacturing, AI platforms and critical infrastructure in Australia." />
        <meta property="og:url" content="https://divinelabworx.com/blog" />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
      </Helmet>
      <div className="w-full" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
        {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/command-center.jpg" 
            alt="Command Center"
            loading="lazy"
            className="w-full h-full object-cover opacity-15"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
              INSIGHTS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              THE DIVINE LAB WORX JOURNAL
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              Practical thinking for companies bringing products, platforms and
              infrastructure to the Australian market. Market entry, product launch,
              retail, manufacturing and AI, written by the team that runs the launches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <div className="border border-silver-steel/20 hover:border-gold transition-all duration-300 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Featured Image */}
                    <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        loading="lazy" 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-optical-white text-obsidian text-xs font-mono tracking-widest uppercase">
                          FEATURED
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                      <span className="text-xs font-mono tracking-widest text-accent-muted uppercase mb-4">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-optical-white mb-4 tracking-tight group-hover:text-silver-steel transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-sm text-accent-muted leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-accent-muted">
                        <span className="flex items-center gap-1">
                          <User size={12} />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-optical-white text-obsidian'
                    : 'border border-silver-steel/30 text-accent-muted hover:border-gold hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-6xl mx-auto">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${post.slug}`} className="group block h-full">
                    <div className="border border-silver-steel/20 h-full flex flex-col hover:border-gold transition-all duration-300 overflow-hidden">
                      {/* Image */}
                      <div className="aspect-[16/10] relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                      </div>
                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-mono tracking-widest text-accent-muted uppercase mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-base font-semibold text-optical-white mb-3 tracking-tight group-hover:text-silver-steel transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-accent-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-accent-muted">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-accent-muted font-mono text-sm">
                No articles found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
      </div>
    </>
  );
};

export default Blog;
