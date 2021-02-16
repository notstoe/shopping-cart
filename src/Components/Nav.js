import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
	return (
		<div className="navBar">
			<Link to="/" id="logo">
				CLOCKY
			</Link>
			<ul className="navBarLinks">
				<li>
					<Link className="links" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="links" to="/shop">
						Shop
					</Link>
				</li>
				<li>
					<Link className="links" to="/cart">
						Cart
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default Nav;
