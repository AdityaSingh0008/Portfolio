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
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "3ae479ee-2b40-4f07-9e46-efaa41c930d2",
          name: `${form.first} ${form.last}`,
          email: form.email,
          subject: form.subject || "New Contact Form Message – Portfolio",
          message: form.message,
          from_name: "Portfolio Contact Form"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setForm({ first: "", last: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(""), 5000);
    }
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
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message ✦"}
            </motion.button>

            {status === "success" && (
              <motion.div
                className="sent-msg success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Message sent successfully!
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                className="sent-msg error"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ❌ Failed to send message. Please try again.
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
        .btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .sent-msg { font-size: 14px; text-align: center; margin-top: 8px; font-weight: 500; }
        .sent-msg.success { color: #4ade80; }
        .sent-msg.error { color: #ef4444; }

        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .form-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
