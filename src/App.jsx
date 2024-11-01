import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import PickUpMessage from "./components/PickUpMessage/PickUpMessage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/CarFilterPage" element={<CarFilterPage />} />
        <Route path="/CarDetilPage/:id" element={<CarDeatailPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/createcar" element={<CreateCar />} />
        <Route path="/BannerRotation" element={<BannerRotation />} />
        <Route path="/PickUpMessage" element={<PickUpMessage />} />

        <Route path="/ProductPage" element={<ProductView />} />
        <Route path="/car/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
