import Slider from "react-slick";
import "./review.css";
import img1 from "/assets/imgs/blog/blog-grid/img-1.png";
import img2 from "/assets/imgs/blog/blog-grid/img-2.png";
import img3 from "/assets/imgs/blog/blog-grid/img-1-1.png";
import { useRef } from "react";

const VideosReview = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    dots: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay duration in milliseconds (3000ms = 3 seconds)
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  const reviews = [
    {
      title: "Hyundai Tucson Plug-In Hybrid 2025 review",
      description:
        "The Tucson Plug-in Hybrid is easy to drive<br />and provides a sufficient all-electric range.",
      imgSrc: img1,
    },
    {
      title: "2025 Mazda CX-50 Review and news",
      description:
        "The Mazda CX-50 offers a sporty design and impressive performance.",
      imgSrc: img2,
    },
    {
      title: "2025 Ford Explorer Review",
      description:
        "The Ford Explorer combines performance with advanced technology.",
      imgSrc: img3,
    },
  ];

  // Function to navigate to the next slide
  const goToNext = () => {
    sliderRef.current.slickNext(); // Go to the next slide
  };

  // Function to navigate to the previous slide
  const goToPrev = () => {
    sliderRef.current.slickPrev(); // Go to the previous slide
  };

  return (
    <div>
      <section className="background-body pt-80 pb-50">
        <div className="container">
          {/* Custom navigation buttons */}
          

          <Slider {...settings} ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={index} className="item-slide">
                <img
                  src={review.imgSrc}
                  alt={review.title}
                  className="img-fluid rounded-12"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content position-absolute z-1 p-5">
                  <span className="text-primary text-md-bold">CAR REVIEW</span>
                  <h3 className="mt-20 mb-20 text-white">{review.title}</h3>
                  <p
                    className="text-lg-medium text-white"
                    dangerouslySetInnerHTML={{ __html: review.description }}
                  ></p>
                  <a href="#" className="btn btn-primary mt-30">
                    View Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={25}
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M12 19.5L19 12.5L12 5.5M19 12.5L5 12.5"
                        stroke="#101010"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
                <div className="arrows-container">
            <button className="left-arrow" onClick={goToPrev}>
              <i className="fa fa-chevron-left" aria-hidden="true"></i>
            </button>
            <button className="right-arrow" onClick={goToNext}>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default VideosReview;
