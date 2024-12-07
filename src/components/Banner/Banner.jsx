import { useState, useEffect } from "react";
import CarBooking from "../CarBooking/CarBooking";

const Banner = () => {
  const images = [
    "/assets/banner.avif",
    "/assets/banner2.avif",
    // "/assets/banner.avif",
    // "/assets/banner2.avif",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div>
      <section>
        <div className="banner-container">
          <div className="banner-content">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Qatar Banner ${index + 1}`}
                className={`banner-image ${
                  index === currentImageIndex ? "visible" : "hidden"
                }`}
              />
            ))}
          </div>
        </div>
        <CarBooking />
      </section>
    </div>
  );
};

export default Banner;
