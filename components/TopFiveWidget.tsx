import Link from 'next/link';

export default function TopFiveWidget() {
  return (
    <div className="widget">
      <h3>Top 5 de la rédaction</h3>
      <ul>
        <li className="mini-book">
          <Link href="/betclic">Betclic</Link> <span className="mini-score">9,6</span>
        </li>
        <li className="mini-book">
          <Link href="/winamax">Winamax</Link> <span className="mini-score">9,4</span>
        </li>
        <li className="mini-book">
          <Link href="/unibet">Unibet</Link> <span className="mini-score">9,1</span>
        </li>
        <li className="mini-book">
          <Link href="/parionssport">ParionsSport</Link> <span className="mini-score">8,8</span>
        </li>
        <li className="mini-book">
          <Link href="/zebet">Zebet</Link> <span className="mini-score">8,6</span>
        </li>
      </ul>
    </div>
  );
}
