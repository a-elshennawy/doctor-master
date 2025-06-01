import  'react';
import './Home.css';
import hederImg from "../assets/image/header.png";
import plus from"../assets/image/plas.png";
import doc2 from"../assets/image/doc2.jpg"
import banner from"../assets/image/banner.jpg"
import doc3 from '../assets/image/doc3.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCar, faHeart,  faProcedures, faSquare, faSyringe } from '@fortawesome/free-solid-svg-icons';
import Work from '../component/working/Work';
import Books from '../component/books/Books';
const Home = () => {
  return (
    <div>
          <div>
           <header>
             <div className='container'> 
               <div className='row'>
                  <div className='col-md-6 col-lg-6'>
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button href="#"><a href="#">Read more</a></button>
                    <img className='plus'  src={plus} alt="" />
                </div>
                <div className='col-md-6 col-lg-6'>
                    <div className='header-box'>
                    <img src={hederImg} />
                    <FontAwesomeIcon icon={faSquare} />
                    </div>
                  </div>
                </div>
             </div>
           </header>
    <section className='homeTow'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 col-sm-12 sectionOne'>
                <div className='row '>
                <div className='col-sm-12 col-md-6 col-lg-6 rowTow'>
                     
                     <div className='col-sm-12 col-md-6 col-lg-6 docOne'>
                         <img src={banner} />
                     </div>
   
                     <div className='col-sm-12 col-md-6 col-lg-6 docThree'>
                          <img src={doc3} />
                     </div>
                   </div>
                  <div className='col-sm-12 col-md-6 col-lg-6'>
                  <div className='col-sm-12 col-md-6 col-lg-6 docTow'>
                         <img src={doc2} />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 Experience'>
                    <span></span>
                         <h1>20</h1>
                         <p>Year Experience</p>
                    </div>
                  </div>
           </div>
      </div>
              <div className='col-lg-6 col-md-12 col-sm-12 aboutUsTow'>
                <h4>About Us</h4>
                <h1>The Great Place Of Medical Hospital Center</h1>
                <p>We provide the special tips and advice’s of heath 
                  care treatment and high level of best technology
                   involve in the our hospital.</p>
        
                <div className='col-lg-12 col-sm-12 font'>
                  <div className='icon'>
                    <li><FontAwesomeIcon icon={faCar} />Emergency Help</li>
                  </div>
                  <div className='icon'>
                    <li><FontAwesomeIcon icon={faProcedures} />Qualified Doctors</li>
                  </div>
                  <div className='icon'>
                    <li><FontAwesomeIcon icon={faHeart} />Best Professionals </li>
                  </div>
                  <div className='icon'>
                    <li><FontAwesomeIcon icon={faSyringe} />Medical Treatment </li>
                  </div>
                    
                </div>
                    <button className='btn btn-primary'>Red more</button>
              </div>


          </div>

        </div>
    </section>
    <Work/>
    <Books/>
      </div>
    </div>
  )
}

export default Home

