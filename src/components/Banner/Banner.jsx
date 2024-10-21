const Banner = () => {
  return (
    <div>
      <section className="section-box box-banner-home7 background-body">
        {/* <div className="container"></div> */}
        <div className="container-banner-home7 position-relative">
          <div className="box-swiper">
            <div className="item-banner-slide banner-1">
              <div className="container">
                <span className="btn background-brand-2 px-3 py-3 rounded-12 text-sm-bold text-dark">
                  +3600 cars for you
                </span>
                <h1 className="mt-20 mb-20 color-white">
                  Your Journey Redefined
                </h1>
                <h6 className="color-white heading-6-medium pb-lg-0 pb-4">
                  Browse our diverse inventory and enjoy a seamless buying
                  experience <br />
                  with expert support every step of the way
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container-search-advance">
          <div className="container">
            <div className="box-search-advance background-card wow fadeInUp mb-5">
              <div className="box-bottom-search background-card">
                <div className="item-search">
                  <label className="text-sm-bold neutral-500">
                    Pick Up Location
                  </label>
                  <div className="dropdown">
                    <input
                      className="form-control input-field"
                      type="text"
                      placeholder="Pick Up Location"
                    />
                  </div>
                </div>
                <div className="item-search item-search-2">
                  <label className="text-sm-bold neutral-500">
                    Drop Off Location
                  </label>
                  <div className="dropdown">
                    <input
                      className="form-control input-field"
                      type="text"
                      placeholder="Drop Off Location"
                    />
                  </div>
                </div>
                <div className="item-search item-search-2">
                  <label className="text-sm-bold neutral-500">
                    Pick Up Date
                  </label>
                  <div className="dropdown">
                    <input
                      className="form-control input-field"
                      type="date"
                      // placeholder="Thu, Oct 01 2024"
                    />
                  </div>
                </div>
                <div className="item-search item-search-2">
                  <label className="text-sm-bold neutral-500">
                    Return Date
                  </label>
                  <div className="dropdown">
                    <input
                      className="form-control input-field"
                      type="date"
                      // placeholder="Thu, Oct 01 2024"
                    />
                  </div>
                </div>
                <div className="item-search bd-none d-flex justify-content-end">
                  <button className="btn btn-brand-2 text-nowrap">
                    {/* <svg className="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 19L14.6569 14.6569M14.6569 14.6569C16.1046 13.2091 17 11.2091 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17C11.2091 17 13.2091 16.1046 14.6569 14.6569Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg> */}
                    Send Message
                  </button>
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
