import fs from 'fs';
import path from 'path';
import { BLOG_POSTS_DATA } from '../blogPosts';

const distDir = path.resolve(process.cwd(), 'dist');
const indexPath = path.join(distDir, 'index.html');
const siteUrl = process.env.SITE_URL || 'https://railcore.co.uk';

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function withMeta(template: string, meta: { title: string; description?: string; url: string; type?: 'website'|'article'; imageUrl?: string }) {
  let html = template;
  const { title, description, url, type = 'website', imageUrl } = meta;

  // Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // Description (insert or replace)
  if (description) {
    if (html.match(/<meta name="description"[^>]*>/i)) {
      html = html.replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`);
    } else {
      html = html.replace('</head>', `  <meta name="description" content="${escapeHtml(description)}" />\n</head>`);
    }
  }

  const absoluteUrl = url.startsWith('http') ? url : siteUrl.replace(/\/$/, '') + url;

  // Canonical
  if (html.match(/<link rel="canonical"[^>]*>/i)) {
    html = html.replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${absoluteUrl}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${absoluteUrl}" />\n</head>`);
  }

  // OG
  html = upsertOg(html, 'og:title', title);
  if (description) html = upsertOg(html, 'og:description', description);
  html = upsertOg(html, 'og:url', absoluteUrl);
  html = upsertOg(html, 'og:type', type);

  // Twitter
  html = upsertNameMeta(html, 'twitter:title', title);
  if (description) html = upsertNameMeta(html, 'twitter:description', description);
  if (imageUrl) {
    const absImg = imageUrl.startsWith('http') ? imageUrl : siteUrl.replace(/\/$/, '') + imageUrl;
    html = upsertOg(html, 'og:image', absImg);
    html = upsertNameMeta(html, 'twitter:image', absImg);
  }

  return html;
}

function upsertOg(html: string, property: string, content: string) {
  const tagRe = new RegExp(`<meta\\s+property=\\"${property}\\"[^>]*>`, 'i');
  const tag = `<meta property="${property}" content="${escapeHtml(content)}" />`;
  if (html.match(tagRe)) return html.replace(tagRe, tag);
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function upsertNameMeta(html: string, name: string, content: string) {
  const tagRe = new RegExp(`<meta\\s+name=\\"${name}\\"[^>]*>`, 'i');
  const tag = `<meta name="${name}" content="${escapeHtml(content)}" />`;
  if (html.match(tagRe)) return html.replace(tagRe, tag);
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function insertJsonLd(html: string, data: any, id: string) {
  const tag = `<script id="${id}" type="application/ld+json">${JSON.stringify(data)}</script>`;
  // If an element with this id exists, replace; else insert before </head>
  const re = new RegExp(`<script[^>]*id=["']${id}["'][^>]*>[\s\S]*?<\/script>`, 'i');
  if (re.test(html)) return html.replace(re, tag);
  return html.replace('</head>', `  ${tag}\n</head>`);
}

function main() {
  if (!fs.existsSync(indexPath)) {
    console.warn('[prerender] dist/index.html not found; skipping prerender');
    return;
  }
  const template = fs.readFileSync(indexPath, 'utf8');

  // Update homepage meta (and add WebSite JSON-LD)
  const homeTitle = 'RailCore — Train Driver Career Guide & E‑Learning';
  const homeDesc = 'Your comprehensive guide to starting and succeeding in a train driving career. Interactive e‑learning, interview prep, and insider insights.';
  let homepage = withMeta(template, { title: homeTitle, description: homeDesc, url: '/', type: 'website' });
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'RailCore',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={query}`,
      'query-input': 'required name=query'
    }
  };
  homepage = insertJsonLd(homepage, websiteLd, 'ld-json-website');
  fs.writeFileSync(indexPath, homepage, 'utf8');

  // Static pages to prerender
  const staticPages: Array<{ path: string; title: string; description: string }> = [
    { path: '/e-learning', title: 'Interactive E‑Learning for Train Driver Applicants | RailCore', description: 'Practice competency answers, SJT scenarios, and a timed maths test with AI feedback.' },
    { path: '/day-in-the-life', title: 'A Day in the Life of a Train Driver | RailCore', description: 'Understand real daily duties, shifts, responsibilities, and work patterns of drivers.' },
    { path: '/meet-the-team', title: 'Our Team | RailCore', description: 'Meet the drivers, trainers, and managers behind RailCore’s guidance.' },
    { path: '/apply', title: 'Application Process | RailCore', description: 'Step‑by‑step guide through applications, assessments, interviews, and medicals.' },
    { path: '/pros-cons', title: 'Pros & Cons of Being a Train Driver | RailCore', description: 'Balanced look at rewards, lifestyle, and challenges of the role.' },
    { path: '/benefits', title: 'Rewards & Benefits | RailCore', description: 'Explore pay, progression, pensions, and benefits for train drivers.' },
  ];

  for (const page of staticPages) {
    let html = withMeta(template, { title: page.title, description: page.description, url: page.path, type: 'website' });
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: page.title.replace(/\s*\|\s*RailCore.*/, ''), item: siteUrl.replace(/\/$/, '') + page.path },
      ],
    } as any;
    html = insertJsonLd(html, breadcrumbLd, 'ld-json-breadcrumb');
    const dir = path.join(distDir, page.path.replace(/^\//, ''));
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }

  // Prerender blog index
  const blogIndexHtml = withMeta(template, {
    title: 'The RailCore Blog — Tips and Insights',
    description: 'Insider tips, expert guidance, and success stories for aspiring train drivers.',
    url: '/blog',
    type: 'website',
    imageUrl: '/api/og?title=The%20RailCore%20Blog&subtitle=Tips%20%26%20insights%20for%20aspiring%20drivers',
  });
  const blogIndexDir = path.join(distDir, 'blog');
  ensureDir(blogIndexDir);
  fs.writeFileSync(path.join(blogIndexDir, 'index.html'), blogIndexHtml, 'utf8');

  // Prerender each blog post
  for (const post of BLOG_POSTS_DATA) {
    const url = `/blog/${post.id}`;
    const title = `${post.title} | RailCore Blog`;
    const description = post.excerpt || 'RailCore Blog';
    const subtitle = `By ${post.author}${post.date ? ' • ' + post.date : ''}`;
    let html = withMeta(template, { title, description, url, type: 'article', imageUrl: `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(subtitle)}` });
    // Add Article and Breadcrumb JSON-LD
    const articleLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: description,
      mainEntityOfPage: siteUrl.replace(/\/$/, '') + url,
      datePublished: post.date,
      dateModified: post.date,
      author: { '@type': 'Person', name: post.author },
      image: siteUrl.replace(/\/$/, '') + `/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(subtitle)}`,
    };
    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: siteUrl.replace(/\/$/, '') + '/blog' },
        { '@type': 'ListItem', position: 3, name: post.title, item: siteUrl.replace(/\/$/, '') + url },
      ],
    };
    html = insertJsonLd(html, articleLd, 'ld-json-article');
    html = insertJsonLd(html, breadcrumbLd, 'ld-json-breadcrumb');
    const dir = path.join(distDir, 'blog', post.id);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  }

  console.log(`[prerender] updated homepage, generated ${staticPages.length} static pages, /blog, and ${BLOG_POSTS_DATA.length} post pages`);
}

main();
