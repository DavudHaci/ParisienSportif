import type { Metadata } from 'next';
import Script from 'next/script';
import AgeBar from '@/components/AgeBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics from '@/components/Analytics';
import CookieConsent from '@/components/CookieConsent';
import './globals.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-8LWTD91M01';

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
        {/* Google tag (gtag.js) — Consent Mode v2 : chargé immédiatement,
            mais sans cookies tant que le visiteur n'a pas accepté. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              wait_for_update: 500
            });
            if (localStorage.getItem('cookie-consent') === 'granted') {
              gtag('consent', 'update', {
                analytics_storage: 'granted',
                ad_storage: 'granted',
                ad_user_data: 'granted',
                ad_personalization: 'granted'
              });
            }
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}
        </Script>
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
