import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Pages/Shop.module.css";
import { motion } from "framer-motion";

import { products } from "../assets/products.js";

function Shop() {
	const shopDisplay = products.map((currentElement, index) => {
		return (
			<div key={index} className={styles.productDisplay}>
				<Link to={`/shop/${index}`}>
					<img src={currentElement.img} alt={currentElement.alt} />
					<h2>${currentElement.price}</h2>
				</Link>
			</div>
		);
	});

	return (
		<motion.div
			className={styles.shopContent}
			initial={{ y: "-40vh" }}
			animate={{ y: 0 }}
			transition={{ type: "spring", duration: 0.3 }}
		>
			<h1>WALL CLOCKS</h1>
			<div>{shopDisplay}</div>
		</motion.div>
	);
}

export default Shop;
