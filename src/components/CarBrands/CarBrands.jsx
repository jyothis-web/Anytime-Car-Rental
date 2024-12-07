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
         

          <Slider {...settings} className="box-list-brand-car">
            <div className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/1.avif"
                  alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </div>
            <div className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/2.avif"
                  alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </div>
            <div className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/3.avif"
                  alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </div>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/4.avif"
                  alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/5.avif"
                  alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/6.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/7.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/1.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/2.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/3.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>
            <li className="carouselTicker__item">
              <div className="item-brand-2">
                <img
                  className="light-mode"
                  src="assets/imgs/page/homepage2/4.avif"
                   alt="Anytime car rental"
                   width={"300px"}
                  style={{borderRadius:"12px"}}
                />
              </div>
            </li>

           
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarBrands;
