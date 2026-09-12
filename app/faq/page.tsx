import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes sur les paris sportifs en France',
  description:
    "Légalité, fiscalité, bonus, retraits, vérification d'identité : les réponses claires aux questions que se posent les parieurs français.",
};

export default function FaqPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Questions fréquentes</h1>
        <p>Les réponses aux questions que tout parieur — débutant ou confirmé — finit par se poser.</p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <details className="faq-item">
            <summary>Les paris sportifs en ligne sont-ils légaux en France ?</summary>
            <div className="faq-body">
              Oui, à condition de jouer sur un site détenteur d&apos;un agrément délivré par
              l&apos;Autorité Nationale des Jeux (ANJ). Le marché français est ouvert à la
              concurrence depuis 2010 pour les paris sportifs, les paris hippiques et le poker.
              Tous les opérateurs présentés sur ParisienSportif.fr sont agréés.
            </div>
          </details>

          <details className="faq-item">
            <summary>Comment savoir si un site est agréé ?</summary>
            <div className="faq-body">
              L&apos;ANJ publie la liste officielle des opérateurs agréés sur son site. Un site
              agréé se reconnaît aussi à son nom de domaine en « .fr » et aux messages de
              prévention obligatoires affichés sur ses pages. En cas de doute, abstenez-vous : un
              site non agréé ne vous offre aucune protection.
            </div>
          </details>

          <details className="faq-item">
            <summary>Les gains de paris sportifs sont-ils imposables ?</summary>
            <div className="faq-body">
              Pour un joueur occasionnel, les gains ne sont pas soumis à l&apos;impôt sur le
              revenu : la fiscalité est prélevée en amont, sur les mises, directement auprès des
              opérateurs. La situation peut différer si l&apos;administration considère
              l&apos;activité comme exercée à titre professionnel. Pour une situation
              particulière, rapprochez-vous d&apos;un conseiller fiscal.
            </div>
          </details>

          <details className="faq-item">
            <summary>Pourquoi dois-je envoyer une pièce d&apos;identité ?</summary>
            <div className="faq-body">
              La vérification d&apos;identité est une obligation réglementaire : elle sert à
              contrôler que vous êtes majeur, à lutter contre la fraude et le blanchiment, et à
              vérifier que vous n&apos;êtes pas inscrit au fichier des interdits de jeux. Tant que
              votre compte n&apos;est pas vérifié, les retraits sont bloqués. Envoyez vos
              documents dès l&apos;inscription pour gagner du temps.
            </div>
          </details>

          <details className="faq-item">
            <summary>Combien de temps prend un retrait ?</summary>
            <div className="faq-body">
              Une fois le compte vérifié, la plupart des opérateurs traitent les demandes en 24 à
              72 heures, auxquelles s&apos;ajoute le délai bancaire. Les portefeuilles
              électroniques comme PayPal sont généralement plus rapides que le virement. Les
              délais constatés lors de nos tests figurent dans chacun de nos{' '}
              <Link href="/avis">avis</Link>.
            </div>
          </details>

          <details className="faq-item">
            <summary>Qu&apos;est-ce qu&apos;un freebet exactement ?</summary>
            <div className="faq-body">
              Un freebet est un pari gratuit offert par l&apos;opérateur. Sa particularité : en
              cas de pari gagnant, vous recevez le gain <em>hors mise</em>. Un freebet de
              10&nbsp;€ joué à une cote de 3,00 rapporte donc 20&nbsp;€, et non 30&nbsp;€. Notre
              guide <Link href="/bonus-paris-sportifs">comprendre les bonus</Link> détaille tous
              les mécanismes.
            </div>
          </details>

          <details className="faq-item">
            <summary>Puis-je ouvrir un compte chez plusieurs bookmakers ?</summary>
            <div className="faq-body">
              Oui, et c&apos;est même recommandé : avoir deux ou trois comptes permet de comparer
              les cotes avant chaque pari et de profiter de plusieurs offres de bienvenue. En
              revanche, il est interdit d&apos;ouvrir plusieurs comptes chez un même opérateur.
            </div>
          </details>

          <details className="faq-item">
            <summary>Le cash-out, comment ça marche ?</summary>
            <div className="faq-body">
              Le cash-out permet de clôturer un pari avant la fin de l&apos;événement, en
              encaissant un montant proposé par l&apos;opérateur en fonction de l&apos;évolution
              du match. Il sert à sécuriser un gain partiel ou à limiter une perte. Le montant
              proposé intègre la marge du bookmaker : utilisez-le avec discernement.
            </div>
          </details>

          <details className="faq-item">
            <summary>Comment me faire aider si le jeu devient un problème ?</summary>
            <div className="faq-body">
              Appelez le 09 74 75 13 13 (appel non surtaxé, 7 j/7) ou consultez
              joueurs-info-service.fr. Tous les opérateurs agréés proposent également des limites
              de dépôt, des périodes de pause et l&apos;auto-exclusion. Vous pouvez aussi demander
              votre inscription au fichier national des interdits de jeux. Voir notre page{' '}
              <Link href="/jeu-responsable">jeu responsable</Link>.
            </div>
          </details>

          <details className="faq-item">
            <summary>Vos classements sont-ils sponsorisés ?</summary>
            <div className="faq-body">
              Certains liens de ce site peuvent générer une commission si vous ouvrez un compte,
              ce qui finance notre travail. En revanche, la grille de notation est identique pour
              tous les opérateurs et aucune marque ne peut acheter sa position. Notre méthode est
              décrite sur la page <Link href="/a-propos">à propos</Link>.
            </div>
          </details>

          <p style={{ textAlign: 'center', marginTop: 32 }}>
            <span style={{ color: 'var(--muted)' }}>Une question sans réponse ici ?</span>
            <br />
            <br />
            <Link href="/contact" className="btn btn-outline">
              Écrivez-nous
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
