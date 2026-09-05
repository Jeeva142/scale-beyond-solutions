import React from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const teamMembers = [
  {
    image: "/images/team/team-1.jpg",
    name: "Your Name",
    role: "Founder & CEO",
  },
  {
    image: "/images/team/team-2.jpg",
    name: "Team Member",
    role: "Marketing Specialist",
  },
  {
    image: "/images/team/team-3.jpg",
    name: "Team Member",
    role: "Technology Specialist",
  },
  {
    image: "/images/team/team-4.jpg",
    name: "Team Member",
    role: "Creative Specialist",
  },
];

function Team() {
  return (
    <section className="home-team-section">

      <div className="home-team-container">

        {/* HEADER */}
        <div className="home-team-header">

          <span className="home-team-label">
            OUR TEAM
          </span>

          <h2>
            Meet the People Behind
            <span> Scale Beyond</span>
          </h2>

          <p>
            A passionate team combining creativity, technology, strategy,
            and marketing expertise to help businesses grow.
          </p>

        </div>


        {/* TEAM GRID */}
        <div className="home-team-grid">

          {teamMembers.map((member, index) => (
            <div
              className="home-team-card"
              key={index}
            >

              <div className="home-team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              <div className="home-team-info">

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>


        {/* BUTTON */}
        <div className="home-team-button">

          <Link to="/team">
            Meet Our Team
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Team;