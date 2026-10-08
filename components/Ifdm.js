import Link from "next/link";

const IFDM = "https://ifdm.stanford.edu";

const primaryNav = [
  ["Home", `${IFDM}/`],
  ["About", `${IFDM}/about`, true],
  ["Research", `${IFDM}/research`, true],
  ["Teaching", `${IFDM}/teaching`],
  ["Policy & Programs", `${IFDM}/policy-programs`],
  ["Resource Hub", "/", true, true],
  ["Events", `${IFDM}/events`, true],
  ["News", `${IFDM}/news`, true],
];

export const hubNav = [
  { label: "Personal Finance for You", href: "/", indent: true },
  { label: "The Big Three", href: `${IFDM}/resourcehub/big-three`, caret: true },
  { label: "Financial Literacy Data", href: `${IFDM}/resourcehub/financial-literacy-data`, indent: true },
  { label: "Financial Checkup", href: `${IFDM}/resourcehub/financial-checkup`, indent: true },
  { label: "Calculators", href: `${IFDM}/resourcehub/calculators`, caret: true },
  { label: "Financial Statements", href: `${IFDM}/resourcehub/financial-statements`, indent: true },
  { label: "Faculty Insights", href: `${IFDM}/resourcehub/faculty-insights`, indent: true },
];

function Caret() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IfdmHeader({ banner = false }) {
  return (
    <header className="ifdm">
      <div className="ifdm__topbar">
        <div className="ifdm__wrap"><a className="inert">Stanford University</a></div>
      </div>
      <div className="ifdm__wrap ifdm__masthead">
        <a className="ifdm__lockup inert" aria-label="Stanford Initiative for Financial Decision-Making">
          <span className="ifdm__stanford">Stanford</span>
          <span className="ifdm__unit">Initiative for Financial<br />Decision-Making</span>
        </a>
        <div className="ifdm__search" role="search">
          <input type="search" name="q" placeholder="Search this site" aria-label="Search this site" />
          <span aria-hidden="true" className="ifdm__search-ico">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
          </span>
        </div>
      </div>
      <nav className="ifdm__wrap ifdm__nav" aria-label="Main">
        {primaryNav.map(([label, href, caret, current]) => (
          <a key={label} href={current ? href : undefined} aria-current={current ? "page" : undefined} className={current ? undefined : "inert"}>
            {label}{caret && <><span className="ifdm__sep" aria-hidden="true" /><Caret /></>}
          </a>
        ))}
      </nav>
      {banner && (
        <div className="ifdm__banner" role="img" aria-label="Rows of green paper booklets">
          <img src="/hub-banner.jpg" alt="" />
        </div>
      )}
    </header>
  );
}

export function IfdmSidebar({ active = "/", modules = [], currentModule }) {
  return (
    <nav className="hubnav" aria-label="Resource Hub">
      <ul>
        {hubNav.map((item) => {
          const isActive = item.href === active;
          return (
            <li key={item.label} className={item.indent ? "hubnav__indent" : ""}>
              <a href={item.href === "/" ? item.href : undefined} aria-current={isActive ? "page" : undefined} className={item.href === "/" ? undefined : "inert"}>
                {item.label}
                {item.caret && <Caret />}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function IfdmFooter() {
  return (
    <footer className="ifdm-footer">
      <div className="ifdm__wrap ifdm-footer__inner">
        <div>
          <div className="ifdm__lockup ifdm__lockup--light">
            <span className="ifdm__stanford">Stanford</span>
            <span className="ifdm__unit">Initiative for Financial<br />Decision-Making</span>
          </div>
          <p>Content is educational and does not constitute financial, legal, or tax advice.</p>
        </div>
        <p className="ifdm-footer__note">Prototype for research. Not a live Stanford page.</p>
      </div>
    </footer>
  );
}
