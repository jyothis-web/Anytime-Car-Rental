import { useState, useEffect } from 'react';
import './Carbanner.css';

const BannerRotation = () => {
  const images = ['/assets/imgs/banners/1.avif', '/assets/imgs/banners/2.avif','/assets/imgs/banners/3.avif',];
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
        <h2>Rent a Car Anytime</h2>
        <p>Your Journey is Our Priority <br/> Enjoy the freedom to explore with ease and confidence.</p>
      </div>
      <div>
      <img src={images[currentIndex]} alt={`Car ${currentIndex + 1}`} className="car-image-banner" />
      </div>
    </div>
  );
};

export default BannerRotation;
