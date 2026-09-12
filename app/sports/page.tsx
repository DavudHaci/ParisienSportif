import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Parier par sport : football, tennis, basket, rugby, hippique, F1',
  description:
    'Retrouvez nos guides de paris sport par sport : football, tennis, basketball, rugby, courses hippiques et Formule 1. Marchés, stratégies et bookmakers conseillés.',
};

export default function SportsPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Parier sport par sport</h1>
        <p>
          Chaque discipline a ses marchés, ses pièges et ses opérateurs de prédilection.
          Choisissez votre terrain de jeu et découvrez notre guide dédié.
        </p>
      </div>

      <div className="section">
        <div className="container">
          <p>
            S&apos;il y a un conseil que notre rédaction répète à chaque nouveau parieur,
            c&apos;est celui-ci : ne cherchez pas à tout jouer. Les parieurs qui tiennent la
            distance sont presque toujours des spécialistes — ils connaissent un championnat, un
            circuit ou une discipline mieux que la moyenne, et concentrent leurs mises là où leur
            information a de la valeur. Parier sur tout, c&apos;est affronter les bookmakers sur
            leur terrain ; parier sur ce que l&apos;on suit vraiment, c&apos;est retourner une
            partie de l&apos;avantage. Nos guides ci-dessous présentent, sport par sport, les
            marchés incontournables, les facteurs d&apos;analyse spécifiques et les opérateurs
            les plus compétitifs. Commencez par la discipline que vous regardez déjà par
            plaisir : c&apos;est là que vos heures de visionnage se transforment en avantage de
            parieur.
          </p>

          <div className="card-grid">
            <div className="info-card">
              <div className="icon">⚽</div>
              <h3>Football</h3>
              <p>
                Le sport roi des paris en France : des centaines de marchés par match, du 1N2 aux
                paris buteurs. Notre guide passe en revue les compétitions à privilégier et les
                réflexes à adopter avant de valider un ticket.
              </p>
              <Link className="more" href="/paris-football">
                Lire le guide football →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🎾</div>
              <h3>Tennis</h3>
              <p>
                Pas de match nul, des matchs toute l&apos;année et un format idéal pour le pari
                en direct. Surfaces, handicaps de jeux et règles d&apos;abandon : tout ce
                qu&apos;il faut savoir avant de miser sur l&apos;ATP et la WTA.
              </p>
              <Link className="more" href="/paris-tennis">
                Lire le guide tennis →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🏀</div>
              <h3>Basketball</h3>
              <p>
                De la NBA à la Betclic Élite en passant par l&apos;EuroLeague, le basket est le
                paradis du parieur statistique. Spreads, totaux de points et paris joueurs
                n&apos;auront plus de secret pour vous.
              </p>
              <Link className="more" href="/paris-basketball">
                Lire le guide basket →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🏉</div>
              <h3>Rugby</h3>
              <p>
                Top 14, Champions Cup, Six Nations : le parieur français dispose ici d&apos;un
                vrai avantage d&apos;information. Notre guide explique pourquoi le handicap est
                le marché central du rugby et comment lire une feuille de match.
              </p>
              <Link className="more" href="/paris-rugby">
                Lire le guide rugby →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🐎</div>
              <h3>Courses hippiques</h3>
              <p>
                Un univers à part, régi par le pari mutuel et non par des cotes fixes. Trot,
                plat, obstacle, du simple gagnant au quinté : les clés pour débuter au turf sans
                se brûler les ailes.
              </p>
              <Link className="more" href="/paris-hippique">
                Lire le guide hippique →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🏎️</div>
              <h3>Formule 1</h3>
              <p>
                Vainqueur, podium, pole position, duels entre pilotes et paris à la saison : la
                F1 offre bien plus que le pari sur le champion annoncé. Un sport à faible volume
                d&apos;événements qui exige méthode et patience.
              </p>
              <Link className="more" href="/paris-f1">
                Lire le guide F1 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
