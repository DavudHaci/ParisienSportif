import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Débuter dans les paris sportifs : le guide pas à pas',
  description:
    'Ouvrir un compte, comprendre les cotes, placer un premier pari et éviter les pièges classiques : le guide complet du parieur débutant en France.',
};

export default function GuideDebutantPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Débuter dans les paris sportifs : le guide pas à pas</h1>
        <p>
          De l&apos;ouverture du compte à votre premier ticket validé, tout ce qu&apos;un nouveau
          parieur doit savoir — sans jargon inutile.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/guides">Guides</Link> › Guide du débutant
        </nav>

        <div className="content-wrap">
          <article className="article">
            <h2>Étape 1 : choisir un site agréé, et rien d&apos;autre</h2>
            <p>
              En France, seuls les opérateurs détenteurs d&apos;un agrément de l&apos;Autorité
              Nationale des Jeux (ANJ) ont le droit de proposer des paris sportifs. Cet agrément
              n&apos;est pas un détail administratif : il garantit la séparation de vos fonds, des
              mécanismes de plafonnement, un recours en cas de litige et des outils de jeu
              responsable obligatoires.
            </p>
            <p>
              Un site non agréé peut afficher des cotes mirobolantes — vous n&apos;aurez aucun
              recours le jour où il refusera de payer. Notre{' '}
              <Link href="/comparatif">comparatif</Link> ne référence que des opérateurs agréés.
            </p>

            <h2>Étape 2 : ouvrir et vérifier son compte</h2>
            <p>
              L&apos;inscription prend quelques minutes : état civil, adresse, coordonnées
              bancaires pour les retraits. La réglementation impose ensuite une vérification
              d&apos;identité — pièce d&apos;identité et parfois justificatif de domicile. Notre
              conseil : envoyez ces documents immédiatement, sans attendre votre premier retrait.
              Un compte vérifié dès le départ vous épargnera des délais frustrants au moment de
              récupérer vos gains.
            </p>

            <h2>Étape 3 : comprendre les cotes</h2>
            <p>
              La cote résume deux informations : la probabilité estimée d&apos;un événement et le
              gain potentiel. En format décimal, utilisé en France, le calcul est simple :
            </p>
            <div className="callout">
              <strong>Gain potentiel = mise × cote.</strong> Une mise de 10&nbsp;€ à une cote de
              2,50 rapporte 25&nbsp;€, soit 15&nbsp;€ de gain net.
            </div>
            <p>
              Pour convertir une cote en probabilité implicite, divisez 1 par la cote : une cote
              de 2,00 correspond à 50&nbsp;% de chances estimées. Retenez surtout ceci : le
              bookmaker intègre une marge dans ses cotes. La somme des probabilités implicites
              d&apos;un match dépasse toujours 100&nbsp;%. Parier gagnant à long terme, c&apos;est
              trouver les cotes dont la probabilité implicite est inférieure à la probabilité
              réelle de l&apos;événement — ce qu&apos;on appelle une « value ».
            </p>

            <h2>Étape 4 : placer un premier pari raisonnable</h2>
            <ul>
              <li>
                <strong>Commencez simple :</strong> un pari sur un match que vous connaissez, sur
                un marché de base (1N2, plus/moins de buts).
              </li>
              <li>
                <strong>Misez petit :</strong> vos premiers tickets servent à apprendre le
                fonctionnement du site, pas à gagner votre vie.
              </li>
              <li>
                <strong>Évitez les combinés à rallonge :</strong> accumuler dix sélections
                multiplie le gain affiché… et surtout la probabilité de tout perdre. Un combiné de
                deux ou trois sélections maximum est une limite saine pour débuter.
              </li>
            </ul>

            <h2>Étape 5 : se fixer un cadre dès le premier jour</h2>
            <p>
              Le meilleur moment pour instaurer des règles, c&apos;est avant la première mise.
              Trois principes non négociables :
            </p>
            <ol>
              <li>
                <strong>Une bankroll dédiée.</strong> Définissez une somme réservée aux paris,
                dont la perte totale ne changerait rien à votre quotidien. Elle ne se recharge pas
                au premier coup dur.
              </li>
              <li>
                <strong>Une mise plafonnée.</strong> Ne misez jamais plus de 1 à 5&nbsp;% de votre
                bankroll sur un seul pari, quelle que soit votre confiance.
              </li>
              <li>
                <strong>Jamais de course aux pertes.</strong> Doubler la mise pour « se refaire »
                est le mécanisme qui ruine les parieurs. Une série perdante se traverse en
                réduisant la voilure, pas en l&apos;augmentant.
              </li>
            </ol>
            <p>
              Notre page <Link href="/gestion-bankroll">gestion de bankroll</Link> développe ces
              méthodes en détail.
            </p>

            <h2>Étape 6 : profiter des bonus… en lisant les conditions</h2>
            <p>
              La plupart des opérateurs remboursent tout ou partie de votre premier pari s&apos;il
              est perdant, souvent sous forme de paris gratuits. Ces offres sont réelles mais
              encadrées : cote minimale, délai d&apos;utilisation, gains versés hors mise
              initiale. Notre guide <Link href="/bonus-paris-sportifs">comprendre les bonus</Link>{' '}
              vous apprend à les décoder avant de vous engager.
            </p>

            <h2>Les trois erreurs qui coûtent le plus cher aux débutants</h2>
            <table>
              <tbody>
                <tr>
                  <th>Erreur</th>
                  <th>Pourquoi c&apos;est un piège</th>
                  <th>Le bon réflexe</th>
                </tr>
                <tr>
                  <td>Parier avec le cœur</td>
                  <td>Votre attachement à une équipe fausse votre jugement</td>
                  <td>Ne pariez pas sur votre club, ou traitez-le comme n&apos;importe quel autre</td>
                </tr>
                <tr>
                  <td>Courir après ses pertes</td>
                  <td>Les mises grossissent au pire moment, sous le coup de l&apos;émotion</td>
                  <td>Fixez une perte maximale par semaine et arrêtez-vous quand elle est atteinte</td>
                </tr>
                <tr>
                  <td>Ignorer la comparaison des cotes</td>
                  <td>Quelques centièmes de cote perdus à chaque pari s&apos;accumulent lourdement</td>
                  <td>Ayez un compte chez deux ou trois opérateurs et prenez la meilleure cote</td>
                </tr>
              </tbody>
            </table>
            <p>
              Le catalogue complet des pièges classiques est détaillé dans notre page{' '}
              <Link href="/erreurs-a-eviter">les erreurs à éviter</Link>.
            </p>

            <h2>En résumé</h2>
            <p>
              Un site agréé, un compte vérifié tôt, des cotes comprises, des mises encadrées et
              des bonus lus jusqu&apos;à la dernière ligne : voilà le socle du parieur qui dure.
              Le reste — l&apos;analyse, le flair, la spécialisation sur un sport — viendra avec
              l&apos;expérience.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/comparatif" className="btn">
                Comparer les bookmakers agréés
              </Link>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> les paris sportifs doivent rester un loisir. Si le jeu
              devient un besoin, appelez le 09 74 75 13 13 ou consultez notre page{' '}
              <Link href="/jeu-responsable">jeu responsable</Link>.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Tous les guides</h3>
              <ul>
                <li>
                  <Link href="/choisir-bookmaker">Choisir son bookmaker</Link>
                </li>
                <li>
                  <Link href="/gestion-bankroll">Gérer sa bankroll</Link>
                </li>
                <li>
                  <Link href="/erreurs-a-eviter">Les erreurs à éviter</Link>
                </li>
                <li>
                  <Link href="/bonus-paris-sportifs">Comprendre les bonus</Link>
                </li>
              </ul>
            </div>
            <div className="widget">
              <h3>Parier par sport</h3>
              <ul>
                <li>
                  <Link href="/paris-football">Football</Link>
                </li>
                <li>
                  <Link href="/paris-tennis">Tennis</Link>
                </li>
                <li>
                  <Link href="/paris-basketball">Basketball</Link>
                </li>
                <li>
                  <Link href="/paris-rugby">Rugby</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
