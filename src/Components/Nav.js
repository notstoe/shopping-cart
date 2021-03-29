import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import styles from "../styles/Components/Nav.module.css";

function Nav({ cartContents }) {
	const [totalQuantity, setTotalQuantity] = useState(0);

	useEffect(() => {
		let newQuantity = 0;

		cartContents.forEach((product) => {
			newQuantity += product.quantity;
		});

		setTotalQuantity(newQuantity);
	}, [cartContents]);

	const navVariants = {
		hidden: { y: "-100vh" },
		visible: {
			y: 0,
			transition: {
				type: "spring",
				duration: 1,
				delay: 0.4,
			},
		},
	};

	return (
		<motion.div
			className={styles.navBar}
			variants={navVariants}
			initial="hidden"
			animate="visible"
		>
			<div>
				<Link to="/shopping-cart/">CLOCKY</Link>
			</div>
			<ul>
				<li>
					<Link to="/shopping-cart/">Home</Link>
				</li>
				<li>
					<Link to="/shopping-cart/shop">Shop</Link>
				</li>
				<li>
					<Link className={styles.cartContainer} to="/shopping-cart/checkout">
						<svg x="0px" y="0px" viewBox="0 0 476.944 476.944">
							<g>
								<path
									d="M84.176,379.875c-26.762,0-48.535,21.772-48.535,48.534s21.772,48.534,48.535,48.534c26.762,0,48.534-21.772,48.534-48.534
									S110.938,379.875,84.176,379.875z M84.176,446.944c-10.22,0-18.535-8.314-18.535-18.534s8.314-18.534,18.535-18.534
									c10.22,0,18.534,8.314,18.534,18.534S94.396,446.944,84.176,446.944z"
								/>
								<path
									d="M342.707,379.875c-26.762,0-48.534,21.772-48.534,48.534s21.772,48.534,48.534,48.534
									c26.762,0,48.535-21.772,48.535-48.534S369.469,379.875,342.707,379.875z M342.707,446.944c-10.22,0-18.534-8.314-18.534-18.534
									s8.314-18.534,18.534-18.534c10.22,0,18.535,8.314,18.535,18.534S352.927,446.944,342.707,446.944z"
								/>
								<path
									d="M413.322,0l-9.835,60H1.999l28.736,175.88c4.044,24.67,26.794,43.995,51.794,43.995h284.917l-6.557,40H50.642v30h335.73
									L438.804,30h36.141V0H413.322z M372.363,249.875H82.529c-10.174,0-20.543-8.808-22.188-18.841L37.298,90h361.271L372.363,249.875z"
								/>
							</g>
						</svg>
						<span>{totalQuantity}</span>
					</Link>
				</li>
			</ul>
		</motion.div>
	);
}

export default Nav;
