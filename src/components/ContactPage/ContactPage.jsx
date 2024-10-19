import Navbar from "../Navbar/Navbar"

const ContactPage = () => {
  return (
    <div>
      <Navbar/>

      <main className="main">
    {/* page header */}
    <div className="page-header pt-30 background-body">
      <div className="custom-container position-relative mx-auto">
        <div className="bg-overlay rounded-12 overflow-hidden">
          <img
            className="w-100 h-100 rounded-12 img-banner"
            src="assets/imgs/page-header/banner4.png"
            alt="Carento"
          />
        </div>
        <div className="container position-absolute z-1 top-50 start-50 translate-middle">
          <h2 className="text-white">Get in touch</h2>
        </div>
      </div>
    </div>
    <section className="box-section box-contact-form background-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <h2 className="neutral-1000 mb-25">Get in Touch</h2>
            <div className="form-contact">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="text-sm-medium neutral-1000">
                      First Name
                    </label>
                    <input
                      className="form-control username"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="text-sm-medium neutral-1000">
                      First Name
                    </label>
                    <input
                      className="form-control username"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="text-sm-medium neutral-1000">
                      Email Adress
                    </label>
                    <input
                      className="form-control email"
                      type="email"
                      placeholder="email@domain.com"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="text-sm-medium neutral-1000">
                      Phone Number
                    </label>
                    <input
                      className="form-control phone"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="text-sm-medium neutral-1000">
                      Your Message
                    </label>
                    <textarea
                      className="form-control"
                      rows={6}
                      placeholder="Leave us a message..."
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="box-remember-forgot">
                  <div className="form-group">
                    <div className="remeber-me">
                      <label className="text-sm-medium neutral-500">
                        {" "}
                        <input className="cb-remember" type="checkbox" />
                        Agree to our{" "}
                        <a
                          className="text-sm-medium neutral-1000"
                          href="term.html"
                        >
                          Terms of service{" "}
                        </a>
                        and{" "}
                        <a
                          className="text-sm-medium neutral-1000"
                          href="privacy.html"
                        >
                          Privacy Policy
                        </a>{" "}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-book">
                    Send message
                    <svg
                      width={17}
                      height={16}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 15L15.5 8L8.5 1M15.5 8L1.5 8"
                        stroke=""
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="ps-lg-5">
              <h4 className="neutral-1000">Our location</h4>
              <p className="neutral-500 mb-30">
                12560 Rental Rd, Memphis, TN 38118, United States
              </p>
              <iframe
                className="h-520 rounded-3"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d283661.3575233618!2d2.2296777857951824!3d47.16509219592609!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1712486491620!5m2!1svi!2s"
                width="100%"
                height={650}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* prettier-ignore */}
    {/* Footer */}
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 text-center text-md-start">
              <h5 className="color-white wow fadeInDown">
                Subscribe to see secret deals prices drop the moment you sign up!
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
                  2356 Oakwood Drive, Suite 18, San Francisco, California 94111,
                  US
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
  </main>
  </div>
  )
}

export default ContactPage