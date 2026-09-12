'use client';

import { useEffect } from 'react';

/**
 * Chargement des outils tiers, contrôlé par le consentement cookies.
 * Les identifiants se configurent via les variables d'environnement
 * NEXT_PUBLIC_* (voir .env.example). Si une variable est absente,
 * l'outil correspondant n'est tout simplement pas chargé.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID; // ex : GTM-XXXXXXX
const GA_ID = process.env.NEXT_PUBLIC_GA_ID; // ex : G-XXXXXXXXXX
const ONESIGNAL_APP_ID = process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID;
const SENTRY_LOADER_URL = process.env.NEXT_PUBLIC_SENTRY_LOADER_URL; // ex : https://js.sentry-cdn.com/xxxx.min.js

let marketingLoaded = false;

function addScript(src: string, defer = true) {
  const s = document.createElement('script');
  s.src = src;
  s.async = true;
  if (defer) s.defer = true;
  document.head.appendChild(s);
}

function addInlineScript(code: string) {
  const s = document.createElement('script');
  s.innerHTML = code;
  document.head.appendChild(s);
}

function loadMarketingTools() {
  if (marketingLoaded) return;
  marketingLoaded = true;

  // Google Tag Manager (gère aussi Conversion Linker, remarketing, etc.)
  if (GTM_ID) {
    addInlineScript(
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`
    );
  }

  // Google Analytics 4 (chargement direct, si utilisé sans GTM)
  if (GA_ID) {
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
    addInlineScript(
      `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`
    );
  }

  // OneSignal — notifications push (SDK v16)
  if (ONESIGNAL_APP_ID) {
    addInlineScript(
      `window.OneSignalDeferred=window.OneSignalDeferred||[];OneSignalDeferred.push(async function(OneSignal){await OneSignal.init({appId:'${ONESIGNAL_APP_ID}'});});`
    );
    addScript('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js');
  }
}

export default function Analytics() {
  useEffect(() => {
    // Sentry (suivi d'erreurs) : chargé sans attendre le consentement,
    // car il ne sert pas au ciblage publicitaire.
    if (SENTRY_LOADER_URL) {
      addScript(SENTRY_LOADER_URL);
    }

    // Outils marketing/mesure : uniquement après consentement.
    if (localStorage.getItem('cookie-consent') === 'granted') {
      loadMarketingTools();
    }
    const onConsent = () => loadMarketingTools();
    window.addEventListener('cookie-consent-granted', onConsent);
    return () => window.removeEventListener('cookie-consent-granted', onConsent);
  }, []);

  return null;
}
