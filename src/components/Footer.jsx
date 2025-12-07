import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{ marginTop: "6rem" }}
    >
      <div className="container py-5">
        <div className="row g-5">

          {/* Get in Touch */}
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>Sarai Jullena, New Delhi, India</p>
            <p><i className="fa fa-phone-alt me-3"></i>+91 9582414590</p>
            <p><i className="fa fa-envelope me-3"></i>hiraenterprisesdel@gmail.com</p>

            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="btn btn-outline-light btn-social" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Quick Link</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <Link className="btn btn-link" to="/services">Services</Link>
            <a className="btn btn-link" href="#">Terms & Condition</a>
            <Link className="btn btn-link" to="/career">Career</Link>
          </div>

          {/* Popular Links */}
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Popular Link</h5>
            <Link className="btn btn-link" to="/about">About Us</Link>
            <Link className="btn btn-link" to="/contact">Contact Us</Link>
            <a className="btn btn-link" href="#">Privacy Policy</a>
            <a className="btn btn-link" href="#">Terms & Condition</a>
            <Link className="btn btn-link" to="/career">Career</Link>
          </div>

          {/* Newsletter */}
          <div className="col-md-6 col-lg-3">
            <h5 className="text-white mb-4">Newsletter</h5>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </p>

            <div className="position-relative w-100 mt-3">
              <input
                className="form-control border-0 rounded-pill w-100 ps-4 pe-5"
                type="text"
                placeholder="Your Email"
                style={{ height: "48px" }}
              />
              <button
                type="button"
                className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              >
                <i className="fa fa-paper-plane text-primary fs-4"></i>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="copyright">
          <div className="row">

            {/* Left Copyright */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a className="border-bottom" href="#">
                HiraOverseas.com
              </a>
              , All Right Reserved.

              <br />
              Designed By{" "}
              <a className="border-bottom" href="https://htmlcodex.com">
                Ankit Chauhan
              </a>
            </div>

            {/* Right Footer Menu */}
            <div className="col-md-6 text-center text-md-end">
              
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
