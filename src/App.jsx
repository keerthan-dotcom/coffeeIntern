import { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Products from './components/Products';
import Team from './components/Team';
import Review from './components/Review';
import Book from './components/Book';
import Footer from './components/Footer';
import ScrollReveal from 'scrollreveal';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: 'bottom',
      distance: '60px',
      duration: 2500,
      delay: 400
    });

    // Add reveal animations to elements
    sr.reveal('.home-text', {origin: 'left'});
    sr.reveal('.home img', {origin: 'right'});
    sr.reveal('.ser-box, .product-box, .team-box, .review-box', {
      interval: 100
    });
    sr.reveal('.heading', {
      delay: 200
    });

    // Add scroll animation to sections
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Add smooth scroll behavior to navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="section-container">
        <Home />
        <Services />
        <Products />
        <Team />
        <Review />
      </div>
      <Book />
      <Footer />
    </div>
  );
}

export default App;