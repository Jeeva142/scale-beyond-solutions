
import { Link } from "react-router-dom";
import "./Contact.css";
import Reveal from "../../components/Reveal/Reveal";
function ContactSection() {
  return (
    <Reveal direction="up">
    <section className="contact-preview">

      <div className="contact-preview-container">

        {/* =========================================
            LEFT SIDE
        ========================================= */}
        <div className="contact-preview-info">

          <span className="contact-preview-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Bring Your
            <span> Vision to Life</span>
          </h2>

          <p>
            Have an idea, project, or business challenge?
            Let's discuss how Scale Beyond Solutions can help
            you achieve your goals.
          </p>


          {/* EMAIL */}
          <div className="contact-preview-item">

            <div className="contact-preview-icon">
              ✉
            </div>

            <div>
              <span>EMAIL US</span>
              <p>info@sbsolutions.sbs</p>
            </div>

          </div>


          {/* PHONE */}
          <div className="contact-preview-item">

            <div className="contact-preview-icon">
              ☎
            </div>

            <div>
              <span>CALL US</span>
              <p>+91 99430 36410</p>
            </div>

          </div>


          {/* LOCATION */}
          <div className="contact-preview-item">

            <div className="contact-preview-icon">
              📍
            </div>

            <div>
              <span>VISIT US</span>
              <p>
                Coimbatore, Tamil Nadu, India
              </p>
            </div>

          </div>


          {/* STATS */}
          <div className="contact-preview-stats">

            <div>
              <strong>100%</strong>
              <span>Commitment</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Support</span>
            </div>

            <div>
              <strong>250+</strong>
              <span>Projects</span>
            </div>

          </div>

        </div>


        {/* =========================================
            RIGHT SIDE
        ========================================= */}
        <div className="contact-preview-form-wrapper">

          <div className="contact-preview-form-header">

            <div className="contact-form-icon">
              ✈
            </div>

            <div>
              <h3>Send Us a Message</h3>

              <p>
                Tell us about your project and we'll get back to you.
              </p>
            </div>

          </div>


          <form className="contact-preview-form">

            <div className="contact-form-row">

              <div className="contact-form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>


              <div className="contact-form-group">

                <label>
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>


            <div className="contact-form-group">

              <label>
                Subject
              </label>

              <input
                type="text"
                placeholder="What can we help you with?"
              />

            </div>


            <div className="contact-form-group">

              <label>
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
              />

            </div>


            <button type="submit">
              Send Message
              <span>→</span>
            </button>

            <small>
              🔒 Your information is safe and secure with us.
            </small>

          </form>

        </div>

      </div>


      {/* FULL CONTACT PAGE LINK */}

      <div className="contact-preview-button">

        <Link to="/contact">
          View Contact Page
          <span>→</span>
        </Link>

      </div>

    </section>
    </Reveal>
  );
}

export default ContactSection;