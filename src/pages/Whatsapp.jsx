import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ReactGA from "react-ga4";

//import Switch from "@mui/material/Switch";


const Whatsapp = () => {
  // Initialize theme state based on user preference

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 80) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    ReactGA.event({
      category: "WhatsApp Button",
      action: "Clicked",
      label: "WhatsApp Chat",
    });
  };

  return (
    <div>


      <a
        href="https://wa.me/+97471120333"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="whatsapp"
        onClick={handleWhatsAppClick}

      >
        <div
          className="whatsapp-button"
          style={{ display: showButton ? "block" : "none" }}
        >
          <WhatsAppIcon />
        </div>
      </a>
     
    </div>
  );
};

export default Whatsapp;
