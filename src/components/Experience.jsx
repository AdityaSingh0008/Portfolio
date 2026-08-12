import Reveal from "./Reveal";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <span className="section-tag">Experience</span>
          <h2 className="section-title">Where I've Worked</h2>
          <p className="section-desc">
            Real-world design experience that shaped my UX process and thinking.
          </p>
        </Reveal>

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.15}>
              <div className="timeline-item">
                <div className="timeline-icon">{e.icon}</div>
                <div className="timeline-content">
                  <span className="timeline-period">{e.period}</span>
                  <h3 className="timeline-title">{e.title}</h3>
                  <p className="timeline-org">{e.org}</p>
                  <p className="timeline-desc">{e.desc}</p>
                  <div className="tag-row">
                    {e.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  {e.link && (
                    <a href={e.link} target="_blank" rel="noreferrer" className="timeline-link">
                      {e.linkLabel}
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .timeline-item {
          display: flex;
          gap: 22px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .timeline-item:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }
        .timeline-icon {
          font-size: 26px;
          width: 52px; height: 52px;
          flex-shrink: 0;
          border-radius: 12px;
          background: var(--accent-soft);
          display: flex; align-items: center; justify-content: center;
        }
        .timeline-period {
          font-size: 12px;
          color: var(--accent);
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .timeline-title { font-size: 20px; font-weight: 700; margin: 8px 0 4px; }
        .timeline-org { color: var(--text-dim); font-size: 14px; margin-bottom: 12px; }
        .timeline-desc { color: var(--text-dim); font-size: 14.5px; margin-bottom: 16px; }
        .tag-row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
        .tag {
          font-size: 12px;
          padding: 5px 12px;
          border-radius: 999px;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          color: var(--text-dim);
        }
        .timeline-link {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--accent);
        }
        .timeline-link:hover { text-decoration: underline; }

        @media (max-width: 600px) {
          .timeline-item { flex-direction: column; padding: 22px; }
        }
      `}</style>
    </section>
  );
}
