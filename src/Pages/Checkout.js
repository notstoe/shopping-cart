import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cart from '../assets/cartCheckout.svg';
import { products } from '../assets/products.js';

import styles from '../styles/Pages/Checkout.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function Checkout({ cartContents, handleChange, handleBtnCheckout }) {
	const [isThereProducts, setIsThereProducts] = useState();
	const [totalPrice, setTotalPrice] = useState();

	function handlePayment() {
		alert('Thanks for visiting!');
	}

	useEffect(() => {
		if (cartContents.length > 0) {
			setIsThereProducts(true);

			const total = cartContents.reduce(
				(accumulator, product) =>
					(accumulator += product.quantity * product.price),
				0
			);

			setTotalPrice(total.toFixed(2));
		}
		if (cartContents.length === 0) setIsThereProducts(false);
	}, [cartContents]);

	const productsVariants = {
		hidden: { opacity: 0, x: '-20vw' },
		visible: {
			opacity: 1,
			x: '0',
			transition: { type: 'tween', duration: 0.4 },
		},
		exit: {
			scale: 0,
			x: '20vw',
			transition: { ease: 'easeInOut' },
		},
	};

	const checkoutComponents = cartContents.map((order, index) => {
		return (
			<motion.div
				key={order.name}
				className={styles.singleOrder}
				variants={productsVariants}
				initial='hidden'
				visible='visible'
				exit='exit'
			>
				<img src={products[order.key].img} alt={order.name} />
				<section>
					<h2>{order.name}</h2>
					<div>
						<input
							name={order.name}
							type='number'
							min='1'
							value={order.quantity}
							onChange={handleChange}
						/>
						<span onClick={handleBtnCheckout}>-</span>
						<span onClick={handleBtnCheckout}>+</span>
						<span onClick={handleBtnCheckout}>x</span>
					</div>
					<h3>${order.price}</h3>
				</section>
			</motion.div>
		);
	});

	const checkoutVariants = {
		hidden: { y: '-40vh' },
		visible: {
			y: 0,
			transition: { type: 'spring', duration: 0.3 },
		},
		exit: { opacity: 0 },
	};

	const checkoutEmptyVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { delay: 0.1 } },
		exit: { opacity: 0 },
	};

	return (
		<>
			<head>
				<title>Clocky Shop | Checkout</title>
				<meta
					property='og:url'
					content='https://notstoe.github.io/shopping-cart/checkout'
				/>
			</head>
			<motion.div
				className={styles.checkout}
				variants={checkoutVariants}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				<h1>CHECKOUT</h1>
				{isThereProducts ? (
					<div className={styles.checkoutFull}>
						<AnimatePresence>{checkoutComponents}</AnimatePresence>
						<section>
							<span>TOTAL: </span>
							<span>${totalPrice}</span>
						</section>
						<div>
							<button onClick={handlePayment}>Proceed to Payment</button>
							<Link to='/shopping-cart/shop'>Back</Link>
						</div>
					</div>
				) : (
					<motion.div
						className={styles.checkoutEmpty}
						variants={checkoutEmptyVariants}
					>
						<img src={cart} alt='Empty Cart' />
						<p>Your cart is empty.</p>
						<Link to='/shopping-cart/shop'>Back to shop</Link>
					</motion.div>
				)}
			</motion.div>
		</>
	);
}

export default Checkout;
