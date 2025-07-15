import { useState } from 'react';

const Footer = () => {
  const footerSections = [
    {
      title: "About",
      links: ["Our Story", "FAQ", "Careers"]
    },
    {
      title: "Customer's resources",
      links: ["Menu", "Location", "Support"]
    },
    {
      title: "Services",
      links: ["Payment Options", "Refunds & Exchanges", "Limitation & Liability"]
    }
  ];

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setError('');
    setEmail('');
  };

  return (
    <>
      <section className="footer container">
        <div className="footer-box">
          <a href="#" className="logo">Q.cafe</a>
          <div className="social">
            <a href="#"><i className='bx bxl-instagram'></i></a>
            <a href="#"><i className='bx bxl-twitter'></i></a>
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-youtube'></i></a>
          </div>
        </div>
        {footerSections.map((section, index) => (
          <div key={index} className="footer-box">
            <h3>{section.title}</h3>
            {section.links.map((link, linkIndex) => (
              <a key={linkIndex} href="#">{link}</a>
            ))}
          </div>
        ))}
      </section>
      <div className="newsletter-section">
        <h3>Subscribe to the newsletter</h3>
        <form className="newsletter-form" onSubmit={handleSubscribe} autoComplete="off">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-btn">Subscribe</button>
        </form>
        {error && <div className="newsletter-error">{error}</div>}
        {subscribed && <div className="newsletter-success">Thank you for subscribing!</div>}
      </div>
      <p className="copyright">&#169; QCAFE</p>
    </>
  );
};

export default Footer;