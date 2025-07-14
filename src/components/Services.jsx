const Services = () => {
  const services = [
    {
      image: "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Equipment"
    },
    {
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Type of coffee"
    },
    {
      image: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Take Away"
    },
    {
      image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Beans Variant"
    },
    {
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Pastry"
    }
  ];

  const promoItems = [
    {
      icon: "bx-coffee-bean",
      title: "Artisanal Excellence",
      description: "Experience the perfect blend of tradition and innovation with our carefully curated coffee selection",
      highlight: "Discover Our Premium Blends"
    },
    {
      icon: "bx-coffee",
      title: "Crafted with Passion",
      description: "From bean to cup, our expert baristas ensure every serving is a masterpiece of flavor and aroma.",
      highlight: "Experience the Difference"
    },
    {
      icon: "bx-heart",
      title: "Community & Culture",
      description: "More than just coffee, we're creating a space where connections flourish and memories are made, one cup at a time.",
      highlight: "Join Our Coffee Community"
    }
  ];

  return (
    <section className="animate-section" id="services">
      <div className="section-content">
        <div className="services container">
          <div className="heading">
            <h2>Blending culture and coffee <br />
            top notch services</h2>
          </div>
          <div className="services-content">
            {services.map((service, index) => (
              <div key={index} className="ser-box">
                <img src={service.image} alt={service.title} />
                <p>{service.title}</p>
              </div>
            ))}
          </div>
          
          <div className="services-promo">
            <div className="promo-grid">
              {promoItems.map((item, index) => (
                <div key={index} className="promo-item">
                  <div className="promo-icon">
                    <i className={`bx ${item.icon}`}></i>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="promo-highlight">{item.highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;