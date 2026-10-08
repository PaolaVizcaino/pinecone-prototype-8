import Link from "next/link";
import Icon from "../../../../components/Icon";
import { MightyHeader, MightySidebar } from "../../../../components/Mighty";
import { module1, cfoPart } from "../../../../lib/module1";

export const metadata = { title: "You Are Your Own Chief Financial Officer (CFO) | 1. Your Journey to Financial Freedom" };

export default function CfoPage() {
  return (
    <div className="mn">
      <MightyHeader />
      <div className="mn-body mn-body--dim">
        <MightySidebar current={module1.slug} />
        <main className="mn-main" aria-hidden="true" />
      </div>

      <div className="mn-modal" role="dialog" aria-labelledby="part-title">
        <div className="mn-modal__bar">
          <span className="mn-space__ico mn-space__ico--sm"><Icon name="plane" size={20} /></span>
          <div className="mn-modal__titles">
            <small>{cfoPart.lesson}</small>
            <strong>{cfoPart.title}</strong>
          </div>
          <span className="mn-avatar mn-avatar--sm" />
          <Link href="/app/financial-freedom" className="mn-modal__close" aria-label="Close">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </Link>
        </div>

        <div className="mn-modal__body">
          <nav className="mn-toc" aria-label="Parts">
            {module1.lessons.map((l, li) => (
              <div key={l.title} className="mn-toc__lesson">
                {li > 0 && <div className="mn-toc__head"><span>{l.title}</span><Icon name="chevron" size={16} /></div>}
                {l.parts.map((p) => {
                  const cur = p.slug === "cfo";
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
            <h1 id="part-title">{cfoPart.title}</h1>
            <div className="mn-host">
              <span className="mn-host__avatar"><img src="/host-pinecone.png" alt="" /></span>
              <div><small>Host</small><strong>{cfoPart.host} ▾</strong></div>
            </div>
            {cfoPart.blocks.map((b, i) => {
              if (b.type === "p") return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />;
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "video")
                return (
                  <div key={i} className="mn-video">
                    <img src={b.src} alt={b.alt} />
                    <span className="mn-video__play"><svg width="86" height="86" viewBox="0 0 24 24"><path d="M8 5l12 7-12 7z" fill="#fff" /></svg></span>
                    <span className="mn-video__dl" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4v12M6 11l6 6 6-6M4 20h16" /></svg></span>
                  </div>
                );
              if (b.type === "pollbutton") return <div key={i} className="mn-pollwrap"><img src="/cfo-poll.png" alt={b.label} className="mn-pollimg" /></div>;
              return null;
            })}
          </article>
        </div>
      </div>
    </div>
  );
}
