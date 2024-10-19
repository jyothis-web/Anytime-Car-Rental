import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const testimonialsData = [
  {
    id: 1,
    title: "Fast and Easy to Use",
    description:
      "I’ve used many car rental platforms before, but Carento’s booking system is hands down the best! The process is so smooth and straightforward.",
    author: "Sophia Moore",
    location: "New York",
    image: "assets/imgs/testimonials/testimonials-1/author-1.png",
    rating: 5,
  },
  {
    id: 2,
    title: "Super Convenient",
    description:
      "The booking system on this site is top-notch. Everything is laid out clearly, and there are multiple payment options, which makes things super convenient.",
    author: "Atend John",
    location: "Tokyo",
    image: "assets/imgs/testimonials/testimonials-1/author-2.png",
    rating: 5,
  },
  {
    id: 3,
    title: "Great Features and Process",
    description:
      "I was impressed by the range of features available when booking. The calendar tool for selecting dates was especially useful, and I appreciated the live availability feature.",
    author: "Sara Mohamed",
    location: "Jakarta",
    image: "assets/imgs/testimonials/testimonials-1/author-3.png",
    rating: 5,
  },
];

const Testimonials = () => {
  const sliderRef = React.useRef(null); // Reference to slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1444,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div>
        <section className="section-box box-flights background-body">
          <div className="container">
            {/* Vehicle cards */}
            <div className="block-flights wow fadeInUp">
              <div className="box-swiper mt-30">
                <Slider {...settings} ref={sliderRef}>
                  {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} >
                      <div className="card-testimonial background-card">
                        <div className="card-info">
                          <p className="text-xl-bold card-title neutral-1000">
                            {testimonial.title}
                          </p>
                          <p className="text-md-regular neutral-500">
                            {testimonial.description}
                          </p>
                        </div>
                        <div className="card-top pt-20 border-0 mb-0">
                          <div className="card-author">
                            <div className="card-image">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                              />
                            </div>
                            <div className="card-info">
                              <p className="text-lg-bold neutral-1000">
                                {testimonial.author}
                              </p>
                              <p className="text-md-regular neutral-1000">
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                          <div className="card-rate">
                            {[...Array(testimonial.rating)].map((_, index) => (
                              <img
                                key={index}
                                className="background-brand-2 p-1"
                                src="assets/imgs/template/icons/star-black.svg"
                                alt="star"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
