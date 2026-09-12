import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Avis PMU Sport 2026 — Notre test complet du bookmaker',
  description:
    "PMU Sport à l'essai : héritage hippique, offre de paris sportifs, bonus de bienvenue, moyens de paiement et qualité du support. Notre bilan détaillé.",
};

export default function PmuPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Avis PMU Sport : l&apos;institution hippique tient-elle la route sur le sport ?</h1>
        <p>
          Nous avons ouvert un compte, alimenté notre solde et parié sur plusieurs semaines pour
          juger l&apos;opérateur au-delà de sa réputation.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/avis">Avis bookmakers</Link> › PMU Sport
        </nav>

        <div className="content-wrap">
          <article className="article">
            <div className="rating-line">
              <span className="score-badge">8,4/10</span>
              <span className="stars">★★★★☆</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                Testé et mis à jour en 2026
              </span>
            </div>

            <h2>PMU en deux mots</h2>
            <p>
              Le Pari Mutuel Urbain n&apos;a pas attendu Internet pour exister : cette institution,
              née autour des hippodromes français, encaisse des paris depuis près d&apos;un siècle.
              Lorsque le marché en ligne s&apos;est ouvert, le PMU a naturellement obtenu son
              agrément auprès de l&apos;Autorité Nationale des Jeux et a élargi son terrain de jeu
              au football, au tennis et à des dizaines d&apos;autres disciplines. Aujourd&apos;hui,
              la marque cumule deux visages : celui du géant des courses hippiques, incontesté, et
              celui d&apos;un bookmaker sportif honnête qui progresse d&apos;année en année.
            </p>

            <p>
              Son atout le plus singulier ne se trouve pas en ligne mais dans la rue : des milliers
              de points de vente physiques maillent le territoire, des grandes villes aux villages.
              Aucun concurrent agréé ne peut prétendre à une telle présence de terrain, et cette
              proximité rassure une clientèle qui n&apos;aurait jamais confié sa carte bancaire à
              un site inconnu.
            </p>

            <div className="callout">
              <strong>Offre de bienvenue :</strong> le PMU propose habituellement une offre de
              départ pouvant atteindre environ 100&nbsp;€, généralement sous forme de remboursement
              des premières mises. Le détail des conditions évolue régulièrement : consultez
              impérativement le site officiel avant toute inscription.
            </div>

            <h2>Points forts et points faibles</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Ce que nous avons aimé</h4>
                <ul>
                  <li>Référence absolue sur les courses hippiques, avec une profondeur inégalée</li>
                  <li>Marque historique de confiance, agréée ANJ dès l&apos;ouverture du marché</li>
                  <li>Réseau physique unique en France pour jouer ou se renseigner en personne</li>
                  <li>
                    Passerelle pratique entre paris sportifs et paris hippiques sur un même compte
                  </li>
                  <li>Contenus éditoriaux et statistiques fournis autour des courses</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Ce qui peut être amélioré</h4>
                <ul>
                  <li>Cotes sportives en retrait face aux spécialistes du secteur</li>
                  <li>Interface sport moins moderne que celle des leaders du mobile</li>
                  <li>Expérience parfois cloisonnée entre les univers hippique et sportif</li>
                </ul>
              </div>
            </div>

            <h2>L&apos;offre de paris à la loupe</h2>
            <p>
              Commençons par ce qui fait la légende de la maison : les courses. Trot, galop,
              obstacle, réunions françaises et étrangères, formules simples ou combinaisons
              exotiques comme le Quinté — personne ne rivalise sur ce créneau. Le parieur hippique
              trouve chez le PMU des rapports alimentés par une masse de joueurs considérable et
              des outils d&apos;analyse dignes d&apos;un journal spécialisé.
            </p>

            <p>
              Côté sport, le catalogue est plus classique mais tout à fait correct : le football
              domine logiquement, suivi du tennis, du basket et du rugby. Sur un match de Ligue 1,
              le nombre de marchés reste inférieur à ce que proposent les têtes d&apos;affiche du
              marché, et les cotes se situent dans la moyenne basse sur les compétitions majeures.
              Rien de disqualifiant pour un joueur occasionnel, mais les chasseurs de valeur iront
              comparer ailleurs.
            </p>

            <h3>Le pari en direct</h3>
            <p>
              Le live fonctionne sans accroc sur les grandes affiches, avec une actualisation des
              cotes convenable. On regrette toutefois l&apos;absence de certaines options de suivi
              en temps réel que la concurrence a démocratisées, et un choix de marchés en direct
              plus resserré.
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
                  <td>Non</td>
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
              Particularité appréciable : le réseau de points de vente permet aussi
              d&apos;alimenter son compte en espèces dans de nombreux commerces partenaires. En
              ligne, notre retrait test a été crédité en deux jours ouvrés après la vérification
              des documents d&apos;identité, une étape obligatoire chez tout opérateur agréé
              qu&apos;il vaut mieux régler dès la création du compte.
            </p>

            <h2>Service client et jeu responsable</h2>
            <p>
              L&apos;assistance est joignable par téléphone, par courriel et via un formulaire
              dédié. Nos échanges ont été courtois et les réponses complètes, même si les délais
              par courriel dépassent parfois vingt-quatre heures. Sur la prévention, le PMU
              applique scrupuleusement le cadre français : plafonds de dépôt personnalisables,
              modérateurs de mise, auto-exclusion et messages de sensibilisation visibles à chaque
              étape du parcours.
            </p>

            <h2>Notre verdict</h2>
            <p>
              Le PMU reste une évidence pour quiconque s&apos;intéresse aux courses : sur ce
              terrain, notre note frôlerait l&apos;excellence. Sur les paris sportifs,
              l&apos;opérateur livre une prestation sérieuse mais sans éclat, pénalisée par des
              cotes moyennes et une ergonomie perfectible. Un 8,4/10 qui récompense la fiabilité
              d&apos;une institution, la richesse hippique et un réseau physique sans équivalent,
              tout en actant qu&apos;il existe mieux pour le parieur 100&nbsp;% sport.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <a
                href="https://www.pmu.fr"
                className="btn"
                rel="nofollow noopener"
                target="_blank"
              >
                Découvrir PMU
              </a>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> le jeu doit rester un loisir. Définissez un budget à
              l&apos;avance, tenez-vous-y et n&apos;essayez jamais de vous refaire après une perte.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Fiche express</h3>
              <ul>
                <li>
                  <strong>Origine :</strong> institution hippique française
                </li>
                <li>
                  <strong>Agrément :</strong> ANJ
                </li>
                <li>
                  <strong>Produits :</strong> hippique, sport
                </li>
                <li>
                  <strong>Réseau physique :</strong> points de vente partout en France
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
