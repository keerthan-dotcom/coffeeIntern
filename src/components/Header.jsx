import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="nav container">
        <a href="#" className="logo">Q.cafe</a>
        <div className={`navbar ${isMenuOpen ? 'open-menu' : ''}`}>
          <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
          <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
          <a href="#products" className="nav-link" onClick={closeMenu}>Products</a>
          <a href="#team" className="nav-link" onClick={closeMenu}>Team</a>
          <a href="#review" className="nav-link" onClick={closeMenu}>Reviews</a>
        </div>
        <div className="nav-icons">
          <a href="#"><i className="bx bx-user"></i></a>
          <a href="#"><i className="bx bx-shopping-bag"></i></a>
          <div className={`menu-icon ${isMenuOpen ? 'move' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;