import { useState, useEffect } from 'react';
import './Carbanner.css';

const BannerRotation = () => {
  const images = ['/car-center.png', '/car-center.png', '/car-center.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // Change car every 30 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="car-banner">
      <div className="text-container">
        <h1>Car Title</h1>
        <p>Some details about the car</p>
      </div>
      <div>
      <img src={images[currentIndex]} alt={`Car ${currentIndex + 1}`} className="car-image-banner" />
      </div>
    </div>
  );
};

export default BannerRotation;
