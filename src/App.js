import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./styles/App.module.css";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDisplay from "./Pages/ProdctDisplay";
import Checkout from "./Pages/Checkout";

function App() {
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

	return (
		<Router>
			<div className={styles.pageContainer}>
				<Nav cartContents={cartContents} />
				<div>
					<Switch>
						<Route exact path="/">
							<div className={styles.homeContainer}>
								<Home />
							</div>
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
									/>
								</div>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
