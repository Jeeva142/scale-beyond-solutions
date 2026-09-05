import { Link } from "react-router-dom";
import "./Home.css";
import Products from "../Product/Product";
// import Testimonials from "../../components/Testimonials/Testimonials";
// import Team from "../../components/Team/Team";
// import Pricing from "../../components/Pricing/Pricing";
import Services from "../Services/Services";
import ContactSection from "../Contact/Contact";
import Reveal from "../../components/Reveal/Reveal";

function Home() {

  const stats = [
    {
      number: "150+",
      title: "Projects Delivered",
    },
    {
      number: "85+",
      title: "Happy Clients",
    },
    {
      number: "40+",
      title: "Team Experts",
    },
    {
      number: "2+",
      title: "Years Experience",
    },
  ];

  const pricing = [
    {
      title: "Starter",
      text: "For businesses beginning their digital journey.",
      link: "/price",
    },
    {
      title: "Business",
      text: "For growing businesses looking for stronger results.",
      link: "/price",
      featured: true,
    },
    {
      title: "Enterprise",
      text: "For businesses requiring customized solutions.",
      link: "/price",
    },
  ];

  return (
    <main className="home-page">

      {/* =========================================
          1. HERO
      ========================================= */}

      <Reveal direction="up">
        <section className="home-hero">

          <div className="home-container hero-container">

            <div className="hero-content">

              <span className="hero-label">
                PREMIMUM DIGITAL SOLUTIONS
              </span>

              <h1>
                Scale Your Business
                <span> Beyond Limits</span>
              </h1>

              <p>
                We combine creativity, technology and strategy to
                help businesses build stronger brands, reach the
                right audience and achieve measurable growth.
              </p>

              <div className="hero-buttons">

                <Link
                  to="/services"
                  className="home-primary-btn"
                >
                  Explore Services
                  <span>→</span>
                </Link>

                <Link
                  to="/contact"
                  className="home-secondary-btn"
                >
                  Let's Talk
                </Link>

              </div>

              <div className="hero-mini-stats">

                <div>
                  <strong>150+</strong>
                  <span>Projects</span>
                </div>

                <div>
                  <strong>85+</strong>
                  <span>Clients</span>
                </div>

                <div>
                  <strong>40+</strong>
                  <span>Experts</span>
                </div>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-circle hero-circle-one"></div>

              <div className="hero-circle hero-circle-two"></div>

              <div className="hero-main-card">

                <span>BUILD</span>

                <strong>
                  CREATE
                </strong>

                <span>
                  GROW
                </span>

                <div className="hero-card-line"></div>

                <small>
                  SCALE BEYOND SOLUTIONS
                </small>

              </div>

              <div className="hero-floating-card">

                <span>GROWTH</span>

                <strong>
                  +150%
                </strong>

                <small>
                  Business Impact
                </small>

              </div>

            </div>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          2. VISION & MISSION
      ========================================= */}

      <Reveal direction="up">
        <section className="home-vision">

          <div className="home-section-heading">

            <span className="home-section-label">
              OUR VISION & MISSION
            </span>

            <h2>
              Building Brands.
              <br />
              Driving Business Growth.
            </h2>

            <p>
              Our vision and mission guide the way we create
              meaningful solutions for businesses.
            </p>

          </div>

          <div className="vision-grid">

            <article className="home-vision-card">

              <div className="home-card-top">

                <div className="home-card-icon">
                  👁
                </div>

                <span>01</span>

              </div>

              <div className="home-card-content">

                <span>
                  OUR VISION
                </span>

                <h3>
                  Trusted Growth
                  Partner
                </h3>

                <p>
                  To be India's most trusted growth partner,
                  transforming businesses through innovative
                  marketing and technology-driven solutions.
                </p>

              </div>

              <div className="home-card-line"></div>

            </article>


            <article className="home-mission-card">

              <div className="home-card-top">

                <div className="home-card-icon">
                  🎯
                </div>

                <span>02</span>

              </div>

              <div className="home-card-content">

                <span>
                  OUR MISSION
                </span>

                <h3>
                  Ideas Into
                  Measurable Success
                </h3>

                <p>
                  To empower businesses with creative branding,
                  digital marketing, AI-powered solutions and
                  performance-driven strategies that deliver
                  measurable growth and long-term success.
                </p>

              </div>

              <div className="home-card-line"></div>

            </article>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          SERVICES
      ========================================= */}

      <Reveal direction="up">
        <Services />
      </Reveal>


      {/* =========================================
          PRODUCTS
      ========================================= */}

      <Reveal direction="up">
        <Products />
      </Reveal>


      {/* =========================================
          7. STATISTICS
      ========================================= */}

      <Reveal direction="up">
        <section className="home-statistics">

          <div className="statistics-grid">

            {stats.map((stat) => (

              <div
                className="home-stat"
                key={stat.title}
              >

                <strong>
                  {stat.number}
                </strong>

                <span>
                  {stat.title}
                </span>

              </div>

            ))}

          </div>

        </section>
      </Reveal>


      {/* =========================================
          8. PRICING
      ========================================= */}

      <Reveal direction="up">
        <section className="home-pricing">

          <div className="home-section-heading">

            <span className="home-section-label">
              SIMPLE PRICING
            </span>

            <h2>
              Plans Built For
              <br />
              Your Growth
            </h2>

            <p>
              Flexible solutions for businesses at different
              stages of their growth journey.
            </p>

          </div>


          <div className="pricing-grid">

            {pricing.map((plan) => (

              <article
                className={`pricing-card ${
                  plan.featured ? "featured-pricing" : ""
                }`}
                key={plan.title}
              >

                {plan.featured && (
                  <span className="popular-label">
                    MOST POPULAR
                  </span>
                )}

                <h3>
                  {plan.title}
                </h3>

                <p>
                  {plan.text}
                </p>

                <Link
                  to={plan.link}
                  className="pricing-link"
                >
                  View Plan
                  <span>→</span>
                </Link>

              </article>

            ))}

          </div>

          <div className="section-button-wrapper">

            <Link
              to="/price"
              className="home-outline-btn"
            >
              View Full Pricing
              <span>→</span>
            </Link>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          9. TEAM
      ========================================= */}

      <Reveal direction="left">
        <section className="home-team">

          <div className="team-container">

            <div className="team-intro">

              <span className="home-section-label">
                OUR TEAM
              </span>

              <h2>
                Meet The People
                <br />
                Behind The Growth
              </h2>

              <p>
                A team of creative thinkers, technology experts
                and marketing professionals working together
                to create better results.
              </p>

              <Link
                to="/team"
                className="home-primary-btn"
              >
                Meet Our Team
                <span>→</span>
              </Link>

            </div>


            <div className="team-preview-grid">

              <div className="team-placeholder">
                <span>TEAM</span>
              </div>

              <div className="team-placeholder team-offset">
                <span>TEAM</span>
              </div>

              <div className="team-placeholder">
                <span>TEAM</span>
              </div>

            </div>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          10. CAREER
      ========================================= */}

      <Reveal direction="right">
        <section className="home-career">

          <div className="career-container">

            <div>

              <span className="home-section-label">
                CAREER
              </span>

              <h2>
                Build Your Career
                <br />
                With Us.
              </h2>

              <p>
                Work with people who build, create and innovate.
                Grow your skills while creating meaningful
                digital solutions.
              </p>

            </div>

            <Link
              to="/career"
              className="career-button"
            >
              Explore Careers
              <span>→</span>
            </Link>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          11. CONTACT
      ========================================= */}

      <Reveal direction="up">
        <ContactSection />
      </Reveal>

    </main>
  );
}

export default Home;