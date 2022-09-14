import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import Form from "./form"
import Map from "./map"


const ContactForm = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="contact-page-area pd-top-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
            <div className="contact-details-inner mng-box-shadow">
              <h4>{rpdata?.dbSlogan?.[5].slogan}</h4>
              <p>{rpdata?.dbValues?.[0].description}</p>
              <div className="row">
                <div className="col-md-12">
                  <div className="contact-single-list">
                    <h5>Contact Info</h5>
                    <ul>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        {rpdata?.dbPrincipal?.location?.[0].address}
                      </p>
                      
                        {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                          return (
                            <p key={index}>
                            <a href={`tel:+1${item.phone}`}>
                              <i className="fas fa-phone-volume" />
                              {item.phone}
                            </a>
                            </p>
                          );
                        })}
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="contact-single-date">
                  <p>
                    <i className="fas fa-calendar" />{" "}
                    {rpdata?.dbPrincipal?.workdays?.[0].day}
                  </p>
                  <p>
                    <i className="fas fa-clock-o" />{" "}
                    {rpdata?.dbPrincipal?.workHours?.[0].hour}
                  </p>
                  </div>
                </div>
                <div className="col-md-6 align-self-center text-md-right">
                  <ul className="social-area style-3">
                    {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                      return (
                        <li key={index}>
                          <a href={item.url} target="_blank">
                            <i
                              className={`fab fa-${item.icon}`}
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <Form/>
          </div>
        </div>
      </div>
     <Map/>
    </div>
  );
};

export default ContactForm;
