import Link from 'next/link';
import LogoIcon from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <LogoIcon size={28} />
            <span>
              Parisien<span className="accent">Sportif</span>.fr
            </span>
          </div>
          <p>
            Comparateur indépendant de sites de paris sportifs agréés en France. Nos avis sont
            rédigés par une équipe de passionnés, sur la base de tests réels.
          </p>
        </div>
        <div>
          <h4>Bookmakers</h4>
          <ul>
            <li><Link href="/betclic">Avis Betclic</Link></li>
            <li><Link href="/winamax">Avis Winamax</Link></li>
            <li><Link href="/unibet">Avis Unibet</Link></li>
            <li><Link href="/parionssport">Avis ParionsSport</Link></li>
            <li><Link href="/avis">Tous les avis</Link></li>
          </ul>
        </div>
        <div>
          <h4>Ressources</h4>
          <ul>
            <li><Link href="/guide-debutant">Guide du débutant</Link></li>
            <li><Link href="/gestion-bankroll">Gérer sa bankroll</Link></li>
            <li><Link href="/bonus-paris-sportifs">Comprendre les bonus</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4>Le site</h4>
          <ul>
            <li><Link href="/a-propos">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-confidentialite">Confidentialité</Link></li>
            <li><Link href="/jeu-responsable">Jeu responsable</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-warning">
        <strong>Jouer comporte des risques :</strong> endettement, isolement, dépendance. Pour
        être aidé, appelez le 09 74 75 13 13 (appel non surtaxé) ou consultez
        joueurs-info-service.fr. Les jeux d&apos;argent et de hasard sont interdits aux mineurs.
      </div>
      <div className="footer-bottom">
        © 2026 ParisienSportif.fr — Tous droits réservés. Ce site contient des liens vers des
        opérateurs de jeux agréés ; certains peuvent donner lieu à une rémunération.
      </div>
    </footer>
  );
}
