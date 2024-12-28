import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/car/CarSlice";
import CarPriceDisplay from "../CarFilterPage/CarPriceDisplay";
import { Link } from "react-router-dom";

const FeaturedCars = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Slice the first 8 cars
  const carsToShow = products.slice(0, 8);

  return (
    <div>
      <section className="section-box  background-body">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-md-8">
              <h3 className="neutral-1000">Featured Listings</h3>
              <p className="text-lg-medium neutral-500">
                Find the perfect ride for any occasion
              </p>
            </div>
            <div className="col-md-4 mt-md-0 mt-4">
              <div className="d-flex justify-content-end">
                <Link to="/select-car-in-qatar">
                <div className="btn btn-primary">
                  View More
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15L15 8L8 1M15 8L1 8"
                      stroke="#fff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-30 wow fadeInUp">
            {carsToShow.map((car, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="card-journey-small background-card hover-up">
                  <div style={{minHeight:"190px"}}>
                    {car.carImage1 && (
                      <img
                        src={`${
                          car.carImage1.imagePath
                        }`} // Corrected path reference
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedCars;
