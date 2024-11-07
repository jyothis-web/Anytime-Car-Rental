import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import "./cardetail.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const CarDeatailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL}anytime/singleCar/${id}`
        );
        setProduct(response.data.car); // Adjust based on your API response structure
        setIsLoading(false);
      } catch (err) {
        setError(err.response ? err.response.data : err.message);
        setIsLoading(false);
      }
    };

    fetchSingleProduct();
  }, [id]);

  const images = product
    ? [
        product.carImage1?.imagePath,
        product.carImage2?.imagePath,
        product.carImage3?.imagePath,
        product.carImage4?.imagePath,
        product.carImage5?.imagePath,
        product.carImage6?.imagePath,
      ].filter(Boolean)
    : [];

  // State for currently selected image
  const [mainImage, setMainImage] = useState("");

  // Thumbnail click handler
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const thumbnailSettings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    focusOnSelect: false, // Disable focusing on selected image to prevent shifting
  };

  const shareDetails = async () => {
    if (!product) return;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.brand} - ${product.brandModel}`,
          text: `${product.brand} - ${product.brandModel} (${product.year})`,
          url: window.location.href,
        });
        console.log("Car details and link shared successfully");
      } catch (error) {
        console.error("Error sharing car details:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;
  return (
    <div>
      {/* offCanvas Sidebar */}

      <main className="main">
        {/* prettier-ignore */}
        {/* cars-details 1*/}
        <section className="box-section box-breadcrumb background-body">
          <div className="container">
            <ul className="breadcrumbs">
              <li>
                <Link to="/">
                  <p>Home</p>
                </Link>
                <span className="arrow-right">
                  <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L6 6L1 1"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <Link to="/CarFilterPage">
                  <div>Cars Rental</div>
                </Link>
                <span className="arrow-right">
                  <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L6 6L1 1"
                      stroke=""
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <span className="text-breadcrumb">{product.brandModel} </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="section-box box-banner-home2 background-body">
          <div className="container">
            <div className="container-banner-activities">
              {/* Main Image */}
              <div className="box-banner-activities">
                <div className="banner-activities-detail">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={`${import.meta.env.VITE_URL}${
                        mainImage || (images.length > 0 ? images[0] : "")
                      }`}
                      alt={`Image of  ${product.brandModel}`}
                      style={{ maxHeight: "700px" }}
                    />
                  </div>
                </div>
                <div className="box-button-abs"></div>
              </div>
              {/* Thumbnails */}
              <div className="slider-thumnail-activities">
                <Slider {...thumbnailSettings}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`banner-slide ${
                        mainImage === image ? "selected" : ""
                      }`}
                      onClick={() => handleThumbnailClick(image)}
                    >
                      <img
                        src={`${import.meta.env.VITE_URL}${image}`}
                        alt={`Thumbnail ${index + 1}`}
                        style={{ maxHeight: "100px", objectFit: "cover" }}
                        loading="lazy"
                      />
                      {/* Dark overlay and eye icon for selected image */}
                      {mainImage === image && (
                        <div
                          className="overlay"
                          style={{ maxHeight: "100px", objectFit: "cover" }}
                        >
                          <VisibilityIcon sx={{ color: "white" }} />
                        </div>
                      )}
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>
        <section className="box-section box-content-tour-detail background-body">
          <div className="container">
            <div className="tour-header">
              <div className="tour-rate">
                <div className="rate-element">
                  <span className="rating">{product.brand}</span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="tour-title-main">
                    <h4 className="neutral-1000">
                      {product.brandModel}
                    </h4>
                  </div>
                  <div className="tour-meta-right">
                    <div className="btn btn-share" onClick={shareDetails}>
                      <svg
                        width={16}
                        height={18}
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 11.5332C12.012 11.5332 11.1413 12.0193 10.5944 12.7584L5.86633 10.3374C5.94483 10.0698 6 9.79249 6 9.49989C6 9.10302 5.91863 8.72572 5.77807 8.37869L10.7262 5.40109C11.2769 6.04735 12.0863 6.46655 13 6.46655C14.6543 6.46655 16 5.12085 16 3.46655C16 1.81225 14.6543 0.466553 13 0.466553C11.3457 0.466553 10 1.81225 10 3.46655C10 3.84779 10.0785 4.20942 10.2087 4.54515L5.24583 7.53149C4.69563 6.90442 3.8979 6.49989 3 6.49989C1.3457 6.49989 0 7.84559 0 9.49989C0 11.1542 1.3457 12.4999 3 12.4999C4.00433 12.4999 4.8897 11.9996 5.4345 11.2397L10.147 13.6529C10.0602 13.9331 10 14.2249 10 14.5332C10 16.1875 11.3457 17.5332 13 17.5332C14.6543 17.5332 16 16.1875 16 14.5332C16 12.8789 14.6543 11.5332 13 11.5332Z"
                          fill=""
                        />
                      </svg>
                      Share
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-lg-8">
                <div className="box-feature-car">
                  <div className="list-feature-car">
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/km.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.mileage} mileage
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/diesel.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.fuel}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/suv.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-feature-car">
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/seat.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.seat} seats
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/bag.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.bootCapacity} Litres
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-35">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="/assets/imgs/page/car/auto.svg"
                            alt="Anytime"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            {product.transmission}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-collapse-expand">
                  <div className="group-collapse-expand">
                    <button
                      className="btn btn-collapse"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOverview"
                      aria-expanded="false"
                      aria-controls="collapseOverview"
                    >
                      <h6>Overview</h6>
                      <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="collapse show" id="collapseOverview">
                      <div className="card card-body">
                        <p>{product.description1}</p>
                        <p>{product.description2}</p>
                      </div>
                    </div>
                  </div>
                  <div className="group-collapse-expand">
                    <button
                      className="btn btn-collapse"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseItinerary"
                      aria-expanded="false"
                      aria-controls="collapseItinerary"
                    >
                      <h6>Price for Rental</h6>
                      <svg
                        width={12}
                        height={7}
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L6 6L11 1"
                          stroke="#333" // Set stroke color for the arrow
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <div className="collapse show" id="collapseItinerary">
                      <div className="card card-body">
                        <ul className="list-checked-green-price">
                          <li className="price-item">
                            <span className="price-label">
                              Daily Price:&nbsp;
                            </span>
                            <span className="price-value">
                              QAR {product.dailyRent}
                            </span>
                          </li>
                          <li className="price-item">
                            <span className="price-label">
                              Weekly Price:&nbsp;
                            </span>
                            <span className="price-value">
                              QAR {product.weeklyRent}
                            </span>
                          </li>
                          <li
                            className="price-item"
                            style={{ marginBottom: "25px" }}
                          >
                            <span className="price-label">
                              Monthly Price:&nbsp;
                            </span>
                            <span className="price-value">
                              QAR {product.monthlyRent}
                            </span>
                          </li>
                          <div
                            className="card-latest-button"
                            style={{ maxWidth: "120px" }}
                            onClick={() => {
                              const message = `I'm interested in renting the car: ${product.brandModel}. Please provide further details.`;
                              const phoneNumber = "+97471120333";
                              const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
                              window.open(whatsappUrl, "_blank");
                            }}
                          >
                            {" "}
                            {/* Added classes here */}
                            Book Now
                          </div>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CarDeatailPage;
