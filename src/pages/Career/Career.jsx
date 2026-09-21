import { useState } from "react";
import "./Career.css";
import Reveal from "../../components/Reveal/Reveal";

const Career = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="career-page">

      {/* =========================================
          CAREER HERO
      ========================================= */}

      <Reveal direction="up">
        <section className="career-hero">

          <div className="career-hero-content">

            <span className="career-label">
              JOIN OUR TEAM
            </span>

            <h1>
              Build Your Career
              <span> With Us</span>
            </h1>

          </div>

        </section>
      </Reveal>


      {/* =========================================
          CAREER FORM
      ========================================= */}

      <Reveal direction="up">
        <section className="career-section">

          <div className="career-container">

            <div className="career-heading">

              <span>
                CAREER OPPORTUNITY
              </span>

              <h2>
                Apply <span>Now</span>
              </h2>

              <p>
                Fill in your details below and submit your resume.
                Our team will review your application and contact
                you if there is a suitable opportunity.
              </p>

            </div>


            <div className="career-form-wrapper">

              {submitted ? (

                <div className="career-success">

                  <div className="career-success-icon">
                    ✓
                  </div>

                  <h3>
                    Application Submitted!
                  </h3>

                  <p>
                    Thank you for applying. We have received
                    your application successfully.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit Another Application
                  </button>

                </div>

              ) : (

                <form
                  className="career-form"
                  onSubmit={handleSubmit}
                >

                  {/* First Name */}

                  <div className="career-form-group">

                    <label>
                      First Name
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      required
                    />

                  </div>


                  {/* Last Name */}

                  <div className="career-form-group">

                    <label>
                      Last Name
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      required
                    />

                  </div>


                  {/* Qualification */}

                  <div className="career-form-group">

                    <label>
                      Qualification
                    </label>

                    <input
                      type="text"
                      name="qualification"
                      placeholder="Enter your qualification"
                      required
                    />

                  </div>


                  {/* Mobile */}

                  <div className="career-form-group">

                    <label>
                      Mobile No
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      required
                    />

                  </div>


                  {/* Email */}

                  <div className="career-form-group">

                    <label>
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />

                  </div>


                  {/* Resume */}

                  <div className="career-form-group career-resume">

                    <label>
                      Upload Your Resume
                    </label>

                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      required
                    />

                    <small>
                      Accepted formats: PDF, DOC, DOCX
                    </small>

                  </div>


                  {/* Submit */}

                  <div className="career-submit">

                    <button type="submit">
                      Submit Application
                      <span>→</span>
                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </section>
      </Reveal>

    </div>
  );
};

export default Career;