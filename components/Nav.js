import Link from "next/link";
import Icon from "./Icon";

export default function Nav({ current = "learn", home = "/" }) {
  const links = [
    ["Video Portal", "#"],
    ["Podcast", "#"],
    ["Calculators", "#"],
    ["Resources", "#"],
    ["Personal Finance", home],
  ];
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href={home} className="nav__brand" aria-label="Pinecone by Stanford, home">
          <Icon name="pinecone" size={30} stroke={1.6} />
          <span>
            PINECONE
            <small>BY STANFORD</small>
          </span>
        </Link>
        <nav className="nav__links" aria-label="Site">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              aria-current={label === "Personal Finance" && current === "learn" ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="btn btn--light btn--sm" href="https://pinecone.mn.co" target="_blank" rel="noreferrer">
          Open the app
        </a>
      </div>
    </header>
  );
}
