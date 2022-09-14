import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const HomeBlock = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="about-area bg-gray pd-top-120 pd-bottom-120">
      <div className="container">
        <div className="single-about-inner about-line-right bg-white">
          <div className="row no-gutter">
            <div className="col-lg-4 order-lg-12">
              <div
                className="thumb"
                style={{ backgroundImage:`url("${rpdata?.stock?.[0]}")`}}
              />
            </div>
            <div className="col-lg-8 order-lg-1">
              <div className="details">
                <div className="section-title mb-4">
                  <h6>{rpdata?.dbSlogan?.[2].slogan}</h6>
                  <h2>{rpdata?.dbSlogan?.[3].slogan}</h2>
                  <p>
                  {rpdata?.dbHome?.[0].text}
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner">
                        {
                            rpdata?.dbServices?.slice(0,6).map((item, index) => {
                                return (
                                    <li key={index}>
                                        {item.name}
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

export default HomeBlock;
