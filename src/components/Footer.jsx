import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMapMarked,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row text-white g-4">
          <div className="col-md-6 col-lg-3">
            <a
              href="index.html"
              className="brand text-decoration-none text-white"
            >
              Ultra
            </a>
            <p className="text-white mt-3 text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ea
              error consectetur illum? Sint voluptatibus quae, sed et
              consectetur earum?
            </p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light">Links</h5>
            <ul className="list-unstyled">
              <li className="my-3">
                <Link
                  to="/"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Home
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/products"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Products
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/about-us"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> About Us
                </Link>
              </li>
              <li className="my-3">
                <Link
                  to="/contact"
                  className="text-white text-decoration-none text-muted"
                >
                  <FontAwesomeIcon icon={faChevronRight} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Contact Us</h5>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span className="fw-light">support@ultra.com</span>
            </div>
            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faMapMarked} />
              </span>
              <span className="fw-light">
                Ultra Street, Angeles City, Pampanga, Philippines
              </span>
            </div>

            <div className="d-flex justify-content-start align-items-start my-2 text-muted">
              <span className="me-3">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span className="fw-light">09999321456</span>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5 className="fw-light mb-3">Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faFacebookF} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="text-decoration-none text-muted fs-4 me-4">
                <FontAwesomeIcon icon={faPinterest} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
