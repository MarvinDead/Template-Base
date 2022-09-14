import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const HomeAbout = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="about-area bg-gray pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="single-about-inner about-line-right bg-white">
          <div className="row no-gutter">
            <div className="col-lg-4 order-lg-12">
              <div
                className="thumb"
                style={{ backgroundImage:`url("${rpdata?.stock?.[9]})"`}}
              />
            </div>
            <div className="col-lg-8 order-lg-1">
              <div className="details">
                <div className="section-title mb-4">
                  <h6>{rpdata?.dbSlogan?.[1].slogan}</h6>
                  <h2>{rpdata?.dbSlogan?.[4].slogan}</h2>
                  <p>
                  {rpdata?.dbAbout?.[0].text}
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner">
                        {
                            rpdata?.dbAbout?.[0].list.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item}
                                    </li>
                                )
                            }
                            )
                        }
                    </ul>
                  </div>
                </div>
                <Link className="btn btn-base" to="/contact">
                  FREE ESTIMATE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
