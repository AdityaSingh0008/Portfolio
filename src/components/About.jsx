import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";
const profilePhoto = "/aditya-singh-professional.jpg";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal>
          <div className="section-header-center">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">The Mind Behind the Design</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.1}>
            <div className="about-photo-wrapper">
              <img 
                src={profilePhoto} 
                alt="Aditya Singh - Software Developer and UX/UI Designer" 
                className="about-photo"
              />
              <div className="about-photo-glow" />
            </div>
          </Reveal>

          <div className="about-content">
            <Reveal delay={0.2}>
              <p className="about-p">{profile.bio1}</p>
              <p className="about-p">{profile.bio2}</p>
              <p className="about-p">{profile.bio3}</p>
              <div className="about-location pill">📍 K.R. Mangalam University</div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="stats-grid">
                {profile.stats.map((s, i) => (
                  <motion.div
                    className="stat-card"
                    key={s.label}
                    whileHover={{ y: -6, borderColor: "var(--accent)" }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .section-header-center {
          text-align: center;
          margin-bottom: 60px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: flex-start;
        }
        .about-photo-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .about-photo {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(0,0,0,0.8);
          position: relative;
          z-index: 2;
          filter: grayscale(20%);
          transition: filter 0.3s ease;
        }
        .about-photo:hover { filter: grayscale(0%); }
        .about-photo-glow {
          position: absolute;
          width: 300px; height: 300px;
          background: var(--accent);
          filter: blur(100px);
          opacity: 0.15;
          z-index: 1;
          border-radius: 50%;
        }
        .about-p {
          color: var(--text-dim);
          margin-bottom: 16px;
          font-size: 15.5px;
          line-height: 1.7;
        }
        .about-location { 
          margin-top: 24px; 
          margin-bottom: 40px; 
          display: inline-block; 
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 20px;
          text-align: center;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.05);
        }
        .stat-value { font-size: 32px; font-weight: 800; margin-bottom: 4px; color: #ffffff; }
        .stat-label { color: #888888; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
          .about-photo { max-width: 300px; }
          .stats-grid { max-width: 400px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
