import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Jeu responsable : ressources et outils d'aide",
  description:
    "Les signes d'alerte du jeu excessif, les outils de protection proposés par les opérateurs agréés et les dispositifs d'aide disponibles en France.",
};

export default function JeuResponsablePage() {
  return (
    <main>
      <div className="page-head">
        <h1>Jeu responsable</h1>
        <p>
          Le pari sportif doit rester un loisir. Cette page rassemble les signes d&apos;alerte,
          les outils de protection et les contacts d&apos;aide.
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="article">
            <div className="callout warn">
              <strong>Besoin d&apos;aide maintenant ?</strong> Appelez le{' '}
              <strong>09 74 75 13 13</strong> (appel non surtaxé, 7 j/7 de 8 h à 2 h) ou
              rendez-vous sur <strong>joueurs-info-service.fr</strong> pour un chat confidentiel
              avec un professionnel.
            </div>

            <h2>Les signes qui doivent alerter</h2>
            <p>
              Le passage du loisir au jeu problématique est progressif et souvent invisible pour
              la personne concernée. Certains signaux méritent une attention immédiate :
            </p>
            <ul>
              <li>
                miser des sommes de plus en plus importantes pour ressentir la même excitation ;
              </li>
              <li>parier pour « se refaire » après une perte ;</li>
              <li>
                emprunter de l&apos;argent ou puiser dans des réserves destinées à autre chose
                pour jouer ;
              </li>
              <li>mentir à ses proches sur le temps ou l&apos;argent consacrés au jeu ;</li>
              <li>
                ressentir de l&apos;irritabilité ou de l&apos;anxiété lorsqu&apos;on ne peut pas
                parier ;
              </li>
              <li>négliger travail, études ou relations à cause du jeu.</li>
            </ul>
            <p>
              Un seul de ces signes justifie de faire une pause et d&apos;en parler. Plusieurs
              signes cumulés justifient de demander de l&apos;aide.
            </p>

            <h2>Les outils proposés par les opérateurs agréés</h2>
            <p>
              Tous les bookmakers agréés par l&apos;ANJ ont l&apos;obligation de mettre à
              disposition des outils de protection. Utilisez-les dès l&apos;ouverture du compte,
              pas après le premier dérapage :
            </p>
            <table>
              <tbody>
                <tr>
                  <th>Outil</th>
                  <th>Ce qu&apos;il fait</th>
                </tr>
                <tr>
                  <td>Limites de dépôt</td>
                  <td>Plafonnent les sommes que vous pouvez déposer par semaine ou par mois</td>
                </tr>
                <tr>
                  <td>Limites de mise</td>
                  <td>Plafonnent le montant total de vos paris sur une période donnée</td>
                </tr>
                <tr>
                  <td>Auto-exclusion temporaire</td>
                  <td>Bloque l&apos;accès à votre compte pendant une durée que vous choisissez</td>
                </tr>
                <tr>
                  <td>Auto-exclusion définitive</td>
                  <td>Ferme le compte sans possibilité de réouverture rapide</td>
                </tr>
                <tr>
                  <td>Historique de jeu</td>
                  <td>
                    Affiche le bilan réel de vos dépôts, mises et pertes — à consulter
                    régulièrement
                  </td>
                </tr>
              </tbody>
            </table>

            <h2>L&apos;interdiction volontaire de jeux</h2>
            <p>
              Pour une protection plus large, toute personne peut demander son inscription au
              fichier national des interdits de jeux, géré par l&apos;ANJ. L&apos;inscription
              bloque l&apos;accès à l&apos;ensemble des sites de jeux agréés en France ainsi
              qu&apos;aux casinos, pour une durée minimale de trois ans. La demande
              s&apos;effectue en ligne sur le site de l&apos;ANJ.
            </p>

            <h2>Nos règles de bon sens</h2>
            <ol>
              <li>Fixez un budget de jeu mensuel avant de miser, et considérez-le comme dépensé.</li>
              <li>Ne pariez jamais d&apos;argent destiné aux dépenses essentielles.</li>
              <li>Ne jouez pas sous le coup de l&apos;émotion — colère, euphorie, alcool.</li>
              <li>Faites des pauses régulières, y compris quand vous gagnez.</li>
              <li>
                Parlez de votre pratique à un proche : le secret est le terreau du jeu excessif.
              </li>
            </ol>

            <h2>Contacts utiles</h2>
            <ul>
              <li>
                <strong>Joueurs Info Service :</strong> 09 74 75 13 13 — joueurs-info-service.fr
              </li>
              <li>
                <strong>ANJ :</strong> anj.fr — régulation et interdiction volontaire de jeux
              </li>
              <li>
                <strong>Votre médecin traitant</strong>, qui peut vous orienter vers une
                consultation spécialisée en addictologie (CSAPA).
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
