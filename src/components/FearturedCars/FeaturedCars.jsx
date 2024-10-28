import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/car/CarSlice";

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
      <section className="section-box box-flights background-body">
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
                <a className="btn btn-primary" href="cars-list-1.html">
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
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-30 wow fadeInUp">
            {carsToShow.map((car, index) => (
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
                      <div className="text-lg-bold neutral-1000 text-nowrap">
                        {car.brandModel}
                      </div>
                    </div>
                    <div className="card-program">
                      <div className="card-location">
                        <p className="text-location text-sm-medium neutral-500">
                          {car.category}
                        </p>
                      </div>
                      <div className="card-facitlities">
                        <p className="card-miles ">
                           {car. mileage}
                        </p>
                        <p className="card-gear ">
                          {car.transmission}
                        </p>
                        <p className="card-fuel ">
                       {car.fuel}
                        </p>
                        <p className="card-seat ">
                          {car.seat} seats
                        </p>
                      </div>
                      <div className="endtime">
                        <div className="card-price">
                          <h6 className="text-lg-bold neutral-1000">
                            ${car.dailyRent}
                          </h6>
                          <p className="text-md-medium neutral-500" />
                        </div>
                        <div className="card-button">
                          <a
                            className="btn btn-gray"
                            href="cars-details-2.html"
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
      </section>
    </div>
  );
};

export default FeaturedCars;
