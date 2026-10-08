import Link from "next/link";
import Icon from "../../../components/Icon";
import { MightyHeader, MightySidebar } from "../../../components/Mighty";
import { module1 } from "../../../lib/module1";

export const metadata = { title: "1. Your Journey to Financial Freedom | Pinecone by Stanford" };

function Play() {
  return (
    <span className="mn-play" aria-hidden="true">
      <svg width="34" height="34" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,.85)" /><path d="M10 8l6 4-6 4z" fill="#1c1c1e" /></svg>
    </span>
  );
}

function Thumb({ p }) {
  if (p.type === "quiz") return <span className="mn-thumb mn-thumb--empty" />;
  if (!p.thumb) return <span className="mn-thumb mn-thumb--ph"><Icon name={p.type === "video" ? "play" : "lines"} size={18} /></span>;
  return (
    <span className="mn-thumb">
      <img src={p.thumb} alt="" />
      {p.type === "video" && <Play />}
    </span>
  );
}

export default function Module1() {
  const totalParts = module1.lessons.reduce((n, l) => n + l.parts.length, 0);
  const quizzes = module1.lessons.reduce((n, l) => n + l.parts.filter((p) => p.type === "quiz").length, 0);
  return (
    <div className="mn">
      <MightyHeader />
      <div className="mn-body">
        <MightySidebar current={module1.slug} />
        <main className="mn-main">
          <div className="mn-banner"><img src="/m1-banner.jpg" alt="" /></div>
          <div className="mn-space">
            <div className="mn-space__head">
              <span className="mn-space__ico"><Icon name="plane" size={26} /></span>
              <h1>{module1.number}. {module1.title} <small>· {module1.subtitle}</small></h1>
            </div>
            <nav className="mn-tabs" aria-label="Space">
              <span className="mn-tab mn-tab--active">Course</span>
              <span className="mn-tab">Community</span>
              <span className="mn-tab">Members</span>
              <span className="mn-tab">Events</span>
              <span className="mn-tab">Discovery</span>
            </nav>

            <div className="mn-course">
              <div className="mn-course__tools"><span className="mn-btn">Collapse All</span></div>
              <div className="mn-course__summary">
                <strong>{module1.title}</strong>
                <span>{totalParts} parts | {quizzes} quizzes</span>
              </div>

              {module1.lessons.map((l) => (
                <section key={l.title} className="mn-lesson">
                  <header className="mn-lesson__head">
                    <h2>{l.title}</h2>
                    <span>{l.parts.length} parts | 1 quiz <Icon name="chevron" size={16} /></span>
                  </header>
                  <ul className="mn-parts">
                    {l.parts.map((p) => (
                      <li key={p.title}>
                        {p.slug ? (
                          <Link href={`/app/financial-freedom/${p.slug}`} className="mn-part mn-part--link">
                            <Thumb p={p} /><span>{p.title}</span>
                          </Link>
                        ) : (
                          <span className="mn-part"><Thumb p={p} /><span>{p.title}</span></span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </main>
      </div>
      <div className="mn-help">Need Help?</div>
    </div>
  );
}
