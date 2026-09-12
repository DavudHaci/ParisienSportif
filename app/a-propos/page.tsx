import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos — Qui sommes-nous et comment notons-nous ?',
  description:
    'Découvrez qui se cache derrière ParisienSportif.fr, comment nous testons les bookmakers et comment le site est financé.',
};

export default function AProposPage() {
  return (
    <main>
      <div className="page-head">
        <h1>À propos de ParisienSportif.fr</h1>
        <p>Qui nous sommes, comment nous testons et comment ce site est financé — en toute transparence.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="article">
            <h2>Notre mission</h2>
            <p>
              ParisienSportif.fr est né d&apos;un constat simple : le marché français des paris
              sportifs compte plus d&apos;une dizaine d&apos;opérateurs agréés, et il est devenu
              difficile pour un joueur de s&apos;y retrouver entre les promesses publicitaires,
              les bonus aux conditions obscures et les classements de complaisance. Notre mission
              est de fournir une information claire, vérifiée et comparable, pour que chacun
              choisisse son bookmaker en connaissance de cause.
            </p>

            <h2>Comment nous testons</h2>
            <p>Chaque avis publié sur ce site suit le même protocole :</p>
            <ol>
              <li>
                <strong>Inscription réelle</strong> sur le site de l&apos;opérateur, comme
                n&apos;importe quel joueur ;
              </li>
              <li>
                <strong>Dépôt et paris</strong> sur plusieurs sports et types de marchés, en
                pré-match comme en direct ;
              </li>
              <li>
                <strong>Demande de retrait</strong> pour mesurer les délais réels de traitement ;
              </li>
              <li>
                <strong>Sollicitation du service client</strong> avec des questions précises ;
              </li>
              <li>
                <strong>Notation</strong> selon une grille unique : offre de bienvenue
                (20&nbsp;%), niveau des cotes (25&nbsp;%), profondeur des marchés (20&nbsp;%),
                expérience mobile (20&nbsp;%), paiements et support (15&nbsp;%).
              </li>
            </ol>
            <p>
              Les avis sont revus lorsque l&apos;opérateur modifie sensiblement son produit ou son
              offre de bienvenue.
            </p>

            <h2>Comment le site est financé</h2>
            <p>
              Certains liens vers les opérateurs sont des liens de partenariat : si vous ouvrez un
              compte après avoir cliqué, nous pouvons percevoir une commission. C&apos;est ce qui
              nous permet de faire vivre le site sans facturer quoi que ce soit au lecteur. Deux
              garde-fous encadrent ce modèle :
            </p>
            <ul>
              <li>
                la grille de notation est identique pour tous les opérateurs, partenaires ou non ;
              </li>
              <li>
                aucune marque ne peut acheter une position dans nos classements, ni faire retirer
                une critique justifiée.
              </li>
            </ul>

            <h2>Notre position sur le jeu responsable</h2>
            <p>
              Les paris sportifs sont un loisir, pas une source de revenus. Nous rappelons sur
              chaque page les risques liés au jeu et les dispositifs d&apos;aide existants. Nous
              ne référençons que des opérateurs agréés par l&apos;ANJ, qui sont tenus de proposer
              des limites de dépôt, des périodes de pause et l&apos;auto-exclusion. Retrouvez
              toutes les ressources sur notre page{' '}
              <Link href="/jeu-responsable">jeu responsable</Link>.
            </p>

            <h2>Nous contacter</h2>
            <p>
              Une erreur dans un avis, une offre périmée, une question sur nos méthodes ?
              Écrivez-nous via la <Link href="/contact">page contact</Link> — nous lisons tous les
              messages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
