import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Components/Shop.module.css";

import { products } from "../assets/products.js";

function Shop() {
	const shopDisplay = products.map((currentElement, index) => {
		return (
			<div key={index}>
				<Link to={`/${index}`}>
					<img src={currentElement.img} alt={currentElement.alt} />
					<h2>${currentElement.price}</h2>
				</Link>
			</div>
		);
	});

	return (
		<div className={styles.shopContent}>
			<h1>WALL CLOCKS</h1>
			<div>{shopDisplay}</div>
		</div>
	);
}

export default Shop;
