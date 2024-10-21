import Footer from "../Footer/Footer"
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
    <Footer/>
  </main>
  </div>
  )
}

export default ContactPage