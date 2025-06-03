import "react";
import "./Services.css";
import Banner from "../banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      <Banner title="Services" smtitle="services" />

      <section className="section-area section-sp1 services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Diagnostics</h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Treatment</h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Surgery</h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Emergency</h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Vaccine</h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 service">
              <div className="feature-container feature-ba2 feature1">
                <div className="feature-box-xl mb-20">
                  <span className="icon-cell">
                    <FontAwesomeIcon icon={faSyringe} />
                  </span>
                  <div className="icon-content">
                    <h3 className="ttr-title">Qualified Doctors </h3>
                    <p>
                      Phasellus venenatis porta rhoncus. Integer et viverra
                      felis.
                    </p>
                    <a
                      className="btn btn-primary light"
                      href="/react/service-detail"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /* section toe */}
      <section className="serviceTow">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-30 box-one">
              <div className="feature-container feature-bx3">
                <h2>120</h2>
                <h5>Years With You</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30 box-one">
              <div className="feature-container feature-bx3">
                <h2 className="counter text-secondary">400</h2>
                <h5 className="ttr-title">Awards</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30 box-one">
              <div className="feature-container feature-bx3">
                <h2 className="counter text-secondary">250</h2>
                <h5 className="ttr-title">Doctors</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-30 box-one">
              <div className="feature-container feature-bx3">
                <h2 className="counter text-secondary">800</h2>
                <h5 className="ttr-title">Satisfied Client</h5>
                <p>
                  Etiam ante ante, molestie vitae cursus ac, pharetra euismod
                  libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
