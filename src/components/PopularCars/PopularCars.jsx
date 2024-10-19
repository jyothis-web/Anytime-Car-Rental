import { Link } from "react-router-dom";
import carData from "../../data/car.json";
import "./Popularcars.css";
const PopularCars = () => {
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
              <div className="d-flex align-items-center justify-content-center justify-content-lg-end popular-categories">
                {/* Categories Dropdown */}
                <div className="dropdown dropdown-filter">
                  <button
                    className="btn btn-dropdown dropdown-toggle m-0"
                    id="dropdownCategory1"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Categories</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownCategory1"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Sedan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SUVs
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Coupes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hatchbacks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Trucks
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Minivan
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sport
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cross-over
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Fuel Type Dropdown */}
                <div className="dropdown dropdown-filter">
                  <button
                    className="btn btn-dropdown dropdown-toggle m-0"
                    id="dropdownFuelType"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Fuel Type</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownFuelType"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Plug-in Hybrid (PHEV)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hybrid (HEV)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Electric Vehicle (EV)
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Diesel
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Gasoline/Petrol
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Hydrogen
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Review/Rating Dropdown */}
                <div className="dropdown dropdown-filter">
                  <button
                    className="btn btn-dropdown dropdown-toggle m-0"
                    id="dropdownReviewRating"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Review / Rating</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownReviewRating"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Newest
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Oldest
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Price Range Dropdown */}
                <div className="dropdown dropdown-filter">
                  <button
                    className="btn btn-dropdown dropdown-toggle m-0"
                    id="dropdownPriceRange"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span>Price range</span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-light"
                    aria-labelledby="dropdownPriceRange"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        $10 - $100
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $100 - $1,000
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        $1,000 - $10,000
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="block-flights wow fadeInUp">
            <div className="box-swiper mt-30">
              <div className="car-list-container">
                {carData.map((car) => (
                  <div key={car.id} className="car-card">
                    <div className="car-image">
                      <a href={car.detailsUrl}>
                        <img src={car.image} alt={car.model} />
                      </a>
                    </div>
                    <div className="car-details">
                      <div className="card-rating">
                        <span className="rating">
                          <i className="fa fa-star"></i>{" "}
                          {/* Star icon for rating */}
                          {car.rating.value}
                          <span className="text-sm-medium neutral-500">
                            ({car.rating.reviews} reviews)
                          </span>
                        </span>
                      </div>
                      <div className="card-title">
                        <a
                          href={car.detailsUrl}
                          className="heading-6 neutral-1000"
                        >
                          {car.model}
                        </a>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "20px",
                          marginTop: "15px",
                        }}
                      >
                        <div className="card-specs">
                          <p className="card-miles text-md-medium">
                            <i
                              className="fa fa-tachometer-alt"
                              aria-hidden="true"
                            ></i>
                            {car.mileage}
                          </p>
                          <p className="card-gear text-md-medium">
                            <i className="fa fa-cog" aria-hidden="true"></i>
                            {car.gear}
                          </p>
                        </div>
                        <div className="card-specs">
                          <p className="card-fuel text-md-medium">
                            <i
                              className="fa fa-gas-pump"
                              aria-hidden="true"
                            ></i>
                            {car.fuel}
                          </p>
                          <p className="card-seat text-md-medium">
                            <i
                              className="fa fa-user-friends"
                              aria-hidden="true"
                            ></i>
                            {car.seats} seats
                          </p>
                        </div>
                      </div>
                      <div className="card-price">
                        <p className="text-md-medium neutral-500">From</p>
                        <h6 className="heading-6 neutral-1000">
                          {car.currency}
                          {car.price}
                        </h6>
                      </div>
                      <Link to="/CarDetilPage">
                        <div className="card-button">
                          <div className="btn btn-primary">
                            Book Now
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
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

export default PopularCars;
