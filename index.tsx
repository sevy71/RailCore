import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Adjust base SEO tags for environment (previews/staging) without breaking prod defaults
function adjustBaseSeoForEnv() {
  const SITE_URL = (import.meta as any).env?.VITE_SITE_URL as string | undefined;
  const NO_INDEX = (import.meta as any).env?.VITE_NO_INDEX as string | undefined;
  const mode = (import.meta as any).env?.MODE;

  // Update canonical and og:url to SITE_URL if provided
  if (SITE_URL) {
    const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/';
    const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (ogUrl) ogUrl.setAttribute('content', SITE_URL.endsWith('/') ? SITE_URL : SITE_URL + '/');
  }

  // Add noindex for non-production or when explicitly requested
  if (mode !== 'production' || (NO_INDEX && NO_INDEX.toLowerCase() === 'true')) {
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      document.head.appendChild(robots);
    }
    robots.setAttribute('content', 'noindex, nofollow');
  }
}

adjustBaseSeoForEnv();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
