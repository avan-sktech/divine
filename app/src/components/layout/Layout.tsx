import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import GridBackground from '../GridBackground';

const exploreLinks = [
  { to: '/capabilities', label: 'Capabilities' },
  { to: '/methodology', label: 'Methodology' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Insights' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const capabilityLinks = [
  { to: '/capabilities/market-entry-strategy', label: 'Market-entry strategy' },
  { to: '/capabilities/regulatory-and-compliance', label: 'Regulatory and compliance' },
  { to: '/capabilities/channel-strategy', label: 'Distribution and channel' },
  { to: '/capabilities/concurrent-product-process-design', label: 'Product-to-market (CPPD)' },
  { to: '/capabilities/go-to-market-strategy', label: 'Launch and demand' },
  { to: '/capabilities/capital-efficient-growth', label: 'Capital-efficient growth' },
  { to: '/capabilities/ai-advisory', label: 'AI advisory' },
  { to: '/capabilities/strategy-and-transformation', label: 'Strategy and transformation' },
];

const industryLinks = [
  { to: '/industries', label: 'Retail' },
  { to: '/industries', label: 'Manufacturing' },
  { to: '/industries', label: 'Sustainable & 3D homes' },
  { to: '/industries/critical-infrastructure', label: 'Critical infrastructure' },
];

const Layout = () => {
  return (
    <GridBackground>
      <div className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />
        <main id="main-content" className="flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>
        {/* Footer */}
        <footer className="w-full px-4 sm:px-6 lg:px-8 pt-12 pb-8 border-t border-silver-steel/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold tracking-tight text-optical-white">
                    DIVINE LAB WORX
                  </span>
                  <div className="h-4 w-px bg-silver-steel/30" />
                  <div className="w-24 sm:w-28">
                    <img
                      src="/images/sharktech-logo.png"
                      alt="Part of Sharktech Global"
                      loading="lazy"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs text-accent-muted leading-relaxed max-w-[42ch]">
                  Strategy, engineering and market action in one accountable team. We take
                  products, systems and facilities from concept to after-sales across Australia
                  and international markets.
                </p>
              </div>

              {/* Capabilities */}
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-accent-muted/60 uppercase mb-4">
                  Capabilities
                </h4>
                <ul className="space-y-2.5">
                  {capabilityLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-xs text-accent-muted hover:text-gold transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explore */}
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-accent-muted/60 uppercase mb-4">
                  Explore
                </h4>
                <ul className="space-y-2.5">
                  {exploreLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-xs text-accent-muted hover:text-gold transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-accent-muted/60 uppercase mb-4">
                  Industries
                </h4>
                <ul className="space-y-2.5">
                  {industryLinks.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-xs text-accent-muted hover:text-gold transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-mono text-[10px] tracking-[0.2em] text-accent-muted/60 uppercase mb-4">
                  Contact
                </h4>
                <ul className="space-y-2.5 text-xs text-accent-muted">
                  <li>
                    <a href="mailto:dainudevis@sharktech.com.au" className="hover:text-gold transition-colors">
                      dainudevis@sharktech.com.au
                    </a>
                  </li>
                  <li>
                    <a href="tel:+61468017373" className="hover:text-gold transition-colors">
                      +61 468 017 373
                    </a>
                  </li>
                  <li>Level 1, 244 Macquarie St,<br />Liverpool NSW 2170</li>
                  <li>ABN 54 672 825 731</li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-silver-steel/10">
              <p className="text-xs font-mono text-accent-muted/60">
                © 2026 DIVINE LAB WORX · A division of Sharktech Global
              </p>
              <div className="flex items-center gap-6">
                <Link to="/privacy" className="text-xs font-mono text-accent-muted/60 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-xs font-mono text-accent-muted/60 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </GridBackground>
  );
};

export default Layout;
