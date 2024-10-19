import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CounterDigits = () => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Stop observing once it has been seen
          }
        },
        { threshold: 0.1 }
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
  
    }, []);

  return (
    <section ref={ref} className="section-static-1 background-body @@classList">
      <div className="container">
        <div className="row">
          <div className="rounded-12 background-3 pt-30 pb-30">
            <div className="d-flex align-items-center justify-content-around flex-wrap">

              {/* Global Branches */}
              <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <h3 className="count neutral-1000">
                    {inView && <CountUp end={45} duration={3} />}
                  </h3>
                  <h3 className="neutral-1000">+</h3>
                </div>
                <div className="text-md-start text-center">
                  <p className="text-lg-bold neutral-1000">Global</p>
                  <p className="text-lg-bold neutral-1000">Branches</p>
                </div>
              </div>

              {/* Destinations Collaboration */}
              <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <h3 className="count neutral-1000">
                    {inView && <CountUp end={29} duration={3} />}
                  </h3>
                  <h3 className="neutral-1000">K</h3>
                </div>
                <div className="text-md-start text-center">
                  <p className="text-lg-bold neutral-1000">Destinations</p>
                  <p className="text-lg-bold neutral-1000">Collaboration</p>
                </div>
              </div>

              {/* Years Experience */}
              <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <h3 className="count neutral-1000">
                    {inView && <CountUp end={20} duration={3} />}
                  </h3>
                  <h3 className="neutral-1000">+</h3>
                </div>
                <div className="text-md-start text-center">
                  <p className="text-lg-bold neutral-1000">Years</p>
                  <p className="text-lg-bold neutral-1000">Experience</p>
                </div>
              </div>

              {/* Happy Customers */}
              <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <h3 className="count neutral-1000">
                    {inView && <CountUp end={168} duration={3} />}
                  </h3>
                  <h3 className="neutral-1000">K</h3>
                </div>
                <div className="text-md-start text-center">
                  <p className="text-lg-bold neutral-1000">Happy</p>
                  <p className="text-lg-bold neutral-1000">Customers</p>
                </div>
              </div>

              {/* User Accounts */}
              <div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <h3 className="count neutral-1000">
                    {inView && <CountUp end={15} duration={3} />}
                  </h3>
                  <h3 className="neutral-1000">M</h3>
                </div>
                <div className="text-md-start text-center">
                  <p className="text-lg-bold neutral-1000">User</p>
                  <p className="text-lg-bold neutral-1000">Account</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterDigits;
