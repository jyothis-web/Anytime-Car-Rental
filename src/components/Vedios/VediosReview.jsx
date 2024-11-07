import Slider from "react-slick";
import "./review.css";
import img1 from "/assets/imgs/blog/blog-grid/img-1.avif";
import img2 from "/assets/imgs/blog/blog-grid/img-2.avif";
import img3 from "/assets/imgs/blog/blog-grid/img-3.avif";
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
      title: "The all-new Toyota Land Cruiser",
      description: "A story of inheritance and evolution",
      imgSrc: img1,
      link: "https://www.toyotaqatar.com/vehicle/land-cruiser/overview",
    },
    {
      title: "Kia Cerato - Cutting Edge Technology",
      description: "Cerato goes far beyond just style and comfort",
      imgSrc: img2,
      link: "https://www.kiaqatar.com/vehicles/cerato/",
    },
    {
      title: "All-New Geely Emgrand",
      description: "Be in style with Geely’s first BMA-based sedan",
      imgSrc: img3,
      link: "https://geely.com.qa/emgrand/",
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
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "300px",
                    objectFit: "cover",
                  }}
                />
                <div className="overlay-content position-absolute z-1 p-5">
                  <span className="text-white text-md-bold">CAR REVIEW</span>
                  <h3 className=" text-white">{review.title}</h3>
                  <p
                    className="text-lg-medium text-white"
                    dangerouslySetInnerHTML={{ __html: review.description }}
                  ></p>
                 <a href={review.link} className="middlebanner-button-link" target="_blank" rel="noopener noreferrer">
                    <div className="btn btn-primary mt-30">
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
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
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
