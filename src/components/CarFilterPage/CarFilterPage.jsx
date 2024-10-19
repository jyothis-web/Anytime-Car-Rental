import Navbar from "../Navbar/Navbar";

const CarFilterPage = () => {
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
          <section className="box-section box-search-advance-home10 background-body">
            <div className="container">
              <div className="box-search-advance background-card wow fadeIn">
                <div className="box-top-search">
                  <div className="left-top-search">
                    <a
                      className="category-link text-sm-bold btn-click active"
                      href="#"
                    >
                      All cars
                    </a>
                    <a
                      className="category-link text-sm-bold btn-click"
                      href="#"
                    >
                      New cars
                    </a>
                    <a
                      className="category-link text-sm-bold btn-click"
                      href="#"
                    >
                      Used cars
                    </a>
                  </div>
                  <div className="right-top-search d-none d-md-flex">
                    <a
                      className="text-sm-medium need-some-help"
                      href="contact.html"
                    >
                      Need help?
                    </a>
                  </div>
                </div>
                <div className="box-bottom-search background-card">
                  <div className="item-search">
                    <label className="text-sm-bold neutral-500">
                      Pick Up Location
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        New York, USA
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Paris, France
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Tokyo, Japan
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            New York City, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item-search item-search-2">
                    <label className="text-sm-bold neutral-500">
                      Drop Off Location
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Delaware, USA
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Paris, France
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Tokyo, Japan
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            New York City, USA
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* <div class="box-calendar-date">
                    <input class="search-input datepicker" type="text" placeholder="" value="02 January 2024" />
                </div> */}
                  </div>
                  <div className="item-search item-search-3">
                    <label className="text-sm-bold neutral-500">
                      Pick Up Date &amp; Time
                    </label>
                    <div className="box-calendar-date">
                      <input
                        className="search-input datepicker"
                        type="text"
                        placeholder=""
                        defaultValue="Thu, Oct 01 2024"
                      />
                    </div>
                  </div>
                  <div className="item-search bd-none">
                    <label className="text-sm-bold neutral-500">
                      Return Date &amp; Time
                    </label>
                    <div className="box-calendar-date">
                      <input
                        className="search-input datepicker"
                        type="text"
                        placeholder=""
                        defaultValue="Mon, Oct 07 2024"
                      />
                    </div>
                    {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle btn-dropdown-search passenger-search" type="button" data-bs-toggle="dropdown" aria-expanded="false">2 adults, 2 children</button>
                    <ul class="dropdown-menu">
                        <li>
                            <a class="dropdown-item" href="#">2 adults, 1 children</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">2 adults, 2 children</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">2 adults, 3 children</a>
                        </li>
                    </ul>
                </div> */}
                  </div>
                  <div className="item-search bd-none d-flex justify-content-end">
                    <button className="btn btn-brand-2 text-nowrap">
                      <svg
                        className="me-2"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z"
                          stroke="#000000"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Find a Vehicle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                          <a
                            className="display-type display-grid active"
                            href="cars-list-1.html"
                          >
                            <svg
                              width={22}
                              height={22}
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 8V2.75C20 2.3375 19.6625 2 19.25 2H14C13.5875 2 13.25 2.3375 13.25 2.75V8C13.25 8.4125 13.5875 8.75 14 8.75H19.25C19.6625 8.75 20 8.4125 20 8ZM19.25 0.5C20.495 0.5 21.5 1.505 21.5 2.75V8C21.5 9.245 20.495 10.25 19.25 10.25H14C12.755 10.25 11.75 9.245 11.75 8V2.75C11.75 1.505 12.755 0.5 14 0.5H19.25Z"
                                fill=""
                              />
                              <path
                                d="M20 19.25V14C20 13.5875 19.6625 13.25 19.25 13.25H14C13.5875 13.25 13.25 13.5875 13.25 14V19.25C13.25 19.6625 13.5875 20 14 20H19.25C19.6625 20 20 19.6625 20 19.25ZM19.25 11.75C20.495 11.75 21.5 12.755 21.5 14V19.25C21.5 20.495 20.495 21.5 19.25 21.5H14C12.755 21.5 11.75 20.495 11.75 19.25V14C11.75 12.755 12.755 11.75 14 11.75H19.25Z"
                                fill=""
                              />
                              <path
                                d="M8 8.75C8.4125 8.75 8.75 8.4125 8.75 8V2.75C8.75 2.3375 8.4125 2 8 2H2.75C2.3375 2 2 2.3375 2 2.75V8C2 8.4125 2.3375 8.75 2.75 8.75H8ZM8 0.5C9.245 0.5 10.25 1.505 10.25 2.75V8C10.25 9.245 9.245 10.25 8 10.25H2.75C1.505 10.25 0.5 9.245 0.5 8V2.75C0.5 1.505 1.505 0.5 2.75 0.5H8Z"
                                fill=""
                              />
                              <path
                                d="M8 20C8.4125 20 8.75 19.6625 8.75 19.25V14C8.75 13.5875 8.4125 13.25 8 13.25H2.75C2.3375 13.25 2 13.5875 2 14V19.25C2 19.6625 2.3375 20 2.75 20H8ZM8 11.75C9.245 11.75 10.25 12.755 10.25 14V19.25C10.25 20.495 9.245 21.5 8 21.5H2.75C1.505 21.5 0.5 20.495 0.5 19.25V14C0.5 12.755 1.505 11.75 2.75 11.75H8Z"
                                fill=""
                              />
                            </svg>
                          </a>
                          <a
                            className="display-type display-list"
                            href="cars-list-4.html"
                          >
                            <svg
                              width={21}
                              height={21}
                              viewBox="0 0 21 21"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.788 0H1.09497C0.491194 0 0 0.486501 0 1.08456V4.74269C0 5.34075 0.491194 5.82729 1.09497 5.82729H4.788C5.39177 5.82729 5.88297 5.34075 5.88297 4.74269V1.08456C5.88297 0.486501 5.39177 0 4.788 0ZM4.80951 4.74273C4.80951 4.75328 4.79865 4.76404 4.788 4.76404H1.09497C1.08432 4.76404 1.07345 4.75328 1.07345 4.74273V1.08456C1.07345 1.07401 1.08432 1.06329 1.09497 1.06329H4.788C4.79865 1.06329 4.80951 1.07401 4.80951 1.08456V4.74273ZM7.53412 1.32686C7.53412 1.03321 7.77444 0.795211 8.07084 0.795211H20.4632C20.7596 0.795211 21 1.03321 21 1.32686C21 1.62046 20.7596 1.8585 20.4632 1.8585H8.07084C7.77444 1.8585 7.53412 1.62046 7.53412 1.32686ZM21 4.50043C21 4.79408 20.7597 5.03208 20.4633 5.03208H8.07084C7.77444 5.03208 7.53412 4.79408 7.53412 4.50043C7.53412 4.20683 7.77444 3.96879 8.07084 3.96879H20.4632C20.7597 3.96879 21 4.20683 21 4.50043ZM4.788 7.58633H1.09497C0.491194 7.58633 0 8.07283 0 8.67089V12.329C0 12.9271 0.491194 13.4136 1.09497 13.4136H4.788C5.39177 13.4136 5.88297 12.9271 5.88297 12.329V8.67089C5.88297 8.07288 5.39177 7.58633 4.788 7.58633ZM4.80951 12.3291C4.80951 12.3396 4.79865 12.3504 4.788 12.3504H1.09497C1.08432 12.3504 1.07345 12.3396 1.07345 12.3291V8.67094C1.07345 8.66039 1.08432 8.64967 1.09497 8.64967H4.788C4.79865 8.64967 4.80951 8.66039 4.80951 8.67094V12.3291ZM4.788 15.1727H1.09497C0.491194 15.1727 0 15.6592 0 16.2573V19.9154C0 20.5135 0.491194 21 1.09497 21H4.788C5.39177 21 5.88297 20.5135 5.88297 19.9154V16.2573C5.88297 15.6592 5.39177 15.1727 4.788 15.1727ZM4.80951 19.9154C4.80951 19.926 4.79865 19.9368 4.788 19.9368H1.09497C1.08432 19.9368 1.07345 19.926 1.07345 19.9154V16.2573C1.07345 16.2468 1.08432 16.236 1.09497 16.236H4.788C4.79865 16.236 4.80951 16.2468 4.80951 16.2573V19.9154ZM21 12.0868C21 12.3805 20.7597 12.6185 20.4633 12.6185H8.07084C7.77444 12.6185 7.53412 12.3805 7.53412 12.0868C7.53412 11.7932 7.77444 11.5552 8.07084 11.5552H20.4632C20.7597 11.5552 21 11.7932 21 12.0868ZM21 8.91328C21 9.20688 20.7597 9.44492 20.4633 9.44492H8.07084C7.77444 9.44492 7.53412 9.20688 7.53412 8.91328C7.53412 8.61963 7.77444 8.38163 8.07084 8.38163H20.4632C20.7597 8.38163 21 8.61963 21 8.91328ZM21 16.4996C21 16.7932 20.7597 17.0313 20.4633 17.0313H8.07084C7.77444 17.0313 7.53412 16.7932 7.53412 16.4996C7.53412 16.206 7.77444 15.968 8.07084 15.968H20.4632C20.7597 15.968 21 16.206 21 16.4996ZM21 19.6732C21 19.9668 20.7597 20.2048 20.4633 20.2048H8.07084C7.77444 20.2048 7.53412 19.9668 7.53412 19.6732C7.53412 19.3796 7.77444 19.1415 8.07084 19.1415H20.4632C20.7597 19.1415 21 19.3796 21 19.6732Z"
                                fill=""
                              />
                            </svg>
                          </a>
                          <span className="text-sm-bold neutral-500 number-found">
                            64 items found
                          </span>
                        </div>
                      </div>
                      <div className="col-xl-8 col-md-8 mb-10 text-lg-end text-center">
                        <div className="box-item-sort">
                          <a className="btn btn-sort" href="#">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8.25 6L5.25 3M5.25 3L2.25 6M5.25 3L5.25 15"
                                stroke=""
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9.75 12L12.75 15M12.75 15L15.75 12M12.75 15L12.75 3"
                                stroke=""
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <div className="item-sort border-1">
                            <span className="text-xs-medium neutral-500 mr-5">
                              Show
                            </span>
                            <div className="dropdown dropdown-sort border-1-right">
                              <button
                                className="btn dropdown-toggle"
                                id="dropdownSort2"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-display="static"
                              >
                                <span>20</span>
                              </button>
                              <ul
                                className="dropdown-menu dropdown-menu-light"
                                aria-labelledby="dropdownSort2"
                              >
                                <li>
                                  <a className="dropdown-item active" href="#">
                                    20
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    30
                                  </a>
                                </li>
                                <li>
                                  <a className="dropdown-item" href="#">
                                    50
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-1.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                GMC Sierra 2500HD Denali
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $98.67
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-2.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Ford Mustang GT Premium
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $89.32
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-3.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Mazda MX-5 Miata Club
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $89.56
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-4.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Subaru Impreza WRX STI
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $658.0
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-5.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Porsche 911 Carrera S
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $125.0
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-6.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Toyota Camry LE Hybrid
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $32.47
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-7.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Hyundai Sonata SEL Plus
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $72.15
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-8.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Buick Enclave Avenir
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $69.56
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-9.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Chevrolet Silverado
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $253.0
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-10.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Subaru Outback Limited XT
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $75.86
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-11.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Jeep Wrangler Rubicon Unlimited
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $160.8
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-12.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Kia Telluride SX
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $98.65
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-13.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Mini Cooper S Hardtop 2 Door
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $84.5
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-14.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Subaru Impreza WRX STI
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $130.2
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
                      <div className="col-lg-4 col-md-6">
                        <div className="card-journey-small background-card hover-up">
                          <div className="card-image">
                            <a href="cars-details-1.html">
                              <img
                                src="assets/imgs/cars-listing/cars-listing-6/car-15.png"
                                alt="Carento"
                              />
                            </a>
                          </div>
                          <div className="card-info p-4 pt-30">
                            <div className="card-rating">
                              <div className="card-left" />
                              <div className="card-right">
                                <span className="rating text-xs-medium rounded-pill">
                                  4.96{" "}
                                  <span className="text-xs-medium neutral-500">
                                    (672 reviews)
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="card-title">
                              <a
                                className="text-lg-bold neutral-1000 text-nowrap"
                                href="cars-details-1.html"
                              >
                                Audi Q5 2.0T Premium Plus
                              </a>
                            </div>
                            <div className="card-program">
                              <div className="card-location">
                                <p className="text-location text-sm-medium neutral-500">
                                  New South Wales, Australia
                                </p>
                              </div>
                              <div className="card-facitlities">
                                <p className="card-miles text-md-medium">
                                  25,100 miles
                                </p>
                                <p className="card-gear text-md-medium">
                                  Automatic
                                </p>
                                <p className="card-fuel text-md-medium">
                                  Diesel
                                </p>
                                <p className="card-seat text-md-medium">
                                  7 seats
                                </p>
                              </div>
                              <div className="endtime">
                                <div className="card-price">
                                  <h6 className="text-lg-bold neutral-1000">
                                    $150.6
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
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
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
                  </nav>
                </div>
                <div className="content-left order-lg-first">
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Show on map
                        </h6>
                        <div className="box-collapse scrollFilter mb-15">
                          <div className="pt-0">
                            <div className="box-map-small">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.611419370571!2d2.3406913487788334!3d48.86191519358772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e18a5f84801%3A0x6eb5daa624bdebd2!2sLes%20Halles%2C%2075001%20Pa%20ri%2C%20Ph%C3%A1p!5e0!3m2!1svi!2s!4v1711728202093!5m2!1svi!2s"
                                width="100%"
                                height={160}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
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
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Car type
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">All </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">198</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">Sedans</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">32</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">SUVs </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">13</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">Coupes</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Hatchbacks
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">35</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Convertibles
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">56</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">Trucks</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                          </ul>
                          <div className="box-see-more mt-20 mb-25">
                            <a className="link-see-more" href="#">
                              See more
                              <svg
                                width={8}
                                height={6}
                                viewBox="0 0 8 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z"
                                  fill=""
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Car Amenities
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">All</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">32</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Leather upholstery
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">13</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Heated seats
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Sunroof/Moonroof
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Keyless entry/start
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">35</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Heads-up display
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">56</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Adaptive cruise control
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                          </ul>
                          <div className="box-see-more mt-20 mb-25">
                            <a className="link-see-more" href="#">
                              See more
                              <svg
                                width={8}
                                height={6}
                                viewBox="0 0 8 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z"
                                  fill=""
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Fuel Type
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">All</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">32</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Plug-in Hybrid (PHEV)
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">13</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Hybrid (HEV)
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Electric Vehicle (EV)
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">Diesel</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">35</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Gasoline/Petrol
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">56</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">Hydrogen</span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Review Score
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  {" "}
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                </span>
                                <span className="checkmark" />
                              </label>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  {" "}
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                </span>
                                <span className="checkmark" />
                              </label>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  {" "}
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                </span>
                                <span className="checkmark" />
                              </label>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  {" "}
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                </span>
                                <span className="checkmark" />
                              </label>
                            </li>
                            <li>
                              <label className="cb-container">
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  {" "}
                                  <img
                                    src="assets/imgs/template/icons/star-yellow.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                  <img
                                    src="assets/imgs/template/icons/star-grey.svg"
                                    alt="Carento"
                                  />
                                </span>
                                <span className="checkmark" />
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-body">
                    <div className="box-filters-sidebar">
                      <div className="block-filter border-1">
                        <h6 className="text-lg-bold item-collapse neutral-1000">
                          Booking Location
                        </h6>
                        <div className="box-collapse scrollFilter">
                          <ul className="list-filter-checkbox">
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Maldives Haven
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">198</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Santorini Retreat
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">32</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Parisian Plaza
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">13</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Tokyo Tower View
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">23</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Caribbean Cove
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">35</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Swiss Alps Lodge
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">56</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  New York Cityscape
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Dubai Oasis
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  Barcelona Beachfront
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                            <li>
                              <label className="cb-container">
                                {" "}
                                <input type="checkbox" />
                                <span className="text-sm-medium">
                                  London Luxe
                                </span>
                                <span className="checkmark" />{" "}
                              </label>
                              <span className="number-item">76</span>
                            </li>
                          </ul>
                          <div className="box-see-more">
                            <a className="link-see-more" href="#">
                              See more
                              <svg
                                width={8}
                                height={6}
                                viewBox="0 0 8 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.89553 1.02367C7.75114 0.870518 7.50961 0.864815 7.35723 1.00881L3.9998 4.18946L0.642774 1.00883C0.490387 0.86444 0.249236 0.870534 0.104474 1.02369C-0.0402885 1.17645 -0.0338199 1.4176 0.118958 1.56236L3.73809 4.99102C3.81123 5.06036 3.90571 5.0954 3.9998 5.0954C4.0939 5.0954 4.18875 5.06036 4.26191 4.99102L7.88104 1.56236C8.03382 1.41758 8.04029 1.17645 7.89553 1.02367Z"
                                  fill=""
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <div className="footer-top">
                <div className="row align-items-center">
                  <div className="col-lg-5 col-md-6 text-center text-md-start">
                    <h5 className="color-white wow fadeInDown">
                      Subscribe to see secret deals prices drop the moment you
                      sign up!
                    </h5>
                  </div>
                  <div className="col-lg-7 col-md-6 text-center text-md-end mt-md-0 mt-4">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                      <form className="form-newsletter wow fadeInUp" action="#">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Enter your email"
                        />
                        <input
                          className="btn btn-brand-2"
                          type="submit"
                          defaultValue="Subscribe"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 col-sm-12 footer-1">
                  <div className="mt-20 mb-20">
                    <a className="d-flex" href="index.html">
                      <img
                        className="light-mode"
                        alt="Carento"
                        src="assets/imgs/template/logo-w.svg"
                      />
                      <img
                        className="dark-mode"
                        alt="Carento"
                        src="assets/imgs/template/logo-w.svg"
                      />
                    </a>
                    <div className="box-info-contact mt-0">
                      <p className="text-md neutral-400 icon-address">
                        2356 Oakwood Drive, Suite 18, San Francisco, California
                        94111, US
                      </p>
                      <p className="text-md neutral-400 icon-worktime">
                        Hours: 8:00 - 17:00, Mon - Sat
                      </p>
                      <p className="text-md neutral-400 icon-email">
                        support@carento.com
                      </p>
                    </div>
                    <div className="box-need-help">
                      <p className="need-help text-md-medium mb-5">
                        Need help? Call us
                      </p>
                      <br />
                      <a
                        className="heading-6 phone-support"
                        href="tel:+1 222-555-33-99"
                      >
                        +1 222-555-33-99
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-xs-6 footer-3">
                  <h6 className="text-linear-3">Company</h6>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Awards</a>
                    </li>
                    <li>
                      <a href="#">Agencies</a>
                    </li>
                    <li>
                      <a href="#">Copyright Notices</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy Notice</a>
                    </li>
                    <li>
                      <a href="#">Lost &amp; Found</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-xs-6 footer-2">
                  <h6 className="text-linear-3">Our Services</h6>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Car Rental Services</a>
                    </li>
                    <li>
                      <a href="#">Vehicle Leasing Options</a>
                    </li>
                    <li>
                      <a href="#">Long-Term Car Rentals</a>
                    </li>
                    <li>
                      <a href="#">Car Sales and Trade-Ins</a>
                    </li>
                    <li>
                      <a href="#">Luxury Car Rentals</a>
                    </li>
                    <li>
                      <a href="#">Rent-to-Own Programs</a>
                    </li>
                    <li>
                      <a href="#">Fleet Management Solutions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 col-xs-6 footer-4">
                  <h6 className="text-linear-3">Our Partners</h6>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Affiliates</a>
                    </li>
                    <li>
                      <a href="#">Travel Agents</a>
                    </li>
                    <li>
                      <a href="#">AARP Members</a>
                    </li>
                    <li>
                      <a href="#">Points Programs</a>
                    </li>
                    <li>
                      <a href="#">Military &amp; Veterans</a>
                    </li>
                    <li>
                      <a href="#">Work with us</a>
                    </li>
                    <li>
                      <a href="#">Advertise with us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 col-xs-6 footer-5">
                  <h6 className="text-linear-3">Support</h6>
                  <ul className="menu-footer">
                    <li>
                      <a href="#">Forum support</a>
                    </li>
                    <li>
                      <a href="#">Help Center</a>
                    </li>
                    <li>
                      <a href="#">Live chat</a>
                    </li>
                    <li>
                      <a href="#">How it works</a>
                    </li>
                    <li>
                      <a href="#">Security</a>
                    </li>
                    <li>
                      <a href="#">Refund Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-bottom mt-50">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-6 text-md-start text-center mb-20">
                    <p className="text-sm color-white">
                      © 2024 Carento Inc. All rights reserved.
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end text-center mb-20">
                    <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                      <p className="text-lg-bold neutral-0 d-inline-block mr-10">
                        Follow us
                      </p>
                      <div className="box-socials-footer d-inline-block">
                        <a className="icon-socials icon-instagram" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M13.9146 1.6665H6.93127C3.89793 1.6665 2.0896 3.47484 2.0896 6.50817V13.4832C2.0896 16.5248 3.89793 18.3332 6.93127 18.3332H13.9063C16.9396 18.3332 18.7479 16.5248 18.7479 13.4915V6.50817C18.7563 3.47484 16.9479 1.6665 13.9146 1.6665ZM10.4229 13.2332C8.6396 13.2332 7.1896 11.7832 7.1896 9.99984C7.1896 8.2165 8.6396 6.7665 10.4229 6.7665C12.2063 6.7665 13.6563 8.2165 13.6563 9.99984C13.6563 11.7832 12.2063 13.2332 10.4229 13.2332ZM15.3563 5.73317C15.3146 5.83317 15.2563 5.92484 15.1813 6.00817C15.0979 6.08317 15.0063 6.1415 14.9063 6.18317C14.8063 6.22484 14.6979 6.24984 14.5896 6.24984C14.3646 6.24984 14.1563 6.1665 13.9979 6.00817C13.9229 5.92484 13.8646 5.83317 13.8229 5.73317C13.7813 5.63317 13.7563 5.52484 13.7563 5.4165C13.7563 5.30817 13.7813 5.19984 13.8229 5.09984C13.8646 4.9915 13.9229 4.90817 13.9979 4.82484C14.1896 4.63317 14.4813 4.5415 14.7479 4.59984C14.8063 4.60817 14.8563 4.62484 14.9063 4.64984C14.9563 4.6665 15.0063 4.6915 15.0563 4.72484C15.0979 4.74984 15.1396 4.7915 15.1813 4.82484C15.2563 4.90817 15.3146 4.9915 15.3563 5.09984C15.3979 5.19984 15.4229 5.30817 15.4229 5.4165C15.4229 5.52484 15.3979 5.63317 15.3563 5.73317Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a className="icon-socials icon-facebook" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M18.7563 13.4915C18.7563 16.5248 16.9479 18.3332 13.9146 18.3332H12.9229C12.4646 18.3332 12.0896 17.9582 12.0896 17.4998V12.6915C12.0896 12.4665 12.2729 12.2748 12.4979 12.2748L13.9646 12.2498C14.0813 12.2415 14.1813 12.1582 14.2063 12.0415L14.4979 10.4498C14.5229 10.2998 14.4063 10.1582 14.2479 10.1582L12.4729 10.1832C12.2396 10.1832 12.0563 9.99985 12.0479 9.77485L12.0146 7.73317C12.0146 7.59984 12.1229 7.48318 12.2646 7.48318L14.2646 7.44984C14.4063 7.44984 14.5146 7.34152 14.5146 7.19985L14.4813 5.19983C14.4813 5.05816 14.3729 4.94984 14.2313 4.94984L11.9813 4.98318C10.5979 5.00818 9.49794 6.1415 9.52294 7.52484L9.5646 9.8165C9.57293 10.0498 9.38961 10.2332 9.15628 10.2415L8.15627 10.2582C8.0146 10.2582 7.90628 10.3665 7.90628 10.5082L7.93127 12.0915C7.93127 12.2332 8.0396 12.3415 8.18126 12.3415L9.18127 12.3248C9.41461 12.3248 9.59792 12.5082 9.60626 12.7332L9.68125 17.4832C9.68959 17.9498 9.31459 18.3332 8.84792 18.3332H6.93126C3.89793 18.3332 2.0896 16.5248 2.0896 13.4832V6.50817C2.0896 3.47484 3.89793 1.6665 6.93126 1.6665H13.9146C16.9479 1.6665 18.7563 3.47484 18.7563 6.50817V13.4915Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a className="icon-socials icon-twitter" href="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={20}
                            viewBox="0 0 21 20"
                            fill="none"
                          >
                            <path
                              d="M12.2847 8.46864L19.5701 0H17.8437L11.5178 7.3532L6.46535 0H0.637939L8.27824 11.1193L0.637939 20H2.36443L9.04472 12.2348L14.3805 20H20.2079L12.2843 8.46864H12.2847ZM9.92005 11.2173L9.14593 10.1101L2.98651 1.29967H5.63831L10.609 8.40994L11.3831 9.51718L17.8445 18.7594H15.1927L9.92005 11.2177V11.2173Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                        <a className="icon-socials icon-be" href="#">
                          <svg
                            width={21}
                            height={15}
                            viewBox="0 0 21 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z"
                              fill=""
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
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
