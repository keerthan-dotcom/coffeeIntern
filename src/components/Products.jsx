const Products = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Instant coffee",
      price: "$14"
    },
    {
      image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Black coffee",
      price: "$14"
    },
    {
      image: "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Latte",
      price: "$14"
    },
    {
      image: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Cappuccino",
      price: "$14"
    },
    {
      image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Espresso",
      price: "$14"
    },
    {
      image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400",
      title: "Mocha",
      price: "$14"
    }
  ];

  return (
    <section className="animate-section" id="products">
      <div className="section-content">
        <div className="products container">
          <div className="heading">
            <h2>Our Top Selling Products</h2>
            <p>
              It Takes a lot of heart and hard work at every step to create the best coffee possible, and we know it takes a lot of grit to keep the grind growing
            </p>
          </div>
          <div className="product-content">
            {products.map((product, index) => (
              <div key={index} className="product-box">
                <i className="bx bx-heart heart-icon"></i>
                <img src={product.image} alt={product.title} />
                <p>4 Types Available</p>
                <h2>{product.title}</h2>
                <div className="product-info">
                  <span>{product.price}</span>
                  <i className="bx bx-shopping-bag"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;