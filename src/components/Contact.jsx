import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

const infoItems = [
  { icon: "📧", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "📱", label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: "🎓", label: "University", value: profile.university },
  { icon: "📍", label: "Location", value: profile.location },
  { icon: "🎨", label: "Open To", value: profile.openTo },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.first} ${form.last} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio Contact"
    )}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <Reveal>
          <span className="section-tag">Contact</span>
          <h2 className="section-title">Let's Create Together</h2>
          <p className="section-desc">
            Have a project in mind or want to chat about design? I'd love to hear from you.
          </p>

          <div className="info-list">
            {infoItems.map((item) => (
              <div className="info-item" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <div className="info-label">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="info-value link">{item.value}</a>
                  ) : (
                    <div className="info-value">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="first" placeholder="First Name" value={form.first} onChange={handleChange} required />
              <input name="last" placeholder="Last Name" value={form.last} onChange={handleChange} required />
            </div>
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Message" rows="5" value={form.message} onChange={handleChange} required />

            <motion.button
              type="submit"
              className="btn btn-primary"
              whileTap={{ scale: 0.96 }}
            >
              Send Message ✦
            </motion.button>

            {sent && (
              <motion.div
                className="sent-msg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Opening your email client...
              </motion.div>
            )}
          </form>
        </Reveal>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .info-list { display: flex; flex-direction: column; gap: 20px; margin-top: 32px; }
        .info-item { display: flex; gap: 16px; align-items: center; }
        .info-icon {
          font-size: 20px;
          width: 46px; height: 46px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .info-label { font-size: 12px; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; }
        .info-value { font-size: 15px; font-weight: 600; }
        .info-value.link:hover { color: var(--accent); }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
        }
        .form-row { display: flex; gap: 16px; }
        .contact-form input, .contact-form textarea {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 13px 16px;
          color: var(--text);
          font-size: 14px;
          font-family: inherit;
          width: 100%;
          transition: border-color 0.2s ease;
          resize: vertical;
        }
        .contact-form input:focus, .contact-form textarea:focus {
          outline: none;
          border-color: var(--accent);
        }
        .contact-form .btn { justify-content: center; margin-top: 6px; }
        .sent-msg { font-size: 14px; color: #4ade80; text-align: center; }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .form-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
