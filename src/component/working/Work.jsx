import "react";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Work = () => {
  return (
    <div>
      <section className="work">
        <div className="container">
          <div className="headertext">
            <p>Working Process</p>
            <h1>How we work?</h1>
          </div>
          <div className="row rowWork">
            <div className="col-sm-12 col-md-6 col-lg-4 boxWork">
              <h1>01</h1>
              <h2>Make Appointmnet</h2>
              <p className="pRowWork">
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="/react/blog-details"
              >
                View More
                <FontAwesomeIcon icon={faRightFromBracket} />
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 boxWork position">
              <h1 className="colorChang">02</h1>
              <h2 className="colorChang"> Take Treatment</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="/react/blog-details"
              >
                View More
                <FontAwesomeIcon icon={faRightFromBracket} />
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 boxWork">
              <h1>03</h1>
              <h2>Registration</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <a
                className="btn btn-outline-primary btn-sm"
                href="/react/blog-details"
              >
                View More
                <FontAwesomeIcon icon={faRightFromBracket} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
