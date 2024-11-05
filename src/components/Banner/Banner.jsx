import CarBooking from "../CarBooking/CarBooking";

const Banner = () => {
  return (
    <div>
      <section className="">
        {/* <div className="container"></div> */}
        <div>
          <div className="banner-container">
            <div className="banner-content">
              <div className="overlay"></div>
              <div className="fade-in">
                <img
                  src="/assets/banner.avif"
                  alt="Banner"
                  className="banner-image"
                />
              </div>
            </div>
          </div>
        </div>
        <CarBooking />
      </section>
    </div>
  );
};

export default Banner;
