import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./components/AboutUs/About";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import CarFilterPage from "./components/CarFilterPage/CarFilterPage";
import CarDeatailPage from "./components/CarDetailPage/CarDeatailPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<ServicesPage />} />
        <Route path="/CarFilterPage" element={<CarFilterPage />} />
        <Route path="/CarDetilPage" element={<CarDeatailPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
