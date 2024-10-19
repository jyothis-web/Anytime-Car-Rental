import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const CarDeatailPage = () => {
  const images = [
    "assets/imgs/cars-details/banner.png",
    "assets/imgs/cars-details/banner2.png",
    "assets/imgs/cars-details/banner3.png",
    // "assets/imgs/cars-details/banner4.png",
    // "assets/imgs/cars-details/banner5.png",
  ];

  // State for currently selected image
  const [mainImage, setMainImage] = useState(images[0]);

  // Thumbnail click handler
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const thumbnailSettings = {
    slidesToShow: 5, // Number of thumbnails to show
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  };

  return (
    <div>
      {/* offCanvas Sidebar */}
      <Navbar/>

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
                <a href="destination.html">Cars Rental</a>
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
                <span className="text-breadcrumb">Hyundai Accent 2025 </span>
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
                  <div className="banner-slide-activity">
                    <img src={mainImage} alt="Selected Car" />
                  </div>
                </div>
                {/* Button Links */}
                <div className="box-button-abs">
                  <a className="btn btn-primary rounded-pill" href="#">
                    See All Photos
                  </a>
                  <a
                    className="btn btn-white-md popup-youtube"
                    href="https://www.youtube.com/watch?v=AOg61RB75Ho"
                  >
                    <img
                      src="assets/imgs/page/activities/video.svg"
                      alt="Video"
                    />
                    Video Clips
                  </a>
                </div>
              </div>
              {/* Thumbnails */}
              <div className="slider-thumnail-activities">
                <Slider {...thumbnailSettings}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="banner-slide"
                      onClick={() => handleThumbnailClick(image)}
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
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
                  <span className="rating">
                    4.96{" "}
                    <span className="text-sm-medium neutral-500">
                      (672 reviews)
                    </span>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="tour-title-main">
                    <h4 className="neutral-1000">
                      Hyundai Accent 2015 - Modern compact sedan in blue color
                      on beautiful dark wheels
                    </h4>
                  </div>
                </div>
              </div>
              <div className="tour-metas">
                <div className="tour-meta-left">
                  <p className="text-md-medium neutral-1000 mr-20 tour-location">
                    <svg
                      className="invert"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99967 0C4.80452 0 2.20508 2.59944 2.20508 5.79456C2.20508 9.75981 7.39067 15.581 7.61145 15.8269C7.81883 16.0579 8.18089 16.0575 8.38789 15.8269C8.60867 15.581 13.7943 9.75981 13.7943 5.79456C13.7942 2.59944 11.1948 0 7.99967 0ZM7.99967 8.70997C6.39211 8.70997 5.0843 7.40212 5.0843 5.79456C5.0843 4.187 6.39214 2.87919 7.99967 2.87919C9.6072 2.87919 10.915 4.18703 10.915 5.79459C10.915 7.40216 9.6072 8.70997 7.99967 8.70997Z"
                        fill="#101010"
                      />
                    </svg>
                    Las Vegas, USA
                  </p>
                  <a className="text-md-medium neutral-1000 mr-30" href="#">
                    Show on map
                  </a>
                  <p className="text-md-medium neutral-1000 tour-code mr-15">
                    <svg
                      className="invert"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2729 0.273646C13.4097 0.238432 13.5538 0.24262 13.6884 0.28573L18.5284 1.83572L18.5474 1.84209C18.8967 1.96436 19.1936 2.19167 19.4024 2.4875C19.5891 2.75202 19.7309 3.08694 19.7489 3.46434C19.7494 3.47622 19.7497 3.4881 19.7497 3.49998V15.5999C19.7625 15.8723 19.7102 16.1395 19.609 16.3754C19.6059 16.3827 19.6026 16.39 19.5993 16.3972C19.476 16.6613 19.3017 16.8663 19.1098 17.0262C19.1023 17.0324 19.0947 17.0385 19.087 17.0445C18.8513 17.2258 18.5774 17.3363 18.2988 17.3734L18.2927 17.3743C18.0363 17.4063 17.7882 17.3792 17.5622 17.3133C17.5379 17.3081 17.5138 17.3016 17.4901 17.294L13.4665 16.0004L6.75651 17.7263C6.62007 17.7614 6.47649 17.7574 6.34221 17.7147L1.47223 16.1647C1.46543 16.1625 1.45866 16.1603 1.45193 16.1579C1.0871 16.0302 0.813939 15.7971 0.613929 15.5356C0.608133 15.528 0.602481 15.5203 0.596973 15.5125C0.395967 15.2278 0.277432 14.8905 0.260536 14.5357C0.259972 14.5238 0.259689 14.5119 0.259689 14.5V2.39007C0.246699 2.11286 0.301239 1.83735 0.420015 1.58283C0.544641 1.31578 0.724533 1.10313 0.942417 0.93553C1.17424 0.757204 1.45649 0.6376 1.7691 0.61312C2.03626 0.583264 2.30621 0.616234 2.56047 0.712834L6.56277 1.99963L13.2729 0.273646ZM13.437 1.78025L6.72651 3.50634C6.58929 3.54162 6.44493 3.53736 6.31011 3.49398L2.08011 2.13402C2.06359 2.1287 2.04725 2.12282 2.03113 2.11637C2.00054 2.10413 1.96854 2.09972 1.93273 2.10419C1.91736 2.10611 1.90194 2.10756 1.88649 2.10852C1.88649 2.10852 1.88436 2.10866 1.88088 2.11001C1.8771 2.11149 1.86887 2.11532 1.85699 2.12447C1.81487 2.15686 1.79467 2.18421 1.77929 2.21715C1.76189 2.25446 1.75611 2.28942 1.75823 2.32321C1.7592 2.33879 1.75969 2.35439 1.75969 2.36999V14.4772C1.76448 14.5336 1.78316 14.5879 1.81511 14.6367C1.86704 14.7014 1.90866 14.7272 1.94108 14.7398L6.59169 16.2199L13.3028 14.4937C13.44 14.4584 13.5844 14.4626 13.7192 14.506L17.8938 15.8482C17.9184 15.8537 17.9428 15.8605 17.9669 15.8685C18.0209 15.8865 18.0669 15.8902 18.1034 15.8862C18.1214 15.8833 18.1425 15.8759 18.1629 15.8623C18.1981 15.8309 18.2196 15.8024 18.2346 15.7738C18.2473 15.7399 18.2533 15.7014 18.2511 15.6668C18.2502 15.6512 18.2497 15.6356 18.2497 15.62V3.52464C18.2453 3.48222 18.2258 3.42174 18.1769 3.3525C18.147 3.3102 18.1062 3.2784 18.0582 3.26022L13.437 1.78025Z"
                        fill="#101010"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.55957 2.01953C6.97375 2.01953 7.30957 2.35532 7.30957 2.76953V16.9195C7.30957 17.3338 6.97375 17.6695 6.55957 17.6695C6.14533 17.6695 5.80957 17.3338 5.80957 16.9195V2.76953C5.80957 2.35532 6.14533 2.01953 6.55957 2.01953Z"
                        fill="#101010"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4893 0.330078C13.9035 0.330078 14.2393 0.665862 14.2393 1.08008V15.2301C14.2393 15.6443 13.9035 15.9801 13.4893 15.9801C13.0751 15.9801 12.7393 15.6443 12.7393 15.2301V1.08008C12.7393 0.665862 13.0751 0.330078 13.4893 0.330078Z"
                        fill="#101010"
                      />
                    </svg>
                    Fleet Code:
                  </p>
                  <a className="text-md-medium neutral-1000" href="#">
                    LVA-4125
                  </a>
                </div>
                <div className="tour-meta-right">
                  <a className="btn btn-share" href="#">
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
                  </a>
                  <a className="btn btn-wishlish" href="#">
                    <svg
                      width={20}
                      height={18}
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.2222 2.3638C4.34203 0.243977 7.65342 0.0419426 10.0004 1.7577C12.3473 0.0419426 15.6587 0.243977 17.7786 2.3638C20.1217 4.70695 20.1217 8.50594 17.7786 10.8491L12.1217 16.5059C10.9501 17.6775 9.05063 17.6775 7.87906 16.5059L2.2222 10.8491C-0.120943 8.50594 -0.120943 4.70695 2.2222 2.3638Z"
                        fill=""
                      />
                    </svg>
                    Wishlish
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-30">
              <div className="col-lg-8">
                <div className="box-feature-car">
                  <div className="list-feature-car">
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/km.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">56,500</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/diesel.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">Diesel</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/auto.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            Automatic
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/seat.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">7 seats</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/bag.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">
                            3 Large bags
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/suv.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">SUVs</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/door.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">4 Doors</p>
                        </div>
                      </div>
                    </div>
                    <div className="item-feature-car w-md-25">
                      <div className="item-feature-car-inner">
                        <div className="feature-image">
                          <img
                            src="assets/imgs/page/car/lit.svg"
                            alt="Carento"
                          />
                        </div>
                        <div className="feature-info">
                          <p className="text-md-medium neutral-1000">2.5L</p>
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
                        <p>
                          Introducing the epitome of modern sophistication in
                          the realm of compact SUVs – the Seltos K3. Dressed in
                          a captivating blue hue that exudes elegance and flair,
                          this dynamic vehicle stands as a testament to
                          innovation and style. With its sleek design
                          accentuated by striking dark wheels, the Seltos K3 is
                          not merely a mode of transportation but a statement of
                          refined taste and contemporary living.
                        </p>
                        <p>
                          Prepare to embark on a journey where cutting-edge
                          technology meets unparalleled comfort, all wrapped in
                          a package of unparalleled aesthetics. Join us as we
                          delve into the world of the Seltos K3, where every
                          detail is crafted to elevate your driving experience
                          to new heights.
                        </p>
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
                      <h6>Included in the price</h6>
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
                    <div className="collapse show" id="collapseItinerary">
                      <div className="card card-body">
                        <ul className="list-checked-green">
                          <li>
                            Free cancellation up to 48 hours before pick-up
                          </li>
                          <li>Collision Damage Waiver with $700 deductible</li>
                          <li>Theft Protection with ₫66,926,626 excess</li>
                          <li>Unlimited mileage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="group-collapse-expand">
                    <button
                      className="btn btn-collapse"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseQuestion"
                      aria-expanded="false"
                      aria-controls="collapseQuestion"
                    >
                      <h6>Question &amp; Answers</h6>
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
                    <div className="collapse show" id="collapseQuestion">
                      <div className="card card-body">
                        <div className="list-questions">
                          <div className="item-question">
                            <div className="head-question">
                              <p className="text-md-bold neutral-1000">
                                Is The High Roller suitable for all ages?
                              </p>
                            </div>
                            <div className="content-question">
                              <p className="text-sm-medium neutral-800">
                                Absolutely! The High Roller offers a
                                family-friendly experience suitable for visitors
                                of all ages. Children must be accompanied by an
                                adult.
                              </p>
                            </div>
                          </div>
                          <div className="item-question active">
                            <div className="head-question">
                              <p className="text-md-bold neutral-1000">
                                Can I bring food or drinks aboard The High
                                Roller?
                              </p>
                            </div>
                            <div className="content-question">
                              <p className="text-sm-medium neutral-800">
                                Outside food and beverages are not permitted on
                                The High Roller. However, there are nearby
                                dining options at The LINQ Promenade where you
                                can enjoy a meal before or after your ride.
                              </p>
                            </div>
                          </div>
                          <div className="item-question">
                            <div className="head-question">
                              <p className="text-md-bold neutral-1000">
                                Is The High Roller wheelchair accessible?
                              </p>
                            </div>
                            <div className="content-question">
                              <p className="text-sm-medium neutral-800">
                                es, The High Roller cabins are wheelchair
                                accessible, making it possible for everyone to
                                enjoy the breathtaking views of Las Vegas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-form">
                    <div className="head-booking-form">
                      <p className="text-xl-bold neutral-1000">
                        Rent This Vehicle
                      </p>
                    </div>
                    <div className="content-booking-form">
                      <div className="item-line-booking border-bottom-0 pb-0">
                        <strong className="text-md-bold neutral-1000">
                          Pick-Up
                        </strong>
                        <div className="input-calendar">
                          <input
                            className="form-control calendar-date"
                            type="text"
                            defaultValue="17/02/2025"
                          />
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5312 1.3828H13.8595V0.703125C13.8595 0.314789 13.5448 0 13.1564 0C12.7681 0 12.4533 0.314789 12.4533 0.703125V1.3828H5.55469V0.703125C5.55469 0.314789 5.2399 0 4.85156 0C4.46323 0 4.14844 0.314789 4.14844 0.703125V1.3828H3.47678C1.55967 1.3828 0 2.94247 0 4.85954V14.5232C0 16.4403 1.55967 18 3.47678 18H14.5313C16.4483 18 18.008 16.4403 18.008 14.5232V4.85954C18.008 2.94247 16.4483 1.3828 14.5312 1.3828ZM3.47678 2.78905H4.14844V4.16014C4.14844 4.54848 4.46323 4.86327 4.85156 4.86327C5.2399 4.86327 5.55469 4.54848 5.55469 4.16014V2.78905H12.4533V4.16014C12.4533 4.54848 12.7681 4.86327 13.1565 4.86327C13.5448 4.86327 13.8596 4.54848 13.8596 4.16014V2.78905H14.5313C15.6729 2.78905 16.6018 3.71788 16.6018 4.85954V5.53124H1.40625V4.85954C1.40625 3.71788 2.33508 2.78905 3.47678 2.78905ZM14.5312 16.5938H3.47678C2.33508 16.5938 1.40625 15.6649 1.40625 14.5232V6.93749H16.6018V14.5232C16.6018 15.6649 15.6729 16.5938 14.5312 16.5938ZM6.24611 9.70312C6.24611 10.0915 5.93132 10.4062 5.54298 10.4062H4.16018C3.77184 10.4062 3.45705 10.0915 3.45705 9.70312C3.45705 9.31479 3.77184 9 4.16018 9H5.54298C5.93128 9 6.24611 9.31479 6.24611 9.70312ZM14.551 9.70312C14.551 10.0915 14.2362 10.4062 13.8479 10.4062H12.4651C12.0767 10.4062 11.7619 10.0915 11.7619 9.70312C11.7619 9.31479 12.0767 9 12.4651 9H13.8479C14.2362 9 14.551 9.31479 14.551 9.70312ZM10.3945 9.70312C10.3945 10.0915 10.0798 10.4062 9.69142 10.4062H8.30862C7.92028 10.4062 7.60549 10.0915 7.60549 9.70312C7.60549 9.31479 7.92028 9 8.30862 9H9.69142C10.0797 9 10.3945 9.31479 10.3945 9.70312ZM6.24611 13.8516C6.24611 14.2399 5.93132 14.5547 5.54298 14.5547H4.16018C3.77184 14.5547 3.45705 14.2399 3.45705 13.8516C3.45705 13.4632 3.77184 13.1484 4.16018 13.1484H5.54298C5.93128 13.1484 6.24611 13.4632 6.24611 13.8516ZM14.551 13.8516C14.551 14.2399 14.2362 14.5547 13.8479 14.5547H12.4651C12.0767 14.5547 11.7619 14.2399 11.7619 13.8516C11.7619 13.4632 12.0767 13.1484 12.4651 13.1484H13.8479C14.2362 13.1484 14.551 13.4632 14.551 13.8516ZM10.3945 13.8516C10.3945 14.2399 10.0798 14.5547 9.69142 14.5547H8.30862C7.92028 14.5547 7.60549 14.2399 7.60549 13.8516C7.60549 13.4632 7.92028 13.1484 8.30862 13.1484H9.69142C10.0797 13.1484 10.3945 13.4632 10.3945 13.8516Z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="item-line-booking">
                        <strong className="text-md-bold neutral-1000">
                          Drop-Off
                        </strong>
                        <div className="input-calendar">
                          <input
                            className="form-control calendar-date"
                            type="text"
                            defaultValue="19/02/2025"
                          />
                          <svg
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.5312 1.3828H13.8595V0.703125C13.8595 0.314789 13.5448 0 13.1564 0C12.7681 0 12.4533 0.314789 12.4533 0.703125V1.3828H5.55469V0.703125C5.55469 0.314789 5.2399 0 4.85156 0C4.46323 0 4.14844 0.314789 4.14844 0.703125V1.3828H3.47678C1.55967 1.3828 0 2.94247 0 4.85954V14.5232C0 16.4403 1.55967 18 3.47678 18H14.5313C16.4483 18 18.008 16.4403 18.008 14.5232V4.85954C18.008 2.94247 16.4483 1.3828 14.5312 1.3828ZM3.47678 2.78905H4.14844V4.16014C4.14844 4.54848 4.46323 4.86327 4.85156 4.86327C5.2399 4.86327 5.55469 4.54848 5.55469 4.16014V2.78905H12.4533V4.16014C12.4533 4.54848 12.7681 4.86327 13.1565 4.86327C13.5448 4.86327 13.8596 4.54848 13.8596 4.16014V2.78905H14.5313C15.6729 2.78905 16.6018 3.71788 16.6018 4.85954V5.53124H1.40625V4.85954C1.40625 3.71788 2.33508 2.78905 3.47678 2.78905ZM14.5312 16.5938H3.47678C2.33508 16.5938 1.40625 15.6649 1.40625 14.5232V6.93749H16.6018V14.5232C16.6018 15.6649 15.6729 16.5938 14.5312 16.5938ZM6.24611 9.70312C6.24611 10.0915 5.93132 10.4062 5.54298 10.4062H4.16018C3.77184 10.4062 3.45705 10.0915 3.45705 9.70312C3.45705 9.31479 3.77184 9 4.16018 9H5.54298C5.93128 9 6.24611 9.31479 6.24611 9.70312ZM14.551 9.70312C14.551 10.0915 14.2362 10.4062 13.8479 10.4062H12.4651C12.0767 10.4062 11.7619 10.0915 11.7619 9.70312C11.7619 9.31479 12.0767 9 12.4651 9H13.8479C14.2362 9 14.551 9.31479 14.551 9.70312ZM10.3945 9.70312C10.3945 10.0915 10.0798 10.4062 9.69142 10.4062H8.30862C7.92028 10.4062 7.60549 10.0915 7.60549 9.70312C7.60549 9.31479 7.92028 9 8.30862 9H9.69142C10.0797 9 10.3945 9.31479 10.3945 9.70312ZM6.24611 13.8516C6.24611 14.2399 5.93132 14.5547 5.54298 14.5547H4.16018C3.77184 14.5547 3.45705 14.2399 3.45705 13.8516C3.45705 13.4632 3.77184 13.1484 4.16018 13.1484H5.54298C5.93128 13.1484 6.24611 13.4632 6.24611 13.8516ZM14.551 13.8516C14.551 14.2399 14.2362 14.5547 13.8479 14.5547H12.4651C12.0767 14.5547 11.7619 14.2399 11.7619 13.8516C11.7619 13.4632 12.0767 13.1484 12.4651 13.1484H13.8479C14.2362 13.1484 14.551 13.4632 14.551 13.8516ZM10.3945 13.8516C10.3945 14.2399 10.0798 14.5547 9.69142 14.5547H8.30862C7.92028 14.5547 7.60549 14.2399 7.60549 13.8516C7.60549 13.4632 7.92028 13.1484 8.30862 13.1484H9.69142C10.0797 13.1484 10.3945 13.4632 10.3945 13.8516Z"
                              fill=""
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="item-line-booking">
                        <div className="box-tickets">
                          <strong className="text-md-bold neutral-1000">
                            Add Extra:
                          </strong>
                          <div className="line-booking-tickets">
                            <div className="item-ticket">
                              <ul className="list-filter-checkbox">
                                <li>
                                  <label className="cb-container">
                                    {" "}
                                    <input type="checkbox" />
                                    <span className="text-md-medium">
                                      GPS Navigation System{" "}
                                    </span>
                                    <span className="checkmark" />{" "}
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div className="include-price">
                              <p className="text-md-bold neutral-1000">
                                $25.00
                              </p>
                            </div>
                          </div>
                          <div className="line-booking-tickets">
                            <div className="item-ticket">
                              <ul className="list-filter-checkbox">
                                <li>
                                  <label className="cb-container">
                                    {" "}
                                    <input type="checkbox" />
                                    <span className="text-md-medium">
                                      Child Seat{" "}
                                    </span>
                                    <span className="checkmark" />{" "}
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div className="include-price">
                              <p className="text-md-bold neutral-1000">
                                $32.00
                              </p>
                            </div>
                          </div>
                          <div className="line-booking-tickets">
                            <div className="item-ticket">
                              <ul className="list-filter-checkbox">
                                <li>
                                  <label className="cb-container">
                                    {" "}
                                    <input type="checkbox" />
                                    <span className="text-md-medium">
                                      Additional Driver{" "}
                                    </span>
                                    <span className="checkmark" />{" "}
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div className="include-price">
                              <p className="text-md-bold neutral-1000">
                                $25.00
                              </p>
                            </div>
                          </div>
                          <div className="line-booking-tickets">
                            <div className="item-ticket">
                              <ul className="list-filter-checkbox">
                                <li>
                                  <label className="cb-container">
                                    {" "}
                                    <input type="checkbox" />
                                    <span className="text-md-medium">
                                      Insurance Coverage{" "}
                                    </span>
                                    <span className="checkmark" />{" "}
                                  </label>
                                </li>
                              </ul>
                            </div>
                            <div className="include-price">
                              <p className="text-md-bold neutral-1000">
                                $52.00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item-line-booking last-item pb-0">
                        <strong className="text-md-medium neutral-1000">
                          Subtotal
                        </strong>
                        <div className="line-booking-right">
                          <p className="text-xl-bold neutral-1000">$124.00</p>
                        </div>
                      </div>
                      <div className="item-line-booking last-item pb-0">
                        <strong className="text-md-medium neutral-1000">
                          Sale discount
                        </strong>
                        <div className="line-booking-right">
                          <p className="text-xl-bold neutral-1000">$124.00</p>
                        </div>
                      </div>
                      <div className="item-line-booking last-item">
                        <strong className="text-md-bold neutral-1000">
                          Total Payable
                        </strong>
                        <div className="line-booking-right">
                          <p className="text-xl-bold neutral-1000">$124.00</p>
                        </div>
                      </div>
                      <div className="box-button-book">
                        <a className="btn btn-book" href="#">
                          Book Now
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15L15 8L8 1M15 8L1 8"
                              stroke=""
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                      <div className="box-need-help">
                        <a href="#">
                          <svg
                            width={12}
                            height={14}
                            viewBox="0 0 12 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.83366 3.66667C2.83366 1.92067 4.25433 0.5 6.00033 0.5C7.74633 0.5 9.16699 1.92067 9.16699 3.66667C9.16699 5.41267 7.74633 6.83333 6.00033 6.83333C4.25433 6.83333 2.83366 5.41267 2.83366 3.66667ZM8.00033 7.83333H4.00033C1.88699 7.83333 0.166992 9.55333 0.166992 11.6667C0.166992 12.678 0.988992 13.5 2.00033 13.5H10.0003C11.0117 13.5 11.8337 12.678 11.8337 11.6667C11.8337 9.55333 10.1137 7.83333 8.00033 7.83333Z"
                              fill=""
                            />
                          </svg>
                          Need some help?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-left border-1 background-card">
                    <h6 className="text-xl-bold neutral-1000">Listed by</h6>
                    <div className="box-sidebar-content">
                      <div className="box-agent-support border-bottom pb-3 mb-3">
                        <div className="card-author">
                          <div className="me-2">
                            <img
                              src="assets/imgs/template/icons/car-1.png"
                              alt="Carento"
                            />
                          </div>
                          <div className="card-author-info">
                            <p className="text-lg-bold neutral-1000">
                              Emily Rose
                            </p>
                            <p className="text-sm-medium neutral-500">
                              Las Vegas, USA
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="box-info-contact">
                        <p className="text-md-medium mobile-phone neutral-1000">
                          <span className="text-md-bold">Mobile:</span>{" "}
                          1-222-333-4444
                        </p>
                        <p className="text-md-medium email neutral-1000">
                          <span className="text-md-bold">Email:</span>{" "}
                          emily-rose@gmail.com
                        </p>
                        <p className="text-md-medium whatsapp neutral-1000">
                          <span className="text-md-bold">WhatsApp:</span>{" "}
                          1-222-333-4444
                        </p>
                        <p className="text-md-medium fax neutral-1000">
                          <span className="text-md-bold">Fax:</span>{" "}
                          1-222-333-4444
                        </p>
                      </div>
                      <div className="box-link-bottom">
                        <a
                          className="btn btn-primary py-3 w-100 rounded-3"
                          href="#"
                        >
                          All items by this dealer
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 15L15 8L8 1M15 8L1 8"
                              stroke=""
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
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
      </main>
    </div>
  );
};

export default CarDeatailPage;
