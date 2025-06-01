import "react"
import './Contact.css'
import Banner from "../banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import fac from"../../assets/image/fac (1).png"
import linked from"../../assets/image/linked (1).png"
import inst from"../../assets/image/inst (1).png"

const Contact = () => {
    return(
        <>
          <Banner title="Contact" smtitle="contact"/>
          <section className="contact-us">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-6 ">
                    <form action="">
                          <div className="form-control">
                               <input type="text"placeholder="your name" required/>
                            </div>
                            <div className="form-control">
                               <input type="email"placeholder="email" required/>
                            </div>
                           <div className="form-control">
                               <input type="text"placeholder="phone number" required />
                            </div>
                            <select name="" id="" className="form-control">
                              <option>select Department</option>
                              <option>one</option>
                              <option>tow</option>
                              <option>three</option>
                            </select>
                            <div className="form-control">
                               <textarea type="text"placeholder="message" />
                            </div>
                            <button  className="btn btn-primary">submit</button>
                    </form>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="sid">
                    <div className="overlay">
                      <div>
                      <h3>Contact Us For Any Informations </h3>
                        <li> <FontAwesomeIcon icon={faMap}/>     Location</li>
                      </div>
                    <hr />
                    <div>
                      <h5>2005 Stokes Isle Apt. 896, Venaville 10010, USA</h5>
                      <li><FontAwesomeIcon icon={faEnvelope }/> Email & Phone</li>
                    </div>
                    <hr />
                    <div>
                      <h5>info@yourdomain.com
                      (+68) 120034509</h5>
                      <li><FontAwesomeIcon icon={faGlobe }/>   Follow Us</li>
                    </div>
                    <hr />
                    <div className="iconContact">
                      <li><a href="#"><img src={fac}  /></a></li>
                      <li><a href="#"><img src={inst}  /></a></li>
                      <li><a href="#"><img src={linked}  /></a></li>
                    </div>
                  </div>
                </div>

                    </div>
              </div>

            </div>

          </section>
          <section className="contact-Tow">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                <div className="colOne">
                    <li><FontAwesomeIcon icon={faPhone } /></li>
                    <h1>Contact Number</h1>
                    <h5>+001 123 456 790</h5>
                    <h5>+002 3424 44 00</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                <div className="colTow">
                    <li><FontAwesomeIcon icon={faEnvelope }/></li>
                    <h1>Email Address</h1>
                    <h5>+001 123 456 790</h5>
                    <h5>+002 3424 44 00</h5>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                <div className="colThree">
                    <li><FontAwesomeIcon icon={faMap}/></li>
                    <h1>Address</h1>
                    <h5>+001 123 456 790</h5>
                    <h5>+002 3424 44 00</h5>
                  </div>
                </div>

              </div>

            </div>
          </section>
        </>
    );
};

export default Contact;