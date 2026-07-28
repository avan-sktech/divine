import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, User } from 'lucide-react';
import { blogPosts } from './Blog';

interface AuthorData {
  slug: string;
  name: string;
  role: string;
  bio: string;
  // Byline strings in post data that map to this author
  bylines: string[];
  website?: string;
}

const authors: Record<string, AuthorData> = {
  'dainu-devis': {
    slug: 'dainu-devis',
    name: 'Dainu Devis',
    role: 'Founder & CEO, Sharktech Global and Divine Lab Worx',
    bio: 'Dainu Devis is the founder and CEO of Sharktech Global and leads Divine Lab Worx, its go-to-market consultancy arm. His background spans concurrent product and process design at UNSW, national telecommunications infrastructure delivery across 2,200 network sites for Telstra, and market entry advisory for Asian manufacturers entering Australia and New Zealand. He writes on go-to-market strategy, infrastructure site intelligence and category building.',
    bylines: ['Dainu Devis'],
    website: 'https://www.dainudevis.com/',
  },
  'alexander-chen': {
    slug: 'alexander-chen',
    name: 'Alexander Chen',
    role: 'Contributor, Divine Lab Worx Journal',
    bio: 'Alexander writes for the Divine Lab Worx journal on business consultancy, market entry economics and deployment strategy for companies bringing products and platforms to the Australian market. His pieces draw on the operating experience of the Divine Lab Worx consulting team.',
    bylines: ['Alexander Chen'],
  },
  'sarah-mitchell': {
    slug: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Contributor, Divine Lab Worx Journal',
    bio: 'Sarah writes for the Divine Lab Worx journal on retail strategy, product launch sequencing and channel design in Australia. Her pieces draw on the operating experience of the Divine Lab Worx consulting team.',
    bylines: ['Sarah Mitchell'],
  },
  'james-okonkwo': {
    slug: 'james-okonkwo',
    name: 'James Okonkwo',
    role: 'Contributor, Divine Lab Worx Journal',
    bio: 'James writes for the Divine Lab Worx journal on manufacturing, compliance pathways and critical infrastructure deployment in Australia. His pieces draw on the operating experience of the Divine Lab Worx consulting team.',
    bylines: ['James Okonkwo'],
  },
  'editorial-team': {
    slug: 'editorial-team',
    name: 'Divine Lab Worx Editorial Team',
    role: 'Research and editorial group, Divine Lab Worx',
    bio: 'The Divine Lab Worx Editorial Team publishes practical guides on Australian market entry, product launch, retail range strategy and manufacturing commercialisation. Guides are researched against Australian Government and ACCC sources and reviewed by the Divine Lab Worx consulting team, led by Dainu Devis.',
    bylines: ['Divine Lab Worx Editorial Team', 'Divine Lab Worx'],
  },
};

const BlogAuthor = () => {
  const { authorSlug } = useParams<{ authorSlug: string }>();
  const author = authorSlug ? authors[authorSlug] : null;

  if (!author) {
    return <Navigate to="/blog" replace />;
  }

  const posts = blogPosts
    .filter((post) => author.bylines.includes(post.author))
    .sort((a, b) => b.date.localeCompare(a.date));

  const authorJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': author.slug === 'editorial-team' ? 'Organization' : 'Person',
      name: author.name,
      description: author.bio,
      ...(author.website ? { url: author.website } : {}),
      worksFor: {
        '@type': 'Organization',
        name: 'Divine Lab Worx',
        parentOrganization: { '@type': 'Organization', name: 'Sharktech Global' },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{`${author.name} | Divine Lab Worx Journal`}</title>
        <meta name="description" content={author.bio.slice(0, 152)} />
        <link rel="canonical" href={`https://divinelabworx.com/blog/author/${author.slug}`} />
        <meta property="og:title" content={`${author.name} | Divine Lab Worx Journal`} />
        <meta property="og:description" content={author.bio.slice(0, 152)} />
        <meta property="og:url" content={`https://divinelabworx.com/blog/author/${author.slug}`} />
        <meta property="og:image" content="https://divinelabworx.com/images/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(authorJsonLd)}</script>
      </Helmet>
      <div className="w-full" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(192, 192, 192, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(192, 192, 192, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}>
      {/* Author Header */}
      <section className="relative pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-accent-muted hover:text-gold transition-colors mb-8"
            >
              <ArrowLeft size={14} />
              BACK TO INSIGHTS
            </Link>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-gold/50 bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                <User size={26} />
              </div>
              <div>
                <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-2 block">
                  Author
                </span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-optical-white mb-2">
                  {author.name}
                </h1>
                <p className="text-sm font-mono text-gold">{author.role}</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-accent-muted leading-relaxed mt-6 max-w-3xl">
              {author.bio}
            </p>

            {author.website && (
              <a
                href={author.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-xs font-mono tracking-widest text-gold hover:text-gold-light transition-colors"
              >
                {author.website.replace('https://www.', '').replace('https://', '').replace(/\/$/, '').toUpperCase()}
                <ExternalLink size={13} />
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Author's Articles */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-silver-steel/10">
        <div className="max-w-4xl mx-auto">
          <span className="font-mono text-xs tracking-widest text-accent-muted uppercase mb-8 block">
            Articles by {author.name} ({posts.length})
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <div className="border border-silver-steel/20 h-full flex flex-col hover:border-gold transition-all duration-300 overflow-hidden">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-mono tracking-widest text-accent-muted uppercase mb-3">
                        {post.category}
                      </span>
                      <h2 className="text-base font-semibold text-optical-white mb-3 tracking-tight group-hover:text-silver-steel transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-xs text-accent-muted leading-relaxed mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-accent-muted">
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
      </div>
    </>
  );
};

export default BlogAuthor;
