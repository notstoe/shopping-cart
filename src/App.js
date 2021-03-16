import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./styles/App.module.css";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ProductDisplay from "./Pages/ProdctDisplay";

function App() {
	const [cartContents, setCartContents] = useState([]);

	function addToCart(order) {
		let newCartContents = cartContents.map((element) => element); //copying array to update state later

		newCartContents.push(order);

		setCartContents(newCartContents);
	}

	return (
		<Router>
			<div className={styles.pageContainer}>
				<Nav />
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
						{/* <Route path="/checkout" Component={Checkout}></Route> */}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
