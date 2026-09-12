import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Gérer sa bankroll : la méthode pour durer dans les paris sportifs',
  description:
    'Bankroll dédiée, mises fixes ou variables, suivi du ROI, gestion des séries perdantes et retraits de gains : la discipline financière du parieur, expliquée avec des chiffres.',
};

export default function GestionBankrollPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Gérer sa bankroll : la méthode pour durer</h1>
        <p>
          Ce qui sépare le parieur qui tient dans le temps de celui qui recharge son compte tous
          les mois, ce n&apos;est pas le pronostic : c&apos;est la gestion de l&apos;argent.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/guides">Guides</Link> › Gérer sa bankroll
        </nav>

        <div className="content-wrap">
          <article className="article">
            <h2>Qu&apos;est-ce qu&apos;une bankroll, exactement ?</h2>
            <p>
              Votre bankroll est la somme que vous consacrez exclusivement aux paris sportifs.
              Elle obéit à deux règles absolues. Première règle : sa perte intégrale ne doit avoir
              aucune conséquence sur votre vie — ni loyer en retard, ni découvert, ni sacrifice.
              Deuxième règle : elle est étanche. L&apos;argent du quotidien n&apos;y entre pas
              pour combler un trou, et on ne la « recharge » pas sur un coup de tête après une
              mauvaise soirée.
            </p>
            <p>
              Fixez ce montant à froid, un jour sans match, et considérez-le comme le budget
              d&apos;un loisir : ce que vous dépenseriez pour un abonnement, des places de stade
              ou un jeu vidéo. Tout raisonnement qui commence par « je vais me refaire » est le
              signe que la bankroll n&apos;existe plus dans votre tête.
            </p>

            <h2>La mise fixe : simple, robuste, recommandée</h2>
            <p>
              La méthode dite de mise fixe (ou « flat ») consiste à engager le même pourcentage de
              la bankroll sur chaque pari, quelle que soit votre confiance. La fourchette saine se
              situe entre 1 et 5&nbsp;% ; nous recommandons 2&nbsp;% aux débutants. À ce rythme,
              il faudrait cinquante paris perdants d&apos;affilée pour être ruiné — un scénario
              quasiment impossible si vos pronostics sont un minimum réfléchis, alors qu&apos;une
              série de huit ou dix échecs consécutifs, elle, arrive à tout le monde.
            </p>
            <p>
              Exemple chiffré avec une bankroll de 500&nbsp;€ et une mise fixe de 2&nbsp;%, soit
              10&nbsp;€ par pari :
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Pari</th>
                  <th>Mise</th>
                  <th>Cote</th>
                  <th>Résultat</th>
                  <th>Bankroll</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>10&nbsp;€</td>
                  <td>1,90</td>
                  <td>Gagné (+9&nbsp;€)</td>
                  <td>509&nbsp;€</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10&nbsp;€</td>
                  <td>2,10</td>
                  <td>Perdu (−10&nbsp;€)</td>
                  <td>499&nbsp;€</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>10&nbsp;€</td>
                  <td>1,75</td>
                  <td>Perdu (−10&nbsp;€)</td>
                  <td>489&nbsp;€</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>10&nbsp;€</td>
                  <td>2,40</td>
                  <td>Gagné (+14&nbsp;€)</td>
                  <td>503&nbsp;€</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>10&nbsp;€</td>
                  <td>1,95</td>
                  <td>Gagné (+9,50&nbsp;€)</td>
                  <td>512,50&nbsp;€</td>
                </tr>
              </tbody>
            </table>
            <p>
              Après cinq paris, deux échecs n&apos;ont entamé la bankroll que de 2&nbsp;% au pire
              moment. C&apos;est tout l&apos;intérêt du système : aucune défaite isolée ne peut
              faire de dégâts sérieux. Vous pouvez réajuster la mise (toujours 2&nbsp;% du solde
              courant) une fois par mois, pas après chaque pari.
            </p>

            <h2>La mise variable selon la confiance</h2>
            <p>
              Une fois quelques centaines de paris d&apos;expérience accumulés, certains parieurs
              passent à une échelle de confiance : par exemple 1&nbsp;% pour un pari exploratoire,
              2&nbsp;% pour un pari standard, 3&nbsp;% pour une conviction forte et argumentée.
              Cette méthode ne fonctionne qu&apos;à une condition : que vos niveaux de confiance
              soient définis avant de regarder la cote, selon des critères écrits, et jamais
              gonflés sous le coup de l&apos;enthousiasme. Si vos paris « confiance maximale » ne
              gagnent pas plus souvent que les autres — vérifiable dans votre suivi —, revenez à
              la mise fixe.
            </p>

            <h2>Pourquoi la martingale détruit les comptes</h2>
            <p>
              La martingale — doubler la mise après chaque défaite pour tout récupérer à la
              première victoire — semble imparable sur le papier. En réalité, la progression est
              explosive : en partant de 10&nbsp;€, la septième mise atteint 640&nbsp;€ et la
              dixième 5&nbsp;120&nbsp;€, pour un gain net final de… 10&nbsp;€. Une série de sept
              ou huit défaites suffit à dépasser soit votre bankroll, soit la limite de mise de
              l&apos;opérateur, et la perte cumulée est alors massive et définitive. La martingale
              ne réduit pas le risque : elle le concentre sur un événement rare mais ruineux.
              Aucun parieur sérieux ne l&apos;utilise.
            </p>

            <h2>Suivre ses paris : le tableur obligatoire</h2>
            <p>
              Sans historique, impossible de savoir si vous gagnez réellement de l&apos;argent —
              la mémoire retient les beaux coups et efface les tickets perdants. Tenez un tableur
              avec, pour chaque pari : la date, le match, le marché, la cote, la mise, le résultat
              et le solde. Deux indicateurs en découlent :
            </p>
            <ul>
              <li>
                <strong>Le ROI (retour sur investissement) :</strong> gains nets divisés par le
                total misé. Un ROI de +4&nbsp;% sur 300 paris signifie que chaque euro misé en a
                rapporté 1,04 en moyenne.
              </li>
              <li>
                <strong>Le yield par segment :</strong> le même calcul, ventilé par sport, par
                championnat ou par type de marché. C&apos;est lui qui révèle où vous êtes
                réellement bon — et quels marchés vous devriez abandonner.
              </li>
            </ul>
            <p>
              Un bilan honnête ne se lit qu&apos;à partir de 200 à 300 paris : en dessous, la
              variance domine et un bon mois ne prouve rien.
            </p>

            <h2>Traverser une série perdante sans craquer</h2>
            <p>
              Les séries noires sont mathématiquement inévitables, même pour un parieur rentable.
              Le danger n&apos;est pas la série elle-même — la mise fixe la rend indolore
              financièrement — mais votre réaction : mises gonflées, paris précipités pour « se
              refaire », marchés inconnus tentés par dépit. Trois garde-fous : réduire la mise de
              moitié après cinq défaites consécutives, s&apos;imposer 48 heures sans pari après
              une soirée frustrante, et relire son tableur pour vérifier que la méthode reste
              saine avant de la remettre en cause. Une série perdante avec une méthode solide, ça
              s&apos;attend ; sans méthode, ça s&apos;explique.
            </p>

            <h2>Quand retirer ses gains ?</h2>
            <p>
              Une bankroll qui grossit indéfiniment finit par pousser aux grosses mises.
              Fixez-vous un seuil : par exemple, chaque fois que le solde dépasse 150&nbsp;% du
              capital de départ, retirez l&apos;excédent vers votre compte bancaire. L&apos;argent
              retiré est sanctuarisé : il ne revient jamais sur le site. Ce rituel transforme des
              gains virtuels en gains réels — et c&apos;est le seul moment où le pari sportif
              rapporte vraiment quelque chose.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/comparatif" className="btn">
                Comparer les bookmakers agréés
              </Link>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> si le budget dédié au jeu déborde sur votre budget de vie,
              ce n&apos;est plus une bankroll, c&apos;est un problème. Appelez le 09 74 75 13 13
              (appel non surtaxé) ou consultez notre page{' '}
              <Link href="/jeu-responsable">jeu responsable</Link>.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Tous les guides</h3>
              <ul>
                <li>
                  <Link href="/guide-debutant">Guide du débutant</Link>
                </li>
                <li>
                  <Link href="/choisir-bookmaker">Choisir son bookmaker</Link>
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
