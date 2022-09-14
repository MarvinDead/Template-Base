import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../context/context";

const RecentProjects = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className="product-area pd-top-118 pd-bottom-90 go-top">
      <div className="container">
        <div className="section-title text-center">
          <h2>Recent Projects</h2>
        </div>
        <div className="row">
          {rpdata?.gallery?.slice(0,6).map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6">
                <div className="single-category-product-wrap">
                  <div className="thumb">
                    <img
                      src={item}
                      alt="img"
                    />
                  </div>
                  <div className="single-category-product-details">
                    <Link className="btn btn-base" to="/gallery">
                      All Projects
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

export default RecentProjects;
