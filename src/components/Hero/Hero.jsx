import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <span className="hero-label">
            SCALE BEYOND SOLUTIONS
          </span>

          <h1>
            We Don't Just Build.
            <br />
            <span>We Help Businesses Grow.</span>
          </h1>

          <p>
            We combine creativity, technology, and data-driven strategies
            to help businesses build powerful brands, reach the right
            audience, and achieve measurable growth.
          </p>

          <div className="hero-buttons">

            <Link
              to="/services"
              className="hero-primary-btn"
            >
              Explore Services
              <span>→</span>
            </Link>

            <Link
              to="/contact"
              className="hero-secondary-btn"
            >
              Get Started
            </Link>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="hero-circle hero-circle-one"></div>
          <div className="hero-circle hero-circle-two"></div>

          <div className="hero-card hero-card-main">

            <div className="hero-card-icon">
              ↗
            </div>

            <div>
              <span>BUSINESS GROWTH</span>
              <strong>+85%</strong>
            </div>

          </div>


          <div className="hero-floating-card hero-floating-card-one">

            <span className="hero-floating-icon">
              ✦
            </span>

            <div>
              <strong>Creative</strong>
              <small>Solutions</small>
            </div>

          </div>


          <div className="hero-floating-card hero-floating-card-two">

            <span className="hero-floating-icon">
              ✓
            </span>

            <div>
              <strong>Smart</strong>
              <small>Technology</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;