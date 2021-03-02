import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Components/Home.module.css";

function Home() {
	return (
		<div className={styles.homeContent}>
			<div>
				<p>"Better three hours too soon than a minute too late."</p>
				<span> – William Shakespeare</span>
			</div>
			<Link to="/shop">VISIT THE SHOP</Link>
		</div>
	);
}

export default Home;
