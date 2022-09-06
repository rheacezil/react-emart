import React, { useState } from "react";
import "./auth.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Login() {
  const [darkMode, setDarkMode] = useState("");
  return (
    <div id="auth">
      <div class={`page-content${darkMode} d-flex align-items-center`}>
        <div class="container d-flex justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">
            <div class="auth-card">
              <div class="p-3 mt-3 d-flex justify-content-center">
                <img
                  src="images/shopping-bag-icon.png"
                  alt="site icon"
                  style={{ height: "50px" }}
                />
                <span id="brand-name" class="fw-bold fs-4 pt-3">
                  ULTRA
                </span>
              </div>
              <h5 class="text-center fst-italic">Shopping-Style-Fasion</h5>
              <button class="btn mt-5 mb-3 service-btn">
                <FontAwesomeIcon icon={faFacebook} />
                Login with Facebook
              </button>
              <button class="btn mb-3 service-btn">
                <FontAwesomeIcon icon={faGoogle} />
                Login with Google
              </button>
              <hr />
              <form>
                <div class="mb-2 mt-5">
                  <input
                    type="email"
                    class="form-control auth-input"
                    placeholder="Email Address"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="password"
                    class="form-control auth-input"
                    placeholder="Password"
                  />
                </div>
                <button
                  class="btn auth-btn mt-2 mb-4 bg-secondary w-100 text-white"
                  type="submit"
                >
                  Login
                </button>
              </form>
              <p class="text-center mb-1">
                <a href="index.html" class="text-muted">
                  Forgot Password?
                </a>
              </p>
              <p class="text-center mb-4">
                Don't have an account?
                <Link to="/signup" class="text-muted">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        id="theme-button"
        className={`btn btn-theme${darkMode}`}
        onClick={() => setDarkMode(darkMode ? "" : "-dark")}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
      </button>
    </div>
  );
}
