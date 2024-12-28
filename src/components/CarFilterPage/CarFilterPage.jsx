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
import { Link, useParams } from "react-router-dom";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Loading from "../../pages/Loading";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";
import img from "../../images/banner6.png";
const CarFilterPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { products = [] } = useSelector((state) => state.car);
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);
  // Consolidated filter state

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Start loading
      dispatch(fetchProducts());
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

  useEffect(() => {
    if (category) {
      // If category is present in the URL, filter cars based on it
      const filteredByCategory = products.filter(
        (car) => car.category === category
      );
      setFilteredCars(filteredByCategory);
    } else {
      // If no category, show all cars
      setFilteredCars(products);
    }
  }, [products, category]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <title>Anytime Qatar | Best Car Rental Services in Qatar</title>
        <meta
          name="description"
          content="Discover Anytime Qatar's top car rental services, offering luxury cars, airport transfers, and limousine services tailored to your needs. Rent a car for business, travel, or special events across Qatar."
        />

        <meta
          name="keywords"
          content="car rental Qatar, luxury car rental Qatar, best car rental in Qatar, Qatar car hire, airport transfer Qatar, limousine service Qatar, chauffeur service Qatar, affordable car rental Qatar, car hire Doha, rent a car Al Rayyan"
        />

        <link rel="canonical" href={`${import.meta.env.VITE_URL_SEO}select-car-in-qatar`} />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Anytime Qatar | Premium Car Rental Services"
        />
        <meta
          property="og:description"
          content="Elevate your journey with Anytime Qatar's premium car rental, limousine services, and airport transfer solutions. Perfect for all your transportation needs in Qatar."
        />
        <meta
          property="og:url"
          content={`${import.meta.env.VITE_URL_SEO}select-car-in-qatar`}
        />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_URL_SEO}favicon.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anytimeqatar" />
        <meta
          name="twitter:title"
          content="Anytime Qatar | Car Rental & Limousine Services"
        />
        <meta
          name="twitter:description"
          content="Explore Qatar with our fleet of luxury vehicles and top-rated transportation services. Perfect for business, travel, and special events."
        />
        <meta
          name="twitter:image"
          content={`${import.meta.env.VITE_URL_SEO}favicon.png`}
        />
      </Helmet>
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
                  src={img}
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
                    <div className="filter-item">
                      <Link to="/select-car-in-qatar">
                        <RestartAltIcon style={{ marginRight: "8px" }} />
                        Reset
                      </Link>
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
                          <div style={{ minHeight: "210px" }}>
                            {car.carImage1 && (
                              <img
                                src={`${car.carImage1.imagePath}`} // Corrected path reference
                                alt={`Image of ${car.brandModel}`}
                                loading="lazy"
                              />
                            )}
                          </div>
                          <div className="card-info p-4 pt-10">
                            <div className="card-rating">
                              <div className="card-left" />
                            </div>
                            <div className="card-title">
                              <div className="text-lg-bold neutral-1000 text-wrap">
                                {car.brandModel}
                              </div>
                            </div>
                            <div className="card-program">
                              <div className="">
                                <p className="text-location text-sm-medium neutral-500">
                                  <i
                                    className="fa fa-car"
                                    aria-hidden="true"
                                    style={{ marginRight: "8px" }}
                                  ></i>
                                  {car.category}
                                </p>
                                <div
                                  style={{
                                    width: "100%", // 80% width
                                    height: ".5px", // Line height
                                    backgroundColor: "#ccc", // Grey color
                                    margin: "10px auto", // Centered with margin
                                  }}
                                ></div>
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
                                      style={{ marginRight: "8px" }}
                                    ></i>
                                    {car.mileage} Km
                                  </p>
                                  <p className="card-icons ">
                                    <i
                                      className="fa fa-cog"
                                      aria-hidden="true"
                                      style={{ marginRight: "8px" }}
                                    ></i>
                                    {car.transmission}
                                  </p>
                                </div>
                                <div className="card-specs">
                                  <p className="card-icons ">
                                    <i
                                      className="fa fa-gas-pump"
                                      aria-hidden="true"
                                      style={{ marginRight: "8px" }}
                                    ></i>
                                    {car.fuel}
                                  </p>
                                  <p className="card-icons">
                                    <i
                                      className="fa fa-user-friends"
                                      aria-hidden="true"
                                      style={{ marginRight: "8px" }}
                                    ></i>
                                    {car.seat} seats
                                  </p>
                                </div>
                              </div>
                              <div className="button-flex">
                                <CarPriceDisplay car={car} />

                                <Link to={`/Anytime-Rent-Car/${car._id}/${car.brandModel.replace(/\s+/g, '-')}`}>
                                  <div className="card-latest-button">
                                    {" "}
                                    {/* Added classes here */}
                                    More Info
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
        <Footer />
      </>
    </div>
  );
};

export default CarFilterPage;
