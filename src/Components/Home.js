import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<div className="homeContent">
			<div className="quote">
				<p>"Better three hours too soon than a minute too late."</p>
				<span> – William Shakespeare</span>
			</div>
			<Link to="/shop" id="shopBtn">
				VISIT THE SHOP
			</Link>
		</div>
	);
}

export default Home;
