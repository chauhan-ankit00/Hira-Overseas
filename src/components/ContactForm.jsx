import React from "react";

export default function ContactForm() {
  return (
    <div className="container-xxl py-6" id="contact">
      <div className="container">

        {/* Heading */}
        <div
          className="mx-auto text-center wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "600px" }}
        >
          <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
            Contact Us
          </div>
          <h2 className="mb-5">
            If You Have Any Query, Please Feel Free Contact Us
          </h2>
        </div>

        {/* Form */}
        <div className="row justify-content-center">
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">

            <form>
              <div className="row g-3">

                {/* Name */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                {/* Subject */}
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>

                {/* Message */}
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "150px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                {/* Resume/CV Upload */}
                <div className="col-12">
                  <div className="form-floating">
                    <input
                      type="file"
                      className="form-control"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                    />
                    <label htmlFor="resume">Upload Resume / CV</label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Send Message
                  </button>
                </div>

              </div>
            </form>

          </div>
        </div>

      </div>
    </div>
  );
}
