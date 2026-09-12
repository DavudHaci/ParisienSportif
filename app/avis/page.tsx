import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Avis bookmakers : tous nos tests détaillés',
  description:
    "Retrouvez tous nos avis détaillés sur les sites de paris sportifs agréés en France : Betclic, Winamax, Unibet, ParionsSport, Zebet, PMU et bien d'autres.",
};

export default function AvisPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Tous nos avis sur les bookmakers agréés</h1>
        <p>
          Chaque avis repose sur un test réel : inscription, dépôt, paris et retrait. Cliquez sur
          un opérateur pour lire le détail.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-sub" style={{ marginBottom: 32 }}>
            Un avis n&apos;est jamais figé : nous le mettons à jour dès que l&apos;opérateur fait
            évoluer son offre, son application ou ses conditions de bonus. La note reflète
            l&apos;état du produit au moment de notre dernier passage.
          </p>
          <div className="card-grid">
            <div className="info-card">
              <div className="icon">🥇</div>
              <h3>Betclic — 9,6/10</h3>
              <p>
                Le leader du pari mobile en France. Application exemplaire, marchés profonds,
                retraits rapides : la référence de notre classement.
              </p>
              <Link href="/betclic" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🥈</div>
              <h3>Winamax — 9,4/10</h3>
              <p>
                Des cotes parmi les plus élevées du marché et un bonus versé en argent réel. Le
                choix des parieurs exigeants.
              </p>
              <Link href="/winamax" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🥉</div>
              <h3>Unibet — 9,1/10</h3>
              <p>
                Un catalogue de sports et de marchés impressionnant, complété par un centre de
                statistiques bien pensé.
              </p>
              <Link href="/unibet" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🎯</div>
              <h3>ParionsSport — 8,8/10</h3>
              <p>
                La force de frappe de la FDJ au service du pari en ligne : fiabilité maximale et
                promotions régulières.
              </p>
              <Link href="/parionssport" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🎁</div>
              <h3>Zebet — 8,6/10</h3>
              <p>
                L&apos;une des offres de bienvenue les plus généreuses du marché et une interface
                qui va droit au but.
              </p>
              <Link href="/zebet" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🐎</div>
              <h3>PMU Sport — 8,4/10</h3>
              <p>
                L&apos;institution du pari hippique française, avec une offre sportive sérieuse en
                complément.
              </p>
              <Link href="/pmu" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">⏱️</div>
              <h3>Netbet — 8,2/10</h3>
              <p>
                Un pionnier du marché régulé français qui reste un choix solide, porté par des
                promotions fréquentes.
              </p>
              <Link href="/netbet" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">📈</div>
              <h3>Vbet — 8,0/10</h3>
              <p>
                Une marque montante au catalogue étoffé, que l&apos;on voit désormais sur les
                maillots du football français.
              </p>
              <Link href="/vbet" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🇫🇷</div>
              <h3>France Pari — 7,8/10</h3>
              <p>
                L&apos;alternative indépendante et 100&nbsp;% française : un produit simple, sans
                esbroufe, qui fait le travail.
              </p>
              <Link href="/francepari" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
            <div className="info-card">
              <div className="icon">🏇</div>
              <h3>Genybet — 7,6/10</h3>
              <p>
                L&apos;héritage hippique du groupe Geny, enrichi d&apos;une offre de paris
                sportifs fiable pour les turfistes.
              </p>
              <Link href="/genybet" className="more">
                Lire l&apos;avis complet →
              </Link>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/comparatif" className="btn">
              Voir le classement comparé
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
