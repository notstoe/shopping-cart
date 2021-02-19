import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Shop from "./Components/Shop";

function App() {
	return (
		<Router>
			<div className="pageContainer">
				<Nav />
				<div className="main">
					<Switch>
						<Route exact path="/">
							<div className="homeContainer">
								<Home />
							</div>
						</Route>
						<Route path="/shop">
							<div className="shopContainer">
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
