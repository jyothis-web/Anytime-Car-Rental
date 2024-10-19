const Banner = () => {
  return (
    <div>
      <section className="section-box box-banner-home7 background-body">
        {/* <div className="container"></div> */}
        <div className="container-banner-home7 position-relative">
          <div className="box-swiper">
            <div className="swiper-container swiper-group-1">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="item-banner-slide banner-1">
                    <div className="container">
                      <span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">
                        +3600 cars for you
                      </span>
                      <h1 className="mt-20 mb-20 color-white">
                        Find your next vehicle today
                      </h1>
                      <h6 className="color-white heading-6-medium pb-lg-0 pb-4">
                        Browse our diverse inventory and enjoy a seamless buying
                        experience <br />
                        with expert support every step of the way
                      </h6>
                      <span className="text-lg-medium color-white d-lg-none">
                        Get 5% discount when{" "}
                        <a className="text-primary" href="#install-app">
                          Ordering via APP
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="item-banner-slide banner-2">
                    <div className="container">
                      <span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">
                        Best car rental system
                      </span>
                      <h1 className="mt-20 mb-20 color-white">
                        Discover your next ride today
                      </h1>
                      <h6 className="color-white heading-6-medium">
                        Explore our wide selection and enjoy a smooth purchasing
                        journey, <br />
                        with expert assistance at every turn
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-search-advance">
          <div className="container">
            <div className="box-search-advance background-card wow fadeInUp mb-5">
              <div className="box-top-search">
                <div className="left-top-search">
                  <a
                    className="category-link text-sm-bold btn-click active"
                    href="#"
                  >
                    All cars
                  </a>
                  <a className="category-link text-sm-bold btn-click" href="#">
                    New cars
                  </a>
                  <a className="category-link text-sm-bold btn-click" href="#">
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
                </div>
                <div className="item-search item-search-3">
                  <label className="text-sm-bold neutral-500">
                    Pick Up Date & Time
                  </label>
                  <div className="box-calendar-date">
                    <input
                      className="search-input datepicker"
                      type="text"
                      placeholder=""
                      value="Thu, Oct 01 2024"
                    />
                  </div>
                </div>
                <div className="item-search bd-none">
                  <label className="text-sm-bold neutral-500">
                    Return Date & Time
                  </label>
                  <div className="box-calendar-date">
                    <input
                      className="search-input datepicker"
                      type="text"
                      placeholder=""
                      value="Mon, Oct 07 2024"
                    />
                  </div>
                </div>
                <div className="item-search bd-none d-flex justify-content-end">
                  <button className="btn btn-brand-2 text-nowrap">
                    {/* <svg className="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> */}
                    Find a Vehicle
                  </button>
                </div>
              </div>
            </div>
            <div className="align-items-center justify-content-between pt-40 d-none d-lg-flex">
              <span className="text-lg-medium color-white">
                Get 5% discount when{" "}
                <a className="text-primary" href="#install-app">
                  Ordering via APP
                </a>
              </span>
              <div className="box-button-slider box-button-slider-team justify-content-end">
                <div
                  className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2"
                  tabIndex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-9c1b729b91027a37b"
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> */}
                </div>
                <div
                  className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2"
                  tabIndex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-9c1b729b91027a37b"
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
