import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import IndexPage from "../components/IndexPage";
import Navbar from "../components/Navbar/Navbar";
import Loading from "./Loading";

const Homepage = () => {
  return (
    <div>
<Helmet>
  <title>Anytime Qatar | best Car Rental in Qatar</title>
  <meta
    name="description"
    content="Explore premium car rentals, limousine services, and transportation options in Qatar. From luxury car rentals to airport transfers, enjoy high-quality services tailored to your needs."
  />

  <meta
    name="keywords"
    content="car rental Qatar, limousine service Qatar, transportation service Qatar, rent a car Qatar, luxury car rental Qatar, airport transfer Qatar, chauffeur service Qatar"
  />

  <link rel="canonical" href={`${import.meta.env.VITE_URL_SEO}`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Anytime Rent Car" />
  <meta
    property="og:description"
    content="Elevate your Qatar experience with our premium car rental, limousine service, and airport transfer solutions with Anytime Car Rental."
  />
  <meta property="og:url" content={`${import.meta.env.VITE_URL_SEO}`} />
  <meta
  property="og:image"
  content={`${import.meta.env.VITE_URL_SEO}favicon.png`}
/>

  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@twitterhandle" />
  <meta name="twitter:title" content="Anytime rent a car" />
  <meta
    name="twitter:description"
    content="Explore Qatar in style and comfort with our diverse fleet of luxury vehicles and professional chauffeurs."
  />
  <meta
    name="twitter:image"
    content={`${import.meta.env.VITE_URL_SEO}favicon.png`}
  />
</Helmet>


      <Suspense fallback={<Loading />}>
        <Navbar />
        <IndexPage />
      </Suspense>
    </div>
  );
};

export default Homepage;
