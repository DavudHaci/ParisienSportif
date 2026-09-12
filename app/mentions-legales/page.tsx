import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site ParisienSportif.fr : éditeur, hébergement, propriété intellectuelle et responsabilité.',
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Mentions légales</h1>
        <p>Informations relatives à l&apos;éditeur et aux conditions d&apos;utilisation du site.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="article">
            <h2>Éditeur du site</h2>
            <p>
              Le site parisiensportif.fr (ci-après « le Site ») est un site d&apos;information et
              de comparaison consacré aux paris sportifs en ligne en France.
              <br />
              <em>
                [À compléter : dénomination sociale ou nom de l&apos;éditeur, forme juridique,
                adresse du siège, numéro SIREN/SIRET, directeur de la publication, adresse e-mail
                de contact.]
              </em>
            </p>

            <h2>Hébergement</h2>
            <p>
              <em>[À compléter : nom de l&apos;hébergeur, raison sociale, adresse et coordonnées.]</em>
            </p>

            <h2>Nature du service</h2>
            <p>
              Le Site est un comparateur éditorial indépendant. Il n&apos;est ni un opérateur de
              jeux d&apos;argent, ni un intermédiaire de paiement : aucune mise ne peut être
              placée sur le Site et aucun compte joueur n&apos;y est ouvert. Les paris se font
              exclusivement sur les sites des opérateurs agréés par l&apos;Autorité Nationale des
              Jeux (ANJ), vers lesquels le Site propose des liens.
            </p>

            <h2>Liens d&apos;affiliation</h2>
            <p>
              Certains liens présents sur le Site sont des liens de partenariat. Lorsqu&apos;un
              visiteur ouvre un compte chez un opérateur après avoir suivi l&apos;un de ces liens,
              l&apos;éditeur du Site peut percevoir une rémunération. Cette rémunération
              n&apos;influence pas le contenu éditorial : la méthodologie de notation, décrite sur
              la page <Link href="/a-propos">à propos</Link>, s&apos;applique de façon identique à
              tous les opérateurs.
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus du Site (textes, structure, éléments graphiques) est
              protégé par le droit de la propriété intellectuelle. Toute reproduction ou
              représentation, totale ou partielle, sans autorisation écrite préalable est
              interdite. Les marques et logos des opérateurs cités demeurent la propriété de leurs
              titulaires respectifs et ne sont mentionnés qu&apos;à des fins d&apos;identification.
            </p>

            <h2>Responsabilité</h2>
            <p>
              Les informations publiées sur le Site (offres de bienvenue, cotes, fonctionnalités)
              sont vérifiées au moment de leur rédaction mais peuvent évoluer à tout moment à
              l&apos;initiative des opérateurs. Elles sont fournies à titre indicatif et ne
              sauraient engager la responsabilité de l&apos;éditeur. Avant toute inscription, il
              appartient au visiteur de vérifier les conditions en vigueur sur le site de
              l&apos;opérateur concerné.
            </p>

            <h2>Jeu responsable</h2>
            <p>
              Les jeux d&apos;argent et de hasard sont interdits aux mineurs. Jouer comporte des
              risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13
              13 (appel non surtaxé) ou consultez joueurs-info-service.fr. Voir également notre
              page <Link href="/jeu-responsable">jeu responsable</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
