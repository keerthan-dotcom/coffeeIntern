const Team = () => {
  const teamMembers = [
    {
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Sara Zones",
      position: "Co-Lead chef",
      description: "As roaster we search the world over to establish relationships"
    },
    {
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Selena Zones",
      position: "Lead chef",
      description: "As roaster we search the world over to establish relationships"
    },
    {
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Taylor Zones",
      position: "Lead chef",
      description: "As roaster we search the world over to establish relationships"
    }
  ];

  return (
    <section className="animate-section" id="team">
      <div className="section-content">
        <div className="team container">
          <div className="heading">
            <h2>Meet Our Experts</h2>
          </div>
          <div className="team-content">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-box">
                <img src={member.image} alt={member.name} />
                <h2>{member.name}</h2>
                <span>{member.position}</span>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;