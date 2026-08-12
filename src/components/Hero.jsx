import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import profilePhoto from "../assets/aditya_dark.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="pill hero-pill"
          >
            <span className="dot" /> Available for Opportunities
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            Designing Meaningful
            <br />
            <span className="gradient-text">Digital Experiences</span>
          </motion.h1>

          <motion.p
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <strong>{profile.name}</strong> — {profile.role}
          </motion.p>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I craft user-centered designs backed by research, empathy, and systematic
            thinking. From heuristic evaluations to high-fidelity Figma prototypes —
            I bridge the gap between user needs and business goals.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work ↓</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div
            className="hero-tags"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <span className="pill">🎨 UX Designer</span>
            <span className="pill">📐 Figma Pro</span>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-col"
          initial={{ opacity: 0, x: 30, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src={profilePhoto} 
            alt="Aditya Singh" 
            className="hero-right-photo"
          />
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 1.8 } }}
      >
        ↓
      </motion.div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          overflow: hidden;
        }
        .hero-bg { position: absolute; inset: 0; z-index: 0; }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
        }
        .blob1 {
          width: 480px; height: 480px;
          background: var(--accent);
          top: -120px; right: -100px;
          animation: float1 14s ease-in-out infinite;
        }
        .blob2 {
          width: 420px; height: 420px;
          background: var(--accent2);
          bottom: -140px; left: -100px;
          animation: float2 16s ease-in-out infinite;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-40px, 40px) scale(1.1); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px, -30px) scale(1.15); }
        }
        .grid-overlay {
          position: absolute; inset: 0;
          background-image: linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.15;
          mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          max-width: 1100px;
          width: 100%;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .hero-image-col {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }
        .hero-right-photo {
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1 / 1;
          border-radius: 50%;
          object-fit: cover;
          border: 6px solid var(--border-light);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-right-photo:hover {
          transform: scale(1.03);
          box-shadow: 0 30px 80px rgba(0,0,0,0.5);
        }
        .hero-pill { margin-bottom: 28px; }
        .hero-title {
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -1.5px;
          margin-bottom: 22px;
        }
        .hero-role {
          font-size: 19px;
          color: var(--text-dim);
          margin-bottom: 18px;
        }
        .hero-role strong { color: var(--text); }
        .hero-desc {
          font-size: 16px;
          color: var(--text-dim);
          max-width: 560px;
          margin-bottom: 36px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-tags { display: flex; gap: 12px; flex-wrap: wrap; }
        .scroll-indicator {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--text-dim);
          font-size: 20px;
          z-index: 1;
        }
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-image-col {
            justify-content: center;
            order: -1;
          }
          .hero-right-photo {
            max-width: 280px;
            transform: none;
          }
          .hero-right-photo:hover {
            transform: scale(1.02);
          }
        }
        @media (max-width: 600px) {
          .hero { padding-top: 120px; }
        }
      `}</style>
    </section>
  );
}
