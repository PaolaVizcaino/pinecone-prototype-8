import Link from "next/link";
import { notFound } from "next/navigation";
import { IfdmHeader, IfdmSidebar, IfdmFooter } from "../../../components/Ifdm";
import Icon from "../../../components/Icon";
import { modules, getModule, moduleStats, slugify } from "../../../lib/data";

export function generateStaticParams() {
  return modules.map((m) => ({ module: m.slug }));
}

export function generateMetadata({ params }) {
  const m = getModule(params.module);
  return { title: m ? `Module ${m.number}: ${m.title} | Pinecone by Stanford` : "Module" };
}

export default function ModulePage({ params }) {
  const m = getModule(params.module);
  if (!m) notFound();
  const s = moduleStats(m);
  const next = modules.find((x) => x.number === m.number + 1);
  const prev = modules.find((x) => x.number === m.number - 1);
  let idx = 0;

  return (
    <>
      <IfdmHeader />
      <main className="ifdm__wrap hub">
        <h1 className="hub__title">Personal Finance for You</h1>
        <div className="hub__layout">
          <IfdmSidebar active="/" modules={modules} currentModule={m.slug} />
          <div className="hub__content">
        <section className="pagehead pagehead--inner">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <Link href="/">Personal Finance for You</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Module {m.number}</span>
            </nav>
            <span className="tag" style={{ marginBottom: 12 }}>{m.topic}</span>
            <h1>Module {m.number}: {m.title}</h1>
            <p>{m.blurb}</p>
            <div className="meta">
              <span><Icon name="layers" size={15} /> {s.lessons} {s.lessons === 1 ? "lesson" : "lessons"}</span>
              <span><Icon name="read" size={15} /> {s.parts} parts</span>
              <span><Icon name="quiz" size={15} /> {s.quizzes} {s.quizzes === 1 ? "checkpoint" : "checkpoints"}</span>
              <span><Icon name="clock" size={15} /> ~{s.minutes} min total</span>
            </div>
          </div>
        </section>

        <div className="toc-layout">
          <div>
            {m.lessons.map((l) => (
              <section key={l.slug} className="lesson-group" aria-labelledby={`h-${l.slug}`}>
                <div className="lesson-group__head">
                  <h2 id={`h-${l.slug}`}>{l.title}</h2>
                  <span>{l.parts.length} parts · ~{l.parts.length * 4} min</span>
                </div>
                <ol className="parts">
                  {l.parts.map((p) => {
                    idx += 1;
                    return (
                      <li key={p.title}>
                        <Link href={`/modules/${m.slug}/${l.slug}/${slugify(p.title)}`} className="part">
                          <span className="part__idx">{idx}</span>
                          <span className={`part__type part__type--${p.type}`} title={p.type}>
                            <Icon name={p.type} size={16} />
                          </span>
                          <span className="part__title">{p.title}</span>
                          <span className="part__time">{p.type === "quiz" ? "5 min" : p.type === "podcast" ? "12 min" : "4 min"}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </section>
            ))}
          </div>

          <aside className="aside">
            <div className="card">
              <h3>In this module</h3>
              <ul>
                {m.lessons.map((l) => (
                  <li key={l.slug}>{l.title.replace(/^Lesson \d+: /, "")}</li>
                ))}
              </ul>
              <Link
                className="btn btn--primary"
                href={`/modules/${m.slug}/${m.lessons[0].slug}/${slugify(m.lessons[0].parts[0].title)}`}
              >
                Start Lesson 1 <Icon name="arrow" size={18} />
              </Link>
            </div>
          </aside>
        </div>
          </div>
        </div>
      </main>
      <IfdmFooter />
    </>
  );
}
