import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Pages/ProdctDisplay.module.css";
import { motion } from "framer-motion";

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

	const productDisplayVariants = {
		hidden: { y: "-30vh" },
		visible: {
			y: 0,
			transition: { type: "spring", duration: 0.3 },
		},
		exit: { opacity: 0 },
	};

	const btnVariants = {
		hidden: { x: "-100vw" },
		visible: {
			x: 0,
			transition: { type: "spring", mass: 0.5, damping: 8 },
		},
	};

	return (
		<div className={styles.productDisplayContainer}>
			<motion.div
				variants={productDisplayVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
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
						disabled={isAddedToCart}
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
						<motion.div variants={btnVariants} className={styles.checkoutLink}>
							<Link to="/checkout">Proceed to Checkout</Link>
						</motion.div>
						<Link className={styles.backLink} to="/shop">
							Back
						</Link>
					</>
				)}
			</motion.div>
		</div>
	);
}

export default ProdctDisplay;
