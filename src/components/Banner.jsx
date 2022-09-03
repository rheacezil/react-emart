import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="py-5" id="banner">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="banner-content">
            <span className="text-white">Discount Up to 50%</span>
            <h2 className="mt-2">Grand Sale Offer!</h2>
            <Link to="/" className="btn border-0">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
