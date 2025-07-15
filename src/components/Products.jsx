import { useState } from 'react';

const products = [
  {
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Instant coffee",
    price: "$14",
    type: "Classic",
    description: "Instant coffee is quick, convenient, and perfect for busy mornings or when you need a fast pick-me-up. Its smooth, mild flavor suits any mood and is great for those who love simplicity."
  },
  {
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Black coffee",
    price: "$14",
    type: "Strong",
    description: "Black coffee is bold and robust, ideal for those who appreciate pure coffee flavor. It's perfect for energetic moods or when you need a strong start to your day."
  },
  {
    image: "https://images.pexels.com/photos/4226806/pexels-photo-4226806.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Latte",
    price: "$14",
    type: "Milky",
    description: "Latte is creamy and smooth, blending espresso with steamed milk. It's a comforting choice, perfect for relaxed moods or when you want to unwind."
  },
  {
    image: "https://images.pexels.com/photos/4350057/pexels-photo-4350057.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Cappuccino",
    price: "$14",
    type: "Milky",
    description: "Cappuccino offers a rich espresso base with frothy milk foam. It's a balanced, uplifting drink, great for social moments or a cozy break."
  },
  {
    image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Espresso",
    price: "$14",
    type: "Strong",
    description: "Espresso is intense and concentrated, delivering a quick burst of energy. It's perfect for energetic moods or when you need a bold coffee experience."
  },
  {
    image: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=400",
    title: "Mocha",
    price: "$14",
    type: "Chocolate",
    description: "Mocha combines rich chocolate with espresso and milk, creating a sweet, indulgent treat. It's perfect for happy moods or when you crave a little comfort."
  }
];

const filterTypes = ["All", "Classic", "Strong", "Milky", "Chocolate"];

const moodLine = {
  "Classic": "A classic choice for any mood—simple, smooth, and always satisfying.",
  "Strong": "Perfect for energetic moods or when you need a bold start to your day.",
  "Milky": "Great for relaxed moments or when you want something creamy and comforting.",
  "Chocolate": "Ideal for happy moods or when you crave a sweet, indulgent treat."
};

const Products = () => {
  const [search, setSearch] = useState("");
  const [cartFeedback, setCartFeedback] = useState("");
  const [modalProduct, setModalProduct] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || product.type === filter;
    return matchesSearch && matchesFilter;
  });

  const handleAddToCart = (product) => {
    setCartFeedback(`${product.title} added to cart!`);
    setTimeout(() => setCartFeedback(""), 1500);
  };

  return (
    <section className="animate-section" id="products">
      <div className="section-content">
        <div className="products container">
          <div className="products-heading-bg">
            <div className="heading">
              <h2>Brewed to Perfection: Our Coffee Selection</h2>
              <p>
                It takes a lot of heart and hard work at every step to create the best coffee possible, and we know it takes a lot of grit to keep the grind growing
              </p>
            </div>
          </div>
          <div className="product-interactive-bar">
            <input
              type="text"
              placeholder="Search coffee..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="product-search-input"
            />
            <select
              className="product-filter-select"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              {filterTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {cartFeedback && <span className="cart-feedback">{cartFeedback}</span>}
          </div>
          <div className="product-content modern-product-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="product-box modern-product-box" tabIndex={0} onClick={() => setModalProduct(product)}>
                <i className="bx bx-heart heart-icon"></i>
                <img src={product.image} alt={product.title} />
                <p>{product.type}</p>
                <h2>{product.title}</h2>
                <div className="product-info">
                  <span>{product.price}</span>
                  <button
                    className="add-to-cart-btn"
                    onClick={e => { e.stopPropagation(); handleAddToCart(product); }}
                  >
                  <i className="bx bx-shopping-bag"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Modal for product details */}
          {modalProduct && (
            <div className="product-modal-overlay" onClick={() => setModalProduct(null)}>
              <div className="product-modal" onClick={e => e.stopPropagation()}>
                <img src={modalProduct.image} alt={modalProduct.title} />
                <h2>{modalProduct.title}</h2>
                <span>{modalProduct.price}</span>
                <p style={{marginTop: '1rem'}}>{modalProduct.description}</p>
                <p style={{marginTop: '0.7rem', color: '#df582e', fontWeight: 600}}>
                  {moodLine[modalProduct.type]}
                </p>
                <button className="close-modal-btn" onClick={() => setModalProduct(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;