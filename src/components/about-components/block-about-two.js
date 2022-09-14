import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

const BlockAboutTwo = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div
      className="testimonial-area pd-top-118 pd-bottom-120 bg-overlay"
      style={{ backgroundImage: `url(${rpdata?.stock?.[3]})` }}
    >
      <div className="bg-overlay-wrap">
        <div className="container">
          <div className="section-title style-white text-center">
            <h6>{rpdata?.dbSlogan?.[1].slogan}</h6>
            <h2>{rpdata?.dbSlogan?.[5].slogan}</h2>
            <p>{rpdata?.dbAbout?.[1].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockAboutTwo;
