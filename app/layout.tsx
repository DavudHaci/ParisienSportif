import type { Metadata } from 'next';
import AgeBar from '@/components/AgeBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ParisienSportif.fr — Comparatif des sites de paris sportifs agréés en France',
    template: '%s | ParisienSportif.fr',
  },
  description:
    'Comparez les bookmakers agréés ANJ en France : bonus de bienvenue, cotes, applications mobiles et avis détaillés rédigés par notre équipe indépendante.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <AgeBar />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
