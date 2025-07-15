import { useState } from 'react';

  const services = [
    {
      image: "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Equipment",
    description: "We provide state-of-the-art coffee equipment for the perfect brew every time. Our range includes espresso machines, grinders, French presses, pour-over kits, and more. Whether you're a home brewer or a professional barista, we have the tools to elevate your coffee experience.",
    types: [
      "Espresso Machines",
      "Coffee Grinders",
      "French Presses",
      "Pour-over Kits",
      "Coffee Scales"
    ]
    },
    {
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Type of coffee",
    description: "Explore a wide variety of coffee types, from classic espresso to unique blends. We offer single-origin coffees, signature blends, and seasonal specialties to suit every palate. Discover new flavors and aromas with every cup.",
    types: [
      "Espresso",
      "Americano",
      "Latte",
      "Cappuccino",
      "Mocha",
      "Cold Brew"
    ]
    },
    {
      image: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Take Away",
    description: "Enjoy your favorite coffee on the go with our convenient take away service. Choose from eco-friendly cups, reusable tumblers, and quick service options to keep you fueled throughout your day.",
    types: [
      "Eco-friendly Cups",
      "Reusable Tumblers",
      "Express Pickup",
      "Mobile Ordering"
    ]
    },
    {
      image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Beans Variant",
    description: "Choose from a selection of premium coffee bean variants sourced globally. We offer beans from Africa, South America, and Asia, each with unique tasting notes and roast profiles.",
    types: [
      "Single-Origin Beans",
      "Signature Blends",
      "Light Roast",
      "Medium Roast",
      "Dark Roast"
    ]
    },
    {
      image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Pastry",
    description: "Pair your coffee with our delicious range of fresh pastries and baked goods. From classic croissants to decadent cakes, our pastry selection is crafted to complement your coffee perfectly.",
    types: [
      "Croissants",
      "Muffins",
      "Cakes",
      "Cookies",
      "Scones"
    ]
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

const Services = () => {
  const [search, setSearch] = useState("");
  const [modalPromo, setModalPromo] = useState(null);
  const [modalService, setModalService] = useState(null);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="animate-section" id="services">
      <div className="section-content">
        <div className="services container">
          <div className="heading">
            <h2>Blending culture and coffee <br />top notch services</h2>
          </div>
          <div className="services-interactive-bar">
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="services-search-input"
            />
          </div>
          <div className="services-content modern-services-grid">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="ser-box modern-ser-box"
                tabIndex={0}
                onClick={() => setModalService(service)}
              >
                <div className="ser-img-wrapper">
                <img src={service.image} alt={service.title} />
                </div>
                <p>{service.title}</p>
              </div>
            ))}
          </div>
          <div className="services-promo">
            <div className="promo-grid modern-promo-grid">
              {promoItems.map((item, index) => (
                <div key={index} className="promo-item modern-promo-item" tabIndex={0} onClick={() => setModalPromo(item)}>
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
          {/* Modal for service details */}
          {modalService && (
            <div className="services-modal-overlay" onClick={() => setModalService(null)}>
              <div className="services-modal" onClick={e => e.stopPropagation()}>
                <img src={modalService.image} alt={modalService.title} style={{width: '90px', height: '90px', borderRadius: '1rem', marginBottom: '1.2rem'}} />
                <h3>{modalService.title}</h3>
                <p style={{marginBottom: '1.2rem'}}>{modalService.description}</p>
                <ul style={{textAlign: 'left', margin: '0 auto 1.2rem auto', maxWidth: 320}}>
                  {modalService.types && modalService.types.map((type, idx) => (
                    <li key={idx} style={{marginBottom: '0.4rem', color: '#df582e', fontWeight: 500}}>{type}</li>
                  ))}
                </ul>
                <button className="close-modal-btn" onClick={() => setModalService(null)}>Close</button>
              </div>
            </div>
          )}
          {/* Modal for promo item details */}
          {modalPromo && (
            <div className="services-modal-overlay" onClick={() => setModalPromo(null)}>
              <div className="services-modal" onClick={e => e.stopPropagation()}>
                <div className="promo-icon" style={{fontSize: '2.5rem', marginBottom: '1rem'}}>
                  <i className={`bx ${modalPromo.icon}`}></i>
                </div>
                <h3>{modalPromo.title}</h3>
                <p>{modalPromo.description}</p>
                <span className="promo-highlight">{modalPromo.highlight}</span>
                <button className="close-modal-btn" onClick={() => setModalPromo(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;