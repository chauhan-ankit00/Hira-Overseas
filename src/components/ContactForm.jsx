import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const toEmail = "show02288@gmail.com"; // 👈 receiver email

    const emailSubject = encodeURIComponent(form.subject || "New Contact Message");

    const emailBody = encodeURIComponent(
      `
${form.message}


Best Regards,
${form.name}
 ${form.phone}
${form.address}`
    );

    window.location.href = `mailto:${toEmail}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="container-xxl py-6" id="contact">
      <div className="container">

        {/* Heading */}
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "600px" }}>
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Get in Touch
          </div>
          <h2 style={{ fontFamily: "roboto" }}>
            For manpower requirements, partnerships, or candidate support, reach out to us:
          </h2>
        </div>

        <div className="row g-5">

          {/* FORM */}
          <div className="col-lg-6">
            <div className="service-item rounded p-4 h-100">

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input className="form-control" id="name" onChange={handleChange} required />
                      <label>Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="phone" className="form-control" id="phone" onChange={handleChange} required />
                      <label>Your Phone</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input className="form-control" id="address" onChange={handleChange} />
                      <label>Address</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input className="form-control" id="subject" onChange={handleChange} required />
                      <label>Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        style={{ height: "150px" }}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label>Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-outline-primary w-100 py-3">
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

          {/* Map Section */}
          <div className="col-lg-6 d-flex">
            <div className="service-item rounded h-100 p-4 w-100 d-flex flex-column">

              <h4 style={{ fontFamily: "roboto", fontWeight: "700", marginBottom: "10px" }}>
                Our Location
              </h4>

              <p style={{ fontSize: "17px", color: "#445065", marginBottom: "15px" }}>
                CV Raman Marg, Sarai Jullena,<br />
                New Friends Colony, New Delhi, Delhi 110025
              </p>

              {/* Map takes full height */}
              <div className="flex-grow-1 rounded overflow-hidden mb-3" style={{ border: "1px solid #ddd" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.24153976673!2d77.26681317572327!3d28.621040775685173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0aa23aed5%3A0x5e1fccb4d48752e7!2sCV%20Raman%20Marg%2C%20Sarai%20Jullena%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1707055123456"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>

              {/* Directions Button */}
              <a
                href="https://maps.app.goo.gl/wyCWpnsVfusvFQBZ7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary w-100 py-2"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  borderRadius: "50px"
                }}
              >
                ➤ Get Directions
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
