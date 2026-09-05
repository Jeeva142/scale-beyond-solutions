import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Business Owner",
    role: "Founder",
    message:
      "Scale Beyond Solutions helped us strengthen our digital presence and connect with our customers more effectively.",
  },
  {
    name: "Marketing Client",
    role: "Business Owner",
    message:
      "Their team understood our requirements and delivered creative solutions that helped us move our business forward.",
  },
  {
    name: "Growth Partner",
    role: "Entrepreneur",
    message:
      "Professional, creative, and focused on results. The team has been a valuable partner for our business growth.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-container">

        {/* HEADER */}
        <div className="testimonials-header">

          <span className="testimonials-label">
            TESTIMONIALS
          </span>

          <h2>
            What Our <span>Clients Say</span>
          </h2>

          <p>
            We believe successful partnerships are built on trust,
            communication, and measurable results.
          </p>

        </div>


        {/* CARDS */}
        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              <div className="testimonial-quote">
                “
              </div>

              <p className="testimonial-message">
                {testimonial.message}
              </p>

              <div className="testimonial-client">

                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>
                    {testimonial.name}
                  </h3>

                  <span>
                    {testimonial.role}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;