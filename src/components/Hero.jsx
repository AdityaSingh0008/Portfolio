import { motion } from "framer-motion";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <motion.div
          className="hero-top-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="dot" /> AVAILABLE FOR WORK
          <div className="location">GURUGRAM, INDIA</div>
        </motion.div>

        <div className="hero-content">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 40 }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
            transition={{ 
              duration: 1.4, 
              ease: [0.2, 0.9, 0.3, 1.1] // Custom spring-like easing for a smooth premium pop
            }}
          >
            ADITYA
            <span className="hero-title-stroke">SINGH</span>
          </motion.h1>

          <motion.div
            className="hero-roles"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            SOFTWARE DEVELOPER & UX/UI DESIGNER <span className="bullet">|</span> B.TECH CSE <span className="bullet">|</span> K.R. MANGALAM UNIVERSITY
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#projects" className="btn-explore">EXPLORE PROJECTS</a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-inner {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 60px;
        }
        .hero-top-left {
          position: absolute;
          left: 24px;
          bottom: -100px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #ffffff;
          text-transform: uppercase;
        }
        .dot {
          display: inline-block;
          width: 8px; height: 8px;
          background: #22c55e;
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 10px #22c55e;
        }
        .location {
          margin-top: 6px;
          color: #888888;
          padding-left: 16px;
        }
        .hero-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 10;
        }
        .hero-title {
          font-size: clamp(60px, 12vw, 160px);
          font-weight: 900;
          line-height: 0.85;
          letter-spacing: -2px;
          text-transform: uppercase;
          position: relative;
          display: flex;
          flex-direction: column;
          margin-bottom: 40px;
        }
        .hero-title-stroke {
          font-size: clamp(70px, 14vw, 180px);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.4);
          margin-top: -0.2em;
          z-index: -1;
        }
        .hero-roles {
          font-size: clamp(10px, 1.2vw, 13px);
          letter-spacing: 4px;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 50px;
        }
        .bullet {
          color: #444444;
          margin: 0 10px;
        }
        .btn-explore {
          display: inline-block;
          padding: 14px 32px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 999px;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        .btn-explore:hover {
          border-color: #ffffff;
          background: #ffffff;
          color: #000000;
        }

        @media (max-width: 900px) {
          .hero-top-left {
            position: relative;
            bottom: 0;
            left: 0;
            margin-top: 60px;
            text-align: center;
            order: 2;
          }
          .location { padding-left: 0; }
          .hero-roles {
            letter-spacing: 2px;
            line-height: 1.8;
            max-width: 300px;
          }
          .bullet { display: none; }
        }
      `}</style>
    </section>
  );
}
