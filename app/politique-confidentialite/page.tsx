import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de ParisienSportif.fr : données collectées, cookies, durées de conservation et droits des utilisateurs.',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main>
      <div className="page-head">
        <h1>Politique de confidentialité</h1>
        <p>Quelles données nous traitons, pourquoi, combien de temps — et quels sont vos droits.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="article">
            <h2>1. Qui est responsable du traitement ?</h2>
            <p>
              Le responsable du traitement des données collectées sur parisiensportif.fr est
              l&apos;éditeur du site, dont l&apos;identité figure dans les{' '}
              <Link href="/mentions-legales">mentions légales</Link>. Pour toute question relative
              à vos données, utilisez la <Link href="/contact">page contact</Link>.
            </p>

            <h2>2. Quelles données collectons-nous ?</h2>
            <ul>
              <li>
                <strong>Formulaire de contact :</strong> nom, adresse e-mail, objet et contenu de
                votre message. Ces données servent uniquement à traiter votre demande.
              </li>
              <li>
                <strong>Données de navigation :</strong> des mesures d&apos;audience anonymisées
                (pages consultées, durée de visite, type d&apos;appareil) peuvent être collectées
                afin d&apos;améliorer le site.
              </li>
            </ul>
            <p>
              Le site ne collecte aucune donnée bancaire et n&apos;ouvre aucun compte joueur : les
              inscriptions et paiements s&apos;effectuent exclusivement sur les sites des
              opérateurs, qui appliquent leurs propres politiques de confidentialité.
            </p>

            <h2>3. Cookies</h2>
            <p>Le site peut déposer deux catégories de cookies :</p>
            <ul>
              <li>
                <strong>Cookies de mesure d&apos;audience</strong>, destinés à comprendre
                l&apos;usage du site de manière agrégée ;
              </li>
              <li>
                <strong>Cookies d&apos;affiliation</strong>, déposés lors d&apos;un clic vers le
                site d&apos;un opérateur partenaire, permettant d&apos;attribuer une éventuelle
                commission.
              </li>
            </ul>
            <p>
              Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Le
              refus des cookies n&apos;empêche pas la consultation du site.
            </p>

            <h3>Outils de mesure et services tiers</h3>
            <p>
              Lors de votre première visite, un bandeau vous permet d&apos;accepter ou de refuser
              les cookies non essentiels. Les outils de mesure et de marketing ne sont chargés
              qu&apos;après votre accord. Selon la configuration du site, les services suivants
              peuvent être utilisés :
            </p>
            <ul>
              <li>
                <strong>Google Tag Manager / Google Analytics 4 :</strong> mesure d&apos;audience
                et suivi des conversions. Les données peuvent être partagées avec Google — voir la{' '}
                <a href="https://policies.google.com/privacy" rel="noopener" target="_blank">
                  politique de confidentialité de Google
                </a>
                .
              </li>
              <li>
                <strong>OneSignal :</strong> envoi de notifications push, uniquement si vous les
                activez explicitement dans votre navigateur.
              </li>
              <li>
                <strong>Sentry :</strong> détection des erreurs techniques du site (aucun usage
                publicitaire).
              </li>
            </ul>
            <h3>Comment vous opposer au suivi ?</h3>
            <ul>
              <li>
                Refusez les cookies via le bandeau de consentement (votre choix est mémorisé) ;
              </li>
              <li>
                Installez le{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener" target="_blank">
                  module de désactivation de Google Analytics
                </a>{' '}
                pour bloquer la mesure d&apos;audience Google sur tous les sites ;
              </li>
              <li>
                Gérez vos préférences publicitaires européennes sur{' '}
                <a href="https://www.youronlinechoices.com/fr/" rel="noopener" target="_blank">
                  Your Online Choices (EDAA)
                </a>
                .
              </li>
            </ul>

            <h2>4. Base légale et durées de conservation</h2>
            <p>
              Les données du formulaire de contact sont traitées sur la base de votre consentement
              et conservées le temps nécessaire au traitement de votre demande, puis au maximum
              douze mois. Les données de mesure d&apos;audience sont conservées pour une durée
              maximale de vingt-cinq mois.
            </p>

            <h2>5. Partage des données</h2>
            <p>
              Vos données ne sont ni vendues ni louées. Elles ne sont transmises à des tiers que
              lorsque cela est strictement nécessaire au fonctionnement du site (hébergeur, outil
              de mesure d&apos;audience) ou lorsqu&apos;une obligation légale l&apos;impose.
            </p>

            <h2>6. Vos droits</h2>
            <p>
              Conformément au Règlement général sur la protection des données (RGPD) et à la loi
              Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité
              sur vos données personnelles. Pour exercer ces droits, contactez-nous via la{' '}
              <Link href="/contact">page contact</Link>. Vous disposez également du droit
              d&apos;introduire une réclamation auprès de la CNIL (cnil.fr).
            </p>

            <h2>7. Mise à jour de cette politique</h2>
            <p>
              Cette politique peut être amenée à évoluer, notamment en cas de changement des
              outils utilisés par le site. La version en ligne sur cette page fait foi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
