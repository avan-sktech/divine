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
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-tight text-optical-white">
                DIVINE LAB WORX
              </span>
              <span className="text-sm text-accent-muted">//</span>
              <span className="text-sm text-accent-muted">
                PART OF SHARKTECH GLOBAL
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-xs font-mono text-accent-muted/60 hover:text-optical-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-xs font-mono text-accent-muted/60 hover:text-optical-white transition-colors">
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
