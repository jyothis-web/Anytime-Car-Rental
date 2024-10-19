import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <main className="main">
        <div className="page-header pt-30 background-body">
          <div className="custom-container position-relative mx-auto">
            <div className="bg-overlay rounded-12 overflow-hidden">
              <img
                className="w-100 h-100 img-banner"
                src="assets/imgs/page-header/banner.png"
                alt="Carento"
              />
            </div>
            <div className="container position-absolute z-1 top-50 start-50 translate-middle">
              <h2 className="text-white">About Us</h2>
              <span className="text-white text-xl-medium">
                Get the latest news, updates and tips
              </span>
            </div>
            <div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
              <Link to="/">
                <p className="neutral-700 text-md-medium">Home</p>
              </Link>
              <span>
                <img
                  src="assets/imgs/template/icons/arrow-right.svg"
                  alt="Carento"
                />
              </span>
              <a href="#" className="neutral-1000 text-md-bold">
                About Us
              </a>
            </div>
          </div>
        </div>
        {/* section-1 */}
        <section className="section-1 py-96 background-body">
          <div className="container">
            <div className="row pb-50">
              <div className="col-lg-4">
                <h3 className="neutral-1000">
                  The Future of <br />
                  <span
                    className="text-primary"
                    style={{ paddingRight: "10px" }}
                  >
                    Car Rental
                  </span>
                  is Here
                </h3>
              </div>
              <div className="col-lg-7 offset-lg-1">
                <p className="text-lg-medium neutral-500">
                  Since 2013, Anytime Rent a Car has been Standout in the Car
                  rental industry, offering extraordinary services that
                  transcend the ordinary. with a diverse fleet ranging from
                  Sedans to SUVs and 4x4s, we craft a personalized experience
                  for every traveler. Embark on a journey, not just to a
                  destination with our meticulously maintained fleet of the
                  latest models. From the elegance of sedans to the versatility
                  of SUVs and the rugged capability of 4x4s, our vehicles
                  transform your travel into an unforgettable adventure.
                </p>
                <br />
                
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="box-image rounded-12 position-relative overflow-hidden">
                  <img
                    className="rounded-12"
                    src="assets/imgs/section-1/img-1.png"
                    alt="Carento"
                  />
                  <div className="box-tag bg-white p-3 d-flex position-absolute bottom-0 end-0 rounded-12 m-3"></div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="box-image rounded-12 position-relative overflow-hidden">
                  <img
                    className="rounded-12"
                    src="assets/imgs/section-1/img-2.png"
                    alt="Carento"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="d-flex flex-column gap-4 align-self-stretch h-100">
                  <div className="box-tag background-brand-2 p-5 d-flex rounded-12">
                    <span className="text-dark fs-96 me-3">20</span>
                    <h4>
                      Years in <br />
                      Business
                    </h4>
                  </div>
                  <img
                    className="rounded-12"
                    src="assets/imgs/section-1/img-3.png"
                    alt="Carento"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container pt-96">
            <div className="row mt-40">
              <div className="col-lg-3 col-sm-6">
                <div className="card-why text-start wow fadeInUp">
                  <div className="card-image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={62}
                      height={62}
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_248_13431)">
                        <path
                          d="M61.7728 34.1092C60.9303 30.4572 57.672 27.594 54.0977 26.74L47.0384 25.0471L40.7293 18.6169C38.0943 15.9331 34.4262 14.3938 30.6658 14.3938H7.09004C6.62395 14.3938 6.19915 14.6613 5.99777 15.0819C5.79652 15.5023 5.85428 16.0008 6.1466 16.364L7.58737 18.1542C7.68812 18.2793 7.67202 18.4598 7.55068 18.5651L1.33106 23.9664C1.06623 24.1963 0.914137 24.53 0.914137 24.8808V31.5047L0.141195 32.9617C0.0484375 33.1363 0 33.3312 0 33.529V38.3389C0 38.5782 0.0708399 38.8119 0.203559 39.0109L2.03329 41.7537C2.25791 42.0904 2.63597 42.2926 3.04066 42.2926H5.14879C5.71817 45.3134 8.37484 47.6063 11.5586 47.6063C14.7424 47.6063 17.399 45.3134 17.9684 42.2926H24.1976C24.8664 42.2926 25.4085 41.7503 25.4085 41.0816C25.4085 40.413 24.8664 39.8707 24.1976 39.8707H17.9702C17.3966 36.8279 14.6465 34.5578 11.5585 34.5578C8.46724 34.5578 5.71974 36.8314 5.14648 39.8707H3.68852L2.42188 37.972V33.8303L3.19494 32.3733C3.2877 32.1986 3.33613 32.0036 3.33613 31.8057V25.4327L9.13882 20.3935C10.1909 19.4799 10.3775 17.9474 9.60746 16.8156H30.6658C33.7806 16.8156 36.8187 18.0904 39.0009 20.3133L45.5533 26.9915C45.7124 27.1538 45.9142 27.2679 46.1353 27.321L53.534 29.0953C53.9923 29.2048 54.4353 29.3542 54.8626 29.5379L53.9921 30.0975C53.1414 30.6432 52.6334 31.5737 52.6334 32.5868C52.6334 34.198 53.9801 35.5452 55.5917 35.5452H59.5545C59.5686 35.7113 59.5781 35.8776 59.5781 36.044V38.017L58.5183 39.8707H53.4956C52.9232 36.8303 50.1752 34.5578 47.0844 34.5578C43.9932 34.5578 41.2479 36.8317 40.6732 39.8707H34.8528C34.1842 39.8707 33.6419 40.413 33.6419 41.0816C33.6419 41.7503 34.1842 42.2926 34.8528 42.2926H40.6748C41.2442 45.3134 43.9008 47.6063 47.0845 47.6063C50.2682 47.6063 52.925 45.3134 53.4944 42.2926H59.2211C59.6556 42.2926 60.0567 42.0598 60.2725 41.6828L61.8406 38.94C61.9453 38.7569 62.0002 38.5497 62.0002 38.3389V36.0441C62 35.3911 61.9229 34.7369 61.7728 34.1092ZM11.5586 45.1844C9.29661 45.1844 7.45635 43.3442 7.45635 41.082C7.45635 38.8507 9.32603 36.9802 11.5585 36.9802C13.7908 36.9802 15.6609 38.848 15.6609 41.082C15.6609 43.344 13.8206 45.1844 11.5586 45.1844ZM47.0843 45.1844C44.8232 45.1844 42.9837 43.3456 42.9821 41.0849C42.9821 41.0838 42.9822 41.0827 42.9822 41.0816C42.9822 38.8201 44.8226 36.9802 47.0849 36.9802C49.3464 36.9802 51.1863 38.8201 51.1863 41.0816C51.1863 41.0832 51.1866 41.0848 51.1866 41.0865C51.1841 43.3465 49.345 45.1844 47.0843 45.1844ZM55.2112 32.9643C54.977 32.7308 55.0196 32.3158 55.3007 32.1355L57.1065 30.9747C57.7926 31.5887 58.3815 32.3125 58.8197 33.1234H55.5917C55.3992 33.1234 55.2718 33.0247 55.2112 32.9643Z"
                          fill="#101010"
                        />
                        <path
                          d="M39.5949 28.7908C40.9991 28.7908 41.775 27.0747 40.8475 26.0182L37.6949 22.4269C35.6852 20.1377 32.7855 18.8247 29.7392 18.8247H15.3369C14.6672 18.8247 14.028 19.0753 13.5372 19.5302L9.22746 23.523C8.74151 23.9734 8.56738 24.6688 8.78389 25.2949C9.00029 25.9206 9.56652 26.3596 10.2265 26.4134C15.8664 26.8736 34.6425 28.4043 39.4603 28.7856C39.5053 28.789 39.5501 28.7908 39.5949 28.7908ZM15.1832 21.3066C15.2251 21.2679 15.2796 21.2465 15.3369 21.2465H24.9858V25.1856C20.1221 24.7901 15.2354 24.3919 12.1267 24.1384L15.1832 21.3066ZM27.4075 25.3824V21.2465H29.7389C32.0883 21.2465 34.3247 22.259 35.8746 24.0245L37.8052 26.2238C35.2926 26.0222 31.4654 25.712 27.4075 25.3824Z"
                          fill="#101010"
                        />
                        <path
                          d="M26.1965 33.3613H28.9048C29.5736 33.3613 30.1157 32.8191 30.1157 32.1504C30.1157 31.4817 29.5736 30.9395 28.9048 30.9395H26.1965C25.5277 30.9395 24.9856 31.4817 24.9856 32.1504C24.9856 32.8191 25.5279 33.3613 26.1965 33.3613Z"
                          fill="#101010"
                        />
                        <path
                          d="M9.92456 29.2563C9.25576 29.2563 8.71362 29.7986 8.71362 30.4673C8.71362 31.136 9.25576 31.6782 9.92456 31.6782H12.6329C13.3017 31.6782 13.8439 31.136 13.8439 30.4673C13.8439 29.7986 13.3017 29.2563 12.6329 29.2563H9.92456Z"
                          fill="#101010"
                        />
                        <path
                          d="M30.764 40.6185C30.5654 40.1422 30.072 39.8358 29.5565 39.8743C29.0507 39.9123 28.6156 40.2713 28.4794 40.7592C28.1903 41.7953 29.3509 42.6653 30.2677 42.12C30.7784 41.8162 30.9881 41.1658 30.764 40.6185Z"
                          fill="#101010"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_248_13431">
                          <rect width={62} height={62} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="card-info">
                    <h6 className="text-xl-bold neutral-1000 text-start">
                      Choose a Location
                    </h6>
                    <p className="text-md-medium neutral-500">
                      Select the ideal destination to begin your journey with
                      ease
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-why text-start wow fadeInUp">
                  <div className="card-image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={62}
                      height={62}
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <path
                        d="M47.023 27.9968H43.8262C43.2934 27.9968 42.8574 28.4328 42.8574 28.9656C42.8574 29.4984 43.2934 29.9343 43.8262 29.9343H47.023C47.459 29.9343 47.8174 30.2928 47.8174 30.7287V44.64C47.8174 45.0759 47.459 45.4343 47.023 45.4343H43.8262C43.2934 45.4343 42.8574 45.8703 42.8574 46.4031C42.8574 46.9359 43.2934 47.3718 43.8262 47.3718H47.023C48.5246 47.3718 49.7549 46.1512 49.7549 44.64V30.7287C49.7549 29.2271 48.5343 27.9968 47.023 27.9968Z"
                        fill="#101010"
                      />
                      <path
                        d="M10.1623 29.9343H13.3592C13.892 29.9343 14.3279 29.4984 14.3279 28.9656C14.3279 28.4328 13.892 27.9968 13.3592 27.9968H10.1623C8.66073 27.9968 7.43042 29.2175 7.43042 30.7287V44.64C7.43042 46.1415 8.65104 47.3718 10.1623 47.3718H13.3592C13.892 47.3718 14.3279 46.9359 14.3279 46.4031C14.3279 45.8703 13.892 45.4343 13.3592 45.4343H10.1623C9.72636 45.4343 9.36792 45.0759 9.36792 44.64V30.7287C9.36792 30.2928 9.72636 29.9343 10.1623 29.9343Z"
                        fill="#101010"
                      />
                      <path
                        d="M29.5565 29.6632V28.9463C29.5565 28.4135 29.1205 27.9775 28.5877 27.9775C28.0549 27.9775 27.619 28.4135 27.619 28.9463V29.7116C25.0808 30.1475 23.1821 31.9591 23.1821 34.1194C23.1821 36.2797 25.0712 38.0719 27.619 38.5079V43.7004C25.9818 43.4388 24.7224 42.4022 24.7224 41.1913C24.7224 40.6585 24.2865 40.2225 23.7537 40.2225C23.2208 40.2225 22.7849 40.6585 22.7849 41.1913C22.7849 43.4679 24.8968 45.3472 27.619 45.6475V46.3644C27.619 46.8972 28.0549 47.3332 28.5877 47.3332C29.1205 47.3332 29.5565 46.8972 29.5565 46.3644V45.5991C32.0946 45.1632 34.003 43.3516 34.003 41.1913C34.003 39.031 32.1333 37.2291 29.5565 36.8029V31.6104C31.1937 31.8622 32.453 32.9085 32.453 34.1194C32.453 34.6522 32.889 35.0882 33.4218 35.0882C33.9546 35.0882 34.3905 34.6522 34.3905 34.1194C34.3905 31.8429 32.2787 29.9635 29.5565 29.6632ZM25.1196 34.1194C25.1196 33.015 26.1852 32.0463 27.619 31.6975V36.5413C26.1755 36.1925 25.1196 35.2238 25.1196 34.1194ZM32.0655 41.201C32.0655 42.3054 30.9999 43.2644 29.5565 43.6229V38.7791C31.0096 39.1279 32.0655 40.0966 32.0655 41.2107V41.201Z"
                        fill="#101010"
                      />
                      <path
                        d="M57.9991 33.044L51.5569 12.9425C51.1016 11.5087 49.5516 10.7144 48.1275 11.1794L7.44969 24.3834H6.60688C5.10531 24.3834 3.875 25.604 3.875 27.1153V48.2243C3.875 49.7259 5.09563 50.9562 6.60688 50.9562H50.5784C52.08 50.9562 53.3103 49.7356 53.3103 48.2243V37.3744C53.3781 37.3744 53.4459 37.3647 53.5138 37.3453L56.2262 36.4734C57.66 36.0181 58.4447 34.4778 57.9894 33.044H57.9991ZM51.3728 48.2243C51.3728 48.6603 51.0144 49.0187 50.5784 49.0187H6.60688C6.17094 49.0187 5.8125 48.6603 5.8125 48.2243V27.1153C5.8125 26.6793 6.17094 26.3209 6.60688 26.3209H26.7181C26.7181 26.3209 26.7278 26.3209 26.7375 26.3209H26.7472H30.1959C30.1959 26.3209 30.2056 26.3209 30.2153 26.3209C30.225 26.3209 30.225 26.3209 30.2347 26.3209H50.5784C51.0144 26.3209 51.3728 26.6793 51.3728 27.1153V48.2243ZM55.645 34.6328L53.3103 35.3787V27.1153C53.3103 25.9043 52.5159 24.8872 51.4213 24.5287L49.2706 17.4569C49.0478 16.7594 48.5731 16.1975 47.9241 15.8584C47.275 15.529 46.5387 15.4612 45.8413 15.684L42.7994 16.6625C42.2859 16.8272 42.005 17.3697 42.1697 17.8831C42.3344 18.3965 42.8769 18.6678 43.3903 18.5128L46.4322 17.5344C46.6356 17.4665 46.8488 17.4859 47.0328 17.5828C47.2169 17.6797 47.3622 17.8444 47.4203 18.0284L49.3481 24.3737H35.1656C34.1969 22.9981 32.3369 22.3006 30.3316 22.5234L30.1087 21.8356C29.9441 21.3319 29.4016 21.0509 28.8881 21.2059C28.3747 21.3706 28.0938 21.9131 28.2584 22.4265L28.4425 22.9981C27.6384 23.3275 26.9216 23.7925 26.3403 24.3737H13.7175L48.7087 13.02C48.9122 12.9522 49.1253 12.9715 49.3094 13.0684C49.4934 13.1653 49.6387 13.33 49.6969 13.5334L56.1391 33.635C56.2747 34.0515 56.0422 34.4972 55.6256 34.6328H55.645Z"
                        fill="#101010"
                      />
                    </svg>
                  </div>
                  <div className="card-info">
                    <h6 className="text-xl-bold neutral-1000 text-start">
                      Transparent Pricing
                    </h6>
                    <p className="text-md-medium neutral-500">
                      Enjoy clear and upfront pricing with no surprises,
                      ensuring you know exactly what you&apos;re paying for.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-why text-start wow fadeInUp">
                  <div className="card-image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={62}
                      height={62}
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <path
                        d="M55.0559 32.6118H40.0821C40.0672 32.4878 40.0538 32.5591 40.0388 32.5325C39.8328 32.169 39.6362 31.7438 39.4473 31.4958H36.6589C37.0335 32.1158 37.4571 32.8539 37.947 33.7183C38.2146 34.1907 38.4366 34.5958 38.6197 35.0918H55.0559C55.7407 35.0918 56.2959 34.5366 56.2959 33.8518C56.2959 33.1671 55.7407 32.6118 55.0559 32.6118Z"
                        fill="#101010"
                      />
                      <path
                        d="M58.7759 26.5359H35.9445C35.2801 25.9159 34.5821 25.6028 33.7153 25.402C32.9617 25.2277 31.8364 25.1738 30.6175 25.8913C30.3576 25.7897 30.0946 25.7058 29.8289 25.6537C28.9538 25.4835 28.0713 25.5862 27.2799 25.9519V16.3945C27.2799 13.5483 25.0234 11.2839 22.1771 11.2839H7.32236C4.47606 11.2839 2.10791 13.5483 2.10791 16.3946V31.2493C2.10791 34.0956 4.47606 36.4559 7.32236 36.4559H18.2504C18.1092 36.7039 17.9839 37.0798 17.8853 37.4462C17.4767 38.9623 17.4095 41.3697 19.4103 44.2943C21.3587 47.1428 24.1722 49.0259 27.3335 49.6101C30.0883 50.1191 32.9493 49.6153 34.9861 48.2219C35.3931 47.9435 35.8793 47.6159 36.3995 47.2439H48.2359C48.9206 47.2439 49.4759 46.6887 49.4759 46.0039C49.4759 45.3192 48.9206 44.7639 48.2359 44.7639H39.1224C39.5536 44.2679 39.9602 43.728 40.316 43.139C40.6589 42.5717 40.9817 41.9119 41.2294 41.1679H51.9559C52.6406 41.1679 53.1959 40.6127 53.1959 39.9279C53.1959 39.2432 52.6406 38.6879 51.9559 38.6879H41.6893C41.7056 38.3159 41.6991 37.9439 41.6712 37.5719H39.2653C39.7119 42.0359 35.7556 44.7788 33.6285 46.2338C30.7757 48.1851 24.9375 48.1161 21.3949 42.9369C19.9501 40.8251 19.876 39.1383 20.2459 37.9207L22.343 40.9829C22.718 41.5315 23.4662 41.6696 24.0139 41.2949C24.5617 40.9201 24.7027 40.1712 24.3277 39.6229L15.4451 26.622C15.3842 26.5387 13.8425 24.5072 15.4607 23.4006C16.409 22.7517 17.1446 22.6169 18.469 24.5532L22.9207 31.0606C23.021 30.4603 23.3315 29.9113 23.9418 29.494C24.6197 29.0301 25.303 28.8606 25.9727 28.9899C26.372 29.0667 26.7202 29.2404 27.019 29.4586C27.1667 29.0724 27.4665 28.6646 28.0204 28.2859C28.4237 28.0102 28.8892 27.9136 29.3662 28.0065C29.9417 28.1193 30.4844 28.4894 30.9626 28.9536C31.0887 28.5982 31.3293 28.2898 31.6807 28.0494C32.1792 27.7087 32.6663 27.6274 33.1721 27.7442C33.8266 27.896 34.3231 28.1481 35.0064 29.0161H58.7759C59.4606 29.0161 60.0159 28.4608 60.0159 27.7761C60.0159 27.0913 59.4606 26.5359 58.7759 26.5359ZM23.1637 27.158L20.4532 23.1955C18.5596 20.4276 16.4232 19.8287 14.1032 21.4156C13.1551 22.0641 12.5581 22.9783 12.376 24.0588C12.0773 25.8317 13.0301 27.4174 13.4833 28.0393L17.5174 33.9759H7.32236C5.84353 33.9759 4.58791 32.7281 4.58791 31.2493V16.3946C4.58791 14.9158 5.84353 13.7639 7.32236 13.7639H22.1771C23.6559 13.7639 24.7999 14.9158 24.7999 16.3946V26.6017C24.2445 26.6892 23.6954 26.8747 23.1637 27.158Z"
                        fill="#101010"
                      />
                    </svg>
                  </div>
                  <div className="card-info">
                    <h6 className="text-xl-bold neutral-1000 text-start">
                      Convenient Booking
                    </h6>
                    <p className="text-md-medium neutral-500">
                      Benefit from a variety of rental options, including
                      short-term, long-term, and weekend specials
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card-why text-start wow fadeInUp">
                  <div className="card-image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={62}
                      height={62}
                      viewBox="0 0 62 62"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_248_13453)">
                        <path
                          d="M16.1459 44.4933L12.6739 45.2662C10.8334 45.6655 9.186 46.685 8.00747 48.154C6.82895 49.623 6.19086 51.4522 6.20005 53.3355V55.0074C6.20164 56.1401 6.57449 57.241 7.2615 58.1415C7.9485 59.042 8.91177 59.6925 10.0037 59.9933C13.3569 60.9078 19.7212 62 31.0001 62C42.2789 62 48.6432 60.9078 51.9964 59.9933C53.0883 59.6925 54.0516 59.042 54.7386 58.1415C55.4256 57.241 55.7985 56.1401 55.8001 55.0074V53.3355C55.8092 51.4522 55.1712 49.623 53.9926 48.154C52.8141 46.685 51.1667 45.6655 49.3262 45.2662L45.8542 44.4933L41.1174 41.6526L39.213 37.2093L39.833 36.4953L40.299 36.6203C40.7866 36.7493 41.2888 36.8149 41.7932 36.8156C43.3169 36.8123 44.7771 36.2047 45.8532 35.126C46.9294 34.0473 47.5337 32.5857 47.5334 31.062V29.822C48.4184 29.5935 49.2027 29.0781 49.7636 28.3564C50.3246 27.6347 50.6304 26.7474 50.6334 25.8333V21.7C50.63 20.7863 50.3239 19.8995 49.763 19.1782C49.2021 18.4569 48.4181 17.9418 47.5334 17.7134V16.5333C47.5334 12.1484 45.7915 7.9431 42.6909 4.8425C39.5903 1.7419 35.385 0 31.0001 0C26.6151 0 22.4098 1.7419 19.3092 4.8425C16.2086 7.9431 14.4667 12.1484 14.4667 16.5333V17.7134C13.582 17.9418 12.798 18.4569 12.2371 19.1782C11.6762 19.8995 11.3701 20.7863 11.3667 21.7V25.8333C11.3667 26.9296 11.8022 27.9809 12.5773 28.756C13.3525 29.5312 14.4038 29.9667 15.5 29.9667H17.5667C17.9195 29.9632 18.2691 29.8989 18.6 29.7765V30.133C18.5995 31.6083 19.1349 33.0335 20.1067 34.1434L22.7933 37.2072L20.8879 41.6506L16.1459 44.4933ZM21.4066 43.7482C23.2756 46.211 25.8348 48.0623 28.7588 49.0668C27.7623 50.0426 26.9344 51.1767 26.3087 52.4231C23.0558 50.9046 20.2193 48.6205 18.042 45.7663L21.4066 43.7482ZM53.7334 53.3355V55.0074C53.7338 55.6879 53.5108 56.3496 53.0986 56.891C52.6864 57.4324 52.1078 57.8235 51.4518 58.0041C48.2206 58.8814 42.0495 59.9333 31.0001 59.9333C19.9506 59.9333 13.7796 58.8814 10.5483 57.9989C9.89314 57.8185 9.3152 57.4282 8.90308 56.8879C8.49097 56.3476 8.26743 55.687 8.26672 55.0074V53.3355C8.25963 51.9229 8.7383 50.5508 9.62251 49.4491C10.5067 48.3474 11.7427 47.5831 13.1234 47.2843L16.0932 46.624C17.2577 48.1874 20.7887 52.4789 25.7879 54.4401C26.2157 54.6045 26.6898 54.6006 27.1148 54.4292C27.5397 54.2577 27.8839 53.9315 28.0778 53.5163C28.7557 52.0821 29.7558 50.8238 31.0001 49.8397C32.2447 50.8235 33.2455 52.0814 33.9244 53.5153C34.0708 53.8272 34.3029 54.0911 34.5937 54.2761C34.8844 54.4611 35.2218 54.5595 35.5664 54.56C35.7885 54.5603 36.0087 54.5185 36.2153 54.437C41.2135 52.4737 44.7444 48.1843 45.909 46.6209L48.8788 47.2812C50.2596 47.5805 51.4955 48.3455 52.3794 49.4477C53.2632 50.55 53.7413 51.9226 53.7334 53.3355ZM35.6914 52.4231C35.0662 51.1764 34.2382 50.0422 33.2414 49.0668C36.1653 48.0623 38.7245 46.211 40.5935 43.7482L43.9581 45.7663C41.7806 48.6203 38.9441 50.9044 35.6914 52.4231ZM44.0304 33.9812C43.2808 34.5519 42.3397 34.8111 41.4037 34.7045L41.8935 34.1444C42.8651 33.034 43.4005 31.6086 43.4001 30.133V29.7765C43.731 29.8989 44.0806 29.9632 44.4334 29.9667H45.4667V31.062C45.4687 31.6264 45.3401 32.1836 45.0909 32.6901C44.8418 33.1965 44.4788 33.6384 44.0304 33.9812ZM41.3334 17.5512C31.8402 17.266 29.9058 13.0799 29.8934 13.05C29.8167 12.8581 29.6842 12.6935 29.5131 12.5777C29.342 12.4618 29.14 12.3999 28.9334 12.4C25.9269 12.4047 23.0346 13.5521 20.8424 15.6095C21.7672 10.4811 26.193 6.2 31.0001 6.2C33.7397 6.20301 36.3663 7.29266 38.3035 9.22989C40.2407 11.1671 41.3304 13.7937 41.3334 16.5333V17.5512ZM48.5667 21.7V25.8333C48.5667 26.3814 48.349 26.9071 47.9614 27.2947C47.5738 27.6823 47.0482 27.9 46.5001 27.9H44.4334C44.1593 27.9 43.8965 27.7911 43.7027 27.5973C43.5089 27.4036 43.4001 27.1407 43.4001 26.8667V20.6667C43.4001 20.3926 43.5089 20.1298 43.7027 19.936C43.8965 19.7422 44.1593 19.6333 44.4334 19.6333H46.5001C47.0482 19.6333 47.5738 19.8511 47.9614 20.2386C48.349 20.6262 48.5667 21.1519 48.5667 21.7ZM31.0001 2.06667C34.8356 2.07077 38.5129 3.59625 41.225 6.30839C43.9371 9.02052 45.4626 12.6978 45.4667 16.5333V17.5667H44.4334C44.0806 17.5701 43.731 17.6344 43.4001 17.7568V16.5333C43.3965 13.2457 42.0889 10.0938 39.7642 7.76914C37.4396 5.44446 34.2876 4.13689 31.0001 4.13333C24.394 4.13333 18.6 10.4108 18.6 17.5667V17.7568C18.2691 17.6344 17.9195 17.5701 17.5667 17.5667H16.5334V16.5333C16.5375 12.6978 18.063 9.02052 20.7751 6.30839C23.4872 3.59625 27.1645 2.07077 31.0001 2.06667ZM17.5667 27.9H15.5C14.9519 27.9 14.4263 27.6823 14.0387 27.2947C13.6511 26.9071 13.4334 26.3814 13.4334 25.8333V21.7C13.4334 21.1519 13.6511 20.6262 14.0387 20.2386C14.4263 19.8511 14.9519 19.6333 15.5 19.6333H17.5667C17.8408 19.6333 18.1036 19.7422 18.2974 19.936C18.4912 20.1298 18.6 20.3926 18.6 20.6667V26.8667C18.6 27.1407 18.4912 27.4036 18.2974 27.5973C18.1036 27.7911 17.8408 27.9 17.5667 27.9ZM20.6667 30.133V18.91C21.5378 17.6494 22.6785 16.5984 24.0061 15.8333C25.3337 15.0682 26.8149 14.608 28.3423 14.4863C29.3178 15.9629 32.5294 19.3585 41.3334 19.6106V30.133C41.3335 31.1081 40.9795 32.0499 40.3373 32.7835L39.1283 34.1651L36.2349 33.3922L36.2659 33.264C36.3291 33 36.3397 32.726 36.297 32.4579C36.2543 32.1897 36.1591 31.9326 36.017 31.7012C35.8749 31.4699 35.6886 31.2688 35.4687 31.1094C35.2488 30.9501 34.9997 30.8357 34.7356 30.7727L31.7213 30.0493C30.9213 29.8578 30.078 29.9918 29.3769 30.422C28.6758 30.8523 28.1743 31.5434 27.9827 32.3433C27.7912 33.1433 27.9252 33.9866 28.3554 34.6877C28.7856 35.3889 29.4767 35.8904 30.2767 36.0819L33.291 36.8053C33.45 36.8434 33.613 36.8628 33.7766 36.8631C34.2176 36.8634 34.6468 36.7213 35.0005 36.4581C35.3543 36.1948 35.6136 35.8244 35.74 35.402L37.6093 35.9021L36.0634 37.665C35.6235 38.168 35.0812 38.5711 34.4727 38.8474C33.8643 39.1236 33.2038 39.2666 32.5356 39.2667H29.4645C28.7964 39.2663 28.136 39.1231 27.5276 38.8469C26.9192 38.5707 26.3768 38.1677 25.9367 37.665L21.6649 32.7825C21.0219 32.0496 20.6671 31.108 20.6667 30.133ZM34.2551 32.7835L33.7756 34.7923L30.7603 34.069C30.6268 34.039 30.5005 33.9827 30.3888 33.9035C30.2772 33.8243 30.1824 33.7237 30.11 33.6076C30.0375 33.4914 29.9889 33.362 29.9669 33.2269C29.9449 33.0918 29.95 32.9537 29.9818 32.8205C30.0136 32.6874 30.0716 32.5619 30.1523 32.4513C30.2331 32.3408 30.335 32.2474 30.4521 32.1766C30.5692 32.1057 30.6993 32.0589 30.8347 32.0387C30.9701 32.0186 31.1081 32.0255 31.2408 32.0592L34.2551 32.7835ZM24.3785 39.0259C25.0126 39.751 25.7946 40.332 26.6718 40.73C27.549 41.1279 28.5012 41.3337 29.4645 41.3333H32.5356C33.4989 41.3336 34.451 41.1278 35.3283 40.7299C36.2055 40.3319 36.9874 39.7509 37.6217 39.0259L37.7043 38.9319L39.1272 42.254C37.1667 44.9579 34.2693 46.8345 31.0001 47.5178C27.7308 46.8345 24.8334 44.9579 22.8729 42.254L24.2968 38.9319L24.3785 39.0259Z"
                          fill="#101010"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_248_13453">
                          <rect width={62} height={62} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="card-info">
                    <h6 className="text-xl-bold neutral-1000 text-start">
                      24/7 Customer Support
                    </h6>
                    <p className="text-md-medium neutral-500">
                      Get assistance whenever you need it with our dedicated
                      support team available around the clock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* team 1 */}
        {/* cta 8*/}
        <section className="section-cta-7 background-body py-96">
          <div className="box-cta-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <a className="btn btn-signin bg-2 text-dark mb-4" href="#">
                    Our Mission
                  </a>
                  <h4 className="mb-4 neutral-1000">
                    Sell your car at a fair price. <br />
                    Get started with us today.
                  </h4>
                  <p className="text-lg-medium neutral-500 mb-4">
                    Our mission is to Provide innovative and customer-centric
                    solutions that redefine personal transportation, inspiring a
                    new way of empowering and enjoyable travel.
                  </p>
                  <div className="row">
                    <div className="col">
                      <ul className="list-ticks-green list-ticks-green-2">
                        <li className="neutral-1000 pe-0">
                          Explore a wide range of flexible rental options to
                          suit your needs
                        </li>
                        <li className="neutral-1000 pe-0">
                          Comprehensive insurance coverage for complete peace of
                          mind
                        </li>
                        <li className="neutral-1000 pe-0">
                          24/7 customer support for assistance anytime, anywhere
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/CarFilterPage">
                    <div className="btn btn-primary mt-2">
                      Get Started Now
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 offset-lg-1 position-relative z-1 mt-lg-0 mt-4">
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex gap-4">
                      <div className="position-relative">
                        <img
                          className="bdrd8 w-100"
                          src="assets/imgs/cta/cta-8/img-1.png"
                          alt="Carento"
                        />
                      </div>
                      <div className="mt-auto">
                        <img
                          className="bdrd8 w-100"
                          src="assets/imgs/cta/cta-8/img-2.png"
                          alt="Carento"
                        />
                      </div>
                    </div>
                    <div className="d-flex gap-4">
                      <div className="position-relative">
                        <img
                          className="bdrd8 w-100"
                          src="assets/imgs/cta/cta-8/img-3.png"
                          alt="Carento"
                        />
                      </div>
                      <div className="position-relative">
                        <img
                          className="bdrd8 w-100"
                          src="assets/imgs/cta/cta-8/img-4.png"
                          alt="Carento"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
          </div>
        </section>
        {/* Static 1 */}
        {/* <section className="section-static-1 background-body background-2 pt-80 pb-80">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center mb-4">Our Journey</h2>
                <div className="timeline">
                  <div className="timeline-row">
                    <div className="timeline-item">
                      <h3>2008</h3>
                      <p>Started showroom near Malabar Gold, Kodungallur</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2012</h3>
                      <p>Established our first office in Kaloor, Cochin</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2016</h3>
                      <p>Opened our first branch in TKS Puram, Kodungallur</p>
                    </div>

                    <div className="timeline-item">
                      <h3>2017</h3>
                      <p>
                        Launched our first international office in Doha, Qatar
                      </p>
                    </div>
                    <div className="timeline-item">
                      <h3>2018</h3>
                      <p>Expanded to Africa with second office in Rwanda</p>
                    </div>
                    <div className="timeline-item">
                      <h3>2022</h3>
                      <p>
                        Celebrated the opening of a new showroom in Kodungallur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* cta 9*/}
        <section className="section-cta-7 background-body py-96">
          <div className="box-cta-6">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="card-image d-inline-block position-relative mb-100">
                    <img
                      className="rounded-12"
                      src="assets/imgs/cta/cta-9/img-1.png"
                      alt="Carento"
                    />
                    <a
                      className="btn btn-play popup-youtube position-absolute top-50 start-50 translate-middle"
                      href="https://www.youtube.com/watch?v=AOg61RB75Ho"
                    />
                    <img
                      className="position-absolute top-100 start-100 translate-middle rounded-12 d-none d-md-block"
                      src="assets/imgs/cta/cta-9/img-2.png"
                      alt="Carento"
                    />
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-5">
                  <a className="btn btn-signin bg-2 text-dark mb-4" href="#">
                    Our Vision
                  </a>
                  <h4 className="mb-4 neutral-1000">
                    Carento offers clear pricing and 24/7 great support.
                  </h4>
                  <p className="text-lg-medium neutral-500 mb-4">
                  Empower individuals to embrace their journeys with
                  independence, luxury, and flexibility.
                  </p>
                  <div className="row">
                    <div className="col">
                      <ul className="list-ticks-green list-ticks-green-2">
                        <li className="neutral-1000 pe-0">
                          Explore a wide range of flexible rental options to
                          suit your needs
                        </li>
                        <li className="neutral-1000 pe-0">
                          Comprehensive insurance coverage for complete peace of
                          mind
                        </li>
                        <li className="neutral-1000 pe-0">
                          24/7 customer support for assistance anytime, anywhere
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/CarFilterPage">
                    <div className="btn btn-primary mt-2">
                      Get Started Now
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
          </div>
        </section>
        {/* testimonials */}
        {/* faqs 1 */}
        <section className="section-box box-faqs background-body pt-0">
          <div className="box-faqs-inner">
            <div className="container">
              <div className="text-center">
                <span className="text-sm-bold bg-2 p-3 rounded-12">
                  Our Support
                </span>
                <h3 className="mt-4 neutral-1000">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="block-faqs">
                <div className="accordion" id="accordionFAQ">
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button text-heading-5"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <h3>01</h3>
                        <p>What types of cars do you offer for rent?</p>
                      </button>
                    </h5>
                    <div
                      className="accordion-collapse collapse show"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                      We offer a wide variety of cars to suit your needs, including economy, compact, sedan, SUV, van, and luxury vehicles.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button text-heading-5 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <h3>02</h3>
                        <p>
                          What documents do I need for my trip, and how do I
                          obtain them?
                        </p>
                      </button>
                    </h5>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        Provide a step-by-step guide on how users can browse and
                        book travel services on your platform. Include
                        information on searching for destinations, selecting
                        dates, choosing accommodation, and completing the
                        booking process. Mention any special features or tools
                        that can help users find the best deals.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button text-heading-5 collapsed text-heading-5 type="
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h3>03</h3>
                        <p>
                          In the event that I need to modify or cancel my
                          reservation, what are the policies in place?
                        </p>
                      </button>
                    </h5>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        Provide a step-by-step guide on how users can browse and
                        book travel services on your platform. Include
                        information on searching for destinations, selecting
                        dates, choosing accommodation, and completing the
                        booking process. Mention any special features or tools
                        that can help users find the best deals.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button text-heading-5 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <h3>04</h3>
                        <p>
                          Can you specify the types of credit/debit cards,
                          digital wallets, or other online payment methods
                          accepted?
                        </p>
                      </button>
                    </h5>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseFour"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        Provide a step-by-step guide on how users can browse and
                        book travel services on your platform. Include
                        information on searching for destinations, selecting
                        dates, choosing accommodation, and completing the
                        booking process. Mention any special features or tools
                        that can help users find the best deals.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item wow fadeInUp border-bottom-0">
                    <h5 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button text-heading-5 collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        <h3>05</h3>
                        <p>
                          What are the working hours, and what can I expect in
                          terms of response times?
                        </p>
                      </button>
                    </h5>
                    <div
                      className="accordion-collapse collapse"
                      id="collapseFive"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionFAQ"
                    >
                      <div className="accordion-body">
                        Provide a step-by-step guide on how users can browse and
                        book travel services on your platform. Include
                        information on searching for destinations, selecting
                        dates, choosing accommodation, and completing the
                        booking process. Mention any special features or tools
                        that can help users find the best deals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 wow fadeInUp mt-4">
                  <div className="d-flex justify-content-center gap-2">
                    <a className="btn btn-primary mt-2" href="#">
                      Contact Us
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <a
                      className="btn btn-primary bg-transparent mt-2 invert"
                      href="#"
                    >
                      Help Center
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 15L15 8L8 1M15 8L1 8"
                          stroke=""
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog-1 */}
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-6 text-center text-md-start">
                  <h5 className="color-white wow fadeInDown">
                    Subscribe to see secret deals prices drop the moment you
                    sign up!
                  </h5>
                </div>
                <div className="col-lg-7 col-md-6 text-center text-md-end mt-md-0 mt-4">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                    <form className="form-newsletter wow fadeInUp" action="#">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <input
                        className="btn btn-brand-2"
                        type="submit"
                        defaultValue="Subscribe"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-sm-12 footer-1">
                <div className="mt-20 mb-20">
                  <a className="d-flex" href="index.html">
                    <img
                      className="light-mode"
                      alt="Carento"
                      src="assets/imgs/template/logo-w.svg"
                    />
                    <img
                      className="dark-mode"
                      alt="Carento"
                      src="assets/imgs/template/logo-w.svg"
                    />
                  </a>
                  <div className="box-info-contact mt-0">
                    <p className="text-md neutral-400 icon-address">
                      2356 Oakwood Drive, Suite 18, San Francisco, California
                      94111, US
                    </p>
                    <p className="text-md neutral-400 icon-worktime">
                      Hours: 8:00 - 17:00, Mon - Sat
                    </p>
                    <p className="text-md neutral-400 icon-email">
                      support@carento.com
                    </p>
                  </div>
                  <div className="box-need-help">
                    <p className="need-help text-md-medium mb-5">
                      Need help? Call us
                    </p>
                    <br />
                    <a
                      className="heading-6 phone-support"
                      href="tel:+1 222-555-33-99"
                    >
                      +1 222-555-33-99
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-xs-6 footer-3">
                <h6 className="text-linear-3">Company</h6>
                <ul className="menu-footer">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Our Awards</a>
                  </li>
                  <li>
                    <a href="#">Agencies</a>
                  </li>
                  <li>
                    <a href="#">Copyright Notices</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy Notice</a>
                  </li>
                  <li>
                    <a href="#">Lost &amp; Found</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-xs-6 footer-2">
                <h6 className="text-linear-3">Our Services</h6>
                <ul className="menu-footer">
                  <li>
                    <a href="#">Car Rental Services</a>
                  </li>
                  <li>
                    <a href="#">Vehicle Leasing Options</a>
                  </li>
                  <li>
                    <a href="#">Long-Term Car Rentals</a>
                  </li>
                  <li>
                    <a href="#">Car Sales and Trade-Ins</a>
                  </li>
                  <li>
                    <a href="#">Luxury Car Rentals</a>
                  </li>
                  <li>
                    <a href="#">Rent-to-Own Programs</a>
                  </li>
                  <li>
                    <a href="#">Fleet Management Solutions</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-xs-6 footer-4">
                <h6 className="text-linear-3">Our Partners</h6>
                <ul className="menu-footer">
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Travel Agents</a>
                  </li>
                  <li>
                    <a href="#">AARP Members</a>
                  </li>
                  <li>
                    <a href="#">Points Programs</a>
                  </li>
                  <li>
                    <a href="#">Military &amp; Veterans</a>
                  </li>
                  <li>
                    <a href="#">Work with us</a>
                  </li>
                  <li>
                    <a href="#">Advertise with us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-xs-6 footer-5">
                <h6 className="text-linear-3">Support</h6>
                <ul className="menu-footer">
                  <li>
                    <a href="#">Forum support</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Live chat</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom mt-50">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 text-md-start text-center mb-20">
                  <p className="text-sm color-white">
                    © 2024 Carento Inc. All rights reserved.
                  </p>
                </div>
                <div className="col-md-6 text-md-end text-center mb-20">
                  <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                    <p className="text-lg-bold neutral-0 d-inline-block mr-10">
                      Follow us
                    </p>
                    <div className="box-socials-footer d-inline-block">
                      <a className="icon-socials icon-instagram" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={21}
                          height={20}
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M13.9146 1.6665H6.93127C3.89793 1.6665 2.0896 3.47484 2.0896 6.50817V13.4832C2.0896 16.5248 3.89793 18.3332 6.93127 18.3332H13.9063C16.9396 18.3332 18.7479 16.5248 18.7479 13.4915V6.50817C18.7563 3.47484 16.9479 1.6665 13.9146 1.6665ZM10.4229 13.2332C8.6396 13.2332 7.1896 11.7832 7.1896 9.99984C7.1896 8.2165 8.6396 6.7665 10.4229 6.7665C12.2063 6.7665 13.6563 8.2165 13.6563 9.99984C13.6563 11.7832 12.2063 13.2332 10.4229 13.2332ZM15.3563 5.73317C15.3146 5.83317 15.2563 5.92484 15.1813 6.00817C15.0979 6.08317 15.0063 6.1415 14.9063 6.18317C14.8063 6.22484 14.6979 6.24984 14.5896 6.24984C14.3646 6.24984 14.1563 6.1665 13.9979 6.00817C13.9229 5.92484 13.8646 5.83317 13.8229 5.73317C13.7813 5.63317 13.7563 5.52484 13.7563 5.4165C13.7563 5.30817 13.7813 5.19984 13.8229 5.09984C13.8646 4.9915 13.9229 4.90817 13.9979 4.82484C14.1896 4.63317 14.4813 4.5415 14.7479 4.59984C14.8063 4.60817 14.8563 4.62484 14.9063 4.64984C14.9563 4.6665 15.0063 4.6915 15.0563 4.72484C15.0979 4.74984 15.1396 4.7915 15.1813 4.82484C15.2563 4.90817 15.3146 4.9915 15.3563 5.09984C15.3979 5.19984 15.4229 5.30817 15.4229 5.4165C15.4229 5.52484 15.3979 5.63317 15.3563 5.73317Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a className="icon-socials icon-facebook" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={21}
                          height={20}
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M18.7563 13.4915C18.7563 16.5248 16.9479 18.3332 13.9146 18.3332H12.9229C12.4646 18.3332 12.0896 17.9582 12.0896 17.4998V12.6915C12.0896 12.4665 12.2729 12.2748 12.4979 12.2748L13.9646 12.2498C14.0813 12.2415 14.1813 12.1582 14.2063 12.0415L14.4979 10.4498C14.5229 10.2998 14.4063 10.1582 14.2479 10.1582L12.4729 10.1832C12.2396 10.1832 12.0563 9.99985 12.0479 9.77485L12.0146 7.73317C12.0146 7.59984 12.1229 7.48318 12.2646 7.48318L14.2646 7.44984C14.4063 7.44984 14.5146 7.34152 14.5146 7.19985L14.4813 5.19983C14.4813 5.05816 14.3729 4.94984 14.2313 4.94984L11.9813 4.98318C10.5979 5.00818 9.49794 6.1415 9.52294 7.52484L9.5646 9.8165C9.57293 10.0498 9.38961 10.2332 9.15628 10.2415L8.15627 10.2582C8.0146 10.2582 7.90628 10.3665 7.90628 10.5082L7.93127 12.0915C7.93127 12.2332 8.0396 12.3415 8.18126 12.3415L9.18127 12.3248C9.41461 12.3248 9.59792 12.5082 9.60626 12.7332L9.68125 17.4832C9.68959 17.9498 9.31459 18.3332 8.84792 18.3332H6.93126C3.89793 18.3332 2.0896 16.5248 2.0896 13.4832V6.50817C2.0896 3.47484 3.89793 1.6665 6.93126 1.6665H13.9146C16.9479 1.6665 18.7563 3.47484 18.7563 6.50817V13.4915Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a className="icon-socials icon-twitter" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={21}
                          height={20}
                          viewBox="0 0 21 20"
                          fill="none"
                        >
                          <path
                            d="M12.2847 8.46864L19.5701 0H17.8437L11.5178 7.3532L6.46535 0H0.637939L8.27824 11.1193L0.637939 20H2.36443L9.04472 12.2348L14.3805 20H20.2079L12.2843 8.46864H12.2847ZM9.92005 11.2173L9.14593 10.1101L2.98651 1.29967H5.63831L10.609 8.40994L11.3831 9.51718L17.8445 18.7594H15.1927L9.92005 11.2177V11.2173Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a className="icon-socials icon-be" href="#">
                        <svg
                          width={21}
                          height={15}
                          viewBox="0 0 21 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.82393 10.736L13.9225 7.78881L8.82393 4.84165V10.736ZM20.1803 3.04389C20.308 3.50561 20.3964 4.12451 20.4554 4.91042C20.5242 5.69633 20.5536 6.37418 20.5536 6.96361L20.6126 7.78881C20.6126 9.94024 20.4554 11.5219 20.1803 12.5337C19.9347 13.4179 19.3649 13.9877 18.4808 14.2333C18.0191 14.361 17.1742 14.4494 15.8775 14.5083C14.6004 14.5771 13.4313 14.6066 12.3507 14.6066L10.7887 14.6655C6.67251 14.6655 4.10848 14.5083 3.09662 14.2333C2.21247 13.9877 1.64269 13.4179 1.39709 12.5337C1.26938 12.072 1.18097 11.4531 1.12203 10.6672C1.05326 9.8813 1.02379 9.20345 1.02379 8.61402L0.964844 7.78881C0.964844 5.63739 1.12203 4.05575 1.39709 3.04389C1.64269 2.15974 2.21247 1.58996 3.09662 1.34436C3.55834 1.21665 4.4032 1.12823 5.69995 1.06929C6.97705 1.00052 8.14609 0.971052 9.22671 0.971052L10.7887 0.912109C14.9049 0.912109 17.4689 1.06929 18.4808 1.34436C19.3649 1.58996 19.9347 2.15974 20.1803 3.04389Z"
                            fill=""
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*Vendors Scripts*/}
      </main>
    </div>
  );
};

export default About;