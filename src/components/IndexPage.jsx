import Banner from "./Banner/Banner";
import BrowseByType from "./BrowseByType/BrowseByType";
import CarBrands from "./CarBrands/CarBrands";
import Footer from "./Footer/Footer";
import HowItWorks from "./HowItWorks/HowItWorks";
import MiddleBannners from "./MiddleBannners/MiddleBannners";
import Testimonials from "./Testimonails/Testimonials";
import PopularCars from "./PopularCars/PopularCars";
import VediosReview from "./Vedios/VediosReview";
import CounterDigits from "./CounterDigits/CounterDigits";
import FeaturedCars from "./FearturedCars/FeaturedCars";

const IndexPage = () => {
  return (
    <div>
     
      <link href="assets/css/main.css?v=1.0.0" rel="stylesheet" />

   

      <main className="main">
        <Banner />
        <BrowseByType />
        <PopularCars />
        <MiddleBannners />
        <VediosReview />
        <CounterDigits />
        <HowItWorks />
        <FeaturedCars />
        <CarBrands />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
