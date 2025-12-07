

// import React from "react";

// export default function ContactForm() {
//   return (
//     <div className="container-xxl py-6" id="contact">
//       <div className="container">

//         {/* Heading */}
//         <div
//           className="mx-auto text-center wow fadeInUp"
//           data-wow-delay="0.1s"
//           style={{ maxWidth: "600px" }}
//         >
//           <div className="d-inline-block border rounded-pill text-primary px-4 mb-3">
//             Get in Touch
//           </div>
//           <h2 className="mb-5" style={{ fontFamily: "roboto" }}>
//             For manpower requirements, partnerships, or candidate support, reach out to us:
//           </h2>
//         </div>

//         <div className="row justify-content-center g-5">

//           {/* Form */}
//           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
//             <form>
//               <div className="row g-3">

//                 {/* Name */}
//                 <div className="col-md-6">
//                   <div className="form-floating">
//                     <input type="text" className="form-control" id="name" placeholder="Your Name" />
//                     <label htmlFor="name">Your Name</label>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="col-md-6">
//                   <div className="form-floating">
//                     <input type="email" className="form-control" id="email" placeholder="Your Email" />
//                     <label htmlFor="email">Your Email</label>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="col-12">
//                   <div className="form-floating">
//                     <input type="text" className="form-control" id="subject" placeholder="Subject" />
//                     <label htmlFor="subject">Subject</label>
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="col-12">
//                   <div className="form-floating">
//                     <textarea
//                       className="form-control"
//                       placeholder="Leave a message here"
//                       id="message"
//                       style={{ height: "150px" }}
//                     ></textarea>
//                     <label htmlFor="message">Message</label>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="col-12">
//                   <button className="btn btn-primary w-100 py-3" type="submit">
//                     Send Message
//                   </button>
//                 </div>

//               </div>
//             </form>
//           </div>

//           {/* Map Location */}
//           <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
//             <h4 style={{ fontFamily: "roboto", fontWeight: "700", marginBottom: "15px" }}>
//               Our Location
//             </h4>
//             <p style={{ fontSize: "17px", marginBottom: "15px", color: "#445065", fontFamily: "roboto" }}>
//               CV Raman Marg, Sarai Jullena,<br />
//               New Friends Colony, New Delhi, Delhi 110025
//             </p>

//             {/* Google Maps Embed */}
//             <div className="rounded overflow-hidden" style={{ border: "1px solid #ddd" }}>
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.24153976673!2d77.26681317572327!3d28.621040775685173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3f0aa23aed5%3A0x5e1fccb4d48752e7!2sCV%20Raman%20Marg%2C%20Sarai%20Jullena%2C%20New%20Friends%20Colony%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1707055123456"
//                 width="100%"
//                 height="350"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="Google Maps Location"
//               ></iframe>
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

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
            Get in Touch
          </div>
          <h2 className="mb-5" style={{ fontFamily: "roboto" }}>
            For manpower requirements, partnerships, or candidate support, reach out to us:
          </h2>
        </div>

        {/* Form + Map Row */}
        <div className="row g-5 align-items-stretch">

          {/* Form Section */}
          <div className="col-lg-6 d-flex">
            <div className="service-item rounded h-100 p-4 w-100 d-flex flex-column">

              <form className="flex-grow-1 d-flex flex-column">
                <div className="row g-3 flex-grow-1">

                  {/* Name */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="address" placeholder="Address" />
                      <label htmlFor="address">Address</label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12 flex-grow-1">
                    <div className="form-floating h-100">
                      <textarea
                        className="form-control h-100"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ minHeight: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
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
