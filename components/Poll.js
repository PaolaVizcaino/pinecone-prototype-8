"use client";
import { useState } from "react";

// Mighty-style poll card: teal, options as rows, results fill in after you vote.
export default function Poll({ question, options, results, voters = [] }) {
  const [picked, setPicked] = useState(null);
  const done = picked !== null;
  const base = 4;
  return (
    <div className="mn-pollcard" role="group" aria-label="Poll">
      <p className="mn-pollcard__q">{question}</p>
      <div className="mn-pollcard__opts">
        {options.map((o, i) => {
          // add the viewer's vote to the sample results
          const counts = results.map((r, k) => Math.round(r * base / 100) + (k === picked ? 1 : 0));
          const total = counts.reduce((a, c) => a + c, 0) || 1;
          const pct = Math.round(counts[i] / total * 100);
          const avs = [...(voters[i] || [])];
          if (picked === i) avs.push("/av-you.png");
          return (
            <button key={o} type="button" className={`mn-pollcard__opt${done ? " mn-pollcard__opt--done" : ""}${picked === i ? " mn-pollcard__opt--on" : ""}`} onClick={() => !done && setPicked(i)} aria-pressed={picked === i}>
              {done && <i style={{ width: `${pct}%` }} />}
              <span className="mn-pollcard__label">{o}</span>
              {done && (
                <span className="mn-pollcard__res">
                  <span className="mn-pollcard__avs">{avs.slice(0, 3).map((a, k) => <img key={k} src={a} alt="" />)}</span>
                  <b>{pct}%</b>
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="mn-pollcard__foot">
        <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" /><circle cx="12" cy="12" r="3" /></svg> Responses are public.</span>
        <span>{done ? "You, Susan and 3 others voted" : `${base} votes`}</span>
      </div>
    </div>
  );
}
