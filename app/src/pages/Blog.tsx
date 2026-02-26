import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

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
    featured: true,
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
    excerpt: 'Australian standards are not suggestions—they are legal requirements. This guide covers the essential compliance checkpoints for engineered products entering the market.',
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
    featured: true,
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
];

const categories = [
  'All',
  'Capital Protection',
  'Market Integrity',
  'Deployment Strategy',
  'Regulatory',
  'Infrastructure',
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/command-center.jpg" 
            alt="Command Center"
            loading="lazy"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/90 to-obsidian" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-6 block">
              INTELLIGENCE & INSIGHTS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-optical-white mb-6">
              DEPLOYMENT ARCHITECTURE JOURNAL
            </h1>
            <p className="text-base sm:text-lg text-accent-muted leading-relaxed">
              Strategic intelligence for MNCs entering Australia. Market analysis, 
              regulatory updates, and deployment architecture best practices from 
              our Commercial Architects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to={`/blog/${featuredPost.slug}`} className="group block">
                <div className="border border-silver-steel/20 hover:border-optical-white transition-all duration-300 overflow-hidden">
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
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all ${
                  index === 0
                    ? 'bg-optical-white text-obsidian'
                    : 'border border-silver-steel/30 text-accent-muted hover:border-optical-white hover:text-optical-white'
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
                  <div className="border border-silver-steel/20 h-full flex flex-col hover:border-optical-white transition-all duration-300 overflow-hidden">
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
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/australia-market.jpg" 
            alt="Australia Market" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border border-silver-steel/20 p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-4">
              DEPLOYMENT INTELLIGENCE
            </h2>
            <p className="text-sm text-accent-muted mb-8 max-w-lg mx-auto">
              Subscribe to receive market analysis, regulatory updates, and deployment 
              architecture insights directly from our Commercial Architects.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="CORPORATE EMAIL"
                className="flex-1 bg-transparent border border-silver-steel/30 px-4 py-3 text-sm font-mono text-optical-white placeholder:text-accent-muted/50 focus:border-optical-white outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-optical-white text-obsidian text-sm font-semibold tracking-tight hover:bg-silver-steel transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
            <p className="mt-4 text-xs font-mono text-accent-muted/60">
              NO SPAM. UNSUBSCRIBE ANYTIME.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-optical-white mb-6">
              NEED SPECIFIC DEPLOYMENT GUIDANCE?
            </h2>
            <p className="text-sm text-accent-muted mb-8 max-w-xl mx-auto">
              Our Commercial Architects provide personalized deployment architecture 
              for your specific market entry challenges.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian text-sm font-semibold tracking-tight hover:bg-gold-light transition-colors"
            >
              SCHEDULE CONSULTATION
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
