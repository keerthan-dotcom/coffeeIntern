import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  const reviews = [
    {
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Jonas Blue",
      title: "Stunning subtle and smooth flavour",
      description: "The taste of coffee can vary depending on the type of bean, roast level, and brewing method used. Jonas loved the smooth, subtle notes in every cup!"
    },
    {
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Eden",
      title: "Rich and memorable experience",
      description: "From the first sip, Eden was hooked. The rich aroma and creamy texture made every visit memorable. Highly recommended for coffee lovers!"
    },
    {
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Charlie",
      title: "Perfect start to my day",
      description: "Charlie's mornings are now incomplete without a cup from here. The perfect balance of strength and flavor gives the best start to any day."
    }
  ];

  const [modalReview, setModalReview] = useState(null);

  return (
    <section className="animate-section" id="review">
      <div className="section-content">
        <div className="review container">
          <div className="heading">
            <h2>What Our Customers Say</h2>
          </div>
          <Swiper
            spaceBetween={40}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 2 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div
                  className="review-box modern-product-box"
                  tabIndex={0}
                  onClick={() => setModalReview(review)}
                  onKeyDown={e => { if (e.key === 'Enter') setModalReview(review); }}
                  style={{ cursor: 'pointer', minHeight: 380, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}
                >
                  <div style={{ width: 120, height: 120, borderRadius: '50%', overflow: 'hidden', marginBottom: 24, boxShadow: '0 4px 16px 0 rgba(139, 89, 62, 0.13)', border: '4px solid #b9935a', background: '#fff7e6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={review.image} alt={review.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  </div>
                  <h2 style={{ background: 'linear-gradient(135deg, #b9935a 0%, #7c5e3c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700, fontSize: '1.3rem', marginBottom: 6, fontFamily: 'var(--heading-font)', textShadow: '0 2px 4px rgba(0,0,0,0.08)' }}>{review.name}</h2>
                  <span style={{ color: '#b9935a', fontWeight: 600, letterSpacing: 0.5, display: 'block', marginBottom: 12, fontFamily: 'var(--primary-font)' }}>{review.title}</span>
                  <p className="team-desc" style={{ color: '#7c5e3c', fontSize: '0.98rem', marginBottom: 12, minHeight: '2.2em', textAlign: 'center', fontStyle: 'italic' }}>{review.description.slice(0, 80)}{review.description.length > 80 ? '...' : ''}</p>
                  <button
                    className="modern-btn"
                    style={{ marginTop: 'auto', fontSize: '1rem', padding: '0.5rem 1.2rem', borderRadius: '1.2rem', fontWeight: 600, letterSpacing: 0.5 }}
                    onClick={e => { e.stopPropagation(); setModalReview(review); }}
                  >
                    Read More
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {modalReview && (
            <div className="product-modal-overlay" onClick={() => setModalReview(null)}>
              <div className="product-modal" onClick={e => e.stopPropagation()}>
                <img src={modalReview.image} alt={modalReview.name} />
                <h2>{modalReview.name}</h2>
                <span>{modalReview.title}</span>
                <p style={{ marginTop: '1rem', color: '#7c5e3c', fontSize: '1.08rem', fontStyle: 'italic' }}>{modalReview.description}</p>
                <button className="close-modal-btn" onClick={() => setModalReview(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Review;