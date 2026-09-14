import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://parisiensportif.fr';

// Toutes les pages du site, avec leur priorité relative.
const ROUTES: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/comparatif/', priority: 0.9 },
  { path: '/avis/', priority: 0.9 },
  { path: '/sports/', priority: 0.8 },
  { path: '/guides/', priority: 0.8 },
  // Avis bookmakers
  { path: '/betclic/', priority: 0.8 },
  { path: '/winamax/', priority: 0.8 },
  { path: '/unibet/', priority: 0.8 },
  { path: '/parionssport/', priority: 0.8 },
  { path: '/zebet/', priority: 0.8 },
  { path: '/pmu/', priority: 0.7 },
  { path: '/netbet/', priority: 0.7 },
  { path: '/vbet/', priority: 0.7 },
  { path: '/francepari/', priority: 0.7 },
  { path: '/genybet/', priority: 0.7 },
  // Sports
  { path: '/paris-football/', priority: 0.7 },
  { path: '/paris-tennis/', priority: 0.7 },
  { path: '/paris-basketball/', priority: 0.7 },
  { path: '/paris-rugby/', priority: 0.7 },
  { path: '/paris-hippique/', priority: 0.7 },
  { path: '/paris-f1/', priority: 0.7 },
  // Guides
  { path: '/guide-debutant/', priority: 0.7 },
  { path: '/choisir-bookmaker/', priority: 0.7 },
  { path: '/gestion-bankroll/', priority: 0.7 },
  { path: '/erreurs-a-eviter/', priority: 0.7 },
  { path: '/bonus-paris-sportifs/', priority: 0.7 },
  // Pages de service
  { path: '/faq/', priority: 0.6 },
  { path: '/contact/', priority: 0.5 },
  { path: '/a-propos/', priority: 0.5 },
  { path: '/mentions-legales/', priority: 0.3 },
  { path: '/politique-confidentialite/', priority: 0.3 },
  { path: '/jeu-responsable/', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: r.priority,
  }));
}
