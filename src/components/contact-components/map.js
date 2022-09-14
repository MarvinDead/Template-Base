/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";

const Map = (props) => {
 const { rpdata } = useContext(GlobalDataContext);
  return (
    <div>
      <div className="contact-page-map mg-top-100">
        <h2 className="text-center">We Cover {rpdata?.dbPrincipal?.miles} Miles Around {rpdata?.dbPrincipal?.location?.[0].address}</h2>
        <iframe src={rpdata?.dbPrincipal?.location?.[0].url} />
      </div>
    </div>
  )
}

export default Map
