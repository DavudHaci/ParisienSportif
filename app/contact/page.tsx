import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — Écrivez à la rédaction',
  description:
    "Une question, une remarque sur un avis, une erreur à signaler ? Contactez l'équipe de ParisienSportif.fr via notre formulaire.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Contacter la rédaction</h1>
        <p>
          Une erreur repérée dans un avis, une offre qui a changé, une suggestion ? Nous lisons
          tous les messages.
        </p>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="article">
            <h2>Écrivez-nous</h2>
            <p>
              Avant de nous écrire, jetez un œil à la <Link href="/faq">FAQ</Link> : la réponse à
              votre question s&apos;y trouve peut-être déjà. Pour tout le reste — signalement
              d&apos;une information périmée, demande de partenariat, question sur nos méthodes —
              utilisez le formulaire ci-dessous ou écrivez-nous à{' '}
              <strong>contact@parisiensportif.fr</strong>.
            </p>

            <div className="callout warn">
              <strong>Important :</strong> nous ne sommes pas un opérateur de jeux. Pour toute
              question concernant votre compte joueur, vos dépôts ou vos retraits, adressez-vous
              directement au service client du bookmaker concerné. Si le jeu devient un problème
              pour vous, appelez le 09 74 75 13 13.
            </div>

            <form className="contact-form" action="#" method="post">
              <div>
                <label htmlFor="name">Votre nom</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email">Votre adresse e-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="subject">Objet</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div>
                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" rows={7} required></textarea>
              </div>
              <button type="submit" className="btn">
                Envoyer le message
              </button>
            </form>

            <p style={{ marginTop: 20, fontSize: '0.85rem', color: 'var(--muted)' }}>
              Les données transmises via ce formulaire ne sont utilisées que pour répondre à votre
              demande. Consultez notre{' '}
              <Link href="/politique-confidentialite">politique de confidentialité</Link> pour en
              savoir plus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
