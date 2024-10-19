import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
const Navbar = () => {

  const [hideTopBar, setHideTopBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust scroll value as needed
        setHideTopBar(true);
      } else {
        setHideTopBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header header-fixed sticky-bar">
      <div className={`top-bar top-bar-2 top-bar-3 bg-transparent ${hideTopBar ? 'hide-top-bar' : ''}`}>
        <div className="container-fluid">
          <div className="text-header-info">
            <a className="phone-head text-white" href="">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.656 2.34229C10.5314 -0.781426 5.46601 -0.780676 2.34229 2.34401C-0.781426 5.4687 -0.780676 10.534 2.34401 13.6577C5.4687 16.7814 10.534 16.7807 13.6577 13.656C15.1579 12.1554 16.0005 10.1202 16 7.99829C15.9996 5.87673 15.1564 3.84223 13.656 2.34229ZM12.1157 11.1439C12.1154 11.1443 12.115 11.1446 12.1147 11.145V11.1423L11.7093 11.545C11.1851 12.0758 10.4216 12.2942 9.69598 12.121C8.96489 11.9253 8.26989 11.6138 7.63732 11.1983C7.04964 10.8227 6.50501 10.3837 6.01332 9.88898C5.56092 9.43989 5.15448 8.94676 4.79998 8.41698C4.41223 7.84692 4.10532 7.22592 3.88798 6.57164C3.63882 5.80301 3.84529 4.95961 4.42132 4.39298L4.89598 3.91832C5.02795 3.78576 5.24239 3.78529 5.37492 3.91726C5.37526 3.91761 5.37564 3.91795 5.37598 3.91832L6.87464 5.41698C7.0072 5.54895 7.00767 5.76339 6.8757 5.89592C6.87536 5.89626 6.87501 5.89661 6.87464 5.89698L5.99464 6.77698C5.74214 7.02673 5.71039 7.42361 5.91998 7.71032C6.23826 8.14714 6.59048 8.55817 6.97332 8.93967C7.40017 9.36835 7.8642 9.75832 8.35998 10.105C8.64645 10.3048 9.03482 10.2711 9.28264 10.025L10.1333 9.16101C10.2653 9.02845 10.4797 9.02798 10.6122 9.15995C10.6126 9.16029 10.6129 9.16064 10.6133 9.16101L12.1146 10.665C12.2472 10.7969 12.2477 11.0114 12.1157 11.1439Z"
                  fill=""
                />
              </svg>
              <span className="d-none d-lg-inline-block">+1 222-555-33-99</span>
            </a>
            <a className="email-head text-white" href="">
              <svg
                width={16}
                height={12}
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.96372 1.07378L6.28622 5.39816C7.22897 6.33909 8.77003 6.33991 9.71356 5.39816L14.0361 1.07378C14.0796 1.03025 14.0732 0.958563 14.0227 0.923344C13.5819 0.615875 13.0455 0.433594 12.4677 0.433594H3.53216C2.95431 0.433594 2.41791 0.615906 1.97703 0.923344C1.92653 0.958563 1.92019 1.03025 1.96372 1.07378ZM0.808594 3.15713C0.808594 2.70275 0.92125 2.27344 1.11969 1.89609C1.15072 1.83706 1.22938 1.82513 1.27653 1.87228L5.54431 6.14006C6.89578 7.4935 9.10322 7.49428 10.4555 6.14006L14.7233 1.87228C14.7704 1.82513 14.8491 1.83706 14.8801 1.89609C15.0785 2.27344 15.1912 2.70278 15.1912 3.15713V8.84266C15.1912 10.3456 13.9687 11.5662 12.4677 11.5662H3.53216C2.03116 11.5662 0.808594 10.3456 0.808594 8.84266V3.15713Z"
                  fill=""
                />
              </svg>
              <span className="d-none d-lg-inline-block">sale@carento.com</span>
            </a>
          </div>
          <div className="text-header">
            <div className="text-unlock text-sm-medium text-white">
              More than <span className="text-primary">800+</span> special
              collection cars in this summer
            </div>
            <a
              className="btn btn-brand-2 btn-small text-dark px-3 py-2 text-xs-medium"
              href="cars-list-1.html"
            >
              Access Now
              <svg
                className="ms-1"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 7.99965C1 7.86705 1.05268 7.73987 1.14645 7.6461C1.24021 7.55233 1.36739 7.49965 1.5 7.49965H13.293L10.146 4.35366C10.0521 4.25977 9.99937 4.13243 9.99937 3.99966C9.99937 3.86688 10.0521 3.73954 10.146 3.64565C10.2399 3.55177 10.3672 3.49902 10.5 3.49902C10.6328 3.49902 10.7601 3.55177 10.854 3.64565L14.854 7.64565C14.9006 7.6921 14.9375 7.74728 14.9627 7.80802C14.9879 7.86877 15.0009 7.93389 15.0009 7.99965C15.0009 8.06542 14.9879 8.13054 14.9627 8.19129C14.9375 8.25203 14.9006 8.30721 14.854 8.35365L10.854 12.3537C10.7601 12.4475 10.6328 12.5003 10.5 12.5003C10.3672 12.5003 10.2399 12.4475 10.146 12.3537C10.0521 12.2598 9.99937 12.1324 9.99937 11.9997C9.99937 11.8669 10.0521 11.7395 10.146 11.6457L13.293 8.49965H1.5C1.36739 8.49965 1.24021 8.44698 1.14645 8.35321C1.05268 8.25944 1 8.13226 1 7.99965Z"
                  fill="#101010"
                />
              </svg>
            </a>
          </div>
          <div className="top-right-header">
            <div className="d-none d-xl-inline-block box-dropdown-cart align-middle mr-15 head-lang">
              <span className="text-14-medium icon-list icon-account icon-lang">
                <span className="text-14-medium arrow-down">EN</span>
              </span>
              <div className="dropdown-account">
                <ul>
                  <li>
                    <a className="text-sm-medium" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="text-sm-medium" href="#">
                      French
                    </a>
                  </li>
                  <li>
                    <a className="text-sm-medium" href="#">
                      Chinese
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="d-none d-xl-inline-block box-dropdown-cart align-middle head-currency">
              <span className="text-14-medium icon-list icon-cart">
                <span className="text-14-medium arrow-down">USD</span>
              </span>
              <div className="dropdown-cart">
                <ul>
                  <li>
                    <a className="text-sm-medium" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="text-sm-medium" href="#">
                      EUR
                    </a>
                  </li>
                  <li>
                    <a className="text-sm-medium" href="#">
                      SGP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="main-header">
          <div className="header-left">
            <div className="header-logo">
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
            </div>
            <div className="navbar-title-flex">
              <Link to="/" className="navbar-title">
                Home
              </Link>
              <Link to="/About" className="navbar-title">
                About Us
              </Link>
              <Link to="/Services" className="navbar-title">
                Services
              </Link>
              <Link to="/ContactPage" className="navbar-title">
                Contact Us
              </Link>
            </div>
            <div className="navbar-button">
              <Link to="/CarFilterPage" className="navbar-title">
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
            <div className="nav-mobile">
          <NavbarMobile />
        </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;