'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogoIcon from '@/components/Logo';

const REVIEW_SLUGS = [
  '/avis',
  '/betclic',
  '/winamax',
  '/unibet',
  '/parionssport',
  '/zebet',
  '/pmu',
  '/netbet',
  '/vbet',
  '/francepari',
  '/genybet',
];

const SPORT_SLUGS = [
  '/sports',
  '/paris-football',
  '/paris-tennis',
  '/paris-basketball',
  '/paris-rugby',
  '/paris-hippique',
  '/paris-f1',
];

const GUIDE_SLUGS = [
  '/guides',
  '/guide-debutant',
  '/choisir-bookmaker',
  '/gestion-bankroll',
  '/erreurs-a-eviter',
  '/bonus-paris-sportifs',
];

function sectionOf(pathname: string): string {
  if (pathname === '/') return 'accueil';
  if (pathname.startsWith('/comparatif')) return 'comparatif';
  if (REVIEW_SLUGS.some((s) => pathname.startsWith(s))) return 'avis';
  if (SPORT_SLUGS.some((s) => pathname.startsWith(s))) return 'sports';
  if (GUIDE_SLUGS.some((s) => pathname.startsWith(s))) return 'guides';
  if (pathname.startsWith('/faq')) return 'faq';
  if (pathname.startsWith('/contact')) return 'contact';
  return '';
}

const NAV_ITEMS: { href: string; label: string; section: string }[] = [
  { href: '/', label: 'Accueil', section: 'accueil' },
  { href: '/comparatif', label: 'Comparatif', section: 'comparatif' },
  { href: '/avis', label: 'Avis', section: 'avis' },
  { href: '/sports', label: 'Sports', section: 'sports' },
  { href: '/guides', label: 'Guides', section: 'guides' },
  { href: '/faq', label: 'FAQ', section: 'faq' },
  { href: '/contact', label: 'Contact', section: 'contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = sectionOf(pathname ?? '');

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <LogoIcon />
          <span className="logo-text">
            Parisien<span>Sportif</span>.fr
          </span>
        </Link>
        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={`main-nav${open ? ' open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={active === item.section ? 'active' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
