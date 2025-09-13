// Basic SEO helper to set per-page/per-post metadata at runtime

type SeoOptions = {
  title: string;
  description?: string;
  url?: string; // absolute or relative; will default to current location
  type?: 'website' | 'article';
  image?: string; // path or absolute URL
  canonical?: string; // absolute or relative; falls back to url/location
};

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function setSeo(opts: SeoOptions) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const url = opts.url || (typeof window !== 'undefined' ? window.location.href : '/');
  const canonical = opts.canonical || url;
  const image = opts.image || '/RailCore_Logo_New.jpeg';
  const type = opts.type || 'website';

  document.title = opts.title;

  if (opts.description) {
    upsertMetaByName('description', opts.description);
    upsertMetaByProperty('og:description', opts.description);
    upsertMetaByName('twitter:description', opts.description);
  }

  upsertMetaByProperty('og:site_name', 'RailCore');
  upsertMetaByProperty('og:type', type);
  upsertMetaByProperty('og:title', opts.title);
  upsertMetaByProperty('og:url', url.startsWith('http') ? url : origin + url);
  upsertMetaByProperty('og:image', image.startsWith('http') ? image : origin + image);

  upsertMetaByName('twitter:card', 'summary_large_image');
  upsertMetaByName('twitter:title', opts.title);
  upsertMetaByName('twitter:image', image.startsWith('http') ? image : origin + image);

  // Canonical link
  upsertLink('canonical', canonical.startsWith('http') ? canonical : origin + canonical);
}

export function setArticleJsonLd(params: {
  headline: string;
  description?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: params.url ? (params.url.startsWith('http') ? params.url : origin + params.url) : (typeof window !== 'undefined' ? window.location.href : ''),
    datePublished: params.datePublished,
    dateModified: params.dateModified || params.datePublished,
    author: params.authorName ? { '@type': 'Person', name: params.authorName } : undefined,
    image: params.image ? (params.image.startsWith('http') ? params.image : origin + params.image) : undefined,
  } as any;

  // Remove undefined fields to keep JSON lean
  Object.keys(data).forEach((k) => (data as any)[k] === undefined && delete (data as any)[k]);

  let el = document.getElementById('ld-json-primary') as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = 'ld-json-primary';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}
