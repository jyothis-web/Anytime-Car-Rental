import Navbar from "../Navbar/Navbar";
import "./CarFilter.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/car/CarSlice";
import CarFilterCategory from "./CarFilterCategory";
import CarFilterBrand from "./CarFilterBrand";
import CarFilterPrice from "./CarFilterPrice";
import CarPriceDisplay from "./CarPriceDisplay";
import { Link } from "react-router-dom";
import Loading from "../../pages/Loading";
import Footer from "../Footer/Footer";

const CarFilterPage = () => {
  const dispatch = useDispatch();

  const { products = [] } = useSelector((state) => state.car);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  // Consolidated filter state


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      await dispatch(fetchProducts());
      setLoading(false); // Stop loading when fetch completes
    };
    
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    setFilteredCars(products);
    
  }, [products]);

  // Handle filtering when a category is selected
  const handleFilterChange = (selectedCategories) => {
    if (selectedCategories.length === 0) {
      setFilteredCars(products); // Show all cars if no category selected
    } else {
      const updatedCars = products.filter((car) =>
        selectedCategories.includes(car.category)
      );
      setFilteredCars(updatedCars);
    }
  };

  const handleBrandFilterChange = (selectedBrands) => {
    const filteredByBrand = products.filter(
      (car) => selectedBrands.length === 0 || selectedBrands.includes(car.brand)
    );
    setFilteredCars(filteredByBrand);
  };

  const handlePriceFilterChange = ({ minPrice, maxPrice, priceType }) => {
    const filteredCars = products.filter((car) => {
      let carPrice;

      // Determine which price to use based on the selected type
      if (priceType === "daily") {
        carPrice = car.dailyRent;
      } else if (priceType === "weekly") {
        carPrice = car.weeklyRent;
      } else if (priceType === "monthly") {
        carPrice = car.monthlyRent;
      }

      // Check if the car's price is within the selected range
      return carPrice >= minPrice && carPrice <= maxPrice;
    });

    setFilteredCars(filteredCars);
  };


  if (loading) {
    return <Loading />;
  }


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
                  alt="Anytime car rental"
                />
              </div>
              <div className="container position-absolute z-1 top-50 start-50 pb-70 translate-middle text-center">
                <span className="text-sm-bold bg-6 px-4 py-3 rounded-12">
                  Find a car for rent near you
                </span>
                <h2 className="text-white mt-4">
                  Find your rental car that suits your lifestyle
                </h2>
                <span className="text-white text-lg-medium">
                  Search & get your best car rental with peace of mind
                </span>
              </div>
            </div>
          </div>
          {/* search 1 */}

          {/* cars-listing-1 */}
          <section className="section-box box-flights background-body">
            <div className="container">
              <div className="row align-items-end">
                <div className="col-lg-6 mb-30 text-center text-lg-start">
                  <h2 className="neutral-1000">Select Your Rental Car</h2>
                  <p className="text-xl-medium neutral-500">
                    Favorite vehicles based on customer reviews
                  </p>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="filter-container">
                    <div className="filter-item">
                      <CarFilterPrice
                        onFilterChange={handlePriceFilterChange}
                      />
                    </div>
                    <div className="filter-item">
                      {/* Categories Dropdown */}
                      <CarFilterCategory onFilterChange={handleFilterChange} />
                    </div>
                    <div className="filter-item">
                      {/* Fuel Type Dropdown */}
                      <CarFilterBrand
                        onFilterChange={handleBrandFilterChange}
                      />
                    </div>
                    {/* Add any other filters here */}
                  </div>
                </div>
              </div>

              <div className="block-flights wow fadeInUp">
                <div className="row pt-30 wow fadeInUp">
                  {filteredCars.length === 0 ? ( // Check if filteredCars is empty
                    <div className="no-cars-message">
                      <p>No cars found.</p>{" "}
                      {/* Message displayed when no cars are found */}
                    </div>
                  ) : (
                    filteredCars.map((car, index) => (
                      <div key={index} className="col-lg-3 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="">
                            {car.carImage1 && (
                              <img
                                src={`${import.meta.env.VITE_URL}${
                                  car.carImage1.imagePath
                                }`} // Corrected path reference
                                alt={`Image of ${car.brandModel}`}
                                loading="lazy"
                              />
                            )}
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  {car.rating}{" "}
                                  <span className="text-xs-medium neutral-500">
                                    {car.brand}
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <div className="text-lg-bold neutral-1000 text-wrap">
                                {car.brandModel}
                              </div>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  {car.category}
                                </p>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: "25px",
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
                                    <i
                                      className="fa fa-cog"
                                      aria-hidden="true"
                                    ></i>
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
                                  <p className="card-icons">
                                    <i
                                      className="fa fa-user-friends"
                                      aria-hidden="true"
                                    ></i>
                                    {car.seat} seats
                                  </p>
                                </div>
                              </div>
                              <div className="button-flex">
                              <CarPriceDisplay car={car} />

                                <Link to={`/CarDetilPage/${car._id}`}>
                                  <div className="card-latest-button">
                                    {" "}
                                    {/* Added classes here */}
                                    Book Now
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* <div className="box-swiper mt-30">
                  <div className="car-list-container">
                    {products.map((car) => (
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
                              <p className="card-miles ">
                                <i
                                  className="fa fa-tachometer-alt"
                                  aria-hidden="true"
                                ></i>
                                {car.mileage} Km
                              </p>
                              <p className="card-gear ">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                                {car.transmission}
                              </p>
                            </div>
                            <div className="card-specs">
                              <p className="card-fuel ">
                                <i
                                  className="fa fa-gas-pump"
                                  aria-hidden="true"
                                ></i>
                                {car.fuel}
                              </p>
                              <p className="card-seat ">
                                <i
                                  className="fa fa-user-friends"
                                  aria-hidden="true"
                                ></i>
                                {car.seat} seats
                              </p>
                            </div>
                          </div>
                          <div className="card-price-dropdown">
                            <button
                              className="view-price-button"
                              onClick={() => togglePrices(car._id)}
                            >
                              View Price
                              <span
                                className={`arrow ${
                                  openDropdowns[car._id] ? "up" : "down"
                                }`}
                              >
                                &#9662;
                              </span>
                            </button>

                            {openDropdowns[car._id] && (
                              <div className="price-dropdown">
                                <p className="price-option">
                                  <strong>Daily:</strong> {car.dailyRent}
                                </p>
                                <p className="price-option">
                                  <strong>Weekly:</strong> {car.weeklyRent}
                                </p>
                                <p className="price-option">
                                  <strong>Monthly:</strong> {car.monthlyRent}
                                </p>
                              </div>
                            )}
                          </div>
                          <Link to={`/CarDetilPage/${car._id}`}>
                            <div className="card-button">
                              <div className="btn btn-primary">Book Now</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* Footer */}

          {/*Vendors Scripts*/}
          {/*Other*/}
          {/* Count down*/}
          {/*Custom script for this template*/}
        </main>
        <Footer/>
      </>
    </div>
  );
};

export default CarFilterPage;
