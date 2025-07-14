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
      <p className="copyright">&#169; QCAFE</p>
    </>
  );
};

export default Footer;