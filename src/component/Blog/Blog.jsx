import 'react'
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faTimes,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Banner from '../banner/Banner';
import docth from "../../assets/image/doc-th.jpg";
import doctorTow from '../../assets/image/download (5).jpg';
const Blog = () => {
    return(
        <>
         <Banner title="Blog" smtitle="blog"/>
         <section className='sectionBlog'>
            <div className="container">
                <div className='row rowBlog'>
                <div className="col-xl-4 col-md-4 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img  src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021 
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} />
                                         </a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More 
                                        <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                            <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} />21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} /> 21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More 
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                   <div className="col-xl-4 col-md-6 boxDoc">
                            <div className="blog-card mb-30">
                                <div className="post-media">
                                    <a href="/react/blog-details"><img src={docth} alt=""/></a>
                                </div>
                                <div className="post-info">
                                        <ul className="post-meta">
                                            <li className="author">
                                                <a href="/react/blog-details"> <img className='doctor' src={doctorTow} alt="" />John deo</a>
                                            </li>
                                            <li className="date">
                                            <FontAwesomeIcon icon={faTimes} /> 21 July 2021
                                            </li>
                                        </ul>
                                        <h4 className="post-title"><a href="/react/blog-details">Dental Care for Women is very important</a></h4>
                                        <a className="btn btn-outline-primary btn-sm" href="/react/blog-details">Read More
                                         <FontAwesomeIcon icon={faRightFromBracket} /></a>
                                </div>
                         </div>
                   </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Blog