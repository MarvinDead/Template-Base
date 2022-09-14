import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";
import LiveChat from "./liveChat";

const Navigation = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];

const Footer = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="/">
                <img
                  src={rpdata?.dbPrincipal?.logo}
                  className="logo-fluid-footer bg-black"
                  alt="img"
                />
              </Link>
            </div>
            <div className="col-md-8 text-md-left mt-3 mt-md-0">
              <h2 className="text-white">{rpdata?.dbSlogan?.[4].slogan}</h2>
              <ul className="social-area">
                {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.url} target="_blank">
                        <i
                          className={`fab fa-${item.icon} wp-icon`} 
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
      <div className="footer-middle bg-black">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title">About</h4>
                <div className="details">
                  <p>{rpdata?.dbAbout?.[0].text.substring(0, 143) + "..."}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_newsfeed">
                <h4 className="widget-title">Navigation</h4>
                <ul className="go-top">
                  {Navigation.map((item, index) => (
                    <li key={index}>
                      <Link to={item.link}>
                        <span>
                          <i class="fa fa-arrow-right"></i>
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-9">
              <div className="widget widget_subscribe mb-4">
                <h4 className="widget-title">Services</h4>
              </div>
              <div className="widget widget-tags pt-2 go-top">
                <div className="tagcloud mt-0">
                  {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                    return <Link to="/services">{item.name}</Link>;
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <h4 className="widget-title">Contact</h4>
                <div className="details">
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

                  <p>
                    <i className="fas fa-calendar" />{" "}
                    {rpdata?.dbPrincipal?.workdays?.[0].day}
                  </p>
                  <p>
                    <i className="fas fa-clock-o" />{" "}
                    {rpdata?.dbPrincipal?.workHours?.[0].hour}
                  </p>
                  <p>
                    <i className="fas fa-credit-card" />{" "}
                    {rpdata?.dbPrincipal?.paymentMethod}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12 align-self-center text-center">
              <p>
                ©2022, Copy Right By {rpdata?.dbPrincipal?.name}. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
      <LiveChat />
    </footer>
  );
};

export default Footer;
