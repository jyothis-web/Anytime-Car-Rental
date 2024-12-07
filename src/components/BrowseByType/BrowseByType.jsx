import { Link, useNavigate } from "react-router-dom";
const BrowseByType = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/CarFilterPage/${category}`);
  };

  return (
    <div>
      <section className="section-box background-body py-96">
        <div className="container">
          <div className="row align-items-end mb-40">
            <div className="col-md-8">
              <h3 className="neutral-1000 wow fadeInUp">Browse by Type</h3>
              <p className="text-xl-medium neutral-500 wow fadeInUp">
                Find the perfect ride for any occasion
              </p>
            </div>
            <div className="col-md-4">
              <div className="d-flex justify-content-md-end mt-md-0 mt-4">
                <Link to="/CarFilterPage">
                  <div className="btn btn-brand-2 text-nowrap wow fadeInUp">
                    View More&nbsp; &nbsp;
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
          <div className="box-list-populars">
            <div className="row">
              <div className="custom-col">
                <div
                  className="card-popular background-card hover-up wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div
                    className=""
                    onClick={() => handleCategoryClick("Sedan")}
                  >
                    <div className="card-title" style={{ cursor: "pointer" }}>
                      <img
                        src="assets/imgs/categories/categories-1/car-3.avif"
                        alt="Sedan Car - Anytime Car Rental"
                        title="Sedan Car available at Anytime Car Rental"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <div className="meta-links">
                        <div
                          className="card-title"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleCategoryClick("Sedan")}
                        >
                          {" "}
                          Sedan
                        </div>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="card-button"
                        onClick={() => handleCategoryClick("Sedan")}
                      >
                        <div className="arrow">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div
                  className="card-popular background-card hover-up wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="">
                    <div
                      style={{ cursor: "pointer" }}
                      className="card-title"
                      onClick={() => handleCategoryClick("Mini SUV")}
                    >
                      <img
                        src="assets/imgs/categories/categories-1/car-2.avif"
                        alt="Mini suv Car - Anytime Car Rental"
                        title="Mini suv Car available at Anytime Car Rental"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <div
                        className="meta-links"
                        onClick={() => handleCategoryClick("Mini SUV")}
                      >
                        <div
                          style={{ cursor: "pointer" }}
                          className="card-title"
                        >
                          Mini SUV
                        </div>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="card-button"
                        onClick={() => handleCategoryClick("Mini SUV")}
                      >
                        <div className="arrow">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div
                  className="card-popular background-card hover-up wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="" onClick={() => handleCategoryClick("SUV")}>
                    <div className="card-title" style={{ cursor: "pointer" }}>
                      <img
                        src="assets/imgs/categories/categories-1/car-1.avif"
                        alt="SUV Car - Anytime Car Rental"
                        title="SUV Car available at Anytime Car Rental"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <div className="meta-links">
                        <div
                          style={{ cursor: "pointer" }}
                          className="card-title"
                          onClick={() => handleCategoryClick("SUV")}
                        >
                          {" "}
                          SUV
                        </div>
                      </div>
                      <div
                        style={{ cursor: "pointer" }}
                        className="card-button"
                        onClick={() => handleCategoryClick("SUV")}
                      >
                        <div className="arrow">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div
                  className="card-popular background-card hover-up wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="">
                    <div
                      className="card-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategoryClick("Luxury")}
                    >
                      <img
                        src="assets/imgs/categories/categories-1/Land.avif"
                        alt="Luxury Car - Anytime Car Rental"
                        title="Luxury Car available at Anytime Car Rental"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <div
                        className="meta-links"
                        onClick={() => handleCategoryClick("Luxury")}
                      >
                        <div
                          className="card-title"
                          style={{ cursor: "pointer" }}
                        >
                          Luxury
                        </div>
                      </div>
                      <div
                        className="card-button"
                        onClick={() => handleCategoryClick("Luxury")}
                      >
                        <div className="arrow">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div
                  className="card-popular background-card hover-up wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="">
                    <div
                      className="card-title"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleCategoryClick("Van")}
                    >
                      <img
                        src="assets/imgs/categories/categories-1/van.avif"
                        alt="Van - Anytime Car Rental"
                        title="Van available at Anytime Car Rental"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-meta">
                      <div
                        className="meta-links"
                        onClick={() => handleCategoryClick("Van")}
                      >
                        <div
                          className="card-title"
                          style={{ cursor: "pointer" }}
                        >
                          Van
                        </div>
                      </div>
                      <div
                        className="card-button"
                        onClick={() => handleCategoryClick("Van")}
                      >
                        <div className="arrow">
                          <svg
                            width={10}
                            height={10}
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.00011 9.08347L9.08347 5.00011L5.00011 0.916748M9.08347 5.00011L0.916748 5.00011"
                              stroke="#000"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrowseByType;
