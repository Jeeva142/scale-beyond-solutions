import "./About.css";
import Reveal from "../../components/Reveal/Reveal";
function About() {
  const values = [
    {
      number: "01",
      icon: "◆",
      title: "Innovation",
      text: "We continuously explore new ideas, technologies and strategies to create better solutions."
    },
    {
      number: "02",
      icon: "✓",
      title: "Integrity",
      text: "We believe in transparent communication, honest partnerships and responsible business practices."
    },
    {
      number: "03",
      icon: "◎",
      title: "Client Focus",
      text: "Our solutions are designed around our clients' goals, challenges and long-term growth."
    },
    {
      number: "04",
      icon: "↗",
      title: "Growth",
      text: "We focus on measurable outcomes that help businesses grow sustainably and confidently."
    }
  ];

  return (
    <main className="about-page">

      {/* =========================================
          1. WHO WE ARE
      ========================================= */}

      <Reveal direction="up">
      <section className="who-we-are">

        <div className="about-container">

          <div className="who-content">

            <span className="section-label">
              WHO WE ARE
            </span>

            <h1>
              Your Growth Partner
              <br />
              in the Digital World
            </h1>

            <p>
              Scale Beyond Solutions is a technology and digital
              marketing company focused on helping businesses build
              meaningful digital identities and achieve sustainable
              growth.
            </p>

            <p>
              From branding and website development to digital
              marketing, AI-powered solutions and performance
              strategies, we bring creativity, technology and business
              understanding together under one roof.
            </p>

          </div>


          <div className="who-visual">

            <div className="who-main-box">
              <span>01</span>

              <h3>
                DIGITAL
                <br />
                TRANSFORMATION
              </h3>
            </div>

            <div className="who-small-box">
              <span>02</span>

              <h3>
                BUSINESS
                <br />
                GROWTH
              </h3>
            </div>

          </div>

        </div>

      </section>
</Reveal>

      {/* =========================================
          2. VISION & MISSION
      ========================================= */}
<Reveal direction="up">
      <section className="vision-mission">

        <div className="section-heading">

          <span className="section-label">
            OUR DIRECTION
          </span>

          <h2>
            Vision & Mission
          </h2>

          <p>
            The principles that guide our journey and shape
            everything we build for our clients.
          </p>

        </div>


        <div className="vision-mission-grid">

          {/* VISION */}

          <div className="vision-card">

            <div className="card-top">

              <div className="card-icon">
                👁
              </div>

              <span>
                01
              </span>

            </div>

            <div className="card-content">

              <span className="card-label">
                OUR VISION
              </span>

              <h3>
                Building the Future
                of Business Growth
              </h3>

              <p>
                To be India's most trusted growth partner,
                transforming businesses through innovative
                marketing and technology-driven solutions.
              </p>

            </div>

            <div className="card-line"></div>

          </div>


          {/* MISSION */}

          <div className="mission-card">

            <div className="card-top">

              <div className="card-icon">
                🎯
              </div>

              <span>
                02
              </span>

            </div>

            <div className="card-content">

              <span className="card-label">
                OUR MISSION
              </span>

              <h3>
                Turning Ideas Into
                Measurable Success
              </h3>

              <p>
                To empower businesses with creative branding,
                digital marketing, AI-powered solutions, and
                performance-driven strategies that deliver
                measurable growth and long-term success.
              </p>

            </div>

            <div className="card-line"></div>

          </div>

        </div>

      </section>
</Reveal>

      {/* =========================================
          3. CORE VALUES
      ========================================= */}
<Reveal direction="up">
      <section className="core-values">

        <div className="section-heading">

          <span className="section-label">
            WHAT WE BELIEVE
          </span>

          <h2>
            Our Core Values
          </h2>

          <p>
            The values that influence how we work,
            communicate and create solutions.
          </p>

        </div>


        <div className="values-grid">

          {values.map((value) => (

            <div
              className="value-card"
              key={value.number}
            >

              <span className="value-number">
                {value.number}
              </span>

              <div className="value-icon">
                {value.icon}
              </div>

              <h3>
                {value.title}
              </h3>

              <p>
                {value.text}
              </p>

              <span className="value-arrow">
                →
              </span>

            </div>

          ))}

        </div>

      </section>
</Reveal>
    </main>
  );
}

export default About;