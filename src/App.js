import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import styles from "./styles/App.module.css";
import { AnimatePresence, motion } from "framer-motion";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDisplay from "./Pages/ProdctDisplay";
import Checkout from "./Pages/Checkout";

function App() {
	const location = useLocation();
	const [cartContents, setCartContents] = useState([]);

	function addToCart(newOrder) {
		let newCartContents = [...cartContents];

		let existingProductKey = newCartContents.findIndex(
			(product) => product.key === newOrder.key
		);

		if (existingProductKey < 0) {
			//case when product doesn't exist in the cart -> findIndex() returned -1
			newCartContents.push(newOrder);
		} else {
			newCartContents[existingProductKey].quantity =
				newCartContents[existingProductKey].quantity + newOrder.quantity;
		}

		setCartContents(newCartContents);
	}

	function handleChange(e) {
		const { name, value } = e.target;

		const productToBeChangedIndex = cartContents.findIndex(
			(arrElement) => arrElement.name === name
		);

		let newCartContents = [...cartContents];
		newCartContents[productToBeChangedIndex].quantity = Math.round(
			Number(value)
		);

		setCartContents(newCartContents);
	}

	function handleBtnCheckout(e) {
		const productName = e.target.offsetParent.childNodes[0].alt;
		const btnText = e.target.textContent;

		const productToBeChangedIndex = cartContents.findIndex(
			(arrElement) => arrElement.name === productName
		);

		let newCartContents = [...cartContents];

		if (btnText === "+") newCartContents[productToBeChangedIndex].quantity += 1;
		if (btnText === "-") {
			if (newCartContents[productToBeChangedIndex].quantity < 2) {
				return;
			} else {
				newCartContents[productToBeChangedIndex].quantity -= 1;
			}
		}
		if (btnText === "x") {
			newCartContents.splice(productToBeChangedIndex, 1);
		}

		setCartContents(newCartContents);
	}

	const homepageVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { type: "tween", delay: 0.2 } },
	};

	return (
		<AnimatePresence>
			<div className={styles.pageContainer}>
				<Nav cartContents={cartContents} />
				<div>
					<Switch location={location} key={location.key}>
						<Route exact path="/">
							<motion.div
								className={styles.homeContainer}
								variants={homepageVariants}
								initial="hidden"
								animate="visible"
							>
								<Home />
							</motion.div>
						</Route>
						<Route exact path="/shop">
							<div className={styles.shopContainer}>
								<Shop />
							</div>
						</Route>
						<Route
							path="/shop/:id"
							render={(routeProps) => (
								<ProductDisplay
									addToCart={addToCart}
									match={routeProps.match}
								/>
							)}
						/>
						<Route
							path="/checkout"
							render={() => (
								<div className={styles.shopContainer}>
									<Checkout
										cartContents={cartContents}
										handleChange={handleChange}
										handleBtnCheckout={handleBtnCheckout}
									/>
								</div>
							)}
						/>
					</Switch>
				</div>
			</div>
		</AnimatePresence>
	);
}

export default App;
