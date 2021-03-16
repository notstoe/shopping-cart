import React from "react";
import { Link } from "react-router-dom";

import cart from "../assets/cartCheckout.svg";

import styles from "../styles/Pages/Checkout.module.css";

function Checkout() {
	return (
		<div className={styles.checkout}>
			<h1>CHECKOUT</h1>
			<img src={cart} alt="Empty Cart"></img>
			<p>Your cart is empty.</p>
			<Link to="/shop">Back to shop</Link>
		</div>
	);
}

export default Checkout;
