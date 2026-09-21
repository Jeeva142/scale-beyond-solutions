import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Sakthivel., M.Tech",
      role: "Founder & CEO",
      image: "",
    },
    {
      name: "Priyadharshini",
      role: "Chief Operating Officer",
      image: "",
    },
    {
      name: "Pradeep Kumar",
      role: "Chief Financial Officer",
      image: "",
    },
    {
      name: "Pavithra",
      role: "Senior Designer",
      image: "",
    },
    {
      name: "Jeeva",
      role: "Senior Developer",
      image: "",
    },
  ];

  return (
    <div className="team-page">

      {/* Hero Section */}
      <section className="team-hero">
        <span className="team-label">OUR TEAM</span>

        <h1>
          Meet Our <span>Team</span>
        </h1>

        <p>
          Meet the talented people behind Scale Beyond Solutions,
          working together to create innovative solutions and help
          businesses grow.
        </p>
      </section>

      {/* Team Members */}
      <section className="team-section">

        <div className="team-grid">

          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>

              {/* Photo Area */}
              <div className="team-image">

                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                ) : (
                  <div className="team-placeholder">
                    <span>Photo</span>
                  </div>
                )}

              </div>

              {/* Member Details */}
              <div className="team-info">

                <h3>{member.name}</h3>

                <p>{member.role}</p>

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Team;