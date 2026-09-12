import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Comparatif 2026 des sites de paris sportifs agréés en France',
  description:
    'Notre classement complet des 10 meilleurs bookmakers agréés ANJ : notes, offres de bienvenue et points forts de chaque opérateur, mis à jour régulièrement.',
};

export default function ComparatifPage() {
  return (
    <main>
      <div className="page-head">
        <h1>Le classement complet des bookmakers agréés en France</h1>
        <p>
          Dix opérateurs testés selon la même grille : bonus, cotes, application, paiements et
          service client. Voici le verdict de la rédaction.
        </p>
      </div>

      <section className="section">
        <div className="container">
          <div className="ranking">
            <div className="book-card top">
              <div className="rank-num">1</div>
              <div>
                <div className="book-name">
                  Betclic<small>Paris sportifs &amp; hippiques</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> de premier pari remboursé en freebets.
                L&apos;application mobile de référence.
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
                  Winamax<small>Paris sportifs &amp; poker</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> remboursés en argent réel. Des cotes
                régulièrement au-dessus du marché.
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
                  Unibet<small>Paris sportifs &amp; poker</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> de paris gratuits. Un catalogue de marchés
                parmi les plus fournis.
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

            <div className="book-card">
              <div className="rank-num">4</div>
              <div>
                <div className="book-name">
                  ParionsSport<small>En Ligne — FDJ</small>
                </div>
              </div>
              <div className="book-offer">
                Environ <strong>90&nbsp;€</strong> offerts aux nouveaux joueurs. La solidité
                d&apos;une marque que tout le monde connaît.
              </div>
              <div className="book-score">
                <span className="score-badge">8,8/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://enligne.parionssport.fdj.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/parionssport" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">5</div>
              <div>
                <div className="book-name">
                  Zebet<small>Paris sportifs</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>150&nbsp;€</strong> de bonus de bienvenue, l&apos;une des
                offres les plus généreuses du marché.
              </div>
              <div className="book-score">
                <span className="score-badge">8,6/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.zebet.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/zebet" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">6</div>
              <div>
                <div className="book-name">
                  PMU Sport<small>Paris sportifs &amp; hippiques</small>
                </div>
              </div>
              <div className="book-offer">
                Jusqu&apos;à <strong>100&nbsp;€</strong> offerts. L&apos;acteur historique du pari
                hippique, solide aussi sur le sport.
              </div>
              <div className="book-score">
                <span className="score-badge">8,4/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.pmu.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/pmu" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">7</div>
              <div>
                <div className="book-name">
                  Netbet<small>Paris sportifs</small>
                </div>
              </div>
              <div className="book-offer">
                Offre de bienvenue compétitive et promotions régulières pour un pionnier du marché
                français.
              </div>
              <div className="book-score">
                <span className="score-badge">8,2/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.netbet.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/netbet" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">8</div>
              <div>
                <div className="book-name">
                  Vbet<small>Paris sportifs</small>
                </div>
              </div>
              <div className="book-offer">
                Un catalogue de sports étoffé et une marque montante, visible sur les maillots de
                clubs français.
              </div>
              <div className="book-score">
                <span className="score-badge">8,0/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.vbet.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/vbet" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">9</div>
              <div>
                <div className="book-name">
                  France Pari<small>Paris sportifs</small>
                </div>
              </div>
              <div className="book-offer">
                Le bookmaker 100&nbsp;% français, simple et sans fioritures, pour qui privilégie un
                acteur indépendant.
              </div>
              <div className="book-score">
                <span className="score-badge">7,8/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.france-pari.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/francepari" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>

            <div className="book-card">
              <div className="rank-num">10</div>
              <div>
                <div className="book-name">
                  Genybet<small>Paris sportifs &amp; hippiques</small>
                </div>
              </div>
              <div className="book-offer">
                L&apos;ADN hippique du groupe Geny, complété par une offre sportive fiable pour les
                turfistes curieux.
              </div>
              <div className="book-score">
                <span className="score-badge">7,6/10</span>
              </div>
              <div className="book-actions">
                <a
                  href="https://www.genybet.fr"
                  className="btn btn-sm"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  Visiter le site
                </a>
                <Link href="/genybet" className="link-review">
                  Lire notre avis
                </Link>
              </div>
            </div>
          </div>

          <div className="callout" style={{ marginTop: 32 }}>
            <strong>Comment lisons-nous le marché ?</strong> Chaque opérateur est noté sur cinq
            familles de critères : offre de bienvenue (20&nbsp;%), niveau des cotes (25&nbsp;%),
            profondeur des marchés (20&nbsp;%), expérience mobile (20&nbsp;%) et paiements /
            service client (15&nbsp;%). Les montants d&apos;offres indiqués sont donnés à titre
            indicatif et peuvent évoluer : vérifiez toujours les conditions sur le site de
            l&apos;opérateur. Notre méthode complète est décrite sur la page{' '}
            <Link href="/a-propos">à propos</Link>.
          </div>

          <div className="callout warn">
            <strong>Rappel :</strong> tous les sites listés ici sont agréés par l&apos;ANJ. Ne
            jouez jamais sur un site non agréé et ne misez que ce que vous pouvez vous permettre de
            perdre.
          </div>
        </div>
      </section>
    </main>
  );
}
