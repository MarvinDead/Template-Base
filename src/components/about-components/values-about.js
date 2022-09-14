import React, { useContext } from 'react';
import { GlobalDataContext } from "../../context/context";

const Values = (props) => {

        let publicUrl = process.env.PUBLIC_URL+'/'
		const { rpdata } = useContext(GlobalDataContext);

    return  <div className="service-area mg-top--50">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap style-2 small-padding" style={{backgroundImage: 'url('+publicUrl+'assets/img/service/01.png)'}}>
			          <div className="thumb">
					  <i className='fa fa-medal icon-values' alt="icon"/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Mision</a></h4>
			            <p>{rpdata?.dbValues?.[0].description}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap style-2 small-padding" style={{backgroundImage: 'url('+publicUrl+'assets/img/service/02.png)'}}>
			          <div className="thumb">
					  <i className='fa fa-road icon-values' alt="icon"/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Vision</a></h4>
			            <p>{rpdata?.dbValues?.[1].description}</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap style-2 small-padding" style={{backgroundImage: 'url('+publicUrl+'assets/img/service/03.png)'}}>
			          <div className="thumb">
					  <i className='fa fa-hands icon-values' alt="icon"/>
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Why Choose Us</a></h4>
			            <p>{rpdata?.dbValues?.[2].description}</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }

export default Values