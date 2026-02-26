import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import GridBackground from '../GridBackground';

const Layout = () => {
  return (
    <GridBackground>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>
        {/* Footer */}
        <footer className="w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-silver-steel/10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
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
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs font-mono text-accent-muted/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs font-mono text-accent-muted/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
              <p className="text-xs font-mono text-accent-muted/60">
                © 2026 DIVINE LAB WORX
              </p>
            </div>
          </div>
        </footer>
      </div>
    </GridBackground>
  );
};

export default Layout;
