import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guides des paris sportifs : apprendre à parier avec méthode',
  description:
    'Débuter, choisir son bookmaker, gérer sa bankroll, décoder les bonus, éviter les pièges : tous les guides ParisienSportif.fr pour parier avec méthode.',
};

export default function GuidesPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Nos guides des paris sportifs</h1>
        <p>
          Du premier compte au suivi de votre ROI : tout ce qu&apos;il faut comprendre pour parier
          avec méthode, réuni en un seul endroit.
        </p>
      </div>

      <div className="section">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Accueil</Link> › Guides
          </nav>

          <p>
            Sur le long terme, les paris sportifs ne récompensent pas les plus chanceux mais les
            plus méthodiques. La chance décide d&apos;un ticket ; la méthode décide d&apos;un
            bilan. Comprendre ce que dit vraiment une cote, encadrer ses mises avec des règles
            écrites, choisir ses opérateurs sur des critères mesurables, lire les conditions
            d&apos;un bonus avant de s&apos;engager : aucune de ces compétences n&apos;est innée,
            et toutes s&apos;apprennent en quelques heures de lecture. C&apos;est précisément
            l&apos;objet de nos guides. Rédigés par notre équipe, sans jargon et avec des exemples
            chiffrés, ils forment un parcours complet — du tout premier pari jusqu&apos;aux
            habitudes des parieurs qui durent. Commencez par celui qui correspond à votre
            situation.
          </p>

          <div className="card-grid">
            <div className="info-card">
              <div className="info-card-icon">🚀</div>
              <h3>
                <Link href="/guide-debutant">Le guide du débutant</Link>
              </h3>
              <p>
                Votre point de départ si vous n&apos;avez jamais parié. Ouverture et vérification
                du compte, lecture des cotes, premier ticket raisonnable : chaque étape est
                expliquée dans l&apos;ordre, sans rien présupposer.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">⚖️</div>
              <h3>
                <Link href="/choisir-bookmaker">Choisir son bookmaker</Link>
              </h3>
              <p>
                Les sept critères qui départagent réellement les opérateurs agréés, avec la
                pondération que nous utilisons dans nos propres notes. De quoi choisir en
                connaissance de cause plutôt que sur une publicité.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">💰</div>
              <h3>
                <Link href="/gestion-bankroll">Gérer sa bankroll</Link>
              </h3>
              <p>
                La compétence la plus rentable du parieur, et la moins enseignée. Mises fixes ou
                variables, suivi du ROI dans un tableur, traversée des séries perdantes : la
                méthode complète, chiffres à l&apos;appui.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">⚠️</div>
              <h3>
                <Link href="/erreurs-a-eviter">Les 10 erreurs à éviter</Link>
              </h3>
              <p>
                Parier avec le cœur, courir après ses pertes, empiler les combinés : les dix
                pièges qui coûtent le plus cher aux parieurs. Pour chacun, l&apos;explication du
                mécanisme et le réflexe qui corrige.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">🎁</div>
              <h3>
                <Link href="/bonus-paris-sportifs">Comprendre les bonus</Link>
              </h3>
              <p>
                Freebets ou cash, cote minimale, délais, valeur réelle d&apos;une offre : ce que
                cachent les « 100&nbsp;€ offerts » et comment comparer les promotions du marché
                français sans se faire éblouir.
              </p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">❓</div>
              <h3>
                <Link href="/faq">Foire aux questions</Link>
              </h3>
              <p>
                Les réponses courtes aux questions que tout parieur se pose : fiscalité des gains,
                délais de retrait, vérification d&apos;identité, limites de mise. Le complément
                pratique de nos guides.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
