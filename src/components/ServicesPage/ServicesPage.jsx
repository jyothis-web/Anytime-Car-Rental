import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CounterDigits from "../CounterDigits/CounterDigits";
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  return (
    <div>
      <Helmet>
        <title>Best Car Rental & Limousine Service in Qatar</title>

        <meta
          name="description"
          content="Discover premium car rental options across Qatar with daily, weekly, and monthly rentals available. Choose from luxury and executive limousine services, including airport, wedding, and corporate transportation options. Convenient rental services are offered in Doha, Al Khor, Al Wakrah, and Umm Salal to meet your transportation needs, whether for individual or group travel."
        />

        <meta
          name="keywords"
          content="Affordable car rental Qatar, luxury car rental Doha, budget car rental Doha, cheap car hire Qatar, best car rental company Qatar, reliable car rental Qatar, executive car rental Qatar, corporate car rental Qatar, wedding car rental Qatar, airport pickup and drop Qatar, hourly car rental Qatar."
        />

        <link rel="canonical" href={`${import.meta.env.VITE_URL}`} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anytime Rent Car" />
        <meta
          property="og:description"
          content="Elevate your Qatar experience with our premium car rental, limousine service, and airport transfer solutions with Anytime Car Rental."
        />
        <meta property="og:url" content={`${import.meta.env.VITE_URL}`} />
        <meta
          property="og:image"
          content={`${import.meta.env.VITE_URL}favicon.png`}
        />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@twitterhandle" />
        <meta name="twitter:title" content="Anytime rent a car" />
        <meta
          name="twitter:description"
          content="Explore Qatar in style and comfort with our diverse fleet of luxury vehicles and professional chauffeurs."
        />
        <meta
          name="twitter:image"
          content="https://anytimeqatar.com/favicon.png"
        />
      </Helmet>
      <Navbar />

      {/* offCanvas Sidebar */}

      <main className="main">
        {/* prettier-ignore */}
        {/* page header */}
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-banner"
                src="assets/imgs/page-header/banner1.png"
                alt="Anytime car rental"
              />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">Our Services</h2>
              <span className="text-white text-xl-medium">
                Perfect service, top experts
              </span>
            </div>
            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
              <Link to="/">
                <p className="neutral-700 text-md-medium">Home</p>
              </Link>
              <span>
                <img
                  src="assets/imgs/template/icons/arrow-right.svg"
                  alt="Anytime car rental"
                />
              </span>
              <Link to="/Services" className="neutral-1000 text-md-bold">
                Services
              </Link>
            </div>
          </div>
        </div>
        {/* services list 1 */}
        <section className="section-box background-body py-96">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-7">
                <h3 className="neutral-1000">
                  Comprehensive <span className="text-primary">Car Rental</span>
                  Services to Meet All Your Needs
                </h3>
              </div>
              <div className="col-lg-5">
                <p className="text-lg-medium neutral-500">
                  From daily rentals to long-term solutions, we offer a
                  comprehensive range of vehicles and services to suit every
                  need and budget.
                </p>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24 wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-1.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Car & Bus Rentals with and Without Driver
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Discover Qatar at your own pace with our flexible car
                        and bus rental options. Whether you&apos;re planning a
                        family vacation, a business trip, or a group outing, we
                        have the perfect vehicle to suit your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up wow fadeIn"
                  data-wow-delay="0.2s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Commercial Rental with and Without Driver
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Our experienced and professional drivers will ensure
                        safe and efficient transportation of your goods or
                        passengers. Enjoy the flexibility of driving our
                        vehicles yourself, giving you complete control over your
                        business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24 wow fadeIn"
                  data-wow-delay="0.3s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Limousine Service
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Our luxurious limousine service in Qatar offers an
                        unparalleled level of comfort and sophistication.
                        Whether you&apos;re attending a special event, business
                        meeting, or simply want to travel in style, our fleet of
                        premium limousines is the perfect choice.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24 wow fadeIn"
                  data-wow-delay="0.4s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-1.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Providing Trained Driver for long term customer with
                        special rate
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Our drivers are available to take you wherever you need
                        to go, whenever you need to go. This means you can enjoy
                        the freedom of having a car without the hassle of
                        driving yourself.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24 wow fadeIn"
                  data-wow-delay="0.5s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Vallet Service
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Let our professional valets handle all your parking
                        needs, ensuring your vehicle is always parked safely and
                        conveniently. Enjoy the luxury of arriving at your
                        destination and leaving your car in our capable hands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Premium Car Rentals with Well Trained Driver
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Enjoy the comfort of a chauffeur-driven vehicle as you
                        explore this stunning country. Our fleet features a wide
                        range of high-end cars, ensuring you travel in style and
                        comfort.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24  wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-1.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        City Tour Services
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        Our city tour services offer a convenient and exciting
                        way to experience the best of Qatar. Our expertly
                        curated packages take you to the most iconic landmarks,
                        historical sites, and cultural attractions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24  wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Pick-up and Drop-off Services
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        we believe in making your car rental experience as
                        hassle-free as possible. Our convenient pick-up and
                        drop-off services ensure that you can start your journey
                        without any delay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="card-news background-card hover-up mb-24  wow fadeIn"
                  data-wow-delay="0.8s"
                >
                  <div className="card-image">
                    <img
                      src="assets/imgs/services/services-list-1/img-9.png"
                      alt="Anytime car rental"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title mb-3">
                      <div className="text-xl-bold neutral-1000">
                        Delivery Services
                      </div>
                      <p className="text-md-medium neutral-500 mt-2">
                        We offer convenient car delivery services throughout
                        Qatar. Simply book your rental online or over the phone,
                        and we&apos;ll deliver your chosen vehicle directly to
                        your preferred location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banners 3 */}

        {/* testimonials */}
        {/* cta 10*/}
        <section className="section-cta-7 background-body">
          <div className="box-cta-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        className="rounded-12"
                        src="assets/imgs/cta/cta-10/img-1.png"
                        alt="Anytime car rental"
                      />
                    </div>
                  </div>
                  <div className="position-absolute end-0 bottom-0 p-40">
                    <div className="box-button-slider box-button-slider-team justify-content-end"></div>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5 mt-lg-0 mt-4">
                  <h4 className="mb-4 neutral-1000">Additional Services</h4>
                  <p className="text-lg-medium neutral-500 mb-4">
                    Let us help you make your next journey smooth and
                    enjoyable—get started today.
                  </p>
                  <div className="row">
                    <div className="col">
                      <ul className="list-ticks-green ">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            School Transportation Services
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            Office Personal Transportation
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            VVIP & VIP Transportation
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Family Vans Chauffeur Services
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Meet & Greet Services
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Business Tips Chauffeur Services
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Chauffeur-hailing
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Factory Staff Transportation
                          </li>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          <img
                            src="./assets/imgs/template/icons/tick-list.svg"
                            alt=""
                            width={"20px"}
                          />
                          <li className="neutral-1000 pe-0">
                            {" "}
                            Entertainment Tour Services
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <a className="btn btn-primary mt-2">
                    Get Started Now
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
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
          </div>
        </section>
        {/* Static 1 */}
        <section className="section-static-1 background-body border-bottom">
          <div className="container">
            <div className="row">
              <div className="pt-65 pb-96">
                <div className="wow fadeIn">
                  <CounterDigits />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-1 */}
        {/* Footer */}

        <Footer />
      </main>
    </div>
  );
};

export default ServicesPage;
