import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal>
          <span className="section-tag">About Me</span>
          <h2 className="section-title">The Mind Behind the Design</h2>
          <p className="about-p">{profile.bio1}</p>
          <p className="about-p">{profile.bio2}</p>
          <p className="about-p">{profile.bio3}</p>

          <div className="about-location pill">📍 K.R. Mangalam University</div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="stats-grid">
            {profile.stats.map((s, i) => (
              <motion.div
                className="stat-card"
                key={s.label}
                whileHover={{ y: -6, borderColor: "var(--accent)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="stat-value gradient-text">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-p {
          color: var(--text-dim);
          margin-bottom: 16px;
          font-size: 15.5px;
        }
        .about-location { margin-top: 24px; }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px 20px;
          text-align: center;
          transition: border-color 0.25s ease;
        }
        .stat-value { font-size: 30px; font-weight: 800; margin-bottom: 6px; }
        .stat-label { color: var(--text-dim); font-size: 13px; }

        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
