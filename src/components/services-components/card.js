import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

const Card = ({service_image_num,ser_title, ser_description, event_click}) => {
    const { rpdata } = useContext(GlobalDataContext);
   return (
      <>
      <div className="col-md-4">
                    <div className="single-product-wrap style-2">
                      <div className="thumb">
                        <img
                          src={service_image_num}
                          alt="img"
                          className='img-service-card'
                        />
                        <div className="product-wrap-details">
                          <div className="media">
                            <div className="author">
                              <img
                                src={rpdata.dbPrincipal.favicon}
                                alt="img"
                                className="logo-services-card"
                              />
                            </div>
                            <div className="media-body">
                              <h6>
                                <Link to="/contact">{rpdata.dbPrincipal.name}</Link>
                              </h6>
                            </div>
                            <a className="fav-btn float-right" href={`tel:+1${rpdata.dbPrincipal.phones[0].phone}`}>
                              <i className="fas fa-phone-volume" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="product-details-inner">
                        <h4>
                          <Link to="/services" onClick={event_click}>{ser_title}</Link>
                        </h4>
                        <p>{ser_description.substring(0,100) + "..."}</p>
                        <ul className="meta-inner">
                          <li>
                            <Link to="/services"
                            onClick={event_click}
                            >MORE INFO</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
      </>
   );
};

export default Card;