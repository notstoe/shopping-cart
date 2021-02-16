import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";

function App() {
	return (
		<Router>
			<div className="pageContainer">
				<Nav />
				<div className="content">
					<Switch>
						<Route path="/" component={Home}></Route>
						{/* <Route path="/shop" Component={Shop}></Route> */}
						{/* <Route path="/cart" Component={Cart}></Route> */}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
