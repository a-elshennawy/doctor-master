import  'react';
import './Footer.css'; 
// import "../../idex.css" 
import "../../../src/index.css"
import footerLog from "../../assets/image/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import fac from"../../assets/image/fac (1).png"
import linked from"../../assets/image/linked (1).png"
import inst from"../../assets/image/inst (1).png"
import tewt from"../../assets/image/tewt (1).png"
const Footer = () => {
  return (
 
      <div className='container'> 
      <hr />
        <div id='footerRow' className='row'> 
            <div  className='col-md-3 col-sm-6 '>
                <img src={footerLog} className='imgFooter'/>
                <p id='pFooter'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                     dolore smod tempor incididunt ut labore et</p>

                     <div id='footer-contact' >
                           <div id='footer-icon'>
                           <FontAwesomeIcon icon={faPhone} id='font'/>
                           </div>
                           <div >
                             <h3 id='footer-text'>Contact Us</h3>
                             <h1 id='footer-text'>+01 123 456 7890</h1>
                           </div>
                           </div>
                      </div>
            <div id='headF' className='col-md-3 col-sm-6  '>
              <h2 id='headFooter'> Quick Links</h2>
                <ul>
                  <li id='footerKnow'><a href="#"></a>About Us</li>
                  <li id='footerKnow'><a href="#"></a>Services</li>
                  <li id='footerKnow'><a href="#"></a>Booking</li>
                  <li id='footerKnow'><a href="#"></a>Faqs</li>
                  <li id='footerKnow'><a href="#"></a>Blogs</li>
                  <li id='footerKnow'><a href="#"></a>Out Team</li>
                </ul>
            </div>
   
            <div className='col-md-3 col-sm-6 '>
            <h2 id='headFooter'>Our Service</h2>
                <ul>
                  <li id='footerKnow'><a href="#"></a>Dental Care</li>
                  <li id='footerKnow'><a href="#"></a>Cardiac Clinic</li>
                  <li id='footerKnow'><a href="#"></a>Massege Therapy</li>
                  <li id='footerKnow'><a href="#"></a>Cardiology</li>
                  <li id='footerKnow'><a href="#"></a>Precise Diagnosis</li>
                  <li id='footerKnow'><a href="#"></a>Abmbulance Services</li>
                </ul>
            </div>
            






            <div className='col-md-3 col-sm-6 '>
              <h2 id='headFooter'>Subcribe</h2>
              <from id="form-input">
                <input id='input-one' type="text"/>
                <button id='input-tow' type="submit" className='btn btn-primary' >Submit</button>
              </from>
              <ul id='icon-FOOTER'>
                <li><a href="#"><img src={fac}  /></a></li>
                <li><a href="#"><img src={tewt}  /></a></li>
                <li><a href="#"><img src={inst}  /></a></li>
                <li><a href="#"><img src={linked}  /></a></li>
              </ul>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12 col-sm-12 '>
              <hr />
              <h6 id='hrFooter'>Copyright © 2023 Design & Developed by ThemeTrades</h6>
            </div>
        </div>
       </div> 

  )
}

export default Footer
