import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ParisienSportif.fr — Comparatif des sites de paris sportifs agréés en France',
  description:
    'Comparez les bookmakers agréés ANJ en France : bonus de bienvenue, cotes, applications mobiles et avis détaillés rédigés par notre équipe indépendante.',
};

const SPORTS = [
  {
    icon: '⚽',
    title: 'Paris sur le football',
    text: 'Ligue 1, Ligue des Champions, coupes du monde : le sport roi des parieurs français décrypté marché par marché.',
    href: '/paris-football',
  },
  {
    icon: '🎾',
    title: 'Paris sur le tennis',
    text: "Roland-Garros, tournois ATP et WTA : comment tirer parti d'un sport sans match nul et riche en paris en direct.",
    href: '/paris-tennis',
  },
  {
    icon: '🏀',
    title: 'Paris sur le basketball',
    text: 'NBA, Betclic Élite, EuroLeague : handicaps, totaux de points et performances individuelles expliqués simplement.',
    href: '/paris-basketball',
  },
  {
    icon: '🏉',
    title: 'Paris sur le rugby',
    text: "Top 14, Tournoi des Six Nations, Coupe du monde : les clés pour parier sur l'ovalie avec méthode.",
    href: '/paris-rugby',
  },
  {
    icon: '🐎',
    title: 'Paris hippiques',
    text: 'Trot, plat, obstacle : un univers à part avec ses propres opérateurs, ses types de paris et son vocabulaire.',
    href: '/paris-hippique',
  },
  {
    icon: '🏎️',
    title: 'Paris sur la Formule 1',
    text: 'Vainqueur du Grand Prix, podiums, duels entre pilotes : nos conseils pour parier sur la F1 tout au long de la saison.',
    href: '/paris-f1',
  },
];

const GUIDES = [
  {
    icon: '🚀',
    title: 'Guide du débutant',
    text: "Ouvrir un compte, comprendre les cotes, placer un premier pari : tout ce qu'il faut savoir avant de commencer.",
    href: '/guide-debutant',
    cta: 'Consulter le guide →',
  },
  {
    icon: '⚖️',
    title: 'Choisir son bookmaker',
    text: 'Les sept critères qui comptent réellement au moment de sélectionner un site de paris, expliqués un par un.',
    href: '/choisir-bookmaker',
    cta: 'Consulter le guide →',
  },
  {
    icon: '💰',
    title: 'Gérer sa bankroll',
    text: 'La discipline financière fait la différence entre un parieur durable et un parieur ruiné. Méthodes concrètes à l’appui.',
    href: '/gestion-bankroll',
    cta: 'Consulter le guide →',
  },
  {
    icon: '⚠️',
    title: 'Les erreurs à éviter',
    text: 'Miser avec le cœur, courir après ses pertes, ignorer la valeur : le catalogue des pièges classiques et comment y échapper.',
    href: '/erreurs-a-eviter',
    cta: 'Consulter le guide →',
  },
  {
    icon: '🎁',
    title: 'Comprendre les bonus',
    text: 'Freebets, paris remboursés, conditions de mise : apprenez à lire les offres de bienvenue comme un professionnel.',
    href: '/bonus-paris-sportifs',
    cta: 'Consulter le guide →',
  },
  {
    icon: '❓',
    title: 'Questions fréquentes',
    text: "Légalité, fiscalité, retraits, vérification d'identité : les réponses aux questions que tout parieur se pose.",
    href: '/faq',
    cta: 'Voir la FAQ →',
  },
];

const VALUES = [
  {
    icon: '🔍',
    title: 'Indépendance',
    text: "Nos notes ne s'achètent pas : la grille d'évaluation est la même pour tous les opérateurs, partenaires ou non.",
  },
  {
    icon: '🛡️',
    title: 'Légalité',
    text: "Seuls les sites détenteurs d'un agrément délivré par l'ANJ figurent dans nos classements. Aucune exception.",
  },
  {
    icon: '📝',
    title: 'Rigueur',
    text: "Chaque avis repose sur un test réel du produit, régulièrement mis à jour lorsque l'offre de l'opérateur évolue.",
  },
  {
    icon: '🤝',
    title: 'Responsabilité',
    text: 'Nous rappelons systématiquement les outils de jeu responsable et les limites à se fixer avant de miser.',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-badge">
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Drapeau français"
          >
            <rect x="0" y="0" width="22" height="15" rx="2" fill="#ffffff" />
            <path d="M0 2 a2 2 0 0 1 2 -2 H7.33 V15 H2 a2 2 0 0 1 -2 -2 Z" fill="#0055A4" />
            <path d="M14.67 0 H20 a2 2 0 0 1 2 2 V13 a2 2 0 0 1 -2 2 H14.67 Z" fill="#EF4135" />
          </svg>
          <span>100&nbsp;% de sites agréés ANJ en France</span>
        </div>
        <h1>Trouvez le site de paris sportifs qui vous correspond vraiment</h1>
        <p>
          Notre équipe teste et note les bookmakers détenteurs d&apos;un agrément en France.
          Bonus, cotes, applications, service client : tout est passé au crible pour que vous
          n&apos;ayez plus qu&apos;à choisir.
        </p>
        <Link href="/comparatif" className="btn">
          Voir le comparatif complet
        </Link>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Comment nous vous aidons à choisir</h2>
          <p className="section-sub">
            Un processus en trois étapes, identique pour chaque opérateur évalué sur ce site.
          </p>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Nous testons</h3>
              <p>
                Inscription réelle, dépôt, prise de paris et demande de retrait : chaque
                bookmaker est essayé dans les conditions d&apos;un joueur ordinaire.
              </p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Nous comparons</h3>
              <p>
                Une grille de notation unique — offre de bienvenue, profondeur des cotes,
                ergonomie mobile, rapidité des paiements et qualité du support.
              </p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Vous décidez</h3>
              <p>
                Nos classements et avis détaillés vous donnent une vision claire du marché pour
                ouvrir un compte en toute connaissance de cause.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="classement">
        <div className="container">
          <h2 className="section-title">Le podium de la rédaction</h2>
          <p className="section-sub">
            Nos trois opérateurs favoris du moment, sélectionnés parmi les sites agréés par
            l&apos;Autorité Nationale des Jeux (ANJ).
          </p>
          <div className="ranking">
            <div className="book-card top">
              <div className="rank-num">1</div>
              <div>
                <div className="book-name">
                  Betclic<small>Agréé ANJ — paris sportifs &amp; hippiques</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> de premier pari remboursé en freebets si
                votre mise est perdante.
              </div>
              <div className="book-score">
                <span className="score-badge">9,6/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.betclic.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/betclic" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">2</div>
              <div>
                <div className="book-name">
                  Winamax<small>Agréé ANJ — paris sportifs &amp; poker</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> remboursés sur votre premier pari,
                crédités en argent réel.
              </div>
              <div className="book-score">
                <span className="score-badge">9,4/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.winamax.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/winamax" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">3</div>
              <div>
                <div className="book-name">
                  Unibet<small>Agréé ANJ — paris sportifs &amp; poker</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> de paris gratuits offerts à l&apos;issue
                de votre premier pari.
              </div>
              <div className="book-score">
                <span className="score-badge">9,1/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.unibet.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/unibet" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}>
            <Link href="/comparatif" className="btn btn-outline">
              Découvrir les 10 bookmakers classés
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Parier sport par sport</h2>
          <p className="section-sub">
            Chaque discipline a ses spécificités : marchés disponibles, types de cotes,
            stratégies. Retrouvez nos pages dédiées.
          </p>
          <div className="card-grid">
            {SPORTS.map((s) => (
              <div className="info-card" key={s.href}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href={s.href} className="more">
                  Lire le dossier →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2 className="section-title">Nos engagements</h2>
          <p className="section-sub">Quatre principes guident chacune de nos publications.</p>
          <div className="values">
            {VALUES.map((v) => (
              <div className="value-item" key={v.title}>
                <div className="icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Bien débuter dans les paris sportifs</h2>
          <p className="section-sub">
            Nos guides pratiques pour progresser, du premier dépôt à la gestion de votre capital.
          </p>
          <div className="card-grid">
            {GUIDES.map((g) => (
              <div className="info-card" key={g.href}>
                <div className="icon">{g.icon}</div>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
                <Link href={g.href} className="more">
                  {g.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <h2>Prêt à comparer les meilleures offres ?</h2>
        <p>
          Consultez notre classement complet des bookmakers agréés en France, mis à jour chaque
          mois.
        </p>
        <Link href="/comparatif" className="btn">
          Accéder au comparatif
        </Link>
      </section>
    </main>
  );
}
