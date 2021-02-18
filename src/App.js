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
				<div className="content">
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route path="/shop" Component={Shop}></Route>
						{/* <Route path="/checkout" Component={Checkout}></Route> */}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
