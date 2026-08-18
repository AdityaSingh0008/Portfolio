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

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [open]);

  return (
    <>
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
        </motion.header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <div className="mobile-overlay-content">
              <motion.a 
                href="#" 
                onClick={() => { setOpen(false); setActive('home'); }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                HOME
              </motion.a>
              {navLinks.map((l, i) => (
                <motion.a 
                  key={l.id} 
                  href={`#${l.id}`} 
                  onClick={() => { setOpen(false); setActive(l.id); }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + ((i + 1) * 0.05) }}
                >
                  {l.label.toUpperCase()}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 999px;
          width: 100%;
          max-width: 900px;
          transition: all 0.3s ease;
        }
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
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
          position: relative;
          z-index: 101; /* Above mobile overlay so logo stays visible */
        }
        .logo-as { color: var(--accent); }
        
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
        
        .menu-toggle {
          width: 28px; height: 18px;
          display: none; /* Hidden by default on desktop */
          flex-direction: column; 
          justify-content: space-between;
          position: relative;
          z-index: 101; /* Above mobile overlay so button is clickable to close */
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .bar { width: 100%; height: 1.5px; background: #ffffff; transition: all 0.3s ease; }
        .bar1.open { transform: translateY(8px) rotate(45deg); }
        .bar2.open { opacity: 0; }
        .bar3.open { transform: translateY(-8px) rotate(-45deg); }
        
        .mobile-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.85);
          z-index: 99;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .mobile-overlay-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
          text-align: center;
        }
        .mobile-overlay-content a { 
          font-size: 24px; 
          font-weight: 800; 
          letter-spacing: 4px; 
          color: #888888; 
          text-transform: uppercase;
          transition: color 0.3s ease;
        }
        .mobile-overlay-content a:hover,
        .mobile-overlay-content a:active { color: #ffffff; }

        @media (max-width: 860px) {
          .desktop-only { display: none !important; }
          .menu-toggle.mobile-only { display: flex; }
        }
      `}</style>
    </>
  );
}
