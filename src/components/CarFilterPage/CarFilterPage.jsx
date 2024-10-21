import Navbar from "../Navbar/Navbar";
import "./CarFilter.css";
import carData from "../../data/car.json";
import { useState } from "react";

const CarFilterPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <>
        <Navbar />
        {/* offCanvas Sidebar */}
        <main className="main">
          {/* prettier-ignore */}
          {/* page header 2 */}
          <div className="page-header-2 pt-30 background-body">
            <div className="custom-container position-relative mx-auto">
              <div className="bg-overlay rounded-12 overflow-hidden">
                <img
                  className="w-100 h-100 img-fluid img-banner"
                  src="assets/imgs/page-header/banner6.png"
                  alt="Carento"
                />
              </div>
              <div className="container position-absolute z-1 top-50 start-50 pb-70 translate-middle text-center">
                <span className="text-sm-bold bg-2 px-4 py-3 rounded-12">
                  Find cars for sale and for rent near you
                </span>
                <h2 className="text-white mt-4">Find Your Perfect Car</h2>
                <span className="text-white text-lg-medium">
                  Search and find your best car rental with easy way
                </span>
              </div>
            </div>
          </div>
          {/* search 1 */}

          {/* cars-listing-1 */}
          <section className="section-box pt-50 background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-md-9 mb-30 wow fadeInUp">
                  <h4 className="title-svg neutral-1000 mb-15">
                    Our Vehicle Fleet
                  </h4>
                  <p className="text-lg-medium text-bold neutral-500">
                    Turning dreams into reality with versatile vehicles.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="box-section block-content-tourlist background-body">
            <div className="container">
              <div className="box-content-main pt-20">
                <div className="content-right">
                  <div className="box-filters mb-25 pb-5 border-bottom border-1">
                    <div className="row align-items-center">
                      <div className="col-xl-4 col-md-4 mb-10 text-lg-start text-center">
                        <div className="box-view-type">
                          <span className="text-sm-bold neutral-500 number-found">
                            64 items found
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-8 col-md-8 mb-10 text-lg-end text-center">
                        <div className="box-item-sort">
                          <div className="item-sort border-1">
                            <span className="text-xs-medium neutral-500 mr-5">
                              Sort by:
                            </span>
                            <div className="dropdown dropdown-sort border-1-right">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownSort"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <span>Most Viewed</span>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-light m-0"
                                aria-labelledby="dropdownSort"
                              >
                                <li>
                                  <a className="dropdown-item active" href="#">
                                    Most Viewed
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Recently search
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Most popular
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    Top rated
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-grid-tours wow fadeIn">
                    <div className="row">
                      {carData.map((car, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                          <div className="card-journey-small background-card hover-up">
                            <div className="card-image">
                              <div>
                                <img
                                  src={car.image}
                                  alt={car.model}
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                            </div>
                            <div className="card-info p-2 pt-10">
                              <div className="card-rating">
                                <div className="card-left" />
                                <div className="card-right">
                                  <span className="rating text-xs-medium rounded-pill">
                                    {car.rating.value}{" "}
                                    <span className="text-xs-medium neutral-500">
                                      ({car.rating.reviews} reviews)
                                    </span>
                                  </span>
                                </div>
                              </div>
                              <div className="card-title">
                                <div className="text-lg-bold neutral-1000 text-nowrap">
                                  {car.model}
                                </div>
                              </div>
                              <div className="card-program">
                                <div className="card-location">
                                  <p className="text-location text-sm-medium neutral-500">
                                    {car.location}
                                  </p>
                                </div>
                                <div className="card-facitlities">
                                  <p className="card-miles ">
                                    <i className="fas fa-road"></i> {car.miles}
                                  </p>
                                  <p className="card-gear ">
                                    <i className="fas fa-cogs"></i> {car.gear}
                                  </p>
                                  <p className="card-fuel ">
                                    <i className="fas fa-gas-pump"></i>{" "}
                                    {car.fuel}
                                  </p>
                                  <p className="card-seat ">
                                    <i className="fas fa-users"></i> {car.seats}{" "}
                                    seats
                                  </p>
                                </div>
                                <div className="endtime">
                                  <div className="card-price">
                                    <h6 className="text-lg-bold neutral-1000">
                                      ${car.price}
                                    </h6>
                                    <p className="text-md-medium neutral-500">
                                      / day
                                    </p>
                                  </div>
                                  <div className="card-button">
                                    <a
                                      className="btn btn-gray"
                                      href="cars-details-1.html"
                                    >
                                      Book Now
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.00016 1.33325L1.3335 5.99992M1.3335 5.99992L6.00016 10.6666M1.3335 5.99992H10.6668"
                                stroke=""
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">
                            <svg
                              width={12}
                              height={12}
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.99967 10.6666L10.6663 5.99992L5.99968 1.33325M10.6663 5.99992L1.33301 5.99992"
                                stroke=""
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav> */}
                </div>
                <div className="content-left order-lg-first">
                  <div className="sidebar-left border-1 background-body">
                    <div
                   
                      className="filter-button" // Styling for the button
                      onClick={toggleFilters}
                    >
                      {isOpen ? "Hide Filters" : "Show Filters"}
                    </div>

                    <div
                      className={`box-filters-sidebar ${isOpen ? "open" : ""}`}
                    >
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Filter Price
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <div className="pt-20">
                            <div className="box-slider-range">
                              <div id="slider-range" />
                              <div className="box-value-price">
                                <span className="text-md-medium neutral-1000">
                                  $0
                                </span>
                                <span className="text-md-medium neutral-1000">
                                  $500
                                </span>
                              </div>
                              <input className="value-money" type="hidden" />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between pt-20 border-top">
                          <a href="#" className="d-flex align-items-center">
                            <div className="background-100 icon-shape p-1 rounded-1 me-2">
                              <svg
                                className=""
                                xmlns="http://www.w3.org/2000/svg"
                                width={9}
                                height={9}
                                viewBox="0 0 9 9"
                                fill="none"
                              >
                                <line
                                  x1="1.20074"
                                  y1="1.5141"
                                  x2="7.59837"
                                  y2="7.91174"
                                  stroke="black"
                                  strokeWidth="0.904762"
                                />
                                <line
                                  x1="1.01337"
                                  y1="7.91156"
                                  x2="7.411"
                                  y2="1.51393"
                                  stroke="black"
                                  strokeWidth="0.904762"
                                />
                              </svg>
                            </div>
                            <span className="text-sm-medium neutral-1000">
                              Clear
                            </span>
                          </a>
                          <a href="#" className="btn btn-primary px-3 py-2">
                            <img
                              src="assets/imgs/template/icons/user.svg"
                              alt="Carento"
                            />
                            Apply
                          </a>
                        </div>
                      </div>

                      {/* Car Type Filter */}
                      <div className="block-filter border-1 mt-3">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Car Type
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            {/* List items for car types */}
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">All </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">198</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">SUV </span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">198</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Fuel Type Filter */}
                      <div className="block-filter border-1 mt-3">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Fuel Type
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">All</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">32</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">Petrol</span>
                                <span className="checkmark" />
                              </label>
                              <span className="number-item">32</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}

          {/*Vendors Scripts*/}
          {/*Other*/}
          {/* Count down*/}
          {/*Custom script for this template*/}
        </main>
      </>
    </div>
  );
};

export default CarFilterPage;
