import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

const Counter = (props) => {
  const { rpdata } = useContext(GlobalDataContext);

  let publicUrl = process.env.PUBLIC_URL + "/";

  return (
    <div
      className="couner-area bg-overlay pd-top-118 pd-bottom-120"
      style={{ background: "url(" + publicUrl + "assets/img/other/6.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="single-counter-inner text-center">
              <h2 className="counter">{rpdata?.dbPrincipal?.exprYears}</h2>
              <p>Years Of Experience</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-counter-inner text-center">
              <h2 className="counter">100<span>%</span></h2>
              <p>Professionalism</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-counter-inner text-center">
              <h2 className="counter">{rpdata?.dbPrincipal?.miles}<span>Miles</span></h2>
              <p>Around {rpdata?.dbPrincipal?.location?.[0].address}</p>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="single-counter-inner text-center">
              <h2 className="counter">100<span>%</span></h2>
              <p>On Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
