import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Avis Genybet 2026 — Notre test complet du bookmaker',
  description:
    'Genybet examiné en détail : héritage des médias hippiques Geny, offre turf et sport, expertise éditoriale, paiements et fiabilité. Notre évaluation sans filtre.',
};

export default function GenybetPage() {
  return (
    <main>
      <div className="page-head">
        <h1>
          Avis Genybet : l&apos;héritier des médias hippiques a-t-il sa place chez les parieurs
          sportifs ?
        </h1>
        <p>
          Issu d&apos;une famille de publications dédiées aux courses, Genybet intrigue. Nous
          l&apos;avons éprouvé sur le turf comme sur le sport.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/avis">Avis bookmakers</Link> › Genybet
        </nav>

        <div className="content-wrap">
          <article className="article">
            <div className="rating-line">
              <span className="score-badge">7,6/10</span>
              <span className="stars">★★★★☆</span>
              <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                Testé et mis à jour en 2026
              </span>
            </div>

            <h2>Genybet en deux mots</h2>
            <p>
              Avant d&apos;être un site de paris, Geny était un nom que les turfistes croisaient
              dans leurs lectures : le groupe s&apos;est construit autour de médias consacrés aux
              courses de chevaux, de leurs pronostics et de leurs statistiques. Genybet est le
              prolongement logique de cette histoire — un opérateur agréé par l&apos;Autorité
              Nationale des Jeux qui a transformé des décennies de savoir éditorial hippique en
              plateforme de jeu, avant d&apos;y adjoindre un volet paris sportifs.
            </p>

            <p>
              Cette généalogie explique tout du produit. Là où d&apos;autres bookmakers traitent le
              turf comme une case à cocher, Genybet en a fait sa colonne vertébrale : le parieur
              hippique y trouve un environnement conçu par des gens qui parlent sa langue. Le
              sport, arrivé ensuite, complète l&apos;offre pour ceux qui alternent entre le Quinté
              du midi et le match du soir.
            </p>

            <div className="callout">
              <strong>Offre de bienvenue :</strong> Genybet accorde habituellement aux nouveaux
              venus un avantage de départ distinct selon l&apos;univers choisi, hippique ou
              sportif. Ces offres sont révisées fréquemment par l&apos;opérateur : ne vous fiez
              qu&apos;aux conditions affichées sur son site officiel au moment de votre
              inscription.
            </div>

            <h2>Points forts et points faibles</h2>
            <div className="pros-cons">
              <div className="pros">
                <h4>Ce que nous avons aimé</h4>
                <ul>
                  <li>Véritable culture hippique héritée des médias du groupe Geny</li>
                  <li>Pronostics, partants et statistiques de courses intégrés au parcours de jeu</li>
                  <li>Double univers turf et sport accessible depuis un compte unique</li>
                  <li>Opérateur discret mais fiable, sans historique d&apos;incidents notables</li>
                  <li>Ambiance de spécialiste, loin du marketing tapageur des grandes marques</li>
                </ul>
              </div>
              <div className="cons">
                <h4>Ce qui peut être amélioré</h4>
                <ul>
                  <li>Offre sportive sensiblement moins fournie que celle des leaders</li>
                  <li>Design vieillissant sur certaines pages du site</li>
                  <li>Notoriété faible hors du cercle des turfistes</li>
                </ul>
              </div>
            </div>

            <h2>L&apos;offre de paris à la loupe</h2>
            <p>
              Sur les courses, Genybet joue à domicile. Réunions françaises et internationales,
              paris simples et combinés, informations sur les partants, la musique des chevaux et
              les conditions de course : l&apos;ensemble forme un écosystème cohérent où l&apos;on
              passe de l&apos;analyse à la mise sans changer d&apos;onglet. Pour un habitué des
              hippodromes, cette continuité entre contenu et jeu est un vrai confort que peu de
              plateformes offrent.
            </p>

            <p>
              Le rayon sport est plus modeste, et il faut le savoir avant de s&apos;inscrire. Les
              disciplines populaires sont couvertes — football, tennis, rugby, basket — avec des
              marchés standards et des cotes dans la moyenne du marché régulé. On sent que ce
              segment vient en complément : le nombre de compétitions référencées et la profondeur
              des paris proposés restent en deçà de ce qu&apos;alignent les poids lourds du
              secteur.
            </p>

            <h3>Le pari en direct</h3>
            <p>
              Le pari en cours de match est disponible sur les affiches principales avec un
              fonctionnement stable, mais l&apos;habillage reste sommaire : peu de données en temps
              réel et un choix de marchés vivants limité. Les turfistes noteront en revanche que le
              suivi des réunions est, lui, particulièrement bien tenu à jour.
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
                  <td>Non</td>
                  <td>Non</td>
                </tr>
              </tbody>
            </table>
            <p>
              L&apos;éventail de méthodes est plus court qu&apos;ailleurs, mais les canaux
              essentiels répondent présent et notre retrait test vers PayPal a été soldé en deux
              jours ouvrés. La règle commune à tout le marché agréé s&apos;applique évidemment
              ici : identité vérifiée obligatoire avant le premier retrait, donc envoyez vos
              documents dès la création du compte pour gagner du temps.
            </p>

            <h2>Service client et jeu responsable</h2>
            <p>
              Le support se joint par formulaire et par courriel, avec des réponses reçues sous un
              jour ouvré lors de notre essai — correctes sur le fond, sans chat instantané
              toutefois. En matière de prévention, Genybet déploie les protections prévues par la
              loi française : limites personnalisables de dépôt et de mise, possibilité de faire
              une pause ou de s&apos;exclure durablement, et renvoi systématique vers les
              dispositifs nationaux d&apos;aide aux joueurs en difficulté.
            </p>

            <h2>Notre verdict</h2>
            <p>
              Genybet est un spécialiste qui assume sa niche. Si vos week-ends se jouent autour des
              réunions hippiques, son mariage entre expertise éditoriale et prise de paris justifie
              amplement l&apos;ouverture d&apos;un compte, éventuellement en complément d&apos;un
              site plus généraliste. Si vous êtes avant tout parieur sportif, l&apos;offre honnête
              mais courte vous laissera sur votre faim. Le 7,6/10 traduit exactement cela : une
              valeur sûre sur son terrain de prédilection, un second couteau ailleurs.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <span className="btn btn-inactive">
                Découvrir Genybet
              </span>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> les courses comme le sport restent des jeux de hasard.
              Misez uniquement ce que votre budget loisir autorise et ne courez jamais après vos
              pertes.
            </div>
          </article>

          <aside className="sidebar">
            <TopFiveWidget />
            <div className="widget">
              <h3>Fiche express</h3>
              <ul>
                <li>
                  <strong>Groupe :</strong> Geny (médias hippiques)
                </li>
                <li>
                  <strong>Agrément :</strong> ANJ
                </li>
                <li>
                  <strong>Produits :</strong> hippique, sport
                </li>
                <li>
                  <strong>Point fort :</strong> expertise courses et pronostics intégrés
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
