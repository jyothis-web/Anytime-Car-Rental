import React from "react";
import cars from "../../data/car.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const SearchedVehicles = () => {
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
      <section className="section-box box-flights background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-9 wow fadeInUp">
              <h3 className="title-svg neutral-1000 mb-5">
                Most Searched Vehicles
              </h3>
              <p className="text-lg-medium text-bold neutral-500">
                The world&apos;s leading car brands
              </p>
            </div>
            <div className="col-md-3 position-relative mb-30 wow fadeInUp">
              <div className="box-button-slider box-button-slider-team justify-content-end">
                <button
                  className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2"
                  onClick={() => sliderRef.current.slickPrev()} // Navigate to the previous slide
                ></button>
                <button
                  className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2"
                  onClick={() => sliderRef.current.slickNext()} // Navigate to the next slide
                ></button>
              </div>
            </div>
          </div>

          {/* Vehicle cards */}
          <div className="block-flights wow fadeInUp">
            <div className="box-swiper mt-30">
              <Slider {...settings} ref={sliderRef}>
                {cars.map((car) => (
                  <div key={car.id}>
                    <div style={{marginRight:"20px"}} className="card-journey-small background-card hover-up">
                      <div className="">
                        <div>
                          <img src={car.image} alt={car.model} />
                        </div>
                      </div>
                      <div className="card-info">
                        <div className="card-rating">
                          <div className="card-right">
                            <span className="rating">
                              {/* {car.rating.value} */}
                              <span className="text-sm-medium neutral-500">
                                {/* ({car.rating.reviews} ) */}
                              </span>
                            </span>
                          </div>
                        </div>
                        <div className="card-title">
                          <div
                            className="heading-6 neutral-1000"
                          >
                            {car.model}
                          </div>
                        </div>
                        <div className="card-program">
                          <div className="card-location">
                            <p className="text-location text-md-medium neutral-500">
                              {car.location}
                            </p>
                          </div>
                          <div className="card-facilities">
                            <p className="card-miles text-md-medium">
                              {car.mileage}
                            </p>
                            <p className="card-gear text-md-medium">
                              {car.gear}
                            </p>
                            <p className="card-fuel text-md-medium">
                              {car.fuel}
                            </p>
                            <p className="card-seat text-md-medium">
                              {car.seats}seats
                            </p>
                          </div>
                          <div className="endtime">
                            <div className="card-price">
                              <p className="text-md-medium neutral-500 me-2">
                                From
                              </p>
                              <h6 className="heading-6 neutral-1000">
                                {car.price}
                              </h6>
                            </div>
                            <div className="card-button">
                            <Link to={`/Anytime-Rent-Car/${car._id}/${car.brandModel.replace(/\s+/g, '-')}`}>
                              <div className="btn btn-gray">
                              More Info
                              </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <a
              className="btn btn-brand-2 text-nowrap wow fadeInUp"
              href="cars-list-1.html"
            >
              <svg
                className="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={18}
                viewBox="0 0 19 18"
                fill="none"
              >
                <g clipPath="url(#clip0_117_4717)">
                  <path
                    d="M4.4024 14.0977C1.60418 11.2899 1.60418 6.71576 4.4024 3.90794L5.89511 5.40064V0.90332H1.39779L3.13528 2.64081C-0.378102 6.1494 -0.378102 11.8562 3.13528 15.3696C5.35275 17.5823 8.43896 18.403 11.2996 17.8175V15.9648C8.91413 16.584 6.26949 15.9648 4.4024 14.0977Z"
                    fill="#101010"
                  />
                  <path
                    d="M15.864 2.64036C13.6465 0.418093 10.5603 -0.402657 7.69971 0.182907V2.03559C10.0852 1.41643 12.7346 2.04519 14.5969 3.90748C17.4047 6.71531 17.4047 11.2894 14.5969 14.0973L13.1042 12.6045V17.1067H17.6063L15.8688 15.3692C19.3774 11.8558 19.3774 6.14894 15.864 2.64036Z"
                    fill="#101010"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_4717">
                    <rect
                      width={18}
                      height={18}
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              Load More Cars
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchedVehicles;
