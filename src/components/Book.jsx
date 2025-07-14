import { useState } from 'react';

const Book = () => {
  const [formData, setFormData] = useState({
    phone: '',
    people: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking data:', formData);
    // Handle form submission here
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
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <i className='bx bx-phone-call'></i>
            <input 
              type="tel" 
              name="phone"
              placeholder="Your Number" 
              value={formData.phone}
              onChange={handleInputChange}
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
            />
          </div>
          <button type="submit" className="book-btn">Book Table</button>
        </form>
        <p>We will contact you to confirm the booking</p>
      </div>
    </section>
  );
};

export default Book;