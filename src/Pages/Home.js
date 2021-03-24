import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import styles from "../styles/Pages/Home.module.css";

function Home() {
	return (
		<motion.div
			className={styles.homeContent}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", delay: 0.2 }}
		>
			<h1>
				Order your exclusive <span>clock</span> with us today!
			</h1>
			<div>
				<p>"Better three hours too soon than a minute too late."</p>
				<span> – William Shakespeare</span>
			</div>
			<Link to="/shop">VISIT THE SHOP</Link>
		</motion.div>
	);
}

export default Home;
