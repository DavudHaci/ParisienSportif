import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Avis Betclic 2026 — Notre test complet du bookmaker',
  description:
    "Betclic passé au banc d'essai : bonus de bienvenue, qualité des cotes, application mobile, retraits et service client. Notre verdict après test réel.",
};

export default function BetclicPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Avis Betclic : que vaut le leader français des paris en ligne ?</h1>
        <p>
          Compte ouvert, dépôts effectués, paris placés et retraits demandés : voici ce que nous
          avons réellement constaté.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/avis">Avis bookmakers</Link> › Betclic
        </nav>

        <div className="content-wrap">
          <article className="article">
            <div className="rating-line">
              <span className="score-badge">9,6/10</span>
              <span className="stars">★★★★★</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                Testé et mis à jour en 2026
              </span>
            </div>

            <h2>Betclic en deux mots</h2>
            <p>
              Difficile de parler de paris sportifs en France sans évoquer Betclic. Présent sur le
              marché français depuis l&apos;ouverture à la concurrence en 2010, l&apos;opérateur
              s&apos;est imposé comme la référence du pari mobile grâce à une application
              régulièrement citée parmi les mieux notées du secteur. Détenteur d&apos;un agrément
              délivré par l&apos;Autorité Nationale des Jeux, il couvre les paris sportifs et les
              paris hippiques.
            </p>

            <p>
              Ce qui frappe d&apos;abord chez Betclic, c&apos;est la fluidité : la navigation est
              pensée pour aller du choix du match à la validation du ticket en quelques secondes,
              y compris en direct. Une philosophie « mobile d&apos;abord » qui explique en grande
              partie sa popularité auprès des jeunes parieurs.
            </p>

            <div className="callout">
              <strong>Offre de bienvenue :</strong> premier pari remboursé jusqu&apos;à
              100&nbsp;€ en paris gratuits si votre mise initiale est perdante. Les conditions
              exactes figurent sur le site de l&apos;opérateur et peuvent évoluer — vérifiez-les
              avant de vous inscrire.
            </div>

            <h2>Points forts et points faibles</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Ce que nous avons aimé</h4>
                <ul>
                  <li>
                    Application mobile rapide et intuitive, sans doute la meilleure du marché
                    français
                  </li>
                  <li>Très large choix de sports et de marchés, football en tête</li>
                  <li>Paris en direct réactifs avec fonction cash-out</li>
                  <li>Retraits traités rapidement une fois le compte vérifié</li>
                  <li>Fonctionnalités sociales : classements entre amis, paris partagés</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Ce qui peut être amélioré</h4>
                <ul>
                  <li>Bonus versé en paris gratuits plutôt qu&apos;en argent réel</li>
                  <li>Le site web classique est moins soigné que l&apos;application</li>
                  <li>Pas d&apos;offre poker, contrairement à certains concurrents</li>
                </ul>
              </div>
            </div>

            <h2>L&apos;offre de paris à la loupe</h2>
            <p>
              Le catalogue couvre plusieurs dizaines de disciplines, du football au MMA en passant
              par les fléchettes. Sur les grandes affiches de Ligue 1 ou de Ligue des Champions,
              on dépasse fréquemment les deux cents marchés par rencontre : résultat, buteurs,
              corners, cartons, statistiques individuelles des joueurs, et de nombreuses
              combinaisons créatives.
            </p>

            <p>
              Les cotes pratiquées se situent dans la fourchette haute du marché français sur le
              football et le tennis. Sur les sports moins exposés, l&apos;écart avec les meilleurs
              spécialistes se resserre, sans jamais devenir rédhibitoire.
            </p>

            <h3>Le pari en direct</h3>
            <p>
              C&apos;est l&apos;un des terrains où Betclic excelle. L&apos;interface live affiche
              les statistiques du match en temps réel, les cotes se rafraîchissent sans latence
              perceptible et le cash-out — total ou partiel — permet de sécuriser un gain ou de
              limiter une perte avant le coup de sifflet final.
            </p>

            <h2>Dépôts et retraits</h2>
            <table>
              <tbody>
                <tr>
                  <th>Moyen de paiement</th>
                  <th>Dépôt</th>
                  <th>Retrait</th>
                </tr>
                <tr>
                  <td>Carte bancaire (Visa / Mastercard)</td>
                  <td>Oui</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>PayPal</td>
                  <td>Oui</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>Virement bancaire</td>
                  <td>Oui</td>
                  <td>Oui</td>
                </tr>
                <tr>
                  <td>Paysafecard</td>
                  <td>Oui</td>
                  <td>Non</td>
                </tr>
              </tbody>
            </table>
            <p>
              Lors de notre test, un retrait vers PayPal a été traité en moins de vingt-quatre
              heures après validation des documents d&apos;identité. Le premier retrait exige,
              comme chez tous les opérateurs agréés, l&apos;envoi d&apos;une pièce
              d&apos;identité et d&apos;un justificatif — anticipez cette étape dès
              l&apos;inscription pour éviter toute attente.
            </p>

            <h2>Service client et jeu responsable</h2>
            <p>
              Le support répond par formulaire et par chat aux heures ouvrées. Nos questions ont
              reçu des réponses précises en moins d&apos;une heure via le chat. Côté prévention,
              l&apos;opérateur propose les outils imposés par la réglementation française :
              limites de dépôt et de mise, auto-exclusion temporaire ou définitive, et affichage
              du solde en permanence.
            </p>

            <h2>Notre verdict</h2>
            <p>
              Betclic mérite sa place en tête de notre classement. L&apos;expérience mobile est
              sans équivalent en France, l&apos;offre de paris est profonde et les paiements sont
              rapides. On peut regretter un bonus en freebets plutôt qu&apos;en espèces, mais
              l&apos;ensemble reste la valeur la plus sûre pour débuter comme pour parier
              régulièrement.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <a
                href="https://www.betclic.fr"
                className="btn"
                rel="nofollow noopener"
                target="_blank"
              >
                Découvrir Betclic
              </a>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> ne misez que des sommes dont la perte n&apos;affecterait
              pas votre quotidien. Fixez-vous des limites avant de jouer.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Fiche express</h3>
              <ul>
                <li>
                  <strong>Lancement en France :</strong> 2010
                </li>
                <li>
                  <strong>Agrément :</strong> ANJ
                </li>
                <li>
                  <strong>Produits :</strong> sport, hippique
                </li>
                <li>
                  <strong>Dépôt minimum :</strong> faible
                </li>
                <li>
                  <strong>Application :</strong> iOS / Android
                </li>
              </ul>
            </div>
            <div className="widget">
              <h3>Guides utiles</h3>
              <ul>
                <li>
                  <Link href="/guide-debutant">Débuter dans les paris sportifs</Link>
                </li>
                <li>
                  <Link href="/bonus-paris-sportifs">Comprendre les bonus</Link>
                </li>
                <li>
                  <Link href="/gestion-bankroll">Gérer sa bankroll</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
