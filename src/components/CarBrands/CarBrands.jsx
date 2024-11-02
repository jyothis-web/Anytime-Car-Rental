import Slider from "react-slick";

const CarBrands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000, // Transition speed for sliding between items
    slidesToShow: 6, // Default number of slides to show
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 100, // Autoplay interval (in milliseconds)
    arrows: false, // Remove prev/next buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, // Show 4 slides on screens below 1024px
        },
      },
      {
        breakpoint: 924,
        settings: {
          slidesToShow: 4, // Show 4 slides on screens below 1024px
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3, // Show 3 slides on screens below 600px
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 slides on screens below 480px
        },
      },
    ],
  };

  return (
    <div className="background-100 pb-70">
      <div className="container">
        <div className="box-search-category">
          <h3 className="heading-3 mb-0  pt-96 neutral-1000">Premium Brands</h3>
          <p className="text-lg-medium neutral-500">
            Unveil the Finest Selection of High-End Vehicles
          </p>
          <div className="text-sm-bold neutral-1000">
            Show All Brands
          </div>

          <Slider {...settings} className="box-list-brand-car">
            <div className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/lexus.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/lexus-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </div>
            <div className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/mer.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/mer-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </div>
            <div className="carouselTicker__item">
              <a  className="item-brand-2">
             
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/lexus-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </div>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/mer.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/mer-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/bugatti.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/bugatti-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/jaguar.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/jaguar-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/honda.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/honda-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/chevrolet.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/chevrolet-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/acura.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/acura-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/bmw.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/bmw-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>
            <li className="carouselTicker__item">
              <a  className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/toyota.png"
                  alt="Anytime car rental"
                />
                <img
                  className="dark-mode"
                  src="assets/imgs/page/homepage2/toyota-w.png"
                  alt="Anytime car rental"
                />
              </a>
            </li>

            {/* Add more brands similarly */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarBrands;
