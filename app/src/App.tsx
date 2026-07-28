import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import CapabilityCPPD from './pages/CapabilityCPPD';
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
          {/* Legacy URL, also 301-redirected at the edge in vercel.json */}
          <Route path="services" element={<Navigate to="/capabilities" replace />} />
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
