import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cartCheckout.svg";
import { products } from "../assets/products.js";

import styles from "../styles/Pages/Checkout.module.css";

function Checkout({ cartContents }) {
	const [isThereProducts, setIsThereProducts] = useState();

	useEffect(() => {
		if (cartContents.length > 0) setIsThereProducts(true);
		if (cartContents.length === 0) setIsThereProducts(false);
	}, [cartContents]);

	return (
		<div className={styles.checkout}>
			<h1>CHECKOUT</h1>
			{isThereProducts ? (
				<div className={styles.checkoutFull}>
					<div>
						<img src={products[0].img} alt={products[0].alt} />
						<section>
							<h2>Back to the Future</h2>
							<div>
								<input type="number" value="1" />
								<span>-</span>
								<span>+</span>
								<span>x</span>
							</div>
							<h3>$39,99</h3>
						</section>
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
