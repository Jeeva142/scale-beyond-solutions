import { Link } from "react-router-dom";
import "./Price.css";
import Reveal from "../../components/Reveal/Reveal";

const Price = () => {
  return (
    <div className="price-page">

      {/* Hero */}
      <Reveal direction="up">
        <section className="price-hero">
          <div className="price-hero-content">
            <span className="price-label">OUR PRICING</span>

            <h1>
              Pricing <span>Plan</span>
            </h1>

            <p>
              Flexible pricing plans designed to meet your business
              and website requirements.
            </p>
          </div>
        </section>
      </Reveal>

      {/* Pricing Categories */}
      <Reveal direction="up">
        <section className="price-section">
          <div className="price-grid">

            {/* Dynamic Website */}
            <div className="price-card">

              <div className="price-icon">
                🌐
              </div>

              <h3>Dynamic Website</h3>

              <p>
                Professional dynamic websites with responsive design,
                CMS, enquiry forms, hosting and other business features.
              </p>

              <div className="price-card-footer">
                <span>Custom Pricing</span>

                <Link to="/price/dynamic-website">
                  View Pricing <span>→</span>
                </Link>
              </div>

            </div>

            {/* Combo Pack */}
<div className="price-card">

  <div className="price-icon">
    📦
  </div>

  <h3>Combo Pack</h3>

  <p>
    Complete business growth packages combining website,
    SEO, Google Ads, social media marketing and optimization
    services in one package.
  </p>

  <div className="price-card-footer">
    <span>Starting from ₹75,000</span>

    <Link to="/price/combo-pack">
      View Pricing <span>→</span>
    </Link>
  </div>

</div>
          </div>

        </section>
      </Reveal>

    </div>
  );
};

export default Price;