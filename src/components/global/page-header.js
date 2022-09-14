import React from "react";
import { Link } from "react-router-dom";

const Page_header = ({Subheader, headertitle, bgimg}) => {
	return (
		<div
		className="breadcrumb-area bg-overlay-2"
		style={{ backgroundImage: `url("${bgimg}")`, paddingTop: "250px" }}
	  >
		<div className="container">
		  <div className="breadcrumb-inner">
			<div className="section-title text-center">
			  <h2 className="page-title">{headertitle}</h2>
			  <ul className="page-list">
				<li>
				  <Link to="/">Home</Link>
				</li>
				<li>{Subheader}</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	);
 };

export default Page_header;
