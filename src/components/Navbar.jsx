import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container navbar-inner">
        <a href="#" className="logo">
          {profile.name}
        </a>

        <nav className="nav-links desktop-only">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary desktop-only nav-cta">
          Let's Work Together
        </a>

        <button
          className="menu-toggle mobile-only"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={open ? "bar bar1 open" : "bar bar1"} />
          <span className={open ? "bar bar2 open" : "bar bar2"} />
          <span className={open ? "bar bar3 open" : "bar bar3"} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Let's Work Together
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 18px;
          padding-bottom: 18px;
        }
        .logo {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.3px;
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-links a {
          font-size: 14px;
          color: var(--text-dim);
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-links a::after {
          content: '';
          position: absolute;
          left: 0; bottom: -6px;
          width: 0; height: 1.5px;
          background: var(--accent);
          transition: width 0.25s ease;
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-cta { padding: 10px 22px; font-size: 14px; }
        .mobile-only { display: none; }
        .menu-toggle {
          width: 32px; height: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .bar { width: 100%; height: 2px; background: var(--text); transition: all 0.3s ease; }
        .bar1.open { transform: translateY(11px) rotate(45deg); }
        .bar2.open { opacity: 0; }
        .bar3.open { transform: translateY(-11px) rotate(-45deg); }
        .mobile-menu {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 24px 24px;
          background: rgba(10,10,15,0.95);
          backdrop-filter: blur(14px);
        }
        .mobile-menu a { font-size: 15px; font-weight: 500; }
        .mobile-menu .btn { width: fit-content; margin-top: 8px; }

        @media (max-width: 860px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
        }
      `}</style>
    </motion.header>
  );
}
