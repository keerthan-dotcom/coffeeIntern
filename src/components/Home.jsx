const Home = () => {
  return (
    <section className="animate-section" id="home">
      <div className="section-content">
        <div className="home container">
          <div className="home-text">
            <h1>
              <span>Enjoy a new blend</span>
              <span>of coffee beans</span>
            </h1>
            <p>Brew or order a perfect coffee based on your mood anywhere</p>
            <a href="#" className="btn">
              <span>Shop Now</span>
              <i className="bx bx-up-arrow-alt"></i>
            </a>
          </div>
          <img src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800" alt="home-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;