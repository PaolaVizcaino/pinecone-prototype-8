"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import Art from "./Art";
import { modules, topics, moduleStats } from "../lib/data";

export default function ModuleGrid() {
  const [topic, setTopic] = useState("All");
  const shown = topic === "All" ? modules : modules.filter((m) => m.topic === topic);

  return (
    <>
      <div className="chips" role="group" aria-label="Filter modules by topic">
        {topics.map((t) => (
          <button
            key={t}
            type="button"
            className="chip"
            aria-pressed={topic === t}
            onClick={() => setTopic(t)}
          >
            {t !== "All" && <Icon name={modules.find((m) => m.topic === t)?.icon} size={16} />}
            {t}
          </button>
        ))}
      </div>

      <div className="modules">
        {shown.map((m) => {
          const s = moduleStats(m);
          return (
            <Link key={m.slug} href={`/modules/${m.slug}`} className="module">
              <div className="module__art">
                <Art color={m.color} icon={m.icon} />
                <span className="module__num">MODULE {m.number}</span>
              </div>
              <div className="module__body">
                <span className="tag">{m.topic}</span>
                <h3>{m.title}</h3>
                <p>{m.blurb}</p>
                <div className="meta">
                  <span><Icon name="layers" size={15} /> {s.lessons} {s.lessons === 1 ? "lesson" : "lessons"}</span>
                  <span><Icon name="clock" size={15} /> ~{s.minutes} min</span>
                  <span><Icon name="quiz" size={15} /> {s.quizzes} {s.quizzes === 1 ? "checkpoint" : "checkpoints"}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
