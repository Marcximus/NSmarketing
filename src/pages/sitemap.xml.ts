import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Tilføj nye sider her. 404 udelades bevidst.
const paths = [
  '/',
  '/pakkeloesninger/',
  '/cases/',
  '/om-os/',
  '/karriere/',
  '/kontakt/',
  '/privatlivspolitik/',
  '/cookiepolitik/',
];

export const GET: APIRoute = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
      .map((p) => `  <url><loc>${new URL(p, site.url).href}</loc></url>`)
      .join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
