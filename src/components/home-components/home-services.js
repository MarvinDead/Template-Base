import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const HomeServices = (props) => {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <div className="blog-area pd-top-20 pd-bottom-50 go-top">
      <div className="container">
        <div className="section-title text-center">
          <h6>{rpdata?.dbPrincipal?.name}</h6>
          <h2>Our Services</h2>
        </div>
        <div className="row justify-content-center">
          {rpdata?.dbServices?.slice(0,6).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="single-product-wrap style-bottom-radius">
                  <div className="thumb">
                    <img
                      src={item.description[0].img}
                      alt={item.name}
                      className="img-service-card"
                    />
                  </div>
                  <div className="product-details-inner">
                    <h4>
                      <Link to="/services">{item.name}</Link>
                    </h4>
                    <p>
                      {item.description[0].text.substring(0, 100)+ "..."}
                    </p>
                    <Link className="btn btn-base read-more" to="/services">
                      <i className="la la-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
