import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Les paris hippiques : pari mutuel, disciplines et types de jeux',
  description:
    'Comprendre les paris hippiques : principe du pari mutuel, trot, plat et obstacle, simple gagnant, couplé, trio et quinté, lecture du programme et gestion du budget.',
};

export default function ParisHippiquePage() {
  return (
    <main>
      <div className="page-head">
        <h1>Les paris hippiques : le guide complet</h1>
        <p>
          Le turf n&apos;est pas un pari sportif comme les autres : un mode de calcul des gains
          différent, un vocabulaire propre et une tradition française bien ancrée. Voici les clés
          pour s&apos;y retrouver.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/sports">Sports</Link> › Hippique
        </nav>

        <div className="content-wrap">
          <article className="article">
            <h2>Un univers à part : le pari mutuel</h2>
            <p>
              Première chose à comprendre : les paris hippiques ne fonctionnent pas comme les
              paris sportifs classiques. Sur un match de football, le bookmaker vous propose une
              cote fixe : si vous validez un pari à 2,50, ce chiffre est verrouillé quoi
              qu&apos;il arrive ensuite. En hippique, le système dominant en France est le pari
              mutuel : toutes les mises des joueurs sont rassemblées dans une masse commune,
              l&apos;opérateur prélève sa part, et le reste est partagé entre les gagnants.
            </p>

            <p>
              Conséquence directe : le rapport final n&apos;est connu qu&apos;après la course. Les
              cotes affichées avant le départ ne sont que des estimations, qui bougent au gré des
              mises des autres parieurs. Un cheval délaissé par le public paiera généreusement ;
              un favori surjoué rapportera peu, même s&apos;il s&apos;impose facilement. Vous ne
              jouez donc pas contre un bookmaker, mais contre les autres turfistes — trouver le
              cheval sous-estimé par la masse est toute la subtilité du jeu.
            </p>

            <h2>Trois disciplines, trois logiques</h2>

            <h3>Le trot</h3>
            <p>
              Discipline reine en France, disputée attelé (le driver est dans un sulky) ou monté.
              Le cheval doit conserver son allure de trot du départ à l&apos;arrivée : une faute
              d&apos;allure entraîne la disqualification, ce qui ajoute un aléa spécifique. La
              régularité d&apos;un trotteur et son aptitude au parcours du jour pèsent lourd dans
              l&apos;analyse.
            </p>

            <h3>Le plat</h3>
            <p>
              La course de vitesse pure, au galop, sur des distances variées. Le poids porté par
              chaque cheval, le tirage de la corde et la forme du moment sont les variables
              centrales. C&apos;est la discipline des grands rendez-vous internationaux.
            </p>

            <h3>L&apos;obstacle</h3>
            <p>
              Haies et steeple-chase : des courses spectaculaires où le saut ajoute un risque de
              chute permanent. Les rapports peuvent y être élevés, mais l&apos;aléa est maximal —
              la prudence s&apos;impose pour un débutant.
            </p>

            <h2>Les types de paris</h2>
            <table>
              <tbody>
                <tr>
                  <th>Pari</th>
                  <th>Principe</th>
                </tr>
                <tr>
                  <td>Simple gagnant</td>
                  <td>
                    Votre cheval doit terminer premier — le pari de base, idéal pour débuter
                  </td>
                </tr>
                <tr>
                  <td>Simple placé</td>
                  <td>
                    Votre cheval doit finir dans les premiers (généralement les 3 premiers) :
                    rapport plus faible, risque réduit
                  </td>
                </tr>
                <tr>
                  <td>Couplé</td>
                  <td>Trouver deux chevaux à l&apos;arrivée, dans l&apos;ordre ou le désordre</td>
                </tr>
                <tr>
                  <td>Trio</td>
                  <td>Trouver les trois premiers, le plus souvent dans le désordre</td>
                </tr>
                <tr>
                  <td>Quinté</td>
                  <td>
                    Le jeu emblématique : désigner les cinq premiers de la course événement du
                    jour ; rapports parfois spectaculaires dans l&apos;ordre, mais probabilité
                    très faible
                  </td>
                </tr>
              </tbody>
            </table>

            <p>
              Notre conseil de méthode : commencez exclusivement au simple, gagnant ou placé. Les
              paris combinés comme le trio ou le quinté font rêver par leurs rapports, mais leur
              fréquence de gain est si basse qu&apos;ils épuisent un budget en quelques semaines.
              On apprend à lire une course au simple ; on ne l&apos;apprend jamais au quinté.
            </p>

            <h2>Apprendre à lire un programme de courses</h2>
            <p>
              Le programme — la « musique » du cheval, ses dernières performances codées, la
              distance, le ferrage au trot, le poids en plat, le nom du driver ou du jockey,
              l&apos;entraîneur, la corde — concentre l&apos;essentiel de l&apos;information
              utile. Quelques repères pour débuter : une musique récente régulière (des chiffres
              bas et peu de « D » de disqualification au trot) vaut mieux qu&apos;un exploit
              isolé ; un cheval qui retrouve une distance ou un hippodrome où il a déjà brillé
              mérite l&apos;attention ; et l&apos;association entraîneur-driver en forme du moment
              est un signal souvent plus fiable que la réputation du cheval. Lire dix programmes
              sans jouer est le meilleur entraînement qui soit.
            </p>

            <h2>Un rythme de jeu à encadrer strictement</h2>
            <p>
              Contrairement au football qui vit au rythme des week-ends, les réunions hippiques
              s&apos;enchaînent tous les jours, matin et soir, en France comme à l&apos;étranger.
              Cette disponibilité permanente est le principal danger du turf : il y a toujours une
              course dans dix minutes pour « se refaire ». Fixez-vous un budget hebdomadaire
              ferme, un nombre maximal de courses jouées par jour, et tenez un relevé honnête de
              vos mises et de vos gains. Notre page{' '}
              <Link href="/gestion-bankroll">gestion de bankroll</Link> détaille une méthode
              simple pour tenir ce cadre.
            </p>

            <div className="callout">
              <strong>Envie d&apos;aller plus loin ?</strong> Notre{' '}
              <Link href="/guide-debutant">guide du débutant</Link> pose les bases communes à tous
              les paris, et notre page sur{' '}
              <Link href="/erreurs-a-eviter">les erreurs à éviter</Link> s&apos;applique au turf
              comme aux paris sportifs.
            </div>

            <h2>Quels opérateurs pour les paris hippiques ?</h2>
            <p>
              Tous les sites de paris sportifs ne couvrent pas les courses : l&apos;hippique
              demande un agrément spécifique et un vrai savoir-faire. Deux opérateurs se détachent
              nettement dans nos tests : <Link href="/pmu">PMU</Link>, acteur historique dont la
              masse de mises garantit des rapports de référence et une couverture totale des
              réunions françaises, et <Link href="/genybet">Genybet</Link>, spécialiste du turf
              apprécié pour ses outils d&apos;analyse et son interface pensée pour les turfistes.
              Notre <Link href="/comparatif">comparatif général</Link> vous aide à départager
              l&apos;ensemble des opérateurs agréés.
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> avec des courses toutes les dix minutes, le turf expose
              particulièrement au jeu excessif. Ne misez que ce que vous pouvez vous permettre de
              perdre, et n&apos;essayez jamais de « vous refaire » sur la course suivante.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Autres sports</h3>
              <ul>
                <li>
                  <Link href="/paris-football">Paris sur le football</Link>
                </li>
                <li>
                  <Link href="/paris-tennis">Paris sur le tennis</Link>
                </li>
                <li>
                  <Link href="/paris-basketball">Paris sur le basketball</Link>
                </li>
                <li>
                  <Link href="/paris-rugby">Paris sur le rugby</Link>
                </li>
                <li>
                  <Link href="/paris-f1">Paris sur la F1</Link>
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
                  <Link href="/erreurs-a-eviter">Les erreurs à éviter</Link>
                </li>
                <li>
                  <Link href="/bonus-paris-sportifs">Comprendre les bonus</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
