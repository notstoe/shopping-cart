import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import styles from "./styles/App.module.css";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

function App() {
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
						<Route path="/shop">
							<div className={styles.shopContainer}>
								<Shop />
							</div>
						</Route>
						{/* <Route path="/checkout" Component={Checkout}></Route> */}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
