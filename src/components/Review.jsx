import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Review = () => {
  const reviews = [
    {
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Jonas Blue",
      title: "The taste of coffee Stunning subtle and smooth flavour",
      description: "The taste of coffee can vary depending on the type of bean roast level and brewing method used"
    },
    {
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Eden",
      title: "The taste of coffee Stunning subtle and smooth flavour",
      description: "The taste of coffee can vary depending on the type of bean roast level and brewing method used"
    },
    {
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Charlie",
      title: "The taste of coffee Stunning subtle and smooth flavour",
      description: "The taste of coffee can vary depending on the type of bean roast level and brewing method used"
    }
  ];

  return (
    <section className="animate-section" id="review">
      <div className="section-content">
        <div className="review container">
          <div className="heading">
            <h2>Customer's reviews</h2>
          </div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="review-box">
                  <img src={review.image} alt={review.name} />
                  <h2>{review.name}</h2>
                  <span>{review.title}</span>
                  <p>{review.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Review;