import React from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Pages/ProdctDisplay.module.css";

import { products } from "../assets/products.js";

function ProdctDisplay({ match }) {
	const arrIndex = match.params.id; //gets the position in the products array corresponding to that product

	const selectedProduct = {
		name: products[arrIndex].alt,
		img: products[arrIndex].img,
		price: products[arrIndex].price,
	};

	//FIXME - turn input into controlled input on state
	// TODO - style and finish page

	return (
		<div className={styles.productDisplayContainer}>
			<div>
				<h1>{selectedProduct.name}</h1>
				<img src={selectedProduct.img} alt={selectedProduct.name} />
				<span>${selectedProduct.price}</span>
				<div>
					<label htmlFor="quantity">Quantity:</label>
					<input name="quantity" value={1} type="number"></input>
				</div>
				<button>Add to Cart</button>
				<Link to="/shop">Back</Link>
			</div>
		</div>
	);
}

export default ProdctDisplay;
