import { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import IndexPage from "../components/IndexPage";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>AnyTimeCarRental</title>
        <meta
          name="description"
          content="Designers & Manufacturers of Eco-Friendly & Sustainable Paper Bags"
        />
        <meta
          name="keywords"
          content="CCTV installation,CCTV camera,CCTV system,Automated gate,Automatic gate,Smart home automation,Home security system,Home automation system,Security system installation,Light automation,Smart lighting"
        />
        <link rel="canonical" href="http://sequrhomautomations.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SeQurHom" />
        <meta
          property="og:description"
          content="At SequrHom, we specialize in providing eco-friendly home automation and advanced security solutions that fit your budget. Our commitment to perfection and cost-effective projects has earned us the trust of our clients. We offer cutting-edge technology with full guarantees, ensuring your home is safe and smart. Our services include Gate Automation, Home Automation, Security Surveillance Systems, Access Control, and more. Choose SequrHom for reliable and modern solutions to secure and automate your home."
        />
        <meta property="og:url" content="http://sequrhomautomations.com/" />
        <meta
          property="og:image"
          content="http://sequrhomautomations.com/public/favicon.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@twitterhandle" />
        <meta name="twitter:title" content="SequrHom" />
        <meta
          name="twitter:description"
          content="At SequrHom, we specialize in providing eco-friendly home automation and advanced security solutions that fit your budget. Our commitment to perfection and cost-effective projects has earned us the trust of our clients. We offer cutting-edge technology with full guarantees, ensuring your home is safe and smart. Our services include Gate Automation, Home Automation, Security Surveillance Systems, Access Control, and more. Choose SequrHom for reliable and modern solutions to secure and automate your home."
        />
        <meta
          name="twitter:image"
          content="http://sequrhomautomations.com/public/favicon.png"
        />
      </Helmet>
      <Suspense>
        {/*Preloader*/}
        {/* <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="text-center">
                <div className="page-loader" />
              </div>
            </div>
          </div>
        </div> */}
        {/*Preloader-end */}
        <Link to="/About"><button>AboutUs</button></Link>
        <Link to="/Services"> <button>Services</button></Link>
        <Link to="/ContactPage"> <button>ContactUs</button></Link>
        <Link to="/CarFilterPage"> <button>CarFilterPage</button></Link>
        <Link to="/CarDetilPage"> <button>CarDetilPage</button></Link>
        <Link to="/ContactPage"> <button>ContactUs</button></Link>
      <Navbar/>
        <IndexPage />
      </Suspense>
    </div>
  );
};

export default Homepage;
