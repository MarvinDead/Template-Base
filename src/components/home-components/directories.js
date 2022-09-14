import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const Directories = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <div
        className="client-area client-area-pd bg-overlay pd-top-118"
        style={{ backgroundImage: `url(${rpdata?.stock?.[2]})` }}
      >
        <div className="container">
          <div className="row justify-content-center text-lg-left text-center">
            <div className="col-lg-9">
              <div className="section-title style-white mb-0">
                <h6>{rpdata?.dbSlogan?.[6].slogan}</h6>
                <h2>{rpdata?.dbSlogan?.[3].slogan}</h2>
              </div>
            </div>
            <div className="col-lg-3 align-self-end text-lg-right mt-4 mt-lg-0 go-top">
              <Link className="btn btn-base" to="/contact">
                FREE ESTIMATE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="pd-top-100 text-center">Find Us</h2>
        <div className="row justify-content-center pd-top-20">
          {rpdata?.dbSocialMedia?.directorios.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url} target="_blank">
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })}
          {rpdata?.dbSocialMedia?.redes.map((item, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 text-center content-directorios"
                key={index}
              >
                <a href={item.url} target="_blank">
                  <img src={item.image}></img>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Directories;
