import { Suspense, lazy } from "react";
import Loading from "../pages/Loading";

// Lazy load each component
const Banner = lazy(() => import("./Banner/Banner"));
const BrowseByType = lazy(() => import("./BrowseByType/BrowseByType"));
const CarBrands = lazy(() => import("./CarBrands/CarBrands"));
const Footer = lazy(() => import("./Footer/Footer"));
const HowItWorks = lazy(() => import("./HowItWorks/HowItWorks"));
const MiddleBannners = lazy(() => import("./MiddleBannners/MiddleBannners"));
const Testimonials = lazy(() => import("./Testimonails/Testimonials"));
const PopularCars = lazy(() => import("./PopularCars/PopularCars"));
const VediosReview = lazy(() => import("./Vedios/VediosReview"));
const CounterDigits = lazy(() => import("./CounterDigits/CounterDigits"));
const FeaturedCars = lazy(() => import("./FearturedCars/FeaturedCars"));

const IndexPage = () => {
  return (
    <div>
      <link href="assets/css/main.css?v=1.0.0" rel="stylesheet" />

      {/* Use Suspense to wrap each lazy-loaded component */}
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
};

export default IndexPage;
