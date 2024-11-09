import { Link } from "react-router-dom";

const MiddleBannners = () => {
  return (
    <div style={{ marginTop: "90px" }}>
      <section className="section-cta-4  position-relative overflow-hidden">
        <div className="bg-shape" />
        <div className="container position-relative z-1">
          <div className="text-center">
            <span className="text-sm-bold bg-white p-3 rounded-12 wow fadeInDown">
              Best Rent a Car Company in Qatar
            </span>
            <h4 className="mt-4 wow fadeInUp">
              Competitive Car Rental &
              <br />
              Limousine Services.
            </h4>
          </div>
          <div className="row mt-60">
            <div className="col-lg-4">
              <div className="bg-white rounded-12 p-5 d-flex flex-column gap-4">
                <span className="icon-shape icon_70 background-6 rounded-circle wow fadeIn">
                  <img
                    className="dark-invert"
                    src="assets/imgs/cta/cta-4/icon-1.svg"
                    alt="Icon representing Anytime Car Rental services"
                    title="Anytime Car Rental Services"
                  />
                </span>
                <h6 className=" wow fadeInUp">
                  Looking for a Car Rental Services?
                </h6>
                <p className="text-md-regular wow fadeInUp">
                Anytime Qatar Rent a Car service embrace the freedom of the open road with our all-inclusive car rental services, offering convenience, flexibility, and a perfect ride for every journey.
                </p>
                <Link to="/CarFilterPage">
                  <div className="btn btn-primary wow fadeInUp">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 19L19 12L12 5M19 12L5 12"
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
            <div className="col-lg-4 text-center wow fadeInUp">
              <div className="bg-white rounded-12 p-5 d-flex flex-column gap-4">
                <span className="icon-shape icon_70 background-6 rounded-circle wow fadeIn">
                  <img
                    className="dark-invert"
                    src="assets/imgs/cta/cta-4/transportation.svg"
                    alt="second Icon representing Anytime Car Rental services"
                    title="Anytime Car Rental Services"
                  />
                </span>
                <h6 className="wow fadeInUp" style={{ textAlign: "left" }}>
                  Looking for a Transportation Services?
                </h6>
                <p
                  className="text-md-regular wow fadeInUp"
                  style={{ textAlign: "left" }}
                >
           Our staff transportation solutions are designed to streamline your operations, boost morale, and increase productivity. Looking for the best transportation facility in Qatar, Anytime Qatar will be the right option.
                </p>
                <Link to="/CarFilterPage">
                  <div className="btn btn-primary wow fadeInUp">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 19L19 12L12 5M19 12L5 12"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>

              <img
                src="assets/imgs/banners/2.avif"
                alt="Suzuki Dzire - Carento Car Rental"
                title="Suzuki Dzire available at Carento Car Rental"
              />
            </div>
            <div className="col-lg-4">
              <div className="bg-white rounded-12 p-5 d-flex flex-column gap-4">
                <span className="icon-shape icon_70 background-6 rounded-circle wow fadeIn">
                  <img
                    className="dark-invert"
                    src="assets/imgs/cta/cta-4/icon-2.svg"
                    alt="Icon representing Anytime Car Rental services"
                    title="Anytime Car Rental Services"
                  />
                </span>
                <h6 className=" wow fadeInUp">
                  Looking for a Limousine Services?
                </h6>
                <p className="text-md-regular wow fadeInUp">
                Experience the epitome of luxury travel with Anytime Qatar&apos;s best Limousine service with exquisite, top-of-the-line limousines, designed to offer unparalleled comfort, style, and sophistication.
                </p>
                <Link to="/CarFilterPage">
                  <div className="btn btn-primary wow fadeInUp">
                    Get Started Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 19L19 12L12 5M19 12L5 12"
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
        </div>
      </section>
    </div>
  );
};

export default MiddleBannners;
