import "react";
import "./banner.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


const Banner = (props)=>{
    return(
       <section className="banner">
            <div className="container">
                <div className="row">
                        <div className="textContact">
                        <h2 className="bannerContact">{props.title}</h2>
                          <li className="iconContact">
                        <Link to="/Home">
                             <FontAwesomeIcon className="color" icon={faHome} />
                        </Link>Home
                        /{props.smtitle}
                          </li>
                        </div>
                </div>
            </div>
            </section>
       
    )
}

export default Banner;