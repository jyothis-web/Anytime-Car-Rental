
const Filter = () => {
  return (
    <div><section className="box-section box-search-advance-home10 background-100">
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
            <a className="category-link text-sm-bold btn-click" href="#">
              New cars
            </a>
            <a className="category-link text-sm-bold btn-click" href="#">
              Used cars
            </a>
          </div>
          <div className="right-top-search d-none d-md-flex">
            <a className="text-sm-medium need-some-help" href="contact.html">
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
  </section></div>
  )
}

export default Filter