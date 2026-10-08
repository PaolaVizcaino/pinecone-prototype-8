import Link from "next/link";
import Icon from "./Icon";
import { appModules } from "../lib/module1";

function Glyph({ d, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export function MightyHeader() {
  return (
    <header className="mn-header">
      <Link href="/" className="mn-logo" aria-label="Pinecone by Stanford">
        <img src="/pinecone-logo.png" alt="Pinecone by Stanford" />
      </Link>
      <div className="mn-search" role="search">
        <Glyph d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4" size={20} />
        <span>Search</span>
      </div>
      <div className="mn-icons">
        <span className="mn-icon" aria-label="Featured"><Glyph d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" /></span>
        <span className="mn-icon" aria-label="Messages"><Glyph d="M4 5h16v11H8l-4 4z" /><b>16</b></span>
        <span className="mn-icon" aria-label="Notifications"><Glyph d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4" /><b>31</b></span>
        <span className="mn-icon" aria-label="Settings"><Glyph d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></span>
        <span className="mn-avatar mn-avatar--pill"><span className="mn-avatar__dot" /><Glyph d="M6 9l6 6 6-6" size={16} /></span>
        <span className="mn-avatar" />
      </div>
    </header>
  );
}

export function MightySidebar({ current }) {
  return (
    <aside className="mn-side">
      <div className="mn-side__create">+ Create</div>
      <a className="mn-side__item" href="#"><Glyph d="M3 9l9-4 9 4-9 4-9-4zm3 3v4c0 1.5 3 3 6 3s6-1.5 6-3v-4" size={18} /> Get Started</a>
      <a className="mn-side__item" href="#"><Glyph d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" size={18} /> Members</a>
      <div className="mn-side__sep" />
      <div className="mn-side__group">
        <span>Personal Finance For You</span>
        <Glyph d="M6 9l6 6 6-6" size={16} />
      </div>
      {appModules.map((m) => {
        const active = m.slug === current;
        const inner = (
          <>
            <span className="mn-side__ico"><Icon name={m.icon} size={14} /></span>
            <span className="mn-side__label">{m.number}. {m.title}</span>
          </>
        );
        return active ? (
          <Link key={m.slug} href={`/app/${m.slug}`} className="mn-side__item mn-side__item--active">{inner}</Link>
        ) : (
          <span key={m.slug} className="mn-side__item mn-side__item--static">{inner}</span>
        );
      })}
      <div className="mn-side__sep" />
      <div className="mn-side__group"><span>Pinecone Chatbot</span><Glyph d="M6 9l6 6 6-6" size={16} /></div>
      <span className="mn-side__item mn-side__item--static"><span className="mn-side__ico mn-side__ico--red"><Glyph d="M4 5h16v11H8l-4 4z" size={12} /></span><span className="mn-side__label">Ask Pinecone</span></span>
    </aside>
  );
}
