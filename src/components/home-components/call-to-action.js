import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalDataContext } from "../../context/context";

const CallToAction = (props) => {

	const { rpdata } = useContext(GlobalDataContext);

    return <div className="cta-area bg-overlay pd-top-118 go-top pd-bottom-120 text-center" style={{ backgroundImage: `url(${rpdata?.stock?.[3]})`}}>
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-8 col-lg-10">
		        <div className="section-title style-white mb-0">
		          <h6 className='text-white'>{rpdata?.dbSlogan?.[4].slogan}</h6>
		          <h2>{rpdata?.dbPrincipal?.name}</h2>
		          <p>{rpdata?.dbHome?.[1].text}</p>
		        </div>
		        <div className="btn-wrap mt-4 pt-3">
		          <Link className="btn btn-base m-2" to="/contact">FREE ESTIMATE</Link>
		          <Link className="btn btn-base  m-2" to="/services">ALL SERVICES</Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }

export default CallToAction