import { Link } from "react-router-dom";
import Reveal from "../../components/Reveal/Reveal";
const services = [
  {
    number: "01",
    icon: "✦",
    title: "Branding",
    text: "Build a strong and memorable brand identity that connects with your audience.",
  },
  {
    number: "02",
    icon: "◉",
    title: "Digital Marketing",
    text: "Reach the right audience through creative and result-oriented digital marketing.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Web Development",
    text: "Create modern, responsive websites designed to support your business growth.",
  },
  {
    number: "04",
    icon: "✧",
    title: "AI Solutions",
    text: "Use AI-powered solutions to automate processes and improve business efficiency.",
  },
  {
    number: "05",
    icon: "⌕",
    title: "SEO & Analytics",
    text: "Improve online visibility and use data-driven insights to make better decisions.",
  },
  {
    number: "06",
    icon: "↗",
    title: "Performance Marketing",
    text: "Generate quality leads and maximize your marketing performance and ROI.",
  },
];

function Services() {
  return (
    <Reveal direction="up">
    <section className="home-services">

      {/* SECTION HEADING */}
      <div className="home-section-heading">

        <span className="home-section-label">
          OUR SERVICES
        </span>

        <h2>
          Creative & Technology
          <br />
          Solutions For Growth
        </h2>

        <p>
          From building your brand to generating leads,
          we provide solutions designed around your goals.
        </p>

      </div>


      {/* SERVICES */}
      <div className="services-grid">

        {services.map((service) => (

          <article
            className={`home-service-card service-${service.number}`}
            key={service.number}
          >

            <div className="service-card-top">

              <div className="service-icon">
                {service.icon}
              </div>

              <span>
                {service.number}
              </span>

            </div>


            <h3>
              {service.title}
            </h3>


            <p>
              {service.text}
            </p>


            <Link
              to="/services"
              className="service-card-link"
            >
              Explore
              <span>→</span>
            </Link>

          </article>

        ))}

      </div>


      {/* VIEW ALL SERVICES */}
      <div className="section-button-wrapper">

        <Link
          to="/services"
          className="home-primary-btn"
        >
          View All Services
          <span>→</span>
        </Link>

      </div>

    </section>
    </Reveal>
  );
}

export default Services;