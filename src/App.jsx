import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Homepage from "./pages/Homepage";
import About from "./components/AboutUs/About";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CarFilterPage from "./components/CarFilterPage/CarFilterPage";
import CarDeatailPage from "./components/CarDetailPage/CarDeatailPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ScrollToTop from "./pages/ScrollToTop";
import AdminPage from "./components/AdminSection/AdminPage";
import ProductDetail from "./components/AdminSection/Product/ProductDetail";
import CreateCar from "./components/AdminSection/Product/ProductCreation";
import ProductView from "./components/AdminSection/Product/ProductView";
import BannerRotation from "./components/BannerRotation/BannerRotation";
import UserLogin from "./components/AdminSection/Login/Login";
import UploadPopupImage from "./components/Popup/UploadPopupImage";
import axios from "axios";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [imageUrl, setImageUrl] = useState(null); // State to store the image URL

  useEffect(() => {
    // Check if the pop-up has been shown for this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      const timer = setTimeout(async () => {
        try {
          // Fetch the image URL from the backend
          const response = await axios.get(`${import.meta.env.VITE_URL}Anytime/getFirstImage`);
          
          if (response.data.success && response.data.imagePath) {
            // If there is a valid image path, show the popup
            setImageUrl(`${import.meta.env.VITE_URL}${response.data.imagePath}`);
            setShowPopup(true);
            sessionStorage.setItem("hasSeenPopup", "true");
          } else {
            // If no image path is provided, do not show the popup
            console.log("No image available.");
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      }, 5000); 

      return () => clearTimeout(timer); 
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <ScrollToTop />

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Pop-up Title</h2>
            <p>This is a pop-up message!</p>
            {imageUrl ? (
              <img src={imageUrl} alt="Popup" style={{ width: "100%", height: "auto" }} />
            ) : (
              <p>Loading image...</p>
            )}
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/CarFilterPage" element={<CarFilterPage />} />
        <Route path="/CarFilterPage/:category" element={<CarFilterPage />} />
        <Route path="/CarDetilPage/:id" element={<CarDeatailPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/createcar" element={<CreateCar />} />
        <Route path="/BannerRotation" element={<BannerRotation />} />
        <Route path="/ProductPage" element={<ProductView />} />
        <Route path="/UploadPopupImage" element={<UploadPopupImage />} />
        <Route path="/car/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
