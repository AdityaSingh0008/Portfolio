import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal>
          <span className="section-tag">Skills</span>
          <h2 className="section-title">Tools & Technologies</h2>
          <p className="section-desc">
            A curated stack of design and development skills I bring to every project.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <motion.div
              className="skill-card"
              key={s.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .skill-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: default;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .skill-card:hover {
          border-color: var(--accent);
          box-shadow: 0 10px 26px -12px rgba(212, 175, 55, 0.4);
        }
        .skill-icon { font-size: 26px; }
        .skill-label { font-size: 13px; color: var(--text-dim); font-weight: 500; }

        @media (max-width: 900px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
