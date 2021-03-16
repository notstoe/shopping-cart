import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Pages/ProdctDisplay.module.css";

import { products } from "../assets/products.js";

function ProdctDisplay({ match }) {
	const arrIndex = match.params.id; //gets the index position in the products.js array corresponding to that product

	const selectedProduct = {
		name: products[arrIndex].alt,
		img: products[arrIndex].img,
		price: products[arrIndex].price,
	};

	const [quantity, setQuantity] = useState(1);

	function handleChangeQuantity(e) {
		const { value } = e.target;
		setQuantity(Math.round(Number(value)));
	}

	return (
		<div className={styles.productDisplayContainer}>
			<div>
				<h1>{selectedProduct.name}</h1>
				<img src={selectedProduct.img} alt={selectedProduct.name} />
				<span>${selectedProduct.price}</span>
				<div>
					<label htmlFor="quantity">Quantity:</label>
					<input
						name="quantity"
						type="number"
						min="1"
						value={quantity}
						onChange={handleChangeQuantity}
					></input>
				</div>
				<button>Add to Cart</button>
				<Link to="/shop">Back</Link>
			</div>
		</div>
	);
}

export default ProdctDisplay;
