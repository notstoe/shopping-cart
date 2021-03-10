import React from "react";

import styles from "../styles/Pages/ProdctDisplay.module.css";

import { products } from "../assets/products.js";

function ProdctDisplay({ match }) {
	const arrIndex = match.params.id; //gets the position in the products array corresponding to that product

	const selectedProduct = {
		name: products[arrIndex].alt,
		img: products[arrIndex].img,
		price: products[arrIndex].price,
	};

	// TODO - style and finish page

	return (
		<div className={styles.productDisplayContainer}>
			<h1>{selectedProduct.name}</h1>
			<img src={selectedProduct.img} alt={selectedProduct.name} />
			<span>{selectedProduct.price}</span>
		</div>
	);
}

export default ProdctDisplay;
