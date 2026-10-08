import Link from "next/link";
import { notFound } from "next/navigation";
import { IfdmHeader, IfdmFooter } from "../../../../../components/Ifdm";
import Icon from "../../../../../components/Icon";
import Art from "../../../../../components/Art";
import { modules, getModule, getLesson, slugify, sampleBody } from "../../../../../lib/data";

export function generateStaticParams() {
  const out = [];
  for (const m of modules)
    for (const l of m.lessons)
      for (const p of l.parts) out.push({ module: m.slug, lesson: l.slug, part: slugify(p.title) });
  return out;
}

export function generateMetadata({ params }) {
  const l = getLesson(params.module, params.lesson);
  const p = l?.parts.find((x) => slugify(x.title) === params.part);
  return { title: p ? `${p.title} | Pinecone by Stanford` : "Lesson" };
}

const typeLabel = { read: "Read", video: "Video", podcast: "Podcast", quiz: "Checkpoint" };

function genericBody(p, m) {
  if (p.type === "quiz")
    return [
      { type: "p", html: `A short checkpoint on what you just covered in <strong>${m.title}</strong>. Five questions, no grade, instant feedback.` },
      { type: "callout", title: "Prototype note", html: "The interactive quiz lives in the Pinecone app. This page shows where it sits in the flow." },
    ];
  if (p.type === "video" || p.type === "podcast")
    return [
      { type: "figure", caption: `${typeLabel[p.type]}: ${p.title}` },
      { type: "p", html: "Placeholder for the embedded media. In the live site this is the same asset used in the app." },
    ];
  return [
    { type: "p", html: `Placeholder body for <strong>${p.title}</strong>. In the prototype, the &ldquo;What is a Mutual Fund?&rdquo; part carries real content so you can test the reading experience.` },
    { type: "h2", text: "Key idea" },
    { type: "p", html: "Each part is a single concept, written in plain language, with one example from Alex, Grace, Sam, or Jasmine." },
    { type: "callout", title: "Try it", html: "Every few parts there is a small exercise that applies the idea to your own numbers." },
  ];
}

function Block({ b, m }) {
  if (b.type === "p") return <p dangerouslySetInnerHTML={{ __html: b.html }} />;
  if (b.type === "h2") return <h2>{b.text}</h2>;
  if (b.type === "ul") return <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
  if (b.type === "figure")
    return (
      <figure>
        <Art color={m.color} icon={m.icon} className="figure-art" />
        <figcaption>{b.caption}</figcaption>
      </figure>
    );
  if (b.type === "callout")
    return (
      <div className="callout">
        <strong>{b.title}</strong>
        <p dangerouslySetInnerHTML={{ __html: b.html }} />
      </div>
    );
  return null;
}

export default function PartPage({ params }) {
  const m = getModule(params.module);
  const l = getLesson(params.module, params.lesson);
  if (!m || !l) notFound();
  const i = l.parts.findIndex((x) => slugify(x.title) === params.part);
  if (i < 0) notFound();
  const p = l.parts[i];

  // Flatten module parts for prev/next across lessons
  const flat = [];
  for (const ls of m.lessons) for (const pt of ls.parts) flat.push({ l: ls, p: pt });
  const fi = flat.findIndex((x) => x.l === l && x.p === p);
  const prev = flat[fi - 1];
  const next = flat[fi + 1];
  const href = (x) => `/modules/${m.slug}/${x.l.slug}/${slugify(x.p.title)}`;
  const body = sampleBody[params.part] || genericBody(p, m);

  return (
    <>
      <IfdmHeader />
      <main>
        <section className="pagehead" style={{ padding: "22px 0" }}>
          <div className="container">
            <nav className="crumbs" style={{ margin: 0 }} aria-label="Breadcrumb">
              <Link href="/">Personal Finance for You</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/modules/${m.slug}`}>Module {m.number}: {m.title}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{l.title}</span>
            </nav>
          </div>
        </section>

        <div className="container lesson-layout">
          <nav className="lesson-nav" aria-label="Lesson contents">
            {m.lessons.map((ls) => (
              <div key={ls.slug}>
                <h2>{ls.title}</h2>
                {ls.parts.map((pt) => (
                  <Link
                    key={pt.title}
                    href={`/modules/${m.slug}/${ls.slug}/${slugify(pt.title)}`}
                    aria-current={pt === p ? "page" : undefined}
                  >
                    {pt.title}
                  </Link>
                ))}
              </div>
            ))}
          </nav>

          <article className="article">
            <div className="article__kicker">{l.title}</div>
            <h1>{p.title}</h1>
            <div className="article__meta">
              <span><Icon name={p.type} size={14} /> {typeLabel[p.type]}</span>
              <span><Icon name="clock" size={14} /> {p.type === "podcast" ? "12" : p.type === "quiz" ? "5" : "4"} min</span>
              <span>Part {fi + 1} of {flat.length}</span>
            </div>
            {body.map((b, k) => <Block key={k} b={b} m={m} />)}

            <nav className="pager" aria-label="Previous and next">
              {prev && (
                <Link href={href(prev)}>
                  <small>Previous</small>
                  {prev.p.title}
                </Link>
              )}
              {next ? (
                <Link href={href(next)} className="right">
                  <small>Next</small>
                  {next.p.title}
                </Link>
              ) : (
                <Link href={`/modules/${m.slug}`} className="right">
                  <small>Done</small>
                  Back to Module {m.number}
                </Link>
              )}
            </nav>
          </article>
        </div>
      </main>
      <IfdmFooter />
    </>
  );
}
