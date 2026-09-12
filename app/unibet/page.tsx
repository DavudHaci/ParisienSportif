import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Avis Unibet 2026 — Étendue des marchés, stats et bonus analysés',
  description:
    "Unibet à l'essai : jusqu'à 100 € de paris gratuits, centre de statistiques, immense choix de sports et de marchés. Notre analyse complète et notre note.",
};

export default function UnibetPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Avis Unibet : l&apos;encyclopédie du pari sportif vaut-elle le détour ?</h1>
        <p>
          Des centaines de marchés par match et un centre de statistiques intégré : nous avons
          passé plusieurs semaines à éprouver la plateforme.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/avis">Avis bookmakers</Link> › Unibet
        </nav>

        <div className="content-wrap">
          <article className="article">
            <div className="rating-line">
              <span className="score-badge">9,1/10</span>
              <span className="stars">★★★★★</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                Testé et mis à jour en 2026
              </span>
            </div>

            <h2>Unibet en deux mots</h2>
            <p>
              Marque phare du groupe international Kindred, Unibet opère en France sous agrément de
              l&apos;Autorité Nationale des Jeux et propose deux univers sur un même compte : les
              paris sportifs et le poker. Sa force historique tient en un mot, l&apos;exhaustivité.
              Peu de plateformes agréées en France offrent autant de disciplines, de compétitions
              et de types de paris au quotidien.
            </p>

            <p>
              Là où beaucoup de concurrents concentrent leurs efforts sur trois ou quatre sports
              vedettes, Unibet ratisse large : championnats exotiques de football, tournois de
              tennis de second rang, ligues nord-américaines, sports d&apos;hiver quand la saison
              s&apos;y prête. Pour le parieur curieux, qui aime chercher de la valeur en dehors des
              sentiers battus, c&apos;est un terrain de jeu quasiment sans limite.
            </p>

            <div className="callout">
              <strong>Offre de bienvenue :</strong> jusqu&apos;à 100&nbsp;€ récupérés sous forme de
              paris gratuits si votre première mise est perdante. Attention, les conditions de
              l&apos;offre évoluent régulièrement — la version qui fait foi est celle publiée sur
              le site de l&apos;opérateur au moment de votre inscription.
            </div>

            <h2>Points forts et points faibles</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Ce que nous avons aimé</h4>
                <ul>
                  <li>Éventail de sports et de marchés parmi les plus vastes du marché français</li>
                  <li>Centre de statistiques intégré, précieux pour préparer ses paris</li>
                  <li>Compétitions confidentielles couvertes là où d&apos;autres font l&apos;impasse</li>
                  <li>Poker accessible avec le même compte et le même solde</li>
                  <li>Promotions récurrentes sur les grands rendez-vous du calendrier</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Ce qui peut être amélioré</h4>
                <ul>
                  <li>Bonus versé en paris gratuits, jamais en argent réel</li>
                  <li>Cotes correctes mais rarement les meilleures sur les têtes d&apos;affiche</li>
                  <li>Une interface riche qui demande un petit temps d&apos;adaptation</li>
                </ul>
              </div>
            </div>

            <h2>L&apos;offre de paris à la loupe</h2>
            <p>
              Ouvrez la page d&apos;un match de Ligue 1 un samedi soir et vous comprendrez la
              philosophie de la maison : les marchés se comptent par centaines, des classiques 1N2
              et handicaps jusqu&apos;aux paris de niche sur les corners, les cartons ou les
              performances individuelles. Le tennis bénéficie du même traitement, avec des paris
              jeu par jeu en direct.
            </p>

            <p>
              L&apos;atout qui fait vraiment la différence au quotidien, c&apos;est le centre de
              statistiques. Confrontations passées, forme récente, compositions probables : tout
              est consultable sans quitter la page du pari. Ce genre d&apos;outil, que
              d&apos;autres réservent à des sites tiers, fluidifie considérablement la préparation
              d&apos;un ticket.
            </p>

            <h3>Le pari en direct</h3>
            <p>
              La section live est dense et bien organisée, avec un tri par sport et par heure de
              coup d&apos;envoi. Les cotes s&apos;actualisent rapidement et la fonction de cash-out
              répond présent sur la plupart des rencontres majeures. On apprécie aussi la
              visualisation animée des matchs quand la diffusion vidéo n&apos;est pas disponible.
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
              Nos demandes de retrait ont été traitées en un à trois jours ouvrés selon la méthode
              choisie, PayPal se montrant la plus véloce. La vérification d&apos;identité,
              obligatoire pour tout opérateur agréé, s&apos;effectue directement depuis
              l&apos;espace personnel : mieux vaut l&apos;expédier dès la création du compte plutôt
              qu&apos;au moment du premier gain.
            </p>

            <h2>Service client et jeu responsable</h2>
            <p>
              L&apos;assistance combine chat en direct, e-mail et une base de connaissances bien
              structurée. Lors de nos échanges, le chat a répondu en quelques minutes avec des
              explications claires, y compris sur des questions techniques liées aux conditions du
              bonus. Le dispositif de jeu responsable est complet : limites de dépôt modulables,
              pauses temporaires, auto-exclusion et questionnaire d&apos;auto-évaluation accessible
              à tout moment.
            </p>

            <h2>Notre verdict</h2>
            <p>
              Unibet est le choix naturel du parieur qui veut tout avoir sous la main : une
              profondeur de marchés rare, des statistiques intégrées et un poker en prime. Si les
              chasseurs de cotes trouveront parfois mieux ailleurs sur les grandes affiches, la
              richesse globale de la plateforme justifie amplement sa place sur notre podium.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <a
                href="https://www.unibet.fr"
                className="btn"
                rel="nofollow noopener"
                target="_blank"
              >
                Découvrir Unibet
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
                  <strong>Groupe :</strong> Kindred
                </li>
                <li>
                  <strong>Agrément :</strong> ANJ
                </li>
                <li>
                  <strong>Produits :</strong> sport, poker
                </li>
                <li>
                  <strong>Point fort :</strong> étendue des marchés
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
