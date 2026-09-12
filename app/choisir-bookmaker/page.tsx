import type { Metadata } from 'next';
import Link from 'next/link';
import TopFiveWidget from '@/components/TopFiveWidget';

export const metadata: Metadata = {
  title: 'Comment choisir son bookmaker : les 7 critères qui comptent',
  description:
    'Agrément ANJ, niveau des cotes, profondeur des marchés, application, retraits, service client, promotions : la méthode complète pour choisir le bon site de paris.',
};

export default function ChoisirBookmakerPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Comment choisir son bookmaker : les 7 critères qui comptent</h1>
        <p>
          Tous les sites agréés se ressemblent en vitrine. Voici la grille d&apos;analyse que nous
          appliquons pour les départager — et que vous pouvez reprendre telle quelle.
        </p>
      </div>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Accueil</Link> › <Link href="/guides">Guides</Link> › Choisir son
          bookmaker
        </nav>

        <div className="content-wrap">
          <article className="article">
            <h2>1. L&apos;agrément ANJ : le filtre éliminatoire</h2>
            <p>
              Avant même de regarder les cotes ou le bonus, une seule question compte :
              l&apos;opérateur figure-t-il sur la liste officielle de l&apos;Autorité Nationale
              des Jeux ? Si la réponse est non, fermez l&apos;onglet. Un site agréé est soumis à
              des obligations concrètes : vos dépôts sont cantonnés sur des comptes séparés, des
              limites de mise et de dépôt vous sont proposées, et un médiateur peut être saisi en
              cas de conflit. Sur un site illégal, aucun de ces garde-fous n&apos;existe — et le
              fisc français peut par ailleurs vous reprocher d&apos;y avoir joué.
            </p>
            <p>
              Ce critère n&apos;est pas pondéré dans notre grille : il est binaire. Tous les
              opérateurs présents dans notre <Link href="/comparatif">comparatif</Link> sont
              agréés, sans exception.
            </p>

            <h2>2. Le niveau des cotes, autrement dit la marge</h2>
            <p>
              Deux bookmakers agréés peuvent proposer le même match avec des cotes sensiblement
              différentes. La raison tient à la marge que chacun intègre : plus elle est faible,
              plus les cotes sont hautes, et plus vous gagnez quand votre pronostic est bon. Sur
              un an et plusieurs centaines de paris, un écart moyen de 3&nbsp;% de marge se
              chiffre en dizaines d&apos;euros perdus ou gagnés, à pronostics identiques.
            </p>
            <p>
              Pour mesurer la marge d&apos;un opérateur sur un match, additionnez les probabilités
              implicites (1 divisé par chaque cote) des issues possibles : l&apos;excédent
              au-dessus de 100&nbsp;% est la marge. En pratique, les opérateurs les plus
              compétitifs du marché français tournent autour de 5 à 6&nbsp;% sur le football
              majeur, les moins généreux dépassent 8&nbsp;%.
            </p>

            <h2>3. La profondeur des marchés</h2>
            <p>
              Un catalogue étoffé ne sert pas qu&apos;à faire joli. Si vous vous spécialisez —
              corners, buteurs, handicaps asiatiques, tennis en double, basket universitaire — il
              vous faut un opérateur qui couvre réellement ces marchés, avec des limites de mise
              décentes. Vérifiez aussi la couverture du pari en direct : nombre de matchs proposés
              simultanément, réactivité des cotes, disponibilité du cash-out. Un parieur
              occasionnel de Ligue&nbsp;1 sera servi partout ; un parieur de niche doit comparer
              sérieusement.
            </p>

            <h2>4. La qualité de l&apos;application mobile</h2>
            <p>
              La majorité des paris se placent aujourd&apos;hui depuis un téléphone, souvent dans
              les minutes qui précèdent un match. Une application lente, qui recharge la page au
              moindre changement de cote ou qui vous déconnecte sans raison, finit par vous coûter
              des opportunités. Testez la fluidité de la navigation, la rapidité de validation
              d&apos;un ticket, la clarté du suivi des paris en cours. Les notes sur les magasins
              d&apos;applications donnent une première tendance, mais rien ne remplace un essai
              avec un petit dépôt.
            </p>

            <h2>5. La rapidité et les moyens de paiement</h2>
            <p>
              Déposer est toujours instantané ; c&apos;est au retrait que les différences
              apparaissent. Certains opérateurs traitent les demandes en quelques heures,
              d&apos;autres prennent trois à cinq jours ouvrés. Regardez aussi les moyens acceptés
              (carte bancaire, virement, portefeuilles électroniques), les éventuels montants
              minimaux de retrait et la présence ou non de frais. Un bon réflexe : envoyer vos
              justificatifs d&apos;identité dès l&apos;inscription, car aucun retrait ne partira
              avant la validation complète du compte.
            </p>

            <h2>6. Le service client</h2>
            <p>
              On n&apos;y pense qu&apos;au moment où quelque chose se bloque : un retrait en
              attente, un pari réglé de façon contestable, un bonus non crédité. Ce jour-là, la
              différence entre un chat en direct qui répond en deux minutes et un formulaire qui
              promet une réponse « sous 72 heures » devient très concrète. Privilégiez les
              opérateurs joignables par chat aux heures des grands matchs, et testez le support
              avec une question simple avant de déposer une somme importante.
            </p>

            <h2>7. Les promotions au-delà du bonus de bienvenue</h2>
            <p>
              L&apos;offre d&apos;inscription ne se consomme qu&apos;une fois. Ce qui compte sur
              la durée, ce sont les promotions récurrentes : cotes boostées sur les affiches,
              remboursements en cas de scénario particulier, défis et missions hebdomadaires. Un
              opérateur qui n&apos;anime jamais son offre après votre premier dépôt vous a séduit,
              pas fidélisé. Notre guide <Link href="/bonus-paris-sportifs">comprendre les bonus</Link>{' '}
              explique comment évaluer la valeur réelle de ces offres.
            </p>

            <h2>Notre pondération des critères</h2>
            <p>
              Voici le poids que nous accordons à chaque critère dans nos notes, une fois
              l&apos;agrément ANJ vérifié :
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Critère</th>
                  <th>Poids</th>
                  <th>Pourquoi</th>
                </tr>
                <tr>
                  <td>Niveau des cotes</td>
                  <td>30&nbsp;%</td>
                  <td>C&apos;est le seul critère qui agit sur chacun de vos paris</td>
                </tr>
                <tr>
                  <td>Profondeur des marchés</td>
                  <td>20&nbsp;%</td>
                  <td>Détermine ce que vous pouvez réellement jouer</td>
                </tr>
                <tr>
                  <td>Application mobile</td>
                  <td>15&nbsp;%</td>
                  <td>Votre outil quotidien, matin et soir de match</td>
                </tr>
                <tr>
                  <td>Paiements et retraits</td>
                  <td>15&nbsp;%</td>
                  <td>Récupérer ses gains vite et sans frais n&apos;est pas un luxe</td>
                </tr>
                <tr>
                  <td>Service client</td>
                  <td>10&nbsp;%</td>
                  <td>Rarement sollicité, décisif quand il l&apos;est</td>
                </tr>
                <tr>
                  <td>Promotions récurrentes</td>
                  <td>10&nbsp;%</td>
                  <td>La valeur ajoutée après le premier mois</td>
                </tr>
              </tbody>
            </table>

            <h2>Faut-il un seul compte, ou plusieurs ?</h2>
            <p>
              Notre réponse : deux ou trois comptes chez des opérateurs complémentaires. Cela vous
              permet de prendre systématiquement la meilleure cote disponible, de profiter de
              plusieurs offres de bienvenue et de comparer les promotions en continu. Nos tests
              détaillés de <Link href="/betclic">Betclic</Link>,{' '}
              <Link href="/winamax">Winamax</Link> et <Link href="/unibet">Unibet</Link> — nos
              trois meilleures notes actuelles — sont un bon point de départ pour composer ce
              trio.
            </p>

            <p style={{ textAlign: 'center', marginTop: 24 }}>
              <Link href="/comparatif" className="btn">
                Voir notre comparatif complet
              </Link>
            </p>

            <div className="callout warn">
              <strong>Rappel :</strong> quel que soit l&apos;opérateur choisi, les paris sportifs
              doivent rester un loisir encadré. En cas de difficulté avec le jeu, appelez le 09 74
              75 13 13 (appel non surtaxé) ou consultez notre page{' '}
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
