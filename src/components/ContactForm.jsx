import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const toEmail = "hiraenterprisesdel@gmail.com";
    const subject = encodeURIComponent(form.subject || "New Contact Message");
    const body = encodeURIComponent(`${form.message}\n\nBest Regards,\n${form.name}\n${form.phone}\n${form.address}`);
    window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const CONTACTS = [
    { icon: "fa fa-map-marker-alt", label: "Our Office", value: "CV Raman Marg, Sarai Jullena,\nNew Friends Colony, New Delhi, Delhi 110025" },
    { icon: "fa fa-phone-alt", label: "Phone", value: "+91 9582414590" },
    { icon: "fa fa-envelope", label: "Email", value: "hiraenterprisesdel@gmail.com" },
  ];

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="pill-label">Get in Touch</div>
          <h2 className="section-title">Let's Discuss Your Manpower Needs</h2>
          <p className="section-sub">
            For requirements, partnerships, or candidate support — our team is ready to assist you.
          </p>
        </div>

        <div className="grid-2" style={{ gap: 36 }}>
          {/* Form */}
          <div className="contact-form-card">
            <h3 style={{ marginBottom: 6 }}>Send Us a Message</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: 28 }}>
              We'll respond within 24 hours on business days.
            </p>

            {sent ? (
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "var(--radius-sm)", padding: "20px", color: "var(--success)", textAlign: "center" }}>
                <p style={{ margin: 0, fontWeight: 600 }}>✓ Message sent! We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input id="name" type="text" onChange={handleChange} required placeholder="John Smith" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input id="phone" type="tel" onChange={handleChange} required placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div className="form-row" style={{ marginBottom: 16 }}>
                  <div className="form-group form-full">
                    <label>Company / Address</label>
                    <input id="address" onChange={handleChange} placeholder="Your company or city" />
                  </div>
                </div>
                <div className="form-row" style={{ marginBottom: 16 }}>
                  <div className="form-group form-full">
                    <label>Subject</label>
                    <input id="subject" onChange={handleChange} required placeholder="e.g. Nurse Recruitment — 20 positions" />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea id="message" onChange={handleChange} required placeholder="Tell us about your manpower requirements..." />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="contact-info-card" style={{ marginBottom: 20 }}>
              <h3>Contact Information</h3>
              <p>Reach out directly or visit our office in New Delhi.</p>
              {CONTACTS.map((c) => (
                <div className="contact-detail" key={c.label}>
                  <div className="contact-detail-icon">
                    <i className={c.icon} />
                  </div>
                  <div className="contact-detail-text">
                    <span>{c.label}</span>
                    <strong style={{ whiteSpace: "pre-line" }}>{c.value}</strong>
                  </div>
                </div>
              ))}
              <div style={{
              background: "var(--light-bg)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              height: 220
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.24153976673!2d77.26681317572327!3d28.621040775685173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0aa23aed5%3A0x5e1fccb4d48752e7!2sCV%20Raman%20Marg%2C%20Sarai%20Jullena%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1707055123456"
                width="100%" height="100%" style={{ border: 0 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
