import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import CapabilityCPPD from './pages/CapabilityCPPD';
import MarketEntryStrategy from './pages/MarketEntryStrategy';
import RegulatoryCompliance from './pages/RegulatoryCompliance';
import ChannelStrategy from './pages/ChannelStrategy';
import GoToMarketStrategy from './pages/GoToMarketStrategy';
import CapitalEfficientGrowth from './pages/CapitalEfficientGrowth';
import AiAdvisory from './pages/AiAdvisory';
import StrategyTransformation from './pages/StrategyTransformation';
import Methodology from './pages/Methodology';
import Industries from './pages/Industries';
import IndustryCriticalInfrastructure from './pages/IndustryCriticalInfrastructure';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogAuthor from './pages/BlogAuthor';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="capabilities" element={<Capabilities />} />
          <Route path="capabilities/concurrent-product-process-design" element={<CapabilityCPPD />} />
          <Route path="capabilities/market-entry-strategy" element={<MarketEntryStrategy />} />
          <Route path="capabilities/regulatory-and-compliance" element={<RegulatoryCompliance />} />
          <Route path="capabilities/channel-strategy" element={<ChannelStrategy />} />
          <Route path="capabilities/go-to-market-strategy" element={<GoToMarketStrategy />} />
          <Route path="capabilities/capital-efficient-growth" element={<CapitalEfficientGrowth />} />
          <Route path="capabilities/ai-advisory" element={<AiAdvisory />} />
          <Route path="capabilities/strategy-and-transformation" element={<StrategyTransformation />} />
          <Route path="methodology" element={<Methodology />} />

          {/* Legacy and design-package URLs, also 301-redirected at the edge in vercel.json */}
          <Route path="services" element={<Navigate to="/capabilities" replace />} />
          <Route path="market-entry-australia" element={<Navigate to="/capabilities/market-entry-strategy" replace />} />
          <Route path="go-to-market-strategy" element={<Navigate to="/capabilities/go-to-market-strategy" replace />} />
          <Route path="channel-strategy" element={<Navigate to="/capabilities/channel-strategy" replace />} />
          <Route path="product-commercialisation" element={<Navigate to="/capabilities/concurrent-product-process-design" replace />} />
          <Route path="capital-efficient-growth" element={<Navigate to="/capabilities/capital-efficient-growth" replace />} />
          <Route path="advisory" element={<Navigate to="/capabilities/ai-advisory" replace />} />
          <Route path="work" element={<Navigate to="/capabilities/strategy-and-transformation" replace />} />
          <Route path="infrastructure" element={<Navigate to="/industries/critical-infrastructure" replace />} />
          <Route path="construction" element={<Navigate to="/industries" replace />} />
          <Route path="insights" element={<Navigate to="/blog" replace />} />
          <Route path="insights/:slug" element={<Navigate to="/blog" replace />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/critical-infrastructure" element={<IndustryCriticalInfrastructure />} />
          {/* Retired vertical, also 301-redirected at the edge in vercel.json */}
          <Route path="industries/electric-powersports" element={<Navigate to="/industries" replace />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/author/:authorSlug" element={<BlogAuthor />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
