import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cartCheckout.svg";
import { products } from "../assets/products.js";

import styles from "../styles/Pages/Checkout.module.css";

function Checkout({ cartContents, handleChange, handleBtnCheckout }) {
	const [isThereProducts, setIsThereProducts] = useState();
	const [totalPrice, setTotalPrice] = useState();

	useEffect(() => {
		if (cartContents.length > 0) {
			setIsThereProducts(true);

			const total = cartContents.reduce(
				(accumulator, product) =>
					(accumulator += product.quantity * product.price),
				0
			);

			setTotalPrice(total.toFixed(2));
		}
		if (cartContents.length === 0) setIsThereProducts(false);
	}, [cartContents]);

	const checkoutComponents = cartContents.map((order, index) => {
		return (
			<div key={index} className={styles.singleOrder}>
				<img src={products[order.key].img} alt={order.name} />
				<section>
					<h2>{order.name}</h2>
					<div>
						<input
							name={order.name}
							type="number"
							min="1"
							value={order.quantity}
							onChange={handleChange}
						/>
						{/* TODO - add functionality to the buttons */}
						<span onClick={handleBtnCheckout}>-</span>
						<span onClick={handleBtnCheckout}>+</span>
						<span onClick={handleBtnCheckout}>x</span>
					</div>
					<h3>${order.price}</h3>
				</section>
			</div>
		);
	});

	return (
		<div className={styles.checkout}>
			<h1>CHECKOUT</h1>
			{isThereProducts ? (
				<div className={styles.checkoutFull}>
					{checkoutComponents}
					<section>
						<span>TOTAL: </span>
						<span>${totalPrice}</span>
					</section>
					<div>
						<button>Proceed to Payment</button>
						<Link to="/shop">Back</Link>
					</div>
				</div>
			) : (
				<div className={styles.checkoutEmpty}>
					<img src={cart} alt="Empty Cart" />
					<p>Your cart is empty.</p>
					<Link to="/shop">Back to shop</Link>
				</div>
			)}
		</div>
	);
}

export default Checkout;
