import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./ContactForm.css";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us | Anytime Car Rental in Qatar</title>

        <meta
          name="description"
          content="Contact Anytime Car Rental for affordable car rentals, limousine services, and transportation solutions in Qatar. Serving Al Rayyan, Mesaieed, Dukhan, Abu Samra, and Ruwais areas with reliable, door-to-door service for your convenience."
        />

        <meta
          name="keywords"
          content="car rental Qatar contact, limousine service contact Qatar, transportation service Qatar, rent a car Qatar contact, airport transfer Qatar, chauffeur service Qatar, contact Anytime Car Rental"
        />

        <link rel="canonical" href="https://anytimeqatar.com/Contact" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Contact Anytime Car Rental in Qatar"
        />
        <meta
          property="og:description"
          content="Get in touch with Anytime Car Rental for premium car rentals, limousine services, and airport transfers in Qatar. Contact us today for reliable and affordable transportation services."
        />
        <meta property="og:url" content="https://anytimeqatar.com/Contact" />
        <meta
          property="og:image"
          content="https://anytimeqatar.com/favicon.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@twitterhandle" />
        <meta
          name="twitter:title"
          content="Contact Anytime Car Rental in Qatar"
        />
        <meta
          name="twitter:description"
          content="Reach out to Anytime Car Rental in Qatar for luxury car rentals, airport transfers, and professional chauffeur services. Let us help with all your transportation needs."
        />
        <meta
          name="twitter:image"
          content="https://anytimeqatar.com/favicon.png"
        />
      </Helmet>

      <Navbar />
      <main className="main">
        {/* page header */}
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 rounded-12 img-banner"
                src="assets/imgs/page-header/banner4.png"
                alt="Anytime car rental"
              />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">Get in touch</h2>
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
              <Link to="/ContactPage" className="neutral-1000 text-md-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="contact-page">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1035361705494!2d51.4840625!3d25.233437499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1ddec590db7%3A0x70089f96c5f32e7e!2zQW55dGltZSBSZW50IEEgQ2FyICYgTGltb3VzaW5lIFNlcnZpY2Ug2YHZiiDYo9mKINmI2YLYqiDZhNiq2KPYrNmK2LEg2KfZhNiz2YrYp9ix2KfYqiDZiNiu2K_ZhdipINin2YTZhNmK2YXZiNiy2YrZhg!5e0!3m2!1sen!2sin!4v1730527720933!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>

          <div className="info-container">
            <div className="info-box">
              <h2>ADDRESS</h2>
              <p>
                Street No 955, Building No 128, Zone 56 Food Supply Co Building,
                Mezzanine Floor Near Messaimer Health Center, Doha, Qatar
              </p>
            </div>
            <div className="divider"></div>
            <div className="info-box">
              <h2>CALL US</h2>
              <p>+974 71120333</p>
              <p>+974 44361949</p>

              {/* <p>Email: forleodxb@gmail.com</p> */}
            </div>
            <div className="divider"></div>
            <div className="info-box">
              <h2>EMAIL</h2>
              <p>info@anytimeqatar.com</p>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-heading">
              <h2>Get In Touch</h2>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="input-group"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
