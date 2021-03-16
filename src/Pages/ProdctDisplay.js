import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Pages/ProdctDisplay.module.css";

import { products } from "../assets/products.js";

function ProdctDisplay({ match, addToCart }) {
	const arrIndex = match.params.id; //gets the index position in the products.js array corresponding to that product

	const selectedProduct = {
		name: products[arrIndex].alt,
		img: products[arrIndex].img,
		price: products[arrIndex].price,
	};

	const [quantity, setQuantity] = useState(1);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	function handleChangeQuantity(e) {
		const { value } = e.target;
		setQuantity(Math.round(Number(value)));
	}

	function handleBtnClick() {
		addToCart({
			key: arrIndex, //sending index position on the products.js array to easily retrieve img later
			name: selectedProduct.name,
			quantity: quantity,
			price: selectedProduct.price,
		});

		setIsAddedToCart(true);
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

				{!isAddedToCart ? (
					<>
						<button onClick={handleBtnClick}>Add to Cart</button>
						<Link className={styles.backLink} to="/shop">
							Back
						</Link>
					</>
				) : (
					<>
						<Link className={styles.checkoutLink} to="/checkout">
							Proceed to Checkout
						</Link>
						<Link className={styles.backLink} to="/shop">
							Back
						</Link>
					</>
				)}
			</div>
		</div>
	);
}

export default ProdctDisplay;
