import { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    phone: '',
    people: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.phone.match(/^\d{10,}$/) || !formData.people || parseInt(formData.people) < 1) {
      setPopupMsg('Please enter a valid phone number and number of people.');
      setShowPopup(true);
      return;
    }
    setPopupMsg(`Your table for ${formData.people} ${parseInt(formData.people) === 1 ? 'person' : 'people'} is confirmed!`);
    setShowPopup(true);
    setFormData({ phone: '', people: '' });
  };

  return (
    <section className="book container" id="book">
      <img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="book" className="book-img" />
      <div className="book-overlay"></div>
      <div className="book-data">
        <h2>
          Let's book a table <br />
          For you
        </h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="input-box">
            <i className='bx bx-phone-call'></i>
            <input 
              type="tel" 
              name="phone"
              placeholder="Your Number" 
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-box">
            <i className='bx bx-user'></i>
            <input 
              type="number" 
              name="people"
              placeholder="People" 
              value={formData.people}
              onChange={handleInputChange}
              min="1"
              required
            />
          </div>
          <button type="submit" className="book-btn">Book Table</button>
        </form>
        <p>We will contact you to confirm the booking</p>
      </div>
      {showPopup && (
        <div className="book-popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="book-popup" onClick={e => e.stopPropagation()}>
            <span>{popupMsg}</span>
            <button className="close-modal-btn" onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Book;