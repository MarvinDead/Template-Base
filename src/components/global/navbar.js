import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="navbar-area navbar-area-1">
      {/* navbar top start */}
      <div className="navbar-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-lg-left text-center">
              <ul>
                {rpdata?.dbPrincipal?.phones.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={`tel:+1${item.phone}`}>
                        <p>
                          <i className="fa fa-phone-alt" /> {item.phone}
                        </p>
                      </a>
                    </li>
                  );
                })}
                <li>
                  <p>
                    <i className="fas fa-calendar" />{" "}
                    {rpdata?.dbPrincipal?.workdays?.[0].day}
                  </p>
                </li>
                <li>
                  <p>
                    <i className="fas fa-clock-o" />{" "}
                    {rpdata?.dbPrincipal?.workHours?.[0].hour}
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="topbar-right text-lg-right text-center">
                <li className="social-area">
                  {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                    return (
                      <a href={item.url} target="_blank">
                        <i
                          className={`fab fa-${item.icon}`}
                          aria-hidden="true"
                        />
                      </a>
                    );
                  })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container nav-container bg-black">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-target="#dkt_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => {
                document
                  .querySelector(".navbar-collapse")
                  .classList.toggle("show");
              }}
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img
                src={rpdata?.dbPrincipal?.logo}
                alt="img"
                className="logo-fluid"
              />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="dkt_main_menu">
            <ul className="navbar-nav menu-open text-center text-white">
              <li className="menu-item-has-children current-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="menu-item-has-children current-menu-item">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop">
            <ul>
              {rpdata?.dbPrincipal?.phones.slice(0, 1).map((item, index) => {
                return (
                  <li>
                    <a className="btn btn-base" href={`tel:+1${item.phone}`}>
                      <span className="btn-icon">
                        <i className="fa fa-phone-alt" />
                      </span>{" "}
                      <span className="btn-text">CALL US NOW</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
