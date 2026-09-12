'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  const decide = (value: 'granted' | 'denied') => {
    localStorage.setItem('cookie-consent', value);
    setVisible(false);
    if (value === 'granted') {
      // Consent Mode v2 : informe Google Analytics que le suivi est autorisé.
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted',
          ad_user_data: 'granted',
          ad_personalization: 'granted',
        });
      }
      window.dispatchEvent(new Event('cookie-consent-granted'));
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Consentement aux cookies">
      <p>
        Nous utilisons des cookies de mesure d&apos;audience et de suivi d&apos;affiliation pour
        améliorer le site. Vous pouvez accepter ou refuser — le site reste entièrement
        consultable dans les deux cas.{' '}
        <Link href="/politique-confidentialite">En savoir plus</Link>
      </p>
      <div className="cookie-actions">
        <button className="btn btn-sm" onClick={() => decide('granted')}>
          Accepter
        </button>
        <button className="btn btn-sm btn-outline cookie-refuse" onClick={() => decide('denied')}>
          Refuser
        </button>
      </div>
    </div>
  );
}
