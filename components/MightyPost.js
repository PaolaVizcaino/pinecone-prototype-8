import Link from "next/link";
import Icon from "./Icon";
import { MightyHeader, MightySidebar } from "./Mighty";

// A course part opened as a modal over the module page, as Mighty Networks does it.
export default function MightyPost({ mod, part, icon, closeHref }) {
  return (
    <div className="mn">
      <MightyHeader />
      <div className="mn-body mn-body--dim">
        <MightySidebar current={mod.slug} />
        <main className="mn-main" aria-hidden="true" />
      </div>

      <div className="mn-modal" role="dialog" aria-labelledby="part-title">
        <div className="mn-modal__bar">
          <span className="mn-space__ico mn-space__ico--sm"><Icon name={icon} size={20} /></span>
          <div className="mn-modal__titles">
            <small>{part.lesson}</small>
            <strong>{part.title}</strong>
          </div>
          <span className="mn-avatar mn-avatar--sm" />
          <Link href={closeHref} className="mn-modal__close" aria-label="Close">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </Link>
        </div>

        <div className="mn-modal__body">
          <nav className="mn-toc" aria-label="Parts">
            {mod.lessons.map((l) => (
              <div key={l.title} className="mn-toc__lesson">
                <div className="mn-toc__head"><span>{l.title}</span><Icon name="chevron" size={16} /></div>
                {!l.collapsed && l.parts.map((p) => {
                  const cur = p.slug === part.slug;
                  const glyph = p.type === "video" ? "play" : p.type === "quiz" ? "trophy" : "lines";
                  return (
                    <span key={p.title} className={`mn-toc__part${cur ? " mn-toc__part--cur" : ""}`}>
                      <Icon name={glyph} size={16} /> {p.title}
                    </span>
                  );
                })}
              </div>
            ))}
          </nav>

          <article className="mn-post">
            <h1 id="part-title">{part.title}</h1>
            <div className="mn-host">
              <span className="mn-host__avatar"><img src="/host-pinecone.png" alt="" /></span>
              <div><small>Host</small><strong>{part.host} ▾</strong></div>
            </div>
            {part.blocks.map((b, i) => {
              if (b.type === "p") return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "ol" || b.type === "ul") {
                const L = b.type;
                return <L key={i} className="mn-list">{b.items.map(([t, d]) => <li key={d}>{t && <strong>{t}</strong>} {d}</li>)}</L>;
              }
              if (b.type === "file")
                return (
                  <div key={i} className="mn-file" aria-disabled="true">
                    <span className="mn-file__ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg></span>
                    <span>{b.name}</span>
                  </div>
                );
              if (b.type === "video")
                return (
                  <div key={i} className="mn-video mn-video--real">
                    <video controls preload="metadata" poster={b.poster} aria-label={b.alt}>
                      <source src={b.src} type="video/mp4" />
                    </video>
                  </div>
                );
              if (b.type === "poll") return <div key={i} className="mn-pollwrap"><Link href={b.href} className="mn-pollbtn" aria-label={b.question}><img src={b.banner} alt="" className="mn-pollimg" /></Link></div>;
              if (b.type === "quote") return <div key={i} className="mn-quote" dangerouslySetInnerHTML={{ __html: b.html }} />;
              if (b.type === "table")
                return (
                  <div key={i} className="mn-table" role="table" aria-label={b.caption}>
                    {b.head && (
                      <div className="mn-table__row mn-table__row--head" role="row">
                        {b.head.map((h) => <span key={h} role="columnheader">{h}</span>)}
                      </div>
                    )}
                    {b.rows.map((r, ri) => {
                      const tone = r[r.length - 1];
                      const cells = b.head ? r.slice(0, -1) : r.slice(0, -1);
                      return (
                        <div key={ri} className="mn-table__row" role="row">
                          <span className={`mn-table__badge mn-table__badge--${tone}`} role="cell">{cells[0]}</span>
                          {cells.slice(1).map((c, ci) => <span key={ci} role="cell">{c}</span>)}
                        </div>
                      );
                    })}
                  </div>
                );
              if (b.type === "image" && b.src) return <div key={i} className={`mn-img mn-img--${b.fit || "photo"}`}><img src={b.src} alt={b.alt || ""} /></div>;
              if (b.type === "image") return <div key={i} className="mn-imgph" role="img" aria-label={b.alt}><Icon name="read" size={22} /><span>{b.label}</span></div>;
              if (b.type === "prompt") return <div key={i} className="mn-prompt"><span className="mn-prompt__ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.6 8.6 0 0 1-3.1-.6L3 21l1.7-5.1a8.5 8.5 0 0 1-.7-3.4A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5z" /></svg></span><strong>{b.text}</strong></div>;
              return null;
            })}

            <div className="mn-pn">
              <span className="mn-pn__item mn-pn__item--static"><small>Previous</small><strong>{part.prev.title}</strong></span>
              {part.next && part.next.href && (
                <Link href={part.next.href} className="mn-pn__item mn-pn__item--next"><small>Next</small><strong>{part.next.title}</strong></Link>
              )}
              {part.next && !part.next.href && (
                <span className="mn-pn__item mn-pn__item--next mn-pn__item--static"><small>Next</small><strong>{part.next.title}</strong></span>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
