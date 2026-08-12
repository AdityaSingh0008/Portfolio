import { profile, projects } from "../data/portfolio";

const quickLinks = [
  { icon: "📸", href: projects[0].link },
  { icon: "🚗", href: projects[1].link },
  { icon: "🎵", href: projects[2].link },
  { icon: "⏱", href: projects[3].link },
  { icon: "🎧", href: projects[4].link },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-name">{profile.name}</div>
        <div className="footer-icons">
          {quickLinks.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.icon}</a>
          ))}
        </div>
        <div className="footer-copy">© 2026 {profile.name} · Designed with ❤️ & Figma</div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 40px 0;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        .footer-name { font-weight: 700; font-size: 16px; }
        .footer-icons { display: flex; gap: 18px; font-size: 18px; }
        .footer-icons a { opacity: 0.7; transition: opacity 0.2s ease, transform 0.2s ease; }
        .footer-icons a:hover { opacity: 1; transform: translateY(-3px); }
        .footer-copy { font-size: 13px; color: var(--text-dim); }
      `}</style>
    </footer>
  );
}
