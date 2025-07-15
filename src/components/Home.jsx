import { useState } from 'react';
// Placeholder for particles background (e.g., react-tsparticles)
// import Particles from 'react-tsparticles';
// Placeholder for typewriter effect (e.g., react-simple-typewriter)
// import { Typewriter } from 'react-simple-typewriter';

// Coffee options from Products.jsx
const coffeeOptions = [
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

// Map moods to coffee options (can be customized)
const moodToCoffee = {
  Happy: coffeeOptions[2], // Latte
  Relaxed: coffeeOptions[3], // Cappuccino
  Energetic: coffeeOptions[4], // Espresso
  Sad: coffeeOptions[5], // Mocha
  Busy: coffeeOptions[0], // Instant coffee
  Classic: coffeeOptions[1], // Black coffee
};

const moods = [
  { label: 'Happy', tagline: 'Enjoy a new blend of coffee beans', img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Relaxed', tagline: 'Unwind with a soothing cup', img: 'https://images.pexels.com/photos/34085/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Energetic', tagline: 'Kickstart your day with bold flavor', img: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Sad', tagline: 'A warm cup for a blue day', img: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Busy', tagline: 'Quick and easy for your busy day', img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { label: 'Classic', tagline: 'Go back to the basics', img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const Home = () => {
  const [mood, setMood] = useState(moods[0]);
  const [customMood, setCustomMood] = useState('');

  // Determine the best coffee for the selected or custom mood
  const bestCoffee = moodToCoffee[mood.label] || coffeeOptions[0];

  // Handle custom mood input
  const handleCustomMood = (e) => {
    setCustomMood(e.target.value);
    // If custom mood matches a known mood, select it
    const found = moods.find(m => m.label.toLowerCase() === e.target.value.toLowerCase());
    if (found) setMood(found);
  };

  return (
    <section className="animate-section" id="home">
      {/* Particles background placeholder */}
      {/* <Particles options={...} /> */}
      <div className="section-content home-modern-bg">
        <div className="home container">
          <div className="home-text">
            <h1 className="typewriter-headline">
              {/* Typewriter effect placeholder */}
              {/* <Typewriter words={typewriterWords} loop={true} /> */}
              <span>{mood.tagline}</span>
            </h1>
            <div className="mood-selector">
              <label htmlFor="mood-select">Mood:</label>
              <select
                id="mood-select"
                value={mood.label}
                onChange={e => setMood(moods.find(m => m.label === e.target.value))}
              >
                {moods.map(m => (
                  <option key={m.label} value={m.label}>{m.label}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Or enter your mood..."
                value={customMood}
                onChange={handleCustomMood}
                style={{ marginLeft: '0.5rem', borderRadius: '1rem', padding: '0.3rem 1rem', border: '1px solid #df582e' }}
              />
            </div>
            <p>Brew or order a perfect coffee based on your mood anywhere</p>
            <a href="#" className="btn modern-btn">
              <span>Shop Now</span>
              <i className="bx bx-up-arrow-alt"></i>
            </a>
            {/* Coffee recommendation box */}
            <div className="coffee-recommend-box">
              <h3>Best Coffee for "{customMood || mood.label}"</h3>
              <div className="coffee-recommend-content">
                <img src={bestCoffee.image} alt={bestCoffee.title} />
                <div>
                  <h4>{bestCoffee.title}</h4>
                  <span>{bestCoffee.price}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home-img-anim">
            <img src={mood.img} alt="home-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;