import { motion } from "framer-motion";
import Reveal from "./Reveal";
import MiniTimer from "./MiniTimer";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal>
          <span className="section-tag">Projects</span>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-desc">
            Real-world UX case studies and creative projects that demonstrate my process
            from research to prototype.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <motion.div
                className="project-card"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="project-top">
                  <span className="project-icon">{p.icon}</span>
                  <span className="tag">{p.category}</span>
                </div>

                {p.isTimer && <MiniTimer />}

                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                    {p.linkLabel}
                  </a>
                  {p.secondaryLink && (
                    <a href={p.secondaryLink} target="_blank" rel="noreferrer" className="project-link">
                      {p.secondaryLabel}
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.5);
        }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .project-icon { font-size: 28px; }
        .project-title { font-size: 18px; font-weight: 700; margin-bottom: 10px; }
        .project-desc { color: var(--text-dim); font-size: 14px; margin-bottom: 16px; flex-grow: 1; }
        .project-links { display: flex; gap: 16px; flex-wrap: wrap; margin-top: auto; }
        .project-link { font-size: 13.5px; font-weight: 600; color: var(--accent); }
        .project-link:hover { text-decoration: underline; }

        @media (max-width: 980px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
