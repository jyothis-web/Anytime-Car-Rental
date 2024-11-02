import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/car/CarSlice";
import "./Popularcars.css";
import CarPriceDisplay from "../CarFilterPage/CarPriceDisplay";
import PickUpMessage from "../PickUpMessage/PickUpMessage";
const PopularCars = () => {
  const dispatch = useDispatch();

  const { products = [] } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Slice the first 8 cars
  const carsToShow = products.slice(0, 4);
  return (
    <div>
      <section className="section-box box-flights background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-6 mb-30 text-center text-lg-start">
              <h2 className="neutral-1000">Popular Vehicles</h2>
              <p className="text-xl-medium neutral-500">
                Favorite vehicles based on customer reviews
              </p>
            </div>
            <div className="col-lg-6 mb-30">
              <PickUpMessage />
            </div>
          </div>

          <div className="block-flights wow fadeInUp">
            <div className="box-swiper mt-30">
              <div className="car-list-container">
                {carsToShow.map((car) => (
                  <div key={car._id} className="car-card">
                    <div className="car-image">
                      <Link to={`/CarDetilPage/${car._id}`}>
                        {car.carImage1 && (
                          <img
                            src={`${import.meta.env.VITE_URL}${
                              car.carImage1.imagePath
                            }`} // Corrected path reference
                            alt={`Image of ${car.brandModel}`}
                            loading="lazy"
                          />
                        )}
                      </Link>
                    </div>
                    <div className="car-details">
                      <div className="top-round">
                        <span className="rating text-xs-medium rounded-pill">
                          {car.brand}
                        </span>
                      </div>
                      <div className="card-title">
                        <div className="heading-6 neutral-1000">
                          {car.brandModel}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                          marginTop: "15px",
                        }}
                      >
                        <div className="card-specs">
                          <p className="card-icons ">
                            <i
                              className="fa fa-tachometer-alt"
                              aria-hidden="true"
                            ></i>
                            {car.mileage} Km
                          </p>
                          <p className="card-icons ">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            {car.transmission}
                          </p>
                        </div>
                        <div className="card-specs">
                          <p className="card-icons ">
                            <i
                              className="fa fa-gas-pump"
                              aria-hidden="true"
                            ></i>
                            {car.fuel}
                          </p>
                          <p className="card-icons ">
                            <i
                              className="fa fa-user-friends"
                              aria-hidden="true"
                            ></i>
                            {car.seat} seats
                          </p>
                        </div>
                      </div>
                      <CarPriceDisplay car={car} />
                      <Link to={`/CarDetilPage/${car._id}`}>
                        <div className="card-latest-button padding-popular">
                          {" "}
                          {/* Added classes here */}
                          Book Now
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/CarFilterPage">
              <div className="btn btn-brand-2 text-nowrap wow fadeInUp">
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
                      fill="#fff"
                    />
                    <path
                      d="M15.864 2.64036C13.6465 0.418093 10.5603 -0.402657 7.69971 0.182907V2.03559C10.0852 1.41643 12.7346 2.04519 14.5969 3.90748C17.4047 6.71531 17.4047 11.2894 14.5969 14.0973L13.1042 12.6045V17.1067H17.6063L15.8688 15.3692C19.3774 11.8558 19.3774 6.14894 15.864 2.64036Z"
                      fill="#fff"
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
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PopularCars;
