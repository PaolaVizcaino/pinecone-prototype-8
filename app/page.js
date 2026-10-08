import Link from "next/link";
import { IfdmHeader, IfdmSidebar, IfdmFooter } from "../components/Ifdm";
import { modules, moduleStats } from "../lib/data";

export const metadata = {
  title: "Personal Finance for You | Resource Hub | Stanford IFDM",
};

function Tag({ href, className, children }) {
  return href ? <Link href={href} className={className}>{children}</Link> : <div className={className}>{children}</div>;
}

export default function Home() {
  return (
    <>
      <IfdmHeader banner />
      <main className="ifdm__wrap hub">
        <h1 className="hub__title">Personal Finance for You</h1>

        <div className="hub__layout">
          <IfdmSidebar active="/" modules={modules} />

          <div className="hub__content">
            <p className="hub__intro">
              Build your personal finance skills with a free, self-paced course from IFDM. Five
              modules cover everything from budgeting and borrowing to investing and retirement,
              with videos, realistic scenarios, and quizzes along the way.
            </p>

            <div className="hubcards">
              {modules.map((m) => {
                const s = moduleStats(m);
                const live = m.number === 2 || m.number === 3;
                const href = m.number === 2 ? "/app/budgeting" : m.number === 3 ? "/app/saving-borrowing" : undefined;
                return (
                  <Tag key={m.slug} href={href} className={live ? "hubcard" : "hubcard hubcard--inert"}>
                    <div className="hubcard__art">
                      <div className="hubcard__lockup">
                        <span className="hubcard__num">Module {m.number}</span>
                        <span className="hubcard__name">{m.title}</span>
                      </div>
                    </div>
                    <div className="hubcard__body">
                      <p>{m.blurb}</p>
                      <span className="hubcard__meta">
                        {s.lessons} {s.lessons === 1 ? "lesson" : "lessons"} · ~{s.minutes} min
                      </span>
                    </div>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <IfdmFooter />
    </>
  );
}
