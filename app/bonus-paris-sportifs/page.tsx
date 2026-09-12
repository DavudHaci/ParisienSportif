import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Comprendre les bonus de paris sportifs : freebets, conditions, valeur réelle',
  description:
    "Premier pari remboursé en freebets ou en cash, cote minimale, délais, calcul de la valeur réelle d'une offre : tout ce qu'il faut savoir avant de s'inscrire pour un bonus.",
};

export default function BonusParisSportifsPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Comprendre les bonus de paris sportifs</h1>
        <p>
          « Jusqu&apos;à 100&nbsp;€ offerts » : derrière la promesse, des mécanismes précis qui
          changent tout. Apprenez à lire une offre comme un parieur averti.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/guides">Guides</Link> › Comprendre les
          bonus
        </nav>

        <div className="content-wrap">
          <article className="article">
            <h2>Ce que le marché français autorise</h2>
            <p>
              Sur le marché régulé français, l&apos;offre de bienvenue prend presque toujours la
              même forme : le remboursement de votre premier pari s&apos;il est perdant, dans la
              limite d&apos;un plafond affiché. Pas de « dépôt doublé » ni d&apos;argent offert
              sans condition — la réglementation encadre strictement ces promotions. Toute la
              question est donc de savoir <em>comment</em> vous êtes remboursé, car c&apos;est là
              que les offres diffèrent réellement.
            </p>

            <h2>Remboursement en freebets ou en cash : la vraie différence</h2>
            <p>Deux formules coexistent, et elles ne se valent pas :</p>
            <ul>
              <li>
                <strong>Le remboursement en cash</strong> recrédite votre compte en argent réel.
                Vous pouvez le retirer immédiatement ou le rejouer librement : votre premier pari
                était, de fait, sans risque.
              </li>
              <li>
                <strong>Le remboursement en freebets</strong> (paris gratuits) vous donne un
                crédit de jeu qu&apos;il faut obligatoirement remiser. Vous ne touchez de
                l&apos;argent réel que si ce pari gratuit est gagnant — et encore, pas la
                totalité, comme on va le voir.
              </li>
            </ul>
            <p>
              À plafond égal, une offre en cash vaut donc nettement plus qu&apos;une offre en
              freebets. C&apos;est le premier point à vérifier, avant même le montant.
            </p>

            <h2>La mécanique du freebet : la mise n&apos;est jamais rendue</h2>
            <p>
              C&apos;est la subtilité que la plupart des débutants découvrent trop tard : quand un
              pari gratuit gagne, vous recevez le gain <em>hors mise initiale</em>. Un freebet de
              100&nbsp;€ joué à une cote de 2,00 rapporte 100&nbsp;€ de gain, pas 200&nbsp;€ — les
              100&nbsp;€ de mise « fictive » retournent à l&apos;opérateur. La valeur réelle
              d&apos;un freebet est donc toujours inférieure à sa valeur faciale : jouée à une
              cote de 2,00 avec une chance sur deux de passer, elle tourne autour de la moitié du
              montant affiché. Conséquence pratique : un freebet se joue plutôt sur une cote
              moyenne ou haute (2,00 à 3,50), où la perte de la mise pèse proportionnellement
              moins dans le gain final.
            </p>

            <h2>Les conditions typiques à vérifier ligne par ligne</h2>
            <ul>
              <li>
                <strong>La cote minimale :</strong> le premier pari (et parfois le freebet
                lui-même) doit souvent être placé à une cote d&apos;au moins 1,50. Cela vous
                empêche de « sécuriser » le remboursement sur un ultra-favori.
              </li>
              <li>
                <strong>Le délai d&apos;utilisation :</strong> les freebets expirent, fréquemment
                sous 7 à 15 jours. Un crédit non joué à temps disparaît purement et simplement.
              </li>
              <li>
                <strong>Le fractionnement :</strong> certains opérateurs versent le remboursement
                en plusieurs paris gratuits plutôt qu&apos;en un seul, ce qui limite votre
                flexibilité.
              </li>
              <li>
                <strong>Les éventuelles conditions de mise :</strong> plus rares sur le marché
                français que dans le casino en ligne, elles existent parfois sur des promotions
                secondaires — un gain à rejouer une ou plusieurs fois avant retrait. Vérifiez
                toujours.
              </li>
              <li>
                <strong>Le premier pari uniquement :</strong> c&apos;est bien votre tout premier
                ticket qui compte. Un petit pari d&apos;essai à 2&nbsp;€ « pour voir »
                consommerait l&apos;offre à hauteur de 2&nbsp;€.
              </li>
            </ul>

            <h2>Calculer la valeur réelle d&apos;une offre</h2>
            <p>
              Pour comparer deux offres, raisonnez en espérance plutôt qu&apos;en montant affiché.
              Un exemple : vous placez un premier pari de 100&nbsp;€ à une cote de 2,00.
            </p>
            <div className="callout">
              <strong>Offre cash :</strong> s&apos;il gagne, +100&nbsp;€ ; s&apos;il perd, 0
              (remboursé). Perte impossible.
              <br />
              <strong>Offre freebets :</strong> s&apos;il gagne, +100&nbsp;€ ; s&apos;il perd,
              vous recevez 100&nbsp;€ de freebets qui valent environ 50&nbsp;€ en espérance. Perte
              réelle moyenne : environ 50&nbsp;€ sur ce scénario.
            </div>
            <p>
              Le montant du plafond compte donc moins que la forme du remboursement, la cote
              minimale exigée et votre intention réelle : quelqu&apos;un qui comptait miser
              30&nbsp;€ n&apos;a que faire d&apos;un plafond à 150&nbsp;€.
            </p>

            <h2>Les offres de bienvenue du marché français</h2>
            <p>
              Voici les ordres de grandeur constatés chez les principaux opérateurs agréés. Les
              montants et modalités évoluent régulièrement : vérifiez toujours l&apos;offre en
              vigueur sur le site de l&apos;opérateur avant de vous inscrire.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Opérateur</th>
                  <th>Offre typique</th>
                  <th>Forme</th>
                  <th>Notre avis</th>
                </tr>
                <tr>
                  <td>
                    <Link href="/betclic">Betclic</Link>
                  </td>
                  <td>Jusqu&apos;à 100&nbsp;€</td>
                  <td>Freebets</td>
                  <td>Offre standard, opérateur très complet par ailleurs</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/winamax">Winamax</Link>
                  </td>
                  <td>Jusqu&apos;à 100&nbsp;€</td>
                  <td>Cash</td>
                  <td>Le remboursement en argent réel fait la différence</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/unibet">Unibet</Link>
                  </td>
                  <td>Jusqu&apos;à 100&nbsp;€</td>
                  <td>Freebets</td>
                  <td>Classique, à jouer sur des cotes moyennes</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/parionssport">ParionsSport</Link>
                  </td>
                  <td>Environ 90&nbsp;€</td>
                  <td>Freebets</td>
                  <td>Plafond un peu inférieur, conditions accessibles</td>
                </tr>
                <tr>
                  <td>
                    <Link href="/zebet">Zebet</Link>
                  </td>
                  <td>Jusqu&apos;à 150&nbsp;€</td>
                  <td>Freebets</td>
                  <td>Le plafond le plus haut, à relativiser par la forme freebets</td>
                </tr>
              </tbody>
            </table>

            <h2>Le bonus ne doit jamais être le seul critère</h2>
            <p>
              Une offre de bienvenue se consomme en une semaine ; vous utiliserez le site pendant
              des mois. Un plafond alléchant ne compense ni des cotes basses — qui vous coûtent un
              peu d&apos;argent à chaque pari —, ni une application médiocre, ni des retraits
              lents. Notre conseil : sélectionnez d&apos;abord deux ou trois opérateurs pour leur
              qualité globale à l&apos;aide de notre guide{' '}
              <Link href="/choisir-bookmaker">choisir son bookmaker</Link>, puis profitez de leurs
              offres de bienvenue dans l&apos;ordre qui vous arrange. Le bonus est la cerise, pas
              le gâteau.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/comparatif" className="btn">
                Comparer les bookmakers et leurs offres
              </Link>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> un bonus n&apos;est jamais une raison de miser plus que
              prévu. Si le jeu prend trop de place, appelez le 09 74 75 13 13 (appel non surtaxé)
              ou consultez notre page <Link href="/jeu-responsable">jeu responsable</Link>.
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
                  <Link href="/gestion-bankroll">Gérer sa bankroll</Link>
                </li>
                <li>
                  <Link href="/erreurs-a-eviter">Les erreurs à éviter</Link>
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
