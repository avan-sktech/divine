import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root')!;
const app = (
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Use hydration if pre-rendered content exists, otherwise full render
if (rootElement.innerHTML.trim()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
