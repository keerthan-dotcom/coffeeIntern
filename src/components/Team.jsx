import { useState } from 'react';

const teamMembers = [
  {
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Sara Zones",
    position: "Co-Lead chef",
    description: "As roaster we search the world over to establish relationships",
    bio: "Sara is passionate about coffee and culinary arts. She brings a unique blend of creativity and expertise to the team, ensuring every cup is a masterpiece."
  },
  {
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Selena Zones",
    position: "Lead chef",
    description: "As roaster we search the world over to establish relationships",
    bio: "Selena leads the team with a focus on quality and innovation. Her leadership inspires everyone to strive for excellence in every roast."
  },
  {
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    name: "Taylor Zones",
    position: "Lead chef",
    description: "As roaster we search the world over to establish relationships",
    bio: "Taylor's expertise in sourcing and roasting beans ensures that only the best flavors reach our customers."
  }
];

const Team = () => {
  const [search, setSearch] = useState("");
  const [modalMember, setModalMember] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const filteredMembers = teamMembers.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.position.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="animate-section" id="team">
      <div className="section-content">
        <div className="team container">
          <div className="team-heading-bg">
            <div className="heading">
              <h2>Our Coffee Artisans</h2>
            </div>
          </div>
          <div className="team-interactive-bar">
            <input
              type="text"
              placeholder="Search team..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="team-search-input"
            />
          </div>
          <div className="team-content modern-team-scroll">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className={`team-box modern-team-flip${flippedIndex === index ? ' flipped' : ''}`}
                tabIndex={0}
                onMouseEnter={() => setFlippedIndex(index)}
                onMouseLeave={() => setFlippedIndex(null)}
                onFocus={() => setFlippedIndex(index)}
                onBlur={() => setFlippedIndex(null)}
                onClick={() => setModalMember(member)}
              >
                <div className="team-flip-inner">
                  <div className="team-flip-front">
                    <div className="team-img-wrapper">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <h2>{member.name}</h2>
                    <span>{member.position}</span>
                    <p className="team-desc">{member.description}</p>
                  </div>
                  <div className="team-flip-back">
                    <h2>{member.name}</h2>
                    <p className="team-desc">{member.bio}</p>
                    <span className="team-more">Click for more</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Modal for team member details */}
          {modalMember && (
            <div className="team-modal-overlay" onClick={() => setModalMember(null)}>
              <div className="team-modal" onClick={e => e.stopPropagation()}>
                <img src={modalMember.image} alt={modalMember.name} />
                <h2>{modalMember.name}</h2>
                <span>{modalMember.position}</span>
                <p style={{marginTop: '1rem'}}>{modalMember.bio}</p>
                <button className="close-modal-btn" onClick={() => setModalMember(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;