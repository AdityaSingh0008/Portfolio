import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Update active nav based on scroll position
      const sections = ['hero', ...navLinks.map(l => l.id)];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section === 'hero' ? 'home' : section);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="navbar-wrapper">
      <motion.header
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="navbar-inner">
          <a href="#" className="logo">
            <span className="logo-as">AS</span>
            <span className="logo-dot">.</span>
            <span className="logo-dev">DEV</span>
          </a>

          <nav className="nav-links desktop-only">
            <a 
              href="#" 
              className={active === 'home' ? 'active' : ''}
              onClick={() => setActive('home')}
            >
              HOME
            </a>
            {navLinks.map((l) => (
              <a 
                key={l.id} 
                href={`#${l.id}`}
                className={active === l.id ? 'active' : ''}
                onClick={() => setActive(l.id)}
              >
                {l.label.toUpperCase()}
              </a>
            ))}
          </nav>

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
              <a href="#" onClick={() => { setOpen(false); setActive('home'); }}>HOME</a>
              {navLinks.map((l) => (
                <a key={l.id} href={`#${l.id}`} onClick={() => { setOpen(false); setActive(l.id); }}>
                  {l.label.toUpperCase()}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 24px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 100;
          padding: 0 24px;
        }
        .navbar {
          background: rgba(15, 15, 15, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(16px);
          border-radius: 999px;
          width: 100%;
          max-width: 900px;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 28px;
        }
        .logo {
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 2px;
          display: flex;
          align-items: center;
        }
        .logo-as { color: var(--accent); }
        .logo-dot { color: #ffffff; opacity: 0.5; margin: 0 2px; }
        .logo-dev { color: #888888; }
        
        .nav-links {
          display: flex;
          gap: 28px;
        }
        .nav-links a {
          font-size: 11px;
          color: #888888;
          font-weight: 600;
          letter-spacing: 1.5px;
          transition: color 0.2s ease;
          position: relative;
          padding: 4px 0;
        }
        .nav-links a:hover { color: #ffffff; }
        .nav-links a.active { color: var(--accent); }
        .nav-links a.active::after {
          content: '';
          position: absolute;
          left: 0; bottom: -2px;
          width: 100%; height: 1px;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
        }
        
        .mobile-only { display: none; }
        .menu-toggle {
          width: 28px; height: 18px;
          display: flex; flex-direction: column; justify-content: space-between;
        }
        .bar { width: 100%; height: 1.5px; background: #ffffff; transition: all 0.3s ease; }
        .bar1.open { transform: translateY(8px) rotate(45deg); }
        .bar2.open { opacity: 0; }
        .bar3.open { transform: translateY(-8px) rotate(-45deg); }
        
        .mobile-menu {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0 28px 20px;
        }
        .mobile-menu a { font-size: 13px; font-weight: 600; letter-spacing: 2px; color: #888888; }
        .mobile-menu a:hover { color: #ffffff; }

        @media (max-width: 860px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
        }
      `}</style>
    </div>
  );
}
