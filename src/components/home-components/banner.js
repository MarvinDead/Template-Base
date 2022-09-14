import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalDataContext } from "../../context/context";

const Banner = (props) => {
	const { rpdata } = useContext(GlobalDataContext);

    return  <div className="banner-area banner-area-1 banner-area-bg pt-100" style={{ backgroundImage:`url("${rpdata?.stock?.[1]}")`}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            <p>{rpdata?.dbSlogan?.[0].slogan}</p>
			            <div className="line" />
			            <h2>{rpdata?.dbSlogan?.[2].slogan}</h2>
			          </div>
					  <div className="btn-wrap mt-4 pt-3 text-center"><Link className="btn btn-base mr-2" to="/contact">FREE ESTIMATE</Link></div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }

export default Banner